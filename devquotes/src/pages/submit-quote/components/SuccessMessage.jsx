import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SuccessMessage = ({ submittedQuote, onSubmitAnother }) => {
  return (
    <div className="text-center space-y-6 py-8">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
      </div>
      {/* Success Message */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-foreground">
          Quote Submitted Successfully!
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Thank you for contributing to the DevQuotes community. Your quote has been submitted and will be available for voting shortly.
        </p>
      </div>
      {/* Submitted Quote Preview */}
      {submittedQuote && (
        <div className="bg-muted rounded-lg p-4 border border-border max-w-md mx-auto">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Icon name="Quote" size={16} className="text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-foreground italic leading-relaxed">
                "{submittedQuote?.content}"
              </p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Icon name="User" size={14} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                — {submittedQuote?.author}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
        <Button
          variant="outline"
          onClick={onSubmitAnother}
          iconName="Plus"
          iconPosition="left"
          className="flex-1"
        >
          Submit Another
        </Button>
        
        <Link to="/home-random-quotes" className="flex-1">
          <Button
            variant="default"
            fullWidth
            iconName="Home"
            iconPosition="left"
          >
            Back to Home
          </Button>
        </Link>
      </div>
      {/* Additional Actions */}
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-3">
          Explore more quotes from the community
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/top-quotes" 
            className="text-xs text-primary hover:text-primary/80 transition-smooth flex items-center gap-1"
          >
            <Icon name="TrendingUp" size={12} />
            View Top Quotes
          </Link>
          <Link 
            to="/home-random-quotes" 
            className="text-xs text-primary hover:text-primary/80 transition-smooth flex items-center gap-1"
          >
            <Icon name="Shuffle" size={12} />
            Random Quotes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;