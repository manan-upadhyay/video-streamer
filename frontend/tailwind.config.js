/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme"),
	plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/common/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			aspectRatio: {},
			fontFamily: {
				sans: ['"Raleway"', "sans-serif"],
				Inter: ['"Inter"', "sans-serif"],
				...defaultTheme.fontFamily.sans,
			},
			colors: {
				primary: "#111827",
				secondary: "#0b0f19",
				"input-border": "#2D3748",
				transparent: "transparent",
				"button-primary": "#7582eb",
				"primary-text": "#EDF2F7",
				"secondary-text": "#A0AEC0",
				theme: {
					light: "#1A1A1A",
					secondary: "#8E8D8A",
					dark: {
						100: "#0D0D0D",
						200: "#181818",
						300: "#222222",
					},
					primary: {
						100: "#6F91AA",
						200: "#42637C",
						300: "#2A4251",
					},
				},
				disable: "#55524D",
				danger: "#CC3333",
				yellow: "#FFD700",
			},
		},
		container: {
			center: true,
			padding: "1rem",
		},
		screens: {
			xxs: "320px",
			xs: "480px",
			sm: "576px",
			md: "767px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents }) {
			addBase({});
			addComponents({
				".container": {
					maxWidth: "100%",
					"@screen xxs": {
						maxWidth: "95%",
					},
					"@screen xs": {
						maxWidth: "95%",
					},
					"@screen sm": {
						maxWidth: "98%",
					},
					"@screen md": {
						maxWidth: "98%",
					},
					"@screen lg": {
						maxWidth: "98%",
					},
					"@screen xl": {
						maxWidth: "98%",
					},
					"@screen xxl": {
						maxWidth: "98%",
					},
				},
			});
		}),
	],
	important: true,
};
