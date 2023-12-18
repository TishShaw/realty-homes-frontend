import React from 'react';
import heroImg from '../assets/hero.jpg';
import { IoSearch } from 'react-icons/io5';

const Hero = () => {
	return (
		<div className='w-full relative h-[300px] md:h-[450px] xl:h-[800px]'>
			<img
				src={heroImg}
				alt=''
				className='h-[300px] md:h-[450px] xl:h-[800px] w-full bg-blend-darken'
			/>
			<div className='bg-black opacity-20 h-[300px]  xl:h-[800px] absolute top-0 z-2 w-full left-0' />
			<div className='absolute text-white top-20 z-[100]flex items-center justify-center text-center mx-auto w-full px-10 md:px-20 lg:px-40 md:mt-[50px] xl:px-80 xl:mt-[150px] '>
				<h1 className='w-full text-3xl md:text-4xl xl:text-6xl mb-4'>
					Journey To Your Perfect Home
				</h1>
				<p className='text-xl md:text-2xl xl:text-3xl xl:mt-6 xl:mb-10'>
					Unlock Your Dream Home
					<span className='hidden md:block'>
						Where Possibilties Meet Perfect Posssibilities.
					</span>
				</p>
				<div className='h-0 bg-white relative mx-2 mt-2 md:mt-6'>
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
