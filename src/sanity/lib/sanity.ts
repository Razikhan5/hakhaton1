import { createClient } from '@sanity/client';

// Initialize Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-12-18', // Use the current date or latest API version
  useCdn: false, // Ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Optional: Only if you need to fetch private data
});