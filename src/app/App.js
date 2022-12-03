import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from '../features/screens/HomePage';
import TIL from '../features/screens/TIL';
import ExplainLike from '../features/screens/ExplainLike';
import Memes from '../features/screens/Memes';
import ProgramHumor from '../features/screens/ProgramHumor';
import NavBar from '../features/components/NavBar';
import BunnyPosts from '../features/screens/BunnyPosts';
import ScrollUp from '../features/components/ScrollUp';

function App() {
	return (
		<div className="App">
			<NavBar />

			<Router>
				<Routes>
					<Route path="/wonderland" element={<BunnyPosts />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/TIL" element={<TIL />} />
					<Route path="/explain" element={<ExplainLike />} />
					<Route path="/memes" element={<Memes />} />
					<Route path="/programhumor" element={<ProgramHumor />} />
				</Routes>
			</Router>
			<ScrollUp />
		</div>
	);
}

export default App;
