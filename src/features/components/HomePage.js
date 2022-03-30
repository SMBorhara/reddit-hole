import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPosts } from '../actions/newPostsAction';
import { selectNewPosts } from '../../app/store';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();
	const newPosts = useSelector(selectNewPosts);
	// useSelector((state) => console.log('state===>', state.newPostList));
	console.log('NP USESELECTOR??', newPosts);

	useEffect(() => {
		dispatch(getNewPosts(newPosts));
	}, [dispatch]);

	let listInfo = newPosts.newPosts;
	console.log('infoTest =====', listInfo);

	return (
		<div className="bunnyHome">
			<img
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			<h1>Most Recent Posts</h1>
			{listInfo ? (
				listInfo.map((post, index) => <h2 key={index}>{post.data.title}</h2>)
			) : (
				<h1>Loading...</h1>
			)}
			<h2>Categories</h2>
			<NavLink to="/til">
				<h3>TIL</h3>
			</NavLink>
		</div>
	);
};

export default HomePage;
