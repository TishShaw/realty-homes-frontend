import React, { useState } from 'react';
import heroImg from '../assets/hero.jpg';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

const Hero = () => {
	const navigate = useNavigate();

	const [searchTerm, setSearchTerm] = useState('');
	console.log(searchTerm);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/listings?search=${searchTerm}`);
		setSearchTerm('');
	};

	return (
		<div className='w-full relative h-[300px] md:h-[450px] xl:h-[800px]'>
			<img
				src={heroImg}
				alt=''
				className='h-[400px] md:h-[470px] xl:h-[800px] w-full bg-blend-darken'
			/>
			<div className='bg-black opacity-20 h-[400px] md:h-[470px] xl:h-[800px] absolute top-0 z-2 w-full left-0' />
			<div className='absolute text-white top-20 z-[100]flex items-center justify-center text-center mx-auto w-full px-10 md:px-20 lg:px-40 md:mt-[50px] xl:px-80 xl:mt-[150px] '>
				<h1 className='w-full text-3xl md:text-4xl xl:text-6xl mb-4 font-bold'>
					Journey To Your Perfect Home
				</h1>
				<p className='text-xl md:text-2xl xl:text-3xl xl:mt-6 xl:mb-10 font-medium'>
					Unlock Your Dream Home
					<span className='hidden md:block'>
						Where Possibilities Meet Perfect Realities.
					</span>
				</p>
				<form
					className='h-0 bg-white relative mx-2 mt-2 md:mt-6 rounded-full'
					onSubmit={handleSubmit}
				>
					<input
						type='text'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='p-2 xl:p-4 rounded-md mt-6 outline-none w-full text-lg text-black'
						placeholder='Address, City, or Zip Code...'
					/>
					<button
						type='submit'
						className='bg-[#27B1BE] p-[6px] xl:p-2 text-lg lg:text-xl xl:text-3xl absolute right-0 top-6 rounded-md  mr-2 mt-[7px]'
					>
						<IoSearch />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Hero;
