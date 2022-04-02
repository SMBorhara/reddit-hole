import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from '../features/components/HomePage';
import TIL from '../features/components/TIL';
import ExplainLike from '../features/components/ExplainLike';
import Memes from '../features/components/Memes';
import ProgramHumor from '../features/components/ProgramHumor';
import NavBarComp from '../features/components/NavBar';

function App() {
	return (
		<div className="App">
			<NavBarComp />
			<h1>Down The Reddit Hole</h1>

			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/TIL" element={<TIL />} />
					<Route path="/explain" element={<ExplainLike />} />
					<Route path="/memes" element={<Memes />} />
					<Route path="/programhumor" element={<ProgramHumor />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
