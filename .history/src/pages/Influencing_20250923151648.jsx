import React, { useState, useEffect, useRef } from "react";
import "./Influencing.css";
import { moreMockPosts } from "./moreMockPosts";
import { mockComments } from "./mockComments";
import InfluencerProfile from "./InfluencerProfile";
import { getInfluencerProfile } from "../data/influencers";

import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";

import { products } from "../data/products";
// Wishlist state: store product ids user has added
// (local state only, not persisted)

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
  // Local state for new comments per post
  const [commentInputs, setCommentInputs] = useState({});
  const [userComments, setUserComments] = useState({}); // { [postId]: [ { username, text } ] }
  const [wishlist, setWishlist] = useState([]); // array of product ids
  // Influencer profile modal state
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

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
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== id) return post;
        const liked = !!likedPosts[id];
        return {
          ...post,
          likes: liked ? Math.max(0, post.likes - 1) : post.likes + 1,
        };
      })
    );
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
    // DNA Quest Progression Logic (only increment on like)
    if (!likedPosts[id]) {
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
                <img 
                  src={post.avatar || "https://randomuser.me/api/portraits/lego/2.jpg"} 
                  alt={post.username} 
                  className="shorts-avatar"
                  onClick={() => setSelectedInfluencer(getInfluencerProfile(post.username))}
                  style={{ cursor: 'pointer' }}
                />
                <span 
                  className="shorts-username"
                  onClick={() => setSelectedInfluencer(getInfluencerProfile(post.username))}
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  {post.username}
                </span>
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
                    if (!prod) return null;
                    const inWishlist = wishlist.includes(pid);
                    return (
                      <span key={pid} style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
                        <a
                          href={"/"}
                          className="shorts-product-link"
                          style={{ marginRight: 4 }}
                          title={prod.name}
                        >
                          <img src={prod.image_url} alt={prod.name} style={{ width: 32, height: 32, borderRadius: 6, verticalAlign: "middle", marginRight: 4 }} />
                          {prod.name}
                        </a>
                        <button
                          onClick={() => {
                            if (!inWishlist) setWishlist(wl => [...wl, pid]);
                          }}
                          style={{
                            fontSize: "0.95rem",
                            padding: "2px 8px",
                            borderRadius: 4,
                            border: inWishlist ? "1.5px solid #ff69b4" : "1px solid #aaa",
                            background: inWishlist ? "#ffe4f3" : "#fff",
                            color: inWishlist ? "#ff69b4" : "#a259ff",
                            marginLeft: 2,
                            cursor: inWishlist ? "not-allowed" : "pointer",
                            opacity: inWishlist ? 0.7 : 1,
                            transition: "all 0.2s"
                          }}
                          disabled={inWishlist}
                          title={inWishlist ? "Added to wishlist" : "Add to wishlist"}
                        >
                          {inWishlist ? "✓ In Wishlist" : "♡ Add to Wishlist"}
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
              {/* Comments */}
              <div className="shorts-comments">
                <span style={{ fontWeight: 600 }}>Comments:</span>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {[
                    ...(mockComments[post.id] || []),
                    ...(userComments[post.id] || [])
                  ].map((c, i) => (
                    <li key={i} style={{ fontSize: "0.97rem", margin: "2px 0" }}>
                      <span style={{ color: "#a259ff", fontWeight: 500 }}>{c.username}:</span> {c.text}
                    </li>
                  ))}
                </ul>
                <form
                  style={{ marginTop: 8, display: "flex", gap: 4 }}
                  onSubmit={e => {
                    e.preventDefault();
                    const val = (commentInputs[post.id] || "").trim();
                    if (!val) return;
                    setUserComments(prev => ({
                      ...prev,
                      [post.id]: [...(prev[post.id] || []), { username: "@you", text: val }]
                    }));
                    setCommentInputs(prev => ({ ...prev, [post.id]: "" }));
                  }}
                >
                  <input
                    type="text"
                    value={commentInputs[post.id] || ""}
                    onChange={e => setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                    placeholder="Add a comment..."
                    style={{ flex: 1, fontSize: "0.97rem", padding: "2px 6px", borderRadius: 4, border: "1px solid #ccc" }}
                  />
                  <button type="submit" style={{ fontSize: "0.97rem", padding: "2px 10px", borderRadius: 4, background: "#a259ff", color: "#fff", border: "none" }}>
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Influencing;
