import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTILPosts } from '../../app/store';
import { getTILPosts } from '../actions/tilActions';

const TIL = () => {
	const dispatch = useDispatch();
	const tilPosts = useSelector(selectTILPosts);
	// useSelector((state) => console.log('tilstate===>', state.tilPostList));

	useEffect(() => {
		dispatch(getTILPosts(tilPosts));
	}, [dispatch]);

	let tilList = tilPosts.tilPosts;
	// console.log('TILLIST', tilList);

	return (
		<div>
			
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
		</div>
	);
};
export default TIL;
