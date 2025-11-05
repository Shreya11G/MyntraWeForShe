import React, { useState } from "react";import React, { useState } from "react";import React, { useState } from "react";import React, { useState } from "react";import React, { useState, useEffect } from "react";import React, { useState, useEffect } from "react";

import "./ProfileDNA.css";

import "./Trends.css";import "./ProfileDNA.css";



const Trends = () => {import "./Trends.css";import "./ProfileDNA.css";

  const [selectedRegion, setSelectedRegion] = useState("");



  const regionalTrends = {

    Delhi: {const Trends = () => {import "./Trends.css";import "./ProfileDNA.css";

      women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],

      men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],  const [selectedRegion, setSelectedRegion] = useState("");

      neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]

    },

    Mumbai: {

      women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],  // Regional trends data

      men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],

      neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]  const regionalTrends = {const Trends = () => {import "./Trends.css";import "./ProfileDNA.css";import "./ProfileDNA.css";

    },

    Bangalore: {    Delhi: {

      women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],

      men: ["Techwear", "Plaid shirts", "Chelsea boots"],      women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],  const [selectedRegion, setSelectedRegion] = useState("");

      neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]

    },      men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],

    Default: {

      women: ["Trendy tops", "Classic jeans", "Statement bags"],      neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]

      men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],

      neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]    },

    }

  };    Mumbai: {  const regionalTrends = {



  const shoppingInsights = {      women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],

    Delhi: {

      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],      men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],    Delhi: {const regionalTrends = {import "./Trends.css";import "./Trends.css";

      trending_items: ['Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'],

      price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],      neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]

      why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],

      shopping_tips: [    },      women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],

        'Buy cotton kurtas now before festive price hike',

        'Wait for Diwali sales for better deals',    Bangalore: {

        'Stock up on winter wear early to avoid rush',

        'Book tailors now for wedding season',      women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],      men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],  Delhi: {

        'Party wear will be cheaper post New Year'

      ]      men: ["Techwear", "Plaid shirts", "Chelsea boots"],

    },

    Mumbai: {      neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]      neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]

      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      trending_items: ['Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'],    },

      price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],

      why: ['Monsoon discounts', 'Post-monsoon refresh', 'Festival season', 'Cool weather starts', 'Year-end celebrations'],    Default: {    },    women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],

      shopping_tips: [

        'Great discounts on monsoon wear right now!',      women: ["Trendy tops", "Classic jeans", "Statement bags"],

        'Perfect time for wardrobe refresh',

        'Buy festive wear before Navratri rush',      men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],    Mumbai: {

        'Light jackets becoming essential',

        'Party wear prices peak in December'      neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]

      ]

    },    }      women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],    men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],

    Bangalore: {

      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  };

      trending_items: ['Tech Casual', 'Hoodies', 'Denim Jackets', 'Boots', 'Sweaters'],

      price_changes: ['+3%', '+8%', '+12%', '+20%', '+15%'],      men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],

      why: ['Work from office', 'Weather getting cool', 'Layering season', 'Winter clothing peak', 'Holiday shopping'],

      shopping_tips: [  // Smart shopping insights - This is what you wanted instead of unhelpful graphs!

        'Tech-wear demand rising with office return',

        'Hoodies becoming weather essentials',  const shoppingInsights = {      neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]    neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]// --- Regional Fashion Trends Mock Data ---// --- Regional Fashion Trends Mock Data ---

        'Layer up - denim jackets trending now',

        'Boot prices highest in peak winter',    Delhi: {

        'Buy sweaters before December rush'

      ]      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    },

    },

    Default: {      trending_items: ['Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'],

      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      trending_items: ['Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'],      price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],    Bangalore: {  },

      price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],

      why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],      why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],

      shopping_tips: [

        'Good time for basic wardrobe refresh',      shopping_tips: [      women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],

        'T-shirt prices remain stable',

        'Jeans see modest price increases',        'Buy cotton kurtas now before festive price hike',

        'Sneaker sales before festive season',

        'Accessory prices peak during holidays'        'Wait for Diwali sales for better deals',      men: ["Techwear", "Plaid shirts", "Chelsea boots"],  Mumbai: {const regionalTrends = {const regionalTrends = {

      ]

    }        'Stock up on winter wear early to avoid rush',

  };

        'Book tailors now for wedding season',      neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]

  const futurePredictions = {

    Delhi: [        'Party wear will be cheaper post New Year'

      {

        month: "October 2025",      ]    },    women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],

        trend: "🪔 Festive Ethnic Surge",

        reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",    },

        categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]

      }    Mumbai: {    Default: {

    ],

    Mumbai: [      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      {

        month: "October 2025",      trending_items: ['Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'],      women: ["Trendy tops", "Classic jeans", "Statement bags"],    men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],  Delhi: {  Delhi: {

        trend: "🌊 Monsoon-to-Winter Transition",

        reason: "Shift from monsoon wear to light winter clothing and festive outfits",      price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],

        categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves"]

      }      why: ['Monsoon discounts', 'Post-monsoon refresh', 'Festival season', 'Cool weather starts', 'Year-end celebrations'],      men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],

    ],

    Bangalore: [      shopping_tips: [

      {

        month: "October 2025",        'Great discounts on monsoon wear right now!',      neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]    neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]

        trend: "💻 Tech-Formal Fusion",

        reason: "Return to office driving demand for tech-comfortable formal wear",        'Perfect time for wardrobe refresh',

        categories: ["Smart Blazers", "Comfortable Trousers", "Loafers", "Tech Bags"]

      }        'Buy festive wear before Navratri rush',    }

    ],

    Default: [        'Light jackets becoming essential',

      {

        month: "October 2025",        'Party wear prices peak in December'  };  },    women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],    women: ["Sarees with modern prints", "Chunky sneakers", "Indo-western fusion"],

        trend: "🍂 Autumn Essentials",

        reason: "Seasonal transition driving demand for layering and earth tone clothing",      ]

        categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves"]

      }    },

    ]

  };    Bangalore: {



  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  const shoppingInsights = {  Bangalore: {

  const region = selectedRegion || "Default";

  const trends = regionalTrends[region];      trending_items: ['Tech Casual', 'Hoodies', 'Denim Jackets', 'Boots', 'Sweaters'],

  const insights = shoppingInsights[region] || shoppingInsights.Default;

  const predictions = futurePredictions[region] || futurePredictions.Default;      price_changes: ['+3%', '+8%', '+12%', '+20%', '+15%'],    Delhi: {



  const renderActionableInsights = () => (      why: ['Work from office', 'Weather getting cool', 'Layering season', 'Winter clothing peak', 'Holiday shopping'],

    <div className="trends-grid">

      <div className="trends-chart-container">      shopping_tips: [      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],    men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],    men: ["Streetwear jackets", "White sneakers", "Relaxed fit denims"],

        <div className="chart-title">

          <span className="chart-icon">💰</span>        'Tech-wear demand rising with office return',

          Price Alerts - When to Buy & Save Money

        </div>        'Hoodies becoming weather essentials',      trending_items: ['Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'],

        <div style={{ padding: '16px 0' }}>

          {insights.months.map((month, index) => {        'Layer up - denim jackets trending now',

            const priceChange = insights.price_changes[index];

            const isIncrease = priceChange.startsWith('+');        'Boot prices highest in peak winter',      price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],    men: ["Techwear", "Plaid shirts", "Chelsea boots"],

            return (

              <div key={index} style={{         'Buy sweaters before December rush'

                display: 'flex', 

                justifyContent: 'space-between',       ]      why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],

                alignItems: 'center',

                padding: '12px',     },

                margin: '8px 0',

                backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',    Default: {      shopping_tips: [    neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]    neutral: ["Oversized tees", "Bucket hats", "Pastel colors"]          <div style={{ marginTop: '2rem' }}>

                borderRadius: '8px',

                border: isIncrease ? '2px solid #fecaca' : '2px solid #bbf7d0'      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

              }}>

                <div>      trending_items: ['Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'],        'Buy cotton kurtas now before festive price hike',

                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{month} 2025</div>

                  <div style={{ fontSize: '0.85rem', color: '#666' }}>      price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],

                    {insights.why[index]}

                  </div>      why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],        'Wait for Diwali sales for electronics',  },

                </div>

                <div style={{ textAlign: 'right' }}>      shopping_tips: [

                  <div style={{ 

                    color: isIncrease ? '#dc2626' : '#16a34a',         'Good time for basic wardrobe refresh',        'Stock up on winter wear early to avoid rush',

                    fontWeight: '700',

                    fontSize: '1.1rem'        'T-shirt prices remain stable',

                  }}>

                    {priceChange} {isIncrease ? '📈' : '📉'}        'Jeans see modest price increases',        'Book tailors now for wedding season',  Default: {  },        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>

                  </div>

                  <div style={{ fontSize: '0.8rem', color: '#666' }}>        'Sneaker sales before festive season',

                    {isIncrease ? 'More Expensive' : 'Good Deals!'}

                  </div>        'Accessory prices peak during holidays'        'Party wear will be cheaper post New Year'

                </div>

              </div>      ]

            );

          })}    }      ]    women: ["Trendy tops", "Classic jeans", "Statement bags"],

        </div>

        <div style={{   };

          fontSize: '0.9rem', 

          color: '#a259ff',     },

          fontWeight: '600',

          padding: '12px',  // Future predictions

          backgroundColor: '#f8f9ff',

          borderRadius: '8px',  const futurePredictions = {    Mumbai: {    men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],  Mumbai: {          💡 Smart Shopping Insights

          marginTop: '12px'

        }}>    Delhi: [

          💡 <strong>Pro Tip:</strong> Shop during green months for best deals!

        </div>      {      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      </div>

        month: "October 2025",

      <div className="trends-chart-container">

        <div className="chart-title">        trend: "🪔 Festive Ethnic Surge",      trending_items: ['Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'],    neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]

          <span className="chart-icon">🛍️</span>

          Shopping Tips for {region === "Default" ? "Your Area" : region}        reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",

        </div>

        <div style={{ padding: '16px 0' }}>        categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]      price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],

          {insights.shopping_tips.map((tip, index) => (

            <div key={index} style={{       }

              padding: '12px', 

              margin: '8px 0',    ],      why: ['Monsoon discounts', 'Post-monsoon refresh', 'Festival season', 'Cool weather starts', 'Year-end celebrations'],  }    women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],        </h3>

              backgroundColor: '#f8f9fa',

              borderRadius: '8px',    Mumbai: [

              borderLeft: '4px solid #a259ff'

            }}>      {      shopping_tips: [

              <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>

                {insights.months[index]} - {insights.trending_items[index]}        month: "October 2025",

              </div>

              <div style={{ fontSize: '0.9rem', color: '#555' }}>        trend: "🌊 Monsoon-to-Winter Transition",        'Great discounts on monsoon wear now',};

                💡 {tip}

              </div>        reason: "Shift from monsoon wear to light winter clothing and festive outfits",

            </div>

          ))}        categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves"]        'Perfect time for wardrobe refresh',

        </div>

      </div>      }

    </div>

  );    ],        'Buy festive wear before Navratri',    men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],        <p style={{ color: '#666', marginBottom: '1rem' }}>



  const renderFutureTrends = () => (    Bangalore: [

    <div className="predictions-section">

      <div className="predictions-title">      {        'Light jackets in demand, buy early',

        <span className="crystal-ball">🔮</span>

        What's Coming Next? Future Fashion Trends        month: "October 2025",

      </div>

      <p style={{ marginBottom: '20px', color: '#666', fontSize: '1rem' }}>        trend: "💻 Tech-Formal Fusion",        'Party wear prices peak in December'const shoppingInsights = {

        Based on festivals, weather patterns, and fashion cycles:

      </p>        reason: "Return to office driving demand for tech-comfortable formal wear",

      <div className="prediction-cards">

        {predictions.map((prediction, index) => (        categories: ["Smart Blazers", "Comfortable Trousers", "Loafers", "Tech Bags"]      ]

          <div key={index} className="prediction-card">

            <div className="prediction-month">{prediction.month}</div>      }

            <div className="prediction-trend">{prediction.trend}</div>

            <div className="prediction-reason" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>    ],    },  Delhi: {    neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]          Real data to help you shop smarter and save money:

              Why? {prediction.reason}

            </div>    Default: [

            <div className="seasonal-trends">

              <div className="seasonal-title">      {    Default: {

                🛍️ Products that will be HOT:

              </div>        month: "October 2025",

              <div className="seasonal-items">

                {prediction.categories.map((category, idx) => (        trend: "🍂 Autumn Essentials",      months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

                  <span key={idx} className="seasonal-tag">{category}</span>

                ))}        reason: "Seasonal transition driving demand for layering and earth tone clothing",

              </div>

            </div>        categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves"]      trending_items: ['Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'],

          </div>

        ))}      }

      </div>

    </div>    ]      price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],    trending_items: ['Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'],  },        </p>

  );

  };

  return (

    <div className="trends-container">      why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>

        Fashion Trends & Smart Shopping Guide  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");

      </h2>

      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>  const region = selectedRegion || "Default";      shopping_tips: [    price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],

        See what's trending, get actionable shopping tips, and save money with smart timing

      </p>  const trends = regionalTrends[region];

      

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>  const insights = shoppingInsights[region] || shoppingInsights.Default;        'Good time for basic wardrobe refresh',

        <label style={{ fontWeight: 600 }}>Choose your city:</label>

        <select  const predictions = futurePredictions[region] || futurePredictions.Default;

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}

          value={selectedRegion}        'T-shirt prices stable across seasons',    why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],  Bangalore: {        {renderUsefulInsights()}

          onChange={e => setSelectedRegion(e.target.value)}

        >  const renderActionableInsights = () => (

          <option value="">All Cities (General Trends)</option>

          {allRegions.map((r) => (    <div className="trends-grid">        'Jeans see modest price increases',

            <option key={r} value={r}>{r}</option>

          ))}      <div className="trends-chart-container">

        </select>

        {selectedRegion && (        <div className="chart-title">        'Sneaker sales before festive season',    shopping_tips: [

          <button 

            style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}           <span className="chart-icon">💰</span>

            onClick={() => setSelectedRegion("")}

          >          Price Alerts - When to Buy & Save Money        'Accessory prices peak during holidays'

            Show All Cities

          </button>        </div>

        )}

      </div>        <div style={{ padding: '16px 0' }}>      ]      'Buy cotton kurtas now before festive price hike',    women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],      </div>versized tees", "Bucket hats", "Pastel colors"]

      

      <div className="dna-card">          {insights.months.map((month, index) => {

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}            const priceChange = insights.price_changes[index];    }

        </h3>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>            const isIncrease = priceChange.startsWith('+');

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>            return (  };      'Wait for Diwali sales for electronics',

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.women.map((item, i) => (              <div key={index} style={{ 

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

              ))}                display: 'flex', 

            </ul>

          </div>                justifyContent: 'space-between', 

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>                alignItems: 'center',  const futurePredictions = {      'Stock up on winter wear early to avoid rush',    men: ["Techwear", "Plaid shirts", "Chelsea boots"],  },

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.men.map((item, i) => (                padding: '12px', 

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

              ))}                margin: '8px 0',    Delhi: [

            </ul>

          </div>                backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>                borderRadius: '8px',      {      'Book tailors now for wedding season',

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.neutral.map((item, i) => (                border: isIncrease ? '2px solid #fecaca' : '2px solid #bbf7d0'

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

              ))}              }}>        month: "October 2025",

            </ul>

          </div>                <div>

        </div>

      </div>                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{month} 2025</div>        trend: "🪔 Festive Ethnic Surge",      'Party wear will be cheaper post New Year'    neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]  Mumbai: {



      <div style={{ marginTop: '2rem' }}>                  <div style={{ fontSize: '0.85rem', color: '#666' }}>

        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>

          💡 Actionable Shopping Insights                    {insights.why[index]}        reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",

        </h3>

        <p style={{ color: '#666', marginBottom: '1rem' }}>                  </div>

          Real data to help you save money and shop at the right time:

        </p>                </div>        categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]    ]

        {renderActionableInsights()}

      </div>                <div style={{ textAlign: 'right' }}>



      {renderFutureTrends()}                  <div style={{       }

    </div>

  );                    color: isIncrease ? '#dc2626' : '#16a34a', 

};

                    fontWeight: '700',    ],  },  },    women: ["Boho maxi dresses", "Statement sunglasses", "Kolhapuri sandals"],

