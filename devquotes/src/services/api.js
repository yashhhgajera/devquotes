// src/api.js

const BASE_URL = 'http://localhost:8080/api/quotes'; // Change this if backend is deployed

// Handle fetch responses
const handleResponse = async (res) => {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Fetch error');
  }
  return res.json();
};

// POST /api/quotes
export const addQuote = async (quoteData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quoteData),
  });
  return handleResponse(res);
};

// GET /api/quotes/random
export const getRandomQuote = async () => {
  const res = await fetch(`${BASE_URL}/random`);
  return handleResponse(res);
};

// PUT /api/quotes/{id}/vote?voteType=UP or DOWN
export const voteQuote = async (id, voteType) => {
  const res = await fetch(`${BASE_URL}/${id}/vote?voteType=${voteType}`, {
    method: 'PUT',
  });
  return handleResponse(res);
};

// GET /api/quotes
export const getTopQuotes = async () => {
  const res = await fetch(BASE_URL);
  return handleResponse(res);
};
