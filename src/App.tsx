import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

import './styles/style.css';

function App() {
	return (
		<>
			{/* <GlobalStyle /> */}
			{/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404</>} />
        </Routes> */}

			<Home />
		</>
	);
}

export default App;
