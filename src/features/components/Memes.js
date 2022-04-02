import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { selectMemesPosts } from '../../app/store';
import { getMemePosts } from '../actions/memesActions';
import newPostsReducer from '../actions/newPostsReducer';
import './css/generalformat.css';

const Memes = () => {
	const dispatch = useDispatch();
	const memePosts = useSelector(selectMemesPosts);
	useSelector((state) => console.log('MEMEstate===>', state.memesPostList));
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getMemePosts(memePosts));
	}, [dispatch]);

	function homeButton() {
		navigate('/');
	}

	function uniqueID() {
		return Math.floor(Math.random() * Date.now());
	}

	let memeList = memePosts.memePosts;
	// console.log('memeLIST', memeList);

	return (
		<div>
			<img
				className="bunny"
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			<h1>Memes</h1>
			{memeList ? (
				memeList.map((post, index) => (
					<div>
						<h2 className="memeDisplay" key={index}>
							{post.responseURL}
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
				<NavLink to="/til" style={{ textDecoration: 'none' }}>
					<h3>TIL</h3>
				</NavLink>
				<NavLink to="/explain" style={{ textDecoration: 'none' }}>
					<h3>ELI5</h3>
				</NavLink>
				<NavLink to="/programhumor" style={{ textDecoration: 'none' }}>
					<h3>Programmer Humor</h3>
				</NavLink>
			</div>
		</div>
	);
};
export default Memes;
