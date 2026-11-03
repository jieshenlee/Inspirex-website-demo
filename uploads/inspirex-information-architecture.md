# InspireX Website: Information Architecture Brief

Use this as the source of truth for structure before any design or build work. Page names and slugs below are corrected from the original Excel sheet (InspireX_Website.xlsx).

## 1. Company

InspireX is a Colombo digital growth agency. The new website is a lead-oriented site for inbound enquiries, and it is also sent to prospects as outbound.

Two pillars:

| Services (agency work) | Products (platform) |
|---|---|
| Agentic AI | Templates |
| Data Analytics | Mortgage GPT |
| Business Model Innovation | Booking Platform |
| Creative & Content Production | |
| Digital Strategy | |

## 2. Sitemap

```
/                                   Home
├── /services
│   ├── /services/agentic-ai
│   ├── /services/data-analytics
│   ├── /services/business-model-innovation
│   ├── /services/creative-content-production
│   └── /services/digital-strategy
├── /products
│   ├── /products/templates                          Template hub
│   │   ├── /products/templates/{industry}           Industry page (3 templates each)
│   │   │   └── /products/templates/{industry}/{template}   Template preview
│   ├── /products/mortgage-gpt
│   └── /products/booking-platform
├── /expertise                       Industries we work in
├── /blog
│   ├── /blog/news
│   ├── /blog/case-studies
│   └── /blog/insights
└── /contact                         Book a call + social channels
```

Utility pages (outside the main nav): `/privacy`, `/terms`, and sign-in/signup if the platform is kept.

## 3. Primary navigation

Header order: **Services · Products · Expertise · Blog · Contact**

- One primary button: **Book a call** (links to `/contact`).
- Sign in and "Use this template" are secondary, not part of the main nav.
- The footer repeats the five sections, adds legal links and social channels.

## 4. Page purposes

| Page | Purpose |
|---|---|
| `/` | Short, lead-oriented landing page. Explain what InspireX does, show proof, push to Book a call. |
| `/services` | Overview of the five services. Each service has its own page. |
| `/products` | Overview of the three products and how they relate. |
| `/products/templates` | Template hub: browse the library, filter by industry, preview, start with a template. |
| `/products/mortgage-gpt` | Product page for Mortgage GPT. |
| `/products/booking-platform` | Product page for the booking, payments and dashboard engine behind the templates. |
| `/expertise` | Which industries we work in. |
| `/blog` | Hub for News, Case Studies and Insights. |
| `/contact` | CTA to book a call, plus social media channels. |

## 5. Template section (detail)

### Placement
- Templates is a product, so it lives at **`/products/templates`**, not as a top-level nav item.
- The old `/templates` URL should redirect to `/products/templates`.
- The old industry pages (`/products/salons`, `/products/clinics`, ...) move under Templates as `/products/templates/{industry}`.

### Template hub (`/products/templates`)
1. Intro: what a template is, and that every template connects to live booking, payments and a dashboard.
2. Industry filter (main filter). Layout style and primary action are optional "more filters".
3. Grid of template cards. Each card shows thumbnail, name, industry, layout style, primary action, **Preview** and **Use this template**.
4. Link to Booking Platform explaining the engine behind every template.
5. CTA: Book a call.

### Industry pages (`/products/templates/{industry}`)
1. Headline for the industry and its main action (e.g. "Book an appointment").
2. The three templates for that industry.
3. The booking flow for that industry.
4. Starting plan price and link to plans.
5. CTA: Book a call.

### Industries (15 current business types, grouped)
- **Beauty & wellness:** salons & barbers, spas & wellness centres, fitness/yoga/Pilates
- **Health:** general clinics & channelling centres, dental practices, laboratories & diagnostics
- **Travel:** travel agencies, air-ticketing agents, tour operators
- **Professional services:** lawyers & accountants, architects & consultants, coaches & trainers
- **Food & drink:** restaurants & cafés
- **Events:** event organisers & venues
- **Education:** colleges & training providers

Three templates per industry gives 45 in total. Decide at launch whether to ship all 45 or a smaller curated set.

### Template preview (`/products/templates/{industry}/{template}`)
- Live demo with sample content and sample brands (no real bookings or payments).
- Buttons: **Use this template** (to signup with the template preselected) and **Back to {industry}**.

## 6. Relationship between Templates and Booking Platform
- **Templates** are the website designs a business starts from.
- **Booking Platform** is the engine: bookings, payments, messaging and the dashboard.
- Every template page links to Booking Platform. The Booking Platform page links back to the template library.

## 7. Home page sections (proposed order)
1. Hero with headline and two actions: Book a call, Explore products
2. Short proof strip: client logos and awards
3. Services (five cards)
4. Products (three cards, with 3-4 template examples under Templates)
5. Case studies (2-3 results)
6. Enquiry / Book a call form

## 8. Open decisions
1. **Services:** keep only the five from the sheet, or also keep the four extras on the old site (Websites & Web Apps, Mobile Apps, Technology & Integrations, Student Enrolment Marketing)?
2. **Template count:** all 45 at launch, or a curated set?
3. **Pricing:** keep a separate pricing page, or fold plans into Templates and Booking Platform?
4. **Pages not in the sheet:** `/about`, `/work`, `/find`, `/book`, `/login`, `/signup`. Which survive?
5. **Slug spelling:** confirm final slugs (`mortgage-gpt`, `creative-content-production`).

## 9. Source notes
- Architecture source: InspireX_Website.xlsx (sheets: Company Architecture, User Nav).
- Current site reviewed: https://inspirex-platform.vercel.app/ (home, /templates, /products, /products/salons).
