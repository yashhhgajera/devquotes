import React, { useState, useEffect } from 'react';
import NavigationHeader from '../../components/ui/NavigationHeader';
import FloatingSubmitButton from '../../components/ui/FloatingSubmitButton';
import TopQuotesHeader from './components/TopQuotesHeader';
import QuotesList from './components/QuotesList';
import { getTopQuotes, voteQuote } from '../../services/api';


const TopQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



 useEffect(() => {
  const fetchTopQuotes = async () => {
    setLoading(true);
    setError(null);

      try {
        const data = await getTopQuotes(); // Already sorted from backend
        setQuotes(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch top quotes');
      } finally {
        setLoading(false);
      }
    };

    fetchTopQuotes();
  }, []);


  // Mock data for top quotes
  


  // Handle voting on quotes
 const handleVote = async (quoteId, voteType) => {
  try {
    const updatedQuote = await voteQuote(quoteId, voteType.toUpperCase());

    setQuotes(prevQuotes =>
      prevQuotes.map(quote => quote.id === quoteId ? updatedQuote : quote)
    );

    setQuotes(prevQuotes =>
      [...prevQuotes].sort((a, b) => b.votes - a.votes)
    );
  } catch (error) {
    console.error('Failed to submit vote:', error);
  }
};


const handleRetry = async () => {
  setError(null);
  setLoading(true);

  try {
    const data = await getTopQuotes();
    const sortedQuotes = [...data].sort((a, b) => b.votes - a.votes);
    setQuotes(sortedQuotes);
  } catch (err) {
    setError('Failed to fetch top quotes');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="pt-16 lg:pt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <TopQuotesHeader quotesCount={quotes?.length} />
          
          <QuotesList
            quotes={quotes}
            loading={loading}
            error={error}
            onVote={handleVote}
            onRetry={handleRetry}
          />
        </div>
      </main>
      <FloatingSubmitButton />
    </div>
  );
};

export default TopQuotes;