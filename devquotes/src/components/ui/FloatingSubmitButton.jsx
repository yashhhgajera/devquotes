import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const FloatingSubmitButton = ({ className = '' }) => {
  const location = useLocation();
  
  // Hide on submit quote page to prevent redundancy
  if (location.pathname === '/submit-quote') {
    return null;
  }

  return (
    <Link
      to="/submit-quote"
      className={`
        fixed bottom-6 right-6 z-[1001] 
        w-14 h-14 bg-accent hover:bg-accent/90 
        text-accent-foreground rounded-full 
        shadow-elevation-2 hover:shadow-elevation-2 
        flex items-center justify-center 
        transition-smooth hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        ${className}
      `}
      title="Submit a Quote"
      aria-label="Submit a new quote"
    >
      <Icon name="Plus" size={24} color="currentColor" />
    </Link>
  );
};

export default FloatingSubmitButton;