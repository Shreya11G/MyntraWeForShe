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
          <h3>Myntra Fashion DNA</h3>
          
          <div className="dna-main-display">
            <div className="dna-helix">
              <svg width="80" height="120" viewBox="0 0 80 120" className="helix-svg">
                <defs>
                  <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a259ff" />
                    <stop offset="50%" stopColor="#ff69b4" />
                    <stop offset="100%" stopColor="#00d4ff" />
                  </linearGradient>
                </defs>
                {/* DNA Helix Strands */}
                <path d="M20 10 Q40 30 20 50 Q40 70 20 90 Q40 110 20 130" 
                      stroke="url(#helixGradient)" strokeWidth="3" fill="none" className="helix-strand"/>
                <path d="M60 10 Q40 30 60 50 Q40 70 60 90 Q40 110 60 130" 
                      stroke="url(#helixGradient)" strokeWidth="3" fill="none" className="helix-strand"/>
                {/* DNA Base Pairs */}
                <line x1="20" y1="20" x2="60" y2="20" stroke="#ff69b4" strokeWidth="2" className="base-pair"/>
                <line x1="30" y1="30" x2="50" y2="30" stroke="#a259ff" strokeWidth="2" className="base-pair"/>
                <line x1="20" y1="40" x2="60" y2="40" stroke="#00d4ff" strokeWidth="2" className="base-pair"/>
                <line x1="30" y1="50" x2="50" y2="50" stroke="#ff69b4" strokeWidth="2" className="base-pair"/>
                <line x1="20" y1="60" x2="60" y2="60" stroke="#a259ff" strokeWidth="2" className="base-pair"/>
                <line x1="30" y1="70" x2="50" y2="70" stroke="#00d4ff" strokeWidth="2" className="base-pair"/>
                <line x1="20" y1="80" x2="60" y2="80" stroke="#ff69b4" strokeWidth="2" className="base-pair"/>
                <line x1="30" y1="90" x2="50" y2="90" stroke="#a259ff" strokeWidth="2" className="base-pair"/>
                <line x1="20" y1="100" x2="60" y2="100" stroke="#00d4ff" strokeWidth="2" className="base-pair"/>
              </svg>
            </div>
            
            <div className="dna-summary">
              <div className="myntra-dna-text">
                <span className="dna-label">MYNTRA DNA:</span>
                <div className="dna-breakdown">
                  {Object.entries(influencer.fashionDNA)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 3)
                    .map(([category, score], index) => (
                      <span key={category} className="dna-segment">
                        {score}% {category.charAt(0).toUpperCase() + category.slice(1)}
                        {index < 2 && " • "}
                      </span>
                    ))
                  }
                </div>
              </div>
              <div className="dna-points">
                <div className="dna-points-bar">
                  <div className="dna-points-fill" style={{ width: `${Math.min(100, (influencer.dnaPoints / 1000) * 100)}%` }}></div>
                  <span className="dna-points-text">{influencer.dnaPoints} DNA Points</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dna-categories">
            <h4>Complete DNA Breakdown</h4>
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