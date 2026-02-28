Required KYC:
Government-issued ID
Business registration document
Proof of address

Success Metrics
95% verified seller rate

Requirements
Add product:

Title

Description

Category

Price

Discount

SKU

Images

Variants (size, color, etc.)

Product status:

Active

Out of stock

Draft

4.4 Inventory Management
Description
Sellers manage stock levels.

Requirements
Stock quantity per product

Auto mark “Out of Stock”

4.5 Seller–Buyer Chat System
Description
Real-time messaging between sellers and buyers.

Chat from
Product page
Store page
Block/report abuse

4.6 Seller Analytics Dashboard
Description
Sellers can monitor performance.

Metrics:
Total sales

Revenue

Conversion rate

Most viewed products

Inventory turnover

Store traffic

Customer growth

UI Components:
Graphs (daily, weekly, monthly)

Top performing products

Promotion performance

4.7 Promotions & Homepage Boost
Description
Sellers can run paid or organic promotions.

Requirements
Create promotion campaign:

Product selection

Discount %

Duration

Promotion types:

Homepage featured

Flash sale

Store banner

Admin approval (optional)

Budget management (if paid)

Promotion performance analytics

🛍 BUYER FEATURES
5.1 Global Product Search
Description
Search across all stores.

Requirements
Search by:

Keyword

Category

Price range

Autocomplete

Search suggestions

Sort by:

Price

Popularity

Rating

Newest

5.2 Store-Level Filtering
Description
Filter products inside a specific store.

Requirements
Filter by:

Category

Price range

Rating

Availability

Discount

Written review

Verified purchase badge

View seller rating on:

Store page

Product page

Report fake reviews

Notifications when seller:
Adds new product
Runs promotion
Applies discount
Manage disputes

Approve homepage promotions

Ban sellers

View platform analytics

Manage categories

Monitor reported reviews

Dynamic pricing tools

Seller subscription tiers

Sponsored ads bidding system

Loyalty points system

11. KPIs
    Seller KPIs
    Seller retention rate

Average revenue per seller

Promotion conversion rate

Buyer KPIs
Monthly active users

Repeat purchase rate

Subscription engagement rate

12. Risks & Mitigation
    Risk Mitigation
    Fake sellers Strict KYC
    Low buyer trust Ratings + verified badge
    Inventory mismatch Real-time updates
    Chat abuse Reporting & moderation
    Low seller visibility Promotion system

Commission per sale
Paid homepage promotions
Seller subscription tiers (future)
Featured listing fees
5.6 Order Service
Responsibilities:

Cart checkout

Multi-store checkout

Order splitting

Order status lifecycle

Order States:

Pending

Paid

Processing

Shipped

Delivered

Cancelled

Faceted search

Store rating

Triggers:

New product from followed seller

Promotions
Chat messages
Order updates

5.10 Promotion Service
Seller promotion creation

Homepage featured listing

Budget tracking

Duration tracking

Ranking Logic:

Paid boost weight

Seller rating

Product performance

Track:
Product views
Clicks
Add-to-cart
Purchase
Promotion performance

Fraud detection rules

🔟 DevOps & CI/CD
CI/CD Pipeline
GitHub Actions / GitLab CI

Automated tests

Docker builds

Blue-green deployments

Payment success → Order updated Inventory decremented

Field Type Notes
id (PK) UUID Primary key
email VARCHAR (unique) Indexed
password_hash TEXT
role ENUM('buyer','seller','admin')
is_active BOOLEAN
created_at TIMESTAMP
updated_at TIMESTAMP 2. seller_profiles
Extra data for sellers.

Field Type
id (PK) UUID
user_id (FK → users.id) UUID
business_name VARCHAR
business_registration_number VARCHAR
phone_number VARCHAR
is_kyc_verified BOOLEAN
created_at TIMESTAMP
Relationship:

One user → One seller_profile

2️⃣ KYC SYSTEM 3. kyc_documents
Field Type
id (PK) UUID
seller_id (FK → seller_profiles.id) UUID
document_type ENUM('id','business_cert','address_proof')
file_url TEXT
status ENUM('pending','approved','rejected')
reviewed_by (FK → users.id) UUID
created_at TIMESTAMP
reviewed_at TIMESTAMP
Relationship:


4️⃣ PRODUCTS 5. categories
Field Type
id (PK) UUID
parent_id (FK → categories.id) UUID (nullable)
name VARCHAR
created_at TIMESTAMP
Self-referencing hierarchy.

