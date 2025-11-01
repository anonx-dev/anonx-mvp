// app/feed/components/RightPanel.tsx
'use client';

import React, { useState } from 'react';
import { Flame, MessageCircle, Heart, AlertCircle, Phone } from 'lucide-react';

interface ConfessionCategory {
  id: string;
  name: string;
  icon: string;
  confessionCount: number;
  color: string;
}

const RightPanel: React.FC = () => {
  const [trendingCategories] = useState<ConfessionCategory[]>([
    { id: '1', name: 'Relationships', icon: '💔', confessionCount: 2543, color: 'from-pink-500 to-red-500' },
    { id: '2', name: 'Work & Career', icon: '💼', confessionCount: 1892, color: 'from-blue-500 to-cyan-500' },
    { id: '3', name: 'Mental Health', icon: '🧠', confessionCount: 1567, color: 'from-purple-500 to-pink-500' },
    { id: '4', name: 'Family', icon: '👨‍👩‍👧‍👦', confessionCount: 1234, color: 'from-yellow-500 to-orange-500' },
    { id: '5', name: 'School & Education', icon: '🎓', confessionCount: 987, color: 'from-green-500 to-emerald-500' },
  ]);

  const [dailyPrompt] = useState({
    question: "What's a secret you've never told anyone?",
    subtitle: "Share your confession anonymously",
  });

  const [communityStats] = useState({
    totalConfessions: 12456,
    activeConfessors: 3421,
    confessionsToday: 234,
    topEmotion: 'Guilt',
  });

  const [emotions] = useState([
    { emoji: '😔', label: 'Guilt', count: 2345 },
    { emoji: '😔', label: 'Regret', count: 1892 },
    { emoji: '😊', label: 'Relief', count: 1567 },
    { emoji: '😢', label: 'Sadness', count: 1234 },
  ]);

  const formatCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Daily Prompt Section */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">📝 Today's Prompt</h3>
        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20">
          <p className="text-white font-semibold text-sm leading-relaxed mb-3">
            "{dailyPrompt.question}"
          </p>
          <p className="text-gray-400 text-xs mb-3">{dailyPrompt.subtitle}</p>
          <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105">
            Share Your Confession
          </button>
        </div>
      </div>

      {/* Trending Categories Section */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
          <Flame size={16} className="text-pink-500" />
          Trending Categories
        </h3>

        <div className="space-y-2">
          {trendingCategories.map((category) => (
            <div
              key={category.id}
              className="p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {formatCount(category.confessionCount)} confessions
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Stats Section */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
          <MessageCircle size={16} className="text-blue-500" />
          Community Insights
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-gray-400 text-xs mb-1">Total Confessions</p>
            <p className="text-white font-bold text-lg">{formatCount(communityStats.totalConfessions)}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-gray-400 text-xs mb-1">Active Today</p>
            <p className="text-white font-bold text-lg">{formatCount(communityStats.confessionsToday)}</p>
          </div>
        </div>
      </div>

      {/* Support Resources Section */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
          <Heart size={16} className="text-red-500" />
          You're Not Alone
        </h3>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20">
          <p className="text-gray-300 text-xs mb-3">
            If you're struggling, we're here to help. Reach out to support services.
          </p>
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs transition-colors"
            >
              <Phone size={14} />
              Crisis Hotline
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs transition-colors"
            >
              <AlertCircle size={14} />
              Mental Health Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;