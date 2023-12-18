import React from 'react';

const Footer = () => {
	return (
		<div className='h-full w-full px-4'>
			<div className='bg-[#27B1BE] w-full h-60 flex justify-evenly items-center mb-4'>
				<div className='w-full flex flex-col md:flex-row justify-around md:justify-evenly items-center '>
					<div className='w-full md:w-[50%] h-full text-center px-4'>
						Embark on Your Search with Confidence, Backed by Our Unwavering
						Commitment to Your Success
					</div>
					<div className='w-full md:w-[50%] h-full text-center mt-6'>
						<button className='bg-tranparent text-white py-2 px-4'>
							Join Today
						</button>
						<button className='bg-white text-[#27B1BE] py-2 px-4'>
							Contact Us
						</button>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-4'>
				<div className=''>
					<h2 className='font-bold text-lg'>Realty Homes</h2>
				</div>
				<div className='flex space-x-24 flex-col md:flex-row items-center justify-center mx-auto space-y-6'>
					<div className='flex flex-wrap space-x-4 w-full items-center justify-center mt-2'>
						<h4 className='hidden font-bold'>Navigation</h4>
						<div>About Us</div>
						<div>Our Blog</div>
						<div>Listings</div>
						<div>Contact Us</div>
					</div>
					<div className='w-full '>
						<div className=' w-full hidden  md:flex md:flex-col space-y-4 items-center justify-center mx-auto'>
							<button className='bg-[#27B1BE] text-white px-6 py-2 rounded'>
								login
							</button>
							<button className='border border-[#27B1BE] text-[#27B1BE] px-4 py-2 rounded'>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='h-20 flex flex-col justify-center items-center px-4 mb-10 text-sm'>
				<div className='w-full bg-gray-200 h-[2px] mb-2'></div>
				<div className='flex items-center w-full justify-between flex-col-reverse'>
					<p className='mt-4'>©2023 Copyright</p>
					<ul className='flex justify-center items-center space-x-2'>
						<li>Follow Us:</li>
						<li className='rounded-full w-8 h-8 bg-gray-200'></li>
						<li className='rounded-full w-8 h-8 bg-gray-200'></li>
						<li className='rounded-full w-8 h-8 bg-gray-200'></li>
						<li className='rounded-full w-8 h-8 bg-gray-200'></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
