import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MainRoute
} from '~/containers/routes/*.js';
import App from '~/containers/App';
import Main from '~/containers/MainContainer';

export default (store) => {
  return (
    <App>
      {
      /**
       * Your routings here...
       * ex)
       * <Switch>
       *   <GuestRoute exact path="/login" component={Login} />
       *   <UserRoute component={DashBoard} />
       * </Switch>
       */
      }
      <MainRoute component={Main} />
    </App>
  )
};

