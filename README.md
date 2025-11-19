# Case Practice Hub

A comprehensive platform for practicing consulting case interviews with 24 real-world cases covering market sizing and profitability analysis.

## Features

- **24 Professional Cases**: 12 market sizing + 12 profitability cases
- **Realistic Practice**: Timed sessions with scratchpad, hints, and solutions
- **Progress Tracking**: Track completed cases, time spent, and performance scores
- **Cross-Device Sync**: Your progress persists across browsers and devices using Netlify Blobs
- **Case Library**: Filter by type, difficulty, and industry
- **Reference Materials**: Built-in frameworks and formulas

## Case Types

### Market Sizing (12 Cases)
- US Telehealth Market
- Global AI Software Market
- Electric Vehicle Charging Stations
- Plant-Based Meat Market
- And 8 more...

### Profitability Analysis (12 Cases)
- Tech SaaS Company
- Retail Coffee Chain
- Healthcare Clinic Network
- And 9 more...

## Setup

### Prerequisites

- Netlify account
- GitHub repository connected to Netlify

### Netlify Configuration

1. **Deploy to Netlify**
   - Connect your GitHub repository
   - Netlify will auto-deploy when you push to main

2. **Add Environment Variables**
   
   Go to your Netlify site settings → Environment variables and add:
   
   - **`SITE_ID`**: Your Netlify site ID (found in Site configuration → General → Site information)
   - **`NETLIFY_TOKEN`**: Personal access token from https://app.netlify.com/user/applications#personal-access-tokens

3. **Install Dependencies**
   ```bash
   npm install
   ```

### Local Development

```bash
npm run dev
```

## How It Works

### Storage

The app uses **Netlify Blobs** for persistent, cross-device storage:

- User data is identified by a UUID stored in localStorage
- Case progress, notes, and scores sync to Netlify Blobs
- Automatic sync every 60 seconds when changes are pending
- Data persists across browsers and devices

### Practice Flow

1. Browse the case library
2. Select a case and click "Start Practice"
3. Use the timer and scratchpad to work through the case
4. Request hints if needed
5. Reveal the solution when ready
6. Rate your performance and complete

### Progress Stats

Track your improvement with:
- Total cases attempted and completed
- Average time per case
- Average performance score
- Breakdown by case type

## Tech Stack

- Vanilla JavaScript (no frameworks)
- Netlify Functions (serverless)
- Netlify Blobs (persistent storage)
- CSS Custom Properties
