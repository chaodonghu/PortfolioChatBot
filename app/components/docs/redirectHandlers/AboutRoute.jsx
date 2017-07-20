import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatBot, { Loading } from 'react-simple-chatbot'
const $ = require('jquery')

export default class LinkHandler extends Component {
  componentWillMount() {
    const { steps, triggerNextStep } = this.props;
    console.log('props', this.props)

    const link = steps.touroptions.value;
    console.log('link', link)
    this.props.handleLink(link);
    document.querySelector('.chat .rsc-header a').click();
    document.querySelector(`.sub-links a[data-href="${link}"]`).click();
    document.body.scrollTop = 0;

    setTimeout(() => {
      triggerNextStep();
    }, 500);
  }

  render() {
    return <span />;
  }
}

LinkHandler.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  handleLink: PropTypes.func.isRequired,
};

LinkHandler.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
