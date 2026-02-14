# Questy Pivot Strategy — February 2026

## Executive Context

**Current State:** Questy is an MVP-stage whitelabel task engagement platform with multi-tenant architecture, gamification engine (tasks, points, leaderboards, referrals, promo codes), Web3 wallet authentication, and full admin dashboard. Originally positioned in the Web3 quest/InfoFi space alongside platforms like Zealy, Layer3, and Galxe.

**Why Pivot:** The InfoFi/Web3 quest market has contracted significantly. Zealy has pivoted to "make a living from Web3" (essentially a gig-economy-for-crypto platform). Layer3 shifted to an "onchain finance app." The underlying problem is clear: Web3 quest platforms relied on speculative token incentives and airdrop farming — a model that produces mercenary users with zero genuine engagement. As crypto markets cooled and projects cut marketing budgets, the revenue base evaporated.

**What We Have (Assets to Leverage):**
- Multi-tenant SaaS architecture (domain-based routing, isolated DBs per client)
- Full whitelabel customization system (60+ color/branding variables)
- Complete gamification engine (tasks, points, leaderboards, referrals, promo codes, progress tracking)
- Admin dashboard with analytics
- Wallet + email authentication
- Social integration (Twitter/X OAuth)
- Cloud-ready deployment (Docker, GCP)

**Pivot Criteria (Must Satisfy All):**
1. ✅ Less competition (not 15-year-old proven failures)
2. ✅ Better margins (not razor-thin retail/restaurant)
3. ✅ Defensible moats (not easily replicable)
4. ✅ Growing markets

---

## Market Landscape (January 2026 Data)

| Market | Size (2026) | Projected (2031) | CAGR | Source |
|--------|-------------|-------------------|------|--------|
| Loyalty Management | $16.44B | $32.52B | 14.62% | Mordor Intelligence |
| Gamification | $36.46B | $112.32B | 25.24% | Mordor Intelligence |
| Gamification (alt est.) | ~$15.7B | $74.17B | 26.90% | VMR |
| B2B Loyalty (segment) | Growing fastest | — | 17.52% | Mordor Intelligence |
| SME Loyalty Adoption | Fastest growing segment | — | 17.26% | Mordor Intelligence |
| Cloud Loyalty Deployment | Overtaking on-premise | — | 16.44% | Mordor Intelligence |
| HR & Training Gamification | Fastest app segment | — | 27.9% | Mordor Intelligence |

**Key Macro Signals:**
- Customer acquisition costs jumped 18% YoY in 2024 (Shopify benchmarks)
- Retaining a customer costs 1/7th of acquiring one (Bain)
- 31% of 2025 marketing budgets shifted to loyalty (up from 22% in 2023)
- SME gamification adoption growing at 27.65% CAGR
- Cloud deployments capturing 67.62% of gamification market revenue
- B2B loyalty platforms growing faster than B2C (17.52% vs. B2C slowdown)

---

## Pivot 1: B2B Channel Partner Engagement Platform

### The Idea
Reposition Questy as a **gamified channel partner engagement platform** for manufacturers, distributors, and SaaS companies that sell through channel partners (resellers, distributors, agents, affiliates). Instead of consumers completing social media tasks, channel partners complete sales enablement activities, training modules, deal registrations, and co-marketing tasks to earn points and rewards.

### Why This Market?
- **B2B loyalty is the fastest-growing segment** at 17.52% CAGR (Mordor Intelligence, Jan 2026)
- Manufacturers deploy tiered incentives for distributors covering volume, co-marketing, and data sharing
- Higher deal sizes and multiyear contracts = outsized revenue per account
- Average B2B loyalty contract value is 5-10x B2C
- Programs embed into procurement portals and ERP workflows

### Code Reuse (What Already Fits)
| Questy Feature | B2B Application |
|---|---|
| Task system | Partner enablement activities, training completion, deal registration |
| Points/leaderboards | Partner performance ranking, tier qualification |
| Multi-tenant architecture | Each manufacturer gets their own branded portal |
| Whitelabel customization | Manufacturer-branded partner portals |
| Referral system | Partner referral incentives |
| Promo codes | SPIF (Sales Performance Incentive Fund) codes |
| Admin dashboard | Channel manager analytics |
| User management | Partner onboarding and tracking |

### Required Changes
- Replace wallet auth with SSO/email-based enterprise auth
- Add partner tiers (Bronze/Silver/Gold/Platinum)
- Build deal registration workflow
- Add reward catalog (gift cards, MDFs, rebates)
- Create training/certification module (or integrate with LMS)
- Build reporting for ROI metrics (influenced pipeline, revenue attribution)

