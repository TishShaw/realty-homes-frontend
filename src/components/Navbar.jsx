import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [text, setText] = useState('');
	const [openSidebar, setOpenSidebar] = useState(false);
	const { pathname } = useLocation();

	const openModal = () => {
		setIsOpen(true);
	};

	useEffect(() => {
		setOpenSidebar(false);
	}, [pathname]);

	return (
		<div className='h-[60px] flex justify-between items-center px-6 shadow-md'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold cursor-pointer'>
					<Link to='/'>Realty Homes</Link>
				</h1>
				<ul className='hidden md:flex ml-6 space-x-6 text-[#27B1BE] cursor-pointer'>
					{' '}
					<li>
						<Link to='/about-us'>About Us</Link>
					</li>
					<li>
						<Link to='/our-blog'>Our Blog</Link>
					</li>
					<li>
						<Link to='/listings'>Listings</Link>
					</li>
					<li>
						<Link to='/contact-us'>Contact Us</Link>
					</li>
				</ul>
				{openSidebar && (
					<ul className='md:hidden flex flex-col items-center bg-[#27B1BE] space-y-10 text-white cursor-pointer pt-8 mt-[837px] absolute right-0 w-[100vw] h-screen z-10'>
						<li>
							<Link to='/about-us'>About Us</Link>
						</li>{' '}
						<li>
							<Link to='/our-blog'>Our Blog</Link>
						</li>
						<li>
							<Link to='/listings'>Listings</Link>
						</li>
						<li>
							<Link to='/contact-us'>Contact Us</Link>
						</li>
						<li className='space-x-4'>
							<button
								className='text-white border border-white py-2 px-4 rounded'
								onClick={() => {
									setText('Login');
									openModal();
								}}
							>
								Login
							</button>
							<button
								className='bg-white text-[#27B1BE] border border-[#27B1BE] py-2 px-4 rounded'
								onClick={() => {
									setText('Register');
									openModal();
								}}
							>
								Register
							</button>
						</li>
					</ul>
				)}
			</div>
			<div className='space-x-4 hidden md:block'>
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
			<FaBars
				className='text-2xl  md:hidden'
				onClick={() => setOpenSidebar(!openSidebar)}
			/>

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
