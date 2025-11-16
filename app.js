// ============================================
// CASE PRACTICE PLATFORM - APPLICATION LOGIC
// ============================================

// -------- ALL 24 CASES DATA --------
const CASES = [
  // ========== MARKET SIZING CASES (12) ==========
  {
    id: 'ms1',
    title: 'US Telehealth Market Size',
    industry: 'Healthcare',
    difficulty: 'Medium',
    time_minutes: 20,
    type: 'Market Sizing',
    data_points: [
      'Global digital health market: $288.55B (2024)',
      'Telehealth segment: 45% of digital health market',
      'North America share: 37.7% of global digital health',
      'US adult population: 260M',
      'Telehealth adoption rate: 38% of adults',
      'Average visit cost: $75-100',
      'Annual visits per user: 2-3'
    ],
    questions: [
      'Estimate the total US telehealth market size in 2024',
      'What is the breakdown by major segment (primary care, mental health, specialists)?',
      'What is the realistic penetration rate of telehealth in total US healthcare spending?'
    ],
    solution: `SOLUTION:
Step 1: Global to North America
- Global digital health: $288.55B
- North America: 37.7% = $108.74B
- Telehealth portion: 45% = $48.93B

Step 2: US portion (roughly 90% of North America)
- US telehealth market: $44B (approximately)

Step 3: Validation via user base
- US adults: 260M
- 38% adoption = 98.8M users
- Active regular users: ~60M
- Average annual spend: $350-400
- Total: 60M × $375 = $22.5B (more conservative)

Market estimate: $25-35B in 2024

By segment:
- Primary care (40%): $10-14B
- Mental health (35%): $8.75-12.25B
- Specialists (15%): $3.75-5.25B
- Urgent care (10%): $2.5-3.5B`,
    common_mistakes: [
      'Multiplying adoption rate by average healthcare spend incorrectly',
      'Not segmenting by user type (heavy vs light users)',
      'Forgetting to validate using multiple approaches'
    ],
    key_insights: [
      'Mental health is fastest-growing segment',
      'Telehealth represents only 3-4% of total US healthcare spending',
      'Still significant market opportunity for specialized players'
    ],
    hints: [
      'Start with global market and work down to US',
      'Use multiple validation approaches',
      'Segment by user type for accuracy'
    ]
  },
  {
    id: 'ms2',
    title: 'Global AI Software Market',
    industry: 'Technology',
    difficulty: 'Hard',
    time_minutes: 25,
    type: 'Market Sizing',
    data_points: [
      'AI software market 2024: $122B',
      'Projected 2030: $467B',
      'CAGR: 25%',
      'Generative AI CAGR: 34.5%',
      'Generative AI 2024: $37.1B',
      'North America: 54% of investment',
      'Large enterprises: 74.5% of market'
    ],
    questions: [
      'Calculate 2025 global AI software market size',
      'What is 2025 Generative AI market value?',
      'What percentage of total AI market is Generative AI?'
    ],
    solution: `SOLUTION:
Step 1: 2025 AI Software Market
- 2024: $122B
- CAGR: 25%
- 2025: $122B × 1.25 = $152.5B

Step 2: Generative AI 2025
- 2024: $37.1B
- CAGR: 34.5%
- 2025: $37.1B × 1.345 = $49.9B (≈$50B)

Step 3: Gen AI as percentage
- $50B / $152.5B = 32.8%
- Growing from 30% in 2024

Market Breakdown 2025:
- Model Deployment: $45B (30%)
- Training/Optimization: $38B (25%)
- MLOps: $32B (21%)
- Feature Engineering: $22B (14%)
- Applications: $15.5B (10%)`,
    common_mistakes: [
      'Applying overall CAGR to generative AI (it grows faster)',
      'Not segmenting by component type',
      'Ignoring geographic distribution (North America 54%)'
    ],
    key_insights: [
      'Generative AI is fastest-growing segment',
      'MLOps platforms represent startup opportunity',
      'Enterprise spend concentrated in large companies'
    ],
    hints: [
      'Apply CAGR correctly: multiply by (1 + rate)',
      'Different segments have different growth rates',
      'Calculate Gen AI separately from overall AI market'
    ]
  },
  {
    id: 'ms3',
    title: 'US Coffee Shop Market Revenue',
    industry: 'Food & Beverage',
    difficulty: 'Easy',
    time_minutes: 15,
    type: 'Market Sizing',
    data_points: [
      'US population: 330M',
      'Adult coffee drinkers: 65% of adults (250M adults)',
      'Average cups per week: Heavy (40%) = 5, Regular (40%) = 2, Light (20%) = 0.5',
      'Average price per cup: $4 (café), $2 (home brewing)',
      'Café vs home split: 30% café, 70% home'
    ],
    questions: [
      'Estimate annual US coffee market revenue',
      'What is the café/coffeehouse segment specifically?',
      'How many coffee shops would support this market?'
    ],
    solution: `SOLUTION:
Step 1: Coffee drinker segments
- Total coffee drinkers: 250M × 65% = 162.5M ≈ 165M
- Heavy (40%): 66M × 5 cups/week = 330M cups/week
- Regular (40%): 66M × 2 cups/week = 132M cups/week
- Light (20%): 33M × 0.5 cups/week = 16.5M cups/week
- Total weekly: 478.5M cups/week

Step 2: Annual consumption
- Weekly × 52 = 478.5M × 52 = 24.9B cups/year

Step 3: Revenue calculation
- Café (30%): 7.47B cups × $4 = $29.9B
- Home (70%): 17.4B cups × $2 = $34.8B
- Total market: $64.7B

Step 4: Coffee shop segment
- Café revenue: ~$30B
- Average shop revenue: $600K/year
- Estimated shops: $30B / $600K = 50,000 shops`,
    common_mistakes: [
      'Not segmenting by consumption patterns',
      'Forgetting café vs home price difference',
      'Not validating with shop count sanity check'
    ],
    key_insights: [
      'Home brewing represents majority of volume',
      'Cafés capture higher value per cup',
      '~50K coffee shops in US aligns with industry data'
    ],
    hints: [
      'Segment consumers by consumption frequency',
      'Consider where coffee is consumed (home vs café)',
      'Use shop count as validation metric'
    ]
  },
  {
    id: 'ms4',
    title: 'Electric Vehicle Charging Stations (US)',
    industry: 'Automotive',
    difficulty: 'Medium',
    time_minutes: 20,
    type: 'Market Sizing',
    data_points: [
      'US vehicles: 280M',
      'EV penetration 2024: 3% (8M EVs)',
      'Projected 2030: 22% (60M EVs)',
      'Home charging capable: 70% of EV owners',
      'Public charging frequency: Home users 1x/month, No-home users 2x/week',
      'Charging time: 45 min average',
      'Station capacity: 4 chargers per station'
    ],
    questions: [
      'Estimate number of public EV charging stations needed by 2030',
      'What is daily charging demand?',
      'How does this compare to current gas station infrastructure?'
    ],
    solution: `SOLUTION:
Step 1: EV fleet 2030
- Total EVs: 280M × 22% = 61.6M ≈ 60M

Step 2: Segmentation by charging access
- Home charging: 60M × 70% = 42M (occasional public use)
- Public dependent: 60M × 30% = 18M (regular public use)

Step 3: Monthly charging sessions
- Home users: 42M × 1/month = 42M sessions
- Public users: 18M × 8/month = 144M sessions
- Total: 186M sessions/month

Step 4: Daily demand
- 186M / 30 days = 6.2M charging sessions/day

Step 5: Station capacity
- Charging time: 0.75 hours
- Operating hours: 16/day (6am-10pm)
- Utilization: 60%
- Charges per charger: 16 × 0.6 / 0.75 = 12.8 ≈ 13/day
- Station (4 chargers): 52 charges/day

Step 6: Stations needed
- 6.2M / 52 = 119,000 stations

Step 7: Sanity check
- Current gas stations: ~150K
- Our estimate: 120K (80% of gas stations)
- Makes sense: EVs 22% of fleet, but home charging reduces need`,
    common_mistakes: [
      'Not segmenting by home charging access',
      'Ignoring utilization rates',
      'Forgetting to validate against existing infrastructure'
    ],
    key_insights: [
      'Home charging dramatically reduces public infrastructure needs',
      'Apartment dwellers drive majority of public demand',
      'Charging station density similar to but less than gas stations'
    ],
    hints: [
      'Segment EVs by charging access (home vs public)',
      'Calculate station throughput capacity',
      'Compare to gas station count for validation'
    ]
  },
  {
    id: 'ms5',
    title: 'US Streaming Subscription Market',
    industry: 'Entertainment',
    difficulty: 'Easy',
    time_minutes: 15,
    type: 'Market Sizing',
    data_points: [
      'US households: 130M',
      'Internet-connected households: 92% (120M)',
      'Streaming adoption: 85% of connected homes',
      'Average subscriptions per household: 2.5',
      'Average price per service: $12/month',
      'Major players: Netflix, Disney+, Hulu, Max, Prime Video, Apple TV+'
    ],
    questions: [
      'Estimate total US streaming subscription market (annual revenue)',
      'What is the total number of subscriptions?',
      'What is average household annual spend?'
    ],
    solution: `SOLUTION:
Step 1: Streaming households
- Internet homes: 130M × 92% = 119.6M ≈ 120M
- Streaming adopters: 120M × 85% = 102M households

Step 2: Total subscriptions
- Subs per household: 2.5
- Total: 102M × 2.5 = 255M subscriptions

Step 3: Annual revenue
- Monthly per sub: $12
- Annual per sub: $144
- Total market: 255M × $144 = $36.7B

Step 4: Per household spend
- 2.5 subs × $12 = $30/month
- Annual: $360/household

Validation:
- Known: Netflix ~75M US subs, Disney+ ~50M
- Top 6 services ≈ 255M total aligns with reality`,
    common_mistakes: [
      'Counting households instead of subscriptions',
      'Not accounting for multiple services per household',
      'Forgetting annual vs monthly calculation'
    ],
    key_insights: [
      'Average household subscribes to 2-3 services',
      'Annual household spend ~$360 on streaming',
      'Market consolidation likely as households hit budget limits'
    ],
    hints: [
      'Distinguish between households and total subscriptions',
      'Account for multiple services per household',
      'Validate against known subscriber counts'
    ]
  },
  {
    id: 'ms6',
    title: 'US Pet Care Market Size',
    industry: 'Retail',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Market Sizing',
    data_points: [
      'US households: 130M',
      'Pet ownership: 67% (87M households)',
      'Pet distribution: Dogs 65M, Cats 46M, Others 10M',
      'Annual spend per pet: Dogs $1,500, Cats $1,000, Others $500',
      'Categories: Food 40%, Vet care 30%, Supplies 20%, Services 10%'
    ],
    questions: [
      'Estimate total US pet care market',
      'What is spend breakdown by category?',
      'What is the fastest-growing segment?'
    ],
    solution: `SOLUTION:
Step 1: Pet population
- Dogs: 65M × $1,500 = $97.5B
- Cats: 46M × $1,000 = $46B
- Others: 10M × $500 = $5B
- Total: $148.5B

Step 2: Category breakdown
- Food (40%): $59.4B
- Vet care (30%): $44.6B
- Supplies (20%): $29.7B
- Services (10%): $14.9B

Step 3: Growth trends
- Services (grooming, boarding, training) growing fastest at 15% CAGR
- Premiumization driving food category growth
- Telehealth vet care emerging segment

Validation:
- ~87M pet households
- Average annual spend: $148.5B / 87M = $1,707/household
- Aligns with industry reports of $1,500-2,000/year`,
    common_mistakes: [
      'Counting households instead of total pets',
      'Not distinguishing spend by pet type',
      'Missing category segmentation'
    ],
    key_insights: [
      'Pet ownership at all-time high post-pandemic',
      'Premium/health-focused products driving growth',
      'Services segment growing faster than products'
    ],
    hints: [
      'Calculate spend per pet type separately',
      'Break down by spending category',
      'Validate with per-household annual spend'
    ]
  },
  {
    id: 'ms7',
    title: 'US Meal Kit Delivery Market',
    industry: 'E-commerce',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Market Sizing',
    data_points: [
      'US households: 130M',
      'Target demographic (urban, $75K+ income): 35M households',
      'Meal kit penetration: 15% of target (5.25M)',
      'Average order: 3 meals for 2 people at $60',
      'Order frequency: 2x per month for active users',
      'Annual churn: 40% (high turnover)'
    ],
    questions: [
      'Estimate annual US meal kit market size',
      'What is customer lifetime value?',
      'What are the unit economics challenges?'
    ],
    solution: `SOLUTION:
Step 1: Active customer base
- Target households: 35M
- Penetration: 15%
- Active customers: 5.25M

Step 2: Annual revenue
- Order value: $60
- Frequency: 2x/month = 24x/year
- Annual per customer: $60 × 24 = $1,440
- Total market: 5.25M × $1,440 = $7.6B

Step 3: Customer economics
- Average customer lifetime: 1 / 0.40 = 2.5 years
- LTV: $1,440 × 2.5 = $3,600
- Typical CAC: $200-300
- LTV/CAC: 12-18x (healthy, but churn is challenge)

Step 4: Market challenges
- High acquisition costs
- Low switching costs (no loyalty)
- Logistics costs 25-30% of revenue
- Gross margins compressed to 25-30%`,
    common_mistakes: [
      'Not accounting for high churn rates',
      'Overestimating addressable market',
      'Ignoring logistics cost structure'
    ],
    key_insights: [
      'Market is ~$8B but highly competitive',
      'Customer retention is biggest challenge',
      'Unit economics tight due to logistics costs'
    ],
    hints: [
      'Focus on target demographic, not all households',
      'Account for order frequency',
      'Consider churn impact on LTV'
    ]
  },
  {
    id: 'ms8',
    title: 'US Fitness Studio Market',
    industry: 'Retail',
    difficulty: 'Easy',
    time_minutes: 15,
    type: 'Market Sizing',
    data_points: [
      'US adults: 260M',
      'Fitness participants: 25% (65M)',
      'Studio fitness (boutique) share: 15% of fitness (9.75M)',
      'Average membership: $150/month',
      'Retention rate: 70% annual',
      'Studio types: Yoga, cycling, HIIT, Pilates, boxing'
    ],
    questions: [
      'Estimate US boutique fitness studio market size',
      'How many studio locations needed?',
      'What is annual churn impact?'
    ],
    solution: `SOLUTION:
Step 1: Studio fitness market
- Fitness participants: 260M × 25% = 65M
- Studio segment: 65M × 15% = 9.75M members

Step 2: Annual revenue
- Monthly membership: $150
- Annual per member: $1,800
- Total market: 9.75M × $1,800 = $17.6B

Step 3: Studio count estimation
- Average studio capacity: 200 members
- Studios needed: 9.75M / 200 = 48,750 ≈ 50K locations

Step 4: Churn analysis
- Annual retention: 70%
- Annual churn: 30% = 2.93M members lost
- Must acquire 2.93M new members annually to maintain
- At $100 CAC: $293M annual acquisition spend

Validation:
- 50K studios across US (pop 330M)
- ~1 studio per 6,600 people
- Makes sense for boutique/urban-focused model`,
    common_mistakes: [
      'Not distinguishing boutique from traditional gyms',
      'Ignoring churn and acquisition costs',
      'Overestimating addressable market'
    ],
    key_insights: [
      'Boutique fitness is premium segment ($150 vs $60 traditional)',
      'High churn requires constant customer acquisition',
      'Market concentrated in urban/suburban areas'
    ],
    hints: [
      'Focus on boutique studio segment specifically',
      'Estimate studio locations as validation',
      'Consider membership churn impact'
    ]
  },
  {
    id: 'ms9',
    title: 'US Home Solar Installation Market',
    industry: 'Energy',
    difficulty: 'Hard',
    time_minutes: 25,
    type: 'Market Sizing',
    data_points: [
      'US households: 130M',
      'Single-family homes: 80M (others not suitable)',
      'Solar-suitable homes (roof, sun): 60M (75%)',
      'Current penetration: 5% (3M homes)',
      'Target 2030: 15% penetration (9M homes)',
      'Average system cost: $25,000 (after incentives)',
      'System lifetime: 25 years'
    ],
    questions: [
      'Estimate annual US residential solar installation market 2024-2030',
      'What is the total addressable market?',
      'How many installations per year needed to reach target?'
    ],
    solution: `SOLUTION:
Step 1: Total addressable market
- Solar-suitable homes: 60M
- Target penetration: 15%
- Target installations: 9M homes

Step 2: Current state
- Current penetration: 5% = 3M homes
- Gap to target: 9M - 3M = 6M new installations

Step 3: Annual installation rate
- Years to target: 6 years (2024-2030)
- Annual installations: 6M / 6 = 1M homes/year
- Plus replacements: negligible (25-year lifetime)

Step 4: Annual market size
- Installations: 1M/year
- Cost per system: $25,000
- Annual market: $25B/year

Step 5: Long-term TAM
- If 15% penetration maintained
- Annual replacement rate: 9M / 25 years = 360K/year
- Steady-state market: $9B/year (post-2030)

Validation:
- Current US solar market ~$20B (includes commercial)
- Residential ~50% = $10B today
- Growth to $25B by 2030 = 15% CAGR (aligned with industry)`,
    common_mistakes: [
      'Not filtering for suitable homes',
      'Ignoring current penetration baseline',
      'Forgetting replacement cycle after initial adoption'
    ],
    key_insights: [
      'Solar adoption accelerating due to incentives',
      'Market growth dependent on policy/incentives',
      'Installation capacity constraint is bottleneck'
    ],
    hints: [
      'Filter total homes to solar-suitable',
      'Calculate gap from current to target penetration',
      'Consider steady-state replacement market'
    ]
  },
  {
    id: 'ms10',
    title: 'US Online Education (K-12) Market',
    industry: 'Technology',
    difficulty: 'Medium',
    time_minutes: 20,
    type: 'Market Sizing',
    data_points: [
      'US K-12 students: 50M',
      'Private tutoring penetration: 20% (10M students)',
      'Online share of tutoring: 35% (3.5M)',
      'Average spend: $2,500/year per student',
      'Subjects: Math 40%, Reading 30%, Test Prep 20%, Other 10%',
      'Growth rate: 25% CAGR'
    ],
    questions: [
      'Estimate US online K-12 tutoring market size',
      'What is market size by subject?',
      'What will market be in 3 years?'
    ],
    solution: `SOLUTION:
Step 1: Current market size
- Online tutoring students: 3.5M
- Annual spend per student: $2,500
- Total market: 3.5M × $2,500 = $8.75B

Step 2: By subject
- Math (40%): $3.5B
- Reading (30%): $2.625B
- Test Prep (20%): $1.75B
- Other (10%): $875M

Step 3: Market in 3 years (2027)
- Current: $8.75B
- CAGR: 25%
- Year 1: $8.75B × 1.25 = $10.94B
- Year 2: $10.94B × 1.25 = $13.67B
- Year 3: $13.67B × 1.25 = $17.09B
- 2027 market: ~$17B

Step 4: Penetration increase
- Current online: 3.5M / 50M = 7% of all students
- 2027 projected: ~10M students = 20% penetration
- Online share of tutoring growing from 35% to 50%

Validation:
- Total education technology market: ~$100B
- Tutoring segment: ~8-10% seems reasonable`,
    common_mistakes: [
      'Confusing total tutoring vs online tutoring',
      'Not segmenting by subject area',
      'Miscalculating CAGR over multiple years'
    ],
    key_insights: [
      'Online tutoring accelerated by COVID-19',
      'Math tutoring is largest and fastest-growing',
      'Market fragmented with many small providers'
    ],
    hints: [
      'Start with total students, then filter to tutoring, then online',
      'Apply CAGR year by year for multi-year projection',
      'Segment by subject for deeper insight'
    ]
  },
  {
    id: 'ms11',
    title: 'US Restaurant Delivery Market',
    industry: 'Food & Beverage',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Market Sizing',
    data_points: [
      'US population: 330M',
      'Urban/suburban (delivery viable): 270M (82%)',
      'Delivery app users: 40% of viable population (108M)',
      'Active users (monthly): 50% (54M)',
      'Average orders per month: 4',
      'Average order value: $35',
      'Platform take rate: 25-30%'
    ],
    questions: [
      'Estimate total restaurant delivery GMV (gross merchandise value)',
      'What is platform revenue?',
      'What is market split between platforms?'
    ],
    solution: `SOLUTION:
Step 1: Active user base
- Delivery viable pop: 330M × 82% = 270M
- App users: 270M × 40% = 108M
- Active monthly: 108M × 50% = 54M

Step 2: Monthly GMV
- Orders per user: 4/month
- Total orders: 54M × 4 = 216M/month
- Average order: $35
- Monthly GMV: 216M × $35 = $7.56B

Step 3: Annual GMV
- Monthly: $7.56B
- Annual: $7.56B × 12 = $90.7B ≈ $90B

Step 4: Platform revenue
- Take rate: 27.5% (average)
- Platform revenue: $90B × 0.275 = $24.75B

Step 5: Market split
- DoorDash: 60% = $14.85B
- Uber Eats: 25% = $6.19B
- Grubhub: 10% = $2.48B
- Others: 5% = $1.24B

Validation:
- Per active user annual spend: $90B / 54M = $1,667/year
- Monthly: $139/month = ~4 orders × $35 ✓`,
    common_mistakes: [
      'Confusing GMV with platform revenue',
      'Not filtering for delivery-viable population',
      'Overestimating active user percentage'
    ],
    key_insights: [
      'Market dominated by DoorDash (60%+ share)',
      'Unit economics challenging due to delivery costs',
      'Ghost kitchens emerging to optimize delivery model'
    ],
    hints: [
      'Distinguish app downloads from active users',
      'Calculate GMV first, then platform revenue',
      'Filter for delivery-viable geography'
    ]
  },
  {
    id: 'ms12',
    title: 'US Smart Home Device Market',
    industry: 'Technology',
    difficulty: 'Easy',
    time_minutes: 15,
    type: 'Market Sizing',
    data_points: [
      'US households: 130M',
      'Smart home adoption: 45% (58.5M)',
      'Average devices per smart home: 4.5',
      'Device types: Speakers 25%, Security 30%, Lighting 20%, Thermostats 15%, Other 10%',
      'Average device price: $85',
      'Replacement cycle: 5 years'
    ],
    questions: [
      'Estimate annual US smart home device market',
      'What is installed base?',
      'What is breakdown by device category?'
    ],
    solution: `SOLUTION:
Step 1: Installed base
- Smart homes: 130M × 45% = 58.5M
- Devices per home: 4.5
- Total devices: 58.5M × 4.5 = 263M devices

Step 2: Annual replacement
- Replacement cycle: 5 years
- Annual replacement: 263M / 5 = 52.6M devices

Step 3: New home adoption
- Growth: 5M new smart homes/year
- Initial devices: 5M × 4.5 = 22.5M devices

Step 4: Total annual market
- Replacement: 52.6M
- New adoption: 22.5M
- Total: 75.1M devices/year
- Revenue: 75.1M × $85 = $6.4B

Step 5: By category
- Speakers (25%): $1.6B
- Security (30%): $1.92B
- Lighting (20%): $1.28B
- Thermostats (15%): $960M
- Other (10%): $640M

Validation:
- Per smart home annual spend: $6.4B / 58.5M = $109/year
- Seems reasonable for device replacement + expansion`,
    common_mistakes: [
      'Forgetting replacement cycle',
      'Not including new adoption',
      'Treating as one-time purchase vs recurring'
    ],
    key_insights: [
      'Security cameras fastest-growing category',
      'Average household expanding device count',
      'Platform lock-in (Amazon, Google, Apple) drives purchases'
    ],
    hints: [
      'Calculate installed base first',
      'Account for both replacement and new adoption',
      'Use replacement cycle for annual demand'
    ]
  },

  // ========== PROFITABILITY CASES (12) ==========
  {
    id: 'pr1',
    title: 'Fast-Casual Restaurant Margin Compression',
    industry: 'Food & Beverage',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Profitability',
    data_points: [
      'Year 1: $40M revenue, 12% net margin = $4.8M profit',
      'Year 2: $42M revenue, 10% net margin = $4.2M profit',
      'Average order value: $12',
      'Customer growth: 5% YoY',
      'Year 1 cost: COGS 28%, Labor 32%, Rent 12%, Utilities 4%, Marketing 6%, Other 6%',
      'Year 2 labor headcount: +12%',
      'Year 2 food costs: +5-8% inflation'
    ],
    questions: [
      'Identify the primary cost drivers of margin compression',
      'Calculate Year 2 cost breakdown by category',
      'What actions would restore margins to 12%?'
    ],
    solution: `SOLUTION:
Step 1: Profit calculation check
Year 1: $40M × 88% = $35.2M costs, $4.8M profit ✓
Year 2: $42M × 90% = $37.8M costs, $4.2M profit ✓

Step 2: Year 2 cost analysis
Labor crisis: headcount +12% but customer growth only +5%
- Year 1 labor: $12.8M (32% of revenue)
- Year 2 estimated: 1,000 × 1.12 = 1,120 employees
- Cost per employee: $12,800
- Year 2 labor cost: 1,120 × $12,800 = $14.34M
- As % of revenue: 34.1% (up from 32%)

COGS: Food inflation + waste
- Year 1: $11.2M (28%)
- Year 2: $11.2M × 1.065 = $11.93M
- As % of revenue: 28.4% (up from 28%)

Step 3: Margin restoration (3 levers)
Option A: Reduce headcount to 1,000
- Savings: $1.54M (1.9 pp margin improvement)

Option B: COGS management (5% reduction)
- Savings: $1.0M (2.4 pp improvement)

Option C: Price increase 2%
- Revenue impact: +$0.84M (~0.8 pp improvement)

Combined: +5.1 pp = 15% margin possible`,
    common_mistakes: [
      'Not identifying labor as primary culprit',
      'Treating all costs as variable',
      'Ignoring productivity per employee metric'
    ],
    key_insights: [
      'Headcount growing faster than customer base = warning sign',
      'Fixed costs require careful management',
      'Incremental margin on new sales was negative'
    ],
    hints: [
      'Compare headcount growth to customer growth',
      'Calculate cost per employee',
      'Identify which costs grew faster than revenue'
    ]
  },
  {
    id: 'pr2',
    title: 'SaaS Pricing & Profitability Strategy',
    industry: 'Software',
    difficulty: 'Hard',
    time_minutes: 22,
    type: 'Profitability',
    data_points: [
      'Current ARR: $5M',
      'Gross margin: 30%',
      'OpEx ratio: 60% of revenue',
      'EBITDA: -$1.5M (unprofitable)',
      'Monthly churn: 3% (36% annual)',
      'NRR: 90%',
      'ACV: $5,000',
      'Customers: 1,000',
      'CAC: $8,000',
      'Price elasticity: -1.5'
    ],
    questions: [
      'Calculate unit economics (LTV/CAC, payback period)',
      'Model financial impact of: (1) Pricing up 20%, (2) Cost cut 30%, (3) Growth invest 40%',
      'Which strategy provides best path to profitability and scale?'
    ],
    solution: `SOLUTION:
Step 1: Current unit economics
- Gross profit per customer per month: $5,000 × 30% / 12 = $125
- CAC payback: $8,000 / $125 = 64 months (VERY HIGH - should be <12)
- Customer lifetime: 1 / 0.03 = 33 months
- LTV: $125 × 33 = $4,125
- LTV/CAC: 0.52x (NEGATIVE UNIT ECONOMICS - should be >3x)

Step 2: Strategy A - Price increase 20%
- Volume decrease: -30% (elasticity -1.5)
- New customers: 1,000 × 0.70 = 700
- New ACV: $6,000
- New ARR: $4.2M (down from $5M)
- New gross profit: $1.26M
- EBITDA: -$1.74M (worse!)
- FAILS: Revenue decline outweighs benefit

Step 3: Strategy B - Cost cut 30%
- OpEx: $3M × 0.70 = $2.1M
- S&M cut → fewer customer acquisitions
- Revenue declines to $3.7M
- EBITDA: -$982K (improved but path shrinks)
- FAILS: Business shrinks into irrelevance

Step 4: Strategy C - Growth investment (+40%)
- OpEx: $4.2M
- Lower CAC through efficiency: $6.5K
- New customers: $2.1M / $6.5K = 323/year
- Improved retention: 36% → 28% churn
- Year 1 ARR: ~$5.2M, EBITDA: -$2.64M
- Year 5 projection: $16M ARR with profitability path
- VIABLE: Clear path to growth and scale

Step 5: Hybrid approach (RECOMMENDED)
- Modest pricing (+8%) to improve margin
- Growth investment (+25%) for efficiency
- Balance between profitability and growth
- Year 1: $4.6M ARR, EBITDA -$2.28M
- Year 6: Profitability achieved at $13.6M ARR

Critical unit economics to improve:
- Reduce churn from 36% to <25%
- Improve NRR from 90% to 105%+
- Lower CAC from $8K to $6.5K
- Target LTV/CAC of 3.0x minimum`,
    common_mistakes: [
      'Not calculating LTV/CAC before making decisions',
      'Assuming price increases improve profitability (can reduce revenue)',
      'Cutting costs when real issue is negative unit economics'
    ],
    key_insights: [
      'Negative LTV/CAC = fundamental problem',
      'Growth with negative unit economics is dangerous',
      'Must fix retention and gross margin before scaling'
    ],
    hints: [
      'Calculate LTV and CAC first',
      'Model each strategy scenario completely',
      'Consider multi-year path to profitability'
    ]
  },
  {
    id: 'pr3',
    title: 'E-commerce Retailer Profitability Decline',
    industry: 'E-commerce',
    difficulty: 'Medium',
    time_minutes: 20,
    type: 'Profitability',
    data_points: [
      'Revenue: $100M (flat YoY)',
      'Gross margin: Declined from 45% to 38%',
      'Operating expenses: $35M (stable)',
      'Return rate: Increased from 8% to 15%',
      'Average order value: $75',
      'Shipping cost per order: $8',
      'Returns processing: $12 per return'
    ],
    questions: [
      'Quantify profit impact of increased return rate',
      'Identify root causes of margin compression',
      'Recommend actions to restore profitability'
    ],
    solution: `SOLUTION:
Step 1: Profit comparison
Year 1:
- Revenue: $100M
- Gross profit: $45M (45%)
- OpEx: $35M
- Net profit: $10M (10% margin)

Year 2:
- Revenue: $100M
- Gross profit: $38M (38%)
- OpEx: $35M
- Net profit: $3M (3% margin)
- Profit declined $7M

Step 2: Return rate impact
Year 1:
- Orders: $100M / $75 = 1.33M
- Returns: 1.33M × 8% = 106K
- Return cost: 106K × ($8 ship + $12 process) = $2.12M

Year 2:
- Orders: 1.33M
- Returns: 1.33M × 15% = 200K
- Return cost: 200K × $20 = $4M
- Incremental cost: $1.88M

Step 3: Gross margin bridge
- Margin declined 7 points ($7M)
- Returns explain: $1.88M (27% of decline)
- Product mix shift: $3M (43%)
- COGS increase: $2.12M (30%)

Step 4: Root causes
1. Product quality issues driving returns
2. Shift to lower-margin categories
3. Supplier cost increases not passed through

Step 5: Recommendations
Immediate (0-3 months):
- Improve product descriptions/sizing (reduce returns)
- Implement stricter return policy (restocking fee)
- Renegotiate supplier contracts

Medium-term (3-6 months):
- Shift mix back to higher-margin products
- Selective price increases (5-7%)
- Optimize shipping partnerships

Expected impact:
- Return rate: 15% → 10% (saves $2M)
- Margin improvement: 3-4 points
- Restore to 7-8% net margin`,
    common_mistakes: [
      'Not calculating full cost of returns (shipping + processing)',
      'Missing product mix impact on margins',
      'Treating returns as fixed vs addressable'
    ],
    key_insights: [
      'Returns are hidden profit killer in e-commerce',
      'Product mix shifts can dramatically impact margins',
      'Customer experience vs profitability tradeoff'
    ],
    hints: [
      'Calculate return costs comprehensively',
      'Build margin bridge to explain 7-point decline',
      'Segment recommendations by timeframe'
    ]
  },
  {
    id: 'pr4',
    title: 'Manufacturing Plant Capacity Utilization',
    industry: 'Industrial',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Profitability',
    data_points: [
      'Plant capacity: 10M units/year',
      'Current production: 6M units (60% utilization)',
      'Revenue: $120M ($20/unit)',
      'Fixed costs: $40M/year',
      'Variable cost: $12/unit',
      'Competitor pricing: $18-22/unit',
      'New customer opportunity: 2M units at $18/unit'
    ],
    questions: [
      'What is current profitability?',
      'Should they accept new customer at $18/unit?',
      'What is break-even utilization rate?'
    ],
    solution: `SOLUTION:
Step 1: Current profitability
- Revenue: 6M × $20 = $120M ✓
- Variable costs: 6M × $12 = $72M
- Contribution margin: $48M
- Fixed costs: $40M
- EBIT: $8M (6.7% margin)

Step 2: New customer analysis
Incremental economics:
- Price: $18/unit
- Variable cost: $12/unit
- Contribution margin: $6/unit
- Volume: 2M units
- Incremental profit: 2M × $6 = $12M

New total:
- Production: 8M units (80% utilization)
- Revenue: $120M + $36M = $156M
- Contribution: $48M + $12M = $60M
- Fixed costs: $40M (unchanged)
- EBIT: $20M (12.8% margin)

Step 3: Decision
- Accept new customer ✓
- Incremental profit: $12M (150% increase)
- Better utilization of fixed assets
- Margin improves from 6.7% to 12.8%

Step 4: Break-even analysis
- Fixed costs: $40M
- Contribution per unit: $20 - $12 = $8
- Break-even volume: $40M / $8 = 5M units
- Break-even utilization: 5M / 10M = 50%
- Currently at 60%, well above break-even

Step 5: Considerations
- Ensure quality maintained at higher volume
- Don't cannibalize existing customers
- Lock in multi-year contract
- Risk of price pressure on existing business`,
    common_mistakes: [
      'Rejecting because $18 < $20 current price',
      'Not recognizing fixed costs already covered',
      'Ignoring capacity utilization improvement'
    ],
    key_insights: [
      'Incremental business should cover variable costs + contribute to fixed',
      'Low capacity utilization is profitability drag',
      'Price discrimination across customers can maximize profit'
    ],
    hints: [
      'Calculate incremental contribution margin',
      'Recognize fixed costs don\'t change with new customer',
      'Consider impact on capacity utilization'
    ]
  },
  {
    id: 'pr5',
    title: 'Coffee Chain Store Economics',
    industry: 'Food & Beverage',
    difficulty: 'Easy',
    time_minutes: 15,
    type: 'Profitability',
    data_points: [
      'Average store revenue: $800K/year',
      'COGS: 30% of revenue',
      'Labor: $200K/year (4 employees)',
      'Rent: $60K/year',
      'Utilities & other: $40K/year',
      'Corporate overhead allocation: $50K/year',
      'Initial investment: $400K per store'
    ],
    questions: [
      'What is annual profit per store?',
      'What is return on investment?',
      'Should they open new stores?'
    ],
    solution: `SOLUTION:
Step 1: Store P&L
- Revenue: $800K
- COGS (30%): $240K
- Gross profit: $560K (70% margin)

Operating expenses:
- Labor: $200K
- Rent: $60K
- Utilities: $40K
- Corporate: $50K
- Total OpEx: $350K

- EBIT: $560K - $350K = $210K
- EBIT margin: 26.3%

Step 2: ROI calculation
- Annual profit: $210K
- Initial investment: $400K
- ROI: $210K / $400K = 52.5%
- Payback period: 1.9 years

Step 3: Decision framework
Yes, open new stores if:
- Location has similar demographics
- Real estate available at similar rent
- Labor market can support hiring
- Brand awareness exists

Expansion economics:
- 52% ROI is excellent (hurdle rate typically 20-25%)
- <2 year payback is strong
- Store-level economics are healthy

Step 4: Scale considerations
With 100 stores:
- Revenue: $80M
- Store-level profit: $21M
- Additional corporate costs: ~$5M
- Net profit: ~$16M (20% margin)
- Enterprise value: $80-100M (5-6x EBITDA)

Recommendation: Aggressively expand`,
    common_mistakes: [
      'Not calculating store-level economics separately',
      'Ignoring payback period',
      'Not considering location-specific variables'
    ],
    key_insights: [
      'Store-level profitability is key to chain success',
      '70% gross margin is healthy for food/beverage',
      'Labor is largest OpEx component'
    ],
    hints: [
      'Build store P&L from revenue down',
      'Calculate ROI on initial investment',
      'Consider replicability of store model'
    ]
  },
  {
    id: 'pr6',
    title: 'Airline Route Profitability',
    industry: 'Industrial',
    difficulty: 'Hard',
    time_minutes: 25,
    type: 'Profitability',
    data_points: [
      'Route: NYC to Miami',
      'Aircraft: 180 seats',
      'Daily flights: 3',
      'Load factor: 75%',
      'Average ticket price: $250',
      'Variable cost per passenger: $80',
      'Fixed cost per flight: $25,000',
      'Aircraft lease: $2M/year allocated to this route'
    ],
    questions: [
      'What is annual profitability of this route?',
      'What load factor is break-even?',
      'Should they add a 4th daily flight?'
    ],
    solution: `SOLUTION:
Step 1: Current route economics
Per flight:
- Seats: 180
- Load factor: 75%
- Passengers: 135
- Revenue: 135 × $250 = $33,750
- Variable costs: 135 × $80 = $10,800
- Contribution: $22,950
- Fixed costs: $25,000
- Profit per flight: -$2,050 (UNPROFITABLE!)

Annual:
- Flights/year: 3 × 365 = 1,095
- Passenger revenue: $33,750 × 1,095 = $36.96M
- Variable costs: $10,800 × 1,095 = $11.83M
- Contribution: $25.13M
- Flight fixed costs: $25K × 1,095 = $27.38M
- Aircraft lease: $2M
- Total annual loss: -$4.25M

Step 2: Break-even load factor
- Revenue per passenger: $250
- Variable cost: $80
- Contribution: $170/passenger
- Fixed cost per flight: $25,000
- Break-even passengers: $25,000 / $170 = 147
- Break-even load factor: 147 / 180 = 81.7%

Step 3: 4th flight analysis
Incremental:
- Assumed load factor: 60% (lower for new flight)
- Passengers: 108
- Revenue: 108 × $250 = $27,000
- Variable cost: 108 × $80 = $8,640
- Contribution: $18,360
- Fixed cost: $25,000
- Loss per flight: -$6,640
- Annual loss: $6,640 × 365 = -$2.42M

Recommendation: NO, don't add 4th flight

Step 4: Route strategy options
Option A: Exit route
- Save $4.25M annual loss
- Redeploy aircraft to profitable route

Option B: Reduce to 2 daily flights
- Focus on peak demand times
- Improve load factor to 85%+
- Potentially profitable at higher utilization

Option C: Increase prices
- Test $280-300 price point
- Even 10% price increase helps significantly
- May improve load factor quality (business travelers)

Option D: Reduce costs
- Negotiate crew costs
- Optimize aircraft type (smaller plane?)
- Reduce turnaround time`,
    common_mistakes: [
      'Not calculating per-flight economics',
      'Ignoring load factor for new flight would be lower',
      'Not considering route exit as option'
    ],
    key_insights: [
      'Route is fundamentally unprofitable at current load factor',
      'Break-even requires 82% load factor (operationally challenging)',
      'Adding capacity would worsen losses'
    ],
    hints: [
      'Calculate per-flight profitability first',
      'Find break-even load factor',
      'Consider new flight would have lower demand'
    ]
  },
  {
    id: 'pr7',
    title: 'Subscription Box Service Economics',
    industry: 'E-commerce',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Profitability',
    data_points: [
      'Subscribers: 100K',
      'Monthly subscription: $40',
      'COGS per box: $18',
      'Shipping: $7 per box',
      'Monthly churn: 5%',
      'CAC: $60',
      'Monthly OpEx: $500K',
      'Referral rate: 10% (no acquisition cost)'
    ],
    questions: [
      'What is monthly and annual profitability?',
      'Calculate customer LTV',
      'Is the business model sustainable?'
    ],
    solution: `SOLUTION:
Step 1: Monthly P&L
Revenue:
- Subscribers: 100K
- Monthly price: $40
- Revenue: $4M/month

Costs:
- COGS: 100K × $18 = $1.8M
- Shipping: 100K × $7 = $700K
- OpEx: $500K
- Total costs: $3M/month

Profit: $4M - $3M = $1M/month
Margin: 25%

Step 2: Customer acquisition
Monthly churn:
- Lost: 100K × 5% = 5K subscribers
- Referrals: 5K × 10% = 500 (free)
- Need to acquire: 4,500 to maintain
- CAC cost: 4,500 × $60 = $270K/month

Adjusted profit:
- $1M - $270K = $730K/month
- $8.76M/year
- Adjusted margin: 18.3%

Step 3: Customer LTV
- Monthly contribution: $40 - $18 - $7 = $15
- Average lifetime: 1 / 0.05 = 20 months
- LTV: $15 × 20 = $300
- CAC: $60
- LTV/CAC: 5.0x ✓ (healthy, should be >3x)
- Payback: 4 months

Step 4: Sustainability analysis
Pros:
- Strong LTV/CAC ratio (5x)
- Positive cash flow
- 18% net margin after all costs
- Quick payback (4 months)

Cons:
- High churn rate (5% monthly = 46% annual)
- Requires constant customer acquisition
- Shipping costs eating into margin

Recommendation: Model is sustainable but focus on:
1. Reduce churn from 5% to 3% (would improve LTV 67%)
2. Increase referral rate through incentives
3. Negotiate better shipping rates at scale
4. Test price increase to $45 (12.5%)

Step 5: Growth scenario
If scale to 200K subscribers:
- Revenue: $8M/month
- Profit: ~$2M/month ($24M/year)
- OpEx leverage: $600K (not doubling)
- Margin improvement to 22-23%`,
    common_mistakes: [
      'Not including customer acquisition costs',
      'Forgetting to account for churn replacement',
      'Not calculating LTV to validate business model'
    ],
    key_insights: [
      'Subscription models require constant acquisition due to churn',
      'LTV/CAC ratio is key metric for sustainability',
      'Reducing churn more impactful than new acquisition'
    ],
    hints: [
      'Calculate contribution margin per subscriber',
      'Account for ongoing acquisition costs',
      'Calculate LTV considering churn rate'
    ]
  },
  {
    id: 'pr8',
    title: 'Fitness Studio Expansion Decision',
    industry: 'Retail',
    difficulty: 'Medium',
    time_minutes: 18,
    type: 'Profitability',
    data_points: [
      'Current studio: 200 members',
      'Membership: $150/month',
      'Capacity: 250 members',
      'Monthly costs: Rent $8K, Staff $15K, Other $5K',
      'New studio investment: $200K',
      'Expected new studio: 180 members in Year 1',
      'Cannibalization: 15% of new members from existing studio'
    ],
    questions: [
      'What is current studio profitability?',
      'What would new studio profitability be?',
      'Should they expand?'
    ],
    solution: `SOLUTION:
Step 1: Current studio economics
Revenue:
- Members: 200
- Price: $150/month
- Monthly revenue: $30K
- Annual: $360K

Costs:
- Rent: $8K/month = $96K/year
- Staff: $15K/month = $180K/year
- Other: $5K/month = $60K/year
- Total: $28K/month = $336K/year

Profit:
- Monthly: $2K
- Annual: $24K
- Margin: 6.7% (LOW!)

Step 2: Current studio at capacity
If grew to 250 members:
- Revenue: 250 × $150 = $37.5K/month
- Costs: $28K (same, mostly fixed)
- Profit: $9.5K/month = $114K/year
- Margin: 25.3%

Step 3: New studio Year 1
Gross members: 180
Cannibalization: 180 × 15% = 27 members
Net new: 153 members

New studio:
- Revenue: 180 × $150 = $27K/month
- Costs: $28K/month (same structure)
- Profit: -$1K/month = -$12K/year (LOSS)

Existing studio impact:
- Lost members: 27
- New count: 173
- Revenue: $25.95K/month
- Profit: -$2.05K/month = -$24.6K/year

Total profit Year 1:
- New studio: -$12K
- Existing: -$24.6K
- Combined: -$36.6K
- Plus investment: $200K
- Total Year 1 cost: -$236.6K

Step 4: Year 3 scenario (mature)
New studio: 220 members
Existing: 200 members (recovered)

New studio:
- Revenue: $33K/month = $396K/year
- Costs: $336K/year
- Profit: $60K/year

Existing: $24K/year

Total: $84K/year (vs $24K with one studio)

Step 5: Decision
NO, should NOT expand yet because:

Current studio only 80% utilized:
- Should fill existing capacity first
- Would generate $114K/year at capacity
- No additional investment needed
- Higher ROI

Recommendation:
1. Focus on filling current studio to 250 members
2. Once at capacity for 6+ months, revisit expansion
3. Consider:
   - Location far from current to minimize cannibalization
   - Lower initial costs (smaller space, fewer staff)
   - Pre-sell memberships before opening

Alternative strategy:
- Raise prices to $165/month (test elasticity)
- Would generate $42K/month at 250 members
- $504K/year revenue, $168K profit
- 33% margin without expansion risk`,
    common_mistakes: [
      'Not accounting for cannibalization',
      'Ignoring existing capacity utilization',
      'Not modeling multi-year profitability'
    ],
    key_insights: [
      'Fill existing capacity before expanding',
      'Cannibalization can make expansion unprofitable',
      'Fixed cost structure means high operating leverage'
    ],
    hints: [
      'Calculate current studio at full capacity',
      'Model cannibalization impact on both studios',
      'Consider opportunity cost of investment'
    ]
  },
  {
    id: 'pr9',
    title: 'D2C Brand Profitability Analysis',
    industry: 'E-commerce',
    difficulty: 'Hard',
    time_minutes: 22,
    type: 'Profitability',
    data_points: [
      'Revenue: $10M',
      'COGS: 35% of revenue',
      'Shipping: 8% of revenue',
      'Marketing: 40% of revenue (all performance)',
      'OpEx: 15% of revenue',
      'Average order value: $100',
      'Repeat customer rate: 30%',
      'New customer CAC: $50, Repeat CAC: $15'
    ],
    questions: [
      'What is current profitability?',
      'Calculate contribution margin for new vs repeat customers',
      'What should the customer acquisition strategy be?'
    ],
    solution: `SOLUTION:
Step 1: Overall P&L
- Revenue: $10M
- COGS (35%): $3.5M
- Shipping (8%): $800K
- Marketing (40%): $4M
- OpEx (15%): $1.5M
- Total costs: $9.8M
- Net profit: $200K (2% margin) - BARELY PROFITABLE

Step 2: Customer segmentation
Total orders: $10M / $100 = 100K orders

New customers: 70% = 70K orders
- Revenue: $7M
- COGS: $7M × 35% = $2.45M
- Shipping: $7M × 8% = $560K
- CAC: 70K × $50 = $3.5M
- Contribution: $7M - $2.45M - $560K - $3.5M = $490K
- Contribution margin: 7%

Repeat customers: 30% = 30K orders
- Revenue: $3M
- COGS: $3M × 35% = $1.05M
- Shipping: $3M × 8% = $240K
- CAC: 30K × $15 = $450K
- Contribution: $3M - $1.05M - $240K - $450K = $1.26M
- Contribution margin: 42%

Step 3: Customer economics
New customer:
- First purchase: $100
- Costs: $35 (COGS) + $8 (ship) + $50 (CAC) = $93
- First order profit: $7
- LTV (assuming 2.5 purchases lifetime): $100 × 2.5 = $250
- Total contribution: $250 - $93 - (1.5 × $58) = $70
- LTV/CAC: $70 / $50 = 1.4x (CONCERNING - should be >3x)

Step 4: Key insights
- Business is unprofitable on new customers (1.4x LTV/CAC)
- Repeat customers are highly profitable (42% margin)
- Must dramatically improve repeat rate OR reduce CAC

Step 5: Strategic recommendations

Option A: Reduce CAC by 30%
- New CAC: $35
- Improve contribution by $1.05M
- Would reach 12.5% net margin

Option B: Improve repeat rate 30% → 45%
- Shift 15K orders to repeat
- Save CAC differential: 15K × $35 = $525K
- Improve to ~7% net margin

Option C: Increase AOV to $120 (20%)
- Revenue: $12M
- COGS/shipping: $5.16M (43%)
- Marketing: $4M (stays flat - same customers)
- OpEx: $1.8M
- Profit: $1.04M (8.7% margin)

Option D: Hybrid (RECOMMENDED)
- Focus on retention (loyalty program, subscriptions)
- Reduce performance marketing 20% (CAC: $40)
- Implement referral program (15% of new at $20 CAC)
- Increase AOV through bundles (+15%)
- Expected result: 10-12% net margin

Implementation priorities:
1. Launch subscription program (improves retention)
2. Implement post-purchase email nurture (low cost)
3. Create referral program ($25 credit both sides)
4. A/B test AOV increase tactics (bundles, thresholds)
5. Optimize marketing mix (reduce low-ROI channels)`,
    common_mistakes: [
      'Not segmenting new vs repeat customer economics',
      'Missing the poor LTV/CAC ratio',
      'Not recognizing retention as key lever'
    ],
    key_insights: [
      'D2C brands live or die on repeat purchase rate',
      'New customer acquisition often unprofitable initially',
      'Retention improvements have compounding impact'
    ],
    hints: [
      'Separate new and repeat customer economics',
      'Calculate LTV/CAC ratio',
      'Model impact of improving repeat rate'
    ]
  },
  {
    id: 'pr10',
    title: 'Hotel Occupancy & Pricing Strategy',
    industry: 'Retail',
    difficulty: 'Medium',
    time_minutes: 20,
    type: 'Profitability',
    data_points: [
      'Hotel: 200 rooms',
      'Current average rate: $150/night',
      'Current occupancy: 70%',
      'Variable cost per occupied room: $40',
      'Fixed costs: $3M/year',
      'Weekday occupancy: 60%, Weekend: 90%',
      'Price elasticity: -0.8 (inelastic)'
    ],
    questions: [
      'What is current annual profitability?',
      'Should they increase prices?',
      'What is optimal pricing strategy?'
    ],
    solution: `SOLUTION:
Step 1: Current economics
Annual room nights:
- Total: 200 rooms × 365 days = 73,000
- Occupied: 73,000 × 70% = 51,100 nights

Revenue:
- 51,100 × $150 = $7.665M

Costs:
- Variable: 51,100 × $40 = $2.044M
- Fixed: $3M
- Total: $5.044M

Profit:
- $7.665M - $5.044M = $2.621M
- Margin: 34.2%

Step 2: Price increase analysis
10% price increase to $165:
- Price elasticity: -0.8
- Occupancy change: -8%
- New occupancy: 70% × 0.92 = 64.4%

New economics:
- Occupied: 73,000 × 64.4% = 47,012 nights
- Revenue: 47,012 × $165 = $7.757M
- Variable costs: 47,012 × $40 = $1.880M
- Fixed: $3M
- Profit: $2.877M (+$256K improvement)
- Margin: 37.1%

Step 3: Segmented pricing strategy

Weekdays (260 days):
- Current: 60% occupancy
- Rooms: 200 × 260 × 60% = 31,200
- Price: $135 (reduce to fill capacity)
- Target occupancy: 75%
- New rooms: 200 × 260 × 75% = 39,000
- Revenue: 39,000 × $135 = $5.265M

Weekends (105 days):
- Current: 90% occupancy (near capacity)
- Price: $200 (increase by 33%)
- Elasticity impact: 90% × 0.74 = 66.6%... No wait
- With inelastic demand (-0.8), can increase
- Target: 85% occupancy at $200
- Rooms: 200 × 105 × 85% = 17,850
- Revenue: 17,850 × $200 = $3.570M

Total segmented:
- Nights: 56,850
- Revenue: $8.835M
- Variable: 56,850 × $40 = $2.274M
- Fixed: $3M
- Profit: $3.561M (+$940K vs current!)
- Margin: 40.3%

Step 4: Additional strategies

1. Dynamic pricing:
- Implement revenue management system
- Price based on demand signals
- Expected lift: 5-10% additional revenue

2. Minimum stay requirements:
- 2-night minimum on holidays
- Reduces turnover costs
- Increases effective rate

3. Amenity unbundling:
- Breakfast: $15/person optional
- Parking: $20/night
- Early check-in: $50
- Expected: $300K additional revenue

4. Corporate contracts:
- Lock in weekday demand
- Negotiate $120 rate for volume
- Guarantees base occupancy

Step 5: Recommendation
Implement segmented pricing:
- Weekday: $135 (drive volume)
- Weekend: $200 (capture willingness to pay)
- Dynamic adjustments around holidays/events
- Add ancillary revenue opportunities
- Expected profit: $3.5-4M (35-50% increase)`,
    common_mistakes: [
      'Not recognizing weekday vs weekend demand patterns',
      'Applying single price across all segments',
      'Ignoring price elasticity differences'
    ],
    key_insights: [
      'Revenue management is critical for hotels',
      'Different demand patterns require different pricing',
      'Inelastic demand allows for price increases'
    ],
    hints: [
      'Calculate current profit baseline',
      'Test uniform price increase',
      'Consider segmented pricing by day of week'
    ]
  },
  {
    id: 'pr11',
    title: 'Grocery Store Private Label Strategy',
    industry: 'Retail',
    difficulty: 'Medium',
    time_minutes: 20,
    type: 'Profitability',
    data_points: [
      'Total store revenue: $50M',
      'Current private label share: 15% ($7.5M)',
      'National brand margin: 20%',
      'Private label margin: 35%',
      'Customer sensitivity: 25% would switch stores if brands removed',
      'Private label price: 15% below national brands',
      'Target private label share: 30%'
    ],
    questions: [
      'What is profit impact of increasing private label to 30%?',
      'What are the risks?',
      'What is the recommended approach?'
    ],
    solution: `SOLUTION:
Step 1: Current profitability
National brands:
- Revenue: $50M × 85% = $42.5M
- Margin: 20%
- Profit: $8.5M

Private label:
- Revenue: $50M × 15% = $7.5M
- Margin: 35%
- Profit: $2.625M

Total profit: $11.125M (22.3% blended margin)

Step 2: Target state (30% private label)
Scenario A: No customer loss
- National brands: $50M × 70% = $35M
- Private label: $50M × 30% = $15M
- National profit: $35M × 20% = $7M
- Private profit: $15M × 35% = $5.25M
- Total: $12.25M (+$1.125M improvement)
- Blended margin: 24.5%

Scenario B: 10% customer loss
- Total revenue: $50M × 0.90 = $45M
- National brands: $45M × 70% = $31.5M
- Private label: $45M × 30% = $13.5M
- National profit: $31.5M × 20% = $6.3M
- Private profit: $13.5M × 35% = $4.725M
- Total: $11.025M (-$100K decline!)

Step 3: Break-even customer loss
Let X = revenue retention rate
- National: $50M × X × 70% × 20%
- Private: $50M × X × 30% × 35%
- Total: $50M × X × (14% + 10.5%) = $50M × X × 24.5%
- Current: $11.125M
- Break-even: $50M × X × 24.5% = $11.125M
- X = 90.8%
- Can lose up to 9.2% of customers before negative

Step 4: Risk assessment
25% of customers say they'd switch:
- Actual switch rate typically 20-40% of stated
- Expected actual: 5-10% churn
- This is RIGHT AT break-even point
- HIGH RISK

Step 5: Recommended approach

Phased strategy:
1. Start with categories where:
   - Quality perception is less important (staples)
   - Price sensitivity is high (milk, eggs, bread)
   - Target: 25% private label in these categories

2. Maintain national brands in:
   - High-loyalty categories (soda, cereal)
   - Premium segments
   - New products

3. Improve private label:
   - Upgrade packaging/quality
   - Create tiered offering (good/better/best)
   - Market as equal quality, better value

4. Monitor metrics:
   - Customer churn by segment
   - Basket size changes
   - Category-specific shifts

5. Gradual shift:
   - Year 1: 15% → 20% (low risk)
   - Year 2: 20% → 25% (monitor)
   - Year 3: 25% → 30% (if safe)

Expected outcome:
- Year 1: +$375K profit
- Year 2: +$750K profit
- Year 3: +$1.125M profit (if full target reached)
- Customer loss: <5% (manageable)`,
    common_mistakes: [
      'Not accounting for customer loss',
      'Assuming stated preferences equal actual behavior',
      'Moving too aggressively on private label'
    ],
    key_insights: [
      'Private label more profitable but carries brand switching risk',
      'Phased approach reduces risk',
      'Different categories have different private label potential'
    ],
    hints: [
      'Calculate profit delta between scenarios',
      'Model customer loss impact',
      'Find break-even customer retention rate'
    ]
  },
  {
    id: 'pr12',
    title: 'Software Company Build vs Buy Decision',
    industry: 'Software',
    difficulty: 'Hard',
    time_minutes: 25,
    type: 'Profitability',
    data_points: [
      'Acquisition target revenue: $20M',
      'Acquisition price: $100M (5x revenue)',
      'Target growth: 30% CAGR',
      'Target EBITDA margin: 20%',
      'Build cost: $15M over 2 years',
      'Build timeline: 2 years to market',
      'Build revenue potential Year 3: $8M',
      'Integration cost: $5M',
      'Cost of capital: 12%'
    ],
    questions: [
      'Calculate NPV of buy vs build options',
      'What is break-even timeline?',
      'Which option should they choose?'
    ],
    solution: `SOLUTION:
Step 1: Buy option - 5 year projection

Year 0:
- Acquisition: -$100M
- Integration: -$5M
- Total: -$105M

Year 1:
- Revenue: $20M × 1.30 = $26M
- EBITDA: $26M × 20% = $5.2M
- Integration drag: -$2M
- Net: $3.2M

Year 2:
- Revenue: $26M × 1.30 = $33.8M
- EBITDA: $33.8M × 20% = $6.76M

Year 3:
- Revenue: $33.8M × 1.30 = $43.9M
- EBITDA: $8.78M

Year 4:
- Revenue: $43.9M × 1.30 = $57.1M
- EBITDA: $11.42M

Year 5:
- Revenue: $57.1M × 1.30 = $74.2M
- EBITDA: $14.84M

NPV calculation (12% discount rate):
- Year 0: -$105M
- Year 1: $3.2M / 1.12 = $2.86M
- Year 2: $6.76M / 1.25 = $5.41M
- Year 3: $8.78M / 1.40 = $6.27M
- Year 4: $11.42M / 1.57 = $7.27M
- Year 5: $14.84M / 1.76 = $8.43M

NPV = -$105M + $30.24M = -$74.76M

Step 2: Build option - 5 year projection

Year 0:
- Build cost: -$8M

Year 1:
- Build cost: -$7M
- Revenue: $0

Year 2:
- Revenue: $0 (just launching)
- Launch costs: -$2M

Year 3:
- Revenue: $8M
- EBITDA margin: 10% (early stage)
- EBITDA: $800K

Year 4:
- Revenue: $8M × 1.50 = $12M
- Margin: 15%
- EBITDA: $1.8M

Year 5:
- Revenue: $12M × 1.50 = $18M
- Margin: 20%
- EBITDA: $3.6M

NPV calculation:
- Year 0: -$8M
- Year 1: -$7M / 1.12 = -$6.25M
- Year 2: -$2M / 1.25 = -$1.60M
- Year 3: $0.8M / 1.40 = $0.57M
- Year 4: $1.8M / 1.57 = $1.15M
- Year 5: $3.6M / 1.76 = $2.05M

NPV = -$8M - $6.25M - $1.60M + $0.57M + $1.15M + $2.05M = -$12.08M

Step 3: Comparison

Financial:
- Buy NPV: -$74.76M
- Build NPV: -$12.08M
- Build is $62.68M better from NPV perspective

But consider:

Buy advantages:
- Immediate revenue ($26M Year 1 vs $0)
- Proven product-market fit
- Existing customers and team
- Faster time to scale
- Lower execution risk

Build advantages:
- Lower capital requirement ($15M vs $105M)
- Better NPV
- Perfect fit to requirements
- No integration challenges
- Retain full ownership

Risks:

Buy risks:
- Integration challenges (50% fail)
- Overpaying (5x revenue is high)
- Customer churn post-acquisition
- Culture clash

Build risks:
- Product development delays (70% of projects)
- Might not achieve product-market fit
- Competitive response
- Slower revenue ramp

Step 4: Scenario analysis

Best case buy:
- 40% growth, 25% margins
- NPV: -$55M

Worst case buy:
- Integration fails, 10% growth, customers churn
- NPV: -$95M (total loss)

Best case build:
- Launch on time, $12M Year 3 revenue
- NPV: -$5M

Worst case build:
- 1 year delay, product struggles
- NPV: -$25M

Step 5: Recommendation

BUILD, because:
1. Better risk-adjusted return
2. Lower capital requirement
3. More strategic flexibility
4. Can always acquire later if build fails
5. $62M NPV advantage

But de-risk with:
- Hire experienced product leader
- Build MVP first (6 months)
- Test with friendly customers
- Set decision gate at 1 year
- Reserve option to acquire if build isn't working

Decision framework:
- After Year 1: If MVP shows traction → proceed
- If not: Revisit acquisition (company may be cheaper)
- Spend $8M to learn vs committing $105M upfront`,
    common_mistakes: [
      'Not doing NPV analysis with proper discount rate',
      'Ignoring integration costs and risks',
      'Not considering optionality of build approach'
    ],
    key_insights: [
      'NPV analysis critical for large capital decisions',
      'Build option provides flexibility and learning',
      'Lower upfront capital reduces risk'
    ],
    hints: [
      'Calculate 5-year cash flows for each option',
      'Apply discount rate properly',
      'Consider qualitative factors beyond NPV'
    ]
  }
];

