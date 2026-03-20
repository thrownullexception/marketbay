- Vacation mode with auto-responder
  SELL-005 Bulk operations P1 - CSV import/export
- Bulk price updates
- Bulk inventory adjustments
  SELL-007 Product status P1 - Draft, Active, Out of Stock, Discontinued
- Seasonal collections
  4.1.3 Inventory Management
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
  SELL-008 Real-time inventory tracking P0 - Automatic decrement on order
- Low stock alerts (configurable threshold)
- Out-of-stock auto-pause
  SELL-009 Multi-location inventory P1 - Support for multiple warehouses
- Location-based availability
- Transfer between locations
  SELL-010 Inventory analytics P2 - Stock turnover rate
- Dead stock identification
- Demand forecasting (basic)
  SELL-011 Inventory history P2 - Audit log of all changes
- Adjustment reasons required
- CSV export of history
  Inventory Alert System:
  Email + SMS + In-app notification when stock ≤ threshold
  Daily digest of low-stock items
  Predictive alerts based on sales velocity
  4.1.4 Seller-Buyer Chat
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
- Typing indicators
  SELL-013 Chat management P1 - Canned responses/templates
- Auto-reply during off-hours
- Product cards in conversation
- Customer purchase history visible
  Pre-chat intents: "Question about product," "Order status," "Return request"
  Quick actions: "Send invoice," "Create discount code," "Initiate return"
  Chat history retained for 2 years
  SELL-016 Sales analytics P0 - Revenue trends (daily/weekly/monthly)
- Order volume
- Average order value (AOV)
- Conversion rate
  SELL-017 Product performance P0 - Top/bottom performing products
- Views-to-purchase ratio
- Cart abandonment rate
  SELL-018 Customer insights P1 - New vs. returning customers
- Geographic distribution
- Customer lifetime value (CLV)
  SELL-019 Traffic sources P1 - Platform search vs. direct vs. external
- Keyword performance
- Promotion effectiveness
  SELL-020 Export capabilities P2 - PDF reports
- Scheduled email reports
  Analytics Visualization:
  Interactive charts (Chart.js/D3.js)
  Date range comparison
  Benchmarking vs. category averages
  Mobile-responsive dashboard
  4.1.6 Promotions & Boosting
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
  SELL-021 Home page promotions P0 - Auction-based ad slots
- Featured product carousel
- Category spotlight placements
  SELL-022 Promotion types P1 - Percentage discounts
- Fixed amount off
- Buy X Get Y
- Free shipping
- Flash sales
  SELL-023 Bidding system P1 - Real-time auction for ad slots
- Daily/weekly slot options
- Budget caps and auto-bidding
  SELL-024 Promotion analytics P1 - ROI tracking
- Click-through rates
- Conversion from promotions
  SELL-025 Scheduled promotions P2 - Calendar-based campaign planning
- Recurring promotions
- Seasonal templates
  Promotion Auction Model:
  CPM (Cost Per Mille) or CPC (Cost Per Click) options
  Minimum bids based on category competitiveness
  Quality score factor (seller rating, product relevance)
  4.1.7 KYC Verification (Critical Trust Feature)
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
  SELL-026 Business verification P0 - Business registration certificate
- Tax ID verification
- Bank account verification
  SELL-027 Identity verification P0 - Government ID upload
- Selfie with ID
- Address verification
  SELL-028 Verification levels P1 - Level 1: Basic (limited products)
- Level 2: Verified (full features)
- Level 3: Premium (priority support, badges)
  SELL-029 Ongoing monitoring P1 - Annual re-verification
- Random compliance checks
- Automated risk scoring
  SELL-030 Rejection handling P1 - Clear rejection reasons
- Re-submission workflow
- Appeal process
  KYC Workflow:
  plain
  Copy
  Registration → Submit Documents → AI Pre-check → Manual Review →
  Approved/Rejected → Badge Displayed → Continuous Monitoring
  Trust Signals:
  Verified badge on store and products
  "KYC Approved" tooltip with verification date
  Compliance score visible to buyers
  4.2 BUYER FEATURES
  4.2.1 Global Product Search
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
  BUY-001 Universal search P0 - Search across all stores
- Autocomplete with suggestions
- Search history
- Trending searches
  BUY-002 Advanced filters P0 - Price range
- Category
- Rating
- Shipping location
- KYC status (verified only toggle)
  BUY-003 Search algorithms P1 - Relevance scoring
- Personalization based on history
  Store verification badges
  Estimated delivery time
  "Save search" for alerts
  4.2.2 In-Store Filtering
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
  BUY-005 Store-specific filtering P0 - Category tabs
- Price sorting
- Newest/Popular/Best rated
- Availability filter
  BUY-006 Store navigation P1 - Store search bar
- Collection browsing
- Lookbook/gallery view
- About the seller section
  BUY-007 Store policies P1 - Shipping info prominently displayed
- Return policy summary
- Response time indicator
  BUY-009 Multi-store cart P0 - Grouped by seller
- Separate checkout per seller
- Combined shipping estimates
- Price drop notifications for saved items
- Move to cart
  Cart Architecture:
  Cart stored in Redis for performance
  30-day persistence for anonymous users
  Real-time inventory validation
  Price change alerts
- Multi-criteria: Product quality, Shipping speed, Communication, Accuracy
- Written review optional
  BUY-013 Review features P1 - Photo/video attachments
- Verified purchase badge
- Seller response capability
- Review helpfulness voting
  BUY-014 Rating impact P1 - Affects search ranking
- Determines promotion eligibility
- KYC level requirements
  BUY-015 Dispute resolution P1 - Report inappropriate reviews
- Mediation for false claims
- Review editing window (48h)
  Rating Calculation:
  Weighted average (recent reviews weighted higher)
  Bayesian average for statistical significance
  Category-specific benchmarks
  4.2.5 Seller Subscription/Bookmarking
  Table
  Copy
  Requirement ID Description Priority Acceptance Criteria
  BUY-016 Subscribe to seller P0 - One-click subscribe button
  BUY-017 Notification triggers P0 - New product listings
- Price drops on wishlisted items
- Store promotions/sales
- Back in stock alerts
  BUY-018 Notification channels P1 - In-app notifications
- Email digests (daily/weekly)
  BUY-019 Personalized feed P1 - "New from your sellers" section on home
- Curated recommendations
- Subscription analytics for sellers
- Trending sellers list
- Seller milestones celebrations
  Subscription Model:
  plain
  Copy
  Buyer subscribes → System tracks seller activity → Triggers notification rules →
  Delivers via preferred channel → Tracks engagement → Seller sees subscriber analytics

  5.2 Database Schema (Simplified)
  sellers (KYC status, verification level)
  subscriptions (buyer-seller relationships)

6. User Interface Requirements
   Revenue graph (7/30/90 days)
   Low stock alerts widget
   Recent messages preview
   Quick action buttons
   Personalized feed (subscribed sellers)
   Trending products
   Promotion banners (auction slots)
   Category exploration
   Storefront:
   Hero banner
   Collection grid
   Trust badges (KYC, ratings)
   Chat initiation button
   Subscribe CTA
7. Security & Compliance
   Transaction fees 5-8% per sale Tiered by seller level
   Subscription plans Monthly Basic ($29), Professional ($79), Enterprise ($199)
   Promotions/Ads Auction + Fixed Homepage slots, category features
   Featured listings Fixed fee Priority search placement
   Payment processing Pass-through Stripe fees + 0.5% platform fee
8. Success Metrics & KPIs
   9.1 Seller Metrics
   Store creation conversion rate: >30%
   KYC completion rate: >80%
   Active seller rate (list products): >60%
   Seller NPS: >50
   9.2 Buyer Metrics
9. Open Questions
   Should we allow individual sellers (not just businesses) with lighter KYC?
   What's the policy for counterfeit claims—immediate suspension or investigation?
   Do we handle shipping or integrate with carriers (Amazon model vs. eBay model)?
   Should chat be mandatory for sellers to respond within X hours?
   What's the dispute resolution SLA?

┌─────────────────────────────────────────────────────────────┐
│ ASYNCHRONOUS (Message Queue) │
│ Product Created → Search Indexing Queue → Elasticsearch │
│ Order Placed → Notification Queue → Email/SMS/Push │
│ Inventory Low → Alert Queue → Seller Notification │
│ KYC Approved → Store Activation Queue → Go Live │
└─────────────────────────────────────────────────────────────┘
kyc_status VARCHAR(20) DEFAULT 'pending' CHECK (kyc_status IN ('pending', 'in_review', 'approved', 'rejected')),
kyc_documents JSONB, -- [{type: 'registration', url: '...', verified: false}]

-- [
-- {
-- "sku": "SHIRT-BLU-M",
-- "attributes": {"color": "Blue", "size": "M"},
-- "price": 29.99,
-- "inventory_quantity": 100,
-- "weight": 0.5
-- }
-- ]
attributes JSONB DEFAULT '{}', -- {material: 'Cotton', care: 'Machine wash'}
status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),
published_at TIMESTAMP,

-- Inventory Tracking (Separate table for high-frequency updates)
CREATE TABLE inventory (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
product_id UUID REFERENCES products(id),
variant_sku VARCHAR(100),
quantity_available INT NOT NULL DEFAULT 0,
quantity_reserved INT NOT NULL DEFAULT 0, -- for pending orders
quantity_sold INT NOT NULL DEFAULT 0,
low_stock_threshold INT DEFAULT 10,
location_id UUID, -- for multi-location support
last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
version INT DEFAULT 1, -- optimistic locking
UNIQUE(product_id, variant_sku, location_id)
);

