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
			<img
				className="bunny"
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			<h1> Today I Learned </h1>
			{tilList ? (
				tilList.map((post, index) => (
					<div>
						<h2 className="listDisplay" key={index}>
							{post.data.title}
						</h2>
						<img src={post.data.thumbnail} />
					</div>
				))
			) : (
				<h1>Loading...</h1>
			)}
			<div className="navBar">
				<h2 className="category">Categories</h2>
				<button onClick={homeButton}>
					<p>Go Home</p>
				</button>
				<NavLink to="/explain" style={{ textDecoration: 'none' }}>
					<h3>ELI5</h3>
				</NavLink>
				<NavLink to="/memes" style={{ textDecoration: 'none' }}>
					<h3>Memes</h3>
				</NavLink>
				<NavLink to="/programhumor" style={{ textDecoration: 'none' }}>
					<h3>Programmer Humor</h3>
				</NavLink>
			</div>
		</div>
	);
};
export default TIL;
