import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<React.StrictMode>
			<Provider store={store}>
				<Navbar />
				<App />
				<Footer />
			</Provider>
		</React.StrictMode>
	</Router>
);
