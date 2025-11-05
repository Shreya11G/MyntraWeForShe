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
    liked: false,
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
];

const Influencing = () => {
  const [posts, setPosts] = useState([]);


  // Refs for each video
  const videoRefs = useRef([]);

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

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
      prev.map((post) =>
        post.id === id
          ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
          : post
      )
    );

    // --- DNA Quest Progression Logic ---
    // Get quests from localStorage
    let quests = [];
    try {
      quests = JSON.parse(localStorage.getItem("dna_quests")) || [];
    } catch (e) {}
    let updated = false;
    // Find a quest with type 'like' or 'social' and incomplete
    for (let quest of quests) {
      if ((quest.type === "like" || quest.type === "social") && quest.progress < quest.max_progress) {
        quest.progress = Math.min(quest.progress + 1, quest.max_progress);
        updated = true;
        break; // Only increment one quest per like
      }
    }
    if (updated) {
      localStorage.setItem("dna_quests", JSON.stringify(quests));
      // Dispatch a storage event to notify other tabs/components
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="influencing-feed">
      <h2>Influencing (Fashion Shorts)</h2>
      <div className="shorts-list">
        {posts.map((post, idx) => (
          <div className="shorts-post shorts-post-row" key={post.id}>
            {/* Left: Video/Image */}
            <div className="shorts-media-col">
              <div className="shorts-header">
                <img src={post.avatar} alt={post.username} className="shorts-avatar" />
                <span className="shorts-username">{post.username}</span>
              </div>
              <div className="shorts-media">
                {post.mediaType === "video" ? (
                  <video
                    ref={el => (videoRefs.current[idx] = el)}
                    src={post.mediaUrl}
                    controls
                    loop
                    className="shorts-video"
                    muted
                    playsInline
                  />
                ) : (
                  <img src={post.mediaUrl} alt="fashion post" className="shorts-image" />
                )}
              </div>
              <div className="shorts-caption">{post.caption}</div>
              <button className={`shorts-like${post.liked ? " liked" : ""}`} onClick={() => handleLike(post.id)}>
                ♥ {post.likes}
              </button>
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
};

export default Influencing;
