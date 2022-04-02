import axios from 'axios';
import { GET_MEMES } from './types';

export const getMemePosts = () => {
	return async (dispatch) => {
		const memeData = await axios.get('https://www.reddit.com/r/memes.json');
		// console.log('ID CALLS', memeData.data);
		const memePosts = memeData.data.data.children;
		dispatch({ type: GET_MEMES, payload: memePosts });
	};
};

