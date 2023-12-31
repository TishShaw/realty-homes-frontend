/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				slide: 'slide 35s linear infinite',
			},
		},
	},
	plugins: [],
};
