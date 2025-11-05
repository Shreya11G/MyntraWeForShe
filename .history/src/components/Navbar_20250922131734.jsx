import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		onSearch(value); // send the term to parent
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
				   <Link to="/login">Login</Link>
				   <Link to="/signup">Sign up</Link>
			</div>
		</nav>
	);
};

export default Navbar;
