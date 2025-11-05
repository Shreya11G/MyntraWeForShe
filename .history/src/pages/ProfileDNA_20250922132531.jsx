// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const categoryColors = {
// 	Retro: "#FFA726",
// 	Streetwear: "#8A2BE2",
// 	Ethnic: "#808080",
// 	Formal: "#00CED1",
// 	Chic: "#1E90FF",
// 	Partywear: "#FF8C00",
// };

// // ---------- DNA Helix Component ----------
// const DNAVisualization = ({ traits, animated = true }) => {
// 	const [phase, setPhase] = useState(0);

// 	useEffect(() => {
// 		if (!animated) return;
// 		const interval = setInterval(() => setPhase((p) => (p + 1) % 360), 50);
// 		return () => clearInterval(interval);
// 	}, [animated]);

// 	const helixWidth = 60;
// 	const helixHeight = 300;
// 	const turns = 3;

// 	const generateStrandPath = (isLeft) => {
// 		let points = [];
// 		for (let i = 0; i <= 60; i++) {
// 			const t = i / 60;
// 			const angle =
// 				t * Math.PI * 2 * turns + (isLeft ? 0 : Math.PI) + phase * 0.05;
// 			const x = Math.cos(angle) * (helixWidth / 2) + 100;
// 			const y = t * helixHeight + 10;
// 			points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
// 		}
// 		return points.join(" ");
// 	};

// 	const uniqueTraits = traits.filter((trait) => trait.count > 0);

// 	return (
// 		<svg
// 			width="220"
// 			height="320">
// 			<path
// 				d={generateStrandPath(true)}
// 				stroke="#8B5CF6"
// 				strokeWidth="3"
// 				fill="none"
// 			/>
// 			<path
// 				d={generateStrandPath(false)}
// 				stroke="#10B981"
// 				strokeWidth="3"
// 				fill="none"
// 			/>
// 			{uniqueTraits.map((trait, i) => {
// 				const t = (i + 1) / (uniqueTraits.length + 1);
// 				const angle1 = t * Math.PI * 2 * turns + phase * 0.05;
// 				const angle2 = angle1 + Math.PI;
// 				const x1 = Math.cos(angle1) * (helixWidth / 2) + 100;
// 				const x2 = Math.cos(angle2) * (helixWidth / 2) + 100;
// 				const y = t * helixHeight + 10;
// 				return (
// 					<g key={`${trait.name}-${i}`}>
// 						<circle
// 							cx={x1}
// 							cy={y}
// 							r="8"
// 							fill={trait.color}
// 						/>
// 						<circle
// 							cx={x2}
// 							cy={y}
// 							r="8"
// 							fill={trait.color}
// 						/>
// 						<line
// 							x1={x1}
// 							y1={y}
// 							x2={x2}
// 							y2={y}
// 							stroke="#E5E7EB"
// 							strokeWidth="2"
// 						/>
// 						<text
// 							x={x2 + 12}
// 							y={y + 4}
// 							fontSize="10"
// 							fill="#111">
// 							{trait.name}: {trait.percentage}%
// 						</text>
// 					</g>
// 				);
// 			})}
// 		</svg>
// 	);
// };

// // ---------- Avatar Component ----------
// const AvatarCard = ({ orders }) => {
// 	const baseAvatar = { img: "/avatar-base.png", desc: "Your Avatar" };
// 	const [selected, setSelected] = useState(null);

