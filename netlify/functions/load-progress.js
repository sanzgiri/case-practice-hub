// NETLIFY FUNCTION: Load Progress from Blobs
// File location: netlify/functions/load-progress.js
// Deploy: Push to GitHub and Netlify automatically detects and deploys

import { getStore } from '@netlify/blobs';

export const handler = async (event, context) => {
  // Allow GET requests only
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get userId from query parameter
    const userId = event.queryStringParameters?.userId;
    
    if (!userId) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          error: 'userId query parameter is required',
          example: '/.netlify/functions/load-progress?userId=user_123'
        })
      };
    }

    console.log('Loading progress for userId:', userId);

    // Get blob store with token support
    const store = getStore({
      name: 'case-progress',
      siteID: process.env.SITE_ID,
      token: process.env.NETLIFY_TOKEN || process.env.NETLIFY_AUTH_TOKEN || process.env.NETLIFY_BLOBS_TOKEN
    });
    
    // Get data from Netlify Blobs
    const data = await store.get(userId, { type: 'text' });
    
    if (!data) {
      console.log('No data found for userId:', userId);
      return {
        statusCode: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({ 
          progressData: {
            userId: userId,
            cases: {},
            stats: {
              total_completed: 0,
              total_attempted: 0,
              average_time: 0,
              average_score: 0,
              market_sizing_completed: 0,
              profitability_completed: 0
            },
            last_updated: null,
            synced_at: null
          }
        })
      };
    }

    console.log('Data loaded successfully');

    return {
      statusCode: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ progressData: JSON.parse(data) })
    };
    
  } catch (error) {
    console.error('Load error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: error.message,
        stack: error.stack,
        message: 'Failed to load progress'
      })
    };
  }
};
