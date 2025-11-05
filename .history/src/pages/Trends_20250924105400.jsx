import React, { useState } from "react";
import "./ProfileDNA.css";
import "./Trends.css";

const Trends = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

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
    Default: {
      women: ["Trendy tops", "Comfortable jeans", "Stylish dresses"],
      men: ["Casual shirts", "Comfortable pants", "Sneakers"],
      neutral: ["Sunglasses", "Bags", "Watches"]
    }
  };

  const trendHistory = {
    Default: {
      months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      aesthetics: {
        "Boho": [60, 65, 75, 85, 70, 60],
        "Streetwear": [65, 60, 40, 35, 50, 65],
        "Minimalist": [55, 60, 65, 60, 65, 70],
        "Casual": [70, 75, 80, 75, 80, 85]
      }
    }
  };

  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");
  const region = selectedRegion || "Default";
  const trends = regionalTrends[region];
  const historyData = trendHistory.Default;

  const renderTrendBarChart = () => (
    <div className="trends-chart-container">
      <div className="chart-title">
        <span className="chart-icon">📊</span>
        Fashion Trend History - Last 6 Months
      </div>
      <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>
        See how different aesthetics performed over time
      </p>
      
      <div style={{ padding: "20px 0" }}>
        {Object.entries(historyData.aesthetics).map(([aesthetic, values]) => {
          const currentValue = values[values.length - 1];
          const previousValue = values[values.length - 2];
          const isRising = currentValue > previousValue;
          const maxValue = Math.max(...Object.values(historyData.aesthetics).flat());
          
          return (
            <div key={aesthetic} style={{ marginBottom: "20px" }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                marginBottom: "8px"
              }}>
                <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>
                  {aesthetic}
                </span>
                <span style={{ 
                  fontSize: "0.85rem",
                  color: isRising ? "#16a34a" : "#dc2626",
                  fontWeight: "600"
                }}>
                  {currentValue}% {isRising ? "📈" : "📉"}
                </span>
              </div>
              
              <div style={{ 
                width: "100%", 
                height: "8px", 
                backgroundColor: "#f1f5f9",
                borderRadius: "4px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: `${(currentValue / maxValue) * 100}%`,
                  height: "100%",
                  backgroundColor: isRising ? "#16a34a" : "#a259ff",
                  borderRadius: "4px",
                  transition: "width 0.3s ease"
                }} />
              </div>
              
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "#64748b",
                marginTop: "4px"
              }}>
                {historyData.months.map((month, index) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{
        padding: "12px",
        backgroundColor: "#fef3c7",
        borderRadius: "8px",
        borderLeft: "4px solid #f59e0b"
      }}>
        <strong>Key Insight:</strong> In July, Boho aesthetic peaked at 85% while Streetwear dropped to just 35% - 
        showing the strong seasonal preference for flowy, summer-friendly styles over urban looks.
      </div>
    </div>
  );

  return (
    <div className="trends-container">
      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>
        Fashion Trends & Smart Shopping Guide
      </h2>
      <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1rem" }}>
        See what's trending now and get actionable shopping tips to save money
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
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}> For Men:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.men.map((item, i) => (
                <li key={i} style={{ margin: "4px 0" }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}> For Everyone:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.neutral.map((item, i) => (
                <li key={i} style={{ margin: "4px 0" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontWeight: 700, marginBottom: "1rem", color: "#333" }}>
           Trend Analytics - July Boho vs Streetwear
        </h3>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Data-driven insights showing how fashion aesthetics perform over time
        </p>
        
        {renderTrendBarChart()}
      </div>
    </div>
  );
};

export default Trends;
