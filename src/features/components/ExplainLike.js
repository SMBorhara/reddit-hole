import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExplainPosts } from '../../app/store';
import { getExplainPosts } from '../actions/explainActions';
import './css/generalformat.css';

const ExplainLike = () => {
	const dispatch = useDispatch();
	const explainPosts = useSelector(selectExplainPosts);
	// useSelector((state) => console.log('tilstate===>', state.explainPostList));

	useEffect(() => {
		dispatch(getExplainPosts(explainPosts));
	}, [dispatch]);

	let explainList = explainPosts.explainPosts;
	// console.log('explainLIST', explainList);

	return (
		<div>
			<img
				className="bunny"
				src="https://i.etsystatic.com/18497899/r/il/c2a9bc/2271558047/il_1588xN.2271558047_96n3.jpg"
				alt="rabbit wearing sunglasses"
				width="200"
				height="200"
			/>
			<h1>Explain Like I'm five</h1>
			{explainList ? (
				explainList.map((post, index) => (
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
		</div>
	);
};
export default ExplainLike;
