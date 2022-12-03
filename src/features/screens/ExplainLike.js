import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExplainPosts } from '../../app/store';
import { getExplainPosts } from '../actions/explainActions';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

const ExplainLike = () => {
	const dispatch = useDispatch();
	const explainPosts = useSelector(selectExplainPosts);
	// useSelector((state) => console.log('tilstate===>', state.explainPostList));

	useEffect(() => {
		dispatch(getExplainPosts(explainPosts));
	}, [dispatch, explainPosts]);

	let explainList = explainPosts.explainPosts;
	// console.log('explainLIST', explainList);

	return (
		<>
			<h1>Explain Like I'm five</h1>
			{explainList ? (
				explainList.map((post, index) => (
					<div class="card-columns mx-auto d-flex justify-content-center">
						<MDBCard
							shadow="0"
							border="dark"
							background="white"
							className="px-3 pt-3 mb-4"
							style={{ maxWidth: '45rem' }}
						>
							<MDBCardBody>
								<MDBCardTitle>{post.data.title}</MDBCardTitle>
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
export default ExplainLike;
