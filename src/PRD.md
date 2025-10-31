# Product Requirements Document (PRD)
## RAK-JR Technical Testing Services Website

**Version:** 1.0  
**Last Updated:** October 31, 2025  
**Product Owner:** RAK-JR Technical Testing Services  
**Project Type:** Professional Services Website with Educational Tools

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Business Objectives](#business-objectives)
3. [Target Audience](#target-audience)
4. [Product Overview](#product-overview)
5. [Features & Functionality](#features--functionality)
6. [Technical Specifications](#technical-specifications)
7. [Design System](#design-system)
8. [Content Strategy](#content-strategy)
9. [Legal & Compliance](#legal--compliance)
10. [User Experience](#user-experience)
11. [Data Sources](#data-sources)
12. [Success Metrics](#success-metrics)
13. [Future Enhancements](#future-enhancements)

---

## Executive Summary

RAK-JR Technical Testing Services provides professional soil boring and geotechnical testing services for building construction compliance in the Philippines. This website serves as:

- **Primary Marketing Channel** - Professional online presence
- **Lead Generation Tool** - Contact forms and quote requests
- **Educational Platform** - Philippine Soil Risk Assessment Tool
- **Trust Builder** - Showcasing expertise and compliance focus

### Key Differentiators

✅ **Scout-inspired modern design** - Asymmetric grids, sophisticated typography  
✅ **Educational tool integration** - Regional geological risk assessment  
✅ **Professional credibility** - Government data sources (PHIVOLCS, MGB-DENR, BSWM)  
✅ **Lead capture focus** - No public pricing (competitive market requirement)  
✅ **Compliance emphasis** - National Building Code (PD 1096) requirements

---

## Business Objectives

### Primary Goals

1. **Generate Qualified Leads**
   - Target: Construction companies, property developers, homeowners
   - Conversion points: Quote requests, contact forms, phone calls
   - Geographic focus: Metro Manila and major Philippine regions

2. **Establish Authority**
   - Position as compliance experts
   - Demonstrate technical knowledge
   - Build trust through educational content

3. **Differentiate from Competitors**
   - Modern, professional web presence
   - Free risk assessment tool
   - Transparent about importance of testing

### Secondary Goals

- Educate market about soil testing importance
- Reduce unqualified inquiries through education
- Create shareable educational content
- Build SEO authority for soil testing keywords

---

## Target Audience

### Primary Personas

#### 1. Property Developer / Project Manager
- **Demographics:** 30-55 years old, construction industry professional
- **Pain Points:** Need building permit, regulatory compliance, project timeline
- **Goals:** Fast turnaround, accurate testing, competitive pricing
- **Tech Savvy:** Moderate to high
- **Decision Criteria:** Cost, timeline, reputation, compliance guarantee

#### 2. Homeowner / Individual Builder
- **Demographics:** 25-60 years old, building personal residence
- **Pain Points:** First-time builder, overwhelmed by requirements, budget-conscious
- **Goals:** Understand what's needed, get permit, stay within budget
- **Tech Savvy:** Moderate
- **Decision Criteria:** Trust, clear communication, educational support

#### 3. Architect / Engineer
- **Demographics:** 28-55 years old, licensed professional
- **Pain Points:** Need reliable testing partner, deadline pressure
- **Goals:** Quality reports, professional collaboration, timely delivery
- **Tech Savvy:** High
- **Decision Criteria:** Technical accuracy, report quality, professional standards

---

## Product Overview

### Website Structure

```
Homepage
├── Hero Section (rotating text animation, CTA)
├── About Section (company overview, expertise)
├── Services Section (soil testing packages)
├── Soil Risk Assessment Tool ⭐ (flagship feature)
├── Process Section (how it works)
├── Contact Section (quote request, contact info)
└── Footer (quick links, social media)
```

### Core Value Proposition

> **"Professional Soil Testing for Building Construction Compliance - Making Your Project Safe, Legal, and Cost-Effective"**

---

## Features & Functionality

### 1. Hero Section
**Purpose:** Immediate impact and clear value proposition

**Features:**
- Dynamic rotating text animation
  - "Soil Boring & Testing Services"
  - "Building Construction Compliance"
  - "Geotechnical Investigation"
- Dual CTAs:
  - Primary: "Get Free Assessment"
  - Secondary: "Call: 0921-403-9264"
- Professional hero image (construction/testing)

**Technical:**
- Framer Motion for text rotation
- Smooth animations, 3s cycle
- Responsive images with fallback

---

### 2. About Section
**Purpose:** Build credibility and trust

**Features:**
- Company overview
- Years of experience
- Compliance expertise emphasis
- Government agency partnerships
- Asymmetric grid layout (Scout-inspired)

**Content:**
- Founded year: 2019
- Focus: National Building Code compliance
- Expertise: Soil boring, geotechnical testing
- Service area: Metro Manila + regions

---

### 3. Services Section
**Purpose:** Showcase service packages without revealing pricing

**Services Offered:**

#### Basic Package (1-2 Story)
- Standard Penetration Test (SPT) - 2 borings
- Soil Classification (USCS/AASHTO)
- Atterberg Limits Test
- Moisture Content Analysis
- Grain Size Distribution
- Basic Geotechnical Report
- **Depth:** 10-15 meters
- **Timeline:** 1-2 weeks
- **Suitable for:** Small residential buildings

#### Standard Package (3-5 Story)
- Standard Penetration Test (SPT) - 3-4 borings
- Soil Classification
- Atterberg Limits Test
- Unconfined Compression Test
- Consolidation Test
- Direct Shear Test
- Groundwater Level Monitoring
- Comprehensive Geotechnical Report
- **Depth:** 15-25 meters
- **Timeline:** 2-3 weeks
- **Suitable for:** Medium-rise buildings

#### Comprehensive Package (5+ Story)
- Multiple SPT borings (1 per 500sqm)
- Soil Classification
- Atterberg Limits Test
- Triaxial Compression Test
- Consolidation Test
- Direct Shear Test
- Plate Load Test
- Groundwater Monitoring
- Detailed Geotechnical Report
- **Depth:** 20-35 meters
- **Timeline:** 3-4 weeks
- **Suitable for:** High-rise buildings

#### Specialized Studies
- Seismic Refraction Survey
- Liquefaction Assessment
- Active Fault Investigation
- Slope Stability Analysis
- Pile Load Test
- Ground Penetrating Radar
- **Timeline:** Additional 2-4 weeks
- **Suitable for:** High-risk areas

**Important:** No pricing displayed (competitive market, customized quotes required)

---

### 4. Philippine Soil Risk Assessment Tool ⭐
**Purpose:** Lead generation through educational value

#### 4.1 Overview
- **Type:** Regional geological overview tool
- **Data Source:** Government agencies (PHIVOLCS, MGB-DENR, BSWM)
- **Purpose:** Education + lead capture
- **Scope:** 17 Philippine regions

#### 4.2 Features

**User Flow:**
1. User selects Philippine region from dropdown
2. System displays regional overview (1.2s loading animation)
3. User reviews:
   - General geological characteristics
   - Regional hazards (seismic, liquefaction, flooding, landslide, volcanic)
   - Typical investigation needs
   - Legal requirements
   - Why testing is mandatory
4. User can request professional quote via email

**Regional Coverage:**
- NCR (National Capital Region)
- CAR (Cordillera Administrative Region)
- Region I - Ilocos
- Region II - Cagayan Valley
- Region III - Central Luzon
- Region IV-A - CALABARZON
- Region IV-B - MIMAROPA
- Region V - Bicol
- Region VI - Western Visayas
- Region VII - Central Visayas
- Region VIII - Eastern Visayas
- Region IX - Zamboanga Peninsula
- Region X - Northern Mindanao
- Region XI - Davao
- Region XII - SOCCSKSARGEN
- Region XIII - Caraga
- BARMM - Bangsamoro

#### 4.3 Data Displayed

**For Each Region:**

1. **General Characteristics**
   - Terrain description
   - Soil types (general)
   - Geological variability
   - Development history (if applicable)
   - Climate factors

2. **General Hazards**
   - Seismic risk level + concerns
   - Liquefaction risk (if applicable)
   - Flooding risk (if applicable)
   - Landslide risk (if applicable)
   - Volcanic risk (if applicable)
   - Typhoon exposure (if applicable)
   - Tsunami risk (if applicable)

3. **Critical Notes**
   - Region-specific warnings
   - Special considerations
   - High-risk area alerts

4. **Typical Investigation Needs**
   - Minimum boring depth
   - Common tests required
   - Specialized tests (if applicable)
   - Estimated cost range (general guidance)

5. **Legal Requirements**
   - PD 1096 requirements
   - Mandatory testing conditions
   - Submittal requirements

6. **Why Testing is Mandatory**
   - Safety reasons
   - Legal requirements
   - Financial protection

#### 4.4 Critical Disclaimers

**Multiple prominent warnings:**

✗ NOT site-specific assessment  
✗ NOT sufficient for construction decisions  
✗ NOT substitute for professional investigation  
✗ NOT usable for building permits  

✓ Regional overview ONLY  
✓ Educational purpose ONLY  
✓ Professional investigation MANDATORY  

**Displayed:**
- In header (yellow warning)
- Before assessment (yellow box)
- After assessment (red disclaimer box)
- Throughout content

#### 4.5 Lead Capture

**Email Integration:**
- Pre-filled subject: "Soil Investigation Quote Request - [Region Name]"
- Pre-filled body with region info
- User adds their contact details
- Sends to: rakjunior_since2019@yahoo.com

**Phone CTA:**
- Prominent phone button: 0921-403-9264
- Click-to-call on mobile

---

### 5. Process Section
**Purpose:** Transparency and expectation setting

**Steps:**
1. **Initial Consultation** - Discuss project requirements
2. **Site Assessment** - Visit and evaluate location
3. **Soil Boring** - Professional drilling and sampling
4. **Laboratory Testing** - Comprehensive soil analysis
5. **Report Delivery** - Geotechnical engineer's report
6. **Permit Support** - Assistance with building permit

**Timeline Indication:** 2-4 weeks typical

---

### 6. Contact Section
**Purpose:** Multiple conversion paths

**Contact Methods:**
1. **Quote Request Form**
   - Name, Email, Phone, Project Type, Message
   - Validates required fields
   - Email submission to rakjunior_since2019@yahoo.com

2. **Direct Phone**
   - 0921-403-9264
   - Click-to-call functionality

3. **Email**
   - rakjunior_since2019@yahoo.com
   - Mailto link

4. **Social Media** (if available)
   - Facebook, LinkedIn, etc.

---

## Technical Specifications

### Tech Stack

**Frontend:**
- React (TypeScript)
- Tailwind CSS v4.0
- Framer Motion (motion/react)
- Recharts (for future data visualization)
- Shadcn/ui components

**Libraries:**
- lucide-react (icons)
- sonner (toast notifications)
- react-hook-form@7.55.0 (form handling)

**Build:**
- Vite/bundler
- TypeScript compiler
- Tailwind CSS compilation

### File Structure

```
/
├── App.tsx (main entry point)
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── SoilRiskAssessment.tsx ⭐
│   ├── Process.tsx
│   ├── Contact.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── RequestQuote.tsx
│   └── ui/ (shadcn components)
├── data/
│   └── soilKnowledgeBase.ts ⭐
├── styles/
│   └── globals.css
└── PRD.md
```

### Performance Requirements

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** > 90
- **Mobile Responsive:** All breakpoints
- **Accessibility:** WCAG 2.1 AA compliant

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## Design System

### Brand Colors

**Primary Palette:**
- Bright Green: `#10c202` - Primary CTA, accents
- Yellow/Gold: `#fdc123` - Secondary accents, highlights
- Dark Green: `#028118` - Hover states, depth

**Background:**
- Main: `#f3f4ea` - Primary background
- Light Beige: `#e2e2d9` - Secondary background
- White: `#ffffff` - Card backgrounds
- Dark: `#023c3d` - Dark sections, footer

**Semantic Colors:**
- Risk Red: `#dc2626` - Critical/Very High risk
- Warning Orange: `#f59e0b` - High risk
- Warning Yellow: `#fbbf24` - Medium risk
- Info Blue: `#3b82f6` - Moderate risk
- Success Green: `#10c202` - Low risk

### Typography

**Font System:**
- Default typography from `styles/globals.css`
- **No Tailwind font classes** (text-2xl, font-bold) unless explicitly requested
- System font stack for performance
- Tracking: `tracking-tight` for headings
- Leading: Default from globals.css

**Hierarchy:**
- H1: 4xl-6xl (Hero)
- H2: 3xl-4xl (Section headers)
- H3: 2xl-3xl (Subsections)
- H4: xl-2xl (Cards)
- Body: base
- Small: sm
- Extra small: xs

### Layout System

**Scout-Inspired Asymmetry:**
- Asymmetric grids (not always centered)
- Offset elements
- Varied column widths
- Intentional white space

**Spacing:**
- Container: `container mx-auto px-4`
- Sections: `py-24` vertical padding
- Cards: `p-6` to `p-10`
- Gaps: `gap-4` to `gap-8`

**Rounded Corners:**
- Large cards: `rounded-3xl` (24px)
- Medium cards: `rounded-2xl` (16px)
- Small elements: `rounded-xl` (12px)
- Buttons: `rounded-xl`

**Shadows:**
- Cards: `shadow-2xl` for elevation
- Hover: Subtle lift with shadow increase

### Components

**Button Styles:**
- Primary: `bg-[#10c202] hover:bg-[#028118] text-white`
- Secondary: `bg-white hover:bg-gray-50 border-2`
- Size: `h-14` for prominent CTAs

**Card Styles:**
- Background: `bg-white`
- Border radius: `rounded-3xl`
- Padding: `p-8` or `p-10`
- Shadow: `shadow-2xl`

**Form Elements:**
- Inputs: `h-14 rounded-xl`
- Select: `rounded-xl`
- Textarea: `rounded-xl`

---

## Content Strategy

### Messaging Pillars

1. **Compliance Focus**
   - "Building Construction Compliance"
   - "National Building Code (PD 1096) Requirements"
   - "Licensed Professional Reports"

2. **Safety & Protection**
   - "Saves Lives"
   - "Prevents Building Collapse"
   - "Protects Your Investment"

3. **Professional Expertise**
   - "Since 2019"
   - "Government Data Sources"
   - "Comprehensive Testing"

4. **Educational Authority**
   - "Free Risk Assessment"
   - "Regional Geological Data"
   - "Transparent About Process"

### Tone of Voice

- **Professional** - Technical accuracy, expert knowledge
- **Educational** - Explain why, not just what
- **Trustworthy** - Transparent, honest, compliant
- **Accessible** - Complex topics made understandable
- **Urgent** - Emphasize legal requirements and safety

### SEO Keywords

**Primary:**
- Soil boring Philippines
- Geotechnical testing Metro Manila
- Soil testing building permit
- National Building Code soil testing
- Construction soil investigation

**Secondary:**
- SPT test Philippines
- Foundation soil testing
- Building permit requirements Philippines
- Geotechnical engineer report
- Soil bearing capacity test

**Long-tail:**
- How much does soil testing cost Philippines
- Do I need soil testing for 2 story house
- Soil boring requirements Metro Manila
- Where to get soil testing for building permit

---

## Legal & Compliance

### Disclaimers

**Soil Risk Assessment Tool:**

**Primary Disclaimer:**
> "This provides REGIONAL OVERVIEW ONLY. This is NOT: site-specific assessment, sufficient for construction decisions, substitute for professional investigation, or usable for building permits. EVERY CONSTRUCTION SITE REQUIRES professional geotechnical investigation with site-specific soil boring, laboratory testing, and licensed engineer's analysis per National Building Code (PD 1096)."

**Displayed:**
- Tool header
- Before assessment
- After results (prominent red box)
- Multiple times throughout

**Legal Requirements Section:**
- Quotes PD 1096 (National Building Code)
- References NSCP 2015
- States mandatory testing requirements
- Explains consequences of non-compliance

### Data Sources Attribution

**Government Agencies:**
- PHIVOLCS (Philippine Institute of Volcanology and Seismology)
- MGB-DENR (Mines and Geosciences Bureau)
- BSWM (Bureau of Soils and Water Management)
- PhilRice (Philippine Rice Research Institute)

**Legal Documents:**
- Presidential Decree No. 1096 (National Building Code)
- NSCP 2015 (National Structural Code)

**Attribution:** Displayed in tool header and footer

### Privacy & Data

**No Personal Data Collection:**
- No cookies
- No tracking
- No database storage
- Email only via mailto (user's email client)

**Contact Form:**
- Data sent via email only
- Not stored on server
- User controls submission

---

## User Experience

### User Journey: Property Developer

1. **Awareness**
   - Arrives via Google search "soil testing Metro Manila"
   - Lands on hero section

2. **Interest**
   - Scrolls to see services
   - Notices "Free Assessment" tool

3. **Consideration**
   - Uses Soil Risk Assessment for project location (CALABARZON)
   - Reviews regional hazards and requirements
   - Sees "VERY HIGH seismic risk" warning
   - Understands need for comprehensive testing

4. **Decision**
   - Clicks "Request Professional Quote"
   - Email opens with pre-filled info
   - Adds project details
   - Sends email

5. **Follow-up**
   - RAK-JR responds with customized quote
   - Site visit scheduled
   - Project begins

### User Journey: First-Time Homeowner

1. **Awareness**
   - Told by architect "you need soil testing"
   - Googles "what is soil testing Philippines"

2. **Education**
   - Finds RAK-JR website
   - Reads "Why Testing Matters" section
   - Understands legal requirement (PD 1096)
   - Learns about safety implications

3. **Assessment**
   - Uses tool for their city (Rizal)
   - Sees "CRITICAL fault zone" warning
   - Understands why testing is mandatory
   - Reviews testing packages

4. **Contact**
   - Calls phone number: 0921-403-9264
   - Speaks with representative
   - Gets quote and explanation
   - Books service

### Key UX Principles

1. **Progressive Disclosure**
   - Simple interface, complex data behind
   - Regional overview → Details → Contact

2. **Trust Building**
   - Government data sources
   - Educational content
   - Transparent disclaimers
   - Professional design

3. **Clear CTAs**
   - Every section has action path
   - Multiple contact methods
   - Persistent phone number

4. **Mobile-First**
   - Responsive at all breakpoints
   - Touch-friendly buttons (h-14)
   - Readable text sizes

5. **Accessibility**
   - Proper heading hierarchy
   - Alt text for images
   - Color contrast compliance
   - Keyboard navigation

---

## Data Sources

### PHILIPPINE_REGIONS Data Structure

```typescript
{
  code: string;           // "NCR", "CAR", etc.
  name: string;           // Full region name
  
  generalCharacteristics: {
    terrain: string;      // Geography description
    soilTypes: string;    // General soil composition
    geologicVariability?: string;
    development?: string;
    // ... other characteristics
  };
  
  generalHazards: {
    seismic?: {
      level: string;      // "LOW" to "EXTREME"
      concern: string;    // Primary concern
      note?: string;      // Additional info
    };
    liquefaction?: { ... };
    flooding?: { ... };
    landslide?: { ... };
    volcanic?: { ... };
    typhoon?: { ... };
    tsunami?: { ... };
  };
  
  criticalNote?: string;  // Region-specific warnings
  
  typicalInvestigationNeeds: {
    minimumBoringDepth: string;
    commonTests?: string[];
    specializedTests?: string[];
    estimatedCost: string; // General range
  };
}
```

### Coverage: 17 Regions

✅ NCR (Metro Manila)  
✅ CAR (Cordillera)  
✅ Region I (Ilocos)  
✅ Region II (Cagayan Valley)  
✅ Region III (Central Luzon)  
✅ Region IV-A (CALABARZON)  
✅ Region IV-B (MIMAROPA)  
✅ Region V (Bicol)  
✅ Region VI (Western Visayas)  
✅ Region VII (Central Visayas)  
✅ Region VIII (Eastern Visayas)  
✅ Region IX (Zamboanga Peninsula)  
✅ Region X (Northern Mindanao)  
✅ Region XI (Davao)  
✅ Region XII (SOCCSKSARGEN)  
✅ Region XIII (Caraga)  
✅ BARMM (Bangsamoro)  

---

## Success Metrics

### Primary KPIs

1. **Lead Generation**
   - Quote requests per month: Target 20-50
   - Phone calls per month: Target 10-30
   - Email inquiries per month: Target 15-40

2. **Engagement**
   - Assessment tool usage: Target 100-300/month
   - Average time on site: Target > 2 minutes
   - Pages per session: Target > 3

3. **Conversion**
   - Assessment → Contact rate: Target 10-20%
   - Overall conversion rate: Target 3-5%
   - Return visitor rate: Target 15-25%

### Secondary KPIs

- SEO rankings for target keywords
- Organic traffic growth
- Social media shares
- Mobile vs desktop traffic
- Geographic traffic distribution

### Quality Metrics

- Page load time < 3s
- Mobile usability score > 95
- Accessibility score > 90
- User satisfaction (if surveyed)

---

## Future Enhancements

### Phase 2 (3-6 months)

1. **Enhanced Assessment Tool**
   - Province/city dropdown (instead of just regions)
   - More detailed hazard maps
   - PDF export of assessment results
   - Email report delivery

2. **Case Studies**
   - Past project showcases
   - Before/after examples
   - Client testimonials
   - Photo galleries

3. **Blog/Resources**
   - Educational articles
   - Soil testing guides
   - Building code updates
   - FAQs

4. **Online Booking**
   - Calendar integration
   - Service package selection
   - Deposit payment (if applicable)
   - Automated confirmations

### Phase 3 (6-12 months)

1. **Client Portal**
   - Project tracking
   - Report downloads
   - Invoice history
   - Direct messaging

2. **Interactive Tools**
   - Cost calculator (if pricing becomes less competitive)
   - Timeline estimator
   - Service package comparator
   - Soil type identifier

3. **Multi-language**
   - Filipino/Tagalog version
   - Regional languages
   - Automatic detection

4. **Advanced Analytics**
   - Heatmaps
   - User flow analysis
   - A/B testing
   - Conversion funnel tracking

### Long-term Vision

- **Mobile App** - Quick assessments, site photos, report access
- **API Integration** - For architects/engineers to integrate into their tools
- **Franchise/Partner Portal** - If expanding to multiple locations
- **Industry Platform** - Connect testing labs, engineers, contractors

---

## Appendices

### A. Competitive Analysis

**Key Competitors:**
- Other geotechnical testing companies in Metro Manila
- Construction testing laboratories
- Engineering consultancy firms

**RAK-JR Differentiators:**
1. Modern, professional website
2. Free regional assessment tool
3. Educational approach
4. Transparent about legal requirements
5. Multiple contact methods

### B. Market Context

**Philippine Construction Industry:**
- Growing urbanization
- Increasing building heights
- Stricter enforcement of building codes
- Rising awareness of earthquake risks
- Typhoon resilience requirements

**Regulatory Environment:**
- PD 1096 (National Building Code) - mandatory
- NSCP 2015 - structural standards
- Local government building permits
- Professional Engineer licensing requirements

### C. Technical Debt & Considerations

**None currently** - New build

**Future Considerations:**
- CMS integration for content updates
- Analytics implementation
- SEO optimization ongoing
- Security hardening (if forms become server-side)

### D. Glossary

- **SPT** - Standard Penetration Test
- **PHIVOLCS** - Philippine Institute of Volcanology and Seismology
- **MGB-DENR** - Mines and Geosciences Bureau, Department of Environment and Natural Resources
- **BSWM** - Bureau of Soils and Water Management
- **PD 1096** - Presidential Decree 1096 (National Building Code)
- **NSCP** - National Structural Code of the Philippines
- **kPa** - Kilopascals (unit of bearing capacity)
- **Liquefaction** - Soil behaving like liquid during earthquakes
- **Bearing Capacity** - Soil's ability to support weight

---

## Document Control

**Version History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Oct 31, 2025 | Product Team | Initial comprehensive PRD |

**Approval:**

- [ ] Business Owner
- [ ] Technical Lead
- [ ] Design Lead
- [ ] Marketing Lead

**Next Review Date:** January 31, 2026

---

## Contact

**For questions about this PRD:**
- RAK-JR Technical Testing Services
- Email: rakjunior_since2019@yahoo.com
- Phone: 0921-403-9264

**For technical implementation questions:**
- Refer to `/guidelines/Guidelines.md`
- Check component documentation in `/components`
- Review data structure in `/data/soilKnowledgeBase.ts`

---

*End of Product Requirements Document*
