import axios from 'axios';
import { GET_BUNNY_COMMENTS, GET_BUNNY_POSTS } from '../constants/constants';

export const getBunnyPosts = () => {
	return async (dispatch) => {
		const bunnyData = await axios.get('https://www.reddit.com/r/Rabbits.json');

		const bunnyPosts = bunnyData.data.data.children;
		dispatch({ type: GET_BUNNY_POSTS, payload: bunnyPosts });
	};
};

export const getBunnyComments = () => {
	return async (dispatch) => {
		const bunnyComments = await axios.get(
			'https://www.reddit.com/r/Rabbits/comments'
		);
		console.log('COMMENTS', bunnyComments);
		// const bunnyComments = bunnyData;
		dispatch({ type: GET_BUNNY_COMMENTS, payload: bunnyComments });
	};
};