// Reference formulas content
const REFERENCE_CONTENT = `
  <div class="card">
    <h3>Key Formulas</h3>
    <ul class="key-points">
      <li><strong>Profit</strong> = Revenue - Costs</li>
      <li><strong>Revenue</strong> = Price × Quantity</li>
      <li><strong>Gross Margin</strong> = (Revenue - COGS) / Revenue × 100%</li>
      <li><strong>Operating Margin</strong> = Operating Profit / Revenue × 100%</li>
      <li><strong>Contribution Margin</strong> = Price - Variable Cost per Unit</li>
      <li><strong>Break-Even</strong> = Fixed Costs / Contribution Margin per Unit</li>
      <li><strong>CAGR</strong> = [(End Value / Begin Value)^(1/years)] - 1</li>
      <li><strong>Market Size (Top-Down)</strong> = Population × % Segment × Frequency × Price</li>
      <li><strong>Market Size (Bottom-Up)</strong> = # Units × Sales per Unit × Price</li>
      <li><strong>LTV/CAC Ratio</strong> = Customer Lifetime Value / Customer Acquisition Cost</li>
      <li><strong>Payback Period</strong> = CAC / Monthly Contribution Margin</li>
      <li><strong>ROI</strong> = (Gain - Cost) / Cost × 100%</li>
    </ul>
  </div>
  <div class="card">
    <h3>Mental Math Tips</h3>
    <ul class="key-points">
      <li>Round numbers for quick estimation (496 → 500)</li>
      <li>Use benchmarks: US pop ~330M, global ~8B</li>
      <li>Break down complex multiplications</li>
      <li>Percentages: 15% = 10% + 5%</li>
      <li>Always sanity-check your final answer</li>
      <li>State assumptions explicitly</li>
    </ul>
  </div>
  <div class="card">
    <h3>MECE Frameworks</h3>
    <ul class="key-points">
      <li><strong>Profitability:</strong> Revenue (Price × Quantity) vs Costs (Fixed + Variable)</li>
      <li><strong>Market Sizing:</strong> Top-Down (macro to micro) vs Bottom-Up (unit economics)</li>
      <li><strong>Customer Segments:</strong> Demographics, psychographics, behavior</li>
      <li><strong>Time Horizons:</strong> Short-term vs Long-term actions</li>
    </ul>
  </div>
`;

