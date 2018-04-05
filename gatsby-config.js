module.exports = {
  siteMetadata: {
    title: 'Tucker McKinney - Web Developer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117045139-1",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet'
  ],
};
