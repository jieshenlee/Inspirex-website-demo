(function () {
  const L = (s) => 'Service.dc.html?s=' + s;
  const groups = {
    'Beauty & wellness': { flow: ['Choose a service', 'Pick a stylist or therapist and a time', 'Pay a deposit or pay at the venue', 'Get a reminder before the visit'], sample: [['Signature cut', '45 min'], ['Colour and gloss', '2 h'], ['Beard trim', '20 min']] },
    'Health': { flow: ['Choose a doctor or test', 'Pick a date and time', 'Pay online or at the counter', 'Get reminders and reports'], sample: [['General consultation', '15 min'], ['Specialist channelling', '20 min'], ['Full health check', '2 h']] },
    'Travel': { flow: ['Tell us where and when', 'Get a quote', 'Pay a deposit online', 'Receive tickets and itinerary'], sample: [['Beach holiday', '4 nights'], ['City break', '3 nights'], ['Visa assistance', '5 days']] },
    'Professional services': { flow: ['Choose a consultation type', 'Pick a time', 'Pay to confirm', 'Meet in person or online'], sample: [['Initial consultation', '30 min'], ['Document review', '1 h'], ['Ongoing advisory', 'Monthly']] },
    'Food & drink': { flow: ['Pick a date, time and party size', 'Add a note or occasion', 'Confirm with a deposit if needed', 'Get a reminder'], sample: [['Lunch', '12 – 3 pm'], ['Dinner', '7 – 11 pm'], ['Private dining', 'Up to 20 guests']] },
    'Events': { flow: ['Choose a venue or package', 'Check the date', 'Pay a deposit', 'Manage guests and payments'], sample: [['Wedding', 'Up to 300 guests'], ['Corporate event', 'Half or full day'], ['Birthday', 'Up to 60 guests']] },
    'Education': { flow: ['Choose a course', 'Send an enquiry or application', 'Pay the registration fee', 'Get onboarding details'], sample: [['Diploma in Business', '12 months'], ['Foundation programme', '6 months'], ['Short course', '6 weeks']] }
  };
  const ind = (slug, name, group, action, names) => ({ slug, name, group, action, templates: names.map((n, i) => ({ slug: n.toLowerCase(), name: n, layout: ['Classic', 'Editorial', 'Bold'][i] })) });
  const industries = [
    ind('salons', 'Salons & barbers', 'Beauty & wellness', 'Book an appointment', ['Mane', 'Fade', 'Lustre']),
    ind('spas', 'Spas & wellness centres', 'Beauty & wellness', 'Book a treatment', ['Still', 'Lotus', 'Ember']),
    ind('fitness', 'Fitness, yoga & Pilates', 'Beauty & wellness', 'Book a class', ['Pulse', 'Core', 'Flow']),
    ind('clinics', 'General clinics & channelling centres', 'Health', 'Channel a doctor', ['Care', 'Vital', 'Ward']),
    ind('dental', 'Dental practices', 'Health', 'Book a visit', ['Bright', 'Enamel', 'Smile']),
    ind('labs', 'Laboratories & diagnostics', 'Health', 'Book a test', ['Assay', 'Clear', 'Sample']),
    ind('travel-agencies', 'Travel agencies', 'Travel', 'Request a quote', ['Voyage', 'Compass', 'Atlas']),
    ind('air-ticketing', 'Air-ticketing agents', 'Travel', 'Request a fare', ['Runway', 'Fare', 'Jet']),
    ind('tour-operators', 'Tour operators', 'Travel', 'Book a tour', ['Trail', 'Island', 'Ridge']),
    ind('legal-accounting', 'Lawyers & accountants', 'Professional services', 'Book a consultation', ['Ledger', 'Counsel', 'Ratio']),
    ind('architects', 'Architects & consultants', 'Professional services', 'Book a consultation', ['Plan', 'Axis', 'Grid']),
    ind('coaches', 'Coaches & trainers', 'Professional services', 'Book a session', ['Rise', 'Mentor', 'Stride']),
    ind('restaurants', 'Restaurants & cafés', 'Food & drink', 'Reserve a table', ['Plate', 'Saffron', 'Brew']),
    ind('events', 'Event organisers & venues', 'Events', 'Check availability', ['Venue', 'Gather', 'Stage']),
    ind('education', 'Colleges & training providers', 'Education', 'Enquire about a course', ['Campus', 'Course', 'Scholar'])
  ];
  const results = [
    ['Education', 'APIIT', '73%', 'of enrolments from digital', 'We led the full digital transformation of Asia Pacific Institute.', 'dark'],
    ['Education', 'UCL', '400%', 'enrolment growth in the first intake', 'We rebuilt the enrolment process for Universal College Lanka.'],
    ['Fintech', 'Pay&Go', '32%', 'revenue growth, year on year', 'We built the growth model and the marketing team behind it.'],
    ['Manufacturing', 'DSI Tyres', '+53%', 'market share', 'One integrated growth and marketing programme.'],
    ['Travel tech', 'Niwadu', '100 Mn+', 'revenue in five years', "Sri Lanka's first online travel agency platform."],
    ['Travel tech', 'Travelverse', '400+', 'hotels onboarded', 'A booking platform with AI-powered recommendations.', 'tint'],
    ['Healthtech', 'HealthX', 'USD 3 Mn', 'valuation by KPMG', "Sri Lanka's first health super app."],
    ['Education', 'Inspire College', '100+', 'students enrolled in three months', 'A fully online, flipped-classroom university, filled through digital marketing.', 'violet']
  ].map(([ind, client, metric, label, desc, kind]) => ({ ind, client, metric, label, desc, kind: kind || 'light' }));
  window.IX = {
    home: 'InspireX%20Home%20v13.dc.html',
    serviceHref: L,
    services: [
      { slug: 'agentic-ai', tag: 'AI that does the work.', shape: 'helix', title: 'Agentic AI', short: 'AI agents, automation and the infrastructure to run them at scale.', does: ['Conversational AI agents for sales, support and enrolment', 'Workflow automation across your CRM, marketing and operations', 'Deployment, monitoring and the infrastructure to scale', 'EnrolX, our own agentic AI for education'], proof: ['UCL', 'Inspire College'] },
      { slug: 'data-analytics', tag: 'Know what drives revenue.', shape: 'grid', title: 'Data Analytics', short: 'Dashboards, predictive models and attribution that show what drives your revenue.', does: ['Live dashboards for revenue, marketing and operations', 'Predictive models for demand, churn and lifetime value', 'Marketing attribution across every channel', 'Data audits and clean-up'], proof: ['APIIT', 'Pay&Go'] },
      { slug: 'business-model-innovation', tag: 'New ways to make money.', shape: 'orbit', title: 'Business Model Innovation', short: 'New revenue models and go-to-market plans, tested before you commit.', does: ['New revenue models and pricing', 'Go-to-market plans for new products and markets', 'Pilots that test an idea before full investment', 'Venture building, as we did for Niwadu, HealthX and Inspire College'], proof: ['Niwadu', 'HealthX'] },
      { slug: 'creative-content-production', tag: 'Work people remember.', shape: 'butterfly', title: 'Creative & Content Production', short: 'Brand, campaigns, video and social content built to convert, not only to look good.', does: ['Brand identity and positioning', 'TV commercials, video and motion graphics', 'Social media content and campaigns', 'Websites and outdoor'], proof: ['DSI Tyres', 'Travelverse'] },
      { slug: 'digital-strategy', tag: 'One plan, every channel.', shape: 'rings', title: 'Digital Strategy', short: 'One plan across every channel, with a KPI and an owner for each move.', does: ['Growth roadmaps with KPIs and owners', 'Brand positioning', 'Omnichannel media planning', 'Marketing team set-up and training'], proof: ['Pay&Go', 'DSI Tyres'] }
    ],
    products: [
      { slug: 'templates', name: 'Templates', href: 'Templates.dc.html', line: 'Website designs for 15 business types. Every one connects to live booking, payments and a dashboard.' },
      { slug: 'booking-platform', name: 'Booking Platform', href: 'BookingPlatform.dc.html', line: 'The engine behind every template: bookings, payments, messaging and the dashboard.' },
      { slug: 'mortgage-gpt', name: 'Mortgage GPT', href: 'MortgageGPT.dc.html', line: 'An AI assistant for mortgage enquiries.' }
    ],
    groups,
    groupOrder: Object.keys(groups),
    industries,
    results,
    expertise: [
      { name: 'Education', clients: ['APIIT', 'UCL', 'Inspire College'], proof: 'UCL' },
      { name: 'Banking & finance', clients: ['Commercial Bank', 'NDB Bank', 'Cargills Bank', 'Mercantile Investments', 'Ceylon Dollar Bond Fund'] },
      { name: 'Fintech', clients: ['Pay&Go'], proof: 'Pay&Go' },
      { name: 'Travel & hospitality', clients: ['Niwadu', 'Travelverse', 'SriLankan Airlines', 'Royal Palms Beach Hotel', 'Nilaveli Beach Hotel', 'River Face Hotel', 'Santani'], proof: 'Niwadu' },
      { name: 'Healthcare', clients: ['HealthX', 'Spera Hospitals'], proof: 'HealthX' },
      { name: 'Manufacturing', clients: ['DSI Tyres', 'DSI Samson Group'], proof: 'DSI Tyres' },
      { name: 'Consumer brands', clients: ['Elephant House', 'Dialog', 'Malika Hemachandra'] }
    ],
    news: [
      { cat: 'News', tag: 'Awards · 2024', title: 'InspireX wins both education awards at SLIM Digis 2024', desc: 'Best Digital Marketing Campaign and Best Use of AI in Marketing, in the education category.' },
      { cat: 'News', tag: 'Partnership', title: 'InspireX is an Authorised Zoho Partner', desc: 'CRM, marketing automation and business apps, set up and supported locally.' },
      { cat: 'News', tag: 'Partnership', title: 'InspireX is a Certified Yandex Partner', desc: 'Advertising, analytics and digital marketing on Yandex.' },
      { cat: 'News', tag: 'Ventures', title: 'HealthX valued at USD 3 Mn by KPMG', desc: "Sri Lanka's first health super app, built inside InspireX." }
    ],
    social: [['LinkedIn', '#'], ['Instagram', '#'], ['Facebook', '#'], ['YouTube', '#']],
    card(r) {
      const k = r.kind, dark = k === 'dark', vio = k === 'violet', tint = k === 'tint';
      return Object.assign({}, r, {
        bg: dark ? '#02061E' : vio ? 'linear-gradient(160deg,#0175A9 0%,#01517C 100%)' : tint ? '#DBF5FF' : '#FFFFFF',
        fg: dark || vio ? '#FFFFFF' : '#121418',
        mute: dark ? 'rgba(255,255,255,.72)' : vio ? 'rgba(255,255,255,.82)' : '#5C5F64',
        chip: dark || vio ? 'rgba(255,255,255,.12)' : tint ? '#FFFFFF' : '#EEF0F3',
        num: dark ? '#80DCFE' : tint ? '#0175A9' : vio ? '#FFFFFF' : '#121418'
      });
    },
    thumb(layout) {
      return layout === 'Bold' ? { tb: '#02061E', tf: '#FFFFFF', ta: '#00B9FE', tc: '#121418', tl: 'rgba(255,255,255,.18)' }
        : layout === 'Editorial' ? { tb: '#FFFFFF', tf: '#121418', ta: '#0175A9', tc: '#FFFFFF', tl: 'rgba(18,20,24,.12)' }
        : { tb: '#FFFFFF', tf: '#121418', ta: '#0175A9', tc: '#FFFFFF', tl: 'rgba(18,20,24,.1)' };
    },
    param(k) { try { return new URLSearchParams(window.location.search).get(k) || ''; } catch (e) { return ''; } }
  };
})();
