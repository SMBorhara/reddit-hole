import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bunnyPostsReducer from '../features/reducers/bunnyReducer';
import explainPostsReducer from '../features/reducers/explainReducer';
import memesPostsReducer from '../features/reducers/memesReducer';
import newPostsReducer from '../features/reducers/newPostsReducer';
import programPostsReducer from '../features/reducers/programReducer';
import tilPostsReducer from '../features/reducers/tilReducer';

const initialState = {};

const reducers = {
	newPostList: newPostsReducer,
	tilPostList: tilPostsReducer,
	explainPostList: explainPostsReducer,
	memesPostList: memesPostsReducer,
	programPostList: programPostsReducer,
	bunnyPostList: bunnyPostsReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(thunk)
);

export const selectBunnyPosts = (state) => state.bunnyPostList;
export const selectNewPosts = (state) => state.newPostList;
export const selectTILPosts = (state) => state.tilPostList;
export const selectExplainPosts = (state) => state.explainPostList;
export const selectMemesPosts = (state) => state.memesPostList;
export const selectProgramPosts = (state) => state.programPostList;
export const selectAllPosts = (state) => {
	return [
		state.newPostList,
		state.tilPostList,
		state.explainPostList,
		state.memesPostList,
		state.programPostList,
		state.bunnyPostList
	];
};
// export default store;
