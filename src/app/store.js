import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { loadPostsReducer } from '../features/homePage/homePage.slice';

const reducers = {
	loadPosts: loadPostsReducer,
};


const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer, applyMiddleware(thunk));
