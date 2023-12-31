import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from './AuthModal';
// React Icons
import { FaBars } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';
import { logout } from '../redux/auth/authSlice';
// MUI
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	const [modalIsOpen, setIsOpen] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(false);

	const { pathname } = useLocation();

	const mobile = useMediaQuery('(max-width: 768px)');

	const openModal = () => {
		setIsOpen(true);
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		dispatch(logout());
		setLoggedIn(false);
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	useEffect(() => {
		setOpenSidebar(false);
		if (user) {
			setLoggedIn(true);
		}
	}, [pathname, user]);

	return (
		<div className='h-[60px] flex justify-between items-center px-6 shadow-md'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold cursor-pointer'>
					<Link to='/'>
						<span className='text-[#27B1BE]'>Realty</span> Homes
					</Link>
				</h1>
				<ul className='hidden md:flex ml-6 space-x-6 text-[#27B1BE] cursor-pointer z-40'>
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
					<ul className='md:hidden flex flex-col items-center bg-[#27B1BE] space-y-14 text-white cursor-pointer pt-12 mt-[837px] absolute right-0 w-[100vw] h-screen z-40 text-xl'>
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
						{user && loggedIn ? (
							<div>
								<div>
									<Link to='/account'>My Account</Link>
								</div>
							</div>
						) : (
							<li className='space-x-4'>
								<button
									className='text-white border border-white py-2 px-4 rounded'
									onClick={() => {
										setIsLogin(true);
										openModal();
										setOpenSidebar(false);
									}}
								>
									Login
								</button>
								<button
									className='bg-white text-[#27B1BE] border border-[#27B1BE] py-2 px-4 rounded'
									onClick={() => {
										setIsLogin(false);
										openModal();
										setOpenSidebar(false);
									}}
								>
									Register
								</button>
							</li>
						)}
					</ul>
				)}
			</div>
			{user && loggedIn && !mobile ? (
				<div>
					<button className='text-[#27B1BE] py-2 px-4 rounded flex items-center justify-center'>
						<p className='mr-2'>Hi, {user?.first_name}</p>{' '}
						<div className='mt-[3px]'>
							<div>
								<div onClick={handleClick}>
									<FaAngleDown />
								</div>
								<Popover
									id={id}
									open={open}
									anchorEl={anchorEl}
									onClose={handleClose}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									className='mt-[20px]'
								>
									<Typography sx={{ p: 2 }}>
										<div className='mb-2 cursor-pointer'>
											<Link to='/account'>My Account</Link>
										</div>
										<p className='cursor-pointer'>My Favorites</p>
										<button
											className='mt-2 cursor-pointer'
											onClick={() => {
												handleLogout();
											}}
										>
											Logout
										</button>
									</Typography>
								</Popover>
							</div>
						</div>
					</button>
				</div>
			) : (
				<div className='space-x-4 hidden md:block'>
					<button
						className='text-[#27B1BE] border border-[#27B1BE] py-2 px-4 rounded'
						onClick={() => {
							setIsLogin(true);
							openModal();
						}}
					>
						Login
					</button>
					<button
						className='bg-[#27B1BE] text-white py-2 px-4 rounded'
						onClick={() => {
							setIsLogin(false);
							openModal();
						}}
					>
						Register
					</button>
				</div>
			)}
			<FaBars
				className='text-2xl md:hidden'
				onClick={() => setOpenSidebar(!openSidebar)}
			/>

			<div className='hidden z-50'>
				<AuthModal
					modalIsOpen={modalIsOpen}
					openModal={openModal}
					setIsOpen={setIsOpen}
					isLogin={isLogin}
					setIsLogin={setIsLogin}
				/>
			</div>
		</div>
	);
};

export default Navbar;
