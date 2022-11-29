import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBunnyPosts } from '../../app/store';
import { getBunnyComments, getBunnyPosts } from '../actions/bunnyActions';
import { Card } from 'react-bootstrap';

const BunnyPosts = () => {
	const bunnyFeed = useSelector(selectBunnyPosts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBunnyPosts(bunnyFeed));
	}, [dispatch, bunnyFeed]);

	useEffect(() => {
		dispatch(getBunnyComments());
	});

	let bunnyThread = bunnyFeed.bunnyPosts;
	console.log(bunnyThread);

	return (
		<>
			<h1>You've Truly Fallen</h1>
			{bunnyThread ? (
				bunnyThread.map((post, index) => (
					<Card>
						<Card.Img variant="top" md={3} src={post.data.thumbnail} />
						<Card.Body>
							<Card.Title>{post.data.title}</Card.Title>
							<Card.Text>{post.data.permalink}</Card.Text>
						</Card.Body>
					</Card>
				))
			) : (
				<h1>Loading</h1>
			)}
		</>
	);
};

export default BunnyPosts;
