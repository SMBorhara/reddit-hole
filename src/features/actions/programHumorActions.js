import axios from 'axios';
import { GET_PROGRAMHUMOR } from './types';

export const getProgramPosts = () => {
	return async (dispatch) => {
		const programData = await axios.get(
			'https://www.reddit.com/r/ProgrammerHumor.json'
		);
		const programPosts = programData.data.data.children;
		dispatch({ type: GET_PROGRAMHUMOR, payload: programPosts });
	};
};