// 	return (
// 		<div
// 			style={{
// 				background: "#fff",
// 				borderRadius: 18,
// 				padding: "2rem",
// 				marginBottom: "2rem",
// 				boxShadow: "0 4px 32px #a259ff22",
// 			}}>
// 			<h2
// 				style={{
// 					fontWeight: 900,
// 					fontSize: "1.5rem",
// 					marginBottom: "1rem",
// 					color: "#a259ff",
// 				}}>
// 				Your Avatar
// 			</h2>
// 			<div style={{ display: "flex", gap: "2rem" }}>
// 				<div style={{ flex: "0 0 160px", textAlign: "center" }}>
// 					<img
// 						src={selected ? selected.img : baseAvatar.img}
// 						alt="Avatar"
// 						style={{
// 							width: 140,
// 							height: 180,
// 							borderRadius: 16,
// 							background: "#f7f7f7",
// 							border: "2px solid #eee",
// 						}}
// 					/>
// 					<div style={{ marginTop: 8, fontWeight: 700, color: "#888" }}>
// 						{selected ? selected.name : baseAvatar.desc}
// 					</div>
// 				</div>
// 				<div
// 					style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "1rem" }}>
// 					{orders.map((item, i) => (
// 						<div
// 							key={item.id || i}
// 							onClick={() => setSelected(item)}
// 							style={{ cursor: "pointer", textAlign: "center" }}>
// 							<img
// 								src={item.image_url}
// 								alt={item.name}
// 								style={{
// 									width: 60,
// 									height: 60,
// 									borderRadius: 10,
// 									background: "#f7f7f7",
// 									border: "2px solid #eee",
// 								}}
// 							/>
// 							<div
// 								style={{
// 									fontSize: "0.95rem",
// 									marginTop: 4,
// 									color: "#a259ff",
// 								}}>
// 								{item.name || item.type}
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// // ---------- OrderHistory Component ----------
// const OrderHistory = () => {
// 	const [orders, setOrders] = useState([]);

// 	useEffect(() => {
// 		const fetchOrders = () => {
// 			const user = JSON.parse(localStorage.getItem("loggedInUser"));
// 			setOrders(user?.orders || []);
// 		};
// 		fetchOrders();
// 		window.addEventListener("sessionUpdate", fetchOrders);
// 		return () => {
// 			window.removeEventListener("sessionUpdate", fetchOrders);
// 		};
// 	}, []);

// 	if (orders.length === 0) {
// 		return (
// 			<div
// 				style={{
// 					marginTop: "2rem",
// 					padding: "1rem",
// 					border: "1px dashed #ccc",
// 					borderRadius: "8px",
// 					textAlign: "center",
// 				}}>
// 				<p>No orders to display. Start shopping to build your history!</p>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div style={{ marginTop: "2rem" }}>
// 			<h2 style={{ fontWeight: 900, marginBottom: "1rem", color: "#a259ff" }}>
// 				Your Order History
// 			</h2>
// 			<ul style={{ listStyle: "none", padding: 0 }}>
// 				{orders.map((order) => (
// 					<li
// 						key={order.id}
// 						style={{
// 							background: "#fff",
// 							padding: "1rem",
// 							borderRadius: "12px",
// 							marginBottom: "1rem",
// 							boxShadow: "0 2px 16px #00000010",
// 							display: "flex",
// 							alignItems: "center",
// 							gap: "1rem",
// 						}}>
// 						<img
// 							src={order.image_url}
// 							alt={order.name}
// 							style={{
// 								width: 80,
// 								height: 80,
// 								borderRadius: "8px",
// 								objectFit: "cover",
// 							}}
// 						/>
// 						<div>
// 							<p style={{ fontWeight: 600, margin: 0 }}>{order.name}</p>
// 							<p
// 								style={{
// 									fontSize: "0.9rem",
// 									color: "#666",
// 									margin: "0.25rem 0",
// 								}}>
// 								Category: {order.category}
// 							</p>
// 							<p style={{ fontWeight: 700, margin: 0, color: "#a259ff" }}>
// 								${order.price}
// 							</p>
// 						</div>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// // ---------- Main ProfileDNA Component ----------
// const ProfileDNA = () => {
// 	const [purchases, setPurchases] = useState({});
// 	const [orders, setOrders] = useState([]);

// 	useEffect(() => {
// 		const fetchUserData = () => {
// 			const user = JSON.parse(localStorage.getItem("loggedInUser"));
// 			if (user) {
// 				setPurchases(user.categoryCounts || {});
// 				setOrders(user.orders || []);
// 			}
// 		};

// 		fetchUserData();
// 		window.addEventListener("sessionUpdate", fetchUserData);

