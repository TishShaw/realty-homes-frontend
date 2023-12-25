import React from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const AccountPage = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	if (!user) {
		return navigate('/');
	}
	return (
		<div className='px-6 mt-6 mb-20 h-full w-full'>
			<div className='flex flex-col md:flex-row'>
				<div className='shadow bg-gray-300 h-30 md:h-full w-full md:w-[30%] p-4 flex items-center mx-auto justify-center flex-col'>
					<div className='rounded-full'>
						<img
							src='https://picsum.photos/200/300'
							alt='profile'
							className='rounded-full w-20 h-20 md:w-40 md:h-40'
						/>
					</div>
					<div className='text-center'>
						<p className='mt-4 text-xl'>
							{user.first_name} {user.last_name}
						</p>
						<p className='text-sm'>Member since: Dec 22 2023</p>
					</div>

					<ul className='w-full mt-12'>
						<li className='bg-gray-200 w-full py-2 px-2 cursor-pointer'>
							My Favorites
						</li>
						<li
							className='bg-gray-200 w-full py-2 px-2 cursor-pointer mt-2'
							onClick={() => {
								dispatch(logout());
							}}
						>
							Logout
						</li>
					</ul>
				</div>
				<div className='h-[100%] w-full md:w-[70%] p-4 pt-0 flex flex-wrap pl-8 mt-6 md:mt-0'>
					{user.userprofile.favorites?.map((item, idx) => (
						<div key={idx} className='w-full md:w-[230px] mr-8 shadow mb-6'>
							<Link to={`listings/${item.slug}`}>
								<Card key={idx} listing={item} />
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AccountPage;
