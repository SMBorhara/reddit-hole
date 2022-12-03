import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProgramPosts } from '../../app/store';
import { getProgramPosts } from '../actions/programHumorActions';
import '../generalformat.css';

import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
	MDBCardText,
} from 'mdb-react-ui-kit';

const ProgramHumor = () => {
	const dispatch = useDispatch();
	const programPosts = useSelector(selectProgramPosts);
	// useSelector((state) => console.log('tilstate===>', state.explainPostList));

	useEffect(() => {
		dispatch(getProgramPosts(programPosts));
	}, [dispatch, programPosts]);

	let programList = programPosts.programPosts;
	// console.log('explainLIST', explainList);

	return (
		<div>
			<h1>Programmer Humor</h1>
			{programList ? (
				programList.map((post, index) => (
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
export default ProgramHumor;
