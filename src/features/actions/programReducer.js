import { GET_PROGRAMHUMOR } from './types';

const initialState = {};

export default function programPostsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PROGRAMHUMOR: {
			return { ...state, programPosts: action.payload };
		}
		default: {
			return state;
		}
	}
}
