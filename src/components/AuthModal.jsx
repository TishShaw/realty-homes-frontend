import React from 'react';
import Modal from 'react-modal';
import thumbnail from '../assets/3651807.png';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		height: '500px',
		width: '470px',
		transform: 'translate(-50%, -50%)',
		borderRadius: '25px',
	},
};

const AuthModal = ({ modalIsOpen, setIsOpen, text }) => {
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				{text === 'Register' && (
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
						<form className='space-y-4'>
							<div className='w-full flex space-x-4'>
								<div className='flex flex-col'>
									<label>First Name</label>
									<input
										className='border border-gray outline-none mt-2 py-[5px] rounded pl-2'
										placeholder='Enter First Name'
									/>
								</div>
								<div className='flex flex-col'>
									<label>Last Name</label>
									<input
										className='border border-gray outline-none mt-2 py-[5px] rounded pl-2'
										placeholder='Enter Last Name'
									/>
								</div>
							</div>
							<div>
								<label>Email</label>
								<input
									className='block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									placeholder='Enter Email'
								/>
							</div>
							<div>
								<label>Password</label>
								<input
									className='block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									placeholder='Enter Password'
								/>
							</div>
							<div>
								<label>Confirm Password</label>
								<input
									className='block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									placeholder='Confirm Password'
								/>
							</div>
							<button className='bg-[#27B1BE] rounded w-full py-[8px] text-white'>
								Register
							</button>
						</form>
						<hr />
					</div>
				)}
				{text === 'Login' && (
					<div className='flex flex-col p-4 overflow-y-scroll no-scrollbar'>
						<span className='text-center'>Realty Homes</span>
						<h2 className='text-center text-2xl font-medium'>Welcome</h2>
						<img
							src={thumbnail}
							alt='auth-logo'
							className='h-[80px] w-[80px] mx-auto my-6'
						/>

						<form>
							<div className='mb-6'>
								<label>Email</label>
								<input
									className='block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									placeholder='Enter Email'
								/>
							</div>
							<div className='mb-6'>
								<label>Password</label>
								<input
									className='block border border-gray outline-none mt-2 py-[5px] rounded pl-2 w-full'
									placeholder='Enter Password'
								/>
							</div>
							<button className='bg-[#27B1BE] rounded w-full py-[8px] text-white'>
								Login
							</button>
						</form>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default AuthModal;
