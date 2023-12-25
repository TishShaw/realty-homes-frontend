import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';

// Combine your reducers
const rootReducer = combineReducers({
	auth: authReducer,
	// Include other reducers here if you have any
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'], // Specify which reducer you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST'],
			},
		}),
});

const persistor = persistStore(store);

export { store, persistor };
