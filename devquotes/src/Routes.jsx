import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SubmitQuote from './pages/submit-quote';
import TopQuotes from './pages/top-quotes';
import HomeRandomQuotes from './pages/home-random-quotes';




const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomeRandomQuotes />} />
        <Route path="/submit-quote" element={<SubmitQuote />} />
        <Route path="/top-quotes" element={<TopQuotes />} />
        <Route path="/home-random-quotes" element={<HomeRandomQuotes />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
