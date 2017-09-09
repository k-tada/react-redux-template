import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '~/components/Main';

@connect(({ counter }) => ({ counter }), {})
export default class MainContainer extends Component {
  render() {
    const { counter } = this.props;
    return (
      <Main counter={counter} />
    );
  }
}

