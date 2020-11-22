import { combineReducers } from 'redux';
import todos from './todos.reducer';
import product from './product.reducer';
// import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  product,
})
