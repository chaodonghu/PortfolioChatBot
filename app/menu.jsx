import React from 'react';
// Intro
import Intro from './components/docs/pages/intro/Intro';
import AboutMe from './components/docs/pages/intro/AboutMe';
import Hobbies from './components/docs/pages/intro/Hobbies';
// Examples
import Example1 from './components/docs/pages/examples/Example1';
import Example2 from './components/docs/pages/examples/Example2';
// API Referece
import Component1 from './components/docs/pages/reference/Component1';
// Others
import Contribute from './components/docs/pages/others/Contribute';
import Github from './components/docs/pages/others/Github';

const menu = {
  title: 'Dong\s Chatbot',
  homeLink: '/docs/intro',
  docsLink: '/docs/intro',
  github: {
    user: 'chaodonghu',
    repository: 'react-spa-boilerplate',
  },
  sections: [
    {
      title: 'About Me',
      icon: 'fa fa-arrow-right',
      links: [
        {
          href: '/docs/intro',
          title: 'Introduction',
          component: <Intro />,
        },
        {
          href: '/docs/aboutme',
          title: 'Story',
          component: <AboutMe />,
        },
        {
          href: '/docs/hobbies',
          title: 'Hobbies',
          component: <Hobbies />,
        },
      ],
    },
    {
      title: 'Examples',
      icon: 'fa fa-code',
      links: [
        {
          href: '/docs/example1',
          title: 'Example 1',
          component: <Example1 />,
        },
        {
          href: '/docs/example2',
          title: 'Example 2',
          component: <Example2 />,
        },
      ],
    },
    {
      title: 'API Reference',
      icon: 'fa fa-cogs',
      links: [
        {
          href: '/docs/component1',
          title: 'Component 1',
          description: 'Description of component 1',
          component: <Component1 />,
        },
      ],
    },
    {
      title: 'Others',
      icon: 'fa fa-th',
      links: [
        {
          href: '/docs/contribute',
          title: 'How to Contribute',
          component: <Contribute />,
        },
        {
          href: '/docs/github',
          title: 'Github Page',
          component: <Github />,
        },
      ],
    },
  ],
};

export default menu;
