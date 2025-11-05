// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const Signup = () => {
// 	const [formData, setFormData] = useState({
// 		username: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");
// 	const [loading, setLoading] = useState(false);
// 	const navigate = useNavigate();

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prev) => ({ ...prev, [name]: value }));
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setError("");

// 		if (!formData.username || !formData.email || !formData.password) {
// 			setError("All fields are required.");
// 			return;
// 		}

// 		setLoading(true);

// 		// Simulate backend delay
// 		setTimeout(() => {
// 			// Get existing users from localStorage
// 			const users = JSON.parse(localStorage.getItem("users")) || [];

// 			// Check if email already exists
// 			const existingUser = users.find((u) => u.email === formData.email);
// 			if (existingUser) {
// 				setError("User with this email already exists.");
// 				setLoading(false);
// 				return;
// 			}

// 			// Save new user
// 			const newUser = {
// 				username: formData.username,
// 				email: formData.email,
// 				password: formData.password,
// 			};
// 			users.push(newUser);
// 			localStorage.setItem("users", JSON.stringify(users));

// 			// Simulate "login"
// 			localStorage.setItem("loggedInUser", JSON.stringify(newUser));

// 			setLoading(false);
// 			navigate("/");
// 		}, 1000);
// 	};

// 	return (
// 		<div className="signup-container">
// 			<h1>Sign Up</h1>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					name="username"
// 					placeholder="Full Name"
// 					value={formData.username}
// 					onChange={handleChange}
// 					required
// 				/>
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
// 					{loading ? "Signing up..." : "Sign Up"}
// 				</button>
// 			</form>
// 			{error && <p className="error">{error}</p>}
// 		</div>
// 	);
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		location: "",
	});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!formData.username || !formData.email || !formData.password || !formData.location) {
			setError("All fields are required.");
			return;
		}

		setLoading(true);

		setTimeout(() => {
			const users = JSON.parse(localStorage.getItem("users")) || [];

			const existingUser = users.find((u) => u.email === formData.email);
			if (existingUser) {
				setError("User with this email already exists.");
				setLoading(false);
				return;
			}

					const newUser = {
						username: formData.username,
						email: formData.email,
						password: formData.password,
						location: formData.location,
						categoryCounts: {
							Retro: 0,
							Streetwear: 0,
							Ethnic: 0,
							Formal: 0,
							Chic: 0,
							Partywear: 0,
						},
						orders: [],
						wishlist: [],
					};

			users.push(newUser);
			localStorage.setItem("users", JSON.stringify(users));
			localStorage.setItem("loggedInUser", JSON.stringify(newUser));

			setLoading(false);
			navigate("/"); // redirect to home
		}, 1000);
	};

	return (
		<div className="signup-container">
			<h1>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="username"
							placeholder="Full Name"
							value={formData.username}
							onChange={handleChange}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							type="text"
							name="location"
							placeholder="Location (e.g. Delhi)"
							value={formData.location}
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
							{loading ? "Signing up..." : "Sign Up"}
						</button>
					</form>
			{error && <p className="error">{error}</p>}
		</div>
	);
};

export default Signup;
