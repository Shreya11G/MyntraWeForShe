import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Target, Clock, Gift, CheckCircle, Star } from "lucide-react";
import "./DNAQuests.css";



export default function DNAQuests() {
	const navigate = useNavigate();
	// DNA points state
	const [dnaPoints, setDnaPoints] = useState(0);
	const [animatePoints, setAnimatePoints] = useState(false);

		// Generate today's quest episode based on the date
		// Generate a truly unique quest for today based on the date
		function getTodaysQuest() {
			const today = new Date();
			const dateStr = today.toISOString().slice(0, 10);
			// Use the date as a seed for unique quest content
			const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
			// Generate a pseudo-random number from the seed
			function seededRand(seed) {
				let x = Math.sin(seed) * 10000;
				return x - Math.floor(x);
			}
			// Pick a quest type and generate unique content
			const questTypes = ["shopping", "styling", "discovery", "social", "challenge", "trend", "collection", "review"];
			const typeIdx = Math.floor(seededRand(seed) * questTypes.length);
			const type = questTypes[typeIdx];

			// Generate a unique title and description
			const verbs = ["Shop", "Style", "Explore", "Share", "Try", "Review", "Discover", "Create", "Watch", "Like", "Comment on", "Save"];
			const objects = ["a new look", "a trending item", "a collection", "an influencer's post", "a friend's outfit", "a video", "a product", "a style tip", "a new brand", "a seasonal trend"];
			const verb = verbs[Math.floor(seededRand(seed + 1) * verbs.length)];
			const object = objects[Math.floor(seededRand(seed + 2) * objects.length)];
			const title = `${verb} ${object}!`;
			const description = `Today's quest: ${verb.toLowerCase()} ${object} to earn DNA points. (${dateStr})`;

			// Generate a unique requirement and reward
			const max_progress = 1 + Math.floor(seededRand(seed + 3) * 3); // 1-3
			const trait = 2 + Math.floor(seededRand(seed + 4) * 7); // 2-8 DNA points

			return [{
				id: dateStr,
				title,
				description,
				type,
				progress: 0,
				max_progress,
				deadline: dateStr + "T23:59:59",
				active: true,
				target_trait: trait,
				requirements: [{ type, count: max_progress, completed: 0 }],
				reward: { description: `${trait} DNA Points` },
			}];
		}

		// Only show today's quest episode

		const [quests, setQuests] = useState(() => {
			const saved = localStorage.getItem("dna_quests");
			const lastRefresh = localStorage.getItem("dna_quests_last_refresh");
			const today = new Date().toDateString();
			if (!saved || lastRefresh !== today) {
				const todaysQuest = getTodaysQuest();
				localStorage.setItem("dna_quests", JSON.stringify(todaysQuest));
				localStorage.setItem("dna_quests_last_refresh", today);
				return todaysQuest;
			}
			return JSON.parse(saved);
		});

		// On quest update, persist to localStorage
		useEffect(() => {
			localStorage.setItem("dna_quests", JSON.stringify(quests));
		}, [quests]);

		// On mount, check if a new day started and refresh if needed
		useEffect(() => {
			const today = new Date().toDateString();
			const lastRefresh = localStorage.getItem("dna_quests_last_refresh");
			if (lastRefresh !== today) {
				const todaysQuest = getTodaysQuest();
				setQuests(todaysQuest);
				localStorage.setItem("dna_quests", JSON.stringify(todaysQuest));
				localStorage.setItem("dna_quests_last_refresh", today);
			}
		}, []);

	// Calculate total DNA points collected (mock: completed quests)
	useEffect(() => {
		// In a real app, fetch from backend or user profile
		const completed = quests.filter(q => q.progress >= q.max_progress);
		const total = completed.reduce((sum, q) => sum + (q.target_trait || 0), 0);
		setDnaPoints(total);
		if (completed.length > 0) {
			setAnimatePoints(true);
			setTimeout(() => setAnimatePoints(false), 1200);
		}
	}, [quests.map(q => q.progress).join(",")]);

	const getQuestIcon = (type) => {
		switch (type) {
			case "shopping":
				return "🛍️";
			case "social":
				return "👥";
			case "styling":
				return "✨";
			case "discovery":
				return "🔍";
			default:
				return "⭐";
		}
	};

	const getQuestColor = (type) => {
		switch (type) {
			case "shopping":
				return "shopping-gradient";
			case "social":
				return "social-gradient";
			case "styling":
				return "styling-gradient";
			case "discovery":
				return "discovery-gradient";
			default:
				return "default-gradient";
		}
	};

	const timeLeft = (deadline) => {
		const now = new Date().getTime();
		const end = new Date(deadline).getTime();
		const diff = end - now;
		if (diff <= 0) return "Expired";
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		return days > 0 ? `${days}d ${hours}h` : `${hours}h`;
	};

	// ✅ Navigate to Home on "Continue Quest"
	const handleStartQuest = (id) => {
		navigate("/");
	};
	const handleClaimReward = (id) => alert("Claim reward " + id);

		return (
			<div className="dna-quests-container">
				<div className="dna-quests-header">
					<h2>DNA Quests</h2>
					<div className="active-quests">
						<Target className="icon" />
						<span>{quests.filter((q) => q.active).length} active quests</span>
					</div>
				</div>


					{/* DNA Points Bar */}
					<div className={`dna-points-bar${animatePoints ? " dna-points-animate" : ""}`}>
						<Star className="star-points" />
						<span className="dna-points-label">DNA Points Collected:</span>
						<span className="dna-points-value">{dnaPoints}</span>
					</div>

					{/* Weekly Refresh Info */}
					<div style={{
						background: 'linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)',
						borderRadius: '1rem',
						padding: '0.75rem 1.5rem',
						marginBottom: '1.5rem',
						color: '#4b0082',
						fontWeight: 600,
						fontSize: '1.05rem',
						boxShadow: '0 2px 12px #a259ff22',
						textAlign: 'center'
					}}>
						<span role="img" aria-label="refresh">🔄</span> Quests refresh daily! Complete as many as you can each day to maximize your DNA Points.
					</div>

				<div className="quests-grid">
					{quests.map((quest) => {
						const progressPercentage =
							(quest.progress / quest.max_progress) * 100;
						const isCompleted = quest.progress >= quest.max_progress;
						const isExpired = new Date(quest.deadline) < new Date();

						return (
							<div
								key={quest.id}
								className={`quest-card ${
									isCompleted ? "completed" : isExpired ? "expired" : ""
								}`}>
								<div className="quest-top">
									<div className="quest-info">
										<div className={`quest-icon ${getQuestColor(quest.type)}`}>
											{getQuestIcon(quest.type)}
										</div>
										<div>
											<h3>{quest.title}</h3>
											<p>{quest.description}</p>
											<div className="quest-meta">
												<span>
													<Clock className="small-icon" />{" "}
													{timeLeft(quest.deadline)}
												</span>
												<span>
													<Star className="small-icon" /> +{quest.target_trait}{" "}
													DNA
												</span>
											</div>
										</div>
									</div>
									{isCompleted && <CheckCircle className="check-icon" />}
								</div>

								<div className="quest-progress">
									<div className="progress-label">
										<span>Progress</span>
										<span>
											{quest.progress}/{quest.max_progress}
										</span>
									</div>
									<div className="progress-bar">
										<div
											className={`progress-fill ${getQuestColor(quest.type)}`}
											style={{
												width: `${Math.min(progressPercentage, 100)}%`,
											}}></div>
									</div>
								</div>

								<div className="quest-actions">
									{isCompleted ? (
										<button
											onClick={() => handleClaimReward(quest.id)}
											className="claim-btn">
											Claim Reward
										</button>
									) : isExpired ? (
										<span className="expired-label">Expired</span>
									) : (
										<button
											onClick={() => handleStartQuest(quest.id)}
											className="start-btn">
											Continue Quest
										</button>
									)}
								</div>
							</div>
						);
					})}
				   </div>
			   </div>
		   );
	}

