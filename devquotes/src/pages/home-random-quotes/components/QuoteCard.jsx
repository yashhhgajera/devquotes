import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuoteCard = ({ 
  quote, 
  onUpvote, 
  onDownvote, 
  isVoting, 
  className = '' 
}) => {
  if (!quote) {
    return (
      <div className={`bg-card border border-border rounded-lg p-8 text-center ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-3 bg-muted rounded w-1/4 mx-auto mb-4"></div>
          <div className="flex justify-center space-x-4">
            <div className="h-10 w-20 bg-muted rounded"></div>
            <div className="h-10 w-20 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card border border-border rounded-lg p-6 sm:p-8 shadow-elevation-1 ${className}`}>
      {/* Quote Content */}
      <div className="mb-6">
        <blockquote className="text-lg sm:text-xl font-medium text-foreground leading-relaxed mb-4">
          "{quote?.content}"
        </blockquote>
        <cite className="text-sm sm:text-base text-muted-foreground font-medium">
          — {quote?.author}
        </cite>
      </div>
      {/* Vote Section */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronUp"
            iconPosition="left"
            onClick={() => onUpvote(quote?.id)}
            disabled={isVoting}
            className="text-success hover:bg-success/10 hover:border-success/20"
          >
            Upvote
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronDown"
            iconPosition="left"
            onClick={() => onDownvote(quote?.id)}
            disabled={isVoting}
            className="text-error hover:bg-error/10 hover:border-error/20"
          >
            Downvote
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={16} color="var(--color-muted-foreground)" />
          <span className="text-sm font-medium text-muted-foreground">
            {quote?.votes || 0} votes
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;