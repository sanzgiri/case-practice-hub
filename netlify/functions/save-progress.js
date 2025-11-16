// NETLIFY FUNCTION: Save Progress to Blobs
// File location: netlify/functions/save-progress.js
// Deploy: Push to GitHub and Netlify automatically detects and deploys

import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Get blob store for case progress
    const store = await getStore('case-progress');
    
    // Parse request body
    const body = await req.json();
    const { userId, cases, stats, timestamp } = body;
    
    if (!userId) {
      return new Response(JSON.stringify({ error: 'userId is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Create unique key for each user
    const key = `progress-${userId}`;
    
    // Prepare data for storage
    const progressData = {
      userId,
      cases: cases || {},
      stats: stats || {
        total_completed: 0,
        total_attempted: 0,
        average_time: 0,
        average_score: 0,
        market_sizing_completed: 0,
        profitability_completed: 0
      },
      last_updated: new Date().toISOString(),
      synced_at: timestamp
    };
    
    // Save to Netlify Blobs (overwrites if exists)
    await store.setJSON(key, progressData);
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Progress saved to cloud',
      userId: userId,
      lastUpdated: progressData.last_updated
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error) {
    console.error('Error saving progress:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to save progress',
      details: error.message 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
