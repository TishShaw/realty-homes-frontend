import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';

const BlogPage = () => {
	const [blogData, setBlogData] = useState([]);

	const getNewsData = () => {
		axios
			.get(
				`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_DATA_API_KEY}&q=real%20estate&country=us&language=en`
			)
			.then((response) => setBlogData(response.data.results));
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		getNewsData();
	}, []);

	return (
		<div className='h-full w-full px-6 mb-20'>
			<div className='relative'>
				<img
					src='https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
					className='h-[200px] md:h-[350px] w-full pt-6'
				/>

				<div className='bg-gray-900 opacity-30 absolute h-[177px] md:h-[325px] w-full pt-6 top-6 z-2'></div>
			</div>
			<div className='mt-6 flex items-center text-md w-full'>
				<p className='mr-4 font-semibold'>Tags:</p>
				<div className='space-x-6 flex items-center'>
					{blogData?.slice(0, 3).map((blog, idx) => (
						<div className='text-[#27B1BE] flex items-center' key={idx}>
							{blog?.keywords?.map((tag, idx) => (
								<div key={idx} className='mr-4'>
									{tag}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 2xl:grid-cols-4 xl:gap-6'>
				{blogData?.map((data, idx) => (
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
