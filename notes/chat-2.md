- Buyers can subscribe/bookmark Sellers so they get notified of their new products, discounts, promotions

Business name

Business registration number

Tax ID (optional for MVP depending on region)

Business address

Contact information

Upload documents:

Government-issued ID

Business registration certificate

KYC status:

Pending

Approved

Rejected (with reason)


Success Criteria
95% of legitimate sellers complete KYC successfully

Fraud rate under defined threshold


4.3 Product Management
Description
Sellers add and manage products within each store.

Functional Requirements
Create product:

Product name

Description

Category

SKU

Price

Discount price

Images (multiple)

Variants (size, color, etc.)

Stock quantity

Edit product

Delete product

Activate/Deactivate product

Bulk upload (CSV) – Phase 2

4.4 Inventory Management
Description
Track stock levels and manage availability.

Functional Requirements
Auto reduce inventory after purchase

Low-stock alerts

Out-of-stock visibility toggle

Manual stock adjustment

Inventory history log

Metrics
Prevent overselling

Stock sync accuracy ≥ 99%

4.5 Seller-Buyer Chat
Description
Enable direct communication between buyers and sellers.

Functional Requirements
Chat initiated from:

Product page

Store page

Real-time messaging

Order-linked conversations

Notifications (in-app + email optional)

Block/report user

Constraints
No external links allowed in MVP (to reduce fraud)

4.6 Store Analytics Dashboard
Description
Provide sellers insights into store performance.

Core Metrics
Total revenue

Number of orders

Conversion rate

Store visits

Product views

Best-selling products

Traffic sources (Phase 2)

Features
Time filters (7d, 30d, 90d, custom)

Downloadable report (CSV) – Phase 2

Visual charts

4.7 Seller Promotions (Homepage Boost)
Description
Sellers can pay or use credits to promote products/store on homepage.

Types of Promotions
Featured Store

Featured Product

Limited-time Deal banner

Functional Requirements
Seller selects product/store

Select promotion duration

Budget/credit selection

Preview

Admin moderation

Homepage ranking algorithm

Promotion Ranking Factors
Budget

Duration

Seller rating

Conversion history

5. BUYER FEATURES
   5.1 Global Product Search
   Description
   Search across all stores.

Functional Requirements
Keyword search

Search by:

Product name

Category

Store name

Autocomplete suggestions

Sort:

Price low-high

Price high-low

Most popular

Highest rated

Newest

5.2 Filtering Within a Store
Description
Filter products on a specific store page.

Filters
Category

Price range

Availability

Ratings

Variants (size, color)

5.3 Shopping Cart
Description
Buyers can add items from multiple stores into one cart.

Functional Requirements
Add to cart

Remove from cart

Update quantity

Multi-store checkout logic

Price summary:

Subtotal per store

Tax

Shipping

Total

5.4 Ratings & Reviews
Description
Buyers can rate sellers.

Functional Requirements
1–5 star rating

Text review

Only verified purchasers can review

Seller overall rating score

Review moderation

Report abuse

5.5 Subscribe/Bookmark Sellers
Description
Buyers can follow sellers to get notified.

Functional Requirements
Subscribe button on store page

Notifications for:

New products

Promotions

Discounts

Notification channels:

In-app

Email (opt-in)

Subscription management page

6. Admin Features
   Approve/reject KYC

Moderate stores/products

Manage promotions

View platform-wide analytics

Suspend sellers

Dispute management

7. System Requirements
   7.1 Performance
   Page load < 2 seconds

Search response < 500ms

Support 100k concurrent users (scalable architecture)

7.2 Security
Encrypted data storage

Secure payment processing (PCI compliant)

Fraud detection

KYC validation system

Role-based access control

7.3 Scalability
Microservices architecture (recommended)

Cloud-based infrastructure

CDN for media delivery

8. Key Metrics (KPIs)
   Marketplace Health
   GMV (Gross Merchandise Value)

Number of active sellers

Number of active buyers

Seller retention rate

Buyer retention rate

Seller Success
Avg revenue per seller

% sellers running promotions

Avg seller rating

Buyer Engagement
Repeat purchase rate

Subscription rate

Avg cart size

Conversion rate

10. Risks & Mitigations
    Risk Mitigation
    Fraudulent sellers Strong KYC + manual review
    Spam in chat Content filtering
    Fake reviews Verified purchase requirement
    Overselling Real-time inventory locking
    Poor search performance Indexed search engine (Elastic/OpenSearch)
11. Future Enhancements (Phase 2+)
    AI product recommendations

Advanced analytics (cohort, LTV)

Dynamic pricing tools

Seller ads bidding system

Loyalty programs

Mobile app

Affiliate program

Multi-currency support

International shipping

If you'd like, I can now:

Turn this into a technical architecture blueprint

Break it into epics and user stories for Jira

Create a database schema draft

Create a monetization strategy

Or help you define an MVP vs Phase 2 roadmap

Taking a percentage of successful transactions
Charging for visibility (promotion/ads)
Offering premium seller tools
Optional subscription tiers
Value-added financial & logistics services (Phase 2+)

Structure Options
Option A: Flat Commission
8%–15% per transaction

Simple, predictable

Option B: Tiered Commission (Recommended)
Encourages volume growth.

Example:

Monthly GMV Commission Rate
$0–$5,000 12%
$5,001–$20,000 10%
$20,001+ 8%
Why This Works
Aligns with marketplace success

2.2 Payment Processing Margin
Model
Add 0.5–1% margin on top of payment processor fee.

Stripe charges 2.9% + $0.30
You charge seller 3.5% + $0.30
Platform keeps 0.6%

Sellers pay to:
Feature product
Feature store

Run limited-time deal banner
$20/day (small slot)
$75/day (hero banner)
$300/week premium slot

2.3.2 Sponsored Search (Phase 2)
Promote products in search results
CPC model (cost per click)

2.4 Seller Subscription Plans
Freemium + Premium Model

Free Tier
1 store

Basic analytics

Standard commission rate

Limited promotions access

Pro Plan ($29–$79/month)
Features:

Lower commission rate (e.g., -2%)

Advanced analytics

More stores

Priority support

Early access to new features

Higher promotion ranking weight

Enterprise Plan (Custom Pricing)
Custom commission

Dedicated account manager

Advanced analytics exports

API access

Bulk upload tools

Why Subscription Works
Predictable recurring revenue

Encourages platform lock-in

Reduces churn

Creates upgrade path

2.5 Seller Tools Monetization (Add-Ons)
Optional paid add-ons:

Inventory forecasting tools

Advanced analytics dashboards

Custom storefront themes

Automation tools

CRM tools for seller

Example:

$10/month per add-on

Bundle discount

3. Future Revenue Streams (Phase 2+)
   3.1 Logistics Revenue Share
   If you introduce integrated shipping:

Take margin on shipping labels

Offer discounted rates and keep spread

3.2 Embedded Finance
Huge long-term opportunity.

Seller cash advances (loan against future sales)

Inventory financing

Early payout fee (e.g., 1% for instant payout)

3.3 Buyer-Side Monetization
Be careful here — don’t hurt conversion.

Options:

Premium buyer membership (free shipping, early access)

Sponsored product placements

Affiliate referral commissions

4. Recommended Monetization Mix (MVP)
   For launch:

✅ Commission per transaction (10–12%)

✅ Paid homepage promotions

✅ Payment processing margin

🚫 No subscription initially (add after traction)

Why?

Low barrier for sellers

Revenue tied directly to success

Easy to explain

After product-market fit:

Introduce subscription tier

Introduce sponsored search

Introduce seller financing

5. Revenue Model Example
   Assume:

1,000 sellers

Average monthly GMV per seller: $5,000

Total GMV: $5,000,000

Commission Revenue (10%)
= $500,000/month

Payment Margin (0.5%)
= $25,000/month

Promotions (20% sellers spend avg $200/month)
= 200 sellers × $200 = $40,000/month

Total Monthly Revenue
= ~$565,000

6. Strategic Positioning
   If You Want Fast Growth:
   Lower commission (8–10%)

Aggressive promotions monetization

If You Want Premium Marketplace:
Higher commission (12–15%)

Strong KYC

Curated sellers

Premium analytics subscriptions

7. Risk Analysis
   Risk Mitigation
   Sellers churn due to high fees Tiered commission
   Over-reliance on commission Diversify with promotions
   Low seller promotion adoption Offer free promo credits initially
   Race to bottom pricing Highlight brand/store identity
