import { GET_BUNNY_COMMENTS, GET_BUNNY_POSTS } from '../constants/constants';

const initialState = {};

export default function bunnyPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_BUNNY_POSTS: {
			return { ...state, bunnyPosts: action.payload };
		}
		case GET_BUNNY_COMMENTS: {
			return { ...state, bunnyCommenets: action.payload };
		}
		default: {
			return state;
		}
	}
}
