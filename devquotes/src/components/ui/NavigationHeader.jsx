import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const NavigationHeader = ({ className = '' }) => {
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Random Quotes',
      path: '/home-random-quotes',
      icon: 'Shuffle'
    },
    {
      label: 'Top Quotes',
      path: '/top-quotes',
      icon: 'TrendingUp'
    },
    {
      label: 'Submit Quote',
      path: '/submit-quote',
      icon: 'Plus'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] bg-background border-b border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link 
            to="/home-random-quotes" 
            className="flex items-center space-x-2 transition-smooth hover:opacity-80"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Quote" size={20} color="white" />
            </div>
            <span className="text-xl font-semibold text-foreground font-sans">
              DevQuotes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-smooth
                  ${isActive(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-elevation-1'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  color={isActive(item?.path) ? 'currentColor' : 'currentColor'} 
                />
                <span>{item?.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`
                  flex items-center justify-center w-10 h-10 rounded-md transition-smooth
                  ${isActive(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-elevation-1'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                title={item?.label}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  color="currentColor" 
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;