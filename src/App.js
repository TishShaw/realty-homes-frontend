import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetails from './components/BlogDetails';
import ListingsPage from './pages/ListingsPage';
import ListingDetailsPage from './pages/ListingDetailsPage';
import AccountPage from './pages/AccountPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about-us' element={<AboutPage />} />
			<Route path='/our-blog' element={<BlogPage />} />
			<Route path='/our-blog/:id' element={<BlogDetails />} />
			<Route path='/listings?' element={<ListingsPage />} />
			<Route path='/listings?/:id' element={<ListingDetailsPage />} />
			<Route path='/contact-us' element={<ContactPage />} />
			<Route path='/account' element={<AccountPage />} />
			<Route path='/account/listings/:id' element={<ListingDetailsPage />} />
		</Routes>
	);
}

export default App;
