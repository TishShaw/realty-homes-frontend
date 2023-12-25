import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerimage from '../assets/maurice-williams-tPX992SVljo-unsplash.jpg';
import Moment from 'react-moment';
import axios from 'axios';

const BlogPage = () => {
	const [blogData, setBlogData] = useState([]);

	// Third-party API
	// https://newsdata.io/api/1/news?apikey={process.env.NEWS_DATA_API_KEY}&q=real%20estate&country=us&language=en
	const getNewsData = () => {
		axios
			.get(`http://127.0.0.1:5500/news.json`)
			.then((response) => setBlogData(response.data));
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		getNewsData();
	}, []);

	return (
		<div className='h-full w-full px-6 mb-20'>
			<div className='relative'>
				<img
					src={headerimage}
					alt=''
					className='h-[200px] md:h-[350px] w-full pt-6'
				/>
				<div className='text-white absolute top-10 md:top-16 text-center w-full z-10'>
					<span className='text-sm md:text-lg font-medium text-[#27B1BE]'>
						Our Blog
					</span>
					<h1 className='text-3xl md:text-6xl'>You're in Good Company</h1>
					<p className='w-full md:text-2xl'>
						Your Guide to Real Estate, Design, and Living the Dream
					</p>
				</div>
				<div className='bg-gray-900 opacity-30 absolute h-[177px] md:h-[325px] w-full pt-6 top-6 z-2'></div>
			</div>
			<div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 2xl:grid-cols-4   xl:gap-6'>
				{blogData.map((data, idx) => (
					<div key={idx} className='h-full w-full mt-8 md:mt-10'>
						<Link to={`/our-blog/${data.article_id}`}>
							<div className='shadow-md h-[340px] w-full mb-6'>
								<img
									src={
										data.image_url
											? data.image_url
											: 'https://brandhub.co.nz/wp-content/uploads/2018/03/blog-page-placeholder-image-300x300.jpg'
									}
									alt='blog'
									className='h-[200px] w-full'
								/>
								<div className='flex overflow-scroll no-scrollbar space-x-4 mt-2 px-4'>
									{data?.keywords ? (
										data?.keywords?.slice(0, 3).map((tag, idx) => (
											<div key={idx}>
												<div className='bg-[#27B1BE] rounded-md  text-xs h-[20px] w-[90px] text-center flex items-center justify-center m-[4px]'>
													{tag}
												</div>
											</div>
										))
									) : (
										<div className='bg-[#27B1BE] rounded-md  text-xs h-[20px] w-[90px] text-center flex items-center justify-center m-[4px]'>
											Business
										</div>
									)}
								</div>
								<div className='px-4 flex justify-between flex-col'>
									<div className='mt-2'>
										<p className='leading-5'>{data.title.substring(0, 64)}</p>
									</div>
									<p className='mt-4 text-xs text-gray-400 '>
										<Moment format='M/DD/YYYY' date={blogData?.pubDate} />
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPage;
