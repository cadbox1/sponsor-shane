import baseTheme from "gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui";

import "typeface-source-sans-pro";

export default {
	useColorSchemeMediaQuery: true,
	fonts: {
		body:
			'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
		heading:
			'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
		monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
	},
	colors: {
		text: "#000",
		background: "#fff",
		primary: "hsl(340, 100%, 60%)",
		muted: "hsl(0, 0%, 96%)",
		heading: "text",
		favouriteColorGreen: "limegreen",
		modes: {
			dark: {
				text: "#fff",
				background: "#000",
				primary: "hsl(340, 100%, 60%)",
				muted: "hsl(0, 0%, 10%)",
				favouriteColorGreen: "lime",
			},
		},
	},
	space: [0, 4, 8, 12, 16, 24, 32, 64, 96, 128],
	sizes: {
		container: 850,
	},
	fontSizes: [16, 18, 21, 24, 32, 36, 44],
	lineHeights: {
		body: 1.7,
		heading: 1.2,
	},
	fontWeights: {
		body: 400,
		heading: 600,
		bold: 600,
	},
	styles: {
		...baseTheme.styles,
		a: {
			...baseTheme.styles.a,
			textDecoration: "none",
			":active, :hover": {
				textDecoration: "underline",
			},
		},
		p: {
			...baseTheme.styles.p,
			fontSize: 2,
		},
		pre: {
			...baseTheme.styles.pre,
			fontSize: 0,
		},
	},
};
