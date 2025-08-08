import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuoteCard = ({ quote, rank, onVote, className = '' }) => {
  const [isVoting, setIsVoting] = useState(false);
  const [voteError, setVoteError] = useState('');

  const handleVote = async (voteType) => {
    if (isVoting) return;
    
    setIsVoting(true);
    setVoteError('');
    
    try {
      await onVote(quote?.id, voteType);
    } catch (error) {
      setVoteError('Failed to vote. Please try again.');
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <div className={`bg-card border border-border rounded-lg p-6 shadow-elevation-1 hover:shadow-elevation-2 transition-smooth ${className}`}>
      {/* Rank Badge */}
      {rank && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
              #{rank}
            </div>
            <span className="text-xs text-muted-foreground font-medium">TOP RATED</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-medium">{quote?.votes} votes</span>
          </div>
        </div>
      )}
      {/* Quote Content */}
      <blockquote className="text-foreground text-base leading-relaxed mb-4 font-medium">
        "{quote?.content}"
      </blockquote>
      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="User" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            — {quote?.author}
          </span>
        </div>

        {/* Vote Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleVote('up')}
            disabled={isVoting}
            className="text-success hover:bg-success/10 hover:text-success"
            iconName="ChevronUp"
            iconSize={16}
          >
            up
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleVote('down')}
            disabled={isVoting}
            className="text-error hover:bg-error/10 hover:text-error"
            iconName="ChevronDown"
            iconSize={16}
          >
            down
          </Button>
        </div>
      </div>
      {/* Vote Error */}
      {voteError && (
        <div className="mt-3 p-2 bg-error/10 border border-error/20 rounded text-error text-xs">
          {voteError}
        </div>
      )}
    </div>
  );
};

export default QuoteCard;