import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Image from './Image';
// import PropTypes from 'prop-types';

// chatbot components
// import AboutRoute from '../../components/redirect/AboutRoute'

// all available props


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      botDelay: 1000,
      opened: true,
      steps: [
            {
              id: '1',
              message: 'Welcome to my about me page. What is your name?',
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
              component: <Image/>,
              // avatar: 'http://resizeimage.net/mypic/4eVx9R0aLfuBm5Bx/L6ktQ/aaeaaqaaaaaaaaojaaaajdbkndlizj.jpg',
              asMessage: true,
              trigger: 'menu',
            },
            {
              id: 'menu',
              message: 'What would you like to learn more about me?',
              trigger: 'menuInput',
            },
            {
              id: 'menuInput',
              options: [
                { value: 'nil', label: 'Take the tour', trigger: 'tour' },
                { value: '/aboutme', label: 'Who am I?', trigger: 'aboutme' },
                { value: '/causes', label: 'Causes', trigger: 'causes' },
                { value: '/portfolio/project4', label: 'Portfolio', trigger: 'portfolio' },
                { value: '/skills', label: 'Skills', trigger: 'skills' },
                { value: '/contact', label: 'Contact', trigger: 'contact' },
                { value: 'end', label: 'End', trigger: 'end' }
              ]
            },
            // {
            //   id: 'aboutme',
            //   // component: <AboutRoute />,
            //   waitAction: true,
            //   replace: true,
            //   asMessage: false,
            //   end: true,
            // },
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
      botAvatar: 'icon.png',
      headerTitle: '',
    }
    this.toggleFloating = this.toggleFloating.bind(this);
  }

  toggleFloating({ opened }) {
    this.setState({ opened })
  }

  render() {
    const { botAvatar, botDelay, opened, steps, theme, toggleFloating, headerTitle} = this.state;
    console.log(this.state);
    return (
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle={headerTitle} botAvatar={botAvatar} botDelay={botDelay} steps={steps} floating={true} opened={opened} toggleFloating={toggleFloating}/>
      </ThemeProvider>
    );
  }
}

export default Chat;
