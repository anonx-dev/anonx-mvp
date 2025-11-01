// app/feed/components/Sidebar.tsx
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
      href: '/explore',
    },
    {
      id: 'trending',
      label: 'Trending',
      icon: <Flame size={20} />,
      href: '/trending',
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageCircle size={20} />,
      href: '/messages',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User size={20} />,
      href: '/profile',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={20} />,
      href: '/settings',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeNav === item.id
                  ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
              onClick={() => setActiveNav(item.id)}
            >
              <span className={activeNav === item.id ? 'text-blue-400' : ''}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom Section - Logout */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;