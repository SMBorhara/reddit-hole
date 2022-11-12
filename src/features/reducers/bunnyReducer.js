import { GET_BUNNY_POSTS } from '../constants/constants';

const initialState = {};

export default function bunnyPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_BUNNY_POSTS: {
			return { ...state, newPosts: action.payload };
		}
		default: {
			return state;
		}
	}
}
