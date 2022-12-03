import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMemesPosts } from '../../app/store';
import { getMemePosts } from '../actions/memesActions';
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
	MDBCardText,
} from 'mdb-react-ui-kit';

import '../generalformat.css';

function Memes() {
	const dispatch = useDispatch();
	const memePosts = useSelector(selectMemesPosts);
	useSelector((state) => console.log('MEMEstate===>', state.memesPostList));

	useEffect(() => {
		dispatch(getMemePosts(memePosts));
	}, [dispatch, memePosts]);

	let memeList = memePosts.memePosts;
	console.log('memeLIST', memeList);
	return (
		<>
			<h1>Memes</h1>
			{memeList ? (
				memeList.map((post, index) => (
					<div class="card-columns mx-auto d-flex justify-content-center">
						<MDBCard
							shadow="0"
							border="dark"
							background="white"
							className="px-3 pt-3 mb-4"
							style={{ maxWidth: '45rem' }}
						>
							<MDBCardImage
								src={
									post.data.thumbnail ? (
										post.data.thumbnail
									) : (
										<h6>Image Not Available</h6>
									)
								}
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
}
export default Memes;
