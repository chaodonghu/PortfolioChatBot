import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// import PropTypes from 'prop-types';

// chatbot static components
import NoTour from './NoTour';
import NoImGood from './NoImGood';
import End from './End';
import Wasteman from './Wasteman';


import AboutRoute from '../redirect/AboutRoute'

import TourAbout from '../redirect/TourAbout'
// all available props


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botDelay: 1000,
      opened: true,
      steps: [
            {
              id: '1',
              message: 'Hi Dong here. Welcome to my about me page. What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}. Thank you for visiting my portfolio!',
              trigger: '4',
            },
            {
              id: '4',
              message: 'Would you like me to give you a tour?',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                { value: 1, label: 'Of course!', trigger: 'tour' },
                { value: 2, label: 'No.', trigger: 'no-tour' },
              ],
            },
            {
              id: 'no-tour',
              component: <NoTour />,
              asMessage: true,
              trigger: 'menu',
            },
            {
              id: 'menu',
              message: 'Is there something you would you like to learn more about me then?',
              trigger: 'menuInput',
            },
            {
              id: 'menuInput',
              options: [
                { value: '/tour', label: 'I misclicked, i\'ll take the tour', trigger: 'tour' },
                { value: '/aboutme', label: 'Who are you?', trigger: 'aboutme' },
                { value: '/no', label: 'Nothing, I\'m good', trigger: 'noimgood' },
                // { value: '/portfolio/project4', label: 'Portfolio', trigger: 'portfolio' },
                // { value: '/skills', label: 'Skills', trigger: 'skills' },
                // { value: '/contact', label: 'Contact', trigger: 'contact' },
                // { value: 'end', label: 'End', trigger: 'end' }
              ]
            },
            {
              id: 'noimgood',
              component: <NoImGood />,
              asMessage: true,
              trigger: 'noimgood-2'
            },
            {
              id: 'noimgood-2',
              message: 'Bruh',
              trigger: 'noimgood-3'
            },
            {
              id: 'noimgood-3',
              message: 'So then what brings you here?',
              trigger: 'noimgood-4'
            },
            {
              id: 'noimgood-4',
              options: [
                { value: '/dontknow', label: 'I don\'t know', trigger: 'idontknow' },
                { value: '/talktoyou', label: 'Because I just want to talk to you', trigger: 'aboutme' },
                { value: '/end', label: 'That\'s a personal question fam', trigger: 'end' },
              ]
            },
            {
              id: 'end',
              component: <End />,
              asMessage: true,
              trigger: 'end-2'
            },
            {
              id: 'end-2',
              message: 'You\'re a wasteman anyways',
              trigger: 'end-3'
            },
            {
              id: 'end-3',
              message: 'Oh here\'s a definition if you\'re not a Toronto man',
              trigger: 'end-4'
            },
            {
              id: 'end-4',
              component: <Wasteman />,
              trigger: 'end-5'
            },
            {
              id: 'aboutme-2',
              message: 'I\'ll let you discover, come back when you\'re done!',
              trigger: 'about-me-3'
            },
            {
              id: 'aboutme-3',
              options: [
                { value: '/about', label: 'Story', trigger: 'story' },
                { value: '/causes', label: 'Causes', trigger: 'causes' },
                { value: '/portfolio/project4', label: 'Portfolio', trigger: 'portfolio' },
                { value: '/skills', label: 'Skills', trigger: 'skills' },
                { value: '/contact', label: 'Contact', trigger: 'contact' },
                { value: 'end', label: 'End', trigger: 'end' }
              ]
            },
            {
              id: 'tour',
              message: 'Don\'t worry mistakes happen',
              trigger: 'tour-1'
            },
            {
              id: 'tour-1',
              component: <TourAbout />,
              waitAction: true,
              replace: true,
              asMessage: false,
              trigger: 'tour1'
            },
            {
                    id: 'tour1',
                    message: 'So this is my story of how I came to be a web developer',
                    trigger: 'tour2'
                  },
                  {
                    id: 'tour2',
                    message: 'I was a geek working on some hardware...',
                    trigger: 'tour3'
                  },
                  {
                    id: 'tour3',
                    message: 'trying to get these things to connect to the web aka the Internet of Things',
                    trigger: 'tour4'
                  },
                  {
                    id: 'tour4',
                    message: 'and I realised that there was a lot more I could do with it, like...',
                    trigger: 'tour5'
                  },
                  {
                    id: 'tour5',
                    message: 'using natural language processing to give commands to my bot slaves...',
                    trigger: 'tour6'
                  },
                  {
                    id: 'tour6',
                    message: 'or using a food image recognition algorithm to identify hot dogs',
                    trigger: 'tour7'
                  },
                  {
                    id: 'tour7',
                    message: 'the possibilities were endless, so I decided to quit my dream job and sign up for the GA immersive.',
                    trigger: 'tour-about-last'
                  },
                  {
                    id: 'tour-about-last',
                    message: 'You can read more here. Do tell me when to continue',
                    trigger: 'tour-about-ans'
                  },
                  {
                    id: 'tour-about-ans',
                    options: [
                                        { value: 'yes', label: 'Ramble on', trigger: 'tour-causes-1' },
                                        { value: 'no', label: 'Stop', trigger: 'menu' }
                    ]
                  },
      ],
      theme: {
        background: '#f5f8fb',
        // fontFamily: 'Helvetica Neue',
        headerBgColor: '#535353',
        headerFontColor: '#fff',
        botBubbleColor: '#535353',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      },
      botAvatar: '/images/icon.png', // TODO: Have to resize botAvatar
      headerTitle: '',
    }
    this.toggleFloating = this.toggleFloating.bind(this);
  }

  toggleFloating({ opened }) {
    console.log('toggleFloating')
    this.setState({ opened });
  }

  render() {
    const { botAvatar, botDelay, opened, steps, theme, headerTitle, floating } = this.state;
    // console.log(this);
    return (
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle={headerTitle} botAvatar={botAvatar} botDelay={botDelay} steps={steps} floating={true} opened={opened} toggleFloating={this.toggleFloating}/>
      </ThemeProvider>
    );
  }
}

export default Chat;
