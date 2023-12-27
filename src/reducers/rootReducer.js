import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers as needed
});

export default rootReducer;