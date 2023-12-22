import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import MapGrid from '../components/MapGrid';
import { LiaBedSolid } from 'react-icons/lia';
import { LiaBathSolid } from 'react-icons/lia';
import { LiaRulerCombinedSolid } from 'react-icons/lia';
import { FaUser } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa6';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

const ListingDetailsPage = () => {
	const [data, setData] = useState({});
	const [currentSlide, setCurrentSlide] = useState(0);

	const matches = useMediaQuery('(max-width:430px)');

	const { id } = useParams();

	const nextSlide = () => {
		setCurrentSlide((currentSlide) =>
			currentSlide + 1 < data.images.length ? currentSlide + 1 : currentSlide
		);
	};

	const prevSlide = () => {
		setCurrentSlide((currentSlide) =>
			currentSlide - 1 >= 0 ? currentSlide - 1 : currentSlide
		);
	};

	useEffect(() => {
		axios
			.get(`https://realty-homes-4290f3fd1ed3.herokuapp.com/properties/${id}/`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='h-full w-full px-6 mt-6 mb-20'>
			<div className='h-full w-full overflow-hidden'>
				<div className='flex w-full justify-center items-center'>
					{matches
						? data.images
								?.slice(currentSlide, currentSlide + 1)
								.map((image, index) => (
									<div key={index}>
										<img
											src={image?.image}
											alt={data.title}
											className='h-[300px] w-[100vw]'
										/>
									</div>
								))
						: data?.images
								?.slice(currentSlide, currentSlide + 3)
								.map((image, index) => (
									<div key={index}>
										<img
											src={image?.image}
											alt={data.title}
											className='h-[400px]'
										/>
									</div>
								))}

					<button
						onClick={prevSlide}
						className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2'
					>
						Prev
					</button>
					<button
						onClick={nextSlide}
						className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2'
					>
						Next
					</button>
				</div>
				<div className='mt-6 flex justify-between'>
					<div className='w-full md:w-[50%]'>
						<h1 className='text-3xl font-bold w-full'>{data.address}</h1>
						<p className='text-lg'>{data.title}</p>
						<p className=' text-[#27B1BE] text-2xl my-4'>
							<NumericFormat
								value={Math.floor(data.price)}
								prefix='$'
								thousandSeparator=','
								displayType='text'
								renderText={(value) => <b>{value}</b>}
							/>
						</p>
						<div className='flex space-x-4 mt-2'>
							<div className='flex items-center'>
								<LiaBedSolid />
								<p className='ml-2'>{Math.floor(data.num_of_bedrooms)} Beds</p>
							</div>
							<div className='flex items-center'>
								<LiaBathSolid />
								<p className='ml-2'>
									{Math.floor(data.num_of_bathrooms)} Baths
								</p>
							</div>
							<div className='flex items-center'>
								<LiaRulerCombinedSolid />
								<p>{data.sqft} Sqft</p>
							</div>
						</div>
						<p className='text-lg mt-6'>
							{data.description} Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nemo temporibus assumenda obcaecati mollitia
							repellendus sequi error quisquam cupiditate eius placeat.
							Consequuntur dolores, ex tenetur sed distinctio sit? Soluta
							tenetur provident distinctio, eveniet eos nulla, nostrum animi, et
							dolore accusantium sapiente!
						</p>

						<div>
							<h2 className='text-2xl font-bold mt-20'>Features</h2>
							<div className='flex flex-wrap space-x-3 w-full mb-6'>
								{data?.amenities?.split(',').map((item, idx) => (
									<div
										key={idx}
										className='leading-8 rounded-full px-4 mt-4 shadow-md'
									>
										<p className='w-full'>{item.toLowerCase()}</p>
									</div>
								))}
							</div>
							<div className='w-full h-[300px]  mt-20'>
								<MapGrid />
							</div>
						</div>
					</div>
					<div className='w-[40%] md:flex items-start justify-center mt-10 hidden'>
						<div className='rounded border-2 border-[#27B1BE] w-[60%] h-[500px] shadow-xl'>
							<h2 className='text-2xl font-bold pl-4 pt-4 mb-2'>
								Contact Us Today
							</h2>
							<p className='text-sm px-4 text-gray-700'>
								Or call (555) 555- 1234 for more information
							</p>
							<form className='px-4'>
								<div className='flex items-center border border-gray-300 w-full px-4 py-2 rounded mt-6 outline-none'>
									<FaUser className='text-gray-400' />
									<input
										type='text'
										className='ml-2 w-full outline-none'
										placeholder='Full Name'
									/>
								</div>
								<div className='flex items-center border border-gray-300 w-full px-4 py-2 rounded mt-6 outline-none'>
									<AiOutlineMail className='text-gray-400' />
									<input
										type='text'
										className='ml-2 w-full outline-none'
										placeholder='Email'
									/>
								</div>
								<div className='flex items-center border border-gray-300 w-full px-4 py-2 rounded mt-6 outline-none'>
									<FaPhone className='text-gray-400' />
									<input
										type='text'
										className='ml-2 w-full outline-none'
										placeholder='Phone Number'
									/>
								</div>
								<div className='flex items-center border border-gray-300 h-[80px] w-full px-4 py-2 rounded mt-6 outline-none'>
									<input
										type='text'
										className='ml-2 h-full w-full outline-none'
										placeholder='Message'
									/>
								</div>
								<button className='flex items-center justify-center mx-auto bg-[#27B1BE] px-6 py-2 rounded mt-6'>
									Contact Agent
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListingDetailsPage;
