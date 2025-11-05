// import React, { useState } from "react";
// import { products } from "../data/products";
// import ProductCard from "../components/ProductCard";
// import "./Home.css";
// import axios from "axios";

// // Hero banners
// const heroBanners = [
// 	{ img: "/banner-homepage.jpg", alt: "Big Fashion Festival Early Bird Days" },
// ];

// // Deals of the Day
// const dealsOfDay = [
// 	{
// 		img: "https://cdn.grabon.in/gograbon/images/deal/1709010036198/myntra-floral-printed-kurta-with-trousers.JPG",
// 		label: "Flat 60% Off",
// 	},
// 	{
// 		img: "https://cdn.grabon.in/gograbon/images/deal/1716268607168/myntra-floral-printed-kurta-with-trousers-dupatta.JPG",
// 		label: "Buy 1 Get 1",
// 	},
// 	{
// 		img: "https://cdn.grabon.in/gograbon/images/deal/1718616327602/myntra-women-floral-embroidered-kurta-with-trousers.JPG",
// 		label: "Under ₹499",
// 	},
// 	{
// 		img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/11382258/2020/2/25/2499c5f8-51eb-4cf1-b137-ee5827a3a6a11582616415424-Ginni-Arora-Label-Women-Grey--Red-Printed-Straight-Kurta-674-1.jpg",
// 		label: "Extra 20% Off",
// 	},
// ];

// // Top categories
// const topCategories = [
// 	{
// 		name: "Men",
// 		img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17963710/2022/4/21/b047abdf-6187-4e0d-82a5-530ef11a831d1650515511097HERENOWMenGreenSlimFitCasualShirt1.jpg",
// 	},
// 	{
// 		name: "Women",
// 		img: "https://c.ndtvimg.com/2024-03/4bkljffo_womens-clothes_625x300_19_March_24.jpeg",
// 	},
// 	{
// 		name: "Kids",
// 		img: "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/q/0/v/5-6-years-kids-ethnic-set-mehzin-original-imag74mekk7s32ca.jpeg?q=70",
// 	},
// 	{
// 		name: "Beauty",
// 		img: "https://img-cdn.thepublive.com/fit-in/1920x1080/filters:format(webp)/elle-india/media/post_attachments/wp-content/uploads/2023/02/Untitled-design-11.png",
// 	},
// ];

// // Map categories to product subcategories
// const categoryMap = {
// 	Men: ["streetwear", "formal", "casual", "ethnic", "athleisure", "minimal"],
// 	Women: ["chic", "retro", "boho", "party", "ethnic", "minimal", "athleisure"],
// 	Kids: ["casual", "party", "ethnic", "athleisure"],
// 	"Home & Living": ["home", "living"],
// 	Beauty: ["beauty"],
// };

// // Home component
// const Home = ({ searchTerm, selectedCategory }) => {
// 	const [cart, setCart] = useState([]);

// 	// // Buy handler
// 	// const handleBuy = async (product) => {
// 	// 	const token = localStorage.getItem("token");
// 	// 	if (!token) {
// 	// 		alert("Please login to buy products.");
// 	// 		return;
// 	// 	}

// 	// 	try {
// 	// 		const res = await axios.post(
// 	// 			"http://localhost:5000/api/purchase",
// 	// 			{ category: product.category },
// 	// 			{ headers: { "x-auth-token": token } }
// 	// 		);

// 	// 		setCart([...cart, product]);
// 	// 		alert(
// 	// 			`You purchased: ${product.type}!\n` +
// 	// 				`Total ${product.category} purchases: ${
// 	// 					res.data.purchases[product.category]
// 	// 				}`
// 	// 		);
// 	// 	} catch (err) {
// 	// 		alert(err.response?.data?.error || "Purchase failed. Try again.");
// 	// 	}
// 	// };
// 	// inside Home component

// 	const handleBuy = (product) => {
// 		const token = localStorage.getItem("token");
// 		if (!token) {
// 			alert("Please login to buy products.");
// 			return;
// 		}

// 		// Get purchases from localStorage
// 		const savedPurchases = JSON.parse(localStorage.getItem("purchases")) || {};

