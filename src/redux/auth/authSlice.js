import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://realty-homes-4290f3fd1ed3.herokuapp.com';

export const registerUser = createAsyncThunk(
	'/register',
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_URL}/register/`, userData);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const loginUser = createAsyncThunk(
	'/login',
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_URL}/api/token/`, userData);

			if (response.data) {
				localStorage.setItem('userToken', JSON.stringify(response.data));
			}
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const addFavorite = createAsyncThunk(
	'auth/addFavorite',
	async ({ listing, accessToken }, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${API_URL}/api/user/add-favorite/${listing.id}/`,
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type': 'application/json',
					},
				}
			);

			return listing;
		} catch (error) {
			if (error.response.status === 401) {
				const newAccessToken = await refreshToken();
				console.log('New access token:', newAccessToken);
				if (newAccessToken) {
					try {
						const response = await axios.post(
							`${API_URL}/api/user/remove-favorite/${listing.id}/`,

							{
								headers: {
									Authorization: `Bearer ${newAccessToken}`,
									'Content-Type': 'application/json',
								},
							}
						);
						return listing.id;
					} catch (error) {
						console.log('Second error: ', error.message);
					}
				} else {
					return rejectWithValue(error.response.data);
				}
			}
		}
	}
);

export const removeFavorite = createAsyncThunk(
	'auth/removeFavorite',
	async ({ listing, accessToken }, { rejectWithValue }) => {
		if (listing.id) {
			const response = await axios.delete(
				`${API_URL}/api/user/remove-favorite/${listing.id}/`,

				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						'Content-Type': 'application/json',
					},
				}
			);

			return listing.id;
		} else {
			const newAccessToken = await refreshToken();
			if (newAccessToken) {
				try {
					const response = await axios.delete(
						`${API_URL}/api/user/remove-favorite/${listing.id}/`,
						{},
						{
							headers: {
								Authorization: `Bearer ${newAccessToken}`,
								'Content-Type': 'application/json',
							},
						}
					);
					return listing.id;
				} catch (error) {
					console.log('Second error: ', error.message);
				}
			} else {
				console.log('No new token');
			}
		}
	}
);

const refreshToken = async () => {
	const token = localStorage.getItem('userToken');
	if (!token) {
		return;
	}

	const refreshToken = JSON.parse(token).refresh;
	try {
		const response = await axios.post(`${API_URL}/api/token/refresh/`, {
			refresh: refreshToken,
		});
		const newTokens = response.data;
		localStorage.setItem('userToken', JSON.stringify(newTokens));
		return newTokens;
	} catch (error) {
		console.error('Error refreshing token:', error);
	}
};

export const fetchUserData = createAsyncThunk(
	'auth/fetchUserData',
	async (accessToken, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_URL}/api/user/`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		logout: (state) => {
			state.user = null;
			localStorage.removeItem('userToken');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		// Handle login
		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		// Handle fetching user data
		builder.addCase(fetchUserData.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchUserData.fulfilled, (state, action) => {
			state.isLoading = false;

			state.user = action.payload;
		});
		builder.addCase(fetchUserData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		// Handle add favorite
		builder.addCase(addFavorite.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(addFavorite.fulfilled, (state, action) => {
			state.isLoading = false;
			if (
				!state.user.userprofile.favorites.some(
					(fav) => fav.id === action.payload.id
				)
			) {
				state.user.userprofile.favorites.push(action.payload);
			}
		});
		builder.addCase(addFavorite.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});

		// Handle remove favorite
		builder.addCase(removeFavorite.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(removeFavorite.fulfilled, (state, action) => {
			state.isLoading = false;

			if (state.user && state.user.userprofile) {
				state.user.userprofile.favorites =
					state.user.userprofile.favorites.filter(
						(fav) => fav.id !== action.payload
					);
			}
		});
		builder.addCase(removeFavorite.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
