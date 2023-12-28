import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import house from '../assets/Real_Estate_(201).png';
import { MdMail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className='flex flex-col-reverse md:flex-row shadow-xl h-[1050px]  md:h-[500px] w-full md:w-[90%] md:mt-40 justify-center items-center mt-20'>
			<div className='h-full w-full'>
				<h3 className='font-bold text-2xl px-6 mt-10 md:mt-0 md:pt-10'>
					Send Us a Email
				</h3>
				<p className='px-6 pt-4'>
					Send us a quick message and we’ll get right back to you.
				</p>
				<form className='pt-6 pl-6 space-y-4' ref={form} onSubmit={sendEmail}>
					<div className='flex flex-col'>
						<label className='pb-2'>Full Name</label>
						<input
							type='text'
							name='user_name'
							className='border border-gray-300 p-2 outline-none w-[95%]'
						/>
					</div>
					<div className='flex flex-col'>
						<label className='pb-2'>Email</label>
						<input
							type='email'
							name='user_email'
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
					<button
						type='submit'
						className='bg-[#27B1BE] text-white px-8 py-2 mt-8 flex justify-center items-center mx-auto'
					>
						Send
					</button>
				</form>
			</div>

			<div className='bg-[#27B1BE] h-[550px] md:h-full w-full flex flex-col-reverse md:flex-col justify-center items-center pt-10 pb-20 md:pb-0 font-bold'>
				<div className='mx-auto space-y-10 md:space-y-6 text-md'>
					<div className='flex justify-start items-center'>
						<MdMail className='h-6 w-6 md:mr-4 mx-4' />
						<p>realtyhomes.co@email.com</p>
					</div>
					<div className='flex justify-start items-center'>
						<FaPhoneAlt className='h-6 w-6 md:mr-4 mx-4' />
						<p>412-456-6732</p>
					</div>
					<div className='flex justify-start items-center'>
						<HiLocationMarker className='h-6 w-6 md:mr-4 mx-4' />
						<p>123 Seasame Street, Chicago, Illinois 21227</p>
					</div>
				</div>
				<img
					src={house}
					alt='house-vector'
					className='w-[350px] h-[250px] md:h-[300px] text-white flex justify-center items-center mx-auto'
				/>
			</div>
		</div>
	);
};

export default ContactForm;
