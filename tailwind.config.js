const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/**/*.{html,js}"],
	darkMode: false,
	theme: {
		fontFamily: {
			lato: ["Lato", "sans-serif"], // font-lato
		},
		colors: {
			"white": "#FFF",
			"black": "#000",
			"special-gray": "#F5F0F0",
			"rose": "rgb(190 18 60)",
			"rose-800": "rgb(190 18 60 / 0.8)",
			...defaultTheme.colors,
		},
		extend: {}
	},
	variants: {
		extend: {
			// "background-color": ["hover", "focus", "active"],
			"background-color": ["hover"],
		}
	},
	plugins: [],
}
