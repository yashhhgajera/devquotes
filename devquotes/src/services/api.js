// src/api.js

import { Server } from "lucide-react";



const BASE_URL = import.meta.env.VITE_BASE_URL;

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

export const getTopQuotes = async () => {
  const res = await fetch(`${BASE_URL}/top`);
  return handleResponse(res);
};

// GET /api/quotes/all (get all quotes)
export const getAllQuotes = async () => {
  const res = await fetch(`${BASE_URL}`);
  return handleResponse(res);
};
