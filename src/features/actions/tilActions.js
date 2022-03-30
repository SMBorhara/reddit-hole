import axios from 'axios';
import { GET_TILPOSTS } from './types';

export const getTILPosts = () => {
	return async (dispatch) => {
		const tilData = await axios.get(
			'https://www.reddit.com/r/todayilearned.json'
		);
		const tilPosts = tilData.data.data.children;
		dispatch({ type: GET_TILPOSTS, payload: tilPosts });
	};
};
