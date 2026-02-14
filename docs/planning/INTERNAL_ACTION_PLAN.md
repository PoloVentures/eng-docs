# Questy — Internal Action Plan
### 90-Day Week-by-Week Sprint Breakdown
### February 2026

---

## Overview

This document is the internal execution playbook. It maps every week for the next 90 days with specific deliverables, owners, and success criteria. The goal: go from Web3 quest platform to B2B Channel Partner Engagement Platform with 5 pilot customers by Day 90.

---

## Phase 0: Foundation (Weeks 1-2)
### Theme: "Strip, Incorporate, Hire"

### Week 1 (Feb 17-21, 2026)

| Day | Task | Owner | Deliverable |
|-----|------|-------|-------------|
| Mon | Federal incorporation (CBCA) — file online | Founder | Corporation number |
| Mon | Begin Web3 dependency audit of codebase | Founder | Audit document listing every Web3 touchpoint |
| Tue | Register CRA Business Number (GST/HST, payroll) | Founder | BN assigned |
| Tue | Strip Reown/AppKit from `ContextProvider` (`src/context/index.tsx`) | Founder | Provider renders without wallet dependencies |
| Wed | Replace `ConnectBtn` wallet auth with email/password auth | Founder | Login works with email |
| Wed | Contact SRED consultant (Catax, G6 Consulting, or Ryan) | Founder | Intro meeting booked |
| Thu | Set up business banking (RBC/TD startup account) | Founder | Account opened |
| Thu | Strip Wagmi/Viem dependencies from `config.ts` and `package.json` | Founder | Clean build without Web3 packages |
| Fri | Post Full-Stack Developer job (LinkedIn, Built In Toronto, AngelList) | Founder | Job live |
| Fri | Post Head of Growth job | Founder | Job live |

**Week 1 Success Criteria:**
- [ ] App builds and runs without any Web3 wallet dependencies
- [ ] Email/password authentication works for end users (not just admin)
- [ ] Corporation is legally registered
- [ ] Two job postings are live

### Week 2 (Feb 24-28, 2026)

| Day | Task | Owner | Deliverable |
|-----|------|-------|-------------|
| Mon | Implement NextAuth email/password provider for end users | Founder | End-user email auth working |
| Mon | Remove Solana adapter and EVM-specific code | Founder | Clean codebase |
| Tue | Update `User` model — make `walletAddress` optional, add `companyName`, `role`, `partnerTier` | Founder | Updated schema |
| Wed | Create "Partner" user type vs "Admin" user type distinction | Founder | Role-based access working |
| Thu | Interview Full-Stack Developer candidates (batch 1) | Founder | 3-5 first interviews |
| Thu | Interview Head of Growth candidates (batch 1) | Founder | 3-5 first interviews |
| Fri | Update landing page — remove all crypto/Web3 messaging | Founder | Landing page reflects B2B positioning |
| Fri | Legal: engage startup lawyer for shareholder agreement + IP assignment | Founder | Lawyer retained |

**Week 2 Success Criteria:**
- [ ] User model supports both partner and admin roles
- [ ] No Web3 references remain in user-facing UI
- [ ] At least 6 developer candidates in pipeline
- [ ] Landing page copy updated for B2B channel partner positioning

---

## Phase 1: Core Product Pivot (Weeks 3-6)
### Theme: "Build the B2B Engine"

### Week 3 (Mar 3-7)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build partner tier system (Bronze/Silver/Gold/Platinum) | Founder | Tier model + admin UI to configure tiers |
| Add `organization` field to tenant model — partner companies belong to organizations | Founder | Organization schema |
| Rename "quests" to "missions" or "enablement tasks" in UI | Founder | Updated terminology across frontend |
| MAKE HIRE: Full-Stack Developer (target start Week 5) | Founder | Offer accepted |
| MAKE HIRE: Head of Growth (target start Week 5) | Founder | Offer accepted |

### Week 4 (Mar 10-14)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build task category system: Training, Certification, Deal Registration, Co-Marketing, Sales Activity | Founder | Task categories in admin + frontend |
| Create 5 quest templates for B2B channel use cases | Founder | Template library in admin dashboard |
| Add partner profile page (company info, tier, points, completed tasks, active tasks) | Founder | Partner dashboard |
| Build partner invitation system (admin invites partners via email) | Founder | Email invitation flow |
| Set up Stripe billing (subscription management for tenants) | Founder | Payment system working |

### Week 5 (Mar 17-21)

| Task | Owner | Deliverable |
|------|-------|-------------|
| **New Dev starts** — onboarding, codebase walkthrough | Founder + Dev | Dev productive by Wed |
| Build deal registration workflow (partner submits deal → admin reviews → approved/rejected) | Dev | Deal reg MVP |
| Build partner team/group functionality (partners grouped by company) | Dev | Teams working |
| Create marketing landing page (new brand positioning) | Growth | Landing page live |
| Begin content strategy: "How to Gamify Your Channel Partner Program" blog series | Growth | Content calendar + 2 drafts |

### Week 6 (Mar 24-28)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build reward catalog admin (admins can create custom rewards: gift cards, MDFs, swag) | Dev | Reward catalog in admin |
| Add reward redemption for partners (spend points on rewards) | Dev | Redemption flow working |
| Build Slack notification integration (task completion → Slack message) | Dev | Slack webhook integration |
| Publish first 2 blog posts + distribute on LinkedIn | Growth | Posts live, 500+ impressions |
| Begin outreach to 50 target companies (LinkedIn + email) | Growth | 50 personalized messages sent |

**Phase 1 Success Criteria (End of Week 6):**
- [ ] Platform functions as B2B partner engagement tool (no Web3 remnants)
- [ ] Partner tiers, deal registration, reward catalog all working
- [ ] Stripe billing integrated
- [ ] Marketing landing page live
- [ ] 50 target companies contacted
- [ ] 2 blog posts published

---

## Phase 2: Pilot Program (Weeks 7-10)
### Theme: "Get 5 Design Partners"

### Week 7 (Mar 31 - Apr 4)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build "Quick Start" wizard — new tenant setup in \<5 minutes | Dev | Self-serve onboarding |
| Add CSV partner import (admin uploads partner list) | Dev | Bulk import working |
| Build email notification system for partners (task assigned, reward available, tier change) | Dev | Email notifications live |
| Follow up on outreach — book 10+ demo calls | Growth | 10 demos scheduled |
| Create demo script + 5-minute product walkthrough video | Growth | Demo assets ready |

### Week 8 (Apr 7-11)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Run demo calls (aim: 10 this week) | Growth + Founder | 10 demos delivered |
| Build admin analytics v2: partner engagement score, task completion rates, points distribution | Dev | Analytics dashboard updated |
| Add partner leaderboard filters (by team, tier, time period) | Dev | Filtered leaderboards |
| Create "Partner Engagement Playbook" PDF — lead magnet for prospects | Growth | PDF downloadable from landing page |
| File IRAP application | Founder | Application submitted |

### Week 9 (Apr 14-18)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Onboard pilot customers (target: 3-5 confirmed) | Growth + Founder | Pilots deployed |
| White-glove setup for each pilot (configure brand, import partners, create initial tasks) | Dev + Founder | Pilots live and active |
| Build feedback collection system (in-app survey for pilot partners) | Dev | Feedback form live |
| Continued demo calls for pipeline building | Growth | 5+ more demos |
| SRED documentation: begin tracking eligible development hours | Founder | Time tracking started |

### Week 10 (Apr 21-25)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Pilot check-in calls — gather week 1 feedback from all pilots | Founder | Feedback documented |
| Iterate on product based on pilot feedback (rapid fixes) | Dev | Top 5 feedback items addressed |
| Begin building HubSpot integration (sync partner contacts) | Dev | HubSpot OAuth + contact sync |
| Publish case study outline based on pilot early data | Growth | Case study draft started |
| LinkedIn Ads campaign launch ($500/mo budget): target Channel Chiefs | Growth | Campaign live |

**Phase 2 Success Criteria (End of Week 10):**
- [ ] 5 pilot customers live and active
- [ ] Partners from pilot companies completing tasks
- [ ] Demo pipeline of 15+ additional prospects
- [ ] HubSpot integration MVP working
- [ ] IRAP application filed
- [ ] LinkedIn Ads running

---

## Phase 3: Conversion & Scale Prep (Weeks 11-13)
### Theme: "Convert Pilots, Prove PMF"

