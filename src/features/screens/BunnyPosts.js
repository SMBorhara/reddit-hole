import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBunnyPosts } from '../../app/store';
import { getBunnyPosts } from '../actions/bunnyActions';

import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
} from 'mdb-react-ui-kit';

const BunnyPosts = () => {
	const bunnyFeed = useSelector(selectBunnyPosts);
	console.log(bunnyFeed);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBunnyPosts(bunnyFeed));
	}, [dispatch, bunnyFeed]);

	// useEffect(() => {
	// 	dispatch(getBunnyComments());
	// });

	let bunnyThread = bunnyFeed.bunnyPosts;
	console.log(bunnyThread);

	// let comments = bunnyFeed.bunnyComments;
	// console.log('COMMENTS', comments);
	// console.log(comments);

	return (
		<>
			<h1>You've Truly Fallen</h1>
			{bunnyThread ? (
				bunnyThread.map((post, index) => (
					<div class="card-columns mx-auto d-flex justify-content-center">
						<MDBCard
							shadow="0"
							border="dark"
							background="white"
							className="px-3 pt-3 mb-4"
							style={{ maxWidth: '45rem' }}
						>
							<MDBCardImage
								src={post.data.thumbnail}
								position="top"
								alt="..."
								className="img-thumbnail"
							/>
							<MDBCardBody>
								<MDBCardTitle>{post.data.title}</MDBCardTitle>
							</MDBCardBody>
						</MDBCard>
					</div>
				))
			) : (
				<h1>Loading</h1>
			)}
		</>
	);
};

export default BunnyPosts;
