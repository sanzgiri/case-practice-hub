// NETLIFY FUNCTION: Save Progress to Blobs
// File location: netlify/functions/save-progress.js
// Deploy: Push to GitHub and Netlify automatically detects and deploys

import { getStore } from '@netlify/blobs';

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const { userId, progressData } = JSON.parse(event.body);

    
    if (!userId) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'userId is required' })
      };
    }

    console.log('Saving progress for userId:', userId);

    // Get blob store with token support
    const store = getStore({
      name: 'case-progress',
      siteID: process.env.SITE_ID,
      token: process.env.NETLIFY_TOKEN || process.env.NETLIFY_AUTH_TOKEN || process.env.NETLIFY_BLOBS_TOKEN
    });

    // Save to Netlify Blobs
    await store.set(userId, JSON.stringify(progressData));

    console.log('Progress saved successfully');

    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ success: true, message: 'Progress saved' })
    };
    
  } catch (error) {
    console.error('Save error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: error.message,
        stack: error.stack,
        message: 'Failed to save progress'
      })
    };
  }
};
