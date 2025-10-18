'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mockPosts, Post } from '@/app/lib/mockData';
import PostCard from './PostCard';
import PostComposer from './PostComposer';
import { Loader } from 'lucide-react';

const FeedContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Simulate loading more posts
  const loadMorePosts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      // Generate new posts by duplicating and modifying existing ones
      const newPosts = mockPosts.map((post, index) => ({
        ...post,
        id: `${post.id}-batch-${Math.random()}`,
        timestamp: new Date(
          Date.now() - (posts.length + index) * 60 * 60 * 1000
        ),
        likes: Math.floor(Math.random() * 5000),
        comments: Math.floor(Math.random() * 500),
        shares: Math.floor(Math.random() * 200),
      }));

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setIsLoading(false);

      // Stop loading after 3 batches for demo purposes
      if (posts.length > 45) {
        setHasMore(false);
      }
    }, 800);
  }, [posts.length, isLoading, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMorePosts();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMorePosts, hasMore, isLoading]);

  const handlePostSubmit = (content: string) => {
    const newPost: Post = {
      id: `new-${Date.now()}`,
      content,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
      media: [],
      tags: [],
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="flex-1 max-w-2xl mx-auto">
      {/* Post Composer */}
      <PostComposer onPostSubmit={handlePostSubmit} />

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="flex flex-col items-center gap-3">
            <Loader size={32} className="animate-spin text-blue-500" />
            <p className="text-gray-400 text-sm">Loading more posts...</p>
          </div>
        </div>
      )}

      {/* Infinite Scroll Trigger */}
      <div ref={observerTarget} className="h-10" />

      {/* End of Feed Message */}
      {!hasMore && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            You've reached the end of the feed
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedContainer;
