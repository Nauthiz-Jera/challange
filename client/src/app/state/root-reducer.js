import { combineReducers } from 'redux';
import category from './reducers/category';
import finish from './reducers/finish';
import toggle from './reducers/toggle';
import order from './reducers/order';
import size from './reducers/size';
import app from './reducers/app';

export default combineReducers({
  category,
  finish,
  toggle,
  order,
  size,
  app,
});
