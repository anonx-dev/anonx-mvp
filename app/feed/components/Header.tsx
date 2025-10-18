'use client';

import React, { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-blue-500/20 backdrop-blur-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="text-xl md:text-2xl font-black tracking-tighter">
            <span
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ANONX
            </span>
          </div>
        </div>

        {/* Center: Search Bar (Desktop only) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div
            className={`flex items-center gap-3 w-full px-4 py-2 rounded-full border transition-all duration-300 ${
              isSearchFocused
                ? 'border-blue-500 bg-white/5 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <Search size={18} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search posts, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm min-w-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          {/* Mobile Search Icon */}
          <button className="md:hidden text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-gray-400 hover:text-white transition-colors group"
            >
              <Bell size={20} />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full group-hover:scale-125 transition-transform" />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-black border border-white/10 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-white font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 hover:bg-white/5 transition-colors border-b border-white/10 cursor-pointer">
                    <p className="text-gray-300 text-sm">
                      <span className="text-blue-400 font-semibold">234 people</span> liked your post
                    </p>
                    <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                  </div>
                  <div className="p-4 hover:bg-white/5 transition-colors border-b border-white/10 cursor-pointer">
                    <p className="text-gray-300 text-sm">
                      <span className="text-blue-400 font-semibold">45 people</span> commented on your post
                    </p>
                    <p className="text-gray-500 text-xs mt-1">4 hours ago</p>
                  </div>
                  <div className="p-4 hover:bg-white/5 transition-colors cursor-pointer">
                    <p className="text-gray-300 text-sm">
                      Your post is <span className="text-pink-400 font-semibold">trending</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar */}
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-110 flex-shrink-0">
            U
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