### Week 11 (Apr 28 - May 2)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build SSO/SAML authentication for enterprise tenants | Dev | SSO working |
| Add API endpoints for external integrations (webhook on task completion) | Dev | API documented |
| Pilot Week 3 check-ins — engagement data review | Founder | Engagement report per pilot |
| Begin conversion conversations (pilot → paid) | Founder + Growth | Pricing proposals sent |
| Publish first case study (even with preliminary data) | Growth | Case study live on website |

### Week 12 (May 5-9)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build partner-facing API (partners can query their own points, tasks, rank) | Dev | Partner API working |
| Add multi-language support foundation (i18n framework) | Dev | i18n setup complete |
| Convert first 2-3 pilots to paid customers | Founder | First MRR |
| Submit SRED Year 1 preliminary documentation to consultant | Founder | SRED prep complete |
| Hire Customer Success Manager (start Week 14) | Founder | Offer accepted |

### Week 13 (May 12-16)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Build training/certification module v1 (assign learning content as tasks, quiz at end) | Dev | Training tasks working |
| Add file upload for proof-of-completion (partner uploads screenshot/certificate) | Dev | Proof upload working |
| 90-day retrospective — compile metrics, adjust strategy | Founder + Growth | Retro document |
| Pipeline review: score and prioritize all prospects | Growth | Qualified pipeline list |
| Plan Phase 4: Months 4-6 roadmap based on learnings | Founder | Q3 roadmap draft |

**Phase 3 Success Criteria (End of Week 13 / Day 90):**
- [ ] 5 pilot customers, 2-3 converted to paid
- [ ] First MRR recorded ($1,500-$5,000)
- [ ] SSO/SAML working for enterprise prospects
- [ ] HubSpot integration live
- [ ] 1 published case study
- [ ] SRED documentation underway
- [ ] Customer Success hire confirmed
- [ ] 20+ prospect pipeline for Q3

---

## KPI Dashboard (Track Weekly)

| KPI | Week 4 Target | Week 8 Target | Week 13 Target |
|-----|--------------|--------------|----------------|
| **Active Pilots** | 0 | 3-5 | 5 |
| **Paying Customers** | 0 | 0 | 2-3 |
| **MRR (CAD)** | $0 | $0 | $1,500-$5,000 |
| **Demo Calls Completed** | 0 | 10+ | 25+ |
| **Prospect Pipeline** | 0 | 15+ | 25+ |
| **Blog Posts Published** | 0 | 2 | 5 |
| **LinkedIn Followers** | Baseline | +200 | +500 |
| **Partner Task Completions (all pilots)** | 0 | 50+ | 200+ |
| **Avg. Partner Engagement Rate** | — | Measuring | >40% |
| **NPS from Pilot Partners** | — | — | >50 |
| **SRED Hours Logged** | 80+ | 320+ | 520+ |

---

## Decision Gates

| Gate | Timing | Go Criteria | Pivot Criteria |
|------|--------|-------------|----------------|
| **Gate 1: Pivot Committed** | End of Week 2 | App works without Web3; hires in pipeline | If can't strip Web3 cleanly, consider rebuild |
| **Gate 2: Product Ready** | End of Week 6 | All core B2B features working; landing page live | If features take >8 weeks, reduce scope |
| **Gate 3: Pilot Validation** | End of Week 10 | 3+ pilots actively engaged; partners completing tasks | If \<3 pilots after 30 outreach demos, revisit positioning |
| **Gate 4: PMF Signal** | End of Week 13 | 2+ pilots convert to paid; partner engagement >30% | If 0 conversions, consider Pivot 2 (employee training) or hybrid |

---

## Risk Mitigations

| Risk | Mitigation | Owner |
|------|-----------|-------|
| Can't hire fast enough | Use contractors (Toptal, Upwork) for first 2-4 weeks while recruiting | Founder |
| Web3 stripping takes longer than expected | Timebox to 2 weeks max; if blocked, rebuild auth from scratch (faster than debugging) | Founder |
| No pilot customers by Week 8 | Offer extended free tier (90 days); tap personal network; approach Toronto SaaS companies | Growth |
| Pilot churn (partners don't engage) | Weekly pilot check-ins; in-app onboarding guide; gamify the onboarding itself | Founder + CS |
| Burn rate exceeds plan | Delay 2nd developer hire; reduce marketing spend; maximize IRAP/SRED credits | Founder |
| Founder burnout | Protect weekends; hire help early; prioritize ruthlessly (say no to non-critical features) | Founder |