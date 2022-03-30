import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import explainPostsReducer from '../features/actions/explainReducer';
import memesPostsReducer from '../features/actions/memesReducer';
import newPostsReducer from '../features/actions/newPostsReducer';
import programPostsReducer from '../features/actions/programReducer';
import tilPostsReducer from '../features/actions/tilReducer';

const initialState = {};

const reducers = {
	newPostList: newPostsReducer,
	tilPostList: tilPostsReducer,
	explainPostList: explainPostsReducer,
	memesPostList: memesPostsReducer,
	programPostList: programPostsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(thunk)
);

export const selectNewPosts = (state) => state.newPostList;
export const selectTILPosts = (state) => state.tilPostList;
export const selectExplainPosts = (state) => state.explainPostList;
export const selectMemesPosts = (state) => state.memesPostList;
export const selectProgramPosts = (state) => state.programPostList;
// export default store;