// ============================================
// NETLIFY BLOBS CLOUD SYNC INTEGRATION
// ============================================

/*
 * NETLIFY FUNCTIONS SETUP INSTRUCTIONS:
 * 
 * 1. Create netlify/functions/save-progress.js:
 * 
 * import { getStore } from '@netlify/blobs';
 * 
 * export default async (req, context) => {
 *   if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
 *   
 *   const { userId, data } = await req.json();
 *   const store = getStore('case-progress');
 *   await store.set(userId, JSON.stringify(data));
 *   
 *   return new Response(JSON.stringify({ success: true }), {
 *     headers: { 'Content-Type': 'application/json' }
 *   });
 * };
 * 
 * 2. Create netlify/functions/load-progress.js:
 * 
 * import { getStore } from '@netlify/blobs';
 * 
 * export default async (req, context) => {
 *   const url = new URL(req.url);
 *   const userId = url.searchParams.get('userId');
 *   
 *   const store = getStore('case-progress');
 *   const data = await store.get(userId);
 *   
 *   return new Response(data || '{}', {
 *     headers: { 'Content-Type': 'application/json' }
 *   });
 * };
 * 
 * 3. Deploy functions with your Netlify site
 */

// ============================================
// APPLICATION STATE WITH CLOUD SYNC
// ============================================