// 		// Increment category count
// 		savedPurchases[product.category] =
// 			(savedPurchases[product.category] || 0) + 1;

// 		// Save back to localStorage
// 		localStorage.setItem("purchases", JSON.stringify(savedPurchases));

// 		// Save to orders
// 		const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
// 		const newOrder = {
// 			...product,
// 			orderDate: new Date().toLocaleDateString(),
// 			delivered: true,
// 			location: "Default Address",
// 		};
// 		localStorage.setItem("orders", JSON.stringify([...savedOrders, newOrder]));

// 		// Update cart in state
// 		setCart([...cart, product]);

// 		alert(
// 			`You purchased: ${product.type}!\n` +
// 				`Total ${product.category} purchases: ${
// 					savedPurchases[product.category]
// 				}`
// 		);
// 	};

// 	// Filter products by category and search term
// 	let filteredProducts = products;
// 	if (selectedCategory && categoryMap[selectedCategory]) {
// 		filteredProducts = filteredProducts.filter((p) =>
// 			categoryMap[selectedCategory].includes(p.category.toLowerCase())
// 		);
// 	}
// 	if (searchTerm && searchTerm.trim() !== "") {
// 		filteredProducts = filteredProducts.filter(
// 			(item) =>
// 				item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 				item.category.toLowerCase().includes(searchTerm.toLowerCase())
// 		);
// 	}

// 	return (
// 		<div className="home-container">
// 			{/* Hero banner */}
// 			<div className="hero-carousel">
// 				<a
// 					href="https://www.myntra.com/mfb-brands"
// 					target="_blank"
// 					rel="noopener noreferrer">
// 					<img
// 						src={heroBanners[0].img}
// 						alt={heroBanners[0].alt}
// 						className="hero-img"
// 					/>
// 				</a>
// 			</div>

// 			{/* Deals Section */}
// 			<div className="scroll-section">
// 				<h2>Deals of the Day</h2>
// 				<div className="scroll-row">
// 					{dealsOfDay.map((deal, i) => (
// 						<div
// 							className="scroll-card"
// 							key={i}>
// 							<img
// 								src={deal.img}
// 								alt={deal.label}
// 								className="scroll-img"
// 							/>
// 							<span className="scroll-label">{deal.label}</span>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* Top Categories Section */}
// 			<div className="scroll-section">
// 				<h2>Top Categories</h2>
// 				<div className="scroll-row">
// 					{topCategories.map((cat) => (
// 						<div
// 							className="scroll-card"
// 							key={cat.name}>
// 							<img
// 								src={cat.img}
// 								alt={cat.name}
// 								className="scroll-img"
// 							/>
// 							<span className="scroll-label">{cat.name}</span>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* Products Grid */}
// 			<h1>Products</h1>
// 			<div className="product-grid">
// 				{filteredProducts.length > 0 ? (
// 					filteredProducts.map((product) => (
// 						<ProductCard
// 							key={product.id}
// 							product={product}
// 							onBuy={handleBuy}
// 						/>

// 						// <ProductCard
// 						// 	key={product.id}
// 						// 	product={product}
// 						// 	searchTerm={searchTerm}
// 						// 	onBuy={handleBuy}
// 						// />
// 					))
// 				) : (
// 					<p className="no-results">
// 						No products found for "{searchTerm || selectedCategory}"
// 					</p>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default Home;
import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

// Hero banners
const heroBanners = [
	{ img: "/banner-homepage.jpg", alt: "Big Fashion Festival Early Bird Days" },
];

// Deals of the Day
const dealsOfDay = [
	{
		img: "https://cdn.grabon.in/gograbon/images/deal/1709010036198/myntra-floral-printed-kurta-with-trousers.JPG",
		label: "Flat 60% Off",
	},
	{
		img: "https://cdn.grabon.in/gograbon/images/deal/1716268607168/myntra-floral-printed-kurta-with-trousers-dupatta.JPG",
		label: "Buy 1 Get 1",
	},
	{
		img: "https://cdn.grabon.in/gograbon/images/deal/1718616327602/myntra-women-floral-embroidered-kurta-with-trousers.JPG",
		label: "Under ₹499",
	},
	{
		img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/11382258/2020/2/25/2499c5f8-51eb-4cf1-b137-ee5827a3a6a11582616415424-Ginni-Arora-Label-Women-Grey--Red-Printed-Straight-Kurta-674-1.jpg",
		label: "Extra 20% Off",
	},
];

