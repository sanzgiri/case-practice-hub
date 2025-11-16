// NETLIFY FUNCTION: Load Progress from Blobs
// File location: netlify/functions/load-progress.js
// Deploy: Push to GitHub and Netlify automatically detects and deploys

import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  // Allow GET requests only
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Get blob store
    const store = await getStore('case-progress');
    
    // Get userId from query parameter
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    
    if (!userId) {
      return new Response(JSON.stringify({ 
        error: 'userId query parameter is required',
        example: '/.netlify/functions/load-progress?userId=user_123'
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Create key matching save function
    const key = `progress-${userId}`;
    
    // Try to load from Netlify Blobs
    let data = null;
    try {
      data = await store.getJSON(key);
    } catch (e) {
      // If not found, return empty structure
      console.log(`No progress found for user: ${userId}`);
      data = null;
    }
    
    // Return data or empty structure if not found
    const response = {
      success: true,
      userId: userId,
      data: data || {
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
      },
      found: data !== null,
      loadedAt: new Date().toISOString()
    };
    
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error) {
    console.error('Error loading progress:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to load progress',
      details: error.message 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
