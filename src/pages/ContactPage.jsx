import React, { useState, useEffect } from 'react';
import ChatModal from '../components/ChatModal';
import HelpModal from '../components/HelpModal';
import FaqModal from '../components/FaqModal';
import ContactForm from '../components/ContactForm';
import { contactPageData } from '../utils/Data';

const ContactPage = () => {
	const [openChat, setOpenChat] = useState(false);
	const [openHelp, setOpenHelp] = useState(false);
	const [openFAQs, setOpenFAQs] = useState(false);

	const handleOpenModal = () => {
		if (openHelp) {
			setOpenChat(false);
			setOpenFAQs(false);
			setOpenHelp(true);
		} else if (openFAQs) {
			setOpenChat(false);
			setOpenHelp(false);
			setOpenFAQs(true);
		} else if (openChat) {
			setOpenFAQs(false);
			setOpenHelp(false);
			setOpenChat(true);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='h-full w-full px-6 flex justify-center items-center flex-col mb-20'>
			<div className='flex justify-center items-center flex-col cursor-pointer'>
				<h1 className='text-3xl font-bold mt-10 md:mt-20'>Contact Us</h1>
				<div className='w-[250px] mt-[8px]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1729 149'
						fill='#27B1BE'
					>
						<path d='M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z'></path>
					</svg>
				</div>
				<div className='flex flex-col md:flex-row items-center justify-center space-x-6'>
					{contactPageData.map((item, idx) => (
						<div
							key={idx}
							className='md:flex md:mt-8 md:space-x-3 xl:space-x-14 w-full'
							onClick={() => {
								if (idx === 0) {
									setOpenHelp(true);
								} else if (idx === 1) {
									setOpenFAQs(true);
								} else {
									setOpenChat(true);
								}

								handleOpenModal();
							}}
						>
							<div className='relative w-full mt-10 md:flex'>
								<div className='shadow-lg w-[250px] lg:w-[320px] h-[200px] rounded text-center flex justify-center items-center flex-col mx-auto'>
									<div className='flex justify-center items-center text-center z-2'>
										<span className='z-2'>{item.name}</span>
										<div className='bg-gray-300 rounded-full w-12 h-12 absolute -z-10'></div>
									</div>
									<p className='px-2 mt-6'>{item.text}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<ContactForm />
				<div className='z-50 bottom-0 right-0 fixed mr-8'>
					{openHelp && (
						<HelpModal setOpenHelp={setOpenHelp} openHelp={openHelp} />
					)}
				</div>
				<div className='z-50 bottom-0 right-0 fixed mr-8'>
					{openFAQs && (
						<FaqModal setOpenFAQs={setOpenFAQs} openFAQs={openFAQs} />
					)}
				</div>
				<div className='z-50 bottom-0 right-0 fixed mr-8'>
					{openChat && (
						<ChatModal setOpenChat={setOpenChat} openChat={openChat} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
