import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

require('./ChatBot.css');

class NoImGood extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <img src={'/images/drake_bruh.jpg'} className='rsc-ts-image sc-gzVnrw hLGSaN' style={{width: '175px', height: '145px'}}/>
        </div>
      );
    }
  }

export default NoImGood;
