import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

const Features = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			await axios
				.get('https://realty-homes-4290f3fd1ed3.herokuapp.com/properties/')
				.then((response) => setData(response.data));
		}
		getData();
	}, []);

	console.log(data);

	return (
		<div className='h-full px-4 md:pt-14 w-full'>
			<h2 className='mt-36 text-xl font-bold mb-6 md:text-3xl xl:text-4xl 2xl:text-4xl text-center md:mt-10'>
				Featured Listings
			</h2>
			<div className='w-full overflow-x-scroll md:flex md:justify-center md:overflow-none md:mt-10 md:mb-20'>
				<div className='mt-2 flex w-[700px] overflow-hidden md:w-[900px] xl:w-[1200px] 2xl:w-[1800px] xl:space-x-8 2xl:space-x-16 md:pb-6'>
					{data?.slice(0, 3).map((listing, idx) => (
						<div
							key={idx}
							className='shadow-md h-50 mr-4 border border-gray-300 rounded'
						>
							<img
								src={listing.images[0].image}
								alt=''
								className='w-[650px] h-[150px] md:h-[200px] md:w-[600px]'
							/>
							<div className='p-2'>
								<p className='text-md md:text-lg mb-2'>{listing.title}</p>
								<p className='text-lg'>
									<NumericFormat
										value={Math.floor(listing.price)}
										prefix='$'
										thousandSeparator=','
										displayType='text'
										renderText={(value) => <b>{value}</b>}
									/>
								</p>
								<div className='flex space-x-4 text-md mt-2'>
									<p className='flex font-medium'>
										{Math.floor(listing.num_of_bedrooms)}
										{''}
										<span className='text-gray-600 font-light'> Beds</span>
									</p>
									<p className='flex font-medium'>
										{Math.floor(listing.num_of_bathrooms)}
										<span className='text-gray-600 font-light'> Baths</span>
									</p>
									<p className='flex font-medium'>
										{listing.sqft}
										{'  '}
										<span className='text-gray-600 font-light'> Sqft</span>
									</p>
								</div>
							</div>
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
					<button className='bg-[#27B1BE] text-white rounded md:bg-white md:text-[#27B1BE] px-4 p-2 mt-8 text-lg'>
						Learn More
					</button>
				</div>
				<div className='mt-64 md:mt-0 md:w-[50%] h-full flex justify-center items-center'>
					<img
						src='https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
						className='h-[220px] md:h-[400px] w-full py-8 md:py-0'
					/>
				</div>
			</div>

			<div className='pt-2 pb-20 flex justify-center items-center flex-col'>
				<div className='flex justify-center items-center flex-col py-14'>
					<h1 className='text-center text-2xl md:text-3xl font-bold md:font-medium mb-4 bg-[#27B1BE] md:bg-white w-full p-2 h-20 flex justify-center items-center'>
						Your In Good Company
					</h1>
					<p className=' text-sm text-center md:px-20 md:text-lg lg:text-xl'>
						Join Our Happy Community of Satisfied Customers and Experience Why
						You're in Good Company!
					</p>
				</div>

				<div className='flex mt-2 md:mt-10 w-full space-x-6 overflow-x-scroll justify-center items-center'>
					<div className='shadow bg-gray-300 h-40 w-[100%] md:w-[200px]'></div>
					<div className='shadow bg-gray-300 h-40 w-[100%] md:w-[200px]'></div>
					<div className='shadow bg-gray-300 h-40 w-[100%] md:w-[200px]'></div>
					<div className='shadow bg-gray-300 h-40 w-[100%] md:w-[200px]'></div>
				</div>
			</div>
		</div>
	);
};

export default Features;
