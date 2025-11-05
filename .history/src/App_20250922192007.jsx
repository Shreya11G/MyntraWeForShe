import React from "react";
// Simple error boundary for debugging blank pages
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}
	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}
	componentDidCatch(error, errorInfo) {
		// You can log errorInfo if needed
	}
	render() {
		if (this.state.hasError) {
			return (
				<div style={{ color: 'red', padding: 32 }}>
					<h2>Something went wrong in this page.</h2>
					<pre>{this.state.error && this.state.error.toString()}</pre>
				</div>
			);
		}
		return this.props.children;
	}
}
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
import Trends from "./pages/Trends";


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
				   {/* Trends page */}
				   <Route
					   path="/trends"
					   element={<Trends />}
				   />
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




								 {/* Influencing (Fashion Shorts) with error boundary */}
								 <Route
										 path="/influencing"
										 element={
											 <ErrorBoundary>
												 <Influencing />
											 </ErrorBoundary>
										 }
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
