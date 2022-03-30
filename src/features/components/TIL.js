import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { selectTILPosts } from '../../app/store';
import { getTILPosts } from '../actions/tilActions';

const TIL = () => {
	const dispatch = useDispatch();
	const tilPosts = useSelector(selectTILPosts);
	// useSelector((state) => console.log('tilstate===>', state.tilPostList));
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getTILPosts(tilPosts));
	}, [dispatch]);

	function homeButton() {
		navigate('/');
	}

	let tilList = tilPosts.tilPosts;
	// console.log('TILLIST', tilList);

	return (
		<div>
			<h2> Today I Learned </h2>
			<img
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			{tilList ? (
				tilList.map((post, index) => <h2 key={index}>{post.data.title}</h2>)
			) : (
				<h1>Loading...</h1>
			)}
			<div className="navbar">
				<h3>Categories</h3>
				<button onClick={homeButton}>
					<p>Go Home</p>
				</button>
				<NavLink to="/explain">
					<h3>ELI5</h3>
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
export default TIL;
