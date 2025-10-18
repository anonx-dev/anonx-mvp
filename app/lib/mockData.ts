export interface Post {
  id: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  media: string[];
  tags: string[];
}

export const mockPosts: Post[] = [
  {
    id: "1",
    content: "Just launched my new project! It's been a journey of 6 months. Really excited to share it with everyone. Check it out and let me know what you think!",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 234,
    comments: 45,
    shares: 12,
    media: [],
    tags: ["project", "launch", "excited"],
  },
  {
    id: "2",
    content: "The best time to plant a tree was 20 years ago. The second best time is now. Let's build something amazing together! 🌱",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    likes: 567,
    comments: 89,
    shares: 34,
    media: [],
    tags: ["motivation", "growth", "inspiration"],
  },
  {
    id: "3",
    content: "Anyone else struggling with imposter syndrome? Sometimes I feel like I don't belong here, but then I remember how far I've come. You're doing great! 💪",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    likes: 892,
    comments: 156,
    shares: 78,
    media: [],
    tags: ["mentalhealth", "support", "community"],
  },
  {
    id: "4",
    content: "Hot take: Dark mode is superior to light mode. Fight me in the comments 👀",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    likes: 1203,
    comments: 234,
    shares: 89,
    media: [],
    tags: ["debate", "design", "darkmode"],
  },
  {
    id: "5",
    content: "Just finished reading an amazing book on web development. The insights on performance optimization are game-changing. Highly recommend! 📚",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    likes: 445,
    comments: 67,
    shares: 23,
    media: [],
    tags: ["webdev", "learning", "books"],
  },
  {
    id: "6",
    content: "Coffee number 4 today and it's only 2 PM. Send help ☕☕☕☕",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    likes: 678,
    comments: 112,
    shares: 45,
    media: [],
    tags: ["coffee", "productivity", "humor"],
  },
  {
    id: "7",
    content: "Just realized I've been using the wrong keyboard shortcut for 5 years. My life is a lie. 😅",
    timestamp: new Date(Date.now() - 1.5 * 24 * 60 * 60 * 1000),
    likes: 1456,
    comments: 234,
    shares: 156,
    media: [],
    tags: ["programming", "fail", "funny"],
  },
  {
    id: "8",
    content: "The future is decentralized. Web3 is coming whether we like it or not. What are your thoughts on the metaverse?",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    likes: 789,
    comments: 198,
    shares: 67,
    media: [],
    tags: ["web3", "crypto", "future"],
  },
  {
    id: "9",
    content: "Unpopular opinion: Tabs are better than spaces. Change my mind. 🤔",
    timestamp: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000),
    likes: 2103,
    comments: 445,
    shares: 234,
    media: [],
    tags: ["coding", "debate", "programming"],
  },
  {
    id: "10",
    content: "Just deployed my first production app. It's live! Feeling a mix of excitement and terror right now. Fingers crossed nothing breaks! 🤞",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    likes: 1678,
    comments: 289,
    shares: 123,
    media: [],
    tags: ["deployment", "milestone", "webdev"],
  },
  {
    id: "11",
    content: "Why do we call it debugging when the first computer bug was an actual moth? 🦋 #history",
    timestamp: new Date(Date.now() - 3.5 * 24 * 60 * 60 * 1000),
    likes: 934,
    comments: 156,
    shares: 89,
    media: [],
    tags: ["history", "programming", "fun"],
  },
  {
    id: "12",
    content: "The best investment you can make is in yourself. Keep learning, keep growing. Your future self will thank you! 📈",
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    likes: 1567,
    comments: 234,
    shares: 145,
    media: [],
    tags: ["motivation", "selfimprovement", "growth"],
  },
  {
    id: "13",
    content: "Just spent 3 hours debugging only to realize I had a typo in a variable name. This is why we need better IDEs with autocomplete. 🤦",
    timestamp: new Date(Date.now() - 4.5 * 24 * 60 * 60 * 1000),
    likes: 2234,
    comments: 367,
    shares: 198,
    media: [],
    tags: ["programming", "debugging", "relatable"],
  },
  {
    id: "14",
    content: "The internet was a mistake. Just kidding... or am I? 🤷",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    likes: 445,
    comments: 78,
    shares: 34,
    media: [],
    tags: ["internet", "humor", "philosophy"],
  },
  {
    id: "15",
    content: "Excited to announce that I'm starting my own tech startup! We're building the future of anonymous social networking. Join us on this journey! 🚀",
    timestamp: new Date(Date.now() - 5.5 * 24 * 60 * 60 * 1000),
    likes: 3456,
    comments: 567,
    shares: 234,
    media: [],
    tags: ["startup", "announcement", "tech"],
  },
];

// Helper function to format timestamp
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 604800)}w ago`;
  return `${Math.floor(seconds / 2592000)}mo ago`;
};
