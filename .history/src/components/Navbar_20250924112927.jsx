import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	// Check authentication status on component mount and when localStorage changes
	useEffect(() => {
		const checkAuth = () => {
			const token = localStorage.getItem("token");
			setIsAuthenticated(!!token);
		};
		
		checkAuth();
		
		// Listen for storage changes (when user logs in/out in another tab)
		window.addEventListener('storage', checkAuth);
		// Listen for custom auth change events (when user logs in/out in same tab)
		window.addEventListener('authChange', checkAuth);
		
		return () => {
			window.removeEventListener('storage', checkAuth);
			window.removeEventListener('authChange', checkAuth);
		};
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		onSearch(value); // send the term to parent
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("loggedInUser");
		setIsAuthenticated(false);
		
		// Dispatch custom event to notify any other components
		window.dispatchEvent(new Event('authChange'));
		
		navigate("/"); // Redirect to home page after logout
	};

	return (
		<nav className="navbar">
			<h1>Fashion DNA</h1>

			<div className="search-box">
				<input
					type="text"
					placeholder="Search styles (e.g., Retro Chic, Streetwear)"
					value={searchTerm}
					onChange={handleChange}
				/>
			</div>

			<div className="nav-links">
				   <Link to="/">Home</Link>
				   <Link to="/influencing">Influencing</Link>
				   <Link to="/trends">Trends</Link>
				   <Link to="/profileDNA">ProfileDNA</Link>
				   <Link to="/DNAQuests">DNA Quests</Link>
				   
				   {/* Conditional authentication links */}
				   {isAuthenticated ? (
					   <span 
						   onClick={handleLogout}
						   style={{ 
							   cursor: "pointer",
							   color: "#fff",
							   fontWeight: "500",
							   fontSize: "0.95rem",
							   transition: "color 0.3s ease"
						   }}
						   onMouseEnter={(e) => e.target.style.color = "#ffe6f0"}
						   onMouseLeave={(e) => e.target.style.color = "#fff"}
					   >
						   Logout
					   </span>
				   ) : (
					   <>
						   <Link to="/login">Login</Link>
						   <Link to="/signup">Sign up</Link>
					   </>
				   )}
			</div>
		</nav>
	);
};

export default Navbar;
