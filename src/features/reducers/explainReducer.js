import { GET_EXPLAINPOSTS } from '../constants/constants.js';

const initialState = {};

export default function explainPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_EXPLAINPOSTS: {
			return { ...state, explainPosts: action.payload };
		}
		default: {
			return state;
		}
	}
}
