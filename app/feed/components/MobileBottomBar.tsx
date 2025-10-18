'use client';

import React from 'react';
import { Menu, Plus, TrendingUp } from 'lucide-react';

interface MobileBottomBarProps {
  onMenuClick: () => void;
  onComposeClick: () => void;
  onTrendingClick: () => void;
}

const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onMenuClick,
  onComposeClick,
  onTrendingClick,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black border-t border-white/10 md:hidden">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left: Menu Button */}
        <button
          onClick={onMenuClick}
          className="flex items-center justify-center w-12 h-12 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 group"
        >
          <Menu size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* Center: Compose Button (Prominent) */}
        <button
          onClick={onComposeClick}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:scale-110 group"
        >
          <Plus size={28} className="group-active:scale-95 transition-transform" />
        </button>

        {/* Right: Trending Button */}
        <button
          onClick={onTrendingClick}
          className="flex items-center justify-center w-12 h-12 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 group"
        >
          <TrendingUp size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
