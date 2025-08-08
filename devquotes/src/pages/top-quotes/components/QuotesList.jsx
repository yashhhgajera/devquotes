import React from 'react';
import QuoteCard from './QuoteCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';



const QuotesList = ({ quotes, loading, error, onVote, onRetry }) => {
  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full"></div>
                <div className="w-20 h-3 bg-muted rounded"></div>
              </div>
              <div className="w-16 h-3 bg-muted rounded"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="w-full h-4 bg-muted rounded"></div>
              <div className="w-3/4 h-4 bg-muted rounded"></div>
              <div className="w-1/2 h-4 bg-muted rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-24 h-3 bg-muted rounded"></div>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-muted rounded"></div>
                <div className="w-12 h-8 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="AlertCircle" size={32} className="text-error" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Failed to Load Quotes</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We couldn't fetch the top quotes. Please check your connection and try again.
        </p>
        <Button variant="outline" onClick={onRetry} iconName="RefreshCw" iconPosition="left">
          Try Again
        </Button>
      </div>
    );
  }

  if (!quotes || quotes?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Quote" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No Quotes Yet</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Be the first to contribute! Share your favorite developer quotes with the community.
        </p>
        <Button variant="default" onClick={() => window.location.href = '/submit-quote'} iconName="Plus" iconPosition="left">
          Submit First Quote
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {quotes?.map((quote, index) => (
        <QuoteCard
          key={quote?.id}
          quote={quote}
          rank={index + 1}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default QuotesList;