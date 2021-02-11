import { combineReducers } from 'redux';
// on importe tous les reducers
import recipesReducer from './recipes';
import userReducer from './user';


const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  // etc
});
export default rootReducer;
