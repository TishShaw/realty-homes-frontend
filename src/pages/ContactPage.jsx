import React from 'react';
import house from '../assets/Real_Estate_(201).png';
import { MdMail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const ContactPage = () => {
	return (
		<div className='h-full w-full px-6 flex justify-center items-center flex-col mb-20'>
			<div className='flex justify-center items-center flex-col'>
				<h1 className='text-3xl md:text-2xl font-bold mt-10 md:mt-20'>
					Contact Us
				</h1>
				<p className='text-center px-6 mt-2'>Lorem ipsum dolos dicta</p>
				<div className='md:flex md:mt-8 md:space-x-3 xl:space-x-14 w-full'>
					<div className='relative w-full mt-10 md:flex'>
						<div className='shadow-lg w-[250px] lg:w-[300px] h-[180px] rounded text-center flex justify-center items-center flex-col mx-auto'>
							<p className='flex justify-center items-center text-center'>
								<span className='z-20'>Help Center</span>
								<div className='bg-gray-300 rounded-full w-12 h-12 absolute z-10'></div>
							</p>
							<p className='px-2 mt-4'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Impedit, tenetur.
							</p>
						</div>
					</div>
					<div className='relative w-full mt-10'>
						<div className='shadow-lg w-[250px] lg:w-[300px] h-[180px] rounded text-center flex justify-center items-center flex-col mx-auto'>
							<p className='flex justify-center items-center text-center'>
								<span className='z-20'>FAQs</span>
								<div className='bg-gray-300 rounded-full w-12 h-12 absolute z-10'></div>
							</p>
							<p className='px-2 mt-4'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Impedit, tenetur.
							</p>
						</div>
					</div>
					<div className='relative w-full mt-10'>
						<div className='shadow-lg w-[250px] lg:w-[300px] h-[180px] rounded text-center flex justify-center items-center flex-col mx-auto'>
							<p className='flex justify-center items-center text-center'>
								<span className='z-20'>Online Chat</span>
								<div className='bg-gray-300 rounded-full w-12 h-12 absolute z-10'></div>
							</p>
							<p className='px-2 mt-4'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Impedit, tenetur.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col-reverse md:flex-row shadow-xl h-[1200px]  md:h-[500px] w-full md:w-[90%] md:mt-40 justify-center items-center mt-20'>
					<div className='h-full w-full'>
						<h3 className='font-bold text-2xl px-6 mt-10 md:mt-0 md:pt-10'>
							Send Us a Email
						</h3>
						<p className='px-6 pt-4'>
							Send us a quick message and we’ll get right back to you.
						</p>
						<div className='pt-6 pl-6 space-y-4'>
							<div className='md:flex'>
								<div className='pb-4 md:pb-0'>
									<label className='pb-2'>First Name</label>
									<input
										type='text'
										className='border border-gray-300 p-2 outline-none mt-2 md:mt-0 w-[95%]'
									/>
								</div>
								<div className=''>
									<label className='pb-2'>Last Name</label>
									<input
										type='text'
										className='border border-gray-300 p-2 outline-none mt-2 md:mt-0 w-[95%]'
									/>
								</div>
							</div>
							<div className='flex flex-col'>
								<label className='pb-2'>Email</label>
								<input
									type='text'
									className='border border-gray-300 p-2 outline-none w-[95%]'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='pb-2'>Message</label>
								<input
									type='text'
									className='border border-gray-300 p-2 outline-none w-[95%]'
								/>
							</div>
						</div>
						<button className='bg-[#27B1BE] text-white px-8 py-2 mt-8 flex justify-center items-center mx-auto'>
							Send
						</button>
					</div>

					<div className='bg-[#27B1BE] h-[550px] md:h-full w-full flex flex-col-reverse md:flex-col justify-center items-center pt-10 pb-20 md:pb-0'>
						<div className='mx-auto space-y-10 md:space-y-6 text-sm'>
							<div className='flex justify-start items-center'>
								<MdMail className='h-6 w-6 md:mr-4 mx-4' />
								realtyhomes.co@email.com
							</div>
							<div className='flex justify-start items-center'>
								<FaPhoneAlt className='h-6 w-6 md:mr-4 mx-4' />
								412-456-6732
							</div>
							<div className='flex justify-start items-center'>
								<HiLocationMarker className='h-6 w-6 md:mr-4 mx-4' />
								123 Seasame Street, Chicago, Illinois 21227
							</div>
						</div>
						<img
							src={house}
							alt='house-vector'
							className='w-[350px] h-[250px] md:h-[300px] text-white flex justify-center items-center mx-auto'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