### Competitive Analysis & Invalidation

**Existing Competitors:**
| Company | Funding | Status | Weakness |
|---------|---------|--------|----------|
| Impartner | $100M+ | Enterprise-focused, $50K+ contracts | Overkill for mid-market |
| PartnerStack | $29M Series B | SaaS affiliate focus | Narrow use case |
| Zinrelo | $5M | Loyalty platform | Limited B2B gamification |
| Channeltivity | Bootstrapped | Basic PRM | No gamification engine |
| Allbound | Acquired | PRM tool | Legacy architecture |

**Invalidation Arguments:**
1. *"Salesforce and SAP are bundling loyalty into their CRM — why would anyone buy standalone?"*
   - **Counter:** Mordor confirms top 10 vendors control only ~55% of 2025 revenue. Fragmented market. Salesforce loyalty requires existing Salesforce stack ($150K+/year base). Mid-market companies on HubSpot, Zoho, or no CRM need standalone solutions. Our multi-tenant architecture makes us uniquely positioned for companies managing 50-500 partners, not 5,000+.

2. *"Impartner and PartnerStack already dominate."*
   - **Counter:** Impartner targets Fortune 500 ($50K-$200K/year). PartnerStack focuses narrowly on SaaS affiliate tracking. Neither offers gamified task-completion mechanics. The mid-market ($500-$5,000/month) is underserved — Mordor notes SME adoption is the fastest-growing segment at 17.26% CAGR. The gap is a gamification-first PRM for companies with 20-500 channel partners.

3. *"B2B sales cycles are long and expensive for a startup."*
   - **Counter:** Valid risk. Mitigation: product-led growth via free tier for \<10 partners. Target SaaS companies first (shorter sales cycles, digitally native). Use content marketing around "channel partner engagement" (low-competition SEO keyword cluster). Average B2B SaaS contract sticks 3+ years vs. 6-month B2C churn.

### Verdict: ✅ VIABLE — Strong Recommendation

**Why:**
- Highest revenue-per-customer potential of all pivots
- Multi-tenant architecture is a significant competitive advantage (each manufacturer client gets isolated branding)
- Gamification engine maps directly to partner enablement
- 17.52% CAGR in a $16B+ market with fragmented competition
- Sticky contracts (multi-year, integrated into partner workflows)

**Defensible Moats:**
- Multi-tenant data isolation (competitors offer shared databases)
- Whitelabel-first architecture (competitors bolt this on as afterthought)
- Gamification-native design vs. gamification-as-a-feature
- Network effects: partner performance data improves benchmarking over time

---

## Pivot 2: SME Customer Loyalty & Retention Platform (Non-Crypto)

### The Idea
Strip out all Web3/wallet functionality and reposition Questy as a **modern, self-serve customer loyalty platform for SMEs** — e-commerce stores, local businesses, service providers. Think "Yotpo Loyalty but for businesses under 50 employees." Points for purchases, referrals, reviews, social shares, and custom actions. Whitelabel embeddable widgets or standalone microsites.

### Why This Market?
- SME loyalty adoption is the fastest-growing segment at 17.26% CAGR
- Yotpo clients see 22% lift in repeat purchases within 90 days
- 70% of consumers participate in fee-based loyalty programs (Deloitte, Nov 2024)
- Customer acquisition costs rose 18% YoY — retention is now cheaper than acquisition
- Cloud loyalty deployment growing at 16.44% CAGR

### Code Reuse
| Questy Feature | SME Loyalty Application |
|---|---|
| Task system | "Earn points" actions (purchase, review, share, referral) |
| Points/leaderboards | Customer point balance, VIP tiers |
| Multi-tenant architecture | Each SME gets their own branded loyalty program |
| Whitelabel customization | Brand-matched loyalty portal or widget |
| Referral system | Customer refer-a-friend programs |
| Promo codes | Bonus point campaigns |
| Admin dashboard | Business owner analytics |
| Email integration | Customer communication |

### Required Changes
- Build e-commerce integrations (Shopify, WooCommerce, Stripe)
- Create embeddable widget/SDK for storefronts
- Add reward redemption (discounts, free products, gift cards)
- Build VIP tier system
- Replace wallet auth with customer email/phone
- Add purchase event tracking (webhooks from payment processors)

### Competitive Analysis & Invalidation

**Existing Competitors:**
| Company | Funding/Revenue | Pricing | Weakness |
|---------|----------------|---------|----------|
| Yotpo | $413M raised, IPO track | $500-$5,000+/mo | Expensive, complex, bundled with reviews/SMS |
| LoyaltyLion | ~$10M raised | $399-$999/mo | Shopify-only, limited customization |
| Smile.io | ~$10M raised | $49-$999/mo | Basic gamification, no whitelabel |
| Stamp Me | Acquired | $50-$300/mo | Digital stamp cards only |
| Five Stars | $92M raised | Varies | Restaurant/retail focus, aging |

