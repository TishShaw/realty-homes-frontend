import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import axios from 'axios';
import L from 'leaflet';

const FitBounds = ({ markers }) => {
	const map = useMap();

	useEffect(() => {
		if (markers && markers.length > 0) {
			const bounds = L.latLngBounds(
				markers.map((marker) => [marker.lat, marker.lng])
			);
			map.fitBounds(bounds);
		}
	}, [markers, map]);

	return null;
};

const MapGrid = ({ listings, listing, address }) => {
	const [markers, setMarkers] = useState([]);

	const customIcon = new Icon({
		iconUrl: require('../assets/location-pin.png'),
		iconSize: [38, 38],
	});

	useEffect(() => {
		const fetchGeocodeData = async () => {
			if (listings) {
				console.log('listings');
				const newMarkers = [];
				for (let listing of listings) {
					const response = await axios.get(
						`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
							listing.title
						)}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
`
					);
					const { lat, lng } = response.data?.results[0]?.geometry?.location;
					newMarkers.push({ lat, lng, title: listing.title });
				}
				setMarkers(newMarkers);
			}
		};

		fetchGeocodeData();
	}, [listings]);

	useEffect(() => {
		async function fetchGeoData() {
			const newMarkers = [];
			if (address) {
				const response = await axios.get(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
						address
					)}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
`
				);
				const lat = response.data?.results[0]?.geometry?.location?.lat;
				const lng = response.data?.results[0]?.geometry?.location?.lng;
				if (!lat || !lng) {
					return <div>Loading...</div>; // Or any other loading state representation
				} else {
					const { lat, lng } = response.data?.results[0]?.geometry?.location;
					newMarkers.push({ lat, lng, title: listing.title });
					setMarkers(newMarkers);
				}
			}
		}
		fetchGeoData();
	}, [address]);

	if (listing && !address) {
		return <div>Loading...</div>;
	}
	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={5}
			style={{ width: '100%', height: '100%', zIndex: '20px' }}
		>
			<TileLayer
				attribution='&copy; OpenStreetMap contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<MarkerClusterGroup>
				{markers?.map((marker, idx) => (
					<Marker
						key={idx}
						position={[marker.lat, marker.lng]}
						icon={customIcon}
					>
						<Popup>{marker.title}</Popup>
					</Marker>
				))}
			</MarkerClusterGroup>
			<FitBounds markers={markers} />
		</MapContainer>
	);
};

export default MapGrid;
