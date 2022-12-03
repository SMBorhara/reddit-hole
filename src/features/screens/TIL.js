import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTILPosts } from '../../app/store';
import { getTILPosts } from '../actions/tilActions';
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
	MDBCardText,
} from 'mdb-react-ui-kit';

const TIL = () => {
	const dispatch = useDispatch();
	const tilPosts = useSelector(selectTILPosts);
	// useSelector((state) => console.log('tilstate===>', state.tilPostList));

	useEffect(() => {
		dispatch(getTILPosts(tilPosts));
	}, [dispatch, tilPosts]);

	let tilList = tilPosts.tilPosts;
	// console.log('TILLIST', tilList);

	return (
		<div>
			<h1> Today I Learned </h1>
			{tilList ? (
				tilList.map((post, index) => (
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
		</div>
	);
};
export default TIL;
