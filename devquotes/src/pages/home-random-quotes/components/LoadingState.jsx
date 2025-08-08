import React from 'react';

const LoadingState = ({ className = '' }) => {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 sm:p-8 shadow-elevation-1 ${className}`}>
      <div className="animate-pulse">
        {/* Quote content skeleton */}
        <div className="mb-6">
          <div className="space-y-3 mb-4">
            <div className="h-5 bg-muted rounded w-full"></div>
            <div className="h-5 bg-muted rounded w-5/6"></div>
            <div className="h-5 bg-muted rounded w-4/6"></div>
          </div>
          <div className="h-4 bg-muted rounded w-1/3"></div>
        </div>

        {/* Vote section skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-20 bg-muted rounded"></div>
            <div className="h-8 w-20 bg-muted rounded"></div>
          </div>
          <div className="h-4 w-16 bg-muted rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;