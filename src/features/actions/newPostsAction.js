import axios from 'axios';
import { GET_NEWPOSTS } from './types';

export const getNewPosts = () => {
	return async (dispatch) => {
		const postsData = await axios.get('https://www.reddit.com/new.json');
		const newPosts = postsData.data.data.children;
		dispatch({ type: GET_NEWPOSTS, payload: newPosts });
	};
};
