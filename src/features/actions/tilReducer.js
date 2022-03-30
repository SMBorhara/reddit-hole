import { GET_TILPOSTS } from './types';

const initialState = {};

export default function tilPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TILPOSTS: {
			return { ...state, tilPosts: action.payload };
		}
		default: {
			return state;
		}
	}
}
