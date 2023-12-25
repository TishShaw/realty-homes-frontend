import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import { testimonalArr } from '../utils/Data';

const Features = () => {
	const [data, setData] = useState([]);
	const [isPaused, setIsPaused] = useState(false);

	const navigate = useNavigate();

	const handlePause = () => setIsPaused(true);
	const handleResume = () => setIsPaused(false);

	useEffect(() => {
		async function getData() {
			await axios
				.get('https://realty-homes-4290f3fd1ed3.herokuapp.com/properties/')
				.then((response) => setData(response.data));
		}
		getData();
	}, []);

	return (
		<div className='h-full px-4 md:pt-10 w-full mb-20'>
			<h2 className='mt-36 text-xl font-bold mb-6 md:text-3xl xl:text-4xl 2xl:text-4xl text-center md:mt-10'>
				Featured Listings
			</h2>
			<div className='w-full overflow-x-scroll md:flex md:justify-center md:overflow-none md:mt-10 md:mb-20'>
				<div className='mt-2 flex w-[1000px] overflow-hidden md:w-[900px] xl:w-[1200px] 2xl:w-[1800px] xl:space-x-8 2xl:space-x-16 md:pb-6'>
					{data?.slice(0, 3).map((listing, idx) => (
						<div
							key={idx}
							className='shadow-md w-[1000px] h-50 mr-4 border border-gray-300 rounded'
							onClick={() => navigate(`/listings/${listing.id}`)}
						>
							<Card idx={idx} listing={listing} />
						</div>
					))}
				</div>
			</div>
			<div className='h-[650px] md:h-[400px] w-[100%] mt-2 md:mt-14 flex flex-col md:flex-row items-center space-x-2'>
				<div className='md:bg-[#27B1BE] h-20 md:h-full w-full md:w-[50%] flex items-center flex-col pt-20'>
					<h3 className='bg-[#27B1BE] md:bg-transparent font-bold text-2xl md:text-3xl text-center p-4'>
						Elevate Your Living Experience
					</h3>
					<p className='mt-4 text-center md:mt-4 md:px-12 md:text-xl'>
						We take a unique approach to real estate. We believe in showcasing
						properties through a lens of authenticity, allowing the true essence
						of each home to shine. Our commitment to transparency and integrity
						is at the core of what we do.
					</p>
					<button
						className='bg-[#27B1BE] text-white rounded md:bg-white md:text-[#27B1BE] px-4 p-2 mt-8 text-lg'
						onClick={() => navigate('/about-us')}
					>
						Learn More
					</button>
				</div>
				<div className='mt-80 md:mt-0 md:w-[50%]  w-full h-full flex justify-center items-center'>
					<img
						src='https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
						className='h-[220px] md:h-[400px] w-full py-8 md:py-0'
					/>
				</div>
			</div>

			<div className='pt-2 flex justify-center items-center flex-col overflow-hidden'>
				<div className='flex justify-center items-center flex-col pt-14 w-full '>
					<h1 className='text-center text-2xl md:text-3xl font-bold md:font-medium  bg-[#27B1BE] md:bg-white w-full -mb-2 p-2 h-20 flex justify-center items-center'>
						Your In Good Company
					</h1>
					<span className='hidden md:block mb-12'>
						Where Possibilities Meet Perfect Realities.
					</span>
				</div>

				<div className='md:w-[700px]  px-10  overflow-hidden'>
					<div
						className={`hover::animate-slide-0 animate-slide flex md:mt-10 w-full space-x-6  justify-center items-center transform ${
							isPaused ? 'animate-slidePause' : 'animate-slide'
						}`}
						onMouseEnter={handlePause}
						onMouseLeave={handleResume}
						onTouchStart={handlePause}
						onTouchEnd={handleResume}
					>
						{testimonalArr.map((item, idx) => (
							<div
								key={idx}
								className='shadow-xl h-20 w-[300px] md:w-full text-center p-6 bg-[#27B1BE]'
							>
								<p className='text-md'>{item.testimony}</p>
								<p className='mt-2'>{item.name}</p>
								<p className='text-gray-400 text-sm'>{item.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
