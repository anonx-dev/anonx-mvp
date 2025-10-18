'use client';

import React, { useState } from 'react';
import { Paperclip, Smile, Send } from 'lucide-react';

interface PostComposerProps {
  onPostSubmit?: (content: string) => void;
}

const PostComposer: React.FC<PostComposerProps> = ({ onPostSubmit }) => {
  const [postContent, setPostContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePost = () => {
    if (postContent.trim()) {
      onPostSubmit?.(postContent);
      setPostContent('');
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handlePost();
    }
  };

  return (
    <div className="border border-white/10 rounded-lg p-4 mb-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">
          U
        </div>

        {/* Input Area */}
        <div className="flex-1">
          {/* Placeholder or Label */}
          <p className="text-gray-500 text-sm mb-2">Post anonymously</p>

          {/* Text Area */}
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onKeyDown={handleKeyDown}
            placeholder="What's on your mind?"
            className="w-full bg-transparent text-white placeholder-gray-500 outline-none resize-none text-base leading-relaxed"
            rows={isExpanded ? 4 : 1}
          />

          {/* Expanded State - Action Buttons */}
          {isExpanded && (
            <div className="mt-4 flex items-center justify-between">
              {/* Left: Media & Emoji Buttons */}
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-all duration-300 group">
                  <Paperclip size={18} />
                  <span className="text-xs text-gray-500 group-hover:text-blue-400 ml-1 hidden sm:inline">
                    Media
                  </span>
                </button>
                <button className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-full transition-all duration-300 group">
                  <Smile size={18} />
                  <span className="text-xs text-gray-500 group-hover:text-yellow-400 ml-1 hidden sm:inline">
                    Emoji
                  </span>
                </button>
              </div>

              {/* Right: Post Button */}
              <button
                onClick={handlePost}
                disabled={!postContent.trim()}
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={16} />
                <span className="hidden sm:inline">Post</span>
              </button>
            </div>
          )}

          {/* Collapsed State - Quick Action Buttons */}
          {!isExpanded && (
            <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors">
                <Paperclip size={16} />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-yellow-400 transition-colors">
                <Smile size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Info Text */}
      {isExpanded && (
        <div className="mt-4 text-xs text-gray-500 border-t border-white/10 pt-3">
          <p>💡 Tip: Press Ctrl+Enter to post quickly</p>
        </div>
      )}
    </div>
  );
};

export default PostComposer;
