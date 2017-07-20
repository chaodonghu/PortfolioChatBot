import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Chatbot
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// Chatbot static components
import NoTour from './NoTour';
import NoImGood from './NoImGood';
import End from './End';
import Wasteman from './Wasteman';

// Redirect Handlers
import TourOptionsRoute from '../redirectHandlers/TourOptions'
import NoTourOptionsRoute from '../redirectHandlers/NoTourOptions'

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      botDelay: 1000,
      opened: true,
      loading: false,
      steps: [
            {
              id: '1',
              message: 'Hi my name is Dong. Welcome to my about me page. What is your name?',
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
              delay: 2000,
              trigger: 'touroptions',
            },
            {
              id: 'touroptions',
              options: [
                { value: '/docs/aboutme', label: 'Of course!', trigger: 'tour-route' },
                { value: 2, label: 'No.', trigger: 'no-tour' },
                { value: '/docs/fwfjweofjw', label: 'Redirect testing installation.', trigger: 'tour-option-selected' }, // TODO: Change value
                { value: '/docs/example1', label: 'Redirect testing example1.', trigger: 'tour-option-selected' },
              ],
            },
            // {
            //   id: 'tour-option-selected',
            //   message: 'One moment while I redirect you',
            //   trigger: 'result',
            // },
            // {
            //   id: 'mobile-step',
            //   message: 'Please close the chat',
            //   trigger: 'result',
            // },
            // {
            //   id: 'result',
            //   replace: true,
            //   component: (
            //     <TourOptionsRoute handleLink={this.props.handleLink}/>
            //   ),
            // },
            {
              id: 'no-tour',
              component: <NoTour />,
              asMessage: true,
              trigger: 'no-tour-1',
            },
            {
              id: 'no-tour-1',
              message: 'Is there something you would you like to learn more about me then?',
              trigger: 'notouroptions',
            },
            {
              id: 'notouroptions',
              options: [
                { value: '/docs/aboutme', label: 'I misclicked, i\'ll take the tour', trigger: 'tour-no-route' },
                { value: '/docs/aboutme/', label: 'Who are you?', trigger: 'aboutme' },
                { value: '/no', label: 'Nothing, I\'m good', trigger: 'noimgood' },
                // { value: '/portfolio/project4', label: 'Portfolio', trigger: 'portfolio' },
                // { value: '/skills', label: 'Skills', trigger: 'skills' },
                // { value: '/contact', label: 'Contact', trigger: 'contact' },
                { value: '/goaway', label: 'Go Away', trigger: 'end' }
              ]
            },
            {
              id: 'aboutme',
              component: (
                <NoTourOptionsRoute handleLink={this.props.handleLink}/>
              ),
              waitAction: true,
              replace: true,
              asMessage: false,
              trigger: 'end'
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
              trigger: 'noimgood-4-options'
            },
            {
              id: 'noimgood-4-options',
              options: [
                { value: '/dontknow', label: 'I don\'t know honestly.', trigger: 'idontknow' },
                { value: '/talktoyou', label: 'Because I just want to talk to you.', trigger: 'aboutme' },
                { value: '/end', label: 'That\'s a personal question.', trigger: 'end' },
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
              message: 'Yeah eh?',
              trigger: 'end-3'
            },
            {
              id: 'end-3',
              message: 'You\'re a wasteman anyways',
              trigger: 'end-4'
            },
            {
              id: 'end-4',
              message: 'I\'ll let you navigate my portfolio by yourself then',
              trigger: 'finish'
            },
            {
              id: 'finish',
              message: 'Deuce.',
              end: true,
            },
            {
              id: 'tour-route',
              component: (
                <TourOptionsRoute handleLink={this.props.handleLink}/>
              ),
              waitAction: true,
              replace: true,
              asMessage: false,
              trigger: 'tour1'
            },
            {
              id: 'tour-no-route',
              component: (
                <NoTourOptionsRoute handleLink={this.props.handleLink}/>
              ),
              waitAction: true,
              replace: true,
              asMessage: false,
              trigger: 'tour1'
            },
            {
              id: 'tour1',
              message: 'Lets see. To begin, I am recent graduate from the University of Waterloo...',
              trigger: 'tour2'
            },
            {
              id: 'tour2',
              message: 'with a degree in Kinesiology and Pre-Health Professions.',
              delay: 2000,
              trigger: 'tour3'
            },
            {
              id: 'tour3',
              message: 'I know.',
              delay: 3000,
              trigger: 'tour4'
            },
            {
              id: 'tour4',
              message: 'It\'s completely out of scope in terms of software development and programming...',
              delay: 2000,
              trigger: 'tour5'
            },
            {
              id: 'tour5',
              message: 'however, I used to dabble with HTML, CSS and JavaScript by making basic Tumblr layouts and even had a anime fansite.',
              delay: 3000,
              trigger: 'tour6'
            },
            {
              id: 'tour6',
              message: 'I slowly got back into coding and tech through hackathons and meetups which are abundant in Waterloo\'s booming tech scene',
              delay: 4000,
              trigger: 'tour7'
            },
            {
              id: 'tour7',
              message: 'I realized that the possibilities were endless, and there was a very low barrier to entry.',
              delay: 4000,
              trigger: 'tour8'
            },
            {
              id: 'tour8',
              message: 'So during my last year at Waterloo, I decided to use my electives on Computer Science courses...',
              delay: 3500,
              trigger: 'tour9'
            },
            {
              id: 'tour9',
              message: 'as well as supplement my learning with online coding challenges, tutorials and videos...',
              delay: 3500,
              trigger: 'tour10'
            },
            {
              id: 'tour10',
              message: 'to learn as much as I can about web and mobile development',
              delay: 3500,
              trigger: 'tour-about-last'
            },
            {
              id: 'tour-about-last',
              message: 'You can read more about my story on the page I\'ve directed you to. When you\'re done tell me to continue.',
              delay: 4000,
              trigger: 'tour-about-ans'
            },
            {
              id: 'tour-about-ans',
              options: [
                { value: 'yes', label: 'Tell me more', trigger: 'tour-causes-1' },
                { value: 'no', label: 'Shut up', trigger: 'menu' }
              ]
            },
      ],
      theme: {
        background: '#f5f8fb',
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
    this.handleEnd = this.handleEnd.bind(this);
  }

  toggleFloating({ opened }) {
    console.log('toggleFloating')
    this.setState({ opened });
  }


  handleEnd() {
    setTimeout(() => {
      document.querySelector('.chat .rsc-header a').click();

      setTimeout(() => {
        this.setState({ loading: true }, () => {
          this.setState({ loading: false });
        });
      }, 500);
    }, 2000);
  }

  render() {
    const { botAvatar, botDelay, opened, steps, theme, headerTitle, floating, loading } = this.state;
    // const mobile = window.innerWidth < 568;
    // const TriggerMobile =
    // console.log(this);

    if (loading) {
      return <span />;
    }

    return (
      <ThemeProvider theme={theme}>
        <ChatBot className='chat' headerTitle={headerTitle} botAvatar={botAvatar} botDelay={botDelay} steps={steps} floating={true} opened={opened} toggleFloating={this.toggleFloating} handleEnd={this.handleEnd}/>
      </ThemeProvider>
    );
  }
}

Chat.propTypes = {
  handleLink: PropTypes.func.isRequired,
};

export default Chat;

// https://github.com/LucasBassetti/react-simple-chatbot/blob/gh-pages/app/components/docs/Tutorial.jsx
