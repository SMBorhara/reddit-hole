import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectTILPosts } from '../../app/store';
import { getTILPosts } from '../actions/tilActions';

const TIL = () => {
	const dispatch = useDispatch();
	const tilPosts = useSelector(selectTILPosts);
	useSelector((state) => console.log('tilstate===>', state.tilPostList));
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getTILPosts(tilPosts));
	}, [dispatch]);

	function homeButton() {
		navigate('/');
	}

	let tilList = tilPosts.tilPosts;
	console.log('TILLIST', tilList);

	return (
		<div>
			<h2> Today I Learned </h2>
			{tilList ? (
				tilList.map((post, index) => <h2 key={index}>{post.data.title}</h2>)
			) : (
				<h1>Loading...</h1>
			)}
			<button onClick={homeButton}>
				<p>Go Home</p>
			</button>
		</div>
	);
};
export default TIL;
