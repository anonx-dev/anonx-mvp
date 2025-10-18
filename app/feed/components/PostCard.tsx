'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';
import { Post, formatTimeAgo } from '@/app/lib/mockData';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer group">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Anonymous Badge with Gradient */}
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold">
            ANONYMOUS
          </div>
          <span className="text-gray-400 text-sm">{formatTimeAgo(post.timestamp)}</span>
        </div>
        <button className="text-gray-400 hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-300 text-base leading-relaxed">{post.content}</p>
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-blue-400 text-sm hover:text-blue-300 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Media */}
      {post.media.length > 0 && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={post.media[0]}
            alt="Post media"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between text-gray-400 border-t border-white/10 pt-3 mt-3">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className="flex items-center gap-2 hover:text-pink-500 transition-colors group/like"
        >
          <Heart
            size={18}
            className={`transition-all ${
              isLiked
                ? 'fill-pink-500 text-pink-500 scale-110'
                : 'group-hover/like:scale-110'
            }`}
          />
          <span className="text-sm">{likeCount}</span>
        </button>

        {/* Comment Button */}
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group/comment">
          <MessageCircle
            size={18}
            className="group-hover/comment:scale-110 transition-transform"
          />
          <span className="text-sm">{post.comments}</span>
        </button>

        {/* Retweet Button */}
        <button className="flex items-center gap-2 hover:text-green-500 transition-colors group/retweet">
          <Repeat2
            size={18}
            className="group-hover/retweet:scale-110 transition-transform"
          />
          <span className="text-sm">{post.shares}</span>
        </button>

        {/* Share Button */}
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors group/share">
          <Share
            size={18}
            className="group-hover/share:scale-110 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
