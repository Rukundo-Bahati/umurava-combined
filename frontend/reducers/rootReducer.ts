import { combineReducers } from 'redux';
import  challengesReducer from '../store/challengesSlice'


const rootReducer = combineReducers({
  challenges: challengesReducer,
  // Add other reducers here if necessary
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
