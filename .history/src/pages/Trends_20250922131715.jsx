import React, { useState } from "react";
import "./ProfileDNA.css";

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

const Trends = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const allRegions = Object.keys(regionalTrends).filter((r) => r !== "Default");
  const region = selectedRegion || "Default";
  const trends = regionalTrends[region];

  return (
    <div className="profile-dna-container">
      <h2 style={{ fontWeight: 900, marginBottom: "1.5rem" }}>Regional Fashion Trends</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <select
          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}
          value={selectedRegion}
          onChange={e => setSelectedRegion(e.target.value)}
        >
          <option value="">Select a region...</option>
          {allRegions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {selectedRegion && (
          <button style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }} onClick={() => setSelectedRegion("")}>Reset</button>
        )}
      </div>
      <div className="dna-card">
        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>
          {region} Region Trendiest Fashion
        </h3>
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff" }}>Women:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.women.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff" }}>Men:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.men.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff" }}>Neutral:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.neutral.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
