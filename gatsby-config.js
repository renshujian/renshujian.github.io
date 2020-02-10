module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
  ],
  siteMetadata: {
    lang: `zh-Hans-CN`, // no effect
    title: `书剑温州录`,
    author: `任书剑`,
    description: `我们的征途是星辰大海`,
    siteUrl: `https://renshujian.github.io`,
    social: [
      {
        name: `github`,
        url: `https://github.com/renshujian`,
      },
      {
        name: ` `,
        url: `/#覆盖gatsby-theme-blog-core/gatsby-config.js中的siteMetadata.social[1]`,
      },
    ],
  },
}