// Top categories
const topCategories = [
	{
		name: "Men",
		img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17963710/2022/4/21/b047abdf-6187-4e0d-82a5-530ef11a831d1650515511097HERENOWMenGreenSlimFitCasualShirt1.jpg",
	},
	{
		name: "Women",
		img: "https://c.ndtvimg.com/2024-03/4bkljffo_womens-clothes_625x300_19_March_24.jpeg",
	},
	{
		name: "Kids",
		img: "https://rukminim1.flixcart.com/image/612/612/xif0q/kids-ethnic-set/q/0/v/5-6-years-kids-ethnic-set-mehzin-original-imag74mekk7s32ca.jpeg?q=70",
	},
	{
		name: "Beauty",
		img: "https://img-cdn.thepublive.com/fit-in/1920x1080/filters:format(webp)/elle-india/media/post_attachments/wp-content/uploads/2023/02/Untitled-design-11.png",
	},
];

// Category map
const categoryMap = {
	Men: ["streetwear", "formal", "casual", "ethnic", "athleisure", "minimal"],
	Women: ["chic", "retro", "boho", "party", "ethnic", "minimal", "athleisure"],
	Kids: ["casual", "party", "ethnic", "athleisure"],
	"Home & Living": ["home", "living"],
	Beauty: ["beauty"],
};

const Home = ({ searchTerm, selectedCategory }) => {
	const [cart, setCart] = useState([]);

	const handleBuy = (product) => {
		const token = localStorage.getItem("token");
		if (!token) {
			alert("Please login to buy products.");
			return;
		}

		// Purchases by category
		const savedPurchases = JSON.parse(localStorage.getItem("purchases")) || {};
		savedPurchases[product.category] =
			(savedPurchases[product.category] || 0) + 1;
		localStorage.setItem("purchases", JSON.stringify(savedPurchases));

		// Orders
		const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		const newOrder = {
			...product,
			orderDate: new Date().toLocaleDateString(),
			delivered: true,
			location: "Default Address",
		};
		localStorage.setItem("orders", JSON.stringify([...savedOrders, newOrder]));

		setCart([...cart, product]);

		alert(
			`You purchased: ${product.type}!\nTotal ${product.category} purchases: ${
				savedPurchases[product.category]
			}`
		);
	};

	let filteredProducts = products;
	if (selectedCategory && categoryMap[selectedCategory]) {
		filteredProducts = filteredProducts.filter((p) =>
			categoryMap[selectedCategory].includes(p.category.toLowerCase())
		);
	}
	if (searchTerm && searchTerm.trim() !== "") {
		filteredProducts = filteredProducts.filter(
			(item) =>
				item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.category.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	return (
		<div className="home-container">
			{/* Hero banner */}
			<div className="hero-carousel">
				<img
					src={heroBanners[0].img}
					alt={heroBanners[0].alt}
					className="hero-img"
				/>
			</div>

			{/* Deals */}
			<div className="scroll-section">
				<h2>Deals of the Day</h2>
				<div className="scroll-row">
					{dealsOfDay.map((deal, i) => (
						<div
							className="scroll-card"
							key={i}>
							<img
								src={deal.img}
								alt={deal.label}
								className="scroll-img"
							/>
							<span className="scroll-label">{deal.label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Categories */}
			<div className="scroll-section">
				<h2>Top Categories</h2>
				<div className="scroll-row">
					{topCategories.map((cat) => (
						<div
							className="scroll-card"
							key={cat.name}>
							<img
								src={cat.img}
								alt={cat.name}
								className="scroll-img"
							/>
							<span className="scroll-label">{cat.name}</span>
						</div>
					))}
				</div>
			</div>

			{/* Products */}
			<h1>Products</h1>
			<div className="product-grid">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							onBuy={handleBuy}
						/>
					))
				) : (
					<p className="no-results">
						No products found for "{searchTerm || selectedCategory}"
					</p>
				)}
			</div>
		</div>
	);
};

export default Home;