// 		return () => {
// 			window.removeEventListener("sessionUpdate", fetchUserData);
// 		};
// 	}, []);

// 	const total = Object.values(purchases).reduce((a, b) => a + b, 0);

// 	const traitsArray = Object.entries(purchases)
// 		.filter(([name, count]) => count > 0)
// 		.map(([name, count], i) => ({
// 			id: i,
// 			name,
// 			count,
// 			color: categoryColors[name] || "#999",
// 			percentage: total > 0 ? ((count / total) * 100).toFixed(1) : 0,
// 		}));

// 	const data = {
// 		labels: traitsArray.map((trait) => trait.name),
// 		datasets: [
// 			{
// 				label: "Purchase Categories",
// 				data: traitsArray.map((trait) => trait.count),
// 				backgroundColor: traitsArray.map((trait) => trait.color),
// 				borderColor: "#fff",
// 				borderWidth: 2,
// 			},
// 		],
// 	};

// 	return (
// 		<div
// 			style={{
// 				maxWidth: 700,
// 				margin: "2rem auto",
// 				padding: "2rem",
// 				background: "#f5f5f5",
// 				borderRadius: 18,
// 			}}>
// 			<AvatarCard orders={orders} />
// 			<h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>
// 				Your Purchase DNA
// 			</h2>
// 			<div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
// 				<div style={{ flex: 1 }}>
// 					<Pie data={data} />
// 					<ul style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
// 						{traitsArray.map((trait) => (
// 							<li
// 								key={trait.id}
// 								style={{
// 									color: trait.color,
// 									fontWeight: 600,
// 									marginBottom: "4px",
// 								}}>
// 								{trait.name}: {trait.count} ({trait.percentage}%)
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 				<div style={{ flex: 1 }}>
// 					<DNAVisualization
// 						traits={traitsArray}
// 						animated
// 					/>
// 				</div>
// 			</div>
// 			<OrderHistory />
// 		</div>
// 	);
// };

// export default ProfileDNA;
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./ProfileDNA.css";



ChartJS.register(ArcElement, Tooltip, Legend);

// 🎨 Vibrant colors for both Pie chart & DNA helix
const vibrantColors = [
	"#8B0000", // Dark Red (Maroon)
	"#A0522D", // Sienna / Brownish Orange
	"#B22222", // Firebrick
	"#808000", // Olive
	"#556B2F", // Dark Olive Green
	"#6A0DAD", // Dark Violet
	"#800080", // Classic Dark Purple
	"#9932CC", // Dark Orchid
	"#C71585", // Dark Magenta / Pink
	"#FF8C00", // Dark Orange
];




// ---------- DNA Helix Component ----------
const DNAVisualization = ({ traits, animated = true }) => {
	const [phase, setPhase] = useState(0);

	useEffect(() => {
		if (!animated) return;
		const interval = setInterval(() => setPhase((p) => (p + 1) % 360), 50);
		return () => clearInterval(interval);
	}, [animated]);

	const helixWidth = 60;
	const helixHeight = 300;
	const turns = 3;

	const generateStrandPath = (isLeft) => {
		let points = [];
		for (let i = 0; i <= 60; i++) {
			const t = i / 60;
			const angle =
				t * Math.PI * 2 * turns + (isLeft ? 0 : Math.PI) + phase * 0.05;
			const x = Math.cos(angle) * (helixWidth / 2) + 100;
			const y = t * helixHeight + 10;
			points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
		}
		return points.join(" ");
	};

	const uniqueTraits = traits.filter((trait) => trait.count > 0);

	return (
		<svg width="220" height="320">
			<path d={generateStrandPath(true)} stroke="#8B5CF6" strokeWidth="3" fill="none" />
			<path d={generateStrandPath(false)} stroke="#10B981" strokeWidth="3" fill="none" />
			{uniqueTraits.map((trait, i) => {
				const t = (i + 1) / (uniqueTraits.length + 1);
				const angle1 = t * Math.PI * 2 * turns + phase * 0.05;
				const angle2 = angle1 + Math.PI;
				const x1 = Math.cos(angle1) * (helixWidth / 2) + 100;
				const x2 = Math.cos(angle2) * (helixWidth / 2) + 100;
				const y = t * helixHeight + 10;
				return (
					<g key={`${trait.name}-${i}`}>
						<circle cx={x1} cy={y} r="8" fill={trait.color} />
						<circle cx={x2} cy={y} r="8" fill={trait.color} />
						<line x1={x1} y1={y} x2={x2} y2={y} stroke="#E5E7EB" strokeWidth="2" />
						<text x={x2 + 12} y={y + 4} fontSize="10" fill="#111">
							{trait.name}: {trait.percentage}%
						</text>
					</g>
				);
			})}
		</svg>
	);
};

