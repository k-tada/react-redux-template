import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

@withRouter
@connect(({}) => ({}), {})
export default class MainRoute extends Component {
  render() {
    const {
      component: Component,
      ...rest,
    } = this.props;
    return (
      <Route {...rest} render={props => (
        <Component {...props} />
      )}/>
    );
  }
}

