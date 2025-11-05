import React, { useState, useEffect } from "react";
import "./ProfileDNA.css";
import "./Trends.css";

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
  Kolkata: {
    women: ["Cotton sarees", "Jute bags", "Ballet flats"],
    men: ["Kurta pajamas", "Canvas shoes", "Printed shirts"],
    neutral: ["Handmade jewelry", "Ethnic scarves", "Eco-friendly totes"]
  },
  Hyderabad: {
    women: ["Embroidered kurtis", "Palazzo pants", "Mirror work dupattas"],
    men: ["Denim shirts", "Kolhapuri chappals", "Cargo pants"],
    neutral: ["Printed stoles", "Unisex sandals", "Cotton backpacks"]
  },
  Chennai: {
    women: ["Silk sarees", "Temple jewelry", "Cotton salwars"],
    men: ["Lungi", "Cotton shirts", "Leather sandals"],
    neutral: ["Canvas bags", "Minimalist watches", "Sun hats"]
  },
  Pune: {
    women: ["Boho skirts", "Crop tops", "Sneakers"],
    men: ["Polo tees", "Slim jeans", "Slip-ons"],
    neutral: ["Denim jackets", "Unisex caps", "Messenger bags"]
  },
  Jaipur: {
    women: ["Leheriya dupattas", "Mirror work tops", "Juttis"],
    men: ["Bandhgala jackets", "Mojaris", "Printed kurtas"],
    neutral: ["Block print scarves", "Ethnic vests", "Colorful turbans"]
  },
  Default: {
    women: ["Trendy tops", "Classic jeans", "Statement bags"],
    men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],
    neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]
  }
};

// Monthly fashion trend data for charts
const monthlyTrends = {
  Delhi: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [75, 85, 95, 88, 92],
    categories: ['Ethnic Wear', 'Winter Jackets', 'Festive Outfits', 'Denim', 'Accessories']
  },
  Mumbai: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [82, 78, 85, 90, 88],
    categories: ['Beach Wear', 'Casual Shirts', 'Party Dresses', 'Sneakers', 'Sunglasses']
  },
  Bangalore: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [70, 75, 82, 95, 85],
    categories: ['Tech Wear', 'Hoodies', 'Jeans', 'Boots', 'Backpacks']
  },
  Kolkata: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [68, 72, 88, 92, 85],
    categories: ['Cotton Sarees', 'Kurtas', 'Festive Wear', 'Handloom', 'Jute Bags']
  },
  Hyderabad: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [73, 78, 90, 85, 88],
    categories: ['Silk Wear', 'Palazzo Sets', 'Mirror Work', 'Kolhapuris', 'Dupattas']
  },
  Chennai: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [78, 82, 92, 88, 90],
    categories: ['Silk Sarees', 'Temple Jewelry', 'Cotton Wear', 'Traditional', 'Gold Accessories']
  },
  Default: {
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [75, 80, 85, 88, 85],
    categories: ['Casual Wear', 'Jeans', 'T-shirts', 'Sneakers', 'Accessories']
  }
};

// Future trend predictions
const futurePredictions = {
  Delhi: [
    {
      month: "October 2025",
      trend: "🪔 Festive Ethnic Surge",
      reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",
      confidence: "high",
      categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]
    },
    {
      month: "November 2025", 
      trend: "🧥 Winter Layer Boom",
      reason: "Temperature drop increasing demand for jackets, sweaters, and boots",
      confidence: "high",
      categories: ["Leather Jackets", "Woolen Sweaters", "Boots", "Mufflers", "Thermals"]
    },
    {
      month: "December 2025",
      trend: "🎉 Party & Travel Wear",
      reason: "Holiday season and year-end celebrations driving party wear demand",
      confidence: "medium",
      categories: ["Party Dresses", "Blazers", "Travel Bags", "Statement Jewelry", "Heels"]
    }
  ],
  Mumbai: [
    {
      month: "October 2025",
      trend: "🌊 Monsoon-to-Winter Transition",
      reason: "Shift from monsoon wear to light winter clothing and festive outfits",
      confidence: "high", 
      categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves", "Umbrellas"]
    },
    {
      month: "November 2025",
      trend: "🎭 Bollywood Glam",
      reason: "Award season and film releases influencing glamorous fashion choices",
      confidence: "medium",
      categories: ["Sequin Dresses", "Designer Suits", "Statement Earrings", "Clutches", "Heels"]
    }
  ],
  Bangalore: [
    {
      month: "October 2025",
      trend: "💻 Tech-Formal Fusion",
      reason: "Return to office driving demand for tech-comfortable formal wear",
      confidence: "high",
      categories: ["Smart Blazers", "Comfortable Trousers", "Loafers", "Tech Bags", "Smartwatches"]
    },
    {
      month: "November 2025",
      trend: "🌧️ Weather-Adaptive Clothing",
      reason: "Unpredictable weather increasing demand for versatile layering pieces",
      confidence: "high",
      categories: ["Hoodies", "Zip Jackets", "Waterproof Shoes", "Layering Tees", "Beanies"]
    }
  ],
  Default: [
    {
      month: "October 2025",
      trend: "🍂 Autumn Essentials",
      reason: "Seasonal transition driving demand for layering and earth tone clothing",
      confidence: "medium",
      categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves", "Denim Jackets"]
    }
  ]
};

const Trends = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const allRegions = Object.keys(regionalTrends).filter((r) => r !== "Default");
  const region = selectedRegion || "Default";
  const trends = regionalTrends[region];
  const chartData = monthlyTrends[region];
  const predictions = futurePredictions[region] || futurePredictions.Default;

  const renderChart = (title, icon) => (
    <div className="trends-chart-container">
      <div className="chart-title">
        <span className="chart-icon">{icon}</span>
        {title}
      </div>
      <div className="mini-chart">
        {chartData.data.map((value, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{ height: `${(value / 100) * 180}px` }}
            title={`${chartData.months[index]}: ${value}% popularity`}
          >
            <span className="bar-label">{chartData.months[index]}</span>
          </div>
        ))}
      </div>
      <div className="chart-legend">
        <span>📈 Monthly Fashion Popularity Trends</span>
      </div>
    </div>
  );

  const renderPredictions = () => (
    <div className="predictions-section">
      <div className="predictions-title">
        <span className="crystal-ball">🔮</span>
        AI-Powered Future Trends Prediction
      </div>
      <div className="prediction-cards">
        {predictions.map((prediction, index) => (
          <div key={index} className="prediction-card">
            <div className="prediction-month">{prediction.month}</div>
            <div className="prediction-trend">{prediction.trend}</div>
            <div className="prediction-reason">{prediction.reason}</div>
            <div className="seasonal-trends">
              <div className="seasonal-title">
                🎯 Expected Hot Categories
              </div>
              <div className="seasonal-items">
                {prediction.categories.map((category, idx) => (
                  <span key={idx} className="seasonal-tag">{category}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="trends-container">
      <h2 style={{ fontWeight: 900, marginBottom: "1.5rem" }}>Regional Fashion Trends & Analytics</h2>
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
          {region} Region Current Fashion Trends
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

      <div className="trends-grid">
        {renderChart("Monthly Popularity Trends", "📊")}
        {renderChart("Category Performance", "📈")}
      </div>

      {renderPredictions()}
    </div>
  );
};

export default Trends;