// ---------- Avatar Component ----------
// ---------- Avatar Component ----------
const AvatarCard = ({ orders }) => {
  const baseAvatar = {
	img: "https://i.pinimg.com/originals/2b/7a/4e/2b7a4e0dc227c0afd1e6625b8a801533.jpg",
	desc: "Your Avatar",
  };
  const [selected, setSelected] = useState(null);

  return (
	<div className="avatar-card">
	  <h2>Your Avatar</h2>
	  <div className="avatar-card-content">
		{/* Avatar Display */}
		<div className="avatar-card-left">
		  <div className="avatar-preview">
			{/* Base avatar always visible */}
			<img
			  src={baseAvatar.img}
			  alt="Base Avatar"
			  className="avatar-base"
			/>

			{/* Selected cloth with animation */}
			{selected && (
			  <img
				src={selected.image_url || selected.img}
				alt={selected.name}
				className="avatar-cloth fade-in"
			  />
			)}
		  </div>

		  <div className="avatar-desc">
			{selected ? selected.name : baseAvatar.desc}
		  </div>
		</div>

		{/* Closet Section */}
		<div className="avatar-closet">
		  <div className="avatar-closet-title">Closet</div>
		  <div className="closet-items">
			{orders.map((item, i) => (
			  <div
				key={item.id || i}
				className="closet-item"
				onClick={() => setSelected(item)}
			  >
				<img src={item.image_url} alt={item.name} />
				<div className="closet-item-name">{item.name || item.type}</div>
			  </div>
			))}
		  </div>
		</div>
	  </div>
	</div>
  );
};

//-DNA Summary Card------------------

const DNACard = ({ traits }) => {
  // Filter traits with >0 count
  const activeTraits = traits.filter((trait) => trait.count > 0);

  if (activeTraits.length === 0) {
	return (
	  <div className="dna-card">
		<p>No purchase data available.</p>
	  </div>
	);
  }

  return (
	<div className="dna-card">
	  <h3>Your Myntra DNA</h3>
	  <p>
		{activeTraits
		  .map(
			(trait) =>
			  `${trait.percentage}% ${trait.name}`
		  )
		  .join(", ")}
		.
	  </p>
	</div>
  );
};






// ---------- OrderHistory Component ----------
const OrderHistory = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = () => {
			const user = JSON.parse(localStorage.getItem("loggedInUser"));
			setOrders(user?.orders || []);
		};
		fetchOrders();
		window.addEventListener("sessionUpdate", fetchOrders);
		return () => {
			window.removeEventListener("sessionUpdate", fetchOrders);
		};
	}, []);

	if (orders.length === 0) {
		return (
			<div style={{ marginTop: "2rem", padding: "1rem", border: "1px dashed #ccc", borderRadius: "8px", textAlign: "center" }}>
				<p>No orders to display. Start shopping to build your history!</p>
			</div>
		);
	}

	return (
		<div style={{ marginTop: "2rem" }}>
			<h2 style={{ fontWeight: 900, marginBottom: "1rem", color: "#180433ff" }}>
				Your Order History
			</h2>
			<ul style={{ listStyle: "none", padding: 0 }}>
				{orders.map((order) => (
					<li
						key={order.id}
						style={{
							background: "#fff",
							padding: "1rem",
							borderRadius: "12px",
							marginBottom: "1rem",
							boxShadow: "0 2px 16px #00000010",
							display: "flex",
							alignItems: "center",
							gap: "1rem",
						}}>
						<img
							src={order.image_url}
							alt={order.name}
							style={{
								width: 80,
								height: 80,
								borderRadius: "8px",
								objectFit: "cover",
							}}
						/>
						<div>
							<p style={{ fontWeight: 600, margin: 0 }}>{order.name}</p>
							<p style={{ fontSize: "0.9rem", color: "#666", margin: "0.25rem 0" }}>
								Category: {order.category}
							</p>
							<p style={{ fontWeight: 700, margin: 0, color: "#a259ff" }}>
								${order.price}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

// ---------- Main ProfileDNA Component ----------

// --- Regional Fashion Trends Mock Data ---
const regionalTrends = {
	Delhi: {
		women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],
		men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],
		neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]
	},
	Mumbai: {
		women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],
		men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],
		neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]
	},
	Bangalore: {
		women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],
		men: ["Techwear", "Plaid shirts", "Chelsea boots"],
		neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]
	},
	Default: {
		women: ["Trendy tops", "Classic jeans", "Statement bags"],
		men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],
		neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]
	}
};

