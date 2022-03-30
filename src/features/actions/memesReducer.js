import { GET_MEMES } from './types';

const initialState = {};

export default function memesPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_MEMES: {
			return { ...state, memePosts: action.payload };
		}
		default: {
			return state;
		}
	}
}
