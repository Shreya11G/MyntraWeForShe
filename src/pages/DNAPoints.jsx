import React, { useEffect, useState } from "react";
import "./DNAPoints.css";

export default function DNAPoints({ showLabel = true }) {
	const [dnaPoints, setDnaPoints] = useState(
		() => parseInt(localStorage.getItem("dnaPoints")) || 0
	);

	// Listen to updates from other components
	useEffect(() => {
		const updatePoints = () => {
			setDnaPoints(parseInt(localStorage.getItem("dnaPoints")) || 0);
		};
		window.addEventListener("sessionUpdate", updatePoints);
		return () => window.removeEventListener("sessionUpdate", updatePoints);
	}, []);

	return (
		<div className="dna-points-widget">
			<span className="dna-icon">⭐</span>
			{showLabel && <span className="dna-label">DNA Points:</span>}
			<strong className="dna-value">{dnaPoints}</strong>
		</div>
	);
}