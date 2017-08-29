import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Layout from '~/components/Layout';

@withRouter // for react-router-v4
@connect(() => ({}), {})
export default class App extends Component {
  render() {
    return (
      <Route render={props => (
        <Layout>
          { this.props.children }
        </Layout>
      )}/>
    )
  }
}