export default Trends;
                    fontSize: '1.1rem'

                  }}>    Mumbai: [

                    {priceChange} {isIncrease ? '📈' : '📉'}

                  </div>      {  Mumbai: {

                  <div style={{ fontSize: '0.8rem', color: '#666' }}>

                    {isIncrease ? 'More Expensive' : 'Good Deals!'}        month: "October 2025",

                  </div>

                </div>        trend: "🌊 Monsoon-to-Winter Transition",    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  Kolkata: {    men: ["Linen shirts", "Printed shorts", "Slip-on loafers"],

              </div>

            );        reason: "Shift from monsoon wear to light winter clothing and festive outfits",

          })}

        </div>        categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves"]    trending_items: ['Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'],

        <div style={{ 

          fontSize: '0.9rem',       }

          color: '#a259ff', 

          fontWeight: '600',    ],    price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],    women: ["Cotton sarees", "Jute bags", "Ballet flats"],    neutral: ["Tote bags", "Minimalist jewelry", "Graphic tees"]

          padding: '12px',

          backgroundColor: '#f8f9ff',    Default: [

          borderRadius: '8px',

          marginTop: '12px'      {    why: ['Monsoon discounts', 'Post-monsoon refresh', 'Festival season', 'Cool weather starts', 'Year-end celebrations'],

        }}>

          💡 <strong>Pro Tip:</strong> Shop during green months for best deals!        month: "October 2025",

        </div>

      </div>        trend: "🍂 Autumn Essentials",    shopping_tips: [    men: ["Kurta pajamas", "Canvas shoes", "Printed shirts"],  },



      <div className="trends-chart-container">        reason: "Seasonal transition driving demand for layering and earth tone clothing",

        <div className="chart-title">

          <span className="chart-icon">🛍️</span>        categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves"]      'Great discounts on monsoon wear now',

          Smart Shopping Tips for {region === "Default" ? "Your Area" : region}

        </div>      }

        <div style={{ padding: '16px 0' }}>

          {insights.shopping_tips.map((tip, index) => (    ]      'Perfect time for wardrobe refresh',    neutral: ["Handmade jewelry", "Ethnic scarves", "Eco-friendly totes"]  Bangalore: {

            <div key={index} style={{ 

              padding: '12px',   };

              margin: '8px 0',

              backgroundColor: '#f8f9fa',      'Buy festive wear before Navratri',

              borderRadius: '8px',

              borderLeft: '4px solid #a259ff'  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");

            }}>

              <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>  const region = selectedRegion || "Default";      'Light jackets in demand, buy early',  },    women: ["Layered kurtis", "Denim jackets", "Sneaker boots"],

                {insights.months[index]} - {insights.trending_items[index]}

              </div>  const trends = regionalTrends[region];

              <div style={{ fontSize: '0.9rem', color: '#555' }}>

                💡 {tip}  const insights = shoppingInsights[region] || shoppingInsights.Default;      'Party wear prices peak in December'

              </div>

            </div>  const predictions = futurePredictions[region] || futurePredictions.Default;

          ))}

        </div>    ]  Hyderabad: {    men: ["Techwear", "Plaid shirts", "Chelsea boots"],

      </div>

    </div>  const renderSmartInsights = () => (

  );

    <div className="trends-grid">  },

  const renderFutureTrends = () => (

    <div className="predictions-section">      <div className="trends-chart-container">

      <div className="predictions-title">

        <span className="crystal-ball">🔮</span>        <div className="chart-title">  Default: {    women: ["Embroidered kurtis", "Palazzo pants", "Mirror work dupattas"],    neutral: ["Athleisure joggers", "Smart watches", "Unisex backpacks"]

        What's Coming Next? Future Fashion Trends

      </div>          <span className="chart-icon">💰</span>

      <p style={{ marginBottom: '20px', color: '#666', fontSize: '1rem' }}>

        Based on festivals, weather patterns, and fashion cycles:          Price Alerts - When to Buy & Save    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      </p>

      <div className="prediction-cards">        </div>

        {predictions.map((prediction, index) => (

          <div key={index} className="prediction-card">        <div style={{ padding: '16px 0' }}>    trending_items: ['Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'],    men: ["Denim shirts", "Kolhapuri chappals", "Cargo pants"],  },

            <div className="prediction-month">{prediction.month}</div>

            <div className="prediction-trend">{prediction.trend}</div>          {insights.months.map((month, index) => {

            <div className="prediction-reason" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>

              Why? {prediction.reason}            const priceChange = insights.price_changes[index];    price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],

            </div>

            <div className="seasonal-trends">            const isIncrease = priceChange.startsWith('+');

              <div className="seasonal-title">

                🛍️ Products that will be HOT:            return (    why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],    neutral: ["Printed stoles", "Unisex sandals", "Cotton backpacks"]  Kolkata: {

              </div>

              <div className="seasonal-items">              <div key={index} style={{ 

                {prediction.categories.map((category, idx) => (

                  <span key={idx} className="seasonal-tag">{category}</span>                display: 'flex',     shopping_tips: [

                ))}

              </div>                justifyContent: 'space-between', 

            </div>

          </div>                alignItems: 'center',      'Good time for basic wardrobe refresh',  },    women: ["Cotton sarees", "Jute bags", "Ballet flats"],

        ))}

      </div>                padding: '12px', 

    </div>

  );                margin: '8px 0',      'T-shirt prices stable across seasons',



  return (                backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',

    <div className="trends-container">

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>                borderRadius: '8px',      'Jeans see modest price increases',  Chennai: {    men: ["Kurta pajamas", "Canvas shoes", "Printed shirts"],

        Fashion Trends & Smart Shopping Guide

      </h2>                border: isIncrease ? '2px solid #fecaca' : '2px solid #bbf7d0'

      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>

        See what's trending, get actionable shopping tips, and save money with smart timing              }}>      'Sneaker sales before festive season',

      </p>

                      <div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>

        <label style={{ fontWeight: 600 }}>Choose your city:</label>                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{month} 2025</div>      'Accessory prices peak during holidays'    women: ["Silk sarees", "Temple jewelry", "Cotton salwars"],    neutral: ["Handmade jewelry", "Ethnic scarves", "Eco-friendly totes"]

        <select

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}                  <div style={{ fontSize: '0.85rem', color: '#666' }}>

          value={selectedRegion}

          onChange={e => setSelectedRegion(e.target.value)}                    {insights.why[index]}    ]

        >

          <option value="">All Cities (General Trends)</option>                  </div>

          {allRegions.map((r) => (

            <option key={r} value={r}>{r}</option>                </div>  }    men: ["Lungi", "Cotton shirts", "Leather sandals"],  },

          ))}

        </select>                <div style={{ textAlign: 'right' }}>

        {selectedRegion && (

          <button                   <div style={{ };

            style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }} 

            onClick={() => setSelectedRegion("")}                    color: isIncrease ? '#dc2626' : '#16a34a', 

          >

            Show All Cities                    fontWeight: '700',    neutral: ["Canvas bags", "Minimalist watches", "Sun hats"]  Hyderabad: {

          </button>

        )}                    fontSize: '1.1rem'

      </div>

                        }}>const futurePredictions = {

      <div className="dna-card">

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>                    {priceChange} {isIncrease ? '📈' : '📉'}

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}

        </h3>                  </div>  Delhi: [  },    women: ["Embroidered kurtis", "Palazzo pants", "Mirror work dupattas"],

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>

          <div>                  <div style={{ fontSize: '0.8rem', color: '#666' }}>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>                    {isIncrease ? 'Expensive' : 'Good Deal'}    {

              {trends.women.map((item, i) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>                  </div>

              ))}

            </ul>                </div>      month: "October 2025",  Pune: {    men: ["Denim shirts", "Kolhapuri chappals", "Cargo pants"],

          </div>

          <div>              </div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>            );      trend: "🪔 Festive Ethnic Surge",

              {trends.men.map((item, i) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>          })}

              ))}

            </ul>        </div>      reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",    women: ["Boho skirts", "Crop tops", "Sneakers"],    neutral: ["Printed stoles", "Unisex sandals", "Cotton backpacks"]

          </div>

          <div>        <div style={{ 

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>          fontSize: '0.9rem',       categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]

              {trends.neutral.map((item, i) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>          color: '#a259ff', 

              ))}

            </ul>          fontWeight: '600',    }    men: ["Polo tees", "Slim jeans", "Slip-ons"],  },

          </div>

        </div>          padding: '12px',

      </div>

          backgroundColor: '#f8f9ff',  ],

      <div style={{ marginTop: '2rem' }}>

        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>          borderRadius: '8px',

          💡 Actionable Shopping Insights

        </h3>          marginTop: '12px'  Mumbai: [    neutral: ["Denim jackets", "Unisex caps", "Messenger bags"]  Chennai: {

        <p style={{ color: '#666', marginBottom: '1rem' }}>

          Real data to help you save money and shop at the right time:        }}>

        </p>

        {renderActionableInsights()}          💡 <strong>Smart Tip:</strong> Buy during green months, wait during red months!    {

      </div>

        </div>

      {renderFutureTrends()}

    </div>      </div>      month: "October 2025",  },    women: ["Silk sarees", "Temple jewelry", "Cotton salwars"],

  );

};



