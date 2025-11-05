import React, { useState, useEffect } from "react";
import "./AvatarCloset.css";
import { products } from "../data/products";

// Simple SVG avatar base with layers for shoes, heels, dress, top, jacket
const AvatarSVG = ({ wornItems }) => {
  return (
    <svg width="160" height="260" viewBox="0 0 160 260">
      {/* Body */}
      <ellipse cx="80" cy="120" rx="40" ry="70" fill="#ffe0b2" />
      {/* Head */}
      <circle cx="80" cy="55" r="35" fill="#ffe0b2" stroke="#d1a87c" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="68" cy="60" rx="5" ry="7" fill="#333" />
      <ellipse cx="92" cy="60" rx="5" ry="7" fill="#333" />
      {/* Smile */}
      <path d="M70 80 Q80 90 90 80" stroke="#b77b3b" strokeWidth="3" fill="none" />
      {/* Dress (if any) */}
      {wornItems["maxi dress"] && (
        <image
          href={wornItems["maxi dress"].image_url}
          x="40"
          y="120"
          width="80"
          height="90"
        />
      )}
      {/* Top (if any) */}
      {wornItems["crop top"] && (
        <image
          href={wornItems["crop top"].image_url}
          x="50"
          y="110"
          width="60"
          height="40"
        />
      )}
      {/* Jacket (if any) */}
      {wornItems["denim jacket"] && (
        <image
          href={wornItems["denim jacket"].image_url}
          x="45"
          y="100"
          width="70"
          height="60"
        />
      )}
      {/* Heels (if any) */}
      {wornItems["heels"] && (
        <image
          href={wornItems["heels"].image_url}
          x="55"
          y="200"
          width="50"
          height="30"
        />
      )}
      {/* Shoes (if any) */}
      {wornItems["shoes"] && (
        <image
          href={wornItems["shoes"].image_url}
          x="55"
          y="200"
          width="50"
          height="30"
        />
      )}
    </svg>
  );
};

const wardrobeTypes = [
  "shoes", "heels", "maxi dress", "crop top", "denim jacket", "blazer", "t-shirt", "tracksuit", "gown", "shirt"
];

const AvatarCloset = () => {
  const [closet, setCloset] = useState({});
  const [worn, setWorn] = useState({});

  // Load closet from localStorage (simulate purchases)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const purchased = (user?.orders || [])
      .map((order) => products.find((p) => p.id === order.id))
      .filter(Boolean);
    // Group by type
    const closetObj = {};
    wardrobeTypes.forEach((type) => {
      closetObj[type] = purchased.filter((item) => item.type === type);
    });
    setCloset(closetObj);
    // Auto-wear the first of each type if any
    const wornObj = {};
    wardrobeTypes.forEach((type) => {
      if (closetObj[type] && closetObj[type][0]) wornObj[type] = closetObj[type][0];
    });
    setWorn(wornObj);
  }, []);

  return (
    <div className="avatar-closet-container">
      <h2>Your Avatar & Wardrobe</h2>
      <div className="avatar-closet-flex">
        <div className="avatar-svg-wrap">
          <AvatarSVG wornItems={worn} />
        </div>
        <div className="closet-list">
          {wardrobeTypes.map((type) => (
            <div key={type} style={{ marginBottom: 18 }}>
              <h4 style={{ textTransform: "capitalize", marginBottom: 6 }}>{type.replace(/_/g, " ")}</h4>
              {closet[type] && closet[type].length > 0 ? (
                closet[type].map((item) => (
                  <div
                    key={item.id}
                    className={`closet-item${worn[type]?.id === item.id ? " worn" : ""}`}
                    onClick={() => setWorn((prev) => ({ ...prev, [type]: item }))}
                  >
                    <img src={item.image_url} alt={item.name} width={40} height={28} />
                    <span>{item.name}</span>
                  </div>
                ))
              ) : (
                <div style={{ color: "#aaa" }}>No {type} purchased yet.</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarCloset;
