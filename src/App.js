import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Create from "./pages/Create";
import Event from "./pages/Event";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/create" element={<Create />} />
				<Route path="/event" element={<Event />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
