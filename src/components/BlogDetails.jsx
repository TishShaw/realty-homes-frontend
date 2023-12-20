import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';

const BlogDetails = () => {
	const [post, setPost] = useState(null);
	const id = useParams();

	const getBlogPostDetails = () => {
		axios.get('http://127.0.0.1:5500/news.json').then((res) => {
			res.data?.map((content) => {
				if (content?.article_id == id.id) {
					setPost(content);
				}
			});
		});
	};
	useEffect(() => {
		window.scrollTo(0, 0);
		getBlogPostDetails();
	}, []);

	return (
		<div className='px-6 w-full h-full mb-10'>
			<div className='h-full pt-8'>
				<h1 className='text-center text-3xl md:text-4xl font-medium'>
					{post?.title}
				</h1>
				<img
					src={
						post?.image_url
							? post.image_url
							: 'https://brandhub.co.nz/wp-content/uploads/2018/03/blog-page-placeholder-image-300x300.jpg'
					}
					alt='blog-details'
					className='h-[450] md:h-[300px] w-full mt-6'
				/>
				<div className='mt-4 text-sm space-y-2 md:text-lg md:space-y-1'>
					<p className=''>Written By: {post?.creator}</p>
					<p className=''>
						{' '}
						<Moment format='M/DD/YYYY' date={post?.pubDate} />
					</p>
				</div>
			</div>
			<div className='bg-[#27B1BE] mt-6 p-4 text-sm md:text-md md:p-10 md:text-lg w-full'>
				<div className=''>{post?.content.slice(0, 1400)}...</div>
				<button className='mx-auto bg-white flex justify-center items-center px-4 py-2 mb-4 mt-6'>
					<Link to={post?.link}>Read More</Link>
				</button>
			</div>

			<Link to='/our-blog'>
				<div className='bg-gray-300 w-32 text-center mt-4 font-medium'>
					Back to Home
				</div>
			</Link>
		</div>
	);
};

export default BlogDetails;
