import { GET_NEWPOSTS } from './types';

const initialState = {};

export default function newPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_NEWPOSTS: {
			return { ...state, newPosts: action.payload };
		}
		default: {
			return state;
		}
	}
}

