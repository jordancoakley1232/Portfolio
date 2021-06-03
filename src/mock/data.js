import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jordan Coakley Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jordan Coakley',
  subtitle: `and I'm a Front End Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Selfie-cropped.jpg',
  paragraphOne: `I am a Front End Developer, based in Bucharest, Romania. Skilled in HTML, CSS, SASS, Javascript and React. I'm always learning and looking to not only sharpen my current skills, but to also develop new ones along the way`,
  paragraphTwo: `With almost 2 years of experience with Javascript and React, I'm looking to join a team where I can continue to grow and add value.`,
  resume: 'https://resume.io/r/zHzr0wDM1', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Listify.PNG',
    title: 'Listify',
    info: 'A React-Redux App that allows you to keep track of your shopping list. ',
    info2: 'Built with React, React-Redux and React-Router.',
    url: 'https://jordancoakley1232.github.io/Listify/#/',
    repo: 'https://github.com/jordancoakley1232/Listify/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VendingMachine-screenshot.PNG',
    title: 'React Vending Machine',
    info: 'A virtual vending machine built with React, SASS and Material Ui. ',
    info2: 'Incorporated React Hooks, React-Router and useContext.',
    url: 'https://jordancoakley1232.github.io/react-vending-machine/#/',
    repo: 'https://github.com/jordancoakley1232/react-vending-machine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Coinhub-image.PNG',
    title: 'Coinhub',
    info: `React Cryptocurrency site, built with React Hooks, based on the design from coinbase.com`,
    info2: 'Built with React, using Sass, React-router, react-pagination, react-modal etc..',
    url: 'https://jordancoakley1232.github.io/coinhub/#/',
    repo: 'https://github.com/jordancoakley1232/coinhub/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'uptodate-screenshot.PNG',
    title: 'UpToDate App',
    info: 'A fullstack Home Dashboard built with HTML, SASS, Javascript and Nodejs with Express',
    info2: '',
    url: 'https://uptodate-app.herokuapp.com/',
    repo: 'https://github.com/jordancoakley1232/Up-To-Date', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'apple-clone-screenshot.PNG',
    title: 'Apple Landing Page Clone',
    info: `Clone of Apple.com landing page built with HTML,CSS and SASS`,
    info2: '',
    url: 'https://jordancoakley1232.github.io/apple-landing-page.github.io/',
    repo: 'https://github.com/jordancoakley1232/apple-landing-page.github.io', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jordan_c1232@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jordan-coakley-703574145/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jordancoakley1232',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
