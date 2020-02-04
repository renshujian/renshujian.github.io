module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `书剑温州录`,
    author: `任书剑`,
    description: `我们的征途是星辰大海`,
    siteUrl: `https://renshujian.github.io`,
    social: [
      {
        name: `github`,
        url: `https://github.com/renshujian`,
      },
    ],
  },
}
