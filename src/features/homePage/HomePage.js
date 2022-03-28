import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from './homePage.slice';

const HomePage = () => {
	const dispatch = useDispatch();
	const newPosts = useSelector(selectPosts);

	dispatch(newPos)

	return (
		<div className="bunnyHome">
			<img
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>

			<h1>Most Recent Posts feed={feed} </h1>

			<h2>Categories</h2>
		</div>
	);
};

export default HomePage;
