import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

require('./ChatBot.css');

class NoTour extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <img src={'saitama.png'} className='rsc-ts-image sc-gzVnrw hLGSaN' style={{width: '130px', height: '100px'}}/>
        </div>
      );
    }
  }

export default NoTour;
