import React, { useState } from "react";
import "./ProfileDNA.css";
import "./Trends.css";

const Trends = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  // Regional trends data for 7 cities plus default
  const regionalTrends = {
    Delhi: {
      women: ["Kurta with palazzo", "Anarkali suits", "Ethnic fusion wear"],
      men: ["Kurta with jeans", "Nehru jackets", "Ethnic shirts"],
      neutral: ["Juttis", "Silver accessories", "Handloom bags"]
    },
    Mumbai: {
      women: ["Flowy maxi dresses", "Crop tops with palazzos", "Boho-chic outfits"],
      men: ["Linen shirts", "Casual blazers", "Polo shirts"],
      neutral: ["Beach accessories", "Sunglasses", "Canvas bags"]
    },
    Bangalore: {
      women: ["Tech-casual wear", "Layered outfits", "Comfortable sneakers"],
      men: ["Smart casual shirts", "Chinos", "Light jackets"],
      neutral: ["Laptop bags", "Weather jackets", "Versatile accessories"]
    },
    Chennai: {
      women: ["Cotton sarees", "Light kurtas", "Breathable fabrics"],
      men: ["Linen shirts", "Cotton pants", "Comfortable sandals"],
      neutral: ["Sun protection", "Light scarves", "Breathable footwear"]
    },
    Kolkata: {
      women: ["Traditional handloom", "Ethnic jewelry", "Cotton sarees"],
      men: ["Kurta-pajama", "Handloom shirts", "Traditional accessories"],
      neutral: ["Handcrafted bags", "Ethnic accessories", "Cultural wear"]
    },
    Pune: {
      women: ["Student casual", "Affordable fashion", "Mix-match styles"],
      men: ["Campus wear", "Budget-friendly basics", "Casual sneakers"],
      neutral: ["Backpacks", "Casual accessories", "Student essentials"]
    },
    Hyderabad: {
      women: ["IT professional wear", "Modest fashion", "Tech-friendly styles"],
      men: ["Corporate casual", "Comfortable formals", "Tech accessories"],
      neutral: ["Professional bags", "Work essentials", "Office-appropriate wear"]
    },
    Default: {
      women: ["Trendy tops", "Comfortable jeans", "Stylish dresses"],
      men: ["Casual shirts", "Comfortable pants", "Sneakers"],
      neutral: ["Sunglasses", "Bags", "Watches"]
    }
  };

  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");
  const region = selectedRegion || "Default";
  const trends = regionalTrends[region];

  return (
    <div className="trends-container">
      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>
        Fashion Trends & Smart Shopping Guide
      </h2>
      <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1rem" }}>
        See what's trending now across different Indian cities
      </p>
      
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <label style={{ fontWeight: 600 }}>Choose your city:</label>
        <select
          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}
          value={selectedRegion}
          onChange={e => setSelectedRegion(e.target.value)}
        >
          <option value="">All Cities (General Trends)</option>
          {allRegions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      
      <div className="dna-card">
        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>
          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}
        </h3>
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: "16px" }}>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👗 For Women:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.women.map((item, i) => (
                <li key={i} style={{ margin: "4px 0" }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👔 For Men:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.men.map((item, i) => (
                <li key={i} style={{ margin: "4px 0" }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👫 For Everyone:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.neutral.map((item, i) => (
                <li key={i} style={{ margin: "4px 0" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;