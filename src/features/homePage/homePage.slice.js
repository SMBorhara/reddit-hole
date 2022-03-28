import { recentFeed } from '../../app/api';

const initialState = {};

const loadNewPosts = (posts) => {
	return {
		type: 'homePage/loadNewPosts',
		payload: posts,
	};
};

export const loadPosts = () => {
	return async (dispatch) => {
		const data = await recentFeed();
		const payload = data.data.data.children;
		
		dispatch(loadNewPosts(payload));
	};
};

export const loadPostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'homePage/loadNewPosts': {
			return { ...state, newsFeed: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const selectPosts = (state) => state.newsFeed;
