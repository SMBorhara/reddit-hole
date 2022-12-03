import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPosts } from '../actions/newPostsAction';
import { selectNewPosts } from '../../app/store';
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
	MDBCardText,
} from 'mdb-react-ui-kit';

import '../generalformat.css';

const HomePage = () => {
	const dispatch = useDispatch();
	const newPosts = useSelector(selectNewPosts);
	// useSelector((state) => console.log('state===>', state.newPostList));
	console.log('NP USESELECTOR??', newPosts);

	useEffect(() => {
		dispatch(getNewPosts(newPosts));
	}, [dispatch, newPosts]);

	let listInfo = newPosts.newPosts;
	console.log('infoTest =====', listInfo);

	return (
		<>
			<h1>Women Who Code</h1>

			{listInfo ? (
				listInfo.map((post, index) => (
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
								<MDBCardText>{post.data.selftext}</MDBCardText>
							</MDBCardBody>
						</MDBCard>
					</div>
				))
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default HomePage;
