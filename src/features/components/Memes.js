import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMemesPosts } from '../../app/store';
import { getMemePosts } from '../actions/memesActions';

import './css/generalformat.css';

function Memes() {
	const dispatch = useDispatch();
	const memePosts = useSelector(selectMemesPosts);
	useSelector((state) => console.log('MEMEstate===>', state.memesPostList));

	useEffect(() => {
		dispatch(getMemePosts(memePosts));
	}, [dispatch]);

	let memeList = memePosts.memePosts;
	console.log('memeLIST', memeList);
	return (
		<div>
			
			<h1>Memes</h1>
			{memeList ? (
				memeList.map((post, index) => (
					<div>
						<h2 className="memeDisplay" key={index}>
							{post.data.title}
						</h2>
						<img src={post.data.thumbnail} />
					</div>
				))
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
export default Memes;
