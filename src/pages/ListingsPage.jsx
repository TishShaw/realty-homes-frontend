import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsGrid } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import { TbTableColumn } from 'react-icons/tb';
import { IoSearch } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';
import Card from '../components/Card';
import axios from 'axios';
import MapGrid from '../components/MapGrid';

const ListingsPage = () => {
	const [data, setData] = useState([]);
	const [row, setRow] = useState(false);
	const [grid, setGrid] = useState(false);
	const [showMap, setShowMap] = useState(false);
	const [active, setActive] = useState('grid');
	const [selectedListingAddress, setSelectedListingAddress] = useState('');
	const [filteredData, setFilteredData] = useState([]);
	const [isSticky, setSticky] = useState(false);

	const [filterParams, setFilterParams] = useState({
		propertyType: {
			singleFamilyHome: false,
			condoTownhouse: false,
			apartment: false,
			multiFamily: false,
		},
		priceRange: {
			under200k: false,
			from200kTo500k: false,
			from500kTo1m: false,
			over1m: false,
		},
		bedrooms: {
			one: false,
			two: false,
			three: false,
			four: false,
			five: false,
		},
		bathrooms: {
			one: false,
			two: false,
			three: false,
			four: false,
			five: false,
		},
	});

	const handleListingClick = (address) => {
		setSelectedListingAddress(address);
	};

	const handleSearchFilter = (e) => {
		const searchInput = e.target.value.toLowerCase();
		if (searchInput.trim() === '') {
			setFilteredData(data);
		} else {
			const filtered = data.filter((listing) => {
				const titleMatch = listing?.title?.toLowerCase().includes(searchInput);
				const addressMatch = listing?.address
					?.toLowerCase()
					.includes(searchInput);
				const cityMatch = listing?.city?.toLowerCase().includes(searchInput);
				const zipCodeMatch = listing?.zip_code
					?.toString()
					.includes(searchInput);

				return titleMatch || addressMatch || cityMatch || zipCodeMatch;
			});
			setFilteredData(filtered);
		}
	};

	const applyFilters = () => {
		let filtered = data;

		if (Object.values(filterParams.propertyType).some((val) => val)) {
			filtered = filtered.filter((listing) => {
				if (
					filterParams.propertyType.singleFamilyHome &&
					listing.type === 'Single Family Home'
				)
					return true;
				if (
					filterParams.propertyType.condoTownhouse &&
					listing.type === 'Condo/Townhouse'
				)
					return true;
				if (filterParams.propertyType.apartment && listing.type === 'Apartment')
					return true;
				if (
					filterParams.propertyType.multiFamily &&
					listing.type === 'Multi-Family'
				)
					return true;
				return false;
			});
		}

		if (Object.values(filterParams.priceRange).some((val) => val)) {
			filtered = filtered.filter((listing) => {
				if (filterParams.priceRange.under200k && listing.price < 200000)
					return true;
				if (
					filterParams.priceRange.from200kTo500k &&
					listing.price >= 200000 &&
					listing.price <= 500000
				)
					return true;
				if (
					filterParams.priceRange.from500kTo1m &&
					listing.price > 500000 &&
					listing.price <= 1000000
				)
					return true;
				if (filterParams.priceRange.over1m && listing.price > 1000000)
					return true;
				return false;
			});
		}

		if (Object.values(filterParams.bedrooms).some((val) => val)) {
			filtered = filtered.filter((listing) => {
				if (filterParams.bedrooms.one && listing.num_of_bedrooms === '1.00')
					return true;
				if (filterParams.bedrooms.two && listing.num_of_bedrooms === '2.00')
					return true;
				if (filterParams.bedrooms.three && listing.num_of_bedrooms === '3.00')
					return true;
				if (filterParams.bedrooms.four && listing.num_of_bedrooms === '4.00')
					return true;
				if (filterParams.bedrooms.five && listing.num_of_bedrooms === '5.00')
					return true;
				return false;
			});
		}

		if (Object.values(filterParams.bathrooms).some((val) => val)) {
			filtered = filtered.filter((listing) => {
				if (filterParams.bathrooms.one && listing.num_of_bathrooms === '1.00')
					return true;
				if (filterParams.bathrooms.two && listing.num_of_bathrooms === '2.00')
					return true;
				if (filterParams.bathrooms.three && listing.num_of_bathrooms === '3.00')
					return true;
				if (filterParams.bathrooms.four && listing.num_of_bathrooms === '4.00')
					return true;
				if (filterParams.bathrooms.five && listing.num_of_bathrooms === '5.00')
					return true;
				return false;
			});
		}

		setFilteredData(filtered);
	};

	const handleScroll = () => {
		const offset = window.scrollY;
		const sticky = offset > 70;
		setSticky(sticky);
	};

	useEffect(() => {
		if (data.length === 0 || filteredData.length === 0) {
			async function getData() {
				await axios
					.get('https://realty-homes-4290f3fd1ed3.herokuapp.com/properties/')
					.then((response) => setData(response.data));
			}
			getData();
		}
		applyFilters();

		window.scrollTo(0, 0);

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, [filterParams, data]);

	return (
		<div className='h-full w-full mb-10 px-6'>
			<div className='h-[70%] w-full md:grid'>
				<div className='h-28 border-b-orange-500 w-full flex justify-between items-center px-6'>
					<div className='shadow h-[60px] w-60 rounded hidden md:flex justify-evenly items-center space-x-2 overflow-hidden'>
						<div className='flex items-center text-2xl text-center h-full p-4 shadow'>
							<GrLocation />
						</div>
						<p className='w-full overflow-hidden'>
							{selectedListingAddress
								? selectedListingAddress?.substring(0, 20)
								: filteredData
								? filteredData[0]?.title.substring(0, 20)
								: data[0]?.title.substring(0, 20)}
							...
						</p>
					</div>
					<div
						className={`shadow h-[60px] w-full md:w-[500px] rounded-full flex items-center pr-4 ${
							isSticky && 'bg-white fixed top-0 left-0 right-0 z-40'
						}`}
					>
						<input
							type='text'
							className='h-full w-full outline-none px-4 pl-4 rounded-full text-md md:text-lg'
							placeholder='Search address, city, and/or zip code...'
							onChange={handleSearchFilter}
						/>
						<div className='text-2xl bg-[#27B1BE] text-white rounded-full p-[6px]'>
							<IoSearch />
						</div>
					</div>
					<div className='shadow h-[60px] w-60 rounded  hidden md:flex justify-around items-center text-2xl'>
						<div
							className={`${
								active === 'grid' && 'bg-[#27B1BE]'
							} p-2 rounded px-2`}
							onClick={() => {
								setActive('grid');
								setGrid(true);
							}}
						>
							<BsGrid />
						</div>
						<div
							className={`${
								active === 'row' && 'bg-[#27B1BE]'
							} p-2 rounded px-2`}
							onClick={() => {
								setActive('row');
								setRow(true);
							}}
						>
							<FaBars />
						</div>
						<div
							className={`${
								active === 'map' && 'bg-[#27B1BE]'
							} p-2 rounded px-2`}
							onClick={() => {
								setActive('map');
								setShowMap(true);
							}}
						>
							<TbTableColumn />
						</div>
					</div>
				</div>
				<div className='flex h-screen'>
					<div className='border border-gray-300 h-full w-[30%] hidden md:flex'>
						<div className='p-4'>
							<h2 className='text-2xl border-b-2 border-gray-100 pb-2 font-semibold'>
								Filter by
							</h2>
						</div>
						<div className='overflow-y-scroll h-[580px] no-scrollbar'>
							<div className='h-full'>
								<div className='p-4'>
									<h2 className='text-lg font-medium'>Property Type</h2>
								</div>
								<div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														propertyType: {
															...filterParams.propertyType,
															singleFamilyHome: e.target.checked,
														},
													})
												}
											/>
											<p>Single Family Home</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														propertyType: {
															...filterParams.propertyType,
															condoTownHouse: e.target.checked,
														},
													})
												}
											/>
											<p>Condo/ Townhouse</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														propertyType: {
															...filterParams.propertyType,
															apartment: e.target.checked,
														},
													})
												}
											/>
											<p>Apartment</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														propertyType: {
															...filterParams.propertyType,
															multiFamily: e.target.checked,
														},
													})
												}
											/>
											<p>Multi-Family</p>
										</div>
									</div>
								</div>
								<div>
									<div className='p-4'>
										<h2 className='text-lg font-medium'>Price Range</h2>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														priceRange: {
															...filterParams.priceRange,
															under200k: e.target.checked,
														},
													})
												}
											/>
											<p>Under $200K</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														priceRange: {
															...filterParams.priceRange,
															from200kTo500k: e.target.checked,
														},
													})
												}
											/>
											<p>$200K - $500K</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														priceRange: {
															...filterParams.priceRange,
															from500kTo1m: e.target.checked,
														},
													})
												}
											/>
											<p>$500K - $1M</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														priceRange: {
															...filterParams.priceRange,
															over1m: e.target.checked,
														},
													})
												}
											/>
											<p>&gt; $1M</p>
										</div>
									</div>
								</div>
								<div>
									<div className='p-4'>
										<h2 className='text-lg font-medium'>Bedrooms</h2>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														bedrooms: {
															...filterParams.bedrooms,
															one: e.target.checked,
														},
													})
												}
											/>
											<p>1 Bedrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														bedrooms: {
															...filterParams.bedrooms,
															two: e.target.checked,
														},
													})
												}
											/>
											<p>2 Bedrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														bedrooms: {
															...filterParams.bedrooms,
															three: e.target.checked,
														},
													})
												}
											/>
											<p>3 Bedrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														bedrooms: {
															...filterParams.bedrooms,
															four: e.target.checked,
														},
													})
												}
											/>
											<p>4 Bedrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) =>
													setFilterParams({
														...filterParams,
														bedrooms: {
															...filterParams.bedrooms,
															five: e.target.checked,
														},
													})
												}
											/>
											<p>5 Bedrooms</p>
										</div>
									</div>
								</div>
								<div>
									<div className='p-4'>
										<h2 className='text-lg font-medium'>Bathrooms</h2>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) => {
													setFilterParams({
														...filterParams,
														bathrooms: {
															...filterParams.bathrooms,
															one: e.target.checked,
														},
													});
												}}
											/>
											<p>1 Bathrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) => {
													setFilterParams({
														...filterParams,
														bathrooms: {
															...filterParams.bathrooms,
															two: e.target.checked,
														},
													});
												}}
											/>
											<p>2 Bathrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) => {
													setFilterParams({
														...filterParams,
														bathrooms: {
															...filterParams.bathrooms,
															three: e.target.checked,
														},
													});
												}}
											/>
											<p>3 Bathrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) => {
													setFilterParams({
														...filterParams,
														bathrooms: {
															...filterParams.bathrooms,
															four: e.target.checked,
														},
													});
												}}
											/>
											<p>4 Bathrooms</p>
										</div>
									</div>
									<div className='flex justify-between items-center pt-2 px-4'>
										<div className='flex items-center space-x-2'>
											<input
												type='checkbox'
												onChange={(e) => {
													setFilterParams({
														...filterParams,
														bathrooms: {
															...filterParams.bathrooms,
															five: e.target.checked,
														},
													});
												}}
											/>
											<p>5 Bathrooms</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='h-screen w-full flex mx-auto md:justify-start md:items-start md:pt-6 md:overflow-y-scroll md:px-12'>
						<div
							className={
								active === 'row'
									? 'w-full'
									: 'flex w-full overflow-hidden no-scrollbar md:pb-6 md:bg-[#27B1BE] flex-wrap items-center justify-center md:justify-start md:items-start overflow-y-scroll'
							}
						>
							{filteredData.length > 0
								? filteredData.map((listing, idx) => (
										<div
											key={idx}
											className={`${
												active === 'row'
													? 'h-40 w-full'
													: 'h-50 w-full md:w-[220px]'
											} shadow-md  border border-gray-300 rounded bg-white mt-2 mb-6 md:mr-6 cursor-pointer`}
											onClick={() => handleListingClick(listing.title)}
										>
											<Link to={`/listings/${listing.id}`}>
												<Card listing={listing} active={active} />
											</Link>
										</div>
								  ))
								: data?.map((listing, idx) => (
										<div
											key={idx}
											className={`${
												active === 'row'
													? 'h-40 w-full'
													: 'h-50 w-full md:w-[220px]'
											} shadow-md  border border-gray-300 rounded bg-white mt-2 mb-6 md:mr-6 cursor-pointer`}
											onClick={() => handleListingClick(listing.title)}
										>
											<Link to={`/listings/${listing.id}`}>
												<Card listing={listing} active={active} />
											</Link>
										</div>
								  ))}
						</div>
						{active === 'map' && (
							<div className='bg-gray-300 h-full w-[90%] ml-2 mt-2 rounded'>
								<MapGrid
									listings={data}
									selectedAddress={selectedListingAddress}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListingsPage;