export default Trends;      <div className="trends-chart-container">      trend: "🌊 Monsoon-to-Winter Transition",

        <div className="chart-title">

          <span className="chart-icon">🛍️</span>      reason: "Shift from monsoon wear to light winter clothing and festive outfits",  Jaipur: {    men: ["Lungi", "Cotton shirts", "Leather sandals"],

          Shopping Tips for {region === "Default" ? "Your Area" : region}

        </div>      categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves"]

        <div style={{ padding: '16px 0' }}>

          {insights.shopping_tips.map((tip, index) => (    }    women: ["Leheriya dupattas", "Mirror work tops", "Juttis"],    neutral: ["Canvas bags", "Minimalist watches", "Sun hats"]

            <div key={index} style={{ 

              padding: '12px',   ],

              margin: '8px 0',

              backgroundColor: '#f8f9fa',  Default: [    men: ["Bandhgala jackets", "Mojaris", "Printed kurtas"],  },

              borderRadius: '8px',

              borderLeft: '4px solid #a259ff'    {

            }}>

              <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>      month: "October 2025",    neutral: ["Block print scarves", "Ethnic vests", "Colorful turbans"]  Pune: {

                {insights.months[index]} - {insights.trending_items[index]}

              </div>      trend: "🍂 Autumn Essentials",

              <div style={{ fontSize: '0.9rem', color: '#555' }}>

                💡 {tip}      reason: "Seasonal transition driving demand for layering and earth tone clothing",  },    women: ["Boho skirts", "Crop tops", "Sneakers"],

              </div>

            </div>      categories: ["Cardigans", "Ankle Boots", "Earth Tones", "Scarves"]

          ))}

        </div>    }  Default: {    men: ["Polo tees", "Slim jeans", "Slip-ons"],

      </div>

    </div>  ]

  );

};    women: ["Trendy tops", "Classic jeans", "Statement bags"],    neutral: ["Denim jackets", "Unisex caps", "Messenger bags"]

  const renderPredictions = () => (

    <div className="predictions-section">

      <div className="predictions-title">

        <span className="crystal-ball">🔮</span>const Trends = () => {    men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],  },

        What's Coming Next? Future Fashion Trends

      </div>  const [selectedRegion, setSelectedRegion] = useState("");

      <p style={{ marginBottom: '20px', color: '#666', fontSize: '1rem' }}>

        Based on upcoming festivals, weather, and fashion cycles, here's what will be trending:  const allRegions = Object.keys(regionalTrends).filter((r) => r !== "Default");    neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]  Jaipur: {

      </p>

      <div className="prediction-cards">  const region = selectedRegion || "Default";

        {predictions.map((prediction, index) => (

          <div key={index} className="prediction-card">  const trends = regionalTrends[region];  }    women: ["Leheriya dupattas", "Mirror work tops", "Juttis"],

            <div className="prediction-month">{prediction.month}</div>

            <div className="prediction-trend">{prediction.trend}</div>  const insights = shoppingInsights[region] || shoppingInsights.Default;

            <div className="prediction-reason" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>

              Why? {prediction.reason}  const predictions = futurePredictions[region] || futurePredictions.Default;};    men: ["Bandhgala jackets", "Mojaris", "Printed kurtas"],

            </div>

            <div className="seasonal-trends">

              <div className="seasonal-title">

                🛍️ Products that will be HOT:  const renderSmartInsights = () => (    neutral: ["Block print scarves", "Ethnic vests", "Colorful turbans"]

              </div>

              <div className="seasonal-items">    <div className="trends-grid">

                {prediction.categories.map((category, idx) => (

                  <span key={idx} className="seasonal-tag">{category}</span>      <div className="trends-chart-container">// Smart shopping insights data  },

                ))}

              </div>        <div className="chart-title">

            </div>

          </div>          <span className="chart-icon">💰</span>const shoppingInsights = {  Default: {

        ))}

      </div>          Price Alerts - When to Buy & Save

    </div>

  );        </div>  Delhi: {    women: ["Trendy tops", "Classic jeans", "Statement bags"],



  return (        <div style={{ padding: '16px 0' }}>

    <div className="trends-container">

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>Fashion Trends in Your Region</h2>          {insights.months.map((month, index) => {    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    men: ["Casual shirts", "Slim-fit jeans", "Sneakers"],

      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>

        See what's trending now, get smart shopping tips, and know what's coming next            const priceChange = insights.price_changes[index];

      </p>

                  const isIncrease = priceChange.startsWith('+');    trending_items: ['Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'],    neutral: ["Unisex hoodies", "Caps", "Crossbody bags"]

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>

        <label style={{ fontWeight: 600 }}>Choose your city:</label>            return (

        <select

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}              <div key={index} style={{     price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],  }

          value={selectedRegion}

          onChange={e => setSelectedRegion(e.target.value)}                display: 'flex', 

        >

          <option value="">All Cities (General Trends)</option>                justifyContent: 'space-between',     why: ['Back to work season', 'Festive season starting', 'Wedding season peak', 'Winter clothing demand', 'Holiday parties'],};

          {allRegions.map((r) => (

            <option key={r} value={r}>{r}</option>                alignItems: 'center',

          ))}

        </select>                padding: '12px',     shopping_tips: [

        {selectedRegion && (

          <button                 margin: '8px 0',

            style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }} 

            onClick={() => setSelectedRegion("")}                backgroundColor: isIncrease ? '#fff5f5' : '#f0fff4',      'Buy cotton kurtas now before festive price hike',// Monthly fashion trend data for charts

          >

            Show All Cities                borderRadius: '8px',

          </button>

        )}                border: `2px solid ${isIncrease ? '#fecaca' : '#bbf7d0'}`      'Wait for Diwali sales for electronics',const monthlyTrends = {

      </div>

                    }}>

      <div className="dna-card">

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>                <div>      'Stock up on winter wear early to avoid rush',  Delhi: {

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}

        </h3>                  <div style={{ fontWeight: '700', fontSize: '1rem' }}>{month} 2025</div>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>

          <div>                  <div style={{ fontSize: '0.85rem', color: '#666' }}>      'Book tailors now for wedding season',    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>                    {insights.why[index]}

              {trends.women.map((item, i) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>                  </div>      'Party wear will be cheaper post New Year'    trending_items: [

              ))}

            </ul>                </div>

          </div>

          <div>                <div style={{ textAlign: 'right' }}>    ]      'Cotton Kurtas', 'Festive Lehengas', 'Winter Jackets', 'Wedding Sarees', 'Party Wear'

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>                  <div style={{ 

              {trends.men.map((item, i) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>                    color: isIncrease ? '#dc2626' : '#16a34a',   },    ],

              ))}

            </ul>                    fontWeight: '700',

          </div>

          <div>                    fontSize: '1.1rem'  Mumbai: {    price_changes: ['+5%', '+15%', '+25%', '+10%', '+8%'],

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>                  }}>

              {trends.neutral.map((item, i) => (

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>                    {priceChange} {isIncrease ? '📈' : '📉'}    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    why: [

              ))}

            </ul>                  </div>

          </div>

        </div>                  <div style={{ fontSize: '0.8rem', color: '#666' }}>    trending_items: ['Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'],      'Back to work season',

      </div>

                    {isIncrease ? 'Expensive' : 'Good Deal'}

      <div style={{ marginTop: '2rem' }}>

        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>                  </div>    price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],      'Festive season starting', 

          💡 Smart Shopping Guide

        </h3>                </div>

        <p style={{ color: '#666', marginBottom: '1rem' }}>

          Real insights to help you shop smarter, save money, and get the best deals:              </div>    why: ['Monsoon discounts', 'Post-monsoon refresh', 'Festival season', 'Cool weather starts', 'Year-end celebrations'],      'Wedding season peak',

        </p>

        {renderSmartInsights()}            );

      </div>

          })}    shopping_tips: [      'Winter clothing demand',

      {renderPredictions()}

    </div>        </div>

  );

};        <div style={{       'Great discounts on monsoon wear now',      'Holiday parties'



export default Trends;          fontSize: '0.9rem', 

          color: '#a259ff',       'Perfect time for wardrobe refresh',    ]

          fontWeight: '600',

          padding: '12px',      'Buy festive wear before Navratri',  },

          backgroundColor: '#f8f9ff',

          borderRadius: '8px',      'Light jackets in demand, buy early',  Mumbai: {

          marginTop: '12px'

        }}>      'Party wear prices peak in December'    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

          💡 <strong>Smart Tip:</strong> Buy during green months, wait during red months!

        </div>    ]    trending_items: [

      </div>

  },      'Monsoon Wear', 'Casual Shirts', 'Party Dresses', 'Light Jackets', 'Ethnic Fusion'

      <div className="trends-chart-container">

        <div className="chart-title">  Bangalore: {    ],

          <span className="chart-icon">🛍️</span>

          Shopping Tips for {region === "Default" ? "Your Area" : region}    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    price_changes: ['-10%', '+5%', '+12%', '+8%', '+15%'],

        </div>

        <div style={{ padding: '16px 0' }}>    trending_items: ['Tech Casual', 'Hoodies', 'Denim Jackets', 'Boots', 'Sweaters'],    why: [

          {insights.shopping_tips.map((tip, index) => (

            <div key={index} style={{     price_changes: ['+3%', '+8%', '+12%', '+20%', '+15%'],      'Monsoon discounts',

              padding: '12px', 

              margin: '8px 0',    why: ['Work from office', 'Weather getting cool', 'Layering season', 'Winter clothing peak', 'Holiday shopping'],      'Post-monsoon refresh',

              backgroundColor: '#f8f9fa',

              borderRadius: '8px',    shopping_tips: [      'Festival season',

              borderLeft: '4px solid #a259ff'

            }}>      'Tech-wear demand rising with office return',      'Cool weather starts',

              <div style={{ fontWeight: '600', color: '#333', marginBottom: '4px' }}>

                {insights.months[index]} - {insights.trending_items[index]}      'Hoodies becoming essential for weather',      'Year-end celebrations'

              </div>

              <div style={{ fontSize: '0.9rem', color: '#555' }}>      'Layer up - denim jackets trending',    ]

                💡 {tip}

              </div>      'Boot prices highest in peak winter',  },

            </div>

          ))}      'Buy sweaters before December rush'  Bangalore: {

        </div>

      </div>    ]    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    </div>

  );  },    trending_items: [



  const renderPredictions = () => (  Default: {      'Tech Casual', 'Hoodies', 'Denim Jackets', 'Boots', 'Sweaters'

    <div className="predictions-section">

      <div className="predictions-title">    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],    ],

        <span className="crystal-ball">🔮</span>

        What's Coming Next? Future Fashion Trends    trending_items: ['Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'],    price_changes: ['+3%', '+8%', '+12%', '+20%', '+15%'],

      </div>

      <p style={{ marginBottom: '20px', color: '#666', fontSize: '1rem' }}>    price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],    why: [

        Based on upcoming festivals, weather, and fashion cycles, here's what will be trending:

      </p>    why: ['General trends', 'Season change', 'Festival preparations', 'Cool weather', 'Year-end shopping'],      'Work from office',

      <div className="prediction-cards">

        {predictions.map((prediction, index) => (    shopping_tips: [      'Weather getting cool',

          <div key={index} className="prediction-card">

            <div className="prediction-month">{prediction.month}</div>      'Good time for basic wardrobe refresh',      'Layering season',

            <div className="prediction-trend">{prediction.trend}</div>

            <div className="prediction-reason" style={{ fontSize: '0.9rem', marginBottom: '12px' }}>      'T-shirt prices stable across seasons',      'Winter clothing peak',

              Why? {prediction.reason}

            </div>      'Jeans see modest price increases',      'Holiday shopping'

            <div className="seasonal-trends">

              <div className="seasonal-title">      'Sneaker sales before festive season',    ]

                🛍️ Products that will be HOT:

              </div>      'Accessory prices peak during holidays'  },

              <div className="seasonal-items">

                {prediction.categories.map((category, idx) => (    ]  Default: {

                  <span key={idx} className="seasonal-tag">{category}</span>

                ))}  }    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

              </div>

            </div>};    trending_items: [

          </div>

        ))}      'Casual Wear', 'T-shirts', 'Jeans', 'Sneakers', 'Accessories'

      </div>

    </div>// Future trend predictions    ],

  );

