import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import newPostsReducer from '../features/actions/newPostsReducer';

const initialState = {};

const reducers = {
	newPostList: newPostsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(thunk)
);

export const selectNewPosts = (state) => state.newPostList;

// export default store;