**Invalidation Arguments:**
1. *"This market is saturated — Yotpo, LoyaltyLion, Smile.io, Stamped.io are all well-established."*
   - **Counter:** Partially valid. However, Mordor notes the market is "low concentration" — no single vendor dominates. The key differentiator is our multi-tenant whitelabel architecture. Competitors offer branded programs within their platform; we offer fully isolated, custom-domain deployments. This matters for agencies and franchise businesses managing multiple brands.

2. *"Shopify's built-in loyalty features will commoditize standalone tools."*
   - **Counter:** Shopify has not built native loyalty. Rumors of acquisition of a mid-tier loyalty engine (Mordor, early 2026) confirm they recognize the gap but haven't filled it. Platform-native tools are always basic — merchants wanting customization will always need third-party solutions.

3. *"Low ACV (average contract value) means high churn and expensive customer acquisition."*
   - **Counter:** Valid concern. SME SaaS churn averages 5-7% monthly. Mitigation: target agencies and franchises who deploy across multiple locations (higher ACV, stickier). Our multi-tenant architecture uniquely serves this "agency model" — one account managing 20+ branded loyalty programs.

4. *"Loyalty program fatigue — digital natives belong to 16.7 programs but engage with fewer than half."*
   - **Counter:** This actually favors differentiated, gamified programs over generic point-collect programs. Deloitte shows 70% participation in fee-based programs when benefits are clear. The problem is boring programs, not too many programs.

### Verdict: ⚠️ CONDITIONALLY VIABLE — Only if Niche-Focused

**Viable IF** focused specifically on:
- **Agencies managing multiple client loyalty programs** (leverage multi-tenant arch)
- **Franchise businesses** needing brand-consistent but location-specific programs
- **Non-Shopify merchants** (WooCommerce, custom sites, brick-and-mortar)

**Not recommended** as a broad "loyalty for everyone" play — too many established competitors.

