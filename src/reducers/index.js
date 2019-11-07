import { combineReducers } from 'redux';

// importing reducers
import { clickReducer } from './clickReducer';
import { textReducer } from './textReducer';


export const Reducers = combineReducers({
    clickState: clickReducer,
    textState: textReducer
});