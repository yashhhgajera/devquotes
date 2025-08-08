import React, { useState, useEffect } from 'react';
import NavigationHeader from '../../components/ui/NavigationHeader';
import FloatingSubmitButton from '../../components/ui/FloatingSubmitButton';
import Button from '../../components/ui/Button';
import QuoteCard from './components/QuoteCard';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { getRandomQuote, voteQuote } from '../../services/api';



const HomeRandomQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState(null);

  

  // Simulate API call to fetch random quote
  const fetchRandomQuote = async () => {
  setIsLoading(true);
  setError(null);
  
  try {
    const quote = await getRandomQuote(); // ⬅️ real API call
    setCurrentQuote(quote);
  } catch (err) {
    setError(err?.message || 'Failed to fetch quote');
  } finally {
    setIsLoading(false);
  }
};


 const handleUpvote = async (quoteId) => {
  if (isVoting) return;
  setIsVoting(true);
  try {
    const updatedQuote = await voteQuote(quoteId, 'UP');
    setCurrentQuote(updatedQuote);
  } catch (err) {
    console.error('Failed to upvote:', err);
  } finally {
    setIsVoting(false);
  }
};

const handleDownvote = async (quoteId) => {
  if (isVoting) return;
  setIsVoting(true);
  try {
    const updatedQuote = await voteQuote(quoteId, 'DOWN');
    setCurrentQuote(updatedQuote);
  } catch (err) {
    console.error('Failed to downvote:', err);
  } finally {
    setIsVoting(false);
  }
};


  // Load initial quote on component mount
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Random Developer Quotes
            </h1>
            <p className="text-muted-foreground">
              Discover inspiring and humorous quotes from the programming community
            </p>
          </div>

          {/* Quote Display Area */}
          <div className="mb-8">
            {isLoading ? (
              <LoadingState />
            ) : error ? (
              <ErrorState 
                message={error}
                onRetry={fetchRandomQuote}
              />
            ) : (
              <QuoteCard
                quote={currentQuote}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
                isVoting={isVoting}
              />
            )}
          </div>

          {/* Get New Quote Button */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              iconName="Shuffle"
              iconPosition="left"
              onClick={fetchRandomQuote}
              disabled={isLoading}
              loading={isLoading}
              className="px-8"
            >
              Get New Quote
            </Button>
          </div>

        
        </div>
      </main>
      <FloatingSubmitButton />
    </div>
  );
};

export default HomeRandomQuotes;