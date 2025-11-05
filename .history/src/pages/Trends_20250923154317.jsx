import React, { useState, useEffect } from "react";import React, { useState, useEffect } from "react";

import "./ProfileDNA.css";import "./ProfileDNA.css";

import "./Trends.css";import "./Trends.css";



// --- Regional Fashion Trends Mock Data ---// --- Regional Fashion Trends Mock Data ---

const regionalTrends = {const regionalTrends = {

  Delhi: {  Delhi: {

    women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],    women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],

    men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],    men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],

    neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]          <div style={{ marginTop: '2rem' }}>

  },        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>

  Mumbai: {          💡 Smart Shopping Insights

    women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],        </h3>

    men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],        <p style={{ color: '#666', marginBottom: '1rem' }}>

    neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]          Real data to help you shop smarter and save money:

  },        </p>

  Bangalore: {        {renderUsefulInsights()}

    women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],      </div>versized tees", "Bucket hats", "Pastel colors"]

    men: ["Techwear", "Plaid shirts", "Chelsea boots"],  },

    neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]  Mumbai: {

  },    women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],

  Kolkata: {    men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],

    women: ["Cotton sarees", "Jute bags", "Ballet flats"],    neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]

    men: ["Kurta pajamas", "Canvas shoes", "Printed shirts"],  },

    neutral: ["Handmade jewelry", "Ethnic scarves", "Eco-friendly totes"]  Bangalore: {

  },    women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],

  Hyderabad: {    men: ["Techwear", "Plaid shirts", "Chelsea boots"],

    women: ["Embroidered kurtis", "Palazzo pants", "Mirror work dupattas"],    neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]

    men: ["Denim shirts", "Kolhapuri chappals", "Cargo pants"],  },

    neutral: ["Printed stoles", "Unisex sandals", "Cotton backpacks"]  Kolkata: {

  },    women: ["Cotton sarees", "Jute bags", "Ballet flats"],

  Chennai: {    men: ["Kurta pajamas", "Canvas shoes", "Printed shirts"],

    women: ["Silk sarees", "Temple jewelry", "Cotton salwars"],    neutral: ["Handmade jewelry", "Ethnic scarves", "Eco-friendly totes"]

    men: ["Lungi", "Cotton shirts", "Leather sandals"],  },

    neutral: ["Canvas bags", "Minimalist watches", "Sun hats"]  Hyderabad: {

  },    women: ["Embroidered kurtis", "Palazzo pants", "Mirror work dupattas"],

  Pune: {    men: ["Denim shirts", "Kolhapuri chappals", "Cargo pants"],

    women: ["Boho skirts", "Crop tops", "Sneakers"],    neutral: ["Printed stoles", "Unisex sandals", "Cotton backpacks"]

    men: ["Polo tees", "Slim jeans", "Slip-ons"],  },

    neutral: ["Denim jackets", "Unisex caps", "Messenger bags"]  Chennai: {

  },    women: ["Silk sarees", "Temple jewelry", "Cotton salwars"],

  Jaipur: {    men: ["Lungi", "Cotton shirts", "Leather sandals"],

    women: ["Leheriya dupattas", "Mirror work tops", "Juttis"],    neutral: ["Canvas bags", "Minimalist watches", "Sun hats"]

    men: ["Bandhgala jackets", "Mojaris", "Printed kurtas"],  },

    neutral: ["Block print scarves", "Ethnic vests", "Colorful turbans"]  Pune: {

  },    women: ["Boho skirts", "Crop tops", "Sneakers"],

  Default: {    men: ["Polo tees", "Slim jeans", "Slip-ons"],

    women: ["Trendy tops", "Classic jeans", "Statement bags"],    neutral: ["Denim jackets", "Unisex caps", "Messenger bags"]

    men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],  },

    neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]  Jaipur: {

  }    women: ["Leheriya dupattas", "Mirror work tops", "Juttis"],

};    men: ["Bandhgala jackets", "Mojaris", "Printed kurtas"],

    neutral: ["Block print scarves", "Ethnic vests", "Colorful turbans"]

// Smart shopping insights data  },

