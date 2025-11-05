import React, { useState } from "react";
import "./ProfileDNA.css";
import "./Trends.css";

const Trends = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

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
    Default: {
      women: ["Trendy tops", "Classic jeans", "Statement bags"],
      men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],
      neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]
    }
  };

  const shoppingInsights = {
    Delhi: {
      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],
      why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],
      shopping_tips: [
        'Buy cotton kurtas now before festive price hike',
        'Wait for Diwali sales for better deals',
        'Stock up on winter wear early to avoid rush',
        'Book tailors now for wedding season',
        'Party wear will be cheaper post New Year'
      ]
    },
    Default: {
      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],
      why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],
      shopping_tips: [
        'Good time for basic wardrobe refresh',
        'T-shirt prices remain stable',
        'Jeans see modest price increases',
        'Sneaker sales before festive season',
        'Accessory prices peak during holidays'
      ]
    }
  };

  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");
  const region = selectedRegion || "Default";
  const trends = regionalTrends[region];
  const insights = shoppingInsights[region] || shoppingInsights.Default;

  return (
    <div className="trends-container">
      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>
        Fashion Trends & Smart Shopping Guide
      </h2>
      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>
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
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.women.map((item, i) => (
                <li key={i} style={{ margin: '4px 0' }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.men.map((item, i) => (
                <li key={i} style={{ margin: '4px 0' }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {trends.neutral.map((item, i) => (
                <li key={i} style={{ margin: '4px 0' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>
          💡 Smart Shopping Insights - When to Buy & Save Money
        </h3>
        <div className="trends-chart-container">
          <div className="chart-title">
            <span className="chart-icon">💰</span>
            Price Alerts for {region === "Default" ? "Your Area" : region}
          </div>
          <div style={{ padding: '16px 0' }}>
            {insights.months.map((month, index) => {
              const priceChange = insights.price_changes[index];
              const isIncrease = priceChange.startsWith('+');
              return (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px', 
                  margin: '8px 0',
                  backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',
                  borderRadius: '8px',
                  border: isIncrease ? '2px solid #fecaca' : '2px solid #bbf7d0'
                }}>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '1rem' }}>{month} 2025</div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>
                      {insights.why[index]}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ 
                      color: isIncrease ? '#dc2626' : '#16a34a', 
                      fontWeight: '700',
                      fontSize: '1.1rem'
                    }}>
                      {priceChange} {isIncrease ? '📈' : '📉'}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>
                      {isIncrease ? 'More Expensive' : 'Good Deals!'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ 
            fontSize: '0.9rem', 
            color: '#a259ff', 
            fontWeight: '600',
            padding: '12px',
            backgroundColor: '#f8f9ff',
            borderRadius: '8px',
            marginTop: '12px'
          }}>
            💡 <strong>Pro Tip:</strong> Shop during green months for best deals!
          </div>
        </div>

        <div className="trends-chart-container" style={{ marginTop: '20px' }}>
          <div className="chart-title">
            <span className="chart-icon">🛍️</span>
            Actionable Shopping Tips
          </div>
          <div style={{ padding: '16px 0' }}>
            {insights.shopping_tips.map((tip, index) => (
              <div key={index} style={{ 
                padding: '12px', 
                margin: '8px 0',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                borderLeft: '4px solid #a259ff'
              }}>
                <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>
                  {insights.months[index]} 2025
                </div>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>
                  💡 {tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
