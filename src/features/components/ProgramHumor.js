import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProgramPosts } from '../../app/store';
import { getProgramPosts } from '../actions/programHumorActions';
import './css/generalformat.css';

const ProgramHumor = () => {
	const dispatch = useDispatch();
	const programPosts = useSelector(selectProgramPosts);
	// useSelector((state) => console.log('tilstate===>', state.explainPostList));

	useEffect(() => {
		dispatch(getProgramPosts(programPosts));
	}, [dispatch]);

	let programList = programPosts.programPosts;
	// console.log('explainLIST', explainList);

	return (
		<div>
			
			<h1>Programmer Humor</h1>
			{programList ? (
				programList.map((post, index) => (
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
export default ProgramHumor;
