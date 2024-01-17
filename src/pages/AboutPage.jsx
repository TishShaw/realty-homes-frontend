import React, { useEffect } from 'react';
import houseimgae from '../assets/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg';

const AboutPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='h-full w-full px-4 flex flex-col md:justify-center md:items-center md:relative'>
			<div className='font-bold md:px-4 lg:px-40 pt-10 lg:pt-28 md:text-md lg:text-lg md:leading-8 lg:leading-10 md:mt-60 lg:mt-0'>
				<span className='md:text-lg lg:text-2xl'>Welcome to Realty Homes</span>,
				a place where we understand that finding the perfect home isn't just
				about bricks and mortar; it's about fulfilling dreams and creating
				lasting memories. With a heritage spanning over two decades in the real
				estate world, we take immense pride in helping individuals and families
				find not just houses, but the spaces where their hearts truly belong.
				Our dedication to excellence is rooted in our desire to ensure your
				utmost satisfaction. Here at Realty Homes, we're not just real estate
				experts; we're your partners, your guides, and your friends on this
				incredible journey of finding home.
			</div>
			<div className='mt-20 mb-20 flex flex-col lg:flex-row  lg:mb-80'>
				<div className='bg-[#27B1BE] w-full lg:w-[50%] h-[400px] md:h-[300px] md:text-lg lg:h-[350px] p-10 md:z-20 mb-10 px-4 lg:ml-40 lg:text-lg md:leading-10 xl:leading-8'>
					At Realty Homes, we know that a home is more than a property -- it's
					the cocoon where you'll build your life's story. We offer a diverse
					range of homes, from cozy starter houses to luxurious dream abodes,
					all designed to fit your unique needs and dreams. Our team of
					warm-hearted real estate professionals is here to walk beside you
					through every step of buying or selling, ensuring your experience is
					as smooth as it is fulfilling.
				</div>
				<img
					src={houseimgae}
					alt='small-house'
					className='w-[100%] lg:w-[40%] h-[350px] md:h-[230px] lg:h-[350px] xl:h-[400px] z-2 md:left-0 md:absolute md:top-6 lg:top-[775px] lg:left-[550px] md:px-6 xl:top-[650px] xl:left-[750px]'
				/>
			</div>
		</div>
	);
};

export default AboutPage;
