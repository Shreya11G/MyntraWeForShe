// import React, { useState } from "react";
// import "./ProductCard.css";

// // Function to highlight search term in text
// const highlightText = (text, searchTerm) => {
// 	if (!searchTerm) return text;

// 	const regex = new RegExp(`(${searchTerm})`, "gi");
// 	const parts = text.split(regex);

// 	return parts.map((part, index) =>
// 		regex.test(part) ? (
// 			<span
// 				key={index}
// 				className="highlight">
// 				{part}
// 			</span>
// 		) : (
// 			part
// 		)
// 	);
// };

// const ProductCard = ({ product, searchTerm }) => {
// 	const [isWishlisted, setIsWishlisted] = useState(false);
// 	const [buying, setBuying] = useState(false);

// 	// Toggle wishlist
// 	const toggleWishlist = () => setIsWishlisted(!isWishlisted);

// 	// Handle purchase (localStorage only)
// 	const handleBuy = () => {
// 		setBuying(true);

// 		// Get existing purchases
// 		let purchases = JSON.parse(localStorage.getItem("purchases")) || {};

// 		// Count product category
// 		purchases[product.category] = (purchases[product.category] || 0) + 1;

// 		// Save back to localStorage
// 		localStorage.setItem("purchases", JSON.stringify(purchases));

// 		alert(
// 			`You purchased: ${product.type}\n` +
// 				`Total ${product.category} purchases: ${purchases[product.category]}`
// 		);

// 		setBuying(false);
// 	};

// 	return (
// 		<div className="product-card">
// 			{/* Image and wishlist/trending */}
// 			<div className="image-container">
// 				<img
// 					src={product.image_url}
// 					alt={product.type}
// 					className="product-img"
// 				/>
// 				<button
// 					className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
// 					onClick={toggleWishlist}
// 					aria-label="Add to wishlist">
// 					♥
// 				</button>
// 				{product.isTrending && <span className="badge">🔥 Trending</span>}
// 			</div>

// 			{/* Product info */}
// 			<div className="product-info">
// 				<h2 className="product-title">
// 					{highlightText(product.type, searchTerm)}
// 				</h2>
// 				<p className="product-category">
// 					{highlightText(product.category, searchTerm)}
// 				</p>

// 				<div className="rating-price">
// 					<p className="product-price">₹ {product.price}</p>
// 					<div className="product-rating">
// 						⭐ ⭐ ⭐ ⭐ ☆ <span className="rating-num">(120)</span>
// 					</div>
// 				</div>

// 				<div className="product-actions">
// 					<button
// 						className="buy-btn"
// 						onClick={handleBuy}
// 						disabled={buying}
// 						aria-label="Buy Now">
// 						{buying ? "Processing..." : "Buy Now"}
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ProductCard;
import React, { useState, useEffect } from "react";
import "./ProductCard.css";

// Function to highlight search term in text
const highlightText = (text, searchTerm) => {
	if (!searchTerm) return text;
	const regex = new RegExp(`(${searchTerm})`, "gi");
	const parts = text.split(regex);
	return parts.map((part, index) =>
		regex.test(part) ? (
			<span
				key={index}
				className="highlight">
				{part}
			</span>
		) : (
			part
		)
	);
};

const ProductCard = ({ product, searchTerm }) => {
	const [isWishlisted, setIsWishlisted] = useState(false);
	const [buying, setBuying] = useState(false);

	// Load wishlist state from loggedInUser
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("loggedInUser"));
		if (user?.wishlist?.includes(product.id)) {
			setIsWishlisted(true);
		}
	}, [product.id]);

	const toggleWishlist = () => {
		const user = JSON.parse(localStorage.getItem("loggedInUser"));
		if (!user) return;

		user.wishlist = user.wishlist || [];
		if (isWishlisted) {
			user.wishlist = user.wishlist.filter((id) => id !== product.id);
		} else {
			user.wishlist.push(product.id);
		}

		localStorage.setItem("loggedInUser", JSON.stringify(user));
		setIsWishlisted(!isWishlisted);
		window.dispatchEvent(new Event("sessionUpdate")); // Notify other components
	};

	const handleBuy = () => {
		const user = JSON.parse(localStorage.getItem("loggedInUser"));
		if (!user) return;

		setBuying(true);

		// Initialize categoryCounts and orders if undefined
		user.categoryCounts = user.categoryCounts || {};
		user.orders = user.orders || [];

		// Update category count
		user.categoryCounts[product.category] =
			(user.categoryCounts[product.category] || 0) + 1;

		// Add product to orders
		user.orders.push(product);

		// Save back to localStorage
		localStorage.setItem("loggedInUser", JSON.stringify(user));

		alert(
			`You purchased: ${product.type}\n` +
				`Total ${product.category} purchases: ${
					user.categoryCounts[product.category]
				}`
		);

		// Dispatch event to update ProfileDNA or other components
		window.dispatchEvent(new Event("sessionUpdate"));

		setBuying(false);
	};

	return (
		<div className="product-card">
			<div className="image-container">
				<img
					src={product.image_url}
					alt={product.type}
					className="product-img"
				/>
				<button
					className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
					onClick={toggleWishlist}
					aria-label="Add to wishlist">
					♥
				</button>
				{product.isTrending && <span className="badge">🔥 Trending</span>}
			</div>

			<div className="product-info">
				<h2 className="product-title">
					{highlightText(product.type, searchTerm)}
				</h2>
				<p className="product-category">
					{highlightText(product.category, searchTerm)}
				</p>

				<div className="rating-price">
					<p className="product-price">₹ {product.price}</p>
					<div className="product-rating">
						⭐ ⭐ ⭐ ⭐ ☆ <span className="rating-num">(120)</span>
					</div>
				</div>

				<div className="product-actions">
					<button
						className="buy-btn"
						onClick={handleBuy}
						disabled={buying}
						aria-label="Buy Now">
						{buying ? "Processing..." : "Buy Now"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
