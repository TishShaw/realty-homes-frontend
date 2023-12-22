import { useState, useEffect, useRef } from 'react';
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

const MapGrid = ({ listings, selectedAddress }) => {
	const [markers, setMarkers] = useState([]);
	const mapRef = useRef();
	const markerRefs = useRef([]);

	const customIcon = new Icon({
		iconUrl: require('../assets/location-pin.png'),
		iconSize: [38, 38],
	});

	useEffect(() => {
		const fetchGeocodeData = async () => {
			if (selectedAddress) {
				const response = await axios.get(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
						selectedAddress
					)}&key=AIzaSyARKvVKZFfgds0PWtJatS4snEZ9f99KU_0
`
				);
				const { lat, lng } = response.data?.results[0]?.geometry?.location;
				setMarkers([{ lat, lng, title: selectedAddress }]);
				if (mapRef.current) {
					mapRef.current.flyTo([lat, lng], 10);
				}
				const selectedMarkerIndex = markers.findIndex(
					(marker) => marker.title === selectedAddress
				);
				if (
					selectedMarkerIndex !== -1 &&
					markerRefs.current[selectedMarkerIndex]
				) {
					markerRefs.current[selectedMarkerIndex].openPopup();
				}
			} else {
				const newMarkers = [];
				for (let listing of listings) {
					const response = await axios.get(
						`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
							listing.title
						)}&key=AIzaSyARKvVKZFfgds0PWtJatS4snEZ9f99KU_0
`
					);
					const { lat, lng } = response.data?.results[0]?.geometry?.location;
					newMarkers.push({ lat, lng, title: listing.title });
				}
				setMarkers(newMarkers);
			}
		};

		fetchGeocodeData();
	}, [listings, selectedAddress]);

	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={5}
			style={{ width: '100%', height: '100%' }}
		>
			<TileLayer
				attribution='&copy; OpenStreetMap contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<MarkerClusterGroup>
				{markers.map((marker, idx) => (
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