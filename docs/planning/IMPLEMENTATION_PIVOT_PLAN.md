# Questy — Implementation Pivot Plan
### Technical Roadmap Mapped to Existing Codebase
### February 2026

---

## 1. Architecture Overview — Current vs Target

```
CURRENT STATE                           TARGET STATE
─────────────                           ────────────
Web3 Wallet Auth (Reown/AppKit)    →    Email/Password + SSO/SAML Auth
Wallet Address = User Identity     →    Email = User Identity
Crypto-focused tasks               →    B2B channel enablement tasks
Social engagement (Twitter/X)      →    Deal reg, training, co-marketing tasks
Consumer quest page                →    Partner engagement dashboard
Points (abstract)                  →    Points → Rewards (tangible redemption)
Flat user model                    →    Partner + Organization + Tier model
```

---

## 2. Phase 1: Strip Web3 Dependencies (Week 1-2)

### 2.1 Files to Modify

#### `src/config.ts` — REPLACE ENTIRELY
**Current:** Wagmi adapter, Reown AppKit, Solana config, hardcoded project ID
**Action:** Replace with app-level configuration (no Web3)

```typescript
// NEW src/config.ts
export const APP_CONFIG = {
  POINTS_FOR_REFERRAL: 100,
  LEADERBOARD_LIMIT: 30,
  APP_NAME: 'Questy',
  SUPPORT_EMAIL: 'support@questy.io',
} as const;
```

#### `src/context/index.tsx` — REWRITE
**Current:** `WagmiProvider`, `SolanaAdapter`, `createAppKit`, `QueryClientProvider`
**Action:** Remove all Web3 providers. Keep `QueryClientProvider` and `GlobalSettingsProvider`.

```typescript
// NEW src/context/index.tsx
'use client'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { GlobalSettingsProvider } from '@/contexts/GlobalSettingsContext'

const queryClient = new QueryClient()

export default function ContextProvider({
  children,
  session,
}: {
  children: ReactNode
  session: any
}) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <GlobalSettingsProvider>
          {children}
        </GlobalSettingsProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
```

#### `src/components/connect-btn.tsx` — REWRITE
**Current:** Reown AppKit wallet connection, `useAppKitAccount`, `useDisconnect`
**Action:** Replace with NextAuth session-based login/logout button

```typescript
// NEW src/components/connect-btn.tsx
'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

export const ConnectBtn = ({ isScrolling }: { isScrolling: boolean }) => {
  const { data: session, status } = useSession()
  const [isHovered, setIsHovered] = React.useState(false)

  const handleClick = () => {
    if (session) {
      signOut()
    } else {
      signIn()
    }
  }

  const buttonText = session
    ? (isHovered ? 'Sign out' : session.user?.name || session.user?.email)
    : 'Sign In'

  return (
    <button
      onClick={handleClick}
      className={`align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg ${
        isScrolling
          ? 'bg-button-primary text-button-primary-text hover:bg-button-primary-hover'
          : 'bg-button-secondary text-button-secondary-text hover:bg-button-secondary-hover'
      } shadow-md hover:shadow-lg flex items-center gap-3 min-w-[120px] justify-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttonText}
    </button>
  )
}
```

#### `src/app/engagement-quest/page.tsx` — REFACTOR
**Current:** `useAppKitAccount`, `useAppKitNetwork` for wallet state; fetches by wallet address
**Action:** Replace with `useSession()` from NextAuth; fetch by user ID from session

**Key changes:**
- Replace `const { address, isConnected } = useAppKitAccount()` → `const { data: session } = useSession()`
- Replace `fetch(/api/wallet/users, { body: { walletAddress } })` → `fetch(/api/users/me)`
- Remove all `caipNetwork`, `chainId`, `switchNetwork` references

### 2.2 Files to DELETE

| File/Directory | Reason |
|---|---|
| `src/app/api/wallet/` (entire directory — 6 route files) | Wallet-based user operations; replaced by session-based API |
| `src/app/api/xauth/` (init + callback routes) | Twitter/X OAuth for social tasks; rebuild later if needed |
| `src/components/mint-modal.tsx` | NFT minting — not applicable |
| `src/components/telegram-modal.tsx` | Telegram integration — rebuild later if needed |

### 2.3 `package.json` — Dependencies to REMOVE

```json
{
  "remove": [
    "@reown/appkit",
    "@reown/appkit-adapter-solana",
    "@reown/appkit-adapter-wagmi",
    "@reown/appkit-siwe",
    "@wagmi/connectors",
    "viem",
    "wagmi"
  ],
  "add": [
    "bcryptjs",
    "@types/bcryptjs"
  ]
}
```

**Estimated bundle size reduction:** ~800KB-1.2MB (Wagmi + Viem + Reown are heavy)

### 2.4 Auth Migration — `src/helpers/lib/authOptions.ts`

**Current:** Google OAuth + Credentials (admin only) + hardcoded admin env vars  
**Action:** Add Credentials provider for end-user email/password login; keep Google for admin

```typescript
// UPDATED authOptions — add end-user credentials provider
CredentialsProvider({
  id: 'partner-login',
  name: 'Partner Login',
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials, req) {
    const hostname = req.headers?.host || 'localhost:3000';
    const { connection } = await connectToDatabase(hostname);
    const UserModel = connection.model('user', User.schema);
    
    const user = await UserModel.findOne({ email: credentials?.email });
    if (!user) return null;
    
    const bcrypt = require('bcryptjs');
    const isValid = await bcrypt.compare(credentials?.password || '', user.password);
    if (!isValid) return null;
    
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role || 'partner',
      organizationId: user.organizationId,
    };
  },
}),
```

---

## 3. Phase 2: Model Schema Changes (Week 2-3)

### 3.1 `src/models/User.ts` — EXTEND

**Add fields, make `walletAddress` optional:**

```typescript
export interface UserInterface {
  _id: mongoose.Types.ObjectId | string;
  name: string;
  email: string;
  password?: string; // bcrypt hash
  walletAddress?: string; // optional — backward compat
  active: boolean;
  role: 'partner' | 'admin' | 'manager'; // NEW
  organizationId?: string; // NEW — partner's company
  organizationName?: string; // NEW
  partnerTier?: 'bronze' | 'silver' | 'gold' | 'platinum'; // NEW
  referredBy?: string;
  referralCode?: string;
  chain?: string;
  lastLoginAt?: Date; // NEW
  invitedBy?: string; // NEW — admin who invited this partner
  invitedAt?: Date; // NEW
  socials?: {
    twitter?: { id: string; username: string };
    linkedin?: { profileUrl: string }; // NEW
  };
}
```

**Schema changes to add:**
```typescript
password: { type: String, required: false }, // bcrypt hashed
role: { type: String, enum: ['partner', 'admin', 'manager'], default: 'partner' },
organizationId: { type: String, required: false, index: true },
organizationName: { type: String, required: false },
partnerTier: { type: String, enum: ['bronze', 'silver', 'gold', 'platinum'], default: 'bronze' },
lastLoginAt: { type: Date, required: false },
invitedBy: { type: String, required: false },
invitedAt: { type: Date, required: false },
```

Make `walletAddress` NOT required:
```typescript
walletAddress: { type: String, required: false }, // was: required: true
```

### 3.2 NEW MODEL: `src/models/Organization.ts`

```typescript
import mongoose from 'mongoose';

export interface OrganizationInterface {
  _id: mongoose.Types.ObjectId | string;
  name: string;
  domain?: string;
  contactEmail: string;
  partnerTier: 'bronze' | 'silver' | 'gold' | 'platinum';
  memberCount: number;
  totalPoints: number;
  createdAt: Date;
}

const organizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    domain: { type: String, required: false },
    contactEmail: { type: String, required: true },
    partnerTier: {
      type: String,
      enum: ['bronze', 'silver', 'gold', 'platinum'],
      default: 'bronze',
    },
    memberCount: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export { organizationSchema as schema };
export const Organization =
  mongoose.models?.organization ||
  mongoose.model<OrganizationInterface>('organization', organizationSchema);
```

### 3.3 NEW MODEL: `src/models/DealRegistration.ts`

```typescript
import mongoose, { Schema } from 'mongoose';

export interface DealRegistrationInterface {
  _id: mongoose.Types.ObjectId | string;
  partnerId: string;
  organizationId: string;
  dealName: string;
  customerName: string;
  customerEmail?: string;
  estimatedValue: number;
  currency: string;
  status: 'submitted' | 'approved' | 'rejected' | 'won' | 'lost';
  notes?: string;
  reviewedBy?: string;
  reviewedAt?: Date;
  pointsAwarded: number;
  createdAt: Date;
}

