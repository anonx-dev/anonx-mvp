'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Drawer from './components/Drawer';
import MobileBottomBar from './components/MobileBottomBar';

interface FeedLayoutProps {
  children: React.ReactNode;
}

const FeedLayout: React.FC<FeedLayoutProps> = ({ children }) => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - Hidden on mobile, visible on lg screens */}
        <div className="hidden lg:block w-64 flex-shrink-0 border-r border-white/10">
          <Sidebar />
        </div>

        {/* Center Feed */}
        <main className="flex-1 overflow-y-auto border-x border-white/10 pb-20 md:pb-0">
          <div className="px-4 md:px-6 py-4">
            {children}
          </div>
        </main>

        {/* Desktop Right Panel - Hidden on mobile, visible on lg screens */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <RightPanel />
        </div>
      </div>

      {/* Mobile Drawers */}
      <Drawer
  isOpen={isLeftDrawerOpen}
  onClose={() => setIsLeftDrawerOpen(false)}
  position="left"
  title="Menu"
  className="overflow-y-auto"
>
  <Sidebar />
</Drawer>

<Drawer
  isOpen={isRightDrawerOpen}
  onClose={() => setIsRightDrawerOpen(false)}
  position="right"
  title="Trending"
  className="overflow-y-auto"
>
  <RightPanel />
</Drawer>

      {/* Mobile Bottom Bar */}
      <MobileBottomBar
        onMenuClick={() => setIsLeftDrawerOpen(true)}
        onComposeClick={() => {
          // TODO: Open compose modal
          console.log('Compose clicked');
        }}
        onTrendingClick={() => setIsRightDrawerOpen(true)}
      />
    </div>
  );
};

export default FeedLayout;