-- Orders with Multi-Store Support
CREATE TABLE orders (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
buyer_id UUID REFERENCES users(id),
order_number VARCHAR(50) UNIQUE NOT NULL,
status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded')),
payment_status VARCHAR(20) DEFAULT 'pending',
shipping_address JSONB NOT NULL,
billing_address JSONB NOT NULL,
total_amount DECIMAL(10,2) NOT NULL,
currency VARCHAR(3) DEFAULT 'USD',
metadata JSONB DEFAULT '{}',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items (denormalized for performance)
CREATE TABLE order_items (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
order_id UUID REFERENCES orders(id),
product_id UUID REFERENCES products(id),
store_id UUID REFERENCES stores(id),
seller_id UUID REFERENCES sellers(id),
variant_sku VARCHAR(100),
product_title VARCHAR(500), -- snapshot at purchase
product_image VARCHAR(500),
quantity INT NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
total_price DECIMAL(10,2) NOT NULL,
status VARCHAR(20) DEFAULT 'pending', -- separate from order status
fulfillment_status VARCHAR(20) DEFAULT 'unfulfilled',
tracking_number VARCHAR(100),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chat System
CREATE TABLE conversations (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
buyer_id UUID REFERENCES users(id),
seller_id UUID REFERENCES sellers(id),
store_id UUID REFERENCES stores(id),
order_id UUID REFERENCES orders(id), -- optional, for context
status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'closed', 'archived')),
last_message_at TIMESTAMP,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
conversation_id UUID REFERENCES conversations(id),
sender_id UUID REFERENCES users(id),
sender_type VARCHAR(20) CHECK (sender_type IN ('buyer', 'seller', 'system')),
content TEXT NOT NULL,
attachments JSONB DEFAULT '[]',
read_at TIMESTAMP,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions/Bookmarks
CREATE TABLE seller_subscriptions (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
buyer_id UUID REFERENCES users(id),
seller_id UUID REFERENCES sellers(id),
store_id UUID REFERENCES stores(id), -- optional, subscribe to specific store
notification_preferences JSONB DEFAULT '{"email": true, "push": true, "sms": false}',
subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE(buyer_id, seller_id, store_id)
);

-- Reviews & Ratings
CREATE TABLE reviews (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
order_item_id UUID REFERENCES order_items(id),
buyer_id UUID REFERENCES users(id),
seller_id UUID REFERENCES sellers(id),
product_id UUID REFERENCES products(id),
rating INT CHECK (rating BETWEEN 1 AND 5),
title VARCHAR(255),
content TEXT,
images JSONB DEFAULT '[]',
is_verified_purchase BOOLEAN DEFAULT TRUE,
helpful_count INT DEFAULT 0,
seller_response TEXT,
status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('pending', 'published', 'rejected')),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Promotion & Ad System
CREATE TABLE promotion_slots (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
slot_name VARCHAR(100) NOT NULL, -- 'homepage_hero', 'category_featured'
slot_type VARCHAR(50) CHECK (slot_type IN ('auction', 'fixed_price')),
base_price DECIMAL(10,2),
current_bid DECIMAL(10,2),
bid_end_time TIMESTAMP,
duration_hours INT DEFAULT 24,
is_active BOOLEAN DEFAULT FALSE
);

CREATE TABLE promotion_campaigns (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
seller_id UUID REFERENCES sellers(id),
store_id UUID REFERENCES stores(id),
slot_id UUID REFERENCES promotion_slots(id),
product_ids UUID[], -- featured products
bid_amount DECIMAL(10,2),
start_time TIMESTAMP,
end_time TIMESTAMP,
status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed', 'cancelled')),
impressions INT DEFAULT 0,
clicks INT DEFAULT 0,
conversions INT DEFAULT 0,
total_spent DECIMAL(10,2) DEFAULT 0
);

# Search autocomplete

3.  Critical Feature Implementations
    3.1 Real-Time Inventory Management
    Challenge: Preventing oversells during high traffic (flash sales, concurrent checkouts)
    Solution: Optimistic Locking + Reservation Pattern
    Python
    Copy

# Inventory Service (Python/Go)

class InventoryService:
def reserve_inventory(self, product_id, variant_sku, quantity, order_id):
"""
Two-phase commit: Reserve → Confirm/Cancel
"""
key = f"inventory:{product_id}:{variant_sku}"

        # Phase 1: Check and reserve in Redis (fast)
        pipe = redis.pipeline()
        pipe.watch(key)
        current = int(pipe.get(key) or 0)

        if current < quantity:
            pipe.unwatch()
            raise InsufficientInventory()

        pipe.multi()
        pipe.decrby(key, quantity)
        pipe.sadd(f"reservations:{order_id}", f"{product_id}:{variant_sku}:{quantity}")
        pipe.expire(f"reservations:{order_id}", 900)  # 15 min timeout
        results = pipe.execute()

        # Phase 2: Persist to PostgreSQL (async)
        db.execute("""
            UPDATE inventory
            SET quantity_reserved = quantity_reserved + %s,
                version = version + 1
            WHERE product_id = %s
            AND variant_sku = %s
            AND (quantity_available - quantity_reserved) >= %s
        """, [quantity, product_id, variant_sku, quantity])

        if db.rowcount == 0:
            # Rollback Redis on conflict
            redis.incrby(key, quantity)
            raise ConcurrentModification()

        return True

    def confirm_reservation(self, order_id):
        """Move from reserved to sold"""
        reservations = redis.smembers(f"reservations:{order_id}")
        for res in reservations:
            product_id, sku, qty = res.split(":")
            db.execute("""
                UPDATE inventory
                SET quantity_reserved = quantity_reserved - %s,
                    quantity_sold = quantity_sold + %s
                WHERE product_id = %s AND variant_sku = %s
            """, [qty, qty, product_id, sku])

        redis.delete(f"reservations:{order_id}")

    def release_reservation(self, order_id):
        """Return to available (order cancelled/timeout)"""
        reservations = redis.smembers(f"reservations:{order_id}")
        for res in reservations:
            product_id, sku, qty = res.split(":")
            key = f"inventory:{product_id}:{sku}"
            redis.incrby(key, qty)  # Return to Redis
            db.execute("""
                UPDATE inventory
                SET quantity_reserved = quantity_reserved - %s
                WHERE product_id = %s AND variant_sku = %s
            """, [qty, product_id, sku])


Table
Section UI Elements Actions
Global Navigation Logo, Search bar (with voice icon), Location selector, Cart icon (with count), User avatar/menu Click logo → Home, Click search → Expand search, Click cart → Cart drawer, Click avatar → Account menu
Category Navigation Horizontal scrollable category pills (Electronics, Fashion, Home, etc.) Click → Category page
Hero Carousel Auto-rotating banners, Promo badges, "Shop Now" CTA buttons, Carousel dots/arrows Click CTA → Promotion page, Swipe/arrow → Next slide
Search Overlay Search input, Recent searches (with X to clear), Trending searches, Voice search button, Scan barcode icon Type → Autocomplete results, Click recent → Search, Click voice → Voice input
Personalized Feed "New from stores you follow" header, Product cards, "See all" link, Empty state (if no subscriptions) Click product → Product detail, Click "See all" → Filtered search
Trending Now Product grid, "Trending" badges, Quick add buttons, Price tags Hover → Quick view, Click → Product detail, Click "+" → Add to cart
Featured Stores Store cards with logos, Verification badges, "Follow" buttons, Store ratings Click card → Store page, Click "Follow" → Subscribe
Flash Sales Countdown timer, Sale product cards, "View all deals" link, Progress bars (stock remaining) Click → Sale page, Timer creates urgency
Bottom Navigation (Mobile) Home, Search, Categories, Cart, Account icons Click → respective pages

Page: Search Results
Purpose: Product discovery with filtering
Table
Copy
Section UI Elements Actions
Search Header Back arrow, Search input (pre-filled), Filter button, View toggle (grid/list) Edit search → New results, Click filter → Filter drawer
Active Filters Filter chips with X (e.g., "Price: $10-50", "Category: Shoes"), "Clear all" link Click X → Remove filter, Click clear → Reset
Sort Dropdown "Sort by: Relevance" (dropdown), Options: Price Low-High, Price High-Low, Newest, Best Rated, Most Popular Select → Re-sort results
Results Grid/List Product cards (image, title, price, store name, rating, shipping info), "Load more" button, Skeleton loaders Click → Product detail, Infinite scroll pagination
Filter Drawer/Modal Price range slider, Category checkboxes, Rating filter (stars), Store verification toggle, Shipping options, Color/size swatches, "Apply" and "Reset" buttons Adjust → Live preview count, Click apply → Update results
Empty State "No results" illustration, Suggested searches, "Browse categories" link Click suggestions → New search
Recent Searches List of past searches with timestamps, "Clear history" Click → Repeat search

Page: Category Browse
Purpose: Hierarchical category exploration
Table
Copy
Section UI Elements Actions
Breadcrumb Home > Category > Subcategory Click → Navigate up hierarchy
Category Header Category image/banner, Name, Item count, "Save this search" bell icon Click bell → Create alert
Subcategory Grid Visual cards for subcategories (with images), "View all" for each Click → Deeper category or filtered results
Featured in Category Curated product carousel, "Editor's picks" badge Click → Product detail
Filter Sidebar Same as search filters but category-specific attributes Apply → Filtered results
Product Grid Same as search results Same interactions
1.2 Product Experience

Page: Product Detail
Purpose: Full product information, purchase decision
Table
Copy
Section UI Elements Actions
Image Gallery Main image (zoom on hover/click), Thumbnail strip (click to change), Video thumbnail (if present), 360° view icon, "Expand gallery" fullscreen button Click thumbnail → Change image, Click main → Lightbox, Pinch → Zoom (mobile)
Product Header Product title, Store name (with verified badge), Rating stars (with count), "Share" button, "Save to wishlist" heart Click store → Store page, Click share → Share sheet, Click heart → Save
Price Block Current price, Compare-at price (strikethrough), Discount percentage badge, "Price drop" alert (if applicable) —
Variant Selector Color swatches (with names on hover), Size buttons/dropdown, Size guide link, "Out of stock" disabled states Select → Update price/image/availability
Quantity Selector "-" button, Number input, "+" button, "Only 3 left" stock indicator Change → Update subtotal
Action Buttons "Add to Cart" (primary), "Buy Now" (secondary), "Chat with seller" button Click add → Cart confirmation toast, Click buy → Checkout, Click chat → Open chat
Delivery Info Zip code input, Delivery date estimate, Shipping cost, "Free shipping over $X" progress bar Enter zip → Recalculate delivery
Protection Badges "KYC Verified Seller", "Secure payment", "Buyer protection" icons with tooltips Hover → Explanation tooltip
Description Expandable text, Bullet points, Material/care info, "Read more" link Click → Expand full description
Specifications Accordion table (Brand, Material, Weight, Dimensions), "Show all specs" Click row → Expand details
Store Preview Store logo, Name, Rating, Response time, "Visit store" button, "Follow store" button Click → Store page, Click follow → Subscribe
Reviews Section Rating breakdown bars, Average rating, Review count, "Write a review" button (if purchased), Photo reviews gallery, Individual review cards (with verified badge, helpful button, seller response), "Show more reviews" Click helpful → Increment count, Click photo → Gallery, Click write → Review form
Related Products "You may also like" carousel, "More from this store" section Click → Product detail
Recently Viewed Horizontal scroll of past products Click → Product detail
Sticky Bottom Bar (Mobile) Price, "Add to Cart" button, Wishlist icon Fixed on scroll

Page: Store Page (Buyer View)
Purpose: Browse specific seller's catalog
Table
Copy
Section UI Elements Actions
Store Header Banner image, Store logo, Store name, Verification badge, "Follow" button, Share button, Store rating, Response rate/time Click follow → Subscribe with options, Click share → Share store
Store Tabs Products, About, Reviews, Policies Click → Tab content
Store Search "Search in this store" input Type → Filtered store products
Store Categories Category pills specific to this store's inventory Click → Filtered view
Sort/Filter Bar Same as global search but store-scoped Apply → Store product grid update
Product Grid Store's products with "Quick add" Same as search results
About Tab Store story, Business details, Location map, "Contact seller" button, "Chat now" button Click contact → Contact form, Click chat → Open chat
Reviews Tab Store-level reviews (different from product reviews), Rating distribution, Recent reviews Same as product reviews
Policies Tab Shipping, Returns, Payment methods accordion sections Expand → Read policy
Floating Action Button (Mobile) "Chat with seller" Click → Chat interface
1.3 Cart & Checkout

Page: Shopping Cart
Purpose: Review items, apply discounts, proceed to purchase
Table
Copy
Section UI Elements Actions
Cart Header "Shopping Cart (3 items)" title, "Save for later" link —
Store Groupings Collapsible store sections with store names, logos, "Message seller" buttons Click store name → Store page, Click message → Chat
Cart Items Product image, Title, Variant info (color/size), Price (with original price if discounted), Quantity selector, "Remove" link, "Save for later" link, "Move to wishlist" link Change qty → Update totals, Click remove → Confirmation + undo toast
Item-level Errors "Out of stock" badge, "Price changed" alert, "Unavailable" overlay Click → Remove or see alternatives
Order Summary Subtotal per store, Store-specific shipping estimates, "Add promo code" input per store, Store totals Enter code → Validate and apply
Global Summary Total items, Combined subtotal, Total shipping, Tax estimate, Grand total, "Proceed to checkout" button Click checkout → Checkout flow
Saved for Later Secondary list of saved items, "Move to cart" button, "Remove" link Click move → Back to cart
Empty State Cart illustration, "Start shopping" CTA, "View saved items" link Click → Browse categories
Recommended "You might also like" products based on cart contents Click → Product detail
Sticky Checkout Bar (Mobile) Grand total, "Checkout" button Fixed bottom

Page: Checkout
Purpose: Complete purchase, payment, delivery
Table
Copy
Section UI Elements Actions
Checkout Steps Progress indicator: Shipping → Payment → Review Click step → Navigate (if valid)
Shipping Step Saved addresses list (with default badge), "Add new address" button, Address form (name, street, city, state, zip, phone), "Deliver to multiple addresses" toggle, Shipping method options (with prices and ETA), Gift options (message, receipt hide) Select address → Update shipping, Select method → Update total
Payment Step Saved payment methods, "Add new card" button, Card form (number, expiry, CVV, zip), PayPal/Apple Pay/Google Pay buttons, "Billing address same as shipping" checkbox, Promo code input (if not applied), Store credit/gift card balance Select method → Enable pay button, Enter code → Apply discount
Review Step Item summary (collapsible), Shipping address confirmation, Payment method confirmation, "Place order" button (primary, large), Terms agreement checkbox, "Order total" breakdown with savings highlighted Click place → Process payment
Security Badges SSL secure, Encrypted payment icons —
Order Confirmation Success animation, Order number, "View order" button, "Continue shopping" button, Email confirmation notice, Estimated delivery date Click view → Order detail
1.4 User Account & Management

Page: Account Dashboard
Purpose: Central hub for buyer activity
Table
Copy
Section UI Elements Actions
Profile Header Avatar, Name, Email, "Edit profile" link, Membership tier badge Click edit → Profile settings
Order Summary "Recent orders" preview (last 3), "View all orders" link, Order status badges (Processing, Shipped, Delivered) Click order → Order detail
Quick Links Grid Orders, Wishlist, Addresses, Payment methods, Messages, Subscriptions, Recently viewed, Help Click → Respective pages
Subscription Feed "New from stores you follow" preview, Unread notification dots, "Manage subscriptions" link Click item → Product/store
Recommendations "Based on your purchases" product carousel Click → Product detail
Promo Banner Personalized discount offers, Loyalty program status Click → Promotion details

Page: Orders List
Purpose: View all order history
Table
Copy
Section UI Elements Actions
Filter Tabs All, To ship, Shipped, Delivered, Cancelled, Returns Click → Filter list
Search Orders "Search by order number or product" input Type → Filter results
Date Filter "Last 6 months" dropdown Select → Date range filter
Order Cards Order number, Date, Store name, Product thumbnails (up to 3), Total, Status badge, "Track package" button (if shipped), "Buy again" button, "Contact seller" link Click card → Order detail, Click track → Tracking page
Empty State "No orders yet" illustration, "Start shopping" CTA Click → Home

Page: Order Detail
Purpose: Detailed order information, tracking, actions
Table
Copy
Section UI Elements Actions
Order Header Order number, Date placed, "Print receipt" link, "Need help?" link Click print → PDF generation
Status Timeline Visual tracker: Confirmed → Processing → Shipped → Delivered, Current step highlighted, Checkmarks for completed, Estimated delivery date Click step → Detailed status
Shipment Tracking Carrier name, Tracking number (copy button), "Track" external link, Map preview (if available), Delivery photo (if available) Click track → Carrier website
Items List Product images, Titles, Variants, Prices, Quantity, "Buy again" per item, "Review" button (if delivered and not reviewed), "Return" button (if eligible) Click review → Review form, Click return → Return flow
Order Summary Subtotal, Shipping, Tax, Total, Payment method used, Billing address —
Seller Info Store card with contact options, "Message seller about this order" button Click message → Pre-filled chat
Actions Footer "Cancel order" (if possible), "Request return", "Download invoice" Click → Respective workflows

Page: Wishlist / Saved
Purpose: Saved items for later purchase
Table
Copy
Section UI Elements Actions
Wishlist Tabs All items, Price drops, Back in stock, Collections (user-created) Click → Filtered view
Wishlist Grid Product cards with "Added on [date]", Price change indicators (red for drop), Stock status, "Move to cart" button, "Remove" X, "Add to collection" dropdown Click move → Cart, Click remove → Undo option
Collection Management "Create new collection" button, Collection cards with item counts, Privacy toggle (public/private) Click collection → Filtered wishlist
Share Wishlist "Share" button (generates link), "Make public/private" toggle Click share → Social/email options
Empty State Heart illustration, "Browse products" CTA Click → Home

Page: Subscriptions / Following
Purpose: Manage followed stores and notification preferences
Table
Copy
Section UI Elements Actions
Store Grid Store cards with logos, "Following since" date, Unread notification badges, Last activity preview, Notification bell toggle (per store) Click card → Store page
Bulk Actions "Select all" checkbox, "Unfollow selected" button, "Update notification settings" Apply → Batch operations
Notification Settings Per-store toggles: New products, Price drops, Promotions, Back in stock, Email frequency (immediate, daily digest, weekly) Toggle → Save preference
Discover More "Stores you might like" recommendations Click → Store page
Empty State "Not following any stores", "Discover stores" CTA Click → Category browse

Page: Messages / Inbox
Purpose: Communication with sellers
Table
Copy
Section UI Elements Actions
Conversation List Store avatars, Store names, Message previews, Timestamps, Unread badges, "Archive" swipe action (mobile), Star/pin option Click → Conversation view
Search Conversations "Search messages" input Type → Filter conversations
Filter Tabs All, Unread, Archived, With orders Click → Filter list
New Message "Start new conversation" button Click → Store search to initiate
Empty State "No messages yet", "Browse stores" CTA Click → Home

Page: Conversation View
Purpose: Real-time chat with seller
Table
Copy
Section UI Elements Actions
Chat Header Back arrow, Store avatar/name (clickable), Verification badge, "View store" link, "More options" (block, report) Click store name → Store page
Context Sidebar Order details (if order-related), Product cards referenced in chat, Quick actions: "View order", "Request return" Click → Respective pages
Message Bubbles Timestamp grouping ("Today", "Yesterday"), Read receipts, Message status (sending, sent, delivered, read), Image/file attachments (clickable), Product cards (rich previews) Click image → Lightbox, Click product → Product page
Quick Replies Canned response buttons: "Is this available?", "What's the shipping cost?", "Can you discount?" Click → Insert message
Input Area Text input with emoji picker, Attachment button (camera, gallery, file), Send button, Typing indicator (when seller types) Type → Send message, Attach → Upload
Order Context Banner "This chat is about Order #12345" (if applicable) with order summary Click → Order detail

Page: Reviews & Ratings (Buyer)
Purpose: Manage buyer's own reviews
Table
Copy
Section UI Elements Actions
Reviewable Orders List of delivered items pending review, "Write review" buttons, Countdown ("Review within 30 days for points") Click → Review form
My Reviews Tabs: Published, Pending, Rejected, Review cards with product info, Star ratings, Review text, Photos, "Edit" (within 48h), "Delete", "Share review" Click edit → Edit form, Click delete → Confirm
Review Form Star rating selector (1-5), Title input, Detailed review textarea, Photo/video upload (up to 5), Anonymous toggle, "Submit review" button Submit → Await moderation
Review Guidelines Collapsible tips for writing helpful reviews Expand → Read guidelines

PART 2: SELLER DASHBOARD PAGES
2.1 Onboarding & Setup

Page: Seller Registration
Purpose: Initial seller account creation
Table
Copy
Section UI Elements Actions
Progress Steps Stepper: Account → Business → Verification → Store —
Account Step Email, password, confirm password, "Continue" button Validate → Next step
Business Step Business name, Business type (LLC, Corp, Sole Prop, etc.), Tax ID/EIN, Business registration number, Country/region, Business address (autocomplete), Phone number Fill → Enable continue
Verification Step Document upload zones (business license, tax certificate), ID upload (front/back), Selfie with ID upload, "Submit for review" button Upload → Preview, Submit → KYC queue
Store Setup Step Store name input (with availability check), Store URL preview, Store category selection, "Create store" button Type → Check availability, Create → Store dashboard
Page: KYC Status
Purpose: Track verification progress
Table
Copy
Section UI Elements Actions
Status Header Large status icon (pending/approved/rejected), Status text, Estimated completion time (if pending) —
Document Checklist List of submitted documents with status (verified/pending/rejected), Rejection reasons (if applicable), "Re-upload" buttons for rejected docs Click re-upload → Replace document
Progress Tracker Visual steps: Submitted → Under Review → Approved —
Next Steps Conditional content: "Start adding products" (if approved), "Complete your profile" (if pending), "Contact support" (if rejected) Click → Respective actions
Support Chat "Questions about your verification?" floating button Click → Support chat
2.2 Main Dashboard
Page: Seller Dashboard Home
Purpose: Overview of all store performance
Table
Copy
Section UI Elements Actions
Store Selector Dropdown to switch between stores (with status indicators), "Create new store" button, Store quick stats (revenue today) Select → Switch context, Click create → New store flow
Date Range Picker "Today", "Yesterday", "Last 7 days", "Last 30 days", Custom range Select → Refresh all widgets
Revenue Cards Total revenue (with % change), Orders count, Average order value, Conversion rate, Graph sparklines Click → Detailed analytics
Quick Actions Grid "Add product", "View orders", "Check messages", "Run promotion", "Manage inventory" Click → Respective pages
Low Stock Alerts Alert banner with count, Product list with current stock, "Reorder" or "Update stock" quick links Click → Inventory management
Recent Orders Table of last 5 orders with status, "View all" link Click row → Order detail
Unread Messages Message previews from buyers, "Go to inbox" link Click → Conversation
Performance Tips Personalized recommendations: "Add more products", "Run a sale", "Respond to reviews" Click → Action or dismiss
Promotion Opportunity "Boost your sales" banner with auction preview, "Bid now" button Click → Promotion marketplace

2.3 Store Management
Store Cards Logo, name, URL, status badge (active/paused/closed), Product count, Revenue (last 30 days), "Manage" button, "Settings" dropdown Click manage → Store dashboard, Click settings → Edit/pause/close
Create Store Button Primary CTA (if under limit) Click → Store creation flow
Store Limit Indicator "2 of 5 stores used" progress bar, Upgrade prompt (if at limit) Click upgrade → Pricing page
Compare Stores Checkbox to select stores, "Compare performance" button Select → Side-by-side analytics

Page: Store Settings
Purpose: Configure individual store
Table
Copy
Section UI Elements Actions
General Tab Store name, Store slug/URL (editable), Store description (rich text), Store email, Store phone, "Save changes" button Edit → Save
Branding Tab Logo upload (with cropper), Banner upload, Favicon upload, Primary color picker, Font selection (preset options), Preview pane Upload → Preview, Save → Apply
Domain Tab Current subdomain display, Custom domain input, DNS instructions, "Verify domain" button, SSL status Add domain → Validation flow
Policies Tab Shipping policy textarea, Return policy textarea, Privacy policy textarea, Terms of service, "Save" buttons per section Edit → Save
Team Tab Member list (email, role, status), "Invite member" button, Role selector (owner, admin, support), "Remove" option Invite → Email sent, Change role → Update permissions
Notifications Tab Order alerts (email/SMS), Low stock alerts, Review notifications, Chat notifications, Frequency settings Toggle → Save preferences
Danger Zone "Pause store" button (temporary), "Close store" button (permanent, with confirmation modal) Click → Confirmation → Action
2.4 Product Management
Page: Product List
Purpose: Manage all products in a store
Table
Copy
Section UI Elements Actions
Action Bar "Add product" button (primary), "Import" dropdown (CSV, Shopify, WooCommerce), "Export" button, "Bulk actions" dropdown (delete, update status, change price) Click add → Product creation, Select bulk → Enable actions
Filter/Sort Bar Search by name/SKU, Status filter (active/draft/archived), Category filter, Stock filter (in stock/low stock/out of stock), Sort by (newest, alphabetical, price, stock) Apply → Filter grid
View Toggle Grid view (images) vs. List view (details) icons Click → Change view
Product Grid/Table Thumbnail, Title, SKU, Price (with compare price), Stock quantity (color-coded: green/yellow/red), Status badge, "Quick edit" button, "View" link, Checkbox for bulk Click row → Product detail, Click quick edit → Inline editor
Inline Quick Edit Price input, Stock input, Status dropdown, "Save" and "Cancel" buttons Edit → Save without leaving page
Pagination Page numbers, "Show X per page" dropdown, Total count Navigate → Page change
Empty State "No products yet", "Add your first product" CTA, Import template download Click → Product creation
Page: Add/Edit Product
Purpose: Create or modify product listings
Table
Copy
Section UI Elements Actions
Header "New Product" / "Edit [Product Name]", "Save draft" button, "Preview" button, "Publish" button (or "Update" if editing) Click save → Toast confirmation, Click preview → Customer view, Click publish → Go live
Basic Info Card Title input, Description (rich text editor with HTML), Category dropdown (3-level), Tags input (comma-separated with suggestions), "Generate description with AI" button (optional) Type → Auto-save draft
Media Card Image upload zone (drag & drop, up to 10), Image thumbnails with drag-to-reorder, Alt text inputs per image, "Add video" button (URL or upload), Primary image star toggle Upload → Preview, Drag → Reorder, Click star → Set primary
Pricing Card Price input, Compare-at price input, Cost per item input (for margin calc), "Charge tax" checkbox, Currency selector Enter → Calculate margin display
Inventory Card SKU input (auto-generate toggle), Barcode input, Track quantity toggle, Quantity input, "Continue selling when out of stock" toggle, Low stock threshold input, Location selector (if multi-location) Toggle track → Show/hide qty
Variants Card "Add variants" button (size, color, material, custom), Variant matrix table (SKU, Price, Quantity, Image per variant), "Edit all" mode for bulk variant editing, Variant image upload Add variant → Expand matrix
Shipping Card Physical product toggle, Weight inputs (kg/lb), Dimensions (L×W×H), Shipping profile selector, "Calculate shipping" preview Select profile → Update rates
SEO Card Page title input (with character count), Meta description textarea (with count), URL handle (auto-generated from title, editable), "Edit website SEO" toggle Edit → Preview snippet
Visibility Card Status dropdown (active/draft/archived), Publish date (schedule), Visibility (visible, hidden, password-protected), "Feature on store homepage" toggle Set schedule → Future publish
Organization Card Collections (manual), Product type, Vendor (auto-filled), Tags Select → Categorize
Page: Bulk Product Editor (Spreadsheet View)
Purpose: Edit multiple products efficiently
Table
Copy
Section UI Elements Actions
Toolbar "Add products" row button, "Duplicate" button, "Delete selected" button, "Undo/Redo", "Save changes" (with count of changes), Import/Export CSV Click save → Validate → Apply
Spreadsheet Grid Columns: Image, Title, SKU, Price, Compare Price, Cost, Stock, Status, Category, Tags (editable cells), Row numbers, Checkbox per row Double-click cell → Edit inline, Tab → Next cell
Cell Editing Text inputs, dropdowns for enums (status, category), Number spinners, Date pickers, Multi-select for tags Type → Real-time validation
Validation Errors Red cell borders, Error tooltip on hover, "X errors found" banner with details Click error → Jump to cell
Filters Column filters (contains, equals, greater than), "Clear filters" Apply → Filter rows
2.5 Inventory Management
Page: Inventory Dashboard
Purpose: Track and manage stock levels
Table
Copy
Section UI Elements Actions
Inventory Overview Total SKUs count, Low stock alerts count, Out of stock count, Inventory value (cost), Sell-through rate Click alerts → Filtered view
Alerts Section "X products low in stock" banner, Product list with current vs. threshold, "Update stock" quick buttons, "Set reorder reminder" Click update → Quick modal
Inventory Table Product image, Title, SKU, Location, Available, Reserved, On hand, Incoming (from transfers), "Adjust" button per row, "History" link Click adjust → Adjustment modal, Click history → Audit log
Location Filter "All locations" dropdown (if multi-location), "Transfer stock" button Select → Filter by location
Adjustment Modal Current quantity display, Adjustment reason dropdown (received, restock, damage, theft, correction), Quantity change (+/-), New quantity preview, Note field, "Save adjustment" button Submit → Update inventory + log
History/Audit Log Date filter, Action filter, Table showing: Date, Product, SKU, Adjustment, Reason, User, Note Export → CSV download
Page: Purchase Orders / Restocking
Purpose: Manage supplier orders (advanced feature)
Table
Copy
Section UI Elements Actions
PO List PO number, Supplier, Date, Status (draft/sent/received), Total cost, "View" button, "Receive" button (if sent) Click view → PO detail, Click receive → Receive inventory
Create PO Button Primary CTA Click → PO creation
PO Creation Supplier selector, Product search (add to PO), Quantity inputs, Cost per unit, Expected delivery date, Notes, "Save draft" / "Send to supplier" Add product → Line item, Send → Email supplier
Receiving Scan barcode or search product, Quantity received (vs. ordered), Condition notes, "Complete receipt" button Scan → Auto-fill product
2.6 Order Management
Page: Orders List (Seller)
Purpose: View and manage customer orders
Table
Copy
Section UI Elements Actions
Filter Bar Search (order #, customer name, product), Status tabs (All, Unpaid, Unfulfilled, Fulfilled, Cancelled), Date range, "More filters" (payment status, shipping method) Apply → Filter list
Orders Table Order number (clickable), Date, Customer (name + avatar), Items count, Total, Payment status badge, Fulfillment status badge, Shipping method, "Actions" dropdown (view, fulfill, cancel, refund, print) Click order → Detail, Select bulk → Batch actions
Quick Actions "Fulfill" button (if unfulfilled), "Print packing slip", "Print label" Click fulfill → Fulfillment flow
Export "Export orders" button (CSV, PDF) Click → Download
Pagination Standard pagination controls Navigate → Page change
Page: Order Detail (Seller)
Purpose: Full order management
Table
Copy
Section UI Elements Actions
Order Header Order number, Date, "Back to orders" link, "Print" dropdown (invoice, packing slip, label), "More actions" (cancel, refund, resend confirmation) Click print → PDF generation
Status Cards Payment status (paid/pending/refunded), Fulfillment status (unfulfilled/partial/fulfilled), Risk level (low/medium/high fraud indicators) Click status → Update flow
Customer Card Customer name, Email, Phone, "View profile" link, "Contact customer" button, Order history count Click contact → Pre-filled chat
Items Table Product image, Title, SKU, Variant, Quantity, Price, "Edit" (if unfulfilled), "Refund" per item Click refund → Partial refund
Fulfillment Section "Create fulfillment" button, Carrier dropdown, Tracking number input, "Mark as fulfilled" button, "Buy shipping label" integration Click create → Fulfillment modal
Timeline Visual timeline of order events (placed, paid, confirmed, shipped, delivered), Timestamps, User actions Expand → Full history
Payment Info Payment method, Transaction ID, Payout status (pending/transferred), "View transaction" link Click → Payment provider
Notes/Activity Internal notes textarea (private), Customer-visible notes, Activity log (auto-generated), "Add note" button Add → Log activity
Page: Fulfillment / Shipping
Purpose: Process and ship orders
Table
Copy
Section UI Elements Actions
Fulfillment Workflow Stepper: Select items → Package → Label → Confirm —
Item Selection Checkbox list of unfulfilled items, Partial fulfillment toggle, Quantity to fulfill inputs Select → Enable next
Package Details Package type dropdown, Weight input, Dimensions, "Calculate rates" button Click → Shipping rates
Shipping Rates Carrier options (USPS, FedEx, UPS, etc.) with prices and ETA, "Buy label" button, "Use own label" toggle Select carrier → Purchase
Label Preview Generated shipping label preview, "Print label" button, "Mark as shipped" button Click print → PDF, Click mark → Update order
Tracking Tracking number display, "Email tracking to customer" checkbox, "Mark as fulfilled" final button Submit → Complete fulfillment
2.7 Customer Communication
Page: Seller Inbox
Purpose: Manage all buyer conversations
Table
Copy
Section UI Elements Actions
Inbox Layout Conversation list (left), Chat window (right) - desktop; List view (mobile) Responsive layout
Conversation List Customer avatar/name, Message preview, Timestamp, Unread badge, Order context indicator (if order-related), Star/pin, Archive Click → Open conversation
Search/Filter Search by customer name or message content, Filter by: All, Unread, With orders, Archived, Assigned to me Apply → Filter list
Quick Stats "X unread messages", "Average response time", Response rate percentage —
Chat Window Message bubbles (customer right, seller left), Rich previews (products, orders), File attachments, Typing indicator, "Assign to team member" dropdown Type → Send message
Context Sidebar Customer details (name, email, location), Order history list, "Create order" button, "Add note" (internal) Click order → Order detail
Canned Responses "Quick replies" button with menu: "Thanks for your order", "Tracking info sent", "Out of stock apology", Custom templates Click → Insert message
Actions "Mark as resolved", "Transfer to colleague", "Block customer", "View customer profile" Click → Action
2.8 Analytics & Reporting
Page: Analytics Dashboard
Purpose: Business intelligence and insights
Table
Copy
Section UI Elements Actions
Date Range Date picker (compare to previous period toggle), Preset ranges (today, yesterday, 7 days, 30 days, 90 days, year, custom) Select → Refresh all charts
KPI Cards Total sales (with % change), Orders, Average order value, Conversion rate, Sessions, Top product (image + name), "View report" links Click → Detailed report
Sales Chart Line chart (revenue over time), Toggle: Revenue vs. Orders vs. AOV, Hover tooltips, Zoom controls Hover → Detailed data point
Traffic Sources Pie/donut chart (Direct, Search, Social, Referral, Email), Table with source, visitors, conversion rate Click segment → Drill down
Top Products Table Rank, Product image/name, Units sold, Revenue, Conversion rate, "View product" link Click → Product detail
Customer Insights New vs. returning customers chart, Geographic map (sales by country/region), Customer lifetime value Click map → Regional report
Real-time View "Live" toggle, Current visitors, Active carts, Today's sales progress bar Toggle → Real-time updates
Export Reports "Download PDF" button, "Export CSV" button, "Schedule email reports" (daily/weekly/monthly) Click → Download/schedule
Page: Product Analytics
Purpose: Individual product performance
Table
Copy
Section UI Elements Actions
Product Selector Search dropdown to select product, "Compare products" multi-select Select → Load data
Performance Summary Views, Add to carts, Purchases, Conversion funnel visualization, Revenue, Return rate —
Views to Purchase Funnel chart: Impressions → Views → Add to cart → Checkout → Purchase, Drop-off percentages Hover → Exact numbers
Sales Over Time Line chart with inventory level overlay (see stockouts), Promotion markers Identify → Stockout correlations
Traffic Sources Where buyers found this product (search terms, referring URLs) Click → Source detail
Customer Reviews Rating over time, Review sentiment analysis, Common keywords (tag cloud), "View all reviews" link Click → Reviews page
Inventory Correlation Stock level vs. sales velocity chart, "Stockout impact" calculation Optimize → Reorder point
Recommendations "Improve this listing" suggestions: Add images, Lower price, Improve SEO Click → Edit product
2.9 Promotions & Marketing
Page: Promotion Marketplace
Purpose: Browse and bid on advertising slots
Table
Copy
Section UI Elements Actions
Available Slots Slot cards: Name (e.g., "Homepage Hero"), Description, Current bid, Time remaining, Bid count, Preview image of placement, "Bid now" button Click bid → Auction interface
Your Active Campaigns Tab: Active, Scheduled, Completed, Campaign cards with performance stats (impressions, clicks, spend), "Edit" (if scheduled), "View report" Click → Campaign detail
Auction Interface Current highest bid display, Your max bid input, "Place bid" button, Auto-bid toggle with max limit, Auction history table, "Watch this auction" button Submit bid → Real-time update
Campaign Creation Stepper: Select slot → Choose products → Set budget → Confirm, Product selector (from your catalog), Creative upload (images/text), Daily budget cap, Duration selector Submit → Enter auction
Performance Tracking Real-time impression/clicks chart, Spend vs. budget progress bar, ROI calculation, "Pause campaign" button Click pause → Halt campaign

Page: Discounts & Coupons
Purpose: Create promotional pricing
Table
Copy
Section UI Elements Actions
Discount List Active and expired discounts table: Name, Code, Type (% off, $ off, BOGO), Value, Usage count/limit, Start/end dates, Status toggle, "Edit" and "Delete" Toggle → Activate/deactivate
Create Discount Button Primary CTA Click → Creation form
Discount Types "Percentage off", "Fixed amount off", "Buy X Get Y", "Free shipping" cards Select → Relevant form
Discount Form Code input (auto-generate toggle), Description, Value input, Applies to (entire store, categories, specific products), Minimum purchase requirement, Usage limits (total, per customer), Customer eligibility (all, specific groups), Active dates (calendar picker), "Save discount" button Configure → Preview impact
Usage Analytics Times used, Revenue generated, Average order value with vs. without code, "Top customers" who used it Export → Report

Page: Seller Profile Settings
Table
Copy
Section UI Elements
Business Info Business name, Legal name, Tax ID, Business type, Industry
Contact Info Email, Phone, Business address (with verification)
Banking Payout method (bank account), Account details (masked), "Update" button
Notifications Email preferences, SMS preferences, Push notifications
Security Password change, Two-factor authentication toggle, API keys (for integrations), Active sessions list
Team Management Invite members, Role assignment, Permission matrix
Billing Subscription plan, Invoice history, "Upgrade plan" button
Close Account "Close seller account" (with confirmation modal, data export option)

PART 3: ADMIN PANEL (Platform Management)

3.1 User & Seller Management
User List Search, filters (role, status, date), table with user info, "Impersonate" button, "Suspend" action
Seller Verification Queue KYC document viewer, Approve/Reject buttons with reason input, Risk score indicator, "Request more info" button
Seller Detail Business info, Verification status, Store list, Performance metrics, "Message seller" button, "Suspend seller" action
Document Review ID document viewer (with zoom), Facial match score, Business registration verification, Third-party check results

3.2 Content Moderation
Product Moderation Queue of flagged products, Image/content AI scan results, Approve/Hide/Remove actions, "Escalate" button
Review Moderation Reported reviews list, Review content, Reporter reason, "Keep" / "Remove" / "Warn seller" actions
Dispute Resolution Buyer-seller disputes table, Evidence upload viewer, "Mediate" interface with messaging, "Refund order" / "Reject claim" decisions

Platform Overview Total GMV, Active sellers, Active buyers, Transaction volume, Growth charts
Revenue Reports Commission earned, Ad revenue, Subscription revenue, Payouts to sellers
System Health Server status, API response times, Error rates, Queue depths

Order Confirmation Order details, items list, shipping address, estimated delivery, "Track order" CTA button
Shipping Notification Tracking number, carrier, "Track package" button, delivery estimate
Delivery Confirmation Delivery photo (if available), "Leave review" CTA, "Buy again" suggestions
Abandoned Cart Product images, "Complete your purchase" button, urgency messaging (stock low)
New Follower Notification (Seller) Buyer info, "View profile" link, follower count milestone
New Message Message preview, "Reply" button, conversation link
Low Stock Alert (Seller) Product list, current stock levels, "Update inventory" button
KYC Status Update Approval/rejection status, next steps, support contact
Promotion Won Auction win confirmation, payment details, campaign setup link
Weekly Digest (Buyer) New products from followed stores, personalized recommendations, trending items
This comprehensive inventory covers 150+ distinct pages/screens and 500+ UI elements/interactions. The architecture supports:
Buyer journey: Discovery → Product evaluation → Purchase → Post-purchase → Retention
Seller journey: Onboarding → Catalog management → Order fulfillment → Growth → Analytics
Platform governance: Verification → Moderation → Support → Optimization

│                                                                             │
│  [🏠]    [🔍]    [📂]    [🛒]    [👤]                                    │  ← MOBILE TAB BAR (Fixed bottom, 56px)
│  Home   Search  Categ.   Cart   Account                                     │
│  (Badge on Cart showing item count)                                         │
└─────────────────────────────────────────────────────────────────────────────┘
Hero banner: Auto-advance every 5s, pause on hover, swipeable on mobile

1.2 PRODUCT DETAIL PAGE
│  (Out of stock: disabled, opacity 0.5, strikethrough)                       │
│  Only 3 left!  🔥 12 people viewing this now                                │
│  [         ADD TO CART          ]  (Primary: black bg, white text)          │
│  [         BUY IT NOW           ]  (Secondary: white bg, black border)      │
│  MORE FROM THIS STORE                                                       │
│  ─────────────────────────────────────────────────────────────────────      │
│  [Horizontal scroll of 6 products from same store]                          │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  YOU MAY ALSO LIKE                                                          │
│  ─────────────────────────────────────────────────────────────────────      │
│  [Grid of 4 recommended products, "Load more" button]                       │

│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ⚠️  1 item in your cart has a price change                         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│  │        │  Color: Blue · Size: Medium · SKU: VASE-BLU-M                   │
│  ⚠️ Price changed from $79.99 to $89.99 since you added it                 │
│                                                                             │
│  Store subtotal: $89.99                                                     │
│  Shipping: FREE                                                             │
│  [Promo code applied: -$10.00] ✓                                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  ORDER SUMMARY                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Subtotal (3 items):                              $166.99                   │
│  Shipping:                                         $12.00                   │
│  Discount (WELCOME10):                            -$10.00                   │
│  Tax (estimated):                                  $14.52                   │
│  ─────────────────────────────────────────────────────────────────          │
│  TOTAL:                                           $183.51                   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  SAVED FOR LATER (2 items)                                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [Compact product cards with "Move to cart" and "Remove" buttons]           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  YOU MIGHT ALSO LIKE                                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│  [Horizontal scroll recommendations based on cart contents]                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
Key Interactions:
Quantity change: Debounced update, subtotal recalculates with animation
Remove: Slide-out animation with "Undo" toast for 5 seconds
Promo code: Inline expand, validation with checkmark/X, applies to relevant store only
Multi-store: Each store section can be collapsed, separate checkout per store or combined
Sticky summary (desktop): Right column stays fixed while scrolling items
┌─────────────────────────────────────────────────────────────────────────────┐
│  [←]  Checkout                                          [🔒 Secure]         │
│  ●────○────○                                                                │
│  Shipping  Payment  Review                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  SHIPPING ADDRESS                                                           │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🏠 Home (Default)                                                  │   │
│  │  John Doe                                                           │   │
│  │  123 Main Street, Apt 4B                                            │   │
│  │  New York, NY 10001                                                 │   │
│  │  United States                                                      │   │
│  │  📞 (555) 123-4567                                                  │   │
│  │  [Edit]  [Ship here]  ●                                             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🏢 Work                                                            │   │
│  │  John Doe                                                           │   │
│  │  456 Office Plaza, Suite 200                                        │   │
│  │  New York, NY 10002                                                 │   │
│  │  [Edit]  [Ship here]  ○                                             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  [+ Add New Address]                                                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  SHIPPING METHOD                                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ○ Standard Shipping (5-7 business days) — FREE                            │
│  ● Express Shipping (2-3 business days) — $12.00                           │
│  ○ Overnight Shipping (1 business day) — $25.00                            │
│                                                                             │
│  (Radio buttons with delivery date calculation)                             │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  GIFT OPTIONS                                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [ ] This is a gift                                                         │
│      [Add gift message ▼]                                                   │
│      [ ] Hide prices on packing slip                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ORDER SUMMARY                    $183.51                                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Items (3):                       $166.99                                   │
│  Shipping:                        $12.00                                    │
│  Tax:                             $14.52                                    │
│  ─────────────────────────────────────────────────────────────────          │
│  Total:                           $193.51                                   │
│                                                                             │
│  [        CONTINUE TO PAYMENT        ]                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
Step 2: Payment
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│  [←]  Checkout                                          [🔒 Secure]         │
│  ●────●────○                                                                │
│  Shipping  Payment  Review                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  PAYMENT METHOD                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  💳  •••• •••• •••• 4242  12/25  John Doe                           │   │
│  │  Visa                                                               │   │
│  │  [Edit]  [Use this card]  ●                                         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  💳  •••• •••• •••• 8888  09/26  John Doe                           │   │
│  │  Mastercard                                                         │   │
│  │  [Edit]  [Use this card]  ○                                         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  [+ Add New Card]                                                           │
│                                                                             │
│  ── OR ──                                                                   │
│                                                                             │
│  [  PayPal  ]  [ Apple Pay ]  [ Google Pay ]                               │
│  (Secondary button style)                                                   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  BILLING ADDRESS                                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [✓] Same as shipping address                                               │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  PROMO CODE                                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [Enter code                ]  [Apply]                                      │
│  ✓ WELCOME10 applied: -$10.00                                              │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  STORE CREDIT / GIFT CARD                                                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Available credit: $25.00                                                   │
│  [✓] Apply $25.00 to this order                                            │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [        REVIEW ORDER        ]                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
Step 3: Review & Confirm
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│  [←]  Checkout                                          [🔒 Secure]         │
│  ●────●────●                                                                │
│  Shipping  Payment  Review                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  SHIPPING TO                                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  John Doe                                                                   │
│  123 Main Street, Apt 4B                                                    │
│  New York, NY 10001                                                         │
│  [Change]                                                                   │
│                                                                             │
│  Express Shipping (2-3 days) — $12.00                                      │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  PAYMENT METHOD                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  💳 Visa ending in 4242                                                     │
│  [Change]                                                                   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  ITEMS                                                                      │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  ┌────────┐  Handmade Ceramic Vase - Blue, Medium                          │
│  │ [IMG]  │  $45.00 × 1                                                    │
│  └────────┘  Sold by Artisan Home Co.                                       │
│                                                                             │
│  ┌────────┐  Linen Throw Pillow - Natural × 2                               │
│  │ [IMG]  │  $32.00 × 2 = $64.00                                           │
│  └────────┘  Sold by Artisan Home Co.                                       │
│                                                                             │
│  ┌────────┐  Wireless Bluetooth Headphones - Black                          │
│  │ [IMG]  │  $89.99 × 1                                                    │
│  └────────┘  Sold by TechGear Store                                         │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  ORDER TOTAL                                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Subtotal:                                      $198.99                     │
│  Shipping:                                      $12.00                      │
│  Discount (WELCOME10):                         -$10.00                      │
│  Store credit applied:                         -$25.00                      │
│  Tax:                                           $14.52                      │
│  ─────────────────────────────────────────────────────────────────          │
│  TOTAL:                                        $190.51                      │
│                                                                             │
│  [✓] I agree to the Terms of Service and Privacy Policy                     │
│                                                                             │
│  [         PLACE ORDER         ]  (Full width, primary, large)              │
│                                                                             │
│  🔒 Your payment information is encrypted and secure                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
Key Interactions:
Progress stepper: Clickable to go back, disabled for future steps
Address selection: Card-based with visual selection state
Payment: Inline card form appears when "Add New" clicked, with real-time validation
Review: Expandable sections for each store's items
Place Order: Button shows loading spinner, disables to prevent double-submit

│  Location: Portland, OR, United States                                       │
│  Avg. response time: < 2 hours                                               │
│  ┌─────────────────────────────────────┐  ┌─────────────────────────────┐  │
│  │                                     │  │      QUICK ACTIONS          │  │
│  │      [REVENUE CHART - 7 DAYS]       │  │  ─────────────────────────  │  │
│  │                                     │  │                             │  │
│  │  $                                  │  │  [+ Add New Product]        │  │
│  │  │╲                                  │  │  [📦 View Orders]           │  │
│  │  │ ╲    ╱╲                           │  │  [💬 Check Messages (3)]    │  │
│  │  │  ╲  ╱  ╲    ╱╲                    │  │  [🎯 Run Promotion]         │  │
│  │  │   ╲╱    ╲  ╱  ╲                   │  │  [📊 View Full Analytics]   │  │
│  │  │          ╲╱    ╲                  │  │                             │  │
│  │  └──────────────────────────────    │  │  ─────────────────────────  │  │
│  │     M  T  W  T  F  S  S             │  │  LOW STOCK ALERTS           │  │
│  │                                     │  │  ⚠️ 5 products running low  │  │
│  └─────────────────────────────────────┘  │  • Ceramic Mug - Blue (3)   │  │
│                                           │  • Vase - Large (2)         │  │
│   (Chart: 600px width, line with tooltip) │  • [Update Inventory]       │  │
│                                           └─────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────┐  ┌─────────────────────────────┐  │
│  │      RECENT ORDERS                  │  │      PERFORMANCE TIPS       │  │
│  │  ────────────────────────────────   │  │  ─────────────────────────  │  │
│  │                                     │  │                             │  │
│  │  #4821  $124.00  ⏳ Unfulfilled     │  │  💡 Add 5 more products to  │  │
│  │  #4820  $89.99   ✓ Fulfilled       │  │     increase visibility     │  │
│  │  #4819  $245.50  ⏳ Unfulfilled     │  │     [Learn more]            │  │
│  │  #4818  $34.00   ✓ Delivered       │  │                             │  │
│  │  #4817  $156.00  🔄 Return Req     │  │  🎯 Your conversion rate    │  │
│  │                                     │  │     is below average        │  │
│  │  [View all 23 orders]               │  │     [See optimization tips] │  │
│  │                                     │  │                             │  │
│  └─────────────────────────────────────┘  │  📸 12 products need more   │  │
│                                           │     images                  │  │
│   (Table with status badges, 5 rows max)  │     [Fix now]               │  │
│                                           └─────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  🚀 BOOST YOUR SALES                                                │   │
│  │                                                                     │   │
│  │  Homepage Featured Slot auction ending in 2 hours!                  │   │
│  │  Current bid: $45/day · 8 bidders                                   │   │
│  │                                                                     │   │
│  │  [Place Bid Now]  [View all opportunities]                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              (Promotional banner, dismissible)              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
2.2 PRODUCT MANAGEMENT PAGE
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]  [Store: ▼ Artisan Home Co.]        [🔔] [💬] [⚙️] [👤 Seller]     │
├─────────────────────────────────────────────────────────────────────────────┤
│  [Navigation same as dashboard]                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Products                                              [+ Add Product]      │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [🔍 Search products...    ]  [Filter ▼]  [Sort: Newest ▼]  [📥 Import]     │
│                                                                             │
│  [✓ Select All]  [Bulk Actions ▼]  [Export ▼]  [Grid ▦ / List ☰]           │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ○  │ [IMG] │ Ceramic Vase - Blue    │ $45.00 │ 12 in stock │ ● Active│
│  │     │       │ SKU: VASE-BLU-M        │        │ 5 variants  │         │
│  │     │       │ Updated 2 hours ago    │        │             │ [Edit ▼]│
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │  ○  │ [IMG] │ Linen Throw Pillow     │ $32.00 │ 8 in stock  │ ● Active│
│  │     │       │ SKU: PILLOW-LIN-NAT    │        │ 3 colors    │ [Edit ▼]│
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │  ○  │ [IMG] │ Stoneware Bowl Set     │ $68.00 │ 0 in stock  │ ⚠️ Low  │
│  │     │       │ SKU: BOWL-SET-001      │        │             │ [Edit ▼]│
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │  ○  │ [IMG] │ Ceramic Mug Collection │ $28.00 │ 45 in stock │ ● Active│
│  │     │       │ SKU: MUG-COL-001       │        │ 6 variants  │ [Edit ▼]│
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Showing 1-4 of 47 products                    [< Prev] 1 2 3 ... 12 [Next >]│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
2.3 ADD/EDIT PRODUCT PAGE
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]  [Store: ▼ Artisan Home Co.]        [🔔] [💬] [⚙️] [👤 Seller]     │
├─────────────────────────────────────────────────────────────────────────────┤
│  [← Back to Products]                                                       │
│                                                                             │
│  Add New Product                                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  [Save Draft]  [Preview]  [Publish]                                         │
│                                                                             │
│  ┌─────────────────────────────────────┐  ┌─────────────────────────────┐  │
│  │  BASIC INFORMATION                │  │  ORGANIZATION               │  │
│  │  ───────────────────────────────  │  │  ─────────────────────────  │  │
│  │                                   │  │                             │  │
│  │  Title *                          │  │  Category *                 │  │
│  │  [Handmade Ceramic Vase         ] │  │  [Home & Living ▼]          │  │
│  │  0/200 characters                 │  │                             │  │
│  │                                   │  │  Tags                       │  │
│  │  Description                      │  │  [ceramic, vase, handmade +]│  │
│  │  ┌─────────────────────────────┐  │  │                             │  │
│  │  │ Rich text editor toolbar    │  │  │  Collections                │  │
│  │  │ B I U • 1.  • 🔗 📷         │  │  │  [☐ Featured]              │  │
│  │  │                             │  │  │  [☐ New Arrivals]          │  │
│  │  │ Enter description here...   │  │  │  [☐ Best Sellers]          │  │
│  │  │                             │  │  │                             │  │
│  │  └─────────────────────────────┘  │  │                             │  │
│  │                                   │  └─────────────────────────────┘  │
│  └─────────────────────────────────────┘                                   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  MEDIA                                                              │   │
│  │  ─────────────────────────────────────────────────────────────────  │   │
│  │                                                                     │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │   │
│  │  │   📷    │ │  [IMG]  │ │  [IMG]  │ │   +     │ │         │       │   │
│  │  │  Add    │ │   ★     │ │         │ │  Add    │ │         │       │   │
│  │  │  Image  │ │ Primary │ │         │ │  Video  │ │         │       │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │   │
│  │                                                                     │   │
│  │  Drop images here or click to upload (up to 10 images)              │   │
│  │  First image will be the primary product photo                      │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────┐  ┌─────────────────────────────┐  │
│  │  PRICING                          │  │  INVENTORY                  │  │
│  │  ───────────────────────────────  │  │  ─────────────────────────  │  │
│  │                                   │  │                             │  │
│  │  Price *            Compare at    │  │  SKU *                      │  │
│  │  [$ 45.00 ] [$ 60.00] │ │ [VASE-BLU-M ]│ │
│ │ │ │ │ │
│ │ Cost per item (for reports) │ │ Barcode (ISBN, UPC, etc) │ │
│ │ [$ 18.00 ] │ │ [ ]│ │
│ │ │ │ │ │
│ │ [✓] Charge tax on this product │ │ Track quantity │ │
│ │ │ │ [✓] │ │
│ │ │ │ │ │
│ │ │ │ Quantity \* │ │
│ │ │ │ [ 12 ]│ │
│ │ │ │ │ │
│ │ │ │ [✓] Continue selling when │ │
│ │ │ │ out of stock │ │
│ │ │ │ │ │
│ │ │ │ Low stock threshold │ │
│ │ │ │ [ 5 ]│ │
│ │ │ │ │ │
│ └─────────────────────────────────────┘ └─────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ VARIANTS │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ This product has multiple options (size, color, etc.) │ │
│ │ │ │
│ │ [+ Add variants like size or color] │ │
│ │ │ │
│ │ ── OR ── │ │
│ │ │ │
│ │ Current variants: │ │
│ │ │ │
│ │ ┌──────────┬──────────┬──────────┬──────────┬──────────┐ │ │
│ │ │ Variant │ Price │ SKU │ Quantity │ Image │ │ │
│ │ ├──────────┼──────────┼──────────┼──────────┼──────────┤ │ │
│ │ │ Blue, S │ $45.00 │ VASE-BLU-│ 12 │ [IMG] │ │ │
│ │ │ │ │ S │ │ │ │ │
│ │ │ Blue, M │ $45.00 │ VASE-BLU-│ 8 │ [IMG] │ │ │
│ │ │ │ │ M │ │ │ │ │
│ │ │ Blue, L │ $50.00 │ VASE-BLU-│ 5 │ [IMG] │ │ │
│ │ │ │ │ L │ │ │ │ │
│ │ └──────────┴──────────┴──────────┴──────────┴──────────┘ │ │
│ │ │ │
│ │ [Edit all variants] [Add variant] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ [Save Draft] [Preview] [Publish] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
2.4 ORDER MANAGEMENT PAGE
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] [Store: ▼ Artisan Home Co.] [🔔] [💬] [⚙️] [👤 Seller] │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Navigation...] │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ Orders [Export] [Print] │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ [🔍 Search orders... ] [All Status ▼] [Date: Last 30 days ▼] │
│ │
│ [All] [Unpaid (2)] [Unfulfilled (5)] [Fulfilled] [Completed] [Cancelled] │
│ (Tab navigation with counts) │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ○ │ #4821 │ Sarah M. │ 3 items │ $124.00 │ ⏳ Unfulfilled│ │
│ │ │ 2:34 PM │ │ │ │ 💰 Paid │ │
│ │ │ │ │ │ │ [Fulfill] │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │ ○ │ #4820 │ Mike T. │ 1 item │ $89.99 │ 🚚 Shipped │ │
│ │ │ Yesterday│ │ │ │ #1Z999AA... │ │
│ │ │ │ │ │ │ [Track] │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │ ○ │ #4819 │ Emma L. │ 2 items │ $245.50 │ ⏳ Unfulfilled│ │
│ │ │ Yesterday│ │ │ │ ⏳ Unpaid │ │
│ │ │ │ │ │ │ [Send reminder]│ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │ ○ │ #4818 │ John D. │ 1 item │ $34.00 │ ✓ Delivered │ │
│ │ │ Feb 12 │ │ │ │ ⭐ Reviewed │ │
│ │ │ │ │ │ │ [View review] │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ Showing 1-4 of 23 orders [< Prev] 1 2 3 [Next >] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
2.5 ANALYTICS DASHBOARD
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] [Store: ▼ Artisan Home Co.] [🔔] [💬] [⚙️] [👤 Seller] │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Navigation...] │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ Analytics │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ [Today] [Yesterday] [Last 7 days] [Last 30 days] [Last 90 days] [Custom] │
│ │
│ Compare to: [Previous period ▼] [✓] Compare to last year │
│ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │ $8,432 │ │ 156 │ │ $54.05 │ │ 2.8% │ │
│ │ Sales │ │ Orders │ │ AOV │ │ Conversion │ │
│ │ ↑ 24% │ │ ↑ 18% │ │ ↑ 5% │ │ ↑ 0.3% │ │
│ │ $6,800 │ │ 132 │ │ $51.50 │ │ 2.5% │ │
│ │ last year │ │ last year │ │ last year │ │ last year │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ │ │
│ │ SALES OVER TIME │ │
│ │ │ │
│ │ $10k │ ┌───┐ │ │
│ │ │ ┌─────┘ └───┐ │ │
│ │ $8k │ ┌─────┘ └───┐ │ │
│ │ │ ┌─────┘ └───┐ │ │
│ │ $6k │ ┌─────┘ │ │ │
│ │ │ ┌─────┘ │ │ │
│ │ $4k │ ┌─────┘ │ │ │
│ │ │ │ │ │ │
│ │ $2k │ │ │ │ │
│ │ │ │ │ │ │
│ │ $0 │─┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────│ │ │
│ │ M T W T F S S M T W T F S S │ │
│ │ │ │
│ │ [Sales] [Orders] [Visitors] [Conversion] (toggle series) │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ TOP PRODUCTS │ │ TRAFFIC SOURCES │ │
│ │ ───────────────────────── │ │ ───────────────────────────────── │ │
│ │ │ │ │ │
│ │ 1. Ceramic Vase - Blue │ │ ████████████████████ Direct 45% │ │
│ │ $2,340 · 52 sold │ │ ████████████ Search 28% │ │
│ │ │ │ ██████ Social 15% │ │
│ │ 2. Linen Pillow Set │ │ ███ Referral 8% │ │
│ │ $1,890 · 38 sold │ │ ██ Email 4% │ │
│ │ │ │ │ │
│ │ 3. Stoneware Bowl │ │ │ │
│ │ $1,456 · 24 sold │ │ │ │
│ │ │ │ │ │
│ │ [View all products] │ │ Top search terms: │ │
│ │ │ │ 1. ceramic vase │ │
│ │ │ │ 2. handmade home decor │ │
│ │ │ │ 3. minimalist vase │ │
│ └─────────────────────────────┘ └─────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ CUSTOMER INSIGHTS │ │
│ │ ───────────────────────────────────────────────────────────────── │ │
│ │ │ │
│ │ New customers: 89 (57%) Returning: 67 (43%) │ │
│ │ [Bar chart comparing new vs returning over time] │ │
│ │ │ │
│ │ Top locations: New York (23%), California (18%), Texas (12%) │ │
│ │ [Map visualization with heat overlay] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ [Download PDF Report] [Export CSV] [Schedule Email Reports] │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
2.6 PROMOTION MARKETPLACE
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] [Store: ▼ Artisan Home Co.] [🔔] [💬] [⚙️] [👤 Seller] │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Navigation...] │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ Promote Your Products │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ Your Ad Credit: $250.00 [+ Add Credit] │
│ │
│ ───────────────────────────────────────────────────────────────────────── │
│ AVAILABLE OPPORTUNITIES │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🔥 HOMEPAGE HERO BANNER │ │
│ │ │ │
│ │ [Preview: 1200×400px banner placement on homepage] │ │
│ │ │ │
│ │ Current bid: $45.00/day 8 bidders Ends in 2:14:33 │ │
│ │ │ │
│ │ Estimated impressions: 50K/day CTR: 2.3% │ │
│ │ │ │
│ │ [Place Bid] [Watch] [View Details] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🎯 CATEGORY FEATURED │ │
│ │ │ │
│ │ [Preview: Top placement in Home & Living category] │ │
│ │ │ │
│ │ Current bid: $25.00/day 4 bidders Ends in 5:42:18 │ │
│ │ │ │
│ │ [Place Bid] [Watch] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 SEARCH SPONSORED │ │
│ │ │ │
│ │ [Preview: "Sponsored" tag in search results] │ │
│ │ │ │
│ │ CPC bidding: $0.75/click avg Budget: Set your own │ │
│ │ │ │
│ │ [Start Campaign] │ │
│ │ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ ───────────────────────────────────────────────────────────────────────── │
│ YOUR ACTIVE CAMPAIGNS │
│ ───────────────────────────────────────────────────────────────────────── │
│ │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Homepage Hero Active $45/day Started Feb 10 │ │
│ │ ┌──────────────┐ Impressions: 45,234 Clicks: 1,042 │ │
│ │ │ [Campaign │ CTR: 2.3% Cost: $180 Sales: $1,240 │ │
│ │ │ Preview] │ ROAS: 6.9x │ │
│ │ └──────────────┘ [Pause] [Edit] [View Report] │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘
2.7 SELLER CHAT INTERFACE
plain
Copy
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO] [Store: ▼ Artisan Home Co.] [🔔] [💬] [⚙️] [👤 Seller] │
├─────────────────────────────────────────────────────────────────────────────┤
│ [Navigation...] │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ ┌─────────────────────┐ ┌─────────────────────────────────────────────┐ │
│ │ MESSAGES │ │ Sarah M. │ │
│ │ ───────────────── │ │ Active now │ │
│ │ │ │ [View Customer Profile] [View Order #4821]│ │
│ │ 🔍 Search... │ ├─────────────────────────────────────────────┤ │
│ │ │ │ │ │
│ │ ┌───────────────┐ │ │ ┌─────────────────────────────────────┐ │ │
│ │ │ 👤 Sarah M. │ │ │ │ Hi! I was wondering if the blue │ │ │
│ │ │ ⭐⭐⭐⭐⭐ │◄─┼──┤ │ vase comes in a larger size? │ │ │
│ │ │ "Is this... │ │ │ │ │ │ │
│ │ │ 2m ago ● │ │ │ │ 2:15 PM │ │ │
│ │ └───────────────┘ │ │ └─────────────────────────────────────┘ │ │
│ │ │ │ │ │
│ │ ┌───────────────┐ │ │ ┌─────────────────────────────────────┐ │ │
│ │ │ 👤 Mike T. │ │ │ │ │ │ │
│ │ │ "Thanks for...│ │ │ │ Hi Sarah! Yes, we have a large │ │ │
│ │ │ 1h ago │ │ │ │ size that's 12" tall. Would you │ │ │
│ │ └───────────────┘ │ │ │ like me to send you a link? │ │ │
│ │ │ │ │ │ │ │
│ │ ┌───────────────┐ │ │ │ 2:18 PM ✓✓ │ │ │
│ │ │ 👤 Emma L. │ │ │ └─────────────────────────────────────┘ │ │
│ │ │ ⏳ Unpaid │ │ │ │ │
│ │ │ "Order #4819" │ │ │ ┌─────────────────────────────────────┐ │ │
│ │ │ 2h ago ● │ │ │ │ │ │ │
│ │ └───────────────┘ │ │ │ That would be great! Also, do you │ │ │
│ │ │ │ │ offer gift wrapping? │ │ │
│ │ [Archived] │ │ │ │ │ │
│ │ [Settings] │ │ │ 2:20 PM │ │ │
│ │ │ │ │ └─────────────────────────────────────┘ │ │
│ └─────────────────────┘ │ │ │ │
│ (280px width) │ │ ┌─────────────────────────────────────┐ │ │
│ │ │ │ [Product Card: Large Ceramic Vase] │ │ │
│ │ │ │ $55.00 [Add to Order] │ │ │
│ │ │ │ │ │ │
│ │ │ │ [Yes, we offer complimentary gift │ │ │
│ │ │ │ wrapping! Just add a note at │ │ │
│ │ │ │ checkout.] │ │ │
│ │ │ │ │ │ │
│ │ │ │ 2:21 PM ✓ │ │ │
│ │ │ └─────────────────────────────────────┘ │ │
│ │ │ │ │
│ │ │ Sarah is typing... │ │
│ │ │ │ │
│ │ ├─────────────────────────────────────────────┤ │
│ │ │ [Quick Replies ▼] │ │
│ │ │ │ │
│ │ │ ┌─────────────────────────────────────┐ │ │
│ │ │ │ Type a message... [📎] [😊] [🚀]│ │
│ │ │ └─────────────────────────────────────┘ │ │
│ │ │ │ │
│ │ │ [📎 Attachment] [🖼️ Image] [📋 Template] │ │
│ │ └─────────────────────────────────────────────┘ │
│ │ │
│ └─────────────────────────────────────────────────┘
Add to cart Fly to cart icon 600ms cubic-bezier(0.2, 0.8, 0.2, 1)
Accordion expand Height auto transition 300ms ease-in-out
