/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-source-filesystem`, // loads data from .txt and .md files to website
      options: {
        name: `projects`, // name of this instance of the plugin
        path: `${__dirname}/src/data/projects/`, // directory this plugin will access
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // loads data from .txt and .md files to website
      options: {
        name: `images`, // name of this instance of the plugin
        path: `${__dirname}/src/images/projects/`, // directory this plugin will access
      },
    },
  ],

  siteMetadata: {
    title: "Ani",
    description: "Porfolio",
    copyright: "This website is copyright 2021",
  },
}
