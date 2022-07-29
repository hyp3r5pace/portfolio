module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Soumyajit Deb',
    // Main Site Title
    title: `Ryan Fitzgerald | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Welcome to my little corner in the web!`,
    // Optional: Twitter account handle
    author: `@OnChainIntern`,
    // Optional: Github account URL
    github: `https://github.com/hyp3r5pace`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/soumyajitdeb/`,
    // Content of the About Me section
    about: `I am motivated software engineer, who loves to tinker with code. My primary interest lies in web application development, blockchain, Defi, cryptography and software security.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Version control system',
        description:
          'A version control system implemented in python. It is for educational purposes only and not to be used in production.',
        link: 'https://github.com/hyp3r5pace/version-control-system',
      },
      {
        name: 'Defindstarter',
        description:
          'A decentralized crowdfunding application built on the avalanche blockchain.',
        link: 'https://hyp3r5pace.github.io/crowdfunding-platform-avalanche/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Legato Health Technologies',
        description: 'Software Developer Intern, January 2022 - June 2022',
        link: '',
      },
      {
        name: 'Indian Institute Of Information Technology Guwahati',
        description: 'Reserach Intern, February 2022 - April 2022',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, JavaScript (ES6+), Solidity, Rust, Node.js, Express.js, React, Flask, Django',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
