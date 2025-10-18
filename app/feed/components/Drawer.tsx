'use client';

import React from 'react';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position: 'left' | 'right';
  children: React.ReactNode;
  title?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position,
  children,
  title,
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 z-50 h-screen w-72 bg-black border-white/10 transform transition-transform duration-300 ease-in-out md:hidden ${
          position === 'left'
            ? `left-0 border-r ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
            : `right-0 border-l ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-64px)] pb-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
