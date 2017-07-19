import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

require('./ChatBot.css');

class Wasteman extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <img src={'/images/wasteman.png'}/>
        </div>
      );
    }
  }

export default Wasteman;
