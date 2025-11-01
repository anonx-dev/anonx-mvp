'use client';

import React from 'react';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position: 'left' | 'right';
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position,
  children,
  title = '',
  className = '',
}) => {
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 z-50 h-screen w-4/5 max-w-sm bg-black transform transition-transform duration-300 ease-in-out md:hidden ${
          position === 'left' 
            ? `left-0 border-r border-white/10 ${isOpen ? 'translate-x-0' : '-translate-x-full'}` 
            : `right-0 border-l border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
        } ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          {title && <h2 className="text-white font-bold text-lg">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 -mr-2"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content - Scrollable area */}
        <div className="h-[calc(100vh-64px)] overflow-y-auto">
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;