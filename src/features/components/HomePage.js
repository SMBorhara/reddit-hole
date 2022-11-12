import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPosts } from '../actions/newPostsAction';
import { selectNewPosts } from '../../app/store';

import './css/generalformat.css';

const HomePage = () => {
	const dispatch = useDispatch();
	const newPosts = useSelector(selectNewPosts);
	// useSelector((state) => console.log('state===>', state.newPostList));
	// console.log('NP USESELECTOR??', newPosts);

	useEffect(() => {
		dispatch(getNewPosts(newPosts));
	}, [dispatch, newPosts]);

	let listInfo = newPosts.newPosts;
	console.log('infoTest =====', listInfo);

	return (
		<div className="page">
			<h1 className="categoryHeading">Most Recent Posts</h1>
			<div className="posts">
				{listInfo ? (
					listInfo.map((post, index) => (
						<div>
							<h2 className="listDisplay" key={index}>
								{post.data.title}
							</h2>
							<img src={post.data.thumbnail} alt="post" />
						</div>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	);
};

export default HomePage;
