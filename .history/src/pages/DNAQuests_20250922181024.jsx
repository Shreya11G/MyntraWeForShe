export default function DNAQuests() {
	const navigate = useNavigate();
	// DNA points state
	const [dnaPoints, setDnaPoints] = useState(0);
	const [animatePoints, setAnimatePoints] = useState(false);

	// Sample quests
	const quests = [
		{
			id: "1",
			title: "Shop 5 Items",
			description: "Buy items to earn DNA points",
			type: "shopping",
			progress: 2,
			max_progress: 5,
			deadline: "2025-09-20T23:59:59",
			active: true,
			target_trait: 10,
			requirements: [{ type: "buy_items", count: 5, completed: 2 }],
			reward: { description: "5 DNA Points" },
		},
		{
			id: "3",
			title: "Create 2 Outfits",
			description: "Show off your styling skills",
			type: "styling",
			progress: 0,
			max_progress: 2,
			deadline: "2025-09-25T23:59:59",
			active: true,
			target_trait: 8,
			requirements: [{ type: "create_outfits", count: 2, completed: 0 }],
			reward: { description: "4 DNA Points" },
		},
		{
			id: "4",
			title: "Explore New Collections",
			description: "Discover latest fashion collections",
			type: "discovery",
			progress: 1,
			max_progress: 3,
			deadline: "2025-09-22T23:59:59",
			active: true,
			target_trait: 6,
			requirements: [{ type: "view_collections", count: 3, completed: 1 }],
			reward: { description: "2 DNA Points" },
		},
		{
			id: "5",
			title: "Complete Profile",
			description: "Fill in your style preferences",
			type: "social",
			progress: 0,
			max_progress: 1,
			deadline: "2025-09-30T23:59:59",
			active: true,
			target_trait: 5,
			requirements: [{ type: "complete_profile", count: 1, completed: 0 }],
			reward: { description: "5 DNA Points" },
		},
	];

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

