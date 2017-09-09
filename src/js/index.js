import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import getRoutes from '~/routes';
import createStore from '~/store';

const store = createStore({});
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      {getRoutes(store)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('main'),
);

