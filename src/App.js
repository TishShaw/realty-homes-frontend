import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetails from './components/BlogDetails';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about-us' element={<AboutPage />} />
			<Route path='/our-blog' element={<BlogPage />} />
			<Route path='/our-blog/:id' element={<BlogDetails />} />
			<Route path='/contact-us' element={<ContactPage />} />
		</Routes>
	);
}

export default App;
