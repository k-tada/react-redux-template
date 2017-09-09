import React from 'react';
import { Route, withRouter } from 'react-router-dom';

@withRouter
export default class MainRoute extends React.Component {
  render() {
    const {
      component: Component,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          <Component {...props} />
        )}
      />
    );
  }
}

