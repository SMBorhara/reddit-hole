import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { selectMemesPosts } from '../../app/store';
import { getMemePosts } from '../actions/memesActions';

const Memes = () => {
	const dispatch = useDispatch();
	const memePosts = useSelector(selectMemesPosts);
	// useSelector((state) => console.log('tilstate===>', state.explainPostList));
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getMemePosts(memePosts));
	}, [dispatch]);

	function homeButton() {
		navigate('/');
	}

	let memeList = memePosts.memePosts;
	// console.log('explainLIST', explainList);

	return (
		<div>
			<h2>Memes</h2>
            <img
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			{memeList ? (
				memeList.map((post, index) => <h2 key={index}>{post.data.title}</h2>)
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
				<NavLink to="/explain">
					<h3>ELI5</h3>
				</NavLink>
                <NavLink to="/programhumor">
				<h3>Program Humor</h3>
			</NavLink>
			</div>
		</div>
	);
};
export default Memes;
