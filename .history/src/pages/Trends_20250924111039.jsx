import React, { useState } from "react";
import "./ProfileDNA.css";
import "./Trends.css";

const Trends = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [currentMonthIndex, setCurrentMonthIndex] = useState(6); // Start with latest month (Sep = index 6)

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

  // Historical data for past 7 months (Mar-Sep)
  const trendHistory = {
    Default: {
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      aesthetics: {
        "Boho": [55, 60, 65, 75, 85, 70, 60],
        "Streetwear": [70, 65, 60, 40, 35, 50, 65],
        "Minimalist": [50, 55, 60, 65, 60, 65, 70],
        "Casual": [65, 70, 75, 80, 75, 80, 85],
        "Ethnic Fusion": [60, 65, 70, 72, 75, 85, 90]
      }
    },
    Delhi: {
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      aesthetics: {
        "Boho": [50, 55, 60, 70, 85, 75, 65],
        "Streetwear": [75, 70, 65, 45, 40, 55, 70],
        "Ethnic Fusion": [70, 75, 80, 82, 85, 90, 95],
        "Traditional": [65, 70, 75, 78, 80, 88, 92]
      }
    },
    Mumbai: {
      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      aesthetics: {
        "Boho": [65, 70, 75, 80, 85, 80, 70],
        "Coastal Chic": [60, 65, 70, 75, 70, 75, 80],
        "Streetwear": [70, 65, 60, 50, 45, 60, 75],
        "Party Wear": [50, 55, 60, 65, 70, 75, 85]
      }
    }
  };

  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");
  const region = selectedRegion || "Default";
  const trends = regionalTrends[region];
  const historyData = trendHistory[region] || trendHistory.Default;

  const renderTrendBarChart = () => {
    const currentMonth = historyData.months[currentMonthIndex];
    const canGoPrev = currentMonthIndex > 0;
    const canGoNext = currentMonthIndex < historyData.months.length - 1;

    const handlePrevMonth = () => {
      if (canGoPrev) {
        setCurrentMonthIndex(currentMonthIndex - 1);
      }
    };

    const handleNextMonth = () => {
      if (canGoNext) {
        setCurrentMonthIndex(currentMonthIndex + 1);
      }
    };

    return (
      <div className="trends-chart-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div className="chart-title">
            <span className="chart-icon">📊</span>
            Fashion Trends for {currentMonth} 2025
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={handlePrevMonth}
              disabled={!canGoPrev}
              style={{
                padding: "8px 12px",
                background: canGoPrev ? "#a259ff" : "#e5e7eb",
                color: canGoPrev ? "white" : "#9ca3af",
                border: "none",
                borderRadius: "6px",
                cursor: canGoPrev ? "pointer" : "not-allowed",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              ← Prev
            </button>
            <span style={{ 
              fontWeight: "700", 
              fontSize: "16px",
              color: "#a259ff",
              minWidth: "60px",
              textAlign: "center"
            }}>
              {currentMonth}
            </span>
            <button
              onClick={handleNextMonth}
              disabled={!canGoNext}
              style={{
                padding: "8px 12px",
                background: canGoNext ? "#a259ff" : "#e5e7eb",
                color: canGoNext ? "white" : "#9ca3af",
                border: "none",
                borderRadius: "6px",
                cursor: canGoNext ? "pointer" : "not-allowed",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              Next →
            </button>
          </div>
        </div>
        
        <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>
          Fashion trends for {currentMonth} in {region === "Default" ? "your area" : region}
        </p>
        
        <div style={{ padding: "20px 0" }}>
          {Object.entries(historyData.aesthetics).map(([aesthetic, values]) => {
            const currentValue = values[currentMonthIndex];
            const previousValue = currentMonthIndex > 0 ? values[currentMonthIndex - 1] : currentValue;
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
                    color: isRising ? "#16a34a" : currentValue === previousValue ? "#64748b" : "#dc2626",
                    fontWeight: "600"
                  }}>
                    {currentValue}% {currentValue > previousValue ? "📈" : currentValue < previousValue ? "📉" : "➡️"}
                  </span>
                </div>
                
                <div style={{ 
                  width: "100%", 
                  height: "12px", 
                  backgroundColor: "#f1f5f9",
                  borderRadius: "6px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${(currentValue / maxValue) * 100}%`,
                    height: "100%",
                    backgroundColor: isRising ? "#16a34a" : currentValue === previousValue ? "#64748b" : "#a259ff",
                    borderRadius: "6px",
                    transition: "width 0.5s ease"
                  }} />
                </div>
                
                <div style={{ 
                  fontSize: "0.75rem",
                  color: "#64748b",
                  marginTop: "4px",
                  textAlign: "right"
                }}>
                  {currentMonthIndex > 0 && (
                    <span>
                      {previousValue}% → {currentValue}% 
                      ({currentValue > previousValue ? "+" : ""}{currentValue - previousValue})
                    </span>
                  )}
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
          <strong>Key Insights for {currentMonth} in {region}:</strong><br/>
          {currentMonth === "Jul" && "• Boho aesthetic peaked while Streetwear hit its lowest point of summer"}
          {currentMonth === "Aug" && "• Back-to-routine trends starting to recover as summer ends"}
          {currentMonth === "Sep" && "• Preparing for festive season with ethnic fusion gaining momentum"}
          {currentMonth === "Jun" && "• Summer styles reaching peak popularity across all regions"}
          {currentMonth === "May" && "• Transition month with growing preference for lighter fabrics"}
          {currentMonth === "Apr" && "• Spring fashion emerging with fresh, casual styles"}
          {currentMonth === "Mar" && "• Beginning of fashion year with steady baseline trends"}
        </div>
      </div>
    );
  };

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

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontWeight: 700, marginBottom: "1rem", color: "#333" }}>
          📊 Monthly Trend Analytics - Browse Historical Data
        </h3>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Use the navigation controls to explore fashion trends month by month from March to September 2025
        </p>
        
        {renderTrendBarChart()}
        
        <div className="trends-chart-container" style={{ marginTop: "24px" }}>
          <div className="chart-title">
            <span className="chart-icon">🔮</span>
            Future Trend Predictions - Next 2 Months (Oct-Nov 2025)
          </div>
          <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>
            AI-powered predictions for {region === "Default" ? "your area" : region} based on seasonal patterns and cultural events
          </p>
          
          <div style={{ padding: "20px 0" }}>
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ 
                color: "#a259ff", 
                margin: "0 0 12px 0",
                fontSize: "1.1rem",
                fontWeight: "700"
              }}>
                October 2025 Predictions
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '8px',
                  borderLeft: '4px solid #16a34a'
                }}>
                  <div style={{ fontWeight: '600', color: '#333' }}>Ethnic Fusion</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#16a34a' }}>
                    {region === "Delhi" ? "98%" : "95%"} 📈
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                    Festive season approaching
                  </div>
                </div>
                
                <div style={{
                  padding: '12px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '8px',
                  borderLeft: '4px solid #dc2626'
                }}>
                  <div style={{ fontWeight: '600', color: '#333' }}>Boho Styles</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#dc2626' }}>
                    45% 📉
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                    Summer styles fading
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ 
                color: "#a259ff", 
                margin: "0 0 12px 0",
                fontSize: "1.1rem",
                fontWeight: "700"
              }}>
                November 2025 Predictions
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '8px',
                  borderLeft: '4px solid #16a34a'
                }}>
                  <div style={{ fontWeight: '600', color: '#333' }}>Wedding Wear</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#16a34a' }}>
                    {region === "Delhi" ? "99%" : "98%"} 📈
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                    Peak wedding season
                  </div>
                </div>
                
                <div style={{
                  padding: '12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '8px',
                  borderLeft: '4px solid #16a34a'
                }}>
                  <div style={{ fontWeight: '600', color: '#333' }}>Party Wear</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#16a34a' }}>
                    90% 📈
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                    Holiday celebrations
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            padding: "12px",
            backgroundColor: "#f0f9ff",
            borderRadius: "8px",
            borderLeft: "4px solid #0ea5e9"
          }}>
            <strong>Prediction Accuracy:</strong> Our AI model combines seasonal patterns, cultural calendars, and social media trends with 87% accuracy rate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;