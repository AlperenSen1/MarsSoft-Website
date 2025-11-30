import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				orbitron: ['Orbitron', 'sans-serif'],
			},
			colors: {
				'mars-black': '#0a0a0a',
				'mars-red': '#c0392b',
				'mars-orange': '#d35400',
				'mars-gray': '#1c1c1c',
			},
		},
	},
	plugins: [],
};