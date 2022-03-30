import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { selectExplainPosts } from '../../app/store';
import { getExplainPosts } from '../actions/explainActions';

const ExplainLike = () => {
	const dispatch = useDispatch();
	const explainPosts = useSelector(selectExplainPosts);
	// useSelector((state) => console.log('tilstate===>', state.explainPostList));
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getExplainPosts(explainPosts));
	}, [dispatch]);

	function homeButton() {
		navigate('/');
	}

	let explainList = explainPosts.explainPosts;
	// console.log('explainLIST', explainList);

	return (
		<div>
			<h2>Explain Like I'm five</h2>
			<img
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			{explainList ? (
				explainList.map((post, index) => <h2 key={index}>{post.data.title}</h2>)
			) : (
				<h1>Loading...</h1>
			)}
			<div className="navbar">
				<h3>Categories</h3>
				<button onClick={homeButton}>
					<p>Go Home</p>
				</button>
				<NavLink to="/til">
					<h3>TIL</h3>
				</NavLink>
				<NavLink to="/memes">
					<h3>Memes</h3>
				</NavLink>
				<NavLink to="/programhumor">
					<h3>Program Humor</h3>
				</NavLink>
			</div>
		</div>
	);
};
export default ExplainLike;
