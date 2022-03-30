import axios from 'axios';
import { GET_EXPLAINPOSTS } from './types';

export const getExplainPosts = () => {
	return async (dispatch) => {
		const explainData = await axios.get(
			'https://www.reddit.com/r/explainlikeimfive.json'
		);
		const explainPosts = explainData.data.data.children;
		dispatch({ type: GET_EXPLAINPOSTS, payload: explainPosts });
	};
};
