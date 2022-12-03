import axios from 'axios';
import { GET_NEWPOSTS } from '../constants/constants';

export const getNewPosts = () => {
	return async (dispatch) => {
		const postsData = await axios.get(
			'https://www.reddit.com/r/womenwhocode/.json'
		);
		const newPosts = postsData.data.data.children;
		dispatch({ type: GET_NEWPOSTS, payload: newPosts });
	};
};
