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

  // Historical Fashion Trend Data with Bar Graph Values
  const trendHistory = {
    Delhi: {
      months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      aesthetics: {
        'Boho': [65, 70, 80, 85, 75, 65],
        'Streetwear': [70, 65, 45, 40, 55, 70],
        'Minimalist': [55, 60, 65, 60, 65, 70],
        'Ethnic': [40, 45, 50, 45, 70, 85],
        'Y2K': [30, 35, 40, 45, 50, 55]
      }
    },
    Mumbai: {
      months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      aesthetics: {
        'Boho': [70, 75, 85, 90, 80, 70],
        'Streetwear': [60, 55, 35, 30, 45, 60],
        'Coastal': [80, 85, 90, 85, 70, 65],
        'Vintage': [45, 50, 60, 65, 55, 50],
        'Athleisure': [65, 70, 75, 70, 75, 80]
      }
    },
    Default: {
      months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      aesthetics: {
        'Boho': [60, 65, 75, 80, 70, 60],
        'Streetwear': [65, 60, 40, 35, 50, 65],
        'Minimalist': [55, 60, 65, 60, 65, 70],
        'Casual': [70, 75, 80, 75, 80, 85],
        'Smart Casual': [50, 55, 60, 55, 65, 75]
      }
    }
  };

  // Future Predictions Data
  const futureTrends = {
    Delhi: [
      {
        month: 'Oct 2025',
        predictions: [
          { aesthetic: 'Ethnic Fusion', trend: 'up', percentage: 95, reason: 'Festive season + wedding season peak' },
          { aesthetic: 'Layered Looks', trend: 'up', percentage: 80, reason: 'Weather getting cooler' },
          { aesthetic: 'Boho', trend: 'down', percentage: 45, reason: 'Season shift from summer vibes' },
          { aesthetic: 'Streetwear', trend: 'up', percentage: 75, reason: 'Back to college/office fashion' }
        ]
      },
      {
        month: 'Nov 2025',
        predictions: [
          { aesthetic: 'Winter Layers', trend: 'up', percentage: 90, reason: 'Cold weather demands' },
          { aesthetic: 'Wedding Wear', trend: 'up', percentage: 98, reason: 'Peak wedding season' },
          { aesthetic: 'Minimalist', trend: 'steady', percentage: 65, reason: 'Timeless appeal continues' },
          { aesthetic: 'Y2K', trend: 'up', percentage: 70, reason: 'Gen Z driving retro revival' }
        ]
      }
    ],
    Mumbai: {
      months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      predictions: [
        { aesthetic: 'Coastal Chic', trend: 'steady', percentage: 70, reason: 'Year-round coastal lifestyle' },
        { aesthetic: 'Boho', trend: 'down', percentage: 50, reason: 'Moving away from peak summer trend' },
        { aesthetic: 'Smart Casual', trend: 'up', percentage: 85, reason: 'Corporate return + festive prep' }
      ]
    },
    Default: {
      months: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      predictions: [
        { aesthetic: 'Autumn Layers', trend: 'up', percentage: 80, reason: 'Seasonal transition fashion' },
        { aesthetic: 'Earthy Tones', trend: 'up', percentage: 75, reason: 'Fall color palette trending' },
        { aesthetic: 'Cozy Casual', trend: 'up', percentage: 85, reason: 'Comfort meets style demand' }
      ]
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
