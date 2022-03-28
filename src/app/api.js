import axios from 'axios';

export const recentFeed = async () => {
	const posts = await axios.get('https://www.reddit.com/new.json');

	return posts;
};
