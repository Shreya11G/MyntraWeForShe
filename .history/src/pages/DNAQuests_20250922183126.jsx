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
		// Generate 5 unique, brand new quests for the current week
		function getWeeklyQuests() {
			const today = new Date();
			// Get ISO week number
			const getWeekNumber = (d) => {
				d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
				const dayNum = d.getUTCDay() || 7;
				d.setUTCDate(d.getUTCDate() + 4 - dayNum);
				const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
				return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
			};
			const week = getWeekNumber(today);
			const year = today.getFullYear();
			// Use week+year as seed
			function seededRand(seed) {
				let x = Math.sin(seed) * 10000;
				return x - Math.floor(x);
			}
			// Quest content pools
			const questTypes = ["shopping", "styling", "discovery", "social", "challenge", "trend", "collection", "review"];
			const verbs = ["Shop", "Style", "Explore", "Share", "Try", "Review", "Discover", "Create", "Watch", "Like", "Comment on", "Save"];
			const objects = ["a new look", "a trending item", "a collection", "an influencer's post", "a friend's outfit", "a video", "a product", "a style tip", "a new brand", "a seasonal trend", "a new designer"];
			const quests = [];
			for (let i = 0; i < 5; i++) {
				const questSeed = year * 10000 + week * 100 + i;
				const type = questTypes[Math.floor(seededRand(questSeed) * questTypes.length)];
				const verb = verbs[Math.floor(seededRand(questSeed + 1) * verbs.length)];
				const object = objects[Math.floor(seededRand(questSeed + 2) * objects.length)];
				const title = `${verb} ${object}!`;
				const description = `This week's quest: ${verb.toLowerCase()} ${object} to earn DNA points. (Week ${week}, ${year})`;
				const max_progress = 1 + Math.floor(seededRand(questSeed + 3) * 3); // 1-3
				const trait = 2 + Math.floor(seededRand(questSeed + 4) * 7); // 2-8 DNA points
				// Deadline is end of this week (Sunday)
				const sunday = new Date(today);
				sunday.setDate(today.getDate() + (7 - today.getDay()));
				const deadline = sunday.toISOString().slice(0, 10) + "T23:59:59";
				quests.push({
					id: `${year}-W${week}-Q${i+1}`,
					title,
					description,
					type,
					progress: 0,
					max_progress,
					deadline,
					active: true,
					target_trait: trait,
					requirements: [{ type, count: max_progress, completed: 0 }],
					reward: { description: `${trait} DNA Points` },
				});
			}
			return quests;
		}

		// Only show today's quest episode

		const [quests, setQuests] = useState(() => {
			const saved = localStorage.getItem("dna_quests");
			const lastRefresh = localStorage.getItem("dna_quests_last_refresh");
			// Use week/year as refresh key
			const today = new Date();
			const week = (function getWeekNumber(d) {
				d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
				const dayNum = d.getUTCDay() || 7;
				d.setUTCDate(d.getUTCDate() + 4 - dayNum);
				const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
				return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
			})(today);
			const year = today.getFullYear();
			const refreshKey = `${year}-W${week}`;
			if (!saved || lastRefresh !== refreshKey) {
				const weeklyQuests = getWeeklyQuests();
				localStorage.setItem("dna_quests", JSON.stringify(weeklyQuests));
				localStorage.setItem("dna_quests_last_refresh", refreshKey);
				return weeklyQuests;
			}
			return JSON.parse(saved);
		});

		// On quest update, persist to localStorage
		useEffect(() => {
			localStorage.setItem("dna_quests", JSON.stringify(quests));
		}, [quests]);

		// On mount, check if a new week started and refresh if needed
		useEffect(() => {
			const today = new Date();
			const week = (function getWeekNumber(d) {
				d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
				const dayNum = d.getUTCDay() || 7;
				d.setUTCDate(d.getUTCDate() + 4 - dayNum);
				const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
				return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
			})(today);
			const year = today.getFullYear();
			const refreshKey = `${year}-W${week}`;
			const lastRefresh = localStorage.getItem("dna_quests_last_refresh");
			if (lastRefresh !== refreshKey) {
				const weeklyQuests = getWeeklyQuests();
				setQuests(weeklyQuests);
				localStorage.setItem("dna_quests", JSON.stringify(weeklyQuests));
				localStorage.setItem("dna_quests_last_refresh", refreshKey);
			}
		}, []);

	// Calculate total DNA points collected (mock: completed quests)
	useEffect(() => {
		// In a real app, fetch from backend or user profile
		const completed = quests.filter(q => q.progress >= q.max_progress);
		let total = completed.reduce((sum, q) => sum + (q.target_trait || 0), 0);
		let bonus = 0;
		let allCompleted = quests.length > 0 && completed.length === quests.length;
		if (allCompleted) {
			bonus = 10; // Award 10 bonus DNA points for completing all quests
		}
		setDnaPoints(total + bonus);
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
				{/* Bonus message */}
				{quests.length > 0 && quests.every(q => q.progress >= q.max_progress) && (
					<div style={{
						background: 'linear-gradient(90deg, #f9d423 0%, #ff4e50 100%)',
						borderRadius: '1rem',
						padding: '0.75rem 1.5rem',
						marginBottom: '1.5rem',
						color: '#fff',
						fontWeight: 700,
						fontSize: '1.1rem',
						boxShadow: '0 2px 12px #ff4e5022',
						textAlign: 'center'
					}}>
						🎉 All weekly quests completed! Bonus +10 DNA Points!
					</div>
				)}

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
						<span role="img" aria-label="refresh">🔄</span> 5 new quests every week! Complete as many as you can before next Monday to maximize your DNA Points.
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