8. Monetization Maturity Roadmap
   Phase 1 (0–6 months)
   Commission

Payment margin

Featured homepage promotion

Phase 2 (6–12 months)
Subscription tiers

Sponsored search

Analytics upsell

Phase 3 (12–24 months)
Seller financing

Shipping margin

Embedded financial products

9. North Star Strategy
   Your strongest long-term monetization engine will likely be:

Ads + Embedded Finance + Commission

This is how Amazon, Shopify ecosystems, and Alibaba scale massively.

If you'd like next, I can:

Modularity for Phase 2+ (ads bidding, finance, shipping, recommendations)

3.3 Seller/Store Service (multi-store per seller)
Responsibilities

Seller profile

Store status: active/paused/deleted

3.5 Inventory Service (system of record for stock)
Responsibilities

Stock levels per SKU/variant

Reservation/hold for checkout

Inventory adjustment log

Data

inventory_levels, reservations, inventory_movements (append-only)

Key correctness rule

Inventory is updated by atomic DB transactions (or a dedicated locking strategy) to prevent oversell.

3.6 Cart Service
Responsibilities

Buyer carts (multi-store)

Pricing snapshot + validation

Stores cart in Redis (fast) with persistence fallback to Postgres

APIs

POST /cart/items

PATCH /cart/items/{id}

GET /cart

POST /cart/checkout-intent

Data

carts (optional), cart_items (optional) + Redis keys

3.7 Order Service
Responsibilities

Order creation per store (split orders) or unified order with suborders

Order state machine: created → awaiting_payment → paid → fulfilled → completed/cancelled

Refund workflow initiation

APIs

POST /orders

GET /orders/{id}

POST /orders/{id}/cancel

POST /orders/{id}/refund-request

Data

orders, suborders, order_items, order_status_history

3.8 Payment Service
Responsibilities

Payment intents, webhooks handling

Reconciliation

Seller payouts (Phase 2) or marketplace payout routing

APIs

POST /payments/intent

POST /payments/webhook (provider)

GET /payments/{id}

Integration

Stripe/Adyen/Paystack/Flutterwave (region-based)

3.9 Promotions/Ads Service (homepage boosts)
Responsibilities

Seller-created promotion campaigns (store/product)

Budget/credit model

Approval workflow (optional)

Ranking + placement delivery

APIs

POST /promotions

GET /promotions/placements?slot=home_hero

POST /admin/promotions/{id}/approve|reject

Data

promotions, promotion_assets, promotion_budgets, promotion_impressions_clicks

Buyer follows store/seller
Triggers on new product/promo/discount

Cart validates pricing/availability
Cart requests Inventory reservation (reserve)

Inventory creates reservation (TTL)

Order service creates order in awaiting_payment

Payment service creates payment intent

Payment webhook confirms success

Payment emits payment.succeeded

Order transitions to paid

Inventory commits reservation (commit) reducing stock permanently

Notification to seller + buyer

Oversell prevention: reservations + atomic stock commit.

6.4 Promotions on homepage
Seller creates promotion campaign

(Optional) Admin approves

Promotions service serves placements to Home page via GET /promotions/placements

Impressions/clicks tracked as events for billing and analytics

6.5 Chat
Buyer opens product page → starts conversation

Chat service creates conversation (buyer + seller participants)

Real-time messages via WebSocket

Messages persisted for history, moderation, and audit


created_at, updated_at

KYC
kyc_submissions
id (PK, uuid)

seller_user_id (FK → seller_profiles.user_id)

status (enum: pending, approved, rejected, needs_more_info)

submitted_at

reviewed_by (FK → users.id, nullable)

reviewed_at (nullable)

rejection_reason (nullable text)

metadata (jsonb)

kyc_documents
id (PK, uuid)

kyc_submission_id (FK → kyc_submissions.id)

doc_type (enum: government_id, business_certificate, proof_of_address, other)

file_url (object storage URL / key)

uploaded_at

Relationship

seller_profiles 1→M kyc_submissions 1→M kyc_documents

Catalog
categories
id (PK, uuid)

parent_id (FK → categories.id, nullable)

name

slug (unique)