**Defensible Moats:**
- Multi-tenant isolation for agency/franchise use case
- Full whitelabel with custom domains (competitors charge extra or don't offer)
- Lower price point than Yotpo/LoyaltyLion for comparable whitelabel capability

---

## Pivot 3: Gamified Employee Onboarding & Training Platform

### The Idea
Reposition Questy as a **gamified employee onboarding and micro-training platform** for distributed and frontline workforces. New hires and existing employees complete task-based onboarding missions, compliance training quests, and skill-building challenges. Managers use the admin dashboard to track progress, assign tasks, and view completion analytics.

### Why This Market?
- HR & Training is the fastest-growing gamification application at **27.9% CAGR** (Mordor)
- Gamified training boosts completion rates by 60% vs. slide-based courses
- McDonald's UK generated £23.7M ($30.1M) additional revenue through gamified till-training across 1,300 restaurants (Mordor, Jan 2025)
- Employee engagement gamification growing at estimated 18% CAGR (VMR)
- Three UK achieved higher retention via 3D simulation games in 2-minute bursts
- Remote/hybrid work normalization creates demand for asynchronous training tools

### Code Reuse
| Questy Feature | Employee Training Application |
|---|---|
| Task system | Training tasks, compliance checkboxes, onboarding missions |
| Points/leaderboards | Employee performance ranking, team competitions |
| Multi-tenant architecture | Each company client gets their own branded training portal |
| Whitelabel customization | Company-branded onboarding experience |
| Referral system | Employee referral programs |
| Promo codes | Bonus point campaigns for training sprints |
| Progress tracking (UserQuest) | Individual training completion tracking |
| Repeatable tasks | Daily/weekly compliance refreshers |
| Admin dashboard | Manager/HR analytics view |
| Conditional tasks | Sequential onboarding flows |

### Required Changes
- Add content hosting (video, PDF, quiz) — or integrate with existing LMS
- Build quiz/assessment module
- Add team/department hierarchy
- Create certificate generation
- Build manager role with team oversight
- Add SCORM/xAPI compliance for enterprise compatibility
- Replace wallet auth with corporate SSO (SAML/OIDC)

### Competitive Analysis & Invalidation

**Existing Competitors:**
| Company | Funding | Focus | Weakness |
|---------|---------|-------|----------|
| Axonify | $70M+ raised | Frontline micro-learning | Enterprise-only, $30K+ ACV |
| Kahoot! | Public (OSE) | Quiz-based engagement | Entertainment-first, weak LMS |
| Lessonly (Seismic) | Acquired ~$100M | Sales enablement training | Sales-only, expensive |
| Trainual | $30M raised | SOP documentation | No gamification |
| TalentLMS (Epignosis) | $32M revenue | Generic LMS | Gamification bolted on |

**Invalidation Arguments:**
1. *"LMS is a mature, crowded market dominated by Cornerstone, Docebo, and enterprise players."*
   - **Counter:** We're not building an LMS. We're building a gamified task-completion layer that sits alongside or on top of existing training workflows. The task engine is the product, not content management. Think "quest system for employee actions" not "course catalog."

2. *"Axonify already does gamified micro-learning well."*
   - **Counter:** Axonify targets Fortune 500 with $30K+ ACV and 12-month implementation cycles. The mid-market (100-2,000 employees) needs a self-serve, affordable alternative. Our multi-tenant architecture enables this at a fraction of the cost. Axonify is also content-heavy — we focus on task completion, which is lighter and more flexible.

3. *"Building for HR means slow enterprise sales cycles and heavy compliance requirements."*
   - **Counter:** Partially valid for large enterprise. Mitigation: target fast-moving mid-market companies (tech startups, agencies, franchise operations) where HR decisions are made by founders/ops managers, not procurement committees. Start with onboarding (urgent, time-bound need) before expanding to ongoing training.

4. *"Microsoft Power Platform embeds game mechanics into workflows — why buy standalone?"*
   - **Counter:** Microsoft's gamification requires Power Platform expertise and M365 licensing. Companies on Google Workspace, Slack-based workflows, or non-Microsoft stacks need alternatives. Our standalone, cloud-native approach requires zero existing infrastructure.

### Verdict: ✅ VIABLE — Strong Market Tailwinds

**Why:**
- Highest CAGR of any adjacent market (27.9%)
- McDonald's case study proves massive ROI in frontline training
- Our task system maps almost 1:1 to training task completion
- Multi-tenant enables franchise/agency training deployments
- Repeatable tasks feature already supports daily compliance refreshers
- Admin dashboard already provides manager-level analytics

**Defensible Moats:**
- Task-completion-first approach (vs. content-first LMS competitors)
- Multi-tenant enables managed service providers to white-label for clients
- Gamification-native architecture vs. bolted-on gamification
- Low implementation cost vs. enterprise alternatives

---

## Pivot 4: Healthcare Patient Engagement & Adherence Platform

### The Idea
Reposition Questy as a **gamified patient engagement platform** where healthcare providers and digital health companies create task-based care plans for patients. Patients earn points for medication adherence, attending appointments, completing health assessments, logging vitals, and participating in wellness programs.

### Why This Market?
- Healthcare loyalty/engagement is the fastest-growing vertical at **15.92% CAGR** (Mordor)
- McKinsey: adherence incentives deliver measurable outcomes and qualify for insurance reimbursement
- Hospitals integrate loyalty APIs with EHRs for check-up compliance
- Digital health funding rose for 2nd consecutive year in 2025 (CB Insights)
- 14 new digital health unicorns emerged in 2025

### Code Reuse
| Questy Feature | Patient Engagement Application |
|---|---|
| Task system | Medication reminders, appointment check-ins, health logging |
| Points/leaderboards | Wellness point accumulation, support group rankings |
| Multi-tenant architecture | Each clinic/provider gets their own branded portal |
| Whitelabel customization | Provider-branded patient experience |
| Repeatable tasks | Daily medication adherence tasks |
| Progress tracking | Patient care plan completion |
| Admin dashboard | Provider/care team analytics |
| Promo codes | Health campaign incentive codes |

### Required Changes
- HIPAA compliance (encryption at rest/transit, audit logging, BAA support)
- EHR/EMR integration (FHIR API compatibility)
- Patient consent management
- PHI data handling and storage controls
- Care plan template system
- Caregiver/family member access roles
- Medication/appointment reminder scheduling
- Mobile app (PWA or native) for patient accessibility

### Competitive Analysis & Invalidation

**Existing Competitors:**
| Company | Funding | Focus | Weakness |
|---------|---------|-------|----------|
| Wellframe | Acquired by HealthEdge | Digital health management | Enterprise-only |
| Mango Health | Acquired | Medication adherence | Shut down product |
| CareMessage | $20M+ raised | Patient outreach for safety-net providers | No gamification |
| Pillo Health | ~$8M raised | Smart medication dispenser | Hardware-dependent |
| Xealth | $24M raised | Digital health prescribing | No engagement engine |

**Invalidation Arguments:**
1. *"HIPAA compliance is extremely expensive and complex for a startup."*
   - **Counter:** This is the strongest invalidation. HIPAA compliance requires SOC 2 Type II audit ($30K-$100K), BAA agreements with all vendors, encryption everywhere, employee training, and ongoing compliance monitoring. This is 6-12 months of work minimum before first sale. **However**, this is also the moat — once compliant, barriers to entry are high.

2. *"FTC levied $7.8M in penalties on a mental-health app for HIPAA violations."*
   - **Counter:** This is serious regulatory risk. Mitigation: partner with a HIPAA-compliant hosting provider (AWS GovCloud, Azure Healthcare) from day one. Budget $100K-$200K for compliance before entering market.

3. *"Healthcare sales cycles are 12-24 months."*
   - **Counter:** Valid for health systems. Mitigation: target digital health startups and wellness companies first (shorter cycles), then move upstream. Many digital health companies need engagement features but don't want to build from scratch.

4. *"Antigaming clauses in healthcare regulations could restrict gamification mechanics."*
   - **Counter:** Legitimate concern. The FTC and state regulators are watching incentive structures in healthcare. Mitigation: work with healthcare compliance attorney to design mechanics that reward adherence without constituting inducement.

### Verdict: ⚠️ VIABLE LONG-TERM — Not Recommended for MVP Stage

**Why Not Now:**
- HIPAA compliance overhead is too heavy for MVP stage
- Capital requirement ($200K+ before first sale)
- Sales cycle too long for a startup needing revenue quickly
- Regulatory risk is substantial

**Why Potentially Later (18-24 months):**
- Once the gamification engine is proven in a less-regulated vertical (B2B or training), healthcare becomes a high-value expansion
- 15.92% CAGR with massive barriers to entry = high margins once inside
- Competitors are weak in gamification-native engagement
- Insurance reimbursement for adherence programs is expanding

---

## Pivot 5: Creator & Community Engagement-as-a-Service (Non-Crypto)

### The Idea
Reposition Questy as a **whitelabel community engagement platform for creators, media companies, and niche community operators**. Creators (YouTubers, course sellers, newsletter operators, podcast hosts) get their own branded "quest hub" where fans/members earn points for engagement actions: sharing content, leaving reviews, completing challenges, referring new members, attending events, buying products.

### Why This Market?
- Creator economy estimated at $500B+ globally (Goldman Sachs projection)
- 50M+ people identify as content creators worldwide
- Platforms like Patreon, Circle, Skool show demand for community monetization tools
- Creators increasingly want to own their audience (not dependent on YouTube/TikTok algorithms)
- Community-led growth is a major 2025-2026 trend

### Code Reuse
| Questy Feature | Creator Engagement Application |
|---|---|
| Task system | Fan challenges, content sharing tasks, engagement missions |
| Points/leaderboards | Fan rankings, engagement scores, "superfan" identification |
| Multi-tenant architecture | Each creator gets their own branded portal |
| Whitelabel customization | Creator-branded experience matching their aesthetic |
| Referral system | Fan-driven growth (refer a friend) |
| Promo codes | Exclusive access codes, bonus point drops |
| Social integration | Content sharing verification |
| Admin dashboard | Creator analytics on community engagement |

### Required Changes
- Build creator-friendly onboarding (simplified admin for non-technical users)
- Add content/media embedding (YouTube, Spotify, podcast links)
- Create "challenge" templates for common creator use cases
- Build reward marketplace (merch discounts, exclusive content, meet-and-greets)
- Add community features (comments, reactions on tasks)
- Integrate with creator tools (Gumroad, Stripe, ConvertKit, Patreon)
- Build mobile-optimized PWA for fan experience

### Competitive Analysis & Invalidation

**Existing Competitors:**
| Company | Funding/Status | Focus | Weakness |
|---------|---------------|-------|----------|
| Skool | Profitable ($100M+ ARR) | Community + courses | No gamified task system |
| Circle | $30M+ raised | Community platform | Forum-based, no quests |
| Discord | Massive | Chat communities | No structured task/reward system |
| Patreon | $412M raised | Creator monetization | Payment-only, no engagement |
| Zealy | Funded | Web3 quest platform | Crypto-only, mercenary users |
| Kajabi | $550M raised | Course + community | Content-heavy, no gamification |

**Invalidation Arguments:**
1. *"Skool is dominating creator communities with $100M+ ARR."*
   - **Counter:** Skool is community + courses, not gamified engagement. There is no task-completion, quest, or points system in Skool. We're complementary, not competitive. Creators could use Skool for discussion AND Questy for engagement challenges. Alternatively, we compete by offering gamification that Skool doesn't.

2. *"Creators are fickle customers with high churn."*
   - **Counter:** Valid risk. Mitigation: target professional creators and media companies (not hobbyists). Focus on creators with established audiences of 10K+ who have monetization infrastructure. These creators have budgets and understand engagement ROI.

3. *"The value proposition is unclear — why would a creator need a separate quest platform?"*
   - **Counter:** Engagement is the #1 problem for creators in 2026. Algorithm changes (YouTube, TikTok, Instagram) have decimated organic reach. Creators need direct engagement channels. Quest-based engagement drives 2-3x more active participation than passive community forums (Starbucks loyalty data: 40% of revenue from gamified rewards program).

4. *"Low ACV — individual creators can't pay much."*
   - **Counter:** True for individual creators ($29-$99/mo). Mitigation: target creator agencies, MCNs (multi-channel networks), media companies, and education companies that manage multiple communities. Our multi-tenant architecture serves this perfectly.

### Verdict: ⚠️ CONDITIONALLY VIABLE — High Potential, Execution Risk

**Viable IF** focused on:
- **Creator agencies/MCNs** managing 10+ creator brands (leverage multi-tenant)
- **Education companies** with course communities
- **Media companies** with reader/listener engagement needs

**Not recommended** targeting individual creators (low ACV, high churn, expensive acquisition).

**Defensible Moats:**
- Whitelabel + custom domain = creators own their brand (vs. Skool's branded platform)
- Task-completion engine is differentiated vs. forum-based communities
- Multi-tenant enables agency plays

---

## Final Ranking & Recommendation

| Rank | Pivot | Viability | Market CAGR | Revenue Potential | Speed to Market | Risk Level |
|------|-------|-----------|-------------|-------------------|-----------------|------------|
| 🥇 | **B2B Channel Partner Engagement** | ✅ Strong | 17.52% | $$$$ (High ACV) | 3-4 months | Medium |
| 🥈 | **Gamified Employee Onboarding** | ✅ Strong | 27.9% | $$$ (Mid ACV) | 2-3 months | Medium |
| 🥉 | **SME Loyalty (Agency/Franchise Focus)** | ⚠️ Conditional | 17.26% | $$ (Low-Mid ACV) | 2-3 months | Medium-High |
| 4th | **Creator Engagement-as-a-Service** | ⚠️ Conditional | ~25% | $$ (Variable) | 3-4 months | High |
| 5th | **Healthcare Patient Adherence** | ⚠️ Long-term | 15.92% | $$$$ (High ACV) | 12-18 months | Very High |

---

## Primary Recommendation: Dual-Track Approach

### Track A (Primary Revenue): B2B Channel Partner Engagement
### Track B (Volume Growth): Gamified Employee Onboarding & Training

**Why dual-track?** Both pivots use the same core engine with different positioning. A partner enablement task and an employee onboarding task are structurally identical — the framing, pricing, and go-to-market differ. Build the universal task-gamification platform, sell it into two verticals simultaneously.

---

## Investor-Ready Business Plan: Questy — B2B Gamified Engagement Platform

### 1. Problem Statement

Companies that sell through channel partners (resellers, distributors, affiliates) waste $5.2B annually on partner incentive programs that don't drive engagement (Forrester). 73% of partner programs have \< 25% active participation. Meanwhile, companies with distributed or frontline employees see 60% of training initiatives fail due to low engagement (Deloitte).

**Root Cause:** Traditional incentive and training platforms are transactional databases, not engagement engines. Partners and employees receive a spreadsheet of tasks, complete the minimum, and disengage.

### 2. Solution

Questy is a **gamified task-engagement platform** that transforms partner enablement and employee onboarding from passive checklists into interactive quest systems. Partners and employees complete missions, earn points, compete on leaderboards, and unlock rewards — driving 2-3x higher engagement than traditional programs.

### 3. Product

**Core Platform:**
- Quest Engine: Configurable task system with conditional logic, repeatability, and progress tracking
- Points & Leaderboards: Real-time competitive ranking with daily/weekly/monthly cycles
- Referral System: Built-in viral growth mechanics
- Promo/SPIF Codes: Time-limited incentive campaigns
- Admin Dashboard: Full analytics, user management, and program configuration

**Whitelabel Architecture:**
- Each client gets fully branded deployment on custom domain
- 60+ customizable brand variables (colors, logos, typography)
- Isolated database per tenant (data sovereignty)
- Independent admin access per client

**Two Deployment Models:**

| Feature | B2B Channel Partner | Employee Onboarding |
|---------|---|---|
| Users | Resellers, distributors, affiliates | Employees (new hires + existing) |
| Tasks | Deal registration, training, co-marketing, certifications | Onboarding missions, compliance, skill-building |
| Rewards | Rebates, MDFs, gift cards, tier upgrades | Recognition, badges, career advancement |
| Value Metric | Influenced pipeline, partner activation rate | Time-to-productivity, training completion |

### 4. Market Opportunity

**TAM (Total Addressable Market):**
- B2B Loyalty + Gamification intersection: ~$6B (2026)
- Growing to ~$15B by 2031

**SAM (Serviceable Addressable Market):**
- Mid-market companies with 20-500 channel partners: ~$800M
- Mid-market employee onboarding/training: ~$1.2B
- **Combined SAM: ~$2B**

**SOM (Serviceable Obtainable Market — Year 1-3):**
- 200 customers × $12K average ACV = **$2.4M ARR target by Year 2**

### 5. Business Model

| Plan | Price | Target | Features |
|------|-------|--------|----------|
| Starter | $299/mo | \<50 users | Core quest engine, basic analytics |
| Growth | $799/mo | 50-200 users | Full whitelabel, advanced analytics, integrations |
| Enterprise | $2,499/mo | 200+ users | Custom domain, API access, SSO, dedicated support |
| Agency | $4,999/mo | Multi-tenant management | 5+ branded deployments, unified billing |

**Revenue Mix (Year 2 Target):**
- SaaS Subscriptions: 80%
- Implementation/Setup Fees: 10%
- Custom Development: 10%

**Unit Economics:**
- Average Revenue Per Account (ARPA): $1,000/mo
- Gross Margin: 85% (pure SaaS, cloud-hosted)
- CAC Target: $3,000 (content marketing + PLG)
- LTV Target: $36,000 (3-year retention, $1K/mo)
- LTV:CAC Ratio: 12:1

### 6. Go-to-Market Strategy

**Phase 1 (Months 1-3): Foundation**
- Strip Web3/wallet dependencies from core platform
- Add email/SSO authentication
- Build Shopify-style "1-click deploy" for new tenants
- Create 5 quest templates (partner onboarding, sales enablement, new-hire onboarding, compliance, product launch)
- Launch landing page, begin content marketing

**Phase 2 (Months 4-6): Early Traction**
- Target: 20 design partners (10 B2B channel, 10 employee training)
- Free pilot program (60 days) for first 20 customers
- Build case studies from pilots
- Launch integrations (Slack, HubSpot, Salesforce basic)
- Begin paid marketing (LinkedIn Ads, Google Ads for "partner engagement platform")

**Phase 3 (Months 7-12): Scale**
- Convert pilots to paid ($500-$2,500/mo)
- Target: 50-100 paying customers
- Hire 2 AEs focused on mid-market
- Launch partner/agency program (agencies resell to their clients)
- Build API for custom integrations
- Target $500K ARR

**Phase 4 (Months 13-24): Growth**
- Expand to 200+ customers
- Add enterprise features (SSO, SCORM, advanced reporting)
- International expansion (multi-language support leverages existing architecture)
- Target $2.4M ARR
- Series A readiness

### 7. Competitive Advantages (Moats)

1. **Multi-Tenant Architecture:** Purpose-built for multi-brand deployments. Each client gets isolated database, custom domain, and full brand customization. Competitors retrofit this as an afterthought.

2. **Gamification-Native:** Tasks, points, leaderboards, and quests are the core product, not a feature bolted onto a CRM or LMS. Behavioral engagement is in our DNA.

3. **Speed of Deployment:** Cloud-native, API-first architecture enables deployment in hours, not months. Enterprise competitors require 12-18 month implementations.

4. **Agency Leverage:** Multi-tenant design enables a single agency or consulting firm to manage 20+ branded deployments — a use case no competitor serves well.

5. **Data Network Effects:** As more tenants deploy, anonymized engagement benchmarks improve recommendations for all clients (e.g., "tasks of type X have 3x higher completion when scheduled on Tuesdays").

### 8. Team Requirements

**Immediate Hires (Pre-Seed/Seed):**
| Role | Priority | Purpose |
|------|----------|---------|
| Full-Stack Developer | Critical | Ship integration and auth features |
| Head of Growth/Marketing | Critical | Content strategy, PLG funnel, early sales |
| Customer Success | Month 4 | Onboarding, pilot management, retention |

### 9. Financial Projections

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Customers | 50 | 200 | 500 |
| ARPA (monthly) | $600 | $1,000 | $1,400 |
| ARR | $360K | $2.4M | $8.4M |
| Gross Margin | 82% | 85% | 87% |
| Burn Rate (monthly) | $25K | $60K | $120K |
| Team Size | 3 | 8 | 18 |
| Runway Needed | $300K | Funded by revenue + seed | Series A |

### 10. Funding Ask

**Pre-Seed Round: $400K**
- 12-18 months runway
- Core product de-risking (auth migration, integrations, templates)
- First 50 customers
- Prove product-market fit

**Use of Funds:**
- Product Development: 50% ($200K)
- Sales & Marketing: 30% ($120K)
- Operations & Infrastructure: 15% ($60K)
- Legal & Compliance: 5% ($20K)

### 11. Key Milestones for Investors

| Timeline | Milestone | Evidence of PMF |
|----------|-----------|-----------------|
| Month 3 | MVP shipped, 5 pilot customers | Product works, first feedback |
| Month 6 | 20 customers (10 paid) | Willingness to pay validated |
| Month 9 | $15K MRR, \<5% monthly churn | Unit economics work |
| Month 12 | $30K MRR, 50 customers, 2 case studies | Ready for Seed/Series A |
| Month 18 | $100K MRR, agency program launched | Scalable GTM proven |
| Month 24 | $200K MRR, international expansion | Series A metrics |

### 12. Why Now?

1. **Customer acquisition costs are at all-time highs** — retention/engagement tools are budget-priority #1
2. **B2B loyalty is the fastest-growing segment** — enterprises are shifting from rebates to gamified engagement
3. **AI-driven personalization** makes engagement programs significantly more effective than 3 years ago
4. **Post-InfoFi talent and technology** — we have a battle-tested gamification engine that competitors would need 12+ months to build
5. **Cloud deployment has won** — 67.62% of gamification market is cloud-native, eliminating on-premise barriers
6. **SME adoption is accelerating** — the mid-market is ready for self-serve gamification platforms

---

## Appendix: Research Sources

1. Mordor Intelligence — Loyalty Management Market Size & Share Analysis, Growth Trends and Forecast (2026-2031). Updated January 2026.
   - https://www.mordorintelligence.com/industry-reports/loyalty-management-market
   - Grand View Research: https://www.grandviewresearch.com/industry-analysis/loyalty-management-market
   - Markets and Markets: https://www.marketsandmarkets.com/Market-Reports/loyalty-management-market-172873907.html
   - Fortune Business Insights: https://www.fortunebusinessinsights.com/loyalty-management-market-103program

2. Mordor Intelligence — Gamification Market Size & Share Analysis, Growth Trends and Forecast (2026-2031). Updated January 2026.
   - https://www.mordorintelligence.com/industry-reports/gamification-market

3. Verified Market Research — Global Gamification Market Report, Base Year 2024, Forecast 2026-2032.
   - https://www.verifiedmarketresearch.com/product/gamification-market/

4. Deloitte — Consumer Pulse Survey, November 2024: 70% fee-based loyalty participation.

5. Shopify — Blended digital advertising cost benchmarks, 2024: 18% YoY increase.

6. Bain & Company — Customer retention vs. acquisition cost analysis: 7:1 ratio.

7. McKinsey — Healthcare adherence incentive analysis, 2025.

8. McDonald's UK — Gamified till-training program results: £23.7M additional revenue across 1,300 restaurants (Mordor Intelligence, January 2025).

9. CB Insights — State of Digital Health 2025: Funding rose for 2nd consecutive year.
   - https://www.cbinsights.com/research/report/digital-health-trends-q4-2024/
   - AHRQ Patient Engagement: https://digital.ahrq.gov/ahrq-funded-projects/emerging-lessons/patient-engagement

10. Crunchbase — Gamification Companies Research
    - https://www.crunchbase.com/lists/gamification-companies

11. Built In — Gamification Companies Overview
    - https://builtin.com/articles/gamification-companies

12. Channel Incentives Management Research
    - G2 Categories: https://www.g2.com/categories/channel-incentives-management
    - Forrester Wave: https://www.forrester.com/report/the-forrester-wave-channel-incentives-management/

13. Employee Engagement & Creator Economy Markets
    - Employee Engagement Software: https://www.mordorintelligence.com/industry-reports/employee-engagement-software-market
    - Creator Economy: https://www.mordorintelligence.com/industry-reports/creator-economy-market
    - Patient Engagement Solutions: https://www.mordorintelligence.com/industry-reports/patient-engagement-solutions-market

14. Web3 Quest Platform Analysis
    - CoinDesk InfoFi Search: https://www.coindesk.com/search?s=infofi
    - The Block InfoFi Search: https://www.theblock.co/search?query=infofi+quest+platform

15. Zealy.io — Current platform state and positioning analysis, February 2026.
    - https://zealy.io/

16. Layer3.xyz — Current platform state and positioning analysis, February 2026.
    - https://www.layer3.xyz/
