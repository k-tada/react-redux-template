import { combineReducers } from 'redux';
import { counter } from '~/modules/counter';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  counter,
  routing: routerReducer,
});

