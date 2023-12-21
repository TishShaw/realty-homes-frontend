import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='h-full'>
			<Hero />
			<Features />
		</div>
	);
};

export default HomePage;
