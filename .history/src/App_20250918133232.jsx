import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileDNA from "./pages/ProfileDNA";
import DNAQuests from "./pages/DNAQuests";
import VideoFeed from "./pages/VideoFeed";

import Influencing from "./pages/Influencing";


// Optional: a NotFound page
import NotFound from "./pages/NotFound";
// PrivateRoute component with a tiny hook to reflect auth state
const useAuth = () => {
	// You can switch this to a more robust auth state store if desired
	const token = localStorage.getItem("token");
	return !!token;
};

const PrivateRoute = ({ children }) => {
	const isAuth = useAuth();
	// Simple guard: render children if authenticated; otherwise redirect
	return isAuth ? (
		children
	) : (
		<Navigate
			to="/login"
			replace
		/>
	);
};

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				{/* Public routes */}
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>



				{/* Influencing (Fashion Shorts) */}
				<Route
					path="/influencing"
					element={<Influencing />}
				/>

				{/* Private routes */}
				<Route
					path="/profileDNA"
					element={
						<ProfileDNA />

						// <PrivateRoute>
						// 	<ProfileDNA />
						// </PrivateRoute>
					}
				/>
				<Route
					path="/feed"
					element={
						<VideoFeed />

						// <PrivateRoute>
						// 	<VideoFeed />
						// </PrivateRoute>
					}
				/>

				{/* Non-authenticated content (if any) */}
				<Route
					path="/DNAQuests"
					element={<DNAQuests />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
