import React from 'react';
import { useDispatch } from 'react-redux';
import {
	loginUser,
	registerUser,
	fetchUserData,
} from '../redux/auth/authSlice';
import { useFormik } from 'formik';
import Modal from 'react-modal';
import thumbnail from '../assets/3651807.png';
import { registerValidationSchema, loginValidationSchema } from '../schemas';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		height: '500px',
		transform: 'translate(-50%, -50%)',
		borderRadius: '25px',
		backgroundColor: '#F9F9F9',
		zIndex: '500px',
	},
};

const AuthModal = ({ modalIsOpen, setIsOpen, isLogin, setIsLogin }) => {
	const dispatch = useDispatch();

	const { values, errors, touched, handleBlur, handleChange } = useFormik({
		initialValues: isLogin
			? { email: '', password: '' }
			: {
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					confirmPassword: '',
			  },
		validationSchema: isLogin
			? loginValidationSchema
			: registerValidationSchema,
		onSubmit: (values) => {
			if (isLogin) {
				dispatch(
					loginUser({ username: values.email, password: values.password })
				);

				const token = JSON.parse(localStorage.getItem('user'));

				dispatch(fetchUserData(token));

				closeModal();
			} else {
				dispatch(
					registerUser({
						username: values.email,
						first_name: values.firstName,
						last_name: values.lastName,
						email: values.email,
						password: values.password,
					})
				);
				setIsLogin(true);
			}
		},
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isLogin) {
			const action = await dispatch(
				loginUser({ username: values.email, password: values.password })
			);
			if (loginUser.fulfilled.match(action)) {
				const storedToken = localStorage.getItem('userToken');
				if (storedToken) {
					const tokenObject = JSON.parse(storedToken);
					const accessToken = tokenObject.access;
					dispatch(fetchUserData(accessToken));
				}
			}
			closeModal();
		} else {
			dispatch(
				registerUser({
					username: values.email,
					first_name: values.firstName,
					last_name: values.lastName,
					email: values.email,
					password: values.password,
				})
			);
			setIsLogin(true);
		}
	};

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				ariaHideApp={false}
			>
				{!isLogin && (
					<div className='flex flex-col p-4 overflow-y-scroll no-scrollbar'>
						<span className='text-center'>Realty Homes</span>
						<h2 className='text-center text-2xl font-medium'>
							Create an Account
						</h2>
						<img
							src={thumbnail}
							alt='auth-logo'
							className='h-[80px] w-[80px] mx-auto my-6'
						/>
						<form
							className='space-y-4'
							onSubmit={handleSubmit}
							autoComplete='off'
						>
							<div className='w-full flex flex-col md:flex-row space-x-4'>
								<div className='flex flex-col'>
									<label htmlFor='firstName'>First Name</label>
									<input
										name='firstName'
										value={values.firstName}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.firstName
												? `border border-red-500 outline-none mt-2 py-[5px] rounded pl-2`
												: `border border-gray-300 outline-none mt-2 py-[5px] rounded pl-2`
										}
										placeholder='Enter First Name'
									/>
									{errors.firstName && touched.firstName && (
										<p className='text-red-500 text-sm mt-[5px]'>
											{errors.firstName}
										</p>
									)}
								</div>
								<div className='flex flex-col'>
									<label
										htmlFor='lastName'
										className='-ml-4 mt-2 md:mt-0 md:ml-0'
									>
										Last Name
									</label>
									<input
										name='lastName'
										value={values.lastName}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.firstName
												? 'border border-red-500 outline-none mt-2 py-[5px] rounded pl-2 -ml-4 md:ml-0'
												: 'border border-gray-300 outline-none mt-2 py-[5px] rounded pl-2 -ml-4 md:ml-0'
										}
										placeholder='Enter Last Name'
									/>
									{errors.lastName && touched.lastName && (
										<p className='text-red-500 text-sm mt-[5px]'>
											{errors.lastName}
										</p>
									)}
								</div>
							</div>
							<div>
								<label htmlFor='email'>Email</label>
								<input
									name='email'
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.email
											? 'border-red-500 block border outline-none mt-2 py-[5px] rounded pl-2 w-full'
											: 'border-gray-300 block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									}
									placeholder='Enter Email'
								/>
								{errors.email && touched.email && (
									<p className='text-red-500 text-sm mt-[5px]'>
										{errors.email}
									</p>
								)}
							</div>
							<div>
								<label htmlFor='password'>Password</label>
								<input
									name='password'
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.password
											? 'block border border-red-500 outline-none mt-2 py-[5px] rounded pl-2 w-full'
											: 'block border border-gray-300 outline-none mt-2 py-[5px] rounded pl-2 w-full'
									}
									placeholder='Enter Password'
								/>
								{errors.password && touched.password && (
									<p className='text-red-500 text-sm mt-[5px]'>
										{errors.password}
									</p>
								)}
							</div>
							<div>
								<label htmlFor='confirmPassword'>Confirm Password</label>
								<input
									name='confirmPassword'
									value={values.confirmPassword}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.password
											? 'block border border-red-500 outline-none mt-2 py-[5px] rounded pl-2 w-full'
											: 'block border border-gray-300 outline-none mt-2 py-[5px] rounded pl-2 w-full'
									}
									placeholder='Confirm Password'
								/>
								{errors.confirmPassword && touched.confirmPassword && (
									<p className='text-red-500 text-sm mt-[5px]'>
										{errors.confirmPassword}
									</p>
								)}
							</div>
							<button
								type='submit'
								className={'bg-[#27B1BE] rounded w-full py-[8px] text-white '}
							>
								Register
							</button>
						</form>
						<hr />
					</div>
				)}
				{isLogin && (
					<div className='flex flex-col p-4 overflow-y-scroll no-scrollbar'>
						<span className='text-center'>Realty Homes</span>
						<h2 className='text-center text-2xl font-medium'>Welcome</h2>
						<img
							src={thumbnail}
							alt='auth-logo'
							className='h-[80px] w-[80px] mx-auto my-6'
						/>

						<form onSubmit={handleSubmit}>
							<div className='mb-6'>
								<label>Email</label>
								<input
									name='email'
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.email
											? 'block border border-red-500 outline-none mt-2 py-[5px] rounded pl-2 w-full'
											: 'block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									}
									placeholder='Enter Email'
								/>
								{errors.email && touched.email && (
									<p className='text-red-500 text-sm mt-[5px]'>
										{errors.email}
									</p>
								)}
							</div>
							<div className='mb-6'>
								<label>Password</label>
								<input
									name='password'
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.email
											? 'block border border-red-500 outline-none mt-2 py-[5px] rounded pl-2 w-full'
											: 'block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									}
									placeholder='Enter Password'
								/>
							</div>
							{errors.password && touched.password && (
								<p className='text-red-500 text-sm mb-6 -mt-4'>
									{errors.password}
								</p>
							)}
							<button
								type='submit'
								className='bg-[#27B1BE] rounded w-full py-[8px] text-white'
							>
								Login
							</button>
						</form>
					</div>
				)}
			</Modal>
		</>
	);
};

export default AuthModal;
