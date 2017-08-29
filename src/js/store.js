import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistState } from 'redux-devtools';
import reducers from '~/reducers';
import sagas from '~/sagas';
import DevTools from '~/containers/DevTools/DevTools';

export default function createStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    createLogger(),
  ];

  let enhancer;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    enhancer = compose(
      applyMiddleware(...middlewares),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    )(_createStore);
  } else {
    enhancer = applyMiddleware(...middlewares)(_createStore);
  }

  const store = enhancer(reducers, initialState);

  sagaMiddleware.run(function* () { yield sagas });
  return store;
}


