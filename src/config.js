module.exports = {
  email: 'oleginerr@gmail.com',

  socialMedia: [
    {
      name: 'Codepen',
      url: 'https://olegteleg.in',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/OlegTelegin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/OlegTeleginEcon',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/not_yet',
    },
  ],

  navLinks: [
    {
      name: 'About the Paper',
      url: '/#projects',
    },
    {
      name: 'Data & Codes',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
