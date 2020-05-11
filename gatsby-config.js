module.exports = {
	plugins: [
		{
			resolve: `gatsby-theme-ui-blog`,
			options: {
				mdx: true,
				basePath: `/blog`,
				contentPath: "content/posts",
				assetPath: "content/assets",
			},
		},
		{
			resolve: "gatsby-plugin-emoji-favicon",
			options: {
				emoji: "🍉",
			},
		},
		"gatsby-plugin-theme-ui"
	],
	siteMetadata: {
		title: `Sponsor Shane`,
	},
};