const ProfileDNA = () => {
	const [purchases, setPurchases] = useState({});
	const [orders, setOrders] = useState([]);
		const [location, setLocation] = useState("");
		const [selectedRegion, setSelectedRegion] = useState("");

	useEffect(() => {
		const fetchUserData = () => {
			const user = JSON.parse(localStorage.getItem("loggedInUser"));
			if (user) {
				setPurchases(user.categoryCounts || {});
				setOrders(user.orders || []);
				setLocation(user.location || "");
			}
		};

		fetchUserData();
		window.addEventListener("sessionUpdate", fetchUserData);

		return () => {
			window.removeEventListener("sessionUpdate", fetchUserData);
		};
	}, []);

	const total = Object.values(purchases).reduce((a, b) => a + b, 0);

	// ✅ Use vibrant colors consistently
	const traitsArray = Object.entries(purchases)
		.filter(([name, count]) => count > 0)
		.map(([name, count], i) => ({
			id: i,
			name,
			count,
			color: vibrantColors[i % vibrantColors.length],
			percentage: total > 0 ? ((count / total) * 100).toFixed(1) : 0,
		}));

	const data = {
		labels: traitsArray.map((trait) => trait.name),
		datasets: [
			{
				label: "Purchase Categories",
				data: traitsArray.map((trait) => trait.count),
				backgroundColor: traitsArray.map((trait) => trait.color),
				borderColor: "#fff",
				borderWidth: 2,
			},
		],
	};

		// --- Get trends for selected or user's region ---
		const allRegions = Object.keys(regionalTrends).filter((r) => r !== "Default");
		const region = selectedRegion || (location && regionalTrends[location] ? location : "Default");
		const trends = regionalTrends[region];

		return (
			<div className="profile-dna-container">
				<AvatarCard orders={orders} />
				<div style={{ marginBottom: "1.5rem" }}>
					<h2 style={{ fontWeight: 900, marginBottom: 0 }}>
						Your Profile
					</h2>
					<div style={{ fontWeight: 600, color: "#a259ff", fontSize: "1.1rem" }}>
						Location: {location ? location : "Not set"}
					</div>
				</div>
				   {/* Regional trends section removed. Now only in Trends page. */}
				<h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>Your Purchase DNA</h2>
				<div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
					<div style={{ flex: 1 }}>
						<Pie data={data} />
						<ul style={{ marginTop: "1rem", paddingLeft: "1rem" }}>
							{traitsArray.map((trait) => (
								<li
									key={trait.id}
									style={{
										color: trait.color,
										fontWeight: 600,
										marginBottom: "4px",
									}}>
									{trait.name}: {trait.count} ({trait.percentage}%)
								</li>
							))}
						</ul>
					</div>
					<div style={{ flex: 1 }}>
						<DNAVisualization traits={traitsArray} animated />
						<DNACard traits={traitsArray} />
					</div>
				</div>
				<OrderHistory />
			</div>
		);
};

export default ProfileDNA;
