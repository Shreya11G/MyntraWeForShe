import React, { useState, useEffect, useRef } from "react";
import "./Influencing.css";
import { moreMockPosts } from "./moreMockPosts";
import { mockComments } from "./mockComments";

import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";

import { products } from "../data/products";

// Mock data for fashion-related posts
// Add a 'products' field to each post to link worn products (by id)
const mockPosts = [
  {
    id: 1,
    username: "@fashionista",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    mediaUrl: vid1,
    mediaType: "video",
    caption: "Streetwear vibes for the rainy season! #fashion #streetwear",
    likes: 12,
  // liked: false, // Remove liked property, not needed
    products: [1], // Boho Jacket
  },
  {
    id: 2,
    username: "@trendsetter",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    mediaUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    mediaType: "image",
    caption: "Monochrome chic. Would you wear this look? #chic #ootd",
    likes: 8,
    liked: false,
    products: [2], // Minimalist Top
  },
  {
    ...moreMockPosts[0],
    mediaUrl: vid2,
    mediaType: "video",
    products: [3], // DENIM X
  },
  {
    ...moreMockPosts[1],
    mediaUrl: vid3,
    mediaType: "video",
    products: [1], // Boho Jacket
  },
  {
    ...moreMockPosts[2],
    products: [4], // Vintage Maxi
  },
  {
    ...moreMockPosts[3],
    products: [2], // Minimalist Top
  },
  {
    ...moreMockPosts[4],
    mediaUrl: vid4,
    mediaType: "video",
    products: [5], // DENIM X (blazer)
  },
].map(post => ({ ...post, products: post.products || [] }));

import { useLocation } from "react-router-dom";

const Influencing = () => {
  const [posts, setPosts] = useState([...mockPosts]);
  // Track liked posts by id (true if liked, cannot unlike)
  const [likedPosts, setLikedPosts] = useState(() => ({}));
  const location = useLocation();

  const [newMedia, setNewMedia] = useState(null);
  const [newMediaType, setNewMediaType] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [newUsername, setNewUsername] = useState("@me");
  const [uploadError, setUploadError] = useState("");

  // Refs for each video
  const videoRefs = useRef([]);


  // Refresh posts when navigating to this tab
  useEffect(() => {
    setPosts([...mockPosts]);
  }, [location.pathname]);

  // Intersection Observer for autoplay
  useEffect(() => {
    const observers = [];
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        },
        { threshold: 0.7 }
      );
      observer.observe(video);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [posts]);

  const handleLike = (id) => {
    if (likedPosts[id]) return; // Only allow one like per user per post
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
    setLikedPosts((prev) => ({ ...prev, [id]: true }));
    // DNA Quest Progression Logic (unchanged)
    let quests = [];
    try {
      quests = JSON.parse(localStorage.getItem("dna_quests")) || [];
    } catch (e) {}
    let updated = false;
    for (let quest of quests) {
      if (
        quest.requirements &&
        quest.requirements.some(r => r.type === "like") &&
        quest.progress < quest.max_progress
      ) {
        quest.progress = Math.min(quest.progress + 1, quest.max_progress);
        updated = true;
        break;
      }
    }
    if (updated) {
      localStorage.setItem("dna_quests", JSON.stringify(quests));
      window.dispatchEvent(new Event("storage"));
    }
  };

  // Remove all upload/add-post logic. Only show static feed.
  return (
    <div className="influencing-feed">
      <h2>Influencing (Fashion Shorts)</h2>
      <div className="shorts-list">
        {posts.length === 0 && (
          <div style={{textAlign: 'center', color: '#888', fontSize: '1.2rem', margin: '2rem 0'}}>
            No posts to display.
          </div>
        )}
        {posts.map((post, idx) => (
          <div className="shorts-post shorts-post-row" key={post.id}>
            {/* Left: Video/Image */}
            <div className="shorts-media-col">
              <div className="shorts-header">
                <img src={post.avatar || "https://randomuser.me/api/portraits/lego/2.jpg"} alt={post.username} className="shorts-avatar" />
                <span className="shorts-username">{post.username}</span>
              </div>
              <div className="shorts-media">
                {post.mediaType === "video" ? (
                  <video
                    ref={el => (videoRefs.current[idx] = el)}
                    src={post.mediaUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
                    controls
                    loop
                    className="shorts-video"
                    muted
                    playsInline
                    onError={e => { e.target.src = "https://www.w3schools.com/html/mov_bbb.mp4"; }}
                  />
                ) : (
                  <img src={post.mediaUrl || "https://via.placeholder.com/200x300?text=No+Image"} alt="fashion post" className="shorts-image" onError={e => { e.target.src = "https://via.placeholder.com/200x300?text=No+Image"; }} />
                )}
              </div>
              <div className="shorts-caption">{post.caption}</div>
              <div className="shorts-actions">
                <button
                  className={`shorts-like${likedPosts[post.id] ? " liked" : ""}`}
                  onClick={() => handleLike(post.id)}
                  style={likedPosts[post.id] ? { color: '#ff69b4', borderColor: '#ff69b4' } : {}}
                  disabled={!!likedPosts[post.id]}
                >
                  ♥ {post.likes}
                </button>
              </div>
            </div>
            {/* Right: Products & Comments */}
            <div className="shorts-side-col">
              {/* Product links */}
              {post.products && post.products.length > 0 && (
                <div className="shorts-products">
                  <span style={{ fontWeight: 600 }}>Wearing: </span>
                  {post.products.map((pid, idx) => {
                    const prod = products.find((p) => p.id === pid);
                    return prod ? (
                      <a
                        key={pid}
                        href={"/"}
                        className="shorts-product-link"
                        style={{ marginRight: 8 }}
                        title={prod.name}
                      >
                        <img src={prod.image_url} alt={prod.name} style={{ width: 32, height: 32, borderRadius: 6, verticalAlign: "middle", marginRight: 4 }} />
                        {prod.name}
                      </a>
                    ) : null;
                  })}
                </div>
              )}
              {/* Comments */}
              <div className="shorts-comments">
                <span style={{ fontWeight: 600 }}>Comments:</span>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {(mockComments[post.id] || []).map((c, i) => (
                    <li key={i} style={{ fontSize: "0.97rem", margin: "2px 0" }}>
                      <span style={{ color: "#a259ff", fontWeight: 500 }}>{c.username}:</span> {c.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Influencing;