products
id (PK, uuid)

store_id (FK → stores.id)

title

description

category_id (FK → categories.id, nullable)

brand (nullable)

status (enum: draft, active, inactive, archived)

is_featured (bool default false)

created_at, updated_at

Indexes

idx(store_id)

idx(category_id)

product_images
id (PK, uuid)

product_id (FK → products.id)

url

sort_order (int)

created_at

product_variants
Variants are what you actually sell/stock.

id (PK, uuid)

product_id (FK → products.id)

sku (unique per platform or unique per store; choose one)

variant_name (e.g., “Red / XL”)

attributes (jsonb: { "color":"red","size":"XL" })

price (numeric(12,2))

compare_at_price (nullable numeric)

currency (char(3))

barcode (nullable)

status (enum: active, inactive)

created_at, updated_at

Indexes

unique(sku) (or unique(store_id, sku) via join with product->store; if you want per-store uniqueness)

gin(attributes) for filtering

Inventory (correctness-focused)
inventory_items
1 row per variant.

variant_id (PK/FK → product_variants.id)

on_hand (int) — physical stock

reserved (int) — currently reserved

available (generated or maintained: on_hand - reserved)

low_stock_threshold (int default 5)

updated_at

Many teams prefer NOT storing available and computing it, but keeping it as a generated column is fine in Postgres.

inventory_movements
Immutable log of adjustments.

id (PK, uuid)

variant_id (FK → product_variants.id)

movement_type (enum: adjustment, reservation_hold, reservation_release, sale_commit, refund_return)

quantity_delta (int) (positive or negative)

reference_type (enum: order, reservation, manual, refund)

reference_id (uuid, nullable)

note (text, nullable)

created_at

inventory_reservations
For checkout holds (prevents overselling).

id (PK, uuid)

buyer_user_id (FK → users.id)

variant_id (FK → product_variants.id)

quantity (int)

status (enum: active, released, committed, expired)

expires_at

order_id (FK → orders.id, nullable until checkout)

created_at, updated_at

Indexes

idx(variant_id, status)

idx(expires_at) for cleanup jobs

Cart
carts
id (PK, uuid)

buyer_user_id (unique FK → users.id)

status (enum: active, converted, abandoned)

created_at, updated_at

cart_items
id (PK, uuid)

cart_id (FK → carts.id)

store_id (FK → stores.id) (denormalized for speed; can be derived via variant→product→store)

variant_id (FK → product_variants.id)

quantity (int)

price_snapshot (numeric(12,2)) (optional but recommended)

created_at, updated_at

Constraints

unique(cart_id, variant_id) to avoid duplicates

Orders (split by store)
orders
Represents the buyer checkout.

id (PK, uuid)

buyer_user_id (FK → users.id)

status (enum: created, awaiting_payment, paid, cancelled, completed, refunded)

currency (char(3))

subtotal (numeric(12,2))

discount_total (numeric(12,2))

shipping_total (numeric(12,2))

tax_total (numeric(12,2))

grand_total (numeric(12,2))

created_at, updated_at

order_store_groups
One per store involved in the order (enables sellers to manage their chunk).

id (PK, uuid)

order_id (FK → orders.id)

store_id (FK → stores.id)

seller_user_id (FK → seller_profiles.user_id) (denormalized)

status (enum: pending, processing, fulfilled, cancelled, refunded)

subtotal, discount_total, shipping_total, tax_total, total

created_at, updated_at

Constraints

unique(order_id, store_id)

order_items
id (PK, uuid)

order_store_group_id (FK → order_store_groups.id)

product_id (FK → products.id)

variant_id (FK → product_variants.id)

quantity (int)

unit_price (numeric(12,2))

line_total (numeric(12,2))

product_title_snapshot (text)

variant_snapshot (jsonb) (attributes, sku, etc.)

created_at

order_status_history
id (PK, uuid)

order_id (FK → orders.id)

from_status, to_status

changed_by_user_id (FK → users.id, nullable)

created_at

Payments
payments
id (PK, uuid)

order_id (FK → orders.id)

provider (text: stripe/adyen/paystack/etc.)

provider_payment_id (unique)

status (enum: initiated, authorized, captured, failed, refunded)

amount (numeric(12,2))

currency (char(3))

