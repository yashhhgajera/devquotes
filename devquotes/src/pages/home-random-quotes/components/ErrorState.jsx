import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ErrorState = ({ 
  message = "Failed to load quote", 
  onRetry, 
  className = '' 
}) => {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 sm:p-8 text-center shadow-elevation-1 ${className}`}>
      <div className="mb-4">
        <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Icon name="AlertCircle" size={24} color="var(--color-error)" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-muted-foreground text-sm">
          {message}
        </p>
      </div>

      {onRetry && (
        <Button
          variant="outline"
          iconName="RefreshCw"
          iconPosition="left"
          onClick={onRetry}
          className="mt-4"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;