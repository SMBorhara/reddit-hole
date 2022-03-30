import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from '../features/components/HomePage';
import TIL from '../features/components/TIL';

function App() {
	return (
		<div className="App">
			<h1>Down The Reddit Hole</h1>

			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/TIL" element={<TIL />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
