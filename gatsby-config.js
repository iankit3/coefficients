const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Coefficient Partners',
    description: 'A Corporate Advisory Firm',
    contact: {
      phone: '+91 9999052033',
      email: 'aditya@coefficients.in',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Team',
        link: '/team',
      },
      // {
      //   name: 'Testimonials',
      //   link: '/testimonials',
      // },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     postCssPlugins: [
    //       require(`postcss-preset-env`)({
    //         stage: 2,
    //         features: {
    //           "nesting-rules": true,
    //         },
    //       }),
    //     ],
    //     precision: 6,
    //   },
    // },    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
