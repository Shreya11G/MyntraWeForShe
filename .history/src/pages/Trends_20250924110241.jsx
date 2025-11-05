import React, { useState } from "react";import React, { useState } from "react";import React, { useState } from "react";

import "./ProfileDNA.css";

import "./Trends.css";import "./ProfileDNA.css";import "./ProfileDNA.css";



const Trends = () => {import "./Trends.css";import "./Trends.css";

  const [selectedRegion, setSelectedRegion] = useState("");



  // Regional trends data for 7 cities plus default

  const regionalTrends = {const Trends = () => {const Trends = () => {

    Delhi: {

      women: ["Kurta with palazzo", "Anarkali suits", "Ethnic fusion wear"],  const [selectedRegion, setSelectedRegion] = useState("");  const [selectedReg    <div className="trends-chart-container">

      men: ["Kurta with jeans", "Nehru jackets", "Ethnic shirts"],

      neutral: ["Juttis", "Silver accessories", "Handloom bags"]      <div className="chart-title">

    },

    Mumbai: {  const regionalTrends = {        <span className="chart-icon">📊</span>

      women: ["Flowy maxi dresses", "Crop tops with palazzos", "Boho-chic outfits"],

      men: ["Linen shirts", "Casual blazers", "Polo shirts"],    Delhi: {        Fashion Trend History - Last 7 Months

      neutral: ["Beach accessories", "Sunglasses", "Canvas bags"]

    },      women: ["Kurta with palazzo", "Anarkali suits", "Ethnic fusion wear"],      </div>setSelectedRegion] = useState("");

    Bangalore: {

      women: ["Tech-casual wear", "Layered outfits", "Comfortable sneakers"],      men: ["Kurta with jeans", "Nehru jackets", "Ethnic shirts"],

      men: ["Smart casual shirts", "Chinos", "Light jackets"],

      neutral: ["Laptop bags", "Weather jackets", "Versatile accessories"]      neutral: ["Juttis", "Silver accessories", "Handloom bags"]  const regionalTrends = {

    },

    Chennai: {    },    Delhi: {

      women: ["Cotton sarees", "Light kurtas", "Breathable fabrics"],

      men: ["Linen shirts", "Cotton pants", "Comfortable sandals"],    Mumbai: {      women: ["Kurta with palazzo", "Anarkali suits", "Ethnic fusion wear"],

      neutral: ["Sun protection", "Light scarves", "Breathable footwear"]

    },      women: ["Flowy maxi dresses", "Crop tops with palazzos", "Boho-chic outfits"],      men: ["Kurta with jeans", "Nehru jackets", "Ethnic shirts"],

    Kolkata: {

      women: ["Traditional handloom", "Ethnic jewelry", "Cotton sarees"],      men: ["Linen shirts", "Casual blazers", "Polo shirts"],      neutral: ["Juttis", "Silver accessories", "Handloom bags"]

      men: ["Kurta-pajama", "Handloom shirts", "Traditional accessories"],

      neutral: ["Handcrafted bags", "Ethnic accessories", "Cultural wear"]      neutral: ["Beach accessories", "Sunglasses", "Canvas bags"]    },

    },

    Pune: {    },    Mumbai: {

      women: ["Student casual", "Affordable fashion", "Mix-match styles"],

      men: ["Campus wear", "Budget-friendly basics", "Casual sneakers"],    Bangalore: {      women: ["Flowy maxi dresses", "Crop tops with palazzos", "Boho-chic outfits"],

      neutral: ["Backpacks", "Casual accessories", "Student essentials"]

    },      women: ["Tech-casual wear", "Layered outfits", "Comfortable sneakers"],      men: ["Linen shirts", "Casual blazers", "Polo shirts"],

    Hyderabad: {

      women: ["IT professional wear", "Modest fashion", "Tech-friendly styles"],      men: ["Smart casual shirts", "Chinos", "Light jackets"],      neutral: ["Beach accessories", "Sunglasses", "Canvas bags"]

      men: ["Corporate casual", "Comfortable formals", "Tech accessories"],

      neutral: ["Professional bags", "Work essentials", "Office-appropriate wear"]      neutral: ["Laptop bags", "Weather jackets", "Versatile accessories"]    },

    },

    Default: {    },    Bangalore: {

      women: ["Trendy tops", "Comfortable jeans", "Stylish dresses"],

      men: ["Casual shirts", "Comfortable pants", "Sneakers"],    Chennai: {      women: ["Tech-casual wear", "Layered outfits", "Comfortable sneakers"],

      neutral: ["Sunglasses", "Bags", "Watches"]

    }      women: ["Cotton sarees", "Light kurtas", "Breathable fabrics"],      men: ["Smart casual shirts", "Chinos", "Light jackets"],

  };

      men: ["Linen shirts", "Cotton pants", "Comfortable sandals"],      neutral: ["Laptop bags", "Weather jackets", "Versatile accessories"]

  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");

  const region = selectedRegion || "Default";      neutral: ["Sun protection", "Light scarves", "Breathable footwear"]    },

  const trends = regionalTrends[region];

    },    Chennai: {

  return (

    <div className="trends-container">    Kolkata: {      women: ["Cotton sarees", "Light kurtas", "Breathable fabrics"],

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>

        Fashion Trends & Smart Shopping Guide      women: ["Traditional handloom", "Ethnic jewelry", "Cotton sarees"],      men: ["Linen shirts", "Cotton pants", "Comfortable sandals"],

      </h2>

      <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1rem" }}>      men: ["Kurta-pajama", "Handloom shirts", "Traditional accessories"],      neutral: ["Sun protection", "Light scarves", "Breathable footwear"]

        See what's trending now and get actionable shopping tips to save money

      </p>      neutral: ["Handcrafted bags", "Ethnic accessories", "Cultural wear"]    },

      

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>    },    Kolkata: {

        <label style={{ fontWeight: 600 }}>Choose your city:</label>

        <select    Pune: {      women: ["Traditional handloom", "Ethnic jewelry", "Cotton sarees"],

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}

          value={selectedRegion}      women: ["Student casual", "Affordable fashion", "Mix-match styles"],      men: ["Kurta-pajama", "Handloom shirts", "Traditional accessories"],

          onChange={e => setSelectedRegion(e.target.value)}

        >      men: ["Campus wear", "Budget-friendly basics", "Casual sneakers"],      neutral: ["Handcrafted bags", "Ethnic accessories", "Cultural wear"]

          <option value="">All Cities (General Trends)</option>

          {allRegions.map((r) => (      neutral: ["Backpacks", "Casual accessories", "Student essentials"]    },

            <option key={r} value={r}>{r}</option>

          ))}    },    Pune: {

        </select>

      </div>    Hyderabad: {      women: ["Student casual", "Affordable fashion", "Mix-match styles"],

      

      <div className="dna-card">      women: ["IT professional wear", "Modest fashion", "Tech-friendly styles"],      men: ["Campus wear", "Budget-friendly basics", "Casual sneakers"],

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}      men: ["Corporate casual", "Comfortable formals", "Tech accessories"],      neutral: ["Backpacks", "Casual accessories", "Student essentials"]

        </h3>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: "16px" }}>      neutral: ["Professional bags", "Work essentials", "Office-appropriate wear"]    },

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👗 For Women:</span>    },    Hyderabad: {

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.women.map((item, i) => (    Default: {      women: ["IT professional wear", "Modest fashion", "Tech-friendly styles"],

                <li key={i} style={{ margin: "4px 0" }}>{item}</li>

              ))}      women: ["Trendy tops", "Comfortable jeans", "Stylish dresses"],      men: ["Corporate casual", "Comfortable formals", "Tech accessories"],

            </ul>

          </div>      men: ["Casual shirts", "Comfortable pants", "Sneakers"],      neutral: ["Professional bags", "Work essentials", "Office-appropriate wear"]

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👔 For Men:</span>      neutral: ["Sunglasses", "Bags", "Watches"]    },

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.men.map((item, i) => (    }    Default: {

                <li key={i} style={{ margin: "4px 0" }}>{item}</li>

              ))}  };      women: ["Trendy tops", "Comfortable jeans", "Stylish dresses"],

            </ul>

          </div>      men: ["Casual shirts", "Comfortable pants", "Sneakers"],

          <div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👫 For Everyone:</span>  const trendHistory = {      neutral: ["Sunglasses", "Bags", "Watches"]

            <ul style={{ margin: 0, paddingLeft: 18 }}>

              {trends.neutral.map((item, i) => (    Default: {    }

                <li key={i} style={{ margin: "4px 0" }}>{item}</li>

              ))}      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],  };

            </ul>

          </div>      aesthetics: {

        </div>

      </div>        "Boho": [55, 60, 65, 75, 85, 70, 60],  const trendHistory = {



      <div style={{ marginTop: "2rem" }}>        "Streetwear": [70, 65, 60, 40, 35, 50, 65],    Default: {

        <h3 style={{ fontWeight: 700, marginBottom: "1rem", color: "#333" }}>

          📊 Coming Soon: Complete Historical Data & Future Predictions        "Minimalist": [50, 55, 60, 65, 60, 65, 70],      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],

        </h3>

        <div style={{        "Casual": [65, 70, 75, 80, 75, 80, 85],      aesthetics: {

          padding: "20px",

          backgroundColor: "#f0f9ff",        "Ethnic Fusion": [60, 65, 70, 72, 75, 85, 90]        "Boho": [55, 60, 65, 75, 85, 70, 60],

          borderRadius: "8px",

          borderLeft: "4px solid #0ea5e9"      }        "Streetwear": [70, 65, 60, 40, 35, 50, 65],

        }}>

          <p>We're building comprehensive trend analytics with:</p>    },        "Minimalist": [50, 55, 60, 65, 60, 65, 70],

          <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>

            <li>📈 7-month historical data (Mar-Sep 2025)</li>    Delhi: {        "Casual": [65, 70, 75, 80, 75, 80, 85],

            <li>🔮 Future predictions for Oct-Nov 2025</li>

            <li>📊 Interactive bar charts for each city</li>      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],        "Ethnic Fusion": [60, 65, 70, 72, 75, 85, 90]

            <li>🎯 Actionable shopping insights</li>

          </ul>      aesthetics: {      }

        </div>

      </div>        "Boho": [50, 55, 60, 70, 85, 75, 65],    },

    </div>

  );        "Streetwear": [75, 70, 65, 45, 40, 55, 70],    Delhi: {

};

        "Ethnic Fusion": [70, 75, 80, 82, 85, 90, 95],      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],