6. products
   Field Type
   id (PK) UUID
   store_id (FK → stores.id) UUID
   category_id (FK → categories.id) UUID
   title VARCHAR
   description TEXT
   price DECIMAL
   discount_price DECIMAL
   sku VARCHAR
   status ENUM('draft','active','out_of_stock')
   created_at TIMESTAMP
   updated_at TIMESTAMP
   Relationship:

One store → Many products

One category → Many products

7. product_images
   Field Type
   id (PK) UUID
   product_id (FK → products.id) UUID
   image_url TEXT
   position INT
8. product_variants
   Field Type
   id (PK) UUID
   product_id (FK → products.id) UUID
   variant_name VARCHAR
   variant_value VARCHAR
   price_override DECIMAL
   created_at TIMESTAMP
   5️⃣ INVENTORY
9. inventory
   Field Type
   id (PK) UUID
   product_id (FK → products.id) UUID
   variant_id (FK → product_variants.id) UUID (nullable)
   quantity INT
   low_stock_threshold INT
   updated_at TIMESTAMP
10. inventory_logs
    Field Type
    id (PK) UUID
    inventory_id (FK → inventory.id) UUID
    change_amount INT
    reason VARCHAR
    created_at TIMESTAMP
    6️⃣ CART & ORDERS
11. carts
    Field Type
    id (PK) UUID
    buyer_id (FK → users.id) UUID
    created_at TIMESTAMP
    updated_at TIMESTAMP
12. cart_items
    Field Type
    id (PK) UUID
    cart_id (FK → carts.id) UUID
    product_id (FK → products.id) UUID
    variant_id (FK → product_variants.id) UUID (nullable)
    quantity INT
    created_at TIMESTAMP
    Relationship:

One cart → Many cart items

13. orders
    Field Type
    id (PK) UUID
    buyer_id (FK → users.id) UUID
    total_amount DECIMAL
    status ENUM('pending','paid','processing','shipped','delivered','cancelled')
    payment_status ENUM('pending','paid','failed')
    created_at TIMESTAMP
14. order_items
    Field Type
    id (PK) UUID
    order_id (FK → orders.id) UUID
    product_id (FK → products.id) UUID
    store_id (FK → stores.id) UUID
    quantity INT
    price_at_purchase DECIMAL
    Important:

Store reference allows multi-store checkout tracking.

7️⃣ PAYMENTS 15. transactions
Field Type
id (PK) UUID
order_id (FK → orders.id) UUID
payment_provider VARCHAR
reference VARCHAR
amount DECIMAL
status ENUM('pending','successful','failed')
created_at TIMESTAMP
8️⃣ RATINGS & REVIEWS 16. seller_reviews
Field Type
id (PK) UUID
seller_id (FK → seller_profiles.id) UUID
buyer_id (FK → users.id) UUID
order_id (FK → orders.id) UUID
rating INT (1-5)
review_text TEXT
created_at TIMESTAMP
Constraint:

One review per order per buyer

9️⃣ SELLER SUBSCRIPTIONS / FOLLOWING 17. seller_followers
Field Type
id (PK) UUID
seller_id (FK → seller_profiles.id) UUID
buyer_id (FK → users.id) UUID
created_at TIMESTAMP
Unique constraint:

(seller_id, buyer_id)

🔟 CHAT SYSTEM 18. conversations
Field Type
id (PK) UUID
buyer_id (FK → users.id) UUID
seller_id (FK → seller_profiles.id) UUID
created_at TIMESTAMP 19. messages
Field Type
id (PK) UUID
conversation_id (FK → conversations.id) UUID
sender_id (FK → users.id) UUID
message_text TEXT
is_read BOOLEAN
created_at TIMESTAMP
1️⃣1️⃣ PROMOTIONS 20. promotions
Field Type
id (PK) UUID
store_id (FK → stores.id) UUID
product_id (FK → products.id) UUID (nullable)
type ENUM('homepage','flash_sale','store_banner')
discount_percentage DECIMAL
start_date TIMESTAMP
end_date TIMESTAMP
status ENUM('pending','active','expired','rejected')
created_at TIMESTAMP
1️⃣2️⃣ ANALYTICS (Event Tracking) 21. events
Field Type
id (PK) UUID
user_id (FK → users.id) UUID
event_type VARCHAR
entity_id UUID
entity_type VARCHAR
metadata JSONB
created_at TIMESTAMP
Used for:
