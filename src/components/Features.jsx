import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

const Features = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			await axios
				.get('http://localhost:8000/properties')
				.then((response) => setData(response.data));
		}
		getData();
	}, []);

	console.log(data);

	return (
		<div className='h-full pt-6 px-4 md:pt-14 w-full '>
			<h2 className='text-xl font-bold mb-6 md:text-3xl xl:text-4xl 2xl:text-4xl md:text-center'>
				Featured Listings
			</h2>
			<div className='w-full overflow-x-scroll md:flex md:justify-center md:overflow-none '>
				<div className='mt-2 flex w-[700px] overflow-hidden md:w-[900px] xl:w-[1200px] 2xl:w-[1800px] xl:space-x-8 2xl:space-x-16 '>
					{data?.slice(0, 3).map((listing, idx) => (
						<div key={idx} className='shadow-md h-50 mr-4'>
							<img
								src={listing.images[0].image}
								alt=''
								className='w-[650px] h-[150px] md:h-[200px] md:w-[600px]'
							/>
							<div className='p-2'>
								<p className='text-sm mb-2'>{listing.title}</p>
								<p className=''>
									<NumericFormat
										value={Math.floor(listing.price)}
										prefix='$'
										thousandSeparator=','
										displayType='text'
										renderText={(value) => <b>{value}</b>}
									/>
								</p>
								<div className='flex space-x-4 text-sm mt-2'>
									<p className='flex font-medium'>
										{Math.floor(listing.num_of_bedrooms)}{' '}
										<span className='text-gray-600 font-light'>Beds</span>
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
		</div>
	);
};

export default Features;