const dealRegistrationSchema = new mongoose.Schema(
  {
    partnerId: { type: String, required: true, ref: 'user', index: true },
    organizationId: { type: String, required: true, index: true },
    dealName: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: false },
    estimatedValue: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    status: {
      type: String,
      enum: ['submitted', 'approved', 'rejected', 'won', 'lost'],
      default: 'submitted',
    },
    notes: { type: String, required: false },
    reviewedBy: { type: String, required: false },
    reviewedAt: { type: Date, required: false },
    pointsAwarded: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export { dealRegistrationSchema as schema };
export const DealRegistration =
  mongoose.models?.dealRegistration ||
  mongoose.model<DealRegistrationInterface>('dealRegistration', dealRegistrationSchema);
```

### 3.4 NEW MODEL: `src/models/Reward.ts`

```typescript
import mongoose from 'mongoose';

export interface RewardInterface {
  _id: mongoose.Types.ObjectId | string;
  name: string;
  description: string;
  pointsCost: number;
  type: 'gift_card' | 'mdf_credit' | 'swag' | 'custom';
  imageUrl?: string;
  inventory: number; // -1 for unlimited
  isActive: boolean;
  redemptions: { userId: string; redeemedAt: Date }[];
}

const rewardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    pointsCost: { type: Number, required: true },
    type: {
      type: String,
      enum: ['gift_card', 'mdf_credit', 'swag', 'custom'],
      default: 'custom',
    },
    imageUrl: { type: String, required: false },
    inventory: { type: Number, default: -1 },
    isActive: { type: Boolean, default: true },
    redemptions: [
      {
        userId: { type: String, required: true },
        redeemedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export { rewardSchema as schema };
export const Reward =
  mongoose.models?.reward ||
  mongoose.model<RewardInterface>('reward', rewardSchema);
```

### 3.5 `src/models/Task.ts` — EXTEND

**Add fields for B2B task categories:**

```typescript
// Add to TaskInterface:
category?: 'training' | 'certification' | 'deal_registration' | 'co_marketing' | 'sales_activity' | 'general';
requiredTier?: 'bronze' | 'silver' | 'gold' | 'platinum'; // minimum tier to see this task
assignedTo?: string[]; // specific organization IDs (empty = all partners)
dueDate?: Date;
proofRequired?: boolean;
proofType?: 'screenshot' | 'url' | 'file' | 'text';
```

**Schema additions:**
```typescript
category: {
  type: String,
  enum: ['training', 'certification', 'deal_registration', 'co_marketing', 'sales_activity', 'general'],
  default: 'general',
},
requiredTier: {
  type: String,
  enum: ['bronze', 'silver', 'gold', 'platinum'],
  required: false,
},
assignedTo: [{ type: String }],
dueDate: { type: Date, required: false },
proofRequired: { type: Boolean, default: false },
proofType: {
  type: String,
  enum: ['screenshot', 'url', 'file', 'text'],
  required: false,
},
```

---

## 4. Phase 3: New API Routes (Week 3-6)

### 4.1 Routes to ADD

| Route | Method | Purpose | Priority |
|---|---|---|---|
| `api/users/me` | GET | Get current user from session (replaces wallet lookup) | 🔴 Critical |
| `api/users/register` | POST | Partner self-registration with email/password | 🔴 Critical |
| `api/users/invite` | POST | Admin invites partner via email | 🔴 Critical |
| `api/organizations` | GET, POST | CRUD for partner organizations | 🔴 Critical |
| `api/organizations/[id]` | GET, PUT, DELETE | Single organization management | 🟡 High |
| `api/organizations/[id]/members` | GET | List partners in an organization | 🟡 High |
| `api/deals` | GET, POST | Deal registration listing + submission | 🔴 Critical |
| `api/deals/[id]` | GET, PUT | Single deal view + status update (approve/reject) | 🔴 Critical |
| `api/deals/[id]/approve` | POST | Admin approves deal + awards points | 🔴 Critical |
| `api/rewards` | GET, POST | Reward catalog management | 🟡 High |
| `api/rewards/[id]/redeem` | POST | Partner redeems points for reward | 🟡 High |
| `api/partners/tier` | GET | Get partner's current tier + progress to next tier | 🟡 High |
| `api/partners/engagement-score` | GET | Calculate partner engagement score | 🟢 Medium |
| `api/integrations/slack/webhook` | POST | Send notifications to Slack | 🟢 Medium |
| `api/integrations/hubspot/sync` | POST | Sync partner data to HubSpot | 🟢 Medium |

### 4.2 Routes to MODIFY

| Route | Change | Priority |
|---|---|---|
| `api/users/route.ts` | Add email/password creation; remove wallet requirement | 🔴 Critical |
| `api/tasks/route.ts` | Add category filter, tier filter, assignedTo filter | 🟡 High |
| `api/tasks/complete/route.ts` | Support proof upload; check tier eligibility | 🟡 High |
| `api/leaderboard/route.ts` | Add organization-level leaderboard; filter by category | 🟡 High |
| `api/admin/analytics/*` | Add engagement scoring, deal pipeline metrics | 🟢 Medium |

### 4.3 Routes to REMOVE

| Route | Reason |
|---|---|
| `api/wallet/users/*` (all 6 files) | Wallet-based identity → replaced by session-based |
| `api/xauth/*` (init + callback) | Twitter OAuth for quest verification — not needed for B2B |
| `api/backfill-referrals/route.ts` | One-time migration utility |
| `api/color-extraction/route.ts` | Utility — low priority, can remove |

---

## 5. Phase 4: Frontend Changes (Week 4-8)

### 5.1 Pages to MODIFY

| Page | Current State | Target State |
|---|---|---|
| `src/app/page.tsx` | Consumer landing page with Web3 messaging | B2B landing: "Channel Partner Engagement Platform" |
| `src/app/engagement-quest/page.tsx` | Wallet-connected quest completion | Session-based partner dashboard with task categories |
| `src/app/admin/page.tsx` | Admin overview | Add partner management, deal review, reward management |
| `src/app/referrals/*` | Consumer referral flow | Partner referral program (invite other partners) |
| `src/components/navbar.tsx` | "Connect" wallet button | "Sign In" / user menu |

### 5.2 Pages to ADD

| Page | Purpose | Priority |
|---|---|---|
| `src/app/partner/dashboard/page.tsx` | Partner home: active tasks, points, tier, leaderboard position | 🔴 Critical |
| `src/app/partner/deals/page.tsx` | Deal registration form + deal history | 🔴 Critical |
| `src/app/partner/rewards/page.tsx` | Browse + redeem rewards | 🟡 High |
| `src/app/partner/profile/page.tsx` | Partner profile, organization, tier progress | 🟡 High |
| `src/app/admin/organizations/page.tsx` | Manage partner organizations | 🔴 Critical |
| `src/app/admin/deals/page.tsx` | Review + approve/reject deal registrations | 🔴 Critical |
| `src/app/admin/rewards/page.tsx` | Manage reward catalog | 🟡 High |
| `src/app/admin/partners/page.tsx` | Partner list with engagement scores | 🟡 High |
| `src/app/admin/partners/invite/page.tsx` | Invite partners via email | 🔴 Critical |
| `src/app/auth/login/page.tsx` | Partner login page (email/password) | 🔴 Critical |
| `src/app/auth/register/page.tsx` | Partner self-registration (if invited) | 🔴 Critical |

### 5.3 Components to ADD

| Component | Purpose |
|---|---|
| `src/components/partner-tier-badge.tsx` | Visual badge showing Bronze/Silver/Gold/Platinum |
| `src/components/deal-registration-form.tsx` | Form for partners to register deals |
| `src/components/reward-card.tsx` | Card displaying a reward with redeem button |
| `src/components/engagement-score.tsx` | Visual engagement score indicator |
| `src/components/task-category-filter.tsx` | Filter tasks by category (training, deals, etc.) |
| `src/components/partner-invite-form.tsx` | Admin form to invite partners via email |
| `src/components/organization-selector.tsx` | Dropdown to filter by partner organization |

---

## 6. Database & Infrastructure Changes

### 6.1 `src/lib/dbConnect.ts` — NO CHANGES NEEDED
The multi-tenant connection system is already well-architected. Each tenant gets an isolated database, which maps perfectly to "each manufacturer client gets their own partner portal."

### 6.2 `masterData.ts` — UPDATE DOMAIN ENTRIES
Add new B2B client domains as they onboard. Structure remains the same.

### 6.3 `src/models/GlobalSettings.ts` — EXTEND
Add B2B-specific settings:

```typescript
// Add to GlobalSettingsInterface and schema:
partner_tiers_enabled: { type: Boolean, default: true },
deal_registration_enabled: { type: Boolean, default: true },
rewards_catalog_enabled: { type: Boolean, default: true },
partner_self_registration: { type: Boolean, default: false },
default_partner_tier: { type: String, default: 'bronze' },
points_for_deal_approved: { type: Number, default: 500 },
points_for_deal_won: { type: Number, default: 1000 },
points_for_training_complete: { type: Number, default: 200 },
points_for_certification: { type: Number, default: 500 },
tier_thresholds: {
  type: {
    silver: { type: Number, default: 1000 },
    gold: { type: Number, default: 5000 },
    platinum: { type: Number, default: 15000 },
  }
},
slack_webhook_url: { type: String, default: '' },
hubspot_api_key: { type: String, default: '' },
```

### 6.4 Redis Cache — NO CHANGES NEEDED
`src/lib/redisClient.ts` is already used for domain config caching. Extend usage for:
- Partner engagement score caching (compute-heavy, cache for 1 hour)
- Leaderboard caching (cache for 5 minutes)

---

## 7. Files That DON'T Change (Preserved Assets)

These files represent the core value of Questy and require zero modification:

| File | Why It's Preserved |
|---|---|
| `src/lib/dbConnect.ts` | Multi-tenant connection system — perfect as-is |
| `src/lib/redisClient.ts` | Caching infrastructure — extend, don't replace |
| `src/lib/getHostData.ts` | Domain-based routing — perfect as-is |
| `src/helpers/lib/masterDomainsService.ts` | Domain config caching — perfect |
| `src/models/DomainConfig.ts` | Domain-to-database mapping — perfect |
| `src/models/UserQuest.ts` | Progress tracking — works for partner task tracking |
| `src/models/PromoCode.ts` | SPIF code system — rename concept but same mechanics |
| `src/contexts/GlobalSettingsContext.tsx` | Whitelabel settings provider — extend, don't replace |
| `tailwind.config.ts` | All 60+ CSS custom properties — perfect for whitelabel |
| `src/middleware.ts` | Domain routing middleware — keep as-is |
| `Dockerfile` / `cloudbuild.yaml` | Deployment infrastructure — no changes needed |
| `docker-compose.yml` | Local dev infrastructure — no changes |

---

## 8. Migration Effort Summary

| Category | Files to Modify | Files to Add | Files to Delete | Effort (Days) |
|----------|----------------|-------------|----------------|--------------|
| **Auth System** | 4 | 2 | 0 | 3-4 |
| **Web3 Stripping** | 5 | 0 | 10+ | 2-3 |
| **Model Changes** | 3 | 3 | 0 | 2-3 |
| **New API Routes** | 5 | 15 | 8 | 5-7 |
| **Frontend Pages** | 5 | 11 | 2 | 7-10 |
| **New Components** | 0 | 7 | 2 | 3-4 |
| **Infrastructure** | 1 | 0 | 0 | 1 |
| **Total** | **23** | **38** | **22+** | **23-32 days** |

**With one developer working full-time: 5-7 weeks**  
**With two developers: 3-4 weeks**

---

## 9. Technical Debt to Address During Pivot

| Issue | Location | Fix |
|---|---|---|
| Hardcoded admin email domain | `authOptions.ts` line 83: `profile.email.endsWith("@poloventures.io")` | Make configurable per tenant via GlobalSettings |
| Hardcoded bucket URL | `navbar.tsx` line 69: `"https://static.poloventures.io/"` | Move to env variable or GlobalSettings |
| Hardcoded Reown project ID | `config.ts` line 7 | Remove entirely (Web3 gone) |
| Plain-text admin password | `authOptions.ts` line 21: `adminUser.password === password` | Use bcrypt comparison |
| Duplicate User schema | `src/models/index.ts` has different User schema than `src/models/User.ts` | Consolidate to single source |
| No rate limiting on API routes | All `route.ts` files | Add rate limiting middleware |
| No input validation | Most API routes | Add Zod validation |

---

## 10. Environment Variables — Updated

### Remove:
```
NEXT_PUBLIC_PROJECT_ID          # Reown AppKit
NEXT_PUBLIC_ADMIN_USERNAME      # Hardcoded admin (moved to DB)
NEXT_PUBLIC_ADMIN_PASSWORD      # Hardcoded admin (moved to DB)
```

### Keep:
```
MONGODB_URI
MONGODB_HOST
MONGODB_USERNAME
MONGODB_PASSWORD
REDIS_URL
OAUTH_CLIENT_ID                 # Google OAuth for admin
OAUTH_CLIENT_SECRET
NEXTAUTH_SECRET
NEXTAUTH_URL
GCS_BUCKET_NAME
GCS_PROJECT_ID
GCS_CLIENT_EMAIL
GCS_PRIVATE_KEY
NODEMAILER_*                    # Email config
```

### Add:
```
NEXT_PUBLIC_APP_NAME=Questy
NEXT_PUBLIC_STATIC_ASSETS_URL=https://static.questy.io/
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
SLACK_DEFAULT_WEBHOOK_URL       # Default Slack webhook for notifications
HUBSPOT_API_KEY                 # HubSpot integration
```