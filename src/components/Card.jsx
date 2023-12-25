import React, { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/auth/authSlice';

const Card = ({ idx, listing, active }) => {
	const [fav, setFav] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const favorites = user?.userprofile?.favorites;
	const token = JSON.parse(localStorage.getItem('userToken'));
	const accessToken = token?.access;

	const handleAddFav = () => {
		if (accessToken && listing?.id) {
			dispatch(addFavorite({ listing: listing, accessToken }));
		}
	};
	// Handle removing favorite
	const handleRemoveFav = () => {
		if (accessToken && listing?.id) {
			dispatch(removeFavorite({ listing: listing, accessToken: accessToken }));
		}
	};

	// Change heart to filled if current card is in favorites
	useEffect(() => {
		setFav(favorites?.some((item) => item.id === listing.id));
	}, [favorites, listing.id]);

	return (
		<div className={`relative ${active === 'row' ? 'flex' : ''}`}>
			<img
				src={listing.images[0].image}
				alt=''
				className={`${
					active === 'row'
						? 'md:h-[160px] md:w-[400px]'
						: 'md:h-[200px] md:w-[600px]'
				}   w-[650px] h-[150px]`}
			/>
			<div
				className='text-xl md:text-2xl absolute text-white bg-[#27B1BE] m-2 rounded-full p-2 top-0 left-0 cursor-pointer'
				onClick={(event) => {
					event.stopPropagation();
					if (!fav) {
						handleAddFav();
					} else {
						handleRemoveFav();
					}
				}}
			>
				{fav ? <FaHeart /> : <FaRegHeart className='' />}
			</div>
			<div className='p-2'>
				<p className='text-md md:text-lg mb-2 h-[50px]'>{listing.title}</p>
				<p className='text-lg'>
					<NumericFormat
						value={Math.floor(listing.price)}
						prefix='$'
						thousandSeparator=','
						displayType='text'
						renderText={(value) => <b>{value}</b>}
					/>
				</p>
				<div className='flex space-x-4 text-md mt-2'>
					<p className='flex font-medium'>
						{Math.floor(listing.num_of_bedrooms)}
						{''}
						<span className='text-gray-600 font-light'> Beds</span>
					</p>
					<p className='flex font-medium'>
						{Math.floor(listing.num_of_bathrooms)}
						<span className='text-gray-600 font-light'> Baths</span>
					</p>
					<p className='flex font-medium'>
						{listing.sqft}
						{'  '}
						<span className='text-gray-600 font-light'> Sqft</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
