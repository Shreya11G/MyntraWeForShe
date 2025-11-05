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
