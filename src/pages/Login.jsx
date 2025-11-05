// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
// 	const [formData, setFormData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");
// 	const [loading, setLoading] = useState(false);
// 	const navigate = useNavigate();

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({ ...prev, [name]: value }));
// 	};

// 	const handleLogin = (e) => {
// 		e.preventDefault();
// 		setError("");

// 		if (!formData.email || !formData.password) {
// 			setError("Please enter both email and password.");
// 			return;
// 		}

// 		setLoading(true);

// 		// Retrieve users from localStorage
// 		const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

// 		// Check if user exists
// 		const existingUser = savedUsers.find(
// 			(user) =>
// 				user.email === formData.email && user.password === formData.password
// 		);

// 		if (existingUser) {
// 			// Save token & username in localStorage (mock token)
// 			localStorage.setItem("token", "mock-jwt-token");
// 			localStorage.setItem("username", existingUser.username);

// 			navigate("/"); // redirect to home
// 		} else {
// 			setError("Invalid email or password.");
// 		}

// 		setLoading(false);
// 	};

// 	return (
// 		<div className="login-container">
// 			<h1>Login</h1>
// 			<form onSubmit={handleLogin}>
// 				<input
// 					type="email"
// 					name="email"
// 					placeholder="Email"
// 					value={formData.email}
// 					onChange={handleChange}
// 					required
// 				/>
// 				<input
// 					type="password"
// 					name="password"
// 					placeholder="Password"
// 					value={formData.password}
// 					onChange={handleChange}
// 					required
// 				/>
// 				<button
// 					type="submit"
// 					disabled={loading}>
// 					{loading ? "Logging in..." : "Login"}
// 				</button>
// 			</form>
// 			{error && <p className="error">{error}</p>}
// 		</div>
// 	);
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleLogin = (e) => {
		e.preventDefault();
		setError("");

		if (!formData.email || !formData.password) {
			setError("Please enter both email and password.");
			return;
		}

		setLoading(true);

		// Retrieve users from localStorage
		const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

		// Check if user exists
		const existingUser = savedUsers.find(
			(user) =>
				user.email === formData.email && user.password === formData.password
		);

		if (existingUser) {
			// Save token & full user object in localStorage
			localStorage.setItem("token", "mock-jwt-token");
			localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

			// Dispatch custom event to notify navbar about login
			window.dispatchEvent(new Event('authChange'));

			navigate("/"); // redirect to home
		} else {
			setError("Invalid email or password.");
		}

		setLoading(false);
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<button
					type="submit"
					disabled={loading}>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
			{error && <p className="error">{error}</p>}
		</div>
	);
};

export default Login;
