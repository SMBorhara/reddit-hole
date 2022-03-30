import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import newPostsReducer from '../features/actions/newPostsReducer';
import tilPostsReducer from '../features/actions/tilReducer';

const initialState = {};

const reducers = {
	newPostList: newPostsReducer,
	tilPostList: tilPostsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(thunk)
);

export const selectNewPosts = (state) => state.newPostList;
export const selectTILPosts = (state) => state.tilPostList;

// export default store;
