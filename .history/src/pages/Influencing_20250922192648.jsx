import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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

  function Influencing() {
    const [posts, setPosts] = useState([...mockPosts]);
    const location = useLocation();
    const [newMedia, setNewMedia] = useState(null);
    const [newMediaType, setNewMediaType] = useState("");
    const [newCaption, setNewCaption] = useState("");
    const [newUsername, setNewUsername] = useState("@me");
    const [uploadError, setUploadError] = useState("");
    const videoRefs = useRef([]);


    function Influencing() {
      const [posts, setPosts] = useState([...mockPosts]);
      const location = useLocation();
      const [newMedia, setNewMedia] = useState(null);
      const [newMediaType, setNewMediaType] = useState("");
      const [newCaption, setNewCaption] = useState("");
      const [newUsername, setNewUsername] = useState("@me");
      const [uploadError, setUploadError] = useState("");
      const videoRefs = useRef([]);

      useEffect(() => {
        setPosts([...mockPosts]);
      }, [location.pathname]);

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

      const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const type = file.type.startsWith("video") ? "video" : file.type.startsWith("image") ? "image" : "";
        if (!type) {
          setUploadError("Only image or video files allowed.");
          return;
        }
        setUploadError("");
        setNewMediaType(type);
        const url = URL.createObjectURL(file);
        setNewMedia(url);
      };

      const handleAddPost = (e) => {
        e.preventDefault();
        if (!newMedia || !newCaption) {
          setUploadError("Please add a media file and caption.");
          return;
        }
        const newPost = {
          id: Date.now(),
          username: newUsername,
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
          mediaUrl: newMedia,
          mediaType: newMediaType,
          caption: newCaption,
          likes: 0,
          liked: false,
          products: [],
        };
        setPosts([newPost, ...posts]);
        setNewMedia(null);
        setNewMediaType("");
        setNewCaption("");
        setUploadError("");
      };

      const handleShare = (post) => {
        const shareData = {
          title: post.caption,
          text: post.caption,
          url: window.location.href + `#post-${post.id}`,
        };
        if (navigator.share) {
          navigator.share(shareData).catch(() => {});
        } else {
          navigator.clipboard.writeText(shareData.url);
          alert("Link copied to clipboard!");
        }
      };

      return (
        <div className="influencing-feed">
          <h2>Influencing (Fashion Shorts)</h2>
          {/* Upload Form - always visible at the top */}
          <form className="shorts-upload-form" onSubmit={handleAddPost} style={{marginBottom: 24, background: '#f7f7fa', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px #0001'}}>
            <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
              <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />
              <input type="text" placeholder="Your caption..." value={newCaption} onChange={e => setNewCaption(e.target.value)} style={{flex: 1, padding: 8, borderRadius: 6, border: '1px solid #ccc'}} />
              <button type="submit" style={{padding: '8px 18px', borderRadius: 6, background: '#a259ff', color: '#fff', fontWeight: 600, border: 'none'}}>Post</button>
            </div>
            {uploadError && <div style={{color: 'red', marginTop: 6}}>{uploadError}</div>}
            {newMedia && (
              <div style={{marginTop: 10}}>
                {newMediaType === 'video' ? (
                  <video src={newMedia} controls style={{maxWidth: 180, borderRadius: 8}} />
                ) : (
                  <img src={newMedia} alt="preview" style={{maxWidth: 120, borderRadius: 8}} />
                )}
              </div>
            )}
          </form>
          <div className="shorts-list">
            {posts.length === 0 && (
              <div style={{textAlign: 'center', color: '#888', fontSize: '1.2rem', margin: '2rem 0'}}>
                No posts to display. Try adding your own content!
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
                    <button className={`shorts-like${post.liked ? " liked" : ""}`} onClick={() => handleLike(post.id)}>
                      ♥ {post.likes}
                    </button>
                    <button className="shorts-share" style={{marginLeft: 10}} onClick={() => handleShare(post)}>
                      🔗 Share
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

export default Influencing;