const futurePredictions = {    price_changes: ['+2%', '+5%', '+8%', '+6%', '+10%'],

  return (

    <div className="trends-container">  Delhi: [    why: [

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>Fashion Trends in Your Region</h2>

      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem' }}>    {      'General trends',

        See what's trending now, get smart shopping tips, and know what's coming next

      </p>      month: "October 2025",      'Season change',

      

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>      trend: "🪔 Festive Ethnic Surge",      'Festival preparations',

        <label style={{ fontWeight: 600 }}>Choose your city:</label>

        <select      reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",      'Cool weather',

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}

          value={selectedRegion}      confidence: "high",      'Year-end shopping'

          onChange={e => setSelectedRegion(e.target.value)}

        >      categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]    ]

          <option value="">All Cities (General Trends)</option>

          {allRegions.map((r) => (    },  }

            <option key={r} value={r}>{r}</option>

          ))}    {};

        </select>

        {selectedRegion && (      month: "November 2025", 

          <button 

            style={{ marginLeft: 8, color: "#a259ff", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}       trend: "🧥 Winter Layer Boom",// Future trend predictions

            onClick={() => setSelectedRegion("")}

          >      reason: "Temperature drop increasing demand for jackets, sweaters, and boots",const futurePredictions = {

            Show All Cities

          </button>      confidence: "high",  Delhi: [

        )}

      </div>      categories: ["Leather Jackets", "Woolen Sweaters", "Boots", "Mufflers", "Thermals"]    {

      

      <div className="dna-card">    }      month: "October 2025",

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}  ],      trend: "🪔 Festive Ethnic Surge",

        </h3>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: '16px' }}>  Mumbai: [      reason: "Diwali and wedding season driving demand for lehengas, sarees, and sherwanis",

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👗 For Women:</span>    {      confidence: "high",

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.women.map((item, i) => (      month: "October 2025",      categories: ["Lehengas", "Heavy Sarees", "Sherwanis", "Mojaris", "Kundan Jewelry"]

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

              ))}      trend: "🌊 Monsoon-to-Winter Transition",    },

            </ul>

          </div>      reason: "Shift from monsoon wear to light winter clothing and festive outfits",    {

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👔 For Men:</span>      confidence: "high",       month: "November 2025", 

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.men.map((item, i) => (      categories: ["Light Jackets", "Festive Kurtas", "Waterproof Shoes", "Scarves"]      trend: "🧥 Winter Layer Boom",

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

              ))}    }      reason: "Temperature drop increasing demand for jackets, sweaters, and boots",

            </ul>

          </div>  ],      confidence: "high",

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: '1rem' }}>👫 For Everyone:</span>  Bangalore: [      categories: ["Leather Jackets", "Woolen Sweaters", "Boots", "Mufflers", "Thermals"]

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.neutral.map((item, i) => (    {    },

                <li key={i} style={{ margin: '4px 0' }}>{item}</li>

              ))}      month: "October 2025",    {

            </ul>

          </div>      trend: "💻 Tech-Formal Fusion",      month: "December 2025",

        </div>

      </div>      reason: "Return to office driving demand for tech-comfortable formal wear",      trend: "🎉 Party & Travel Wear",



      <div style={{ marginTop: '2rem' }}>      confidence: "high",      reason: "Holiday season and year-end celebrations driving party wear demand",

        <h3 style={{ fontWeight: 700, marginBottom: '1rem', color: '#333' }}>

          💡 Smart Shopping Guide      categories: ["Smart Blazers", "Comfortable Trousers", "Loafers", "Tech Bags"]      confidence: "medium",

        </h3>

        <p style={{ color: '#666', marginBottom: '1rem' }}>    }      categories: ["Party Dresses", "Blazers", "Travel Bags", "Statement Jewelry", "Heels"]

          Real insights to help you shop smarter, save money, and get the best deals:

        </p>  ],    }

        {renderSmartInsights()}

      </div>  Default: [  ],



      {renderPredictions()}    {  Mumbai: [

    </div>

  );      month: "October 2025",    {

};

      trend: "🍂 Autumn Essentials",      month: "October 2025",

export default Trends;
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
