import React from 'react';
import Icon from '../../../components/AppIcon';

const TopQuotesHeader = ({ quotesCount = 0 }) => {
  return (
    <div className="text-center mb-8 lg:mb-12">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="TrendingUp" size={24} className="text-primary" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
          Top Quotes
        </h1>
      </div>
      
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
        Discover the most appreciated programming wisdom and humor, 
        voted by our developer community.
      </p>
      
      {quotesCount > 0 && (
        <div className="mt-6 inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
          <Icon name="Award" size={16} className="text-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            {quotesCount} top-rated quotes
          </span>
        </div>
      )}
    </div>
  );
};

export default TopQuotesHeader;