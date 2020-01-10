import {createStore, applyMiddleware} from 'redux';
import rootReducer from './index';

let store = createStore(rootReducer, applyMiddleware);
export default store;
