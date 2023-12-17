import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const Navbar = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [text, setText] = useState('');

	const openModal = () => {
		setIsOpen(true);
	};

	return (
		<div className='h-[60px] flex justify-between items-center px-6 shadow-md'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold cursor-pointer'>
					<Link to='/'>Realty Homes</Link>
				</h1>
				<ul className='flex ml-6 space-x-6 text-[#27B1BE] cursor-pointer'>
					<li className=''>
						<Link to='/about-us'>About Us</Link>
					</li>
					<li className=''>
						<Link to='/our-blog'>Our Blog</Link>
					</li>
					<li className=''>
						<Link to='/listings'>Listings</Link>
					</li>
					<li className=''>
						<Link to='/contact-us'>Contact Us</Link>
					</li>
				</ul>
			</div>
			<div className='space-x-4'>
				<button
					className='text-[#27B1BE] border border-[#27B1BE] py-2 px-4 rounded'
					onClick={() => {
						setText('Login');
						openModal();
					}}
				>
					Login
				</button>
				<button
					className='bg-[#27B1BE] text-white py-2 px-4 rounded'
					onClick={() => {
						setText('Register');
						openModal();
					}}
				>
					Register
				</button>
			</div>

			<div className='hidden'>
				<AuthModal
					modalIsOpen={modalIsOpen}
					openModal={openModal}
					setIsOpen={setIsOpen}
					text={text}
				/>
			</div>
		</div>
	);
};

export default Navbar;
