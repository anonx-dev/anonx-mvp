'use client';

import React, { useState } from 'react';
import { Home, Search, Flame, MessageCircle, User, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const Sidebar: React.FC = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home size={20} />,
      href: '/feed',
    },
    {
      id: 'explore',
      label: 'Explore',
      icon: <Search size={20} />,
      href: '/feed/explore',
    },
    {
      id: 'trending',
      label: 'Trending',
      icon: <Flame size={20} />,
      href: '/feed/trending',
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageCircle size={20} />,
      href: '/feed/messages',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User size={20} />,
      href: '/feed/profile',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={20} />,
      href: '/feed/settings',
    },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-black border-r border-blue-500/20 sticky top-0 overflow-y-auto">
      {/* Sidebar Content */}
      <div className="flex-1 p-4 space-y-2">
        {/* Navigation Items */}
        {navItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <button
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
                activeNav === item.id
                  ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span
                className={`transition-all ${
                  activeNav === item.id
                    ? 'text-blue-400 scale-110'
                    : 'group-hover:scale-110'
                }`}
              >
                {item.icon}
              </span>
              <span className="text-base font-medium">{item.label}</span>
            </button>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 group">
          <span className="group-hover:scale-110 transition-transform">
            <LogOut size={20} />
          </span>
          <span className="text-base font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