const shoppingInsights = {  Default: {

  Delhi: {    women: ["Trendy tops", "Classic jeans", "Statement bags"],

    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],

    trending_items: ['Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'],    neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]

    price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],  }

    why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],};

    shopping_tips: [

      'Buy cotton kurtas now before festive price hike',// Monthly fashion trend data for charts

      'Wait for Diwali sales for electronics',const monthlyTrends = {

      'Stock up on winter wear early to avoid rush',  Delhi: {

      'Book tailors now for wedding season',    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      'Party wear will be cheaper post New Year'    trending_items: [

    ]      'Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'

  },    ],

  Mumbai: {    price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],

    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    why: [

    trending_items: ['Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'],      'Back to work season',

    price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],      'Festive season starting', 

    why: ['Monsoon discounts', 'Post-monsoon refresh', 'Festival season', 'Cool weather starts', 'Year-end celebrations'],      'Wedding season peak',

    shopping_tips: [      'Winter clothing demand',

      'Great discounts on monsoon wear now',      'Holiday parties'

      'Perfect time for wardrobe refresh',    ]

      'Buy festive wear before Navratri',  },

      'Light jackets in demand, buy early',  Mumbai: {

      'Party wear prices peak in December'    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    ]    trending_items: [

  },      'Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'

  Bangalore: {    ],

    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],

    trending_items: ['Tech Casual', 'Hoodies', 'Denim Jackets', 'Boots', 'Sweaters'],    why: [

    price_changes: ['+3%', '+8%', '+12%', '+20%', '+15%'],      'Monsoon discounts',

    why: ['Work from office', 'Weather getting cool', 'Layering season', 'Winter clothing peak', 'Holiday shopping'],      'Post-monsoon refresh',

    shopping_tips: [      'Festival season',

      'Tech-wear demand rising with office return',      'Cool weather starts',

      'Hoodies becoming essential for weather',      'Year-end celebrations'

      'Layer up - denim jackets trending',    ]

      'Boot prices highest in peak winter',  },

      'Buy sweaters before December rush'  Bangalore: {

    ]    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  },    trending_items: [

  Default: {      'Tech Casual', 'Hoodies', 'Denim Jackets', 'Boots', 'Sweaters'

    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    ],

    trending_items: ['Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'],    price_changes: ['+3%', '+8%', '+12%', '+20%', '+15%'],

    price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],    why: [

    why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],      'Work from office',

    shopping_tips: [      'Weather getting cool',

      'Good time for basic wardrobe refresh',      'Layering season',

      'T-shirt prices stable across seasons',      'Winter clothing peak',

      'Jeans see modest price increases',      'Holiday shopping'

      'Sneaker sales before festive season',    ]

      'Accessory prices peak during holidays'  },

    ]  Default: {

  }    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

};    trending_items: [

      'Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'

// Future trend predictions    ],

const futurePredictions = {    price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],

  Delhi: [    why: [

    {      'General trends',

      month: "October 2025",      'Season change',

      trend: "🪔 Festive Ethnic Surge",      'Festival preparations',

      reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",      'Cool weather',

      confidence: "high",      'Year-end shopping'

      categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]    ]

    },  }

    {};

      month: "November 2025", 

      trend: "🧥 Winter Layer Boom",// Future trend predictions

      reason: "Temperature drop increasing demand for jackets, sweaters, and boots",const futurePredictions = {

      confidence: "high",  Delhi: [

      categories: ["Leather Jackets", "Woolen Sweaters", "Boots", "Mufflers", "Thermals"]    {

    }      month: "October 2025",

  ],      trend: "🪔 Festive Ethnic Surge",

  Mumbai: [      reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",

    {      confidence: "high",

      month: "October 2025",      categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]

      trend: "🌊 Monsoon-to-Winter Transition",    },

      reason: "Shift from monsoon wear to light winter clothing and festive outfits",    {

      confidence: "high",       month: "November 2025", 

      categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves"]      trend: "🧥 Winter Layer Boom",

    }      reason: "Temperature drop increasing demand for jackets, sweaters, and boots",

  ],      confidence: "high",

  Bangalore: [      categories: ["Leather Jackets", "Woolen Sweaters", "Boots", "Mufflers", "Thermals"]

    {    },

      month: "October 2025",    {

      trend: "💻 Tech-Formal Fusion",      month: "December 2025",

      reason: "Return to office driving demand for tech-comfortable formal wear",      trend: "🎉 Party & Travel Wear",

      confidence: "high",      reason: "Holiday season and year-end celebrations driving party wear demand",

      categories: ["Smart Blazers", "Comfortable Trousers", "Loafers", "Tech Bags"]      confidence: "medium",

    }      categories: ["Party Dresses", "Blazers", "Travel Bags", "Statement Jewelry", "Heels"]

  ],    }

  Default: [  ],

    {  Mumbai: [

      month: "October 2025",    {

      trend: "🍂 Autumn Essentials",      month: "October 2025",

      reason: "Seasonal transition driving demand for layering and earth tone clothing",      trend: "🌊 Monsoon-to-Winter Transition",

      confidence: "medium",      reason: "Shift from monsoon wear to light winter clothing and festive outfits",

      categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves"]      confidence: "high", 

    }      categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves", "Umbrellas"]

  ]    },

};    {

      month: "November 2025",

const Trends = () => {      trend: "🎭 Bollywood Glam",

  const [selectedRegion, setSelectedRegion] = useState("");      reason: "Award season and film releases influencing glamorous fashion choices",

  const allRegions = Object.keys(regionalTrends).filter((r) => r !== "Default");      confidence: "medium",

  const region = selectedRegion || "Default";      categories: ["Sequin Dresses", "Designer Suits", "Statement Earrings", "Clutches", "Heels"]

  const trends = regionalTrends[region];    }

  const insights = shoppingInsights[region] || shoppingInsights.Default;  ],

  const predictions = futurePredictions[region] || futurePredictions.Default;  Bangalore: [

    {

  const renderSmartInsights = () => (      month: "October 2025",

    <div className="trends-grid">      trend: "💻 Tech-Formal Fusion",

      <div className="trends-chart-container">      reason: "Return to office driving demand for tech-comfortable formal wear",

        <div className="chart-title">      confidence: "high",

          <span className="chart-icon">💰</span>      categories: ["Smart Blazers", "Comfortable Trousers", "Loafers", "Tech Bags", "Smartwatches"]

          Price Alerts - When to Buy & Save    },

        </div>    {

        <div style={{ padding: '16px 0' }}>      month: "November 2025",

          {insights.months.map((month, index) => {      trend: "🌧️ Weather-Adaptive Clothing",

            const priceChange = insights.price_changes[index];      reason: "Unpredictable weather increasing demand for versatile layering pieces",

            const isIncrease = priceChange.startsWith('+');      confidence: "high",

            return (      categories: ["Hoodies", "Zip Jackets", "Waterproof Shoes", "Layering Tees", "Beanies"]

              <div key={index} style={{     }

                display: 'flex',   ],

                justifyContent: 'space-between',   Default: [

                alignItems: 'center',    {

                padding: '12px',       month: "October 2025",

                margin: '8px 0',      trend: "🍂 Autumn Essentials",

                backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',      reason: "Seasonal transition driving demand for layering and earth tone clothing",

                borderRadius: '8px',      confidence: "medium",

                border: `2px solid ${isIncrease ? '#fecaca' : '#bbf7d0'}`      categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves", "Denim Jackets"]

              }}>    }

                <div>  ]

                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{month} 2025</div>};

                  <div style={{ fontSize: '0.85rem', color: '#666' }}>

                    {insights.why[index]}const Trends = () => {

                  </div>  const [selectedRegion, setSelectedRegion] = useState("");

                </div>  const allRegions = Object.keys(regionalTrends).filter((r) => r !== "Default");

                <div style={{ textAlign: 'right' }}>  const region = selectedRegion || "Default";

                  <div style={{   const trends = regionalTrends[region];

                    color: isIncrease ? '#dc2626' : '#16a34a',   const chartData = monthlyTrends[region];

                    fontWeight: '700',  const predictions = futurePredictions[region] || futurePredictions.Default;

                    fontSize: '1.1rem'

                  }}>  const renderUsefulInsights = () => (

                    {priceChange} {isIncrease ? '📈' : '📉'}    <div className="trends-grid">

                  </div>      <div className="trends-chart-container">

                  <div style={{ fontSize: '0.8rem', color: '#666' }}>        <div className="chart-title">

                    {isIncrease ? 'Expensive' : 'Good Deal'}          <span className="chart-icon">💰</span>

                  </div>          Price Trends - When to Buy & Save

                </div>        </div>

              </div>        <div style={{ padding: '16px 0' }}>

            );          {chartData.months.map((month, index) => {

          })}            const priceChange = chartData.price_changes[index];

        </div>            const isIncrease = priceChange.startsWith('+');

        <div style={{             return (

          fontSize: '0.9rem',               <div key={index} style={{ 

          color: '#a259ff',                 display: 'flex', 

          fontWeight: '600',                justifyContent: 'space-between', 

          padding: '12px',                alignItems: 'center',

          backgroundColor: '#f8f9ff',                padding: '8px 12px', 

          borderRadius: '8px',                margin: '4px 0',

          marginTop: '12px'                backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',

        }}>                borderRadius: '8px',

          💡 <strong>Smart Tip:</strong> Buy during green months, wait during red months!                border: `1px solid ${isIncrease ? '#fecaca' : '#bbf7d0'}`

        </div>              }}>

      </div>                <span style={{ fontWeight: '600' }}>{month}</span>

                <span style={{ color: isIncrease ? '#dc2626' : '#16a34a', fontWeight: '700' }}>

      <div className="trends-chart-container">                  {priceChange} {isIncrease ? '📈' : '📉'}

        <div className="chart-title">                </span>

          <span className="chart-icon">🛍️</span>                <span style={{ fontSize: '0.85rem', color: '#666' }}>

          Shopping Tips for {region === "Default" ? "Your Area" : region}                  {chartData.why[index]}

        </div>                </span>

        <div style={{ padding: '16px 0' }}>              </div>

          {insights.shopping_tips.map((tip, index) => (            );

            <div key={index} style={{           })}

              padding: '12px',         </div>

              margin: '8px 0',        <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '12px' }}>

              backgroundColor: '#f8f9fa',          💡 <strong>Tip:</strong> Buy when prices drop, avoid peak months

              borderRadius: '8px',        </div>

              borderLeft: '4px solid #a259ff'      </div>

            }}>

              <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>      <div className="trends-chart-container">

                {insights.months[index]} - {insights.trending_items[index]}        <div className="chart-title">

              </div>          <span className="chart-icon">🔥</span>

              <div style={{ fontSize: '0.9rem', color: '#555' }}>          What's Actually Selling Each Month

                💡 {tip}        </div>

              </div>        <div style={{ padding: '16px 0' }}>

            </div>          {chartData.months.map((month, index) => (

          ))}            <div key={index} style={{ 

        </div>              padding: '12px', 

      </div>              margin: '8px 0',

    </div>              backgroundColor: '#f8f9fa',

  );              borderRadius: '8px',

              borderLeft: '4px solid #a259ff'

  const renderPredictions = () => (            }}>

    <div className="predictions-section">              <div style={{ fontWeight: '700', color: '#333', marginBottom: '4px' }}>

      <div className="predictions-title">                {month} 2025

        <span className="crystal-ball">🔮</span>              </div>

        What's Coming Next? Future Fashion Trends              <div style={{ 

      </div>                background: 'linear-gradient(90deg, #a259ff, #ff69b4)',

      <p style={{ marginBottom: '20px', color: '#666', fontSize: '1rem' }}>                color: 'white',

        Based on upcoming festivals, weather, and fashion cycles, here's what will be trending:                padding: '4px 12px',

      </p>                borderRadius: '16px',

      <div className="prediction-cards">                display: 'inline-block',

        {predictions.map((prediction, index) => (                fontSize: '0.9rem',

          <div key={index} className="prediction-card">                fontWeight: '600'

            <div className="prediction-month">{prediction.month}</div>              }}>

            <div className="prediction-trend">{prediction.trend}</div>                🛍️ {chartData.trending_items[index]}

            <div className="prediction-reason" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>              </div>

              Why? {prediction.reason}              <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>

            </div>                Why: {chartData.why[index]}

            <div className="seasonal-trends">              </div>

              <div className="seasonal-title">            </div>

                🛍️ Products that will be HOT:          ))}

              </div>        </div>

              <div className="seasonal-items">      </div>

                {prediction.categories.map((category, idx) => (    </div>

                  <span key={idx} className="seasonal-tag">{category}</span>  );

                ))}

              </div>  const renderPredictions = () => (

            </div>    <div className="predictions-section">

          </div>      <div className="predictions-title">

        ))}        <span className="crystal-ball">🔮</span>

      </div>        What's Coming Next? Future Fashion Trends

    </div>      </div>

  );      <p style={{ marginBottom: '20px', color: '#666', fontSize: '1rem' }}>

        Based on upcoming festivals, weather, and fashion cycles, here's what will be trending:

  return (      </p>

    <div className="trends-container">      <div className="prediction-cards">

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>Fashion Trends in Your Region</h2>        {predictions.map((prediction, index) => (

      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>          <div key={index} className="prediction-card">

        See what's trending now, get smart shopping tips, and know what's coming next            <div className="prediction-month">{prediction.month}</div>

      </p>            <div className="prediction-trend">{prediction.trend}</div>

                  <div className="prediction-reason" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>              Why? {prediction.reason}

        <label style={{ fontWeight: 600 }}>Choose your city:</label>            </div>

        <select            <div className="seasonal-trends">

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}              <div className="seasonal-title">

          value={selectedRegion}                🛍️ Products that will be HOT:

          onChange={e => setSelectedRegion(e.target.value)}              </div>

        >              <div className="seasonal-items">

          <option value="">All Cities (General Trends)</option>                {prediction.categories.map((category, idx) => (

          {allRegions.map((r) => (                  <span key={idx} className="seasonal-tag">{category}</span>

            <option key={r} value={r}>{r}</option>                ))}

          ))}              </div>

        </select>            </div>

        {selectedRegion && (          </div>

          <button style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }} onClick={() => setSelectedRegion("")}>Show All Cities</button>        ))}

        )}      </div>

      </div>    </div>

        );

      <div className="dna-card">

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>  return (

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}    <div className="trends-container">

        </h3>      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>Fashion Trends in Your Region</h2>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>

          <div>        See what's trending now and what's coming next in different cities across India

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>      </p>

            <ul style={{ margin: 0, paddingLeft: 18 }}>      

              {trends.women.map((item, i) => (      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>        <label style={{ fontWeight: 600 }}>Choose your city:</label>

              ))}        <select

            </ul>          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}

          </div>          value={selectedRegion}

          <div>          onChange={e => setSelectedRegion(e.target.value)}

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>        >

            <ul style={{ margin: 0, paddingLeft: 18 }}>          <option value="">All Cities (General Trends)</option>

              {trends.men.map((item, i) => (          {allRegions.map((r) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>            <option key={r} value={r}>{r}</option>

              ))}          ))}

            </ul>        </select>

          </div>        {selectedRegion && (

          <div>          <button style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }} onClick={() => setSelectedRegion("")}>Show All Cities</button>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>        )}

            <ul style={{ margin: 0, paddingLeft: 18 }}>      </div>

              {trends.neutral.map((item, i) => (      

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>      <div className="dna-card">

              ))}        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>

            </ul>          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}

          </div>        </h3>

        </div>        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>

      </div>          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>

      <div style={{ marginTop: '2rem' }}>            <ul style={{ margin: 0, paddingLeft: 18 }}>

        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>              {trends.women.map((item, i) => (

          💡 Smart Shopping Guide                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

        </h3>              ))}

        <p style={{ color: '#666', marginBottom: '1rem' }}>            </ul>

          Real insights to help you shop smarter, save money, and get the best deals:          </div>

        </p>          <div>

        {renderSmartInsights()}            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>

      </div>            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.men.map((item, i) => (

      {renderPredictions()}                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

    </div>              ))}

  );            </ul>

};          </div>

          <div>

export default Trends;            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>
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
          📊 Fashion Popularity Over Time
        </h3>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          See how fashion trends have changed in the last 5 months:
        </p>
        <div className="trends-grid">
          {renderChart("Monthly Trends", "�")}
          {renderChart("Category Popularity", "�")}
        </div>
      </div>

      {renderPredictions()}
    </div>
  );
};

export default Trends;
