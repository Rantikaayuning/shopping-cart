import { combineReducers } from 'redux';
import homePageReducer from './reducers/index';

const rootReducer = combineReducers({
    home: homePageReducer
})

export default rootReducer;