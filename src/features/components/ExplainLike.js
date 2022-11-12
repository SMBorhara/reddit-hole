import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExplainPosts } from '../../app/store';
import { getExplainPosts } from '../actions/explainActions';


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