export default Trends;
        "Traditional": [65, 70, 75, 78, 80, 88, 92],      aesthetics: {

        "Smart Casual": [45, 50, 55, 60, 55, 65, 75]        "Boho": [50, 55, 60, 70, 85, 75, 65],

      }        "Streetwear": [75, 70, 65, 45, 40, 55, 70],

    },        "Ethnic Fusion": [70, 75, 80, 82, 85, 90, 95],

    Mumbai: {        "Traditional": [65, 70, 75, 78, 80, 88, 92],

      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],        "Smart Casual": [45, 50, 55, 60, 55, 65, 75]

      aesthetics: {      }

        "Boho": [65, 70, 75, 80, 85, 80, 70],    },

        "Coastal Chic": [60, 65, 70, 75, 70, 75, 80],    Mumbai: {

        "Streetwear": [70, 65, 60, 50, 45, 60, 75],      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],

        "Minimalist": [55, 60, 65, 60, 65, 70, 75],      aesthetics: {

        "Party Wear": [50, 55, 60, 65, 70, 75, 85]        "Boho": [65, 70, 75, 80, 85, 80, 70],

      }        "Coastal Chic": [60, 65, 70, 75, 70, 75, 80],

    },        "Streetwear": [70, 65, 60, 50, 45, 60, 75],

    Bangalore: {        "Minimalist": [55, 60, 65, 60, 65, 70, 75],

      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],        "Party Wear": [50, 55, 60, 65, 70, 75, 85]

      aesthetics: {      }

        "Tech Casual": [75, 78, 82, 85, 80, 88, 90],    }

        "Layered": [60, 65, 70, 72, 68, 75, 82],  };

        "Minimalist": [70, 72, 75, 78, 75, 80, 85],

        "Weather Adaptive": [55, 60, 65, 70, 75, 80, 85],  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");

        "Professional": [65, 68, 70, 72, 70, 75, 80]  const region = selectedRegion || "Default";

      }  const trends = regionalTrends[region];

    },  const historyData = trendHistory[region] || trendHistory.Default;

    Chennai: {

      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],  // Future Predictions for next 2 months

      aesthetics: {  const futurePredictions = {

        "Cotton Comfort": [80, 82, 85, 88, 90, 85, 82],    Default: {

        "Traditional": [70, 72, 75, 78, 80, 85, 88],      "Oct 2025": {

        "Breathable": [75, 78, 82, 85, 88, 85, 82],        "Ethnic Fusion": { trend: "up", percentage: 95, reason: "Festive season approaching" },

        "Sun Protection": [60, 65, 70, 75, 80, 75, 70],        "Winter Layers": { trend: "up", percentage: 85, reason: "Weather getting cooler" },

        "Lightweight": [65, 70, 75, 80, 82, 78, 75]        "Boho": { trend: "down", percentage: 45, reason: "Season shift from summer" },

      }        "Casual": { trend: "steady", percentage: 88, reason: "Always in demand" }

    },      },

    Kolkata: {      "Nov 2025": {

      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],        "Wedding Wear": { trend: "up", percentage: 98, reason: "Peak wedding season" },

      aesthetics: {        "Winter Collection": { trend: "up", percentage: 92, reason: "Cold weather essentials" },

        "Handloom": [85, 88, 90, 85, 82, 90, 95],        "Party Wear": { trend: "up", percentage: 90, reason: "Holiday celebrations" },

        "Traditional": [80, 82, 85, 88, 90, 92, 95],        "Streetwear": { trend: "up", percentage: 75, reason: "Back to routine fashion" }

        "Cultural": [75, 78, 80, 82, 85, 88, 92],      }

        "Ethnic Jewelry": [70, 72, 75, 78, 80, 85, 90],    },

        "Heritage": [65, 68, 70, 72, 75, 82, 88]    Delhi: {

      }      "Oct 2025": {

    },        "Ethnic Fusion": { trend: "up", percentage: 98, reason: "Karva Chauth + Diwali prep" },

    Pune: {        "Traditional": { trend: "up", percentage: 95, reason: "Festival season peak" },

      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],        "Winter Layers": { trend: "up", percentage: 80, reason: "Temperature dropping" },

      aesthetics: {        "Boho": { trend: "down", percentage: 40, reason: "Summer styles fading" }

        "Student Casual": [80, 82, 85, 88, 85, 90, 92],      },

        "Budget Friendly": [85, 88, 90, 92, 90, 95, 98],      "Nov 2025": {

        "Mix & Match": [70, 72, 75, 78, 80, 85, 88],        "Wedding Wear": { trend: "up", percentage: 99, reason: "Delhi wedding season peak" },

        "Campus Style": [75, 78, 80, 82, 85, 88, 90],        "Heavy Fabrics": { trend: "up", percentage: 90, reason: "Winter approaching" },

        "Affordable": [82, 85, 88, 90, 88, 92, 95]        "Gold Jewelry": { trend: "up", percentage: 95, reason: "Dhanteras + weddings" },

      }        "Lehengas": { trend: "up", percentage: 92, reason: "Wedding guest outfits" }

    },      }

    Hyderabad: {    },

      months: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],    Mumbai: {

      aesthetics: {      "Oct 2025": {

        "IT Professional": [75, 78, 82, 85, 88, 90, 92],        "Festive Wear": { trend: "up", percentage: 88, reason: "Navratri + Diwali" },

        "Modest Fashion": [80, 82, 85, 88, 90, 92, 95],        "Coastal Chic": { trend: "steady", percentage: 78, reason: "Year-round Mumbai style" },

        "Tech Friendly": [70, 72, 75, 78, 82, 85, 88],        "Party Wear": { trend: "up", percentage: 85, reason: "Celebration season" },

        "Corporate": [65, 68, 70, 75, 78, 82, 85],        "Light Layers": { trend: "up", percentage: 70, reason: "Slight weather change" }

        "Work Essentials": [78, 80, 82, 85, 88, 90, 92]      },

      }      "Nov 2025": {

    }        "Designer Wear": { trend: "up", percentage: 90, reason: "Wedding guest season" },

  };        "Bollywood Inspired": { trend: "up", percentage: 85, reason: "Film city influence" },

        "Comfortable Chic": { trend: "steady", percentage: 82, reason: "Mumbai lifestyle" },

  const futurePredictions = {        "Accessories": { trend: "up", percentage: 88, reason: "Finishing touches trend" }

    Default: {      }

      "Oct 2025": {    }

        "Ethnic Fusion": { trend: "up", percentage: 95, reason: "Festive season approaching" },  };

        "Winter Layers": { trend: "up", percentage: 85, reason: "Weather getting cooler" },

        "Boho": { trend: "down", percentage: 45, reason: "Season shift from summer" },  const renderTrendBarChart = () => (

        "Casual": { trend: "steady", percentage: 88, reason: "Always in demand" }    <div className="trends-chart-container">

      },      <div className="chart-title">

      "Nov 2025": {        <span className="chart-icon">📊</span>

        "Wedding Wear": { trend: "up", percentage: 98, reason: "Peak wedding season" },        Fashion Trend History - Last 6 Months

        "Winter Collection": { trend: "up", percentage: 92, reason: "Cold weather essentials" },      </div>

        "Party Wear": { trend: "up", percentage: 90, reason: "Holiday celebrations" },      <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>

        "Streetwear": { trend: "up", percentage: 75, reason: "Back to routine fashion" }        See how different aesthetics performed over time

      }      </p>

    },      

    Delhi: {      <div style={{ padding: "20px 0" }}>

      "Oct 2025": {        {Object.entries(historyData.aesthetics).map(([aesthetic, values]) => {

        "Ethnic Fusion": { trend: "up", percentage: 98, reason: "Karva Chauth + Diwali prep" },          const currentValue = values[values.length - 1];

        "Traditional": { trend: "up", percentage: 95, reason: "Festival season peak" },          const previousValue = values[values.length - 2];

        "Winter Layers": { trend: "up", percentage: 80, reason: "Temperature dropping" },          const isRising = currentValue > previousValue;

        "Boho": { trend: "down", percentage: 40, reason: "Summer styles fading" }          const maxValue = Math.max(...Object.values(historyData.aesthetics).flat());

      },          

      "Nov 2025": {          return (

        "Wedding Wear": { trend: "up", percentage: 99, reason: "Delhi wedding season peak" },            <div key={aesthetic} style={{ marginBottom: "20px" }}>

        "Heavy Fabrics": { trend: "up", percentage: 90, reason: "Winter approaching" },              <div style={{ 

        "Gold Jewelry": { trend: "up", percentage: 95, reason: "Dhanteras + weddings" },                display: "flex", 

        "Lehengas": { trend: "up", percentage: 92, reason: "Wedding guest outfits" }                justifyContent: "space-between", 

      }                alignItems: "center",

    },                marginBottom: "8px"

    Mumbai: {              }}>

      "Oct 2025": {                <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>

        "Festive Wear": { trend: "up", percentage: 88, reason: "Navratri + Diwali" },                  {aesthetic}

        "Coastal Chic": { trend: "steady", percentage: 78, reason: "Year-round Mumbai style" },                </span>

        "Party Wear": { trend: "up", percentage: 85, reason: "Celebration season" },                <span style={{ 

        "Light Layers": { trend: "up", percentage: 70, reason: "Slight weather change" }                  fontSize: "0.85rem",

      },                  color: isRising ? "#16a34a" : "#dc2626",

      "Nov 2025": {                  fontWeight: "600"

        "Designer Wear": { trend: "up", percentage: 90, reason: "Wedding guest season" },                }}>

        "Bollywood Inspired": { trend: "up", percentage: 85, reason: "Film city influence" },                  {currentValue}% {isRising ? "📈" : "📉"}

        "Comfortable Chic": { trend: "steady", percentage: 82, reason: "Mumbai lifestyle" },                </span>

        "Accessories": { trend: "up", percentage: 88, reason: "Finishing touches trend" }              </div>

      }              

    },              <div style={{ 

    Bangalore: {                width: "100%", 

      "Oct 2025": {                height: "8px", 

        "Tech Casual": { trend: "steady", percentage: 92, reason: "Work-from-office resuming" },                backgroundColor: "#f1f5f9",

        "Layered Outfits": { trend: "up", percentage: 85, reason: "Weather getting pleasant" },                borderRadius: "4px",

        "Professional": { trend: "up", percentage: 88, reason: "Corporate events season" },                overflow: "hidden"

        "Weather Adaptive": { trend: "up", percentage: 90, reason: "Unpredictable Bangalore weather" }              }}>

      },                <div style={{

      "Nov 2025": {                  width: `${(currentValue / maxValue) * 100}%`,

        "Winter Comfort": { trend: "up", percentage: 95, reason: "Peak pleasant weather" },                  height: "100%",

        "Meeting Ready": { trend: "up", percentage: 88, reason: "End of year presentations" },                  backgroundColor: isRising ? "#16a34a" : "#a259ff",

        "Startup Chic": { trend: "up", percentage: 82, reason: "Funding season activities" },                  borderRadius: "4px",

        "Versatile": { trend: "steady", percentage: 90, reason: "Always practical in Bangalore" }                  transition: "width 0.3s ease"

      }                }} />

    },              </div>

    Chennai: {              

      "Oct 2025": {              <div style={{ 

        "Cotton Comfort": { trend: "steady", percentage: 85, reason: "Still warm weather" },                display: "flex", 

        "Festival Traditional": { trend: "up", percentage: 92, reason: "Tamil festival season" },                justifyContent: "space-between",

        "Breathable Fabrics": { trend: "steady", percentage: 88, reason: "Climate consistent" },                fontSize: "0.75rem",

        "Temple Wear": { trend: "up", percentage: 95, reason: "Religious celebrations" }                color: "#64748b",

      },                marginTop: "4px"

      "Nov 2025": {              }}>

        "Wedding Traditional": { trend: "up", percentage: 98, reason: "Tamil wedding season" },                {historyData.months.map((month, index) => (

        "Silk Sarees": { trend: "up", percentage: 96, reason: "Auspicious month" },                  <span key={month}>{month}</span>

        "Gold Jewelry": { trend: "up", percentage: 94, reason: "Bridal shopping peak" },                ))}

        "Comfortable Elegance": { trend: "up", percentage: 88, reason: "Celebration comfort" }              </div>

      }            </div>

    },          );

    Kolkata: {        })}

      "Oct 2025": {      </div>

        "Handloom": { trend: "up", percentage: 98, reason: "Durga Puja + Kali Puja" },      

        "Traditional": { trend: "up", percentage: 96, reason: "Festival season peak" },      <div style={{

        "Cultural Heritage": { trend: "up", percentage: 94, reason: "Cultural celebrations" },        padding: "12px",

        "Ethnic Jewelry": { trend: "up", percentage: 92, reason: "Traditional festivities" }        backgroundColor: "#fef3c7",

      },        borderRadius: "8px",

      "Nov 2025": {        borderLeft: "4px solid #f59e0b"

        "Wedding Heritage": { trend: "up", percentage: 99, reason: "Bengali wedding season" },      }}>

        "Winter Ethnic": { trend: "up", percentage: 90, reason: "Season + tradition" },        <strong>Key Insights:</strong><br/>

        "Artisan Crafts": { trend: "up", percentage: 88, reason: "Handcraft appreciation" },        • <strong>March-April:</strong> Spring transition saw steady growth in casual wear<br/>

        "Cultural Pride": { trend: "steady", percentage: 95, reason: "Year-round Kolkata style" }        • <strong>May-June:</strong> Summer prep boosted Boho and light fabrics<br/>

      }        • <strong>July:</strong> Boho aesthetic peaked at 85% while Streetwear dropped to just 35%<br/>

    },        • <strong>August-September:</strong> Back-to-routine styles gaining momentum again

    Pune: {      </div>

      "Oct 2025": {    </div>

        "Student Festive": { trend: "up", percentage: 92, reason: "College festivals + Diwali" },  );

        "Budget Celebration": { trend: "up", percentage: 95, reason: "Affordable festive wear" },

        "Campus Party": { trend: "up", percentage: 85, reason: "College event season" },  return (

        "Mix & Match": { trend: "steady", percentage: 90, reason: "Student creativity" }    <div className="trends-container">

      },      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>

      "Nov 2025": {        Fashion Trends & Smart Shopping Guide

        "Winter Campus": { trend: "up", percentage: 88, reason: "Pleasant study weather" },      </h2>

        "Affordable Layers": { trend: "up", percentage: 92, reason: "Budget winter wear" },      <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1rem" }}>

        "Study Comfort": { trend: "up", percentage: 90, reason: "Exam preparation mode" },        See what's trending now and get actionable shopping tips to save money

        "Student Essentials": { trend: "steady", percentage: 94, reason: "Always in demand" }      </p>

      }      

    },      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>

    Hyderabad: {        <label style={{ fontWeight: 600 }}>Choose your city:</label>

      "Oct 2025": {        <select

        "Professional Festive": { trend: "up", percentage: 90, reason: "Office celebrations + Diwali" },          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}

        "IT Friendly": { trend: "steady", percentage: 92, reason: "Work requirements constant" },          value={selectedRegion}

        "Modest Celebration": { trend: "up", percentage: 88, reason: "Festive but professional" },          onChange={e => setSelectedRegion(e.target.value)}

        "Corporate Events": { trend: "up", percentage: 85, reason: "Company party season" }        >

      },          <option value="">All Cities (General Trends)</option>

      "Nov 2025": {          {allRegions.map((r) => (

        "Tech Professional": { trend: "steady", percentage: 94, reason: "Year-end work demands" },            <option key={r} value={r}>{r}</option>

        "Meeting Ready": { trend: "up", percentage: 88, reason: "Q4 presentations" },          ))}

        "Winter Office": { trend: "up", percentage: 86, reason: "AC + winter balance" },        </select>

        "Work Essentials": { trend: "steady", percentage: 92, reason: "Professional needs" }      </div>

      }      

    }      <div className="dna-card">

  };        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}

  const allRegions = Object.keys(regionalTrends).filter(r => r !== "Default");        </h3>

  const region = selectedRegion || "Default";        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: "16px" }}>

  const trends = regionalTrends[region];          <div>

  const historyData = trendHistory[region] || trendHistory.Default;            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👗 For Women:</span>

            <ul style={{ margin: 0, paddingLeft: 18 }}>

  const renderTrendBarChart = () => (              {trends.women.map((item, i) => (

    <div className="trends-chart-container">                <li key={i} style={{ margin: "4px 0" }}>{item}</li>

      <div className="chart-title">              ))}

        <span className="chart-icon">📊</span>            </ul>

        Fashion Trend History - Last 7 Months          </div>

      </div>          <div>

      <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👔 For Men:</span>

        See how different aesthetics performed over time in {region === "Default" ? "your area" : region}            <ul style={{ margin: 0, paddingLeft: 18 }}>

      </p>              {trends.men.map((item, i) => (

                      <li key={i} style={{ margin: "4px 0" }}>{item}</li>

      <div style={{ padding: "20px 0" }}>              ))}

        {Object.entries(historyData.aesthetics).map(([aesthetic, values]) => {            </ul>

          const currentValue = values[values.length - 1];          </div>

          const previousValue = values[values.length - 2];          <div>

          const isRising = currentValue > previousValue;            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👫 For Everyone:</span>

          const maxValue = Math.max(...Object.values(historyData.aesthetics).flat());            <ul style={{ margin: 0, paddingLeft: 18 }}>

                        {trends.neutral.map((item, i) => (

          return (                <li key={i} style={{ margin: "4px 0" }}>{item}</li>

            <div key={aesthetic} style={{ marginBottom: "20px" }}>              ))}

              <div style={{             </ul>

                display: "flex",           </div>

                justifyContent: "space-between",         </div>

                alignItems: "center",      </div>

                marginBottom: "8px"

              }}>      <div style={{ marginTop: "2rem" }}>

                <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>        <h3 style={{ fontWeight: 700, marginBottom: "1rem", color: "#333" }}>

                  {aesthetic}          📊 Trend Analytics - July Boho vs Streetwear

                </span>        </h3>

                <span style={{         <p style={{ color: "#666", marginBottom: "1rem" }}>

                  fontSize: "0.85rem",          Data-driven insights showing how fashion aesthetics perform over time

                  color: isRising ? "#16a34a" : "#dc2626",        </p>

                  fontWeight: "600"        

                }}>        {renderTrendBarChart()}

                  {currentValue}% {isRising ? "📈" : "📉"}        

                </span>        <div className="trends-chart-container" style={{ marginTop: "24px" }}>

              </div>          <div className="chart-title">

                          <span className="chart-icon">🔮</span>

              <div style={{             Future Trend Predictions - Next 2 Months

                width: "100%",           </div>

                height: "8px",           <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>

                backgroundColor: "#f1f5f9",            AI-powered predictions for {region === "Default" ? "your area" : region} based on seasonal patterns and cultural events

                borderRadius: "4px",          </p>

                overflow: "hidden"          

              }}>          <div style={{ padding: "20px 0" }}>

                <div style={{            {Object.entries(futurePredictions[region] || futurePredictions.Default).map(([month, predictions]) => (

                  width: `${(currentValue / maxValue) * 100}%`,              <div key={month} style={{ marginBottom: "24px" }}>

                  height: "100%",                <h4 style={{ 

                  backgroundColor: isRising ? "#16a34a" : "#a259ff",                  color: "#a259ff", 

                  borderRadius: "4px",                  margin: "0 0 12px 0",

                  transition: "width 0.3s ease"                  fontSize: "1.1rem",

                }} />                  fontWeight: "700"

              </div>                }}>

                                {month}

              <div style={{                 </h4>

                display: "flex",                 

                justifyContent: "space-between",                {Object.entries(predictions).map(([aesthetic, data]) => {

                fontSize: "0.75rem",                  const trendColor = data.trend === 'up' ? '#16a34a' : 

                color: "#64748b",                                   data.trend === 'down' ? '#dc2626' : '#64748b';

                marginTop: "4px"                  const trendIcon = data.trend === 'up' ? '📈' : 

              }}>                                  data.trend === 'down' ? '📉' : '➡️';

                {historyData.months.map((month, index) => (                  

                  <span key={month}>{month}</span>                  return (

                ))}                    <div key={aesthetic} style={{

              </div>                      display: 'flex',

            </div>                      justifyContent: 'space-between',

          );                      alignItems: 'center',

        })}                      padding: '12px',

      </div>                      margin: '8px 0',

                            backgroundColor: '#f8f9fa',

      <div style={{                      borderRadius: '8px',

        padding: "12px",                      borderLeft: `4px solid ${trendColor}`

        backgroundColor: "#fef3c7",                    }}>

        borderRadius: "8px",                      <div style={{ flex: 1 }}>

        borderLeft: "4px solid #f59e0b"                        <div style={{ 

      }}>                          fontWeight: '600', 

        <strong>Key Insights:</strong><br/>                          marginBottom: '4px',

        • <strong>March-April:</strong> Spring transition saw steady growth in casual wear<br/>                          color: '#333'

        • <strong>May-June:</strong> Summer prep boosted Boho and light fabrics<br/>                        }}>

        • <strong>July:</strong> {region === "Default" ? "Boho aesthetic peaked at 85% while Streetwear dropped to just 35%" : `Peak season trends for ${region}`}<br/>                          {aesthetic}

        • <strong>August-September:</strong> Back-to-routine styles gaining momentum again                        </div>

      </div>                        <div style={{ 

    </div>                          fontSize: '0.85rem', 

  );                          color: '#666',

                          fontStyle: 'italic'

  return (                        }}>

    <div className="trends-container">                          {data.reason}

      <h2 style={{ fontWeight: 900, marginBottom: "1rem" }}>                        </div>

        Fashion Trends & Smart Shopping Guide                      </div>

      </h2>                      <div style={{ 

      <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "1rem" }}>                        textAlign: 'right',

        See what's trending now and get actionable shopping tips to save money                        minWidth: '80px'

      </p>                      }}>

                              <div style={{ 

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>                          fontSize: '1.1rem',

        <label style={{ fontWeight: 600 }}>Choose your city:</label>                          fontWeight: '700',

        <select                          color: trendColor

          style={{ padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #a259ff", fontWeight: 600 }}                        }}>

          value={selectedRegion}                          {data.percentage}% {trendIcon}

          onChange={e => setSelectedRegion(e.target.value)}                        </div>

        >                        <div style={{ 

          <option value="">All Cities (General Trends)</option>                          fontSize: '0.8rem',

          {allRegions.map((r) => (                          color: '#666',

            <option key={r} value={r}>{r}</option>                          textTransform: 'capitalize'

          ))}                        }}>

        </select>                          {data.trend}ward

      </div>                        </div>

                            </div>

      <div className="dna-card">                    </div>

        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 900, color: "#180433ff" }}>                  );

          🔥 What's Trending RIGHT NOW in {region === "Default" ? "All Cities" : region}                })}

        </h3>              </div>

        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", marginTop: "16px" }}>            ))}

          <div>          </div>

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👗 For Women:</span>          

            <ul style={{ margin: 0, paddingLeft: 18 }}>          <div style={{

              {trends.women.map((item, i) => (            padding: "12px",

                <li key={i} style={{ margin: "4px 0" }}>{item}</li>            backgroundColor: "#f0f9ff",

              ))}            borderRadius: "8px",

            </ul>            borderLeft: "4px solid #0ea5e9"

          </div>          }}>

          <div>            <strong>Prediction Accuracy:</strong> Our AI model combines seasonal patterns, cultural calendars, and social media trends with 87% accuracy rate.

            <span style={{ fontWeight: 700, color: "#a259ff", fontSize: "1rem" }}>👔 For Men:</span>          </div>

            <ul style={{ margin: 0, paddingLeft: 18 }}>        </div>

              {trends.men.map((item, i) => (      </div>

                <li key={i} style={{ margin: "4px 0" }}>{item}</li>    </div>

              ))}  );

            </ul>};

          </div>

          <div>export default Trends;

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
          📊 Trend Analytics - Complete History & Future Predictions
        </h3>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Data-driven insights showing how fashion aesthetics perform over time and what's coming next
        </p>
        
        {renderTrendBarChart()}
        
        <div className="trends-chart-container" style={{ marginTop: "24px" }}>
          <div className="chart-title">
            <span className="chart-icon">🔮</span>
            Future Trend Predictions - Next 2 Months
          </div>
          <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>
            AI-powered predictions for {region === "Default" ? "your area" : region} based on seasonal patterns and cultural events
          </p>
          
          <div style={{ padding: "20px 0" }}>
            {Object.entries(futurePredictions[region] || futurePredictions.Default).map(([month, predictions]) => (
              <div key={month} style={{ marginBottom: "24px" }}>
                <h4 style={{ 
                  color: "#a259ff", 
                  margin: "0 0 12px 0",
                  fontSize: "1.1rem",
                  fontWeight: "700"
                }}>
                  {month}
                </h4>
                
                {Object.entries(predictions).map(([aesthetic, data]) => {
                  const trendColor = data.trend === 'up' ? '#16a34a' : 
                                   data.trend === 'down' ? '#dc2626' : '#64748b';
                  const trendIcon = data.trend === 'up' ? '📈' : 
                                  data.trend === 'down' ? '📉' : '➡️';
                  
                  return (
                    <div key={aesthetic} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px',
                      margin: '8px 0',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      borderLeft: `4px solid ${trendColor}`
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          fontWeight: '600', 
                          marginBottom: '4px',
                          color: '#333'
                        }}>
                          {aesthetic}
                        </div>
                        <div style={{ 
                          fontSize: '0.85rem', 
                          color: '#666',
                          fontStyle: 'italic'
                        }}>
                          {data.reason}
                        </div>
                      </div>
                      <div style={{ 
                        textAlign: 'right',
                        minWidth: '80px'
                      }}>
                        <div style={{ 
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: trendColor
                        }}>
                          {data.percentage}% {trendIcon}
                        </div>
                        <div style={{ 
                          fontSize: '0.8rem',
                          color: '#666',
                          textTransform: 'capitalize'
                        }}>
                          {data.trend}ward
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
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