import React from 'react';
// import { Route, Switch } from 'react-router-dom';
/* eslint "import/extensions": 0 */
import {
  MainRoute,
} from '~/containers/routes/*.js';
import App from '~/containers/App';
import Main from '~/containers/MainContainer';

/* eslint "no-unused-vars": 0 */
export default store => (
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
);

