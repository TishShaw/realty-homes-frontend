import React from 'react';
import heroImg from '../assets/hero.jpg';
import { IoSearch } from 'react-icons/io5';

const Hero = () => {
	return (
		<div className='w-full relative h-[750px]'>
			<img
				src={heroImg}
				alt=''
				className='h-[500px] xl:h-[800px] w-full bg-blend-darken'
			/>
			<div className='bg-black opacity-20 h-[500px] xl:h-[800px] absolute top-0 z-2 w-full left-0' />
			<div className='absolute text-white top-20 z-[100]flex items-center justify-center text-center mx-auto w-full px-10 md:px-20 lg:px-40 md:mt-[50px] xl:px-80 xl:mt-[150px] '>
				<h1 className='w-full text-4xl md:text-6xl mb-4'>
					Journey To Your Perfect Home
				</h1>
				<p className='text-2xl xl:mt-6 xl:mb-10'>
					Unlock Your Dream Home: Where Possibilties Meet Perfect
					Posssibilities.
				</p>
				<div className='h-0 bg-white relative mx-2 mt-6'>
					<input
						className='p-2 xl:p-4 rounded-md mt-6 outline-none w-full'
						placeholder='Enter an address, city, or zipcode'
					/>
					<button className='bg-[#27B1BE] p-[6px] xl:p-2 text-lg lg:text-xl xl:text-3xl absolute right-0 top-6 rounded-md  mr-2 mt-[5px]'>
						<IoSearch className='' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
