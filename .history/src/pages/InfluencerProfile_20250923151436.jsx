import React from "react";
import "./InfluencerProfile.css";

const InfluencerProfile = ({ influencer, onClose }) => {
  if (!influencer) return null;

  return (
    <div className="influencer-profile-overlay" onClick={onClose}>
      <div className="influencer-profile-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="influencer-header">
          <img src={influencer.avatar} alt={influencer.username} className="influencer-avatar-large" />
          <div className="influencer-info">
            <h2>{influencer.username}</h2>
            <p className="influencer-bio">{influencer.bio}</p>
            <div className="influencer-stats">
              <div className="stat">
                <span className="stat-number">{influencer.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-number">{influencer.posts}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-number">{influencer.likes}</span>
                <span className="stat-label">Total Likes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="influencer-dna">
          <h3>Fashion DNA</h3>
          <div className="dna-points">
            <div className="dna-points-bar">
              <div className="dna-points-fill" style={{ width: `${Math.min(100, (influencer.dnaPoints / 1000) * 100)}%` }}></div>
              <span className="dna-points-text">{influencer.dnaPoints} DNA Points</span>
            </div>
          </div>
          
          <div className="dna-categories">
            {Object.entries(influencer.fashionDNA).map(([category, score]) => (
              <div key={category} className="dna-category">
                <span className="category-name">{category}</span>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: `${score}%` }}></div>
                  <span className="category-score">{score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="influencer-dashboard">
          <h3>Dashboard</h3>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h4>Engagement Rate</h4>
              <span className="dashboard-metric">{influencer.engagement}%</span>
            </div>
            <div className="dashboard-card">
              <h4>Top Category</h4>
              <span className="dashboard-metric">{influencer.topCategory}</span>
            </div>
            <div className="dashboard-card">
              <h4>Avg. Likes/Post</h4>
              <span className="dashboard-metric">{influencer.avgLikes}</span>
            </div>
            <div className="dashboard-card">
              <h4>Fashion Level</h4>
              <span className="dashboard-metric">{influencer.fashionLevel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;