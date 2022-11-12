import axios from 'axios';
import { GET_BUNNY_POSTS } from '../constants/constants';

export const getBunnyPosts = () => async (dispatch) => {
	try {
		dispatch({ type: GET_BUNNY_POSTS });
		const { data } = await axios.get('https://www.reddit.com/r/Rabbits/');
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
};
