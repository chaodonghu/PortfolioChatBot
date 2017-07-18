import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Image from './Image';
// import PropTypes from 'prop-types';

// all available props


class Chat extends Component {
  constructor(props) {
    super(props);
    this.toggleFloating = this.toggleFloating.bind(this);

    this.state = {
      botAvatar: 'http://resizeimage.net/mypic/4eVx9R0aLfuBm5Bx/L6ktQ/aaeaaqaaaaaaaaojaaaajdbkndlizj.jpg',
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
              message: 'Would you like to know more about Dong?',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                { value: 1, label: 'Of course!', trigger: '6' },
                { value: 2, label: 'No.', trigger: '7' },
              ],
            },
            {
              id: '6',
              message: 'Yeah eh?',
              end: true,
            },
            {
              id: '7',
              component: (
                <Image/>
              ),
              trigger: '8',
            },
            {
              id: '8',
              message: 'Probably a mistake right?',
              trigger: '9',
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
    }
  }

  toggleFloating({ opened }) {
    this.setState({ opened })
  }

  render() {
    const { botAvatar, botDelay, opened, steps, theme} = this.state;
    // console.log(this.state)
    return (
      <ThemeProvider theme={theme}>
        <ChatBot botAvatar={botAvatar} botDelay={botDelay} steps={steps} floating={true} opened={opened}  hideHeader='true'/>
      </ThemeProvider>
    );
  }
}

export default Chat;
