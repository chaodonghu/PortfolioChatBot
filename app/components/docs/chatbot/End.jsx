import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

require('./ChatBot.css');

class End extends React.Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <img src={'/images/drake_areyoudumb.gif'} className='rsc-ts-image sc-gzVnrw hLGSaN' style={{width: '180px', height: '120px'}}/>
        </div>
      );
    }
  }

export default End;