fee_amount (numeric(12,2), nullable)

captured_at (nullable)

created_at, updated_at

refunds (optional but recommended)
id (PK, uuid)

payment_id (FK → payments.id)

order_store_group_id (FK → order_store_groups.id, nullable) (partial refunds per store)

amount

status (enum: requested, approved, processed, failed)

provider_refund_id (nullable)

created_at, updated_at

Promotions (homepage boost)
promotions
id (PK, uuid)

seller_user_id (FK → seller_profiles.user_id)

store_id (FK → stores.id, nullable)

product_id (FK → products.id, nullable)

placement (enum: home_hero, home_carousel, home_grid, search_sponsored (phase2))

status (enum: draft, pending_approval, active, paused, rejected, ended)

starts_at, ends_at

budget_total (numeric(12,2))

budget_spent (numeric(12,2))

pricing_model (enum: flat_fee, cpm, cpc)

created_at, updated_at

Constraints

Ensure one of (store_id, product_id) is not null.

If status=active, must have starts_at <= now <= ends_at

promotion_events
Track impressions/clicks for billing + analytics.

id (PK, uuid)

promotion_id (FK → promotions.id)

event_type (enum: impression, click)

buyer_user_id (FK → users.id, nullable)

session_id (nullable)

created_at

Indexes: idx(promotion_id, event_type, created_at)

Chat
conversations
id (PK, uuid)

store_id (FK → stores.id)

buyer_user_id (FK → users.id)

seller_user_id (FK → seller_profiles.user_id) (or derive from store)

order_store_group_id (FK → order_store_groups.id, nullable)

created_at, updated_at

Constraints

unique(store_id, buyer_user_id, order_store_group_id) (optional; prevents duplicates per order)

messages
id (PK, uuid)

conversation_id (FK → conversations.id)

sender_user_id (FK → users.id)

message_type (enum: text, system)

body (text)

sent_at (timestamp)

read_at (nullable)

metadata (jsonb, nullable)

Indexes: idx(conversation_id, sent_at)

Ratings / Reviews (buyers rate sellers)
store_reviews
Rating at store-level (simplest) and “verified purchase only”.

id (PK, uuid)

store_id (FK → stores.id)

buyer_user_id (FK → users.id)

order_store_group_id (FK → order_store_groups.id) (enforces verified purchase)

rating (int check 1–5)

review_text (text, nullable)

status (enum: published, hidden, flagged)

created_at, updated_at

Constraints

unique(order_store_group_id) (one review per store order)

check(order_store_group_id belongs to store_id and buyer_user_id) (enforced via app or trigger)

store_rating_aggregates
store_id (PK/FK → stores.id)

avg_rating (numeric(3,2))

rating_count (int)

updated_at

Subscriptions / Bookmarks + Notifications
store_subscriptions
id (PK, uuid)

buyer_user_id (FK → users.id)

store_id (FK → stores.id)

created_at

Constraints

unique(buyer_user_id, store_id)

notification_preferences
buyer_user_id (PK/FK → users.id)

in_app_enabled (bool default true)

email_enabled (bool default false)

notify_new_products (bool default true)

notify_promotions (bool default true)

notify_discounts (bool default true)

updated_at

notifications
id (PK, uuid)

buyer_user_id (FK → users.id)

type (enum: new_product, promotion, discount, order_update, message)

title

body

data (jsonb) (links to product/store/promo ids)

status (enum: queued, sent, failed, read)

channel (enum: in_app, email)

created_at, sent_at (nullable), read_at (nullable)

Indexes: idx(buyer_user_id, status, created_at)

Helpful supporting tables
audit_logs (admin + sensitive actions)
id (PK, uuid)

actor_user_id (FK → users.id)

action (text)

entity_type (text)

entity_id (uuid)

before (jsonb, nullable)

after (jsonb, nullable)

created_at

moderation_reports (chat/reviews/products)
id (PK, uuid)

reporter_user_id (FK → users.id)

entity_type (enum: message, review, product, store)

entity_id (uuid)

reason (text)

status (enum: open, reviewed, actioned, dismissed)

created_at, updated_at

// 
reserve: reserved += qty only if (on_hand - reserved) >= qty
commit: on_hand -= qty and reserved -= qty in one transaction