let appState = {
  currentView: 'dashboard', // dashboard, cases, caseDetail, practice, reference
  selectedCase: null,
  practiceState: {
    caseId: null,
    startTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    scratchpad: '',
    hintsUsed: 0,
    solutionRevealed: false
  },
  progress: {
    completed: {}, // caseId: {timeSpent, timestamp, notes, performanceScore}
    favorites: []  // caseId[]
  },
  cloudSync: {
    userId: null,
    lastSynced: null,
    syncStatus: 'offline', // synced, syncing, offline, error
    autoSaveInterval: null,
    autoSyncInterval: null,
    pendingChanges: false
  }
};

// ============================================
// USER SESSION & PROGRESS MANAGEMENT
// ============================================

function generateUserId() {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function initializeUser() {
  // Try to get userId from in-memory state first
  if (!appState.cloudSync.userId) {
    // Generate new userId
    appState.cloudSync.userId = generateUserId();
    showToast('New user session created', 'info');
  }
  
  updateUserDisplay();
}

function updateUserDisplay() {
  const userIdEl = document.getElementById('displayUserId');
  if (userIdEl && appState.cloudSync.userId) {
    userIdEl.textContent = appState.cloudSync.userId.substring(0, 16) + '...';
    userIdEl.title = appState.cloudSync.userId;
  }
}

function updateSyncStatus(status) {
  appState.cloudSync.syncStatus = status;
  const statusEl = document.getElementById('syncStatus');
  if (!statusEl) return;
  
  statusEl.className = 'sync-badge ' + status;
  
  const statusText = {
    synced: 'Synced ✓',
    syncing: 'Syncing...',
    offline: 'Offline Mode',
    error: 'Sync Error'
  };
  
  statusEl.textContent = statusText[status] || status;
}

function updateLastSyncTime() {
  const timeEl = document.getElementById('lastSyncTime');
  if (!timeEl) return;
  
  if (!appState.cloudSync.lastSynced) {
    timeEl.textContent = 'Never';
    return;
  }
  
  const now = Date.now();
  const diff = now - appState.cloudSync.lastSynced;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  
  if (seconds < 60) {
    timeEl.textContent = 'Just now';
  } else if (minutes < 60) {
    timeEl.textContent = minutes + 'm ago';
  } else if (hours < 24) {
    timeEl.textContent = hours + 'h ago';
  } else {
    const date = new Date(appState.cloudSync.lastSynced);
    timeEl.textContent = date.toLocaleDateString();
  }
}

// ============================================
// DATA PERSISTENCE
// ============================================

function getProgressData() {
  const data = {
    userId: appState.cloudSync.userId,
    cases: {},
    stats: calculateStats(),
    last_updated: new Date().toISOString()
  };
  
  // Build cases object from progress
  CASES.forEach(caseData => {
    const progress = appState.progress.completed[caseData.id];
    data.cases[caseData.id] = {
      title: caseData.title,
      type: caseData.type,
      completed: !!progress,
      notes: progress?.notes || '',
      performance_score: progress?.performanceScore || null,
      started_at: progress?.startedAt || null,
      completed_at: progress?.timestamp || null,
      time_spent_minutes: progress?.timeSpent || 0
    };
  });
  
  data.favorites = appState.progress.favorites;
  
  return data;
}

function calculateStats() {
  const completed = Object.values(appState.progress.completed);
  const totalCompleted = completed.length;
  const totalAttempted = completed.filter(c => c.timeSpent > 0).length;
  
  let totalTime = 0;
  let totalScore = 0;
  let scoreCount = 0;
  
  completed.forEach(c => {
    if (c.timeSpent) totalTime += c.timeSpent;
    if (c.performanceScore) {
      totalScore += c.performanceScore;
      scoreCount++;
    }
  });
  
  return {
    total_completed: totalCompleted,
    total_attempted: totalAttempted,
    average_time: totalAttempted > 0 ? Math.round(totalTime / totalAttempted) : 0,
    average_score: scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0
  };
}

function loadProgressData(data) {
  if (!data || !data.cases) return;
  
  // Load completed cases
  appState.progress.completed = {};
  Object.keys(data.cases).forEach(caseId => {
    const caseProgress = data.cases[caseId];
    if (caseProgress.completed) {
      appState.progress.completed[caseId] = {
        timeSpent: caseProgress.time_spent_minutes || 0,
        timestamp: caseProgress.completed_at,
        notes: caseProgress.notes || '',
        performanceScore: caseProgress.performance_score,
        startedAt: caseProgress.started_at
      };
    }
  });
  
  // Load favorites
  if (data.favorites) {
    appState.progress.favorites = data.favorites;
  }
}

// ============================================
// CLOUD SYNC FUNCTIONS
// ============================================

async function syncToCloud() {
  if (!appState.cloudSync.userId) {
    showToast('No user ID found', 'error');
    return;
  }
  
  updateSyncStatus('syncing');
  showToast('☁️ Syncing to cloud...', 'info');
  
  try {
    const data = getProgressData();
    
    // In production, this would call Netlify Function
    // const response = await fetch('/.netlify/functions/save-progress', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ userId: appState.cloudSync.userId, data })
    // });
    
    // Simulate cloud sync delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, store in memory (simulating cloud)
    // In production, Netlify Blobs would persist this
    window.cloudBackup = data;
    
    appState.cloudSync.lastSynced = Date.now();
    appState.cloudSync.pendingChanges = false;
    updateSyncStatus('synced');
    updateLastSyncTime();
    showToast('✅ Synced to cloud', 'success');
  } catch (error) {
    console.error('Sync error:', error);
    updateSyncStatus('error');
    showToast('❌ Sync failed: ' + error.message, 'error');
  }
}

async function loadFromCloud() {
  if (!appState.cloudSync.userId) {
    showToast('No user ID found', 'error');
    return;
  }
  
  updateSyncStatus('syncing');
  showToast('📥 Loading from cloud...', 'info');
  
  try {
    // In production, this would call Netlify Function
    // const response = await fetch(`/.netlify/functions/load-progress?userId=${appState.cloudSync.userId}`);
    // const data = await response.json();
    
    // Simulate cloud load delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For now, load from memory (simulating cloud)
    const data = window.cloudBackup;
    
    if (data && data.cases) {
      loadProgressData(data);
      updateSyncStatus('synced');
      showToast('✅ Loaded from cloud', 'success');
      renderDashboard();
      if (appState.currentView === 'cases') {
        renderCaseLibrary();
      }
    } else {
      updateSyncStatus('offline');
      showToast('No cloud data found', 'warning');
    }
  } catch (error) {
    console.error('Load error:', error);
    updateSyncStatus('error');
    showToast('❌ Load failed: ' + error.message, 'error');
  }
}

function exportData() {
  const data = getProgressData();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `case-practice-progress-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('⬇️ Data exported', 'success');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      loadProgressData(data);
      showToast('⬆️ Data imported', 'success');
      renderDashboard();
      if (appState.currentView === 'cases') {
        renderCaseLibrary();
      }
    } catch (error) {
      showToast('❌ Import failed: Invalid file', 'error');
    }
  };
  input.click();
}

function clearLocalData() {
  if (!confirm('Are you sure you want to clear all progress data? This cannot be undone.')) {
    return;
  }
  
  appState.progress.completed = {};
  appState.progress.favorites = [];
  showToast('🗑️ Progress cleared', 'info');
  renderDashboard();
  if (appState.currentView === 'cases') {
    renderCaseLibrary();
  }
}

// ============================================
// AUTO-SAVE & AUTO-SYNC
// ============================================

function startAutoSave() {
  // Auto-save to memory every 30 seconds
  if (appState.cloudSync.autoSaveInterval) {
    clearInterval(appState.cloudSync.autoSaveInterval);
  }
  
  appState.cloudSync.autoSaveInterval = setInterval(() => {
    if (appState.practiceState.caseId) {
      saveCurrentCaseNotes();
    }
  }, 30000); // 30 seconds
}

function startAutoSync() {
  // Auto-sync to cloud every 60 seconds
  if (appState.cloudSync.autoSyncInterval) {
    clearInterval(appState.cloudSync.autoSyncInterval);
  }
  
  appState.cloudSync.autoSyncInterval = setInterval(() => {
    if (appState.cloudSync.pendingChanges && appState.cloudSync.syncStatus !== 'syncing') {
      syncToCloud();
    }
  }, 60000); // 60 seconds
}

function saveCurrentCaseNotes() {
  const notesEl = document.getElementById('caseNotes');
  if (!notesEl || !appState.practiceState.caseId) return;
  
  const caseId = appState.practiceState.caseId;
  if (!appState.progress.completed[caseId]) {
    appState.progress.completed[caseId] = {};
  }
  
  appState.progress.completed[caseId].notes = notesEl.value;
  appState.cloudSync.pendingChanges = true;
  
  const indicator = document.getElementById('autoSaveIndicator');
  if (indicator) {
    const now = new Date();
    indicator.textContent = `Last saved: ${now.toLocaleTimeString()}`;
  }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================
// PROGRESS PANEL UI
// ============================================

function toggleProgressPanel() {
  const panel = document.getElementById('progressPanel');
  if (panel) {
    panel.classList.toggle('open');
  }
}

function updateCurrentCaseDisplay() {
  const caseInfo = document.getElementById('currentCaseInfo');
  const caseTitle = document.getElementById('currentCaseTitle');
  const caseNotes = document.getElementById('caseNotes');
  
  if (!caseInfo || !caseTitle) return;
  
  if (appState.practiceState.caseId) {
    const caseData = CASES.find(c => c.id === appState.practiceState.caseId);
    if (caseData) {
      caseInfo.style.display = 'block';
      caseTitle.textContent = caseData.title;
      
      // Load existing notes
      const progress = appState.progress.completed[appState.practiceState.caseId];
      if (progress && progress.notes && caseNotes) {
        caseNotes.value = progress.notes;
      }
    }
  } else {
    caseInfo.style.display = 'none';
  }
}

function saveProgress() {
  // Mark that we have pending changes
  appState.cloudSync.pendingChanges = true;
  
  // In production, this would also save locally
  // For now, changes are in memory and will sync to cloud
}

// ============================================
// NAVIGATION & ROUTING
// ============================================

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  
  // Show target section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }
  
  // Activate tab
  event.target.classList.add('active');
  
  // Update state and render
  appState.currentView = sectionId;
  
  if (sectionId === 'dashboard') {
    renderDashboard();
  } else if (sectionId === 'cases') {
    renderCaseLibrary();
  } else if (sectionId === 'reference') {
    renderReference();
  }
  
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderDashboard() {
  const completed = Object.keys(appState.progress.completed).length;
  const total = CASES.length;
  const percentage = Math.round((completed / total) * 100);
  
  // Calculate stats
  const stats = calculateStats();
  const avgTime = stats.average_time || '--';
  const avgScore = stats.average_score || '--';
  
  // Calculate total study hours
  let totalMinutes = 0;
  Object.values(appState.progress.completed).forEach(c => {
    if (c.timeSpent) totalMinutes += c.timeSpent;
  });
  const totalHours = (totalMinutes / 60).toFixed(1);
  
  // Update stats
  document.getElementById('completedCount').textContent = completed;
  document.getElementById('avgTime').textContent = avgTime !== '--' ? avgTime : '--';
  document.getElementById('progressPercent').textContent = percentage + '%';
  
  const avgScoreEl = document.getElementById('avgScore');
  if (avgScoreEl) avgScoreEl.textContent = avgScore !== '--' ? avgScore + '%' : '--';
  
  const totalHoursEl = document.getElementById('totalStudyHours');
  if (totalHoursEl) totalHoursEl.textContent = totalHours;
  
  // Progress by category
  const marketSizingCompleted = CASES.filter(c => c.type === 'Market Sizing' && appState.progress.completed[c.id]).length;
  const profitabilityCompleted = CASES.filter(c => c.type === 'Profitability' && appState.progress.completed[c.id]).length;
  
  document.getElementById('marketSizingProgress').style.width = (marketSizingCompleted / 12 * 100) + '%';
  document.getElementById('profitabilityProgress').style.width = (profitabilityCompleted / 12 * 100) + '%';
  document.getElementById('marketSizingCount').textContent = `${marketSizingCompleted}/12`;
  document.getElementById('profitabilityCount').textContent = `${profitabilityCompleted}/12`;
  
  // Quick start cases (first 3 incomplete or random)
  const incomplete = CASES.filter(c => !appState.progress.completed[c.id]).slice(0, 3);
  const quickStart = incomplete.length > 0 ? incomplete : CASES.slice(0, 3);
  
  const quickStartHTML = quickStart.map(c => `
    <div class="quick-case-card" onclick="viewCase('${c.id}')">
      <div class="quick-case-badge ${c.type.replace(' ', '-')}">${c.type}</div>
      <h4>${c.title}</h4>
      <div class="quick-case-meta">
        <span>🏢 ${c.industry}</span>
        <span>⏱️ ${c.time_minutes} min</span>
        <span>📊 ${c.difficulty}</span>
      </div>
    </div>
  `).join('');
  
  document.getElementById('quickStartCases').innerHTML = quickStartHTML;
}

function renderCaseLibrary() {
  const typeFilter = document.getElementById('typeFilter')?.value || 'all';
  const difficultyFilter = document.getElementById('difficultyFilter')?.value || 'all';
  const industryFilter = document.getElementById('industryFilter')?.value || 'all';
  
  let filtered = CASES;
  if (typeFilter !== 'all') filtered = filtered.filter(c => c.type === typeFilter);
  if (difficultyFilter !== 'all') filtered = filtered.filter(c => c.difficulty === difficultyFilter);
  if (industryFilter !== 'all') filtered = filtered.filter(c => c.industry === industryFilter);
  
  const casesHTML = filtered.map(c => {
    const isCompleted = appState.progress.completed[c.id];
    const isFavorite = appState.progress.favorites.includes(c.id);
    
    return `
      <div class="case-library-card" onclick="viewCase('${c.id}')">
        <div class="case-card-header">
          <div>
            <div class="case-type-badge ${c.type.replace(' ', '-')}">${c.type}</div>
            <h3>${c.title}</h3>
          </div>
          <div class="case-icons">
            ${isFavorite ? '⭐' : ''}
            ${isCompleted ? '✓' : ''}
          </div>
        </div>
        <div class="case-meta-grid">
          <div><strong>Industry:</strong> ${c.industry}</div>
          <div><strong>Difficulty:</strong> ${c.difficulty}</div>
          <div><strong>Time:</strong> ${c.time_minutes} min</div>
          <div><strong>Questions:</strong> ${c.questions.length}</div>
        </div>
      </div>
    `;
  }).join('');
  
  document.getElementById('casesList').innerHTML = casesHTML || '<p>No cases match your filters.</p>';
}

function viewCase(caseId) {
  const caseData = CASES.find(c => c.id === caseId);
  if (!caseData) return;
  
  appState.selectedCase = caseData;
  
  const isCompleted = appState.progress.completed[caseId];
  const isFavorite = appState.progress.favorites.includes(caseId);
  
  const caseDetailHTML = `
    <button class="back-button" onclick="backToCaseLibrary()">← Back to Library</button>
    
    <div class="case-detail-header">
      <div>
        <div class="case-type-badge ${caseData.type.replace(' ', '-')}">${caseData.type}</div>
        <h2>${caseData.title}</h2>
        <div class="case-meta-inline">
          <span>🏢 ${caseData.industry}</span>
          <span>📊 ${caseData.difficulty}</span>
          <span>⏱️ ${caseData.time_minutes} minutes</span>
          ${isCompleted ? '<span class="status-complete">✓ Completed</span>' : ''}
        </div>
      </div>
      <div class="case-actions">
        <button class="btn-icon" onclick="toggleFavorite('${caseId}')">${isFavorite ? '⭐' : '☆'}</button>
      </div>
    </div>
    
    <div class="card">
      <h3>📋 Given Information</h3>
      <ul class="data-points-list">
        ${caseData.data_points.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>
    
    <div class="card">
      <h3>❓ Questions to Answer</h3>
      <ol class="questions-list">
        ${caseData.questions.map(q => `<li>${q}</li>`).join('')}
      </ol>
    </div>
    
    <div class="card">
      <button class="btn btn--primary btn--lg" onclick="startPractice('${caseId}')">Start Practice Session</button>
      <button class="btn btn--secondary btn--lg" onclick="toggleSolution()">View Solution</button>
    </div>
    
    <div id="solutionSection" class="card" style="display: none;">
      <h3>💡 Solution</h3>
      <pre style="white-space: pre-wrap;">${caseData.solution}</pre>
      
      <h4 style="margin-top: var(--space-24);">⚠️ Common Mistakes</h4>
      <ul class="key-points">
        ${caseData.common_mistakes.map(m => `<li>${m}</li>`).join('')}
      </ul>
      
      <h4 style="margin-top: var(--space-16);">🔑 Key Insights</h4>
      <ul class="key-points">
        ${caseData.key_insights.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `;
  
  document.getElementById('caseDetail').innerHTML = caseDetailHTML;
  document.getElementById('caseDetail').style.display = 'block';
  document.getElementById('casesList').style.display = 'none';
  document.querySelector('.filters-container').style.display = 'none';
}

function backToCaseLibrary() {
  document.getElementById('caseDetail').style.display = 'none';
  document.getElementById('casesList').style.display = 'block';
  document.querySelector('.filters-container').style.display = 'block';
  appState.selectedCase = null;
}

function toggleSolution() {
  const section = document.getElementById('solutionSection');
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function toggleFavorite(caseId) {
  const index = appState.progress.favorites.indexOf(caseId);
  if (index > -1) {
    appState.progress.favorites.splice(index, 1);
  } else {
    appState.progress.favorites.push(caseId);
  }
  saveProgress(); // In-memory only
  viewCase(caseId); // Re-render
}

function startPractice(caseId) {
  const caseData = CASES.find(c => c.id === caseId);
  if (!caseData) return;
  
  appState.practiceState = {
    caseId: caseId,
    startTime: Date.now(),
    timerInterval: null,
    elapsedSeconds: 0,
    scratchpad: '',
    hintsUsed: 0,
    solutionRevealed: false
  };
  
  renderPracticeMode();
  startTimer();
  updateCurrentCaseDisplay();
  
  // Open progress panel
  const panel = document.getElementById('progressPanel');
  if (panel) panel.classList.add('open');
}

function renderPracticeMode() {
  const caseData = CASES.find(c => c.id === appState.practiceState.caseId);
  if (!caseData) return;
  
  // Load existing notes if available
  const existingProgress = appState.progress.completed[appState.practiceState.caseId];
  const savedNotes = existingProgress?.notes || '';
  
  const practiceHTML = `
    <div class="practice-header">
      <button class="back-button" onclick="exitPractice()">← Exit Practice</button>
      <div class="practice-timer">
        <span>⏱️ Time: <strong id="timerDisplay">00:00</strong></span>
        <span>Target: ${caseData.time_minutes} min</span>
      </div>
    </div>
    
    <div class="practice-layout">
      <div class="practice-main">
        <div class="card">
          <h2>${caseData.title}</h2>
          <div class="case-type-badge ${caseData.type.replace(' ', '-')}">${caseData.type}</div>
        </div>
        
        <div class="card">
          <h3>📋 Given Information</h3>
          <ul class="data-points-list">
            ${caseData.data_points.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        
        <div class="card">
          <h3>❓ Questions</h3>
          <ol class="questions-list">
            ${caseData.questions.map(q => `<li>${q}</li>`).join('')}
          </ol>
        </div>
        
        <div class="card">
          <h3>💭 Your Work Area</h3>
          <textarea id="scratchpad" class="scratchpad" placeholder="Type your analysis, calculations, and notes here...">${savedNotes || appState.practiceState.scratchpad}</textarea>
        </div>
        
        <div class="practice-actions">
          <button class="btn btn--secondary" onclick="showHints()">💡 Show Hints</button>
          <button class="btn btn--secondary" onclick="revealSolution()">📖 Reveal Solution</button>
          <button class="btn btn--primary" onclick="completePractice()">✓ Mark Complete & Save</button>
        </div>
        
        <div id="hintsSection" class="card" style="display: none;">
          <h3>💡 Hints</h3>
          <ul class="key-points">
            ${(caseData.hints || []).map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
        
        <div id="practiceSolution" class="card" style="display: none;">
          <h3>📖 Solution</h3>
          <pre style="white-space: pre-wrap;">${caseData.solution}</pre>
          
          <h4 style="margin-top: var(--space-24);">⚠️ Common Mistakes</h4>
          <ul class="key-points">
            ${caseData.common_mistakes.map(m => `<li>${m}</li>`).join('')}
          </ul>
          
          <h4 style="margin-top: var(--space-16);">🔑 Key Insights</h4>
          <ul class="key-points">
            ${caseData.key_insights.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('practiceMode').innerHTML = practiceHTML;
  document.getElementById('practiceMode').style.display = 'block';
  document.getElementById('caseDetail').style.display = 'none';
  
  // Auto-save scratchpad
  document.getElementById('scratchpad').addEventListener('input', (e) => {
    appState.practiceState.scratchpad = e.target.value;
  });
}

function startTimer() {
  appState.practiceState.timerInterval = setInterval(() => {
    appState.practiceState.elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(appState.practiceState.elapsedSeconds / 60);
  const seconds = appState.practiceState.elapsedSeconds % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const timerEl = document.getElementById('timerDisplay');
  if (timerEl) timerEl.textContent = display;
}

function showHints() {
  document.getElementById('hintsSection').style.display = 'block';
  appState.practiceState.hintsUsed++;
}

function revealSolution() {
  document.getElementById('practiceSolution').style.display = 'block';
  appState.practiceState.solutionRevealed = true;
}

function completePractice() {
  if (appState.practiceState.timerInterval) {
    clearInterval(appState.practiceState.timerInterval);
  }
  
  // Save final notes
  saveCurrentCaseNotes();
  
  const timeSpent = Math.round(appState.practiceState.elapsedSeconds / 60);
  const caseId = appState.practiceState.caseId;
  
  // Prompt for performance score
  const scoreInput = prompt('Rate your performance (0-100):', '75');
  const performanceScore = scoreInput ? parseInt(scoreInput) : null;
  
  if (!appState.progress.completed[caseId]) {
    appState.progress.completed[caseId] = {};
  }
  
  appState.progress.completed[caseId] = {
    ...appState.progress.completed[caseId],
    timeSpent: timeSpent,
    timestamp: Date.now(),
    performanceScore: performanceScore,
    startedAt: appState.practiceState.startTime
  };
  
  saveProgress();
  
  showToast(`✓ Case completed! Time: ${timeSpent} min`, 'success');
  
  // Trigger cloud sync
  setTimeout(() => syncToCloud(), 500);
  
  exitPractice();
}

function exitPractice() {
  if (appState.practiceState.timerInterval) {
    clearInterval(appState.practiceState.timerInterval);
  }
  
  // Save notes before exiting
  saveCurrentCaseNotes();
  
  // Reset practice state
  appState.practiceState.caseId = null;
  updateCurrentCaseDisplay();
  
  document.getElementById('practiceMode').style.display = 'none';
  
  if (appState.selectedCase) {
    viewCase(appState.selectedCase.id);
  } else {
    showSection('cases');
  }
}

function renderReference() {
  document.getElementById('referenceContent').innerHTML = REFERENCE_CONTENT;
}

function filterCases() {
  renderCaseLibrary();
}

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
  // Initialize user session
  initializeUser();
  
  // Start auto-save and auto-sync
  startAutoSave();
  startAutoSync();
  
  // Update sync time display periodically
  setInterval(updateLastSyncTime, 10000); // Every 10 seconds
  
  // Initial sync status
  updateSyncStatus('offline');
  
  renderDashboard();
  
  // Set up case notes auto-save
  document.addEventListener('input', (e) => {
    if (e.target.id === 'caseNotes') {
      // Debounced save
      clearTimeout(window.notesSaveTimeout);
      window.notesSaveTimeout = setTimeout(saveCurrentCaseNotes, 2000);
    }
  });
});

// Save on page unload
window.addEventListener('beforeunload', () => {
  if (appState.practiceState.caseId) {
    saveCurrentCaseNotes();
  }
  if (appState.cloudSync.pendingChanges) {
    // In production, this would trigger final sync
    // navigator.sendBeacon('/.netlify/functions/save-progress', JSON.stringify(getProgressData()));
  }
});
