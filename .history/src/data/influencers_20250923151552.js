// Mock data for influencer profiles with DNA and dashboard info
export const influencerProfiles = {
  "@fashionista": {
    username: "@fashionista",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Fashion enthusiast spreading streetwear vibes ✨ Sustainable fashion advocate",
    followers: "12.5K",
    posts: 89,
    likes: "45.2K",
    dnaPoints: 750,
    engagement: 8.4,
    topCategory: "Streetwear",
    avgLikes: 508,
    fashionLevel: "Expert",
    fashionDNA: {
      streetwear: 92,
      casual: 78,
      chic: 45,
      vintage: 23,
      formal: 12,
      bohemian: 34
    }
  },
  "@trendsetter": {
    username: "@trendsetter",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg", 
    bio: "Setting trends, not following them 🔥 Minimalist fashion lover",
    followers: "8.7K",
    posts: 67,
    likes: "32.1K",
    dnaPoints: 620,
    engagement: 7.2,
    topCategory: "Minimalist",
    avgLikes: 479,
    fashionLevel: "Advanced",
    fashionDNA: {
      chic: 89,
      formal: 67,
      casual: 56,
      streetwear: 34,
      vintage: 45,
      bohemian: 12
    }
  },
  "@styleIcon": {
    username: "@styleIcon",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Your daily dose of style inspiration 💫 Vintage collector",
    followers: "15.2K", 
    posts: 134,
    likes: "78.9K",
    dnaPoints: 890,
    engagement: 9.1,
    topCategory: "Vintage",
    avgLikes: 589,
    fashionLevel: "Master",
    fashionDNA: {
      vintage: 95,
      bohemian: 78,
      chic: 67,
      formal: 45,
      casual: 56,
      streetwear: 23
    }
  },
  "@fashionforward": {
    username: "@fashionforward",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    bio: "Fashion forward thinking 🌟 Sustainable style advocate",
    followers: "9.3K",
    posts: 78,
    likes: "38.7K", 
    dnaPoints: 680,
    engagement: 6.8,
    topCategory: "Bohemian",
    avgLikes: 496,
    fashionLevel: "Advanced",
    fashionDNA: {
      bohemian: 88,
      casual: 72,
      vintage: 58,
      chic: 43,
      streetwear: 35,
      formal: 18
    }
  },
  "@urbanstyle": {
    username: "@urbanstyle",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "Urban style enthusiast 🏙️ Street photography x fashion",
    followers: "11.8K",
    posts: 95,
    likes: "52.3K",
    dnaPoints: 720,
    engagement: 8.0,
    topCategory: "Urban",
    avgLikes: 551,
    fashionLevel: "Expert", 
    fashionDNA: {
      streetwear: 90,
      casual: 82,
      chic: 38,
      formal: 25,
      vintage: 41,
      bohemian: 15
    }
  }
};

// Helper function to get influencer data by username
export const getInfluencerProfile = (username) => {
  return influencerProfiles[username] || {
    username,
    avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
    bio: "Fashion enthusiast",
    followers: "1.2K", 
    posts: 25,
    likes: "3.4K",
    dnaPoints: 150,
    engagement: 5.2,
    topCategory: "Casual",
    avgLikes: 136,
    fashionLevel: "Beginner",
    fashionDNA: {
      casual: 60,
      chic: 40,
      streetwear: 30,
      formal: 20,
      vintage: 25,
      bohemian: 35
    }
  };
};