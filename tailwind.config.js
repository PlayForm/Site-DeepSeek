import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./Public/**/*.html", "./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],

	darkMode: "media",

	theme: {
		container: {
			center: true,
		},
		extend: {
			transitionTimingFunction: {
				apple: "cubic-bezier(0.21, 0.1, 0.21, 1)",
			},
			fontFamily: {
				sans: ["Albert Sans", ...fontFamily.sans],
			},
			colors: {
				backgroundLight: "var(--background-light)",
				backgroundDark: "var(--background-dark)",
			},
		},
	},

	variants: {},

	// No Tailwind plugins: the forms reset drew rounded controls, and the
	// typography plugin shipped a `.prose` tree the site never renders. The
	// site styles its own inputs and prose, so both were weight without a use.
	plugins: [],
};
