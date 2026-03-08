-- =============================================================================
-- MarketBay – Full Database Schema
-- Generated from UI analysis (31 screens)
-- =============================================================================

-- Enable UUID extension (PostgreSQL)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- ENUMS
-- =============================================================================

CREATE TYPE user_gender AS ENUM ('male', 'female', 'non_binary', 'prefer_not_to_say');

CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'in_transit', 'delivered', 'cancelled', 'refunded');

CREATE TYPE product_status AS ENUM ('active', 'draft', 'archived');

CREATE TYPE product_visibility AS ENUM ('visible', 'hidden', 'scheduled');

CREATE TYPE product_condition AS ENUM ('new', 'refurbished', 'used');

CREATE TYPE promotion_type AS ENUM ('percentage_off', 'fixed_amount', 'free_shipping', 'buy_x_get_y');

CREATE TYPE promotion_status AS ENUM ('active', 'scheduled', 'expired', 'disabled');

CREATE TYPE promotion_applies_to AS ENUM ('all', 'specific_products', 'specific_categories');

CREATE TYPE promotion_customer_eligibility AS ENUM ('all', 'new', 'returning');

CREATE TYPE team_member_role AS ENUM ('owner', 'manager', 'staff');

CREATE TYPE team_member_status AS ENUM ('active', 'away', 'inactive');

CREATE TYPE invitation_status AS ENUM ('pending', 'accepted', 'declined', 'revoked', 'expired');

CREATE TYPE message_sender_type AS ENUM ('buyer', 'store');

CREATE TYPE notification_type AS ENUM (
    'new_order', 'low_stock', 'new_review', 'order_delivered',
    'new_message', 'return_request', 'payout_processed',
    'performance_alert', 'platform_update'
);

CREATE TYPE payout_status AS ENUM ('pending', 'due', 'processing', 'processed', 'failed');

CREATE TYPE return_status AS ENUM ('requested', 'pending_review', 'approved', 'rejected', 'completed');

CREATE TYPE dispute_status AS ENUM ('open', 'under_review', 'resolved', 'closed');

CREATE TYPE shipping_method AS ENUM ('standard', 'express', 'overnight');

CREATE TYPE payment_method_type AS ENUM ('card', 'paypal', 'apple_pay', 'google_pay');

CREATE TYPE card_brand AS ENUM ('visa', 'mastercard', 'amex', 'discover', 'other');

CREATE TYPE return_policy_type AS ENUM ('30_day', '14_day', '60_day', 'no_returns');

CREATE TYPE handling_time_type AS ENUM ('same_day', '1_business_day', '2_business_days', '3_5_business_days');

-- =============================================================================
-- USERS
-- =============================================================================

CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           TEXT NOT NULL UNIQUE,
    password_hash   TEXT,                           -- NULL when using OAuth only
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    phone           TEXT,
    date_of_birth   DATE,
    gender          user_gender,
    profile_photo   TEXT,                           -- URL / storage path
    email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
    is_admin        BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Social / OAuth logins
CREATE TABLE user_social_accounts (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    provider    TEXT NOT NULL,                      -- 'google', 'facebook', 'apple'
    provider_id TEXT NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (provider, provider_id)
);

-- Per-user notification preferences (buyers & sellers share this table)
CREATE TABLE user_notification_preferences (
    user_id                 UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    -- Buyer preferences
    order_updates           BOOLEAN NOT NULL DEFAULT TRUE,
    promotions_and_deals    BOOLEAN NOT NULL DEFAULT TRUE,
    wishlist_price_drops    BOOLEAN NOT NULL DEFAULT TRUE,
    new_followers           BOOLEAN NOT NULL DEFAULT TRUE,
    review_responses        BOOLEAN NOT NULL DEFAULT TRUE,
    -- Seller preferences
    new_orders              BOOLEAN NOT NULL DEFAULT TRUE,
    low_stock_alerts        BOOLEAN NOT NULL DEFAULT TRUE,
    new_reviews             BOOLEAN NOT NULL DEFAULT TRUE,
    payout_notifications    BOOLEAN NOT NULL DEFAULT TRUE,
    platform_updates        BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- ADDRESSES
-- =============================================================================

CREATE TABLE addresses (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    street      TEXT NOT NULL,
    apartment   TEXT,
    city        TEXT NOT NULL,
    state       TEXT NOT NULL,
    zip         TEXT NOT NULL,
    country     TEXT NOT NULL DEFAULT 'US',
    is_default  BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- PAYMENT METHODS
-- =============================================================================

CREATE TABLE payment_methods (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type            payment_method_type NOT NULL,
    name_on_card    TEXT,
    card_last4      CHAR(4),
    card_brand      card_brand,
    expiry_month    SMALLINT,                       -- 1–12
    expiry_year     SMALLINT,                       -- e.g. 2028
    is_default      BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- CATEGORIES
-- =============================================================================

CREATE TABLE categories (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id       UUID REFERENCES categories(id) ON DELETE SET NULL,
    name            TEXT NOT NULL,
    slug            TEXT NOT NULL UNIQUE,
    description     TEXT,
    image_url       TEXT,
    sort_order      INT NOT NULL DEFAULT 0,
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- STORES
-- =============================================================================

CREATE TABLE stores (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id                UUID NOT NULL REFERENCES users(id),
    name                    TEXT NOT NULL,
    slug                    TEXT NOT NULL UNIQUE,   -- marketbay.com/store/{slug}
    tagline                 TEXT,                   -- max 60 chars
    description             TEXT,                   -- max 500 chars
    logo_url                TEXT,
    cover_image_url         TEXT,
    primary_category_id     UUID REFERENCES categories(id) ON DELETE SET NULL,
    country                 TEXT,
    city                    TEXT,
    contact_email           TEXT,
    phone                   TEXT,
    website                 TEXT,
    instagram_url           TEXT,
    twitter_url             TEXT,
    -- Legal / billing
    legal_business_name     TEXT,
    tax_id_ein              TEXT,
    business_address_street TEXT,
    business_address_city   TEXT,
    business_address_state  TEXT,
    business_address_zip    TEXT,
    business_address_country TEXT,
    -- Shipping defaults
    return_policy           return_policy_type NOT NULL DEFAULT '30_day',
    handling_time           handling_time_type NOT NULL DEFAULT '3_5_business_days',
    -- Meta
    is_verified             BOOLEAN NOT NULL DEFAULT FALSE,
    is_active               BOOLEAN NOT NULL DEFAULT TRUE,
    joined_at               TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Shipping zones per store
CREATE TABLE store_shipping_zones (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    name            TEXT NOT NULL,                  -- e.g. "Continental US"
    countries       TEXT[],                         -- ISO country codes
    regions         TEXT[],                         -- states / provinces
    handling_time   handling_time_type NOT NULL DEFAULT '3_5_business_days',
    ship_from       TEXT,
    flat_rate       NUMERIC(10, 2),
    free_shipping_threshold NUMERIC(10, 2),
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Buyers following stores
CREATE TABLE store_follows (
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    store_id    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    followed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, store_id)
);

-- =============================================================================
-- STORE TEAM
-- =============================================================================

CREATE TABLE store_team_members (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role        team_member_role NOT NULL DEFAULT 'staff',
    status      team_member_status NOT NULL DEFAULT 'active',
    last_active TIMESTAMPTZ,
    joined_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (store_id, user_id)
);

-- Granular permissions per team member (one row per permission)
CREATE TABLE store_team_permissions (
    team_member_id  UUID NOT NULL REFERENCES store_team_members(id) ON DELETE CASCADE,
    permission      TEXT NOT NULL,
    -- Possible values: view_orders, process_orders, manage_products,
    --                  view_analytics, manage_promotions, view_payouts,
    --                  manage_team, edit_store, respond_to_messages
    PRIMARY KEY (team_member_id, permission)
);

CREATE TABLE store_invitations (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id            UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    email               TEXT NOT NULL,
    role                team_member_role NOT NULL DEFAULT 'staff',
    personal_message    TEXT,
    token               TEXT NOT NULL UNIQUE,       -- secure random token in email link
    status              invitation_status NOT NULL DEFAULT 'pending',
    sent_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at          TIMESTAMPTZ NOT NULL DEFAULT NOW() + INTERVAL '7 days',
    accepted_at         TIMESTAMPTZ
);

-- =============================================================================
-- PRODUCTS
-- =============================================================================

CREATE TABLE products (
    id                              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id                        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    category_id                     UUID REFERENCES categories(id) ON DELETE SET NULL,
    subcategory_id                  UUID REFERENCES categories(id) ON DELETE SET NULL,
    title                           TEXT NOT NULL,          -- max 120 chars
    description                     TEXT,                   -- rich text / HTML
    price                           NUMERIC(12, 2) NOT NULL,
    compare_at_price                NUMERIC(12, 2),         -- original / struck-through price
    cost_per_item                   NUMERIC(12, 2),         -- internal only
    sku                             TEXT,
    barcode                         TEXT,                   -- UPC / EAN
    quantity                        INT NOT NULL DEFAULT 0,
    track_inventory                 BOOLEAN NOT NULL DEFAULT TRUE,
    continue_selling_when_out_of_stock BOOLEAN NOT NULL DEFAULT FALSE,
    weight_lb                       NUMERIC(8, 3),
    length_in                       NUMERIC(8, 3),
    width_in                        NUMERIC(8, 3),
    height_in                       NUMERIC(8, 3),
    requires_shipping               BOOLEAN NOT NULL DEFAULT TRUE,
    condition                       product_condition NOT NULL DEFAULT 'new',
    tags                            TEXT[],                 -- up to 10 tags
    status                          product_status NOT NULL DEFAULT 'draft',
    visibility                      product_visibility NOT NULL DEFAULT 'visible',
    scheduled_publish_at            TIMESTAMPTZ,
    meta_title                      TEXT,
    meta_description                TEXT,
    url_handle                      TEXT,                   -- SEO slug
    sold_count                      INT NOT NULL DEFAULT 0,
    created_at                      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at                      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE product_images (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    url         TEXT NOT NULL,
    alt_text    TEXT,
    sort_order  SMALLINT NOT NULL DEFAULT 0,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Variant option groups (e.g. "Color", "Size")
CREATE TABLE product_option_groups (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,                      -- e.g. "Color", "Size"
    sort_order  SMALLINT NOT NULL DEFAULT 0
);

-- Individual option values (e.g. "Matte Black", "M", "L")
CREATE TABLE product_option_values (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    option_group_id UUID NOT NULL REFERENCES product_option_groups(id) ON DELETE CASCADE,
    value           TEXT NOT NULL,
    sort_order      SMALLINT NOT NULL DEFAULT 0
);

-- Concrete variants (combination of option values)
CREATE TABLE product_variants (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    sku             TEXT,
    price           NUMERIC(12, 2),                -- overrides product price if set
    quantity        INT NOT NULL DEFAULT 0,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Junction: which option values make up a variant
CREATE TABLE product_variant_options (
    variant_id          UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
    option_value_id     UUID NOT NULL REFERENCES product_option_values(id) ON DELETE CASCADE,
    PRIMARY KEY (variant_id, option_value_id)
);

-- Many-to-many: product ↔ category (for secondary categories)
CREATE TABLE product_categories (
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
);

-- =============================================================================
-- CART
-- =============================================================================

CREATE TABLE carts (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID REFERENCES users(id) ON DELETE CASCADE,   -- NULL = guest
    session_id  TEXT,                                          -- for guest carts
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT cart_has_owner CHECK (user_id IS NOT NULL OR session_id IS NOT NULL)
);

CREATE TABLE cart_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cart_id         UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    variant_id      UUID REFERENCES product_variants(id) ON DELETE SET NULL,
    quantity        INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
    unit_price      NUMERIC(12, 2) NOT NULL,        -- price at time of add
    added_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (cart_id, product_id, variant_id)
);

-- =============================================================================
-- WISHLIST
-- =============================================================================

CREATE TABLE wishlist_items (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    added_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, product_id)
);

-- =============================================================================
-- PROMOTIONS
-- =============================================================================

CREATE TABLE promotions (
    id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id                    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    name                        TEXT NOT NULL,
    description                 TEXT,
    type                        promotion_type NOT NULL,
    discount_value              NUMERIC(10, 2) NOT NULL,    -- % or flat amount
    max_discount_cap            NUMERIC(10, 2),             -- optional ceiling
    coupon_code                 TEXT,                       -- NULL = auto-apply
    auto_apply                  BOOLEAN NOT NULL DEFAULT FALSE,
    applies_to                  promotion_applies_to NOT NULL DEFAULT 'all',
    minimum_order_value         NUMERIC(10, 2),
    minimum_items               INT,
    -- Buy X Get Y fields
    buy_quantity                INT,
    get_quantity                INT,
    -- Usage limits
    total_usage_limit           INT,
    limit_per_customer          INT,
    times_used                  INT NOT NULL DEFAULT 0,
    -- Eligibility
    customer_eligibility        promotion_customer_eligibility NOT NULL DEFAULT 'all',
    -- Scheduling
    start_date                  TIMESTAMPTZ NOT NULL,
    end_date                    TIMESTAMPTZ,
    is_flash_sale               BOOLEAN NOT NULL DEFAULT FALSE,
    -- Combination rules
    can_combine_free_shipping   BOOLEAN NOT NULL DEFAULT FALSE,
    can_combine_other_codes     BOOLEAN NOT NULL DEFAULT FALSE,
    can_combine_product_sale    BOOLEAN NOT NULL DEFAULT FALSE,
    status                      promotion_status NOT NULL DEFAULT 'scheduled',
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Products that a promotion applies to (when applies_to = 'specific_products')
CREATE TABLE promotion_products (
    promotion_id    UUID NOT NULL REFERENCES promotions(id) ON DELETE CASCADE,
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    PRIMARY KEY (promotion_id, product_id)
);

-- Categories that a promotion applies to (when applies_to = 'specific_categories')
CREATE TABLE promotion_categories (
    promotion_id    UUID NOT NULL REFERENCES promotions(id) ON DELETE CASCADE,
    category_id     UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (promotion_id, category_id)
);

-- Track individual coupon usage
CREATE TABLE promotion_usages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    promotion_id    UUID NOT NULL REFERENCES promotions(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    order_id        UUID,                           -- set after order placed (FK added later)
    discount_amount NUMERIC(10, 2) NOT NULL,
    used_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- ORDERS
-- =============================================================================

CREATE TABLE orders (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number        TEXT NOT NULL UNIQUE,           -- e.g. MB-30247
    buyer_id            UUID NOT NULL REFERENCES users(id),
    store_id            UUID NOT NULL REFERENCES stores(id),
    status              order_status NOT NULL DEFAULT 'pending',
    -- Pricing
    subtotal            NUMERIC(12, 2) NOT NULL,
    discount_amount     NUMERIC(12, 2) NOT NULL DEFAULT 0,
    shipping_cost       NUMERIC(12, 2) NOT NULL DEFAULT 0,
    tax_amount          NUMERIC(12, 2) NOT NULL DEFAULT 0,
    total               NUMERIC(12, 2) NOT NULL,
    -- Shipping
    shipping_method     shipping_method NOT NULL DEFAULT 'standard',
    tracking_number     TEXT,
    carrier             TEXT,
    -- Snapshot of shipping address at time of order
    shipping_first_name TEXT NOT NULL,
    shipping_last_name  TEXT NOT NULL,
    shipping_street     TEXT NOT NULL,
    shipping_apartment  TEXT,
    shipping_city       TEXT NOT NULL,
    shipping_state      TEXT NOT NULL,
    shipping_zip        TEXT NOT NULL,
    shipping_country    TEXT NOT NULL,
    -- Payment snapshot
    payment_method_type payment_method_type NOT NULL,
    payment_card_last4  CHAR(4),
    -- Promotion applied
    promotion_id        UUID REFERENCES promotions(id) ON DELETE SET NULL,
    coupon_code         TEXT,
    -- Dates
    placed_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    estimated_delivery  DATE,
    shipped_at          TIMESTAMPTZ,
    delivered_at        TIMESTAMPTZ,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE order_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id        UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id      UUID NOT NULL REFERENCES products(id),
    variant_id      UUID REFERENCES product_variants(id),
    -- Snapshot of product details at time of order
    product_title   TEXT NOT NULL,
    variant_label   TEXT,                           -- e.g. "Matte Black / M"
    image_url       TEXT,
    quantity        INT NOT NULL CHECK (quantity > 0),
    unit_price      NUMERIC(12, 2) NOT NULL,
    line_total      NUMERIC(12, 2) NOT NULL
);

-- Close the FK loop for promotion_usages.order_id
ALTER TABLE promotion_usages
    ADD CONSTRAINT promotion_usages_order_id_fkey
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL;

-- =============================================================================
-- RETURNS
-- =============================================================================

CREATE TABLE returns (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id        UUID NOT NULL REFERENCES orders(id),
    buyer_id        UUID NOT NULL REFERENCES users(id),
    store_id        UUID NOT NULL REFERENCES stores(id),
    reason          TEXT NOT NULL,
    notes           TEXT,
    status          return_status NOT NULL DEFAULT 'requested',
    refund_amount   NUMERIC(12, 2),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE return_items (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    return_id   UUID NOT NULL REFERENCES returns(id) ON DELETE CASCADE,
    order_item_id UUID NOT NULL REFERENCES order_items(id),
    quantity    INT NOT NULL CHECK (quantity > 0)
);

-- =============================================================================
-- DISPUTES
-- =============================================================================

CREATE TABLE disputes (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id        UUID NOT NULL REFERENCES orders(id),
    buyer_id        UUID NOT NULL REFERENCES users(id),
    store_id        UUID NOT NULL REFERENCES stores(id),
    subject         TEXT NOT NULL,
    description     TEXT NOT NULL,
    status          dispute_status NOT NULL DEFAULT 'open',
    resolution_note TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at     TIMESTAMPTZ,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- REVIEWS
-- =============================================================================
-- status (enum: published, hidden, flagged)

CREATE TABLE reviews (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id          UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    order_item_id       UUID REFERENCES order_items(id) ON DELETE SET NULL,  -- ensures purchase
    buyer_id            UUID NOT NULL REFERENCES users(id),
    store_id            UUID NOT NULL REFERENCES stores(id),
    rating              SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title               TEXT,
    body                TEXT,
    helpful_votes       INT NOT NULL DEFAULT 0,
    verified_purchase   BOOLEAN NOT NULL DEFAULT FALSE,
    seller_reply        TEXT,
    seller_reply_at     TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (order_item_id, buyer_id)    -- one review per order line item per buyer
);

CREATE TABLE review_helpful_votes (
    review_id   UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    voted_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (review_id, user_id)
);

-- =============================================================================
-- MESSAGES / CONVERSATIONS
-- =============================================================================

CREATE TABLE conversations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id        UUID NOT NULL REFERENCES users(id),
    store_id        UUID NOT NULL REFERENCES stores(id),
    -- Optional context
    order_id        UUID REFERENCES orders(id) ON DELETE SET NULL,
    return_id       UUID REFERENCES returns(id) ON DELETE SET NULL,
    product_id      UUID REFERENCES products(id) ON DELETE SET NULL,  -- pre-sale inquiry
    -- Denormalized for fast listing
    last_message_preview    TEXT,
    last_message_at         TIMESTAMPTZ,
    buyer_unread_count      INT NOT NULL DEFAULT 0,
    store_unread_count      INT NOT NULL DEFAULT 0,
    is_archived_by_buyer    BOOLEAN NOT NULL DEFAULT FALSE,
    is_archived_by_store    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE messages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    sender_type     message_sender_type NOT NULL,
    sender_id       UUID NOT NULL REFERENCES users(id),     -- user acting as buyer or store rep
    content         TEXT,
    attachment_url  TEXT,
    attachment_name TEXT,
    is_read         BOOLEAN NOT NULL DEFAULT FALSE,
    sent_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- NOTIFICATIONS
-- =============================================================================

CREATE TABLE notifications (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type            notification_type NOT NULL,
    title           TEXT NOT NULL,
    description     TEXT,
    is_read         BOOLEAN NOT NULL DEFAULT FALSE,
    -- Polymorphic reference to related entity
    related_entity_type TEXT,                       -- 'order', 'product', 'review', etc.
    related_entity_id   UUID,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- PAYOUTS
-- =============================================================================

CREATE TABLE payout_accounts (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    bank_name       TEXT,
    account_holder  TEXT,
    account_last4   CHAR(4),
    routing_number  TEXT,                           -- store encrypted
    is_default      BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE payouts (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id            UUID NOT NULL REFERENCES stores(id),
    payout_account_id   UUID REFERENCES payout_accounts(id) ON DELETE SET NULL,
    amount              NUMERIC(12, 2) NOT NULL,
    currency            CHAR(3) NOT NULL DEFAULT 'USD',
    status              payout_status NOT NULL DEFAULT 'pending',
    period_start        DATE NOT NULL,
    period_end          DATE NOT NULL,
    notes               TEXT,
    processed_at        TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- ANALYTICS (pre-aggregated store stats – can also be computed on-the-fly)
-- =============================================================================

CREATE TABLE store_analytics_daily (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    date            DATE NOT NULL,
    revenue         NUMERIC(14, 2) NOT NULL DEFAULT 0,
    orders_count    INT NOT NULL DEFAULT 0,
    visitors        INT NOT NULL DEFAULT 0,
    page_views      INT NOT NULL DEFAULT 0,
    UNIQUE (store_id, date)
);

-- =============================================================================
-- ADMIN
-- =============================================================================

CREATE TABLE admin_users (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    role        TEXT NOT NULL DEFAULT 'super_admin',    -- 'super_admin', 'support', 'finance'
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE admin_audit_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id   UUID NOT NULL REFERENCES admin_users(id),
    action          TEXT NOT NULL,                  -- e.g. 'ban_user', 'approve_store'
    entity_type     TEXT,                           -- 'user', 'store', 'product', etc.
    entity_id       UUID,
    details         JSONB,
    performed_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- PLATFORM SETTINGS (key-value config)
-- =============================================================================

CREATE TABLE platform_settings (
    key         TEXT PRIMARY KEY,
    value       TEXT NOT NULL,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- INVENTORY MANAGEMENT
-- =============================================================================

CREATE TYPE inventory_movement_reason AS ENUM (
    'initial_stock',        -- first stock entry
    'restock',              -- manual stock addition
    'sale',                 -- deducted by a placed order
    'return',               -- added back from a return
    'adjustment',           -- manual correction (e.g. damage, count discrepancy)
    'transfer_in',          -- received from another location
    'transfer_out',         -- sent to another location
    'reserved',             -- held for a pending order
    'reservation_released'  -- reservation cancelled / expired
);

CREATE TYPE inventory_adjustment_status AS ENUM ('pending', 'approved', 'rejected');

CREATE TYPE purchase_order_status AS ENUM ('draft', 'sent', 'partial', 'received', 'cancelled');

-- One inventory record per (product, variant, location).
-- When a store has no warehouses the location_id is NULL (single-location store).
CREATE TABLE inventory_locations (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,              -- e.g. "Main Warehouse", "NYC Fulfillment"
    address     TEXT,
    is_default  BOOLEAN NOT NULL DEFAULT FALSE,
    is_active   BOOLEAN NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Current on-hand quantities (source of truth via movements)
CREATE TABLE inventory (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    variant_id      UUID REFERENCES product_variants(id) ON DELETE CASCADE,
    location_id     UUID REFERENCES inventory_locations(id) ON DELETE SET NULL,
    quantity_on_hand        INT NOT NULL DEFAULT 0 CHECK (quantity_on_hand >= 0),
    quantity_reserved       INT NOT NULL DEFAULT 0 CHECK (quantity_reserved >= 0),  -- held for open orders
    quantity_available      INT GENERATED ALWAYS AS (quantity_on_hand - quantity_reserved) STORED,
    low_stock_threshold     INT NOT NULL DEFAULT 5,     -- triggers low_stock notification
    reorder_point           INT NOT NULL DEFAULT 10,    -- suggested reorder level
    reorder_quantity        INT NOT NULL DEFAULT 50,    -- suggested qty to reorder
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (product_id, variant_id, location_id)
);

-- Immutable ledger of every stock movement
CREATE TABLE inventory_movements (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inventory_id    UUID NOT NULL REFERENCES inventory(id),
    reason          inventory_movement_reason NOT NULL,
    quantity_delta  INT NOT NULL,               -- positive = in, negative = out
    quantity_before INT NOT NULL,
    quantity_after  INT NOT NULL,
    -- Optional references for traceability
    order_id        UUID REFERENCES orders(id) ON DELETE SET NULL,
    return_id       UUID REFERENCES returns(id) ON DELETE SET NULL,
    purchase_order_id UUID,                     -- FK added after purchase_orders table
    adjustment_id   UUID,                       -- FK added after inventory_adjustments table
    note            TEXT,
    performed_by    UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Manual stock adjustment requests (require approval for accountability)
CREATE TABLE inventory_adjustments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inventory_id    UUID NOT NULL REFERENCES inventory(id),
    requested_by    UUID NOT NULL REFERENCES users(id),
    approved_by     UUID REFERENCES users(id),
    reason          TEXT NOT NULL,
    quantity_delta  INT NOT NULL,               -- what the requester wants to add/remove
    status          inventory_adjustment_status NOT NULL DEFAULT 'pending',
    reviewed_at     TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Close FK loop for inventory_movements.adjustment_id
ALTER TABLE inventory_movements
    ADD CONSTRAINT inventory_movements_adjustment_id_fkey
    FOREIGN KEY (adjustment_id) REFERENCES inventory_adjustments(id) ON DELETE SET NULL;

-- Suppliers for purchase orders
CREATE TABLE suppliers (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    name            TEXT NOT NULL,
    contact_name    TEXT,
    email           TEXT,
    phone           TEXT,
    website         TEXT,
    address         TEXT,
    notes           TEXT,
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Purchase orders sent to suppliers to restock inventory
CREATE TABLE purchase_orders (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    supplier_id     UUID REFERENCES suppliers(id) ON DELETE SET NULL,
    location_id     UUID REFERENCES inventory_locations(id) ON DELETE SET NULL,  -- destination
    po_number       TEXT NOT NULL,              -- e.g. "PO-2026-0042"
    status          purchase_order_status NOT NULL DEFAULT 'draft',
    notes           TEXT,
    expected_at     DATE,
    received_at     TIMESTAMPTZ,
    created_by      UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (store_id, po_number)
);

CREATE TABLE purchase_order_items (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    purchase_order_id   UUID NOT NULL REFERENCES purchase_orders(id) ON DELETE CASCADE,
    product_id          UUID NOT NULL REFERENCES products(id),
    variant_id          UUID REFERENCES product_variants(id),
    quantity_ordered    INT NOT NULL CHECK (quantity_ordered > 0),
    quantity_received   INT NOT NULL DEFAULT 0,
    unit_cost           NUMERIC(12, 2),
    note                TEXT
);

-- Close FK loop for inventory_movements.purchase_order_id
ALTER TABLE inventory_movements
    ADD CONSTRAINT inventory_movements_purchase_order_id_fkey
    FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders(id) ON DELETE SET NULL;

-- Stock reservations: inventory held while an order is in pending/processing state
CREATE TABLE inventory_reservations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inventory_id    UUID NOT NULL REFERENCES inventory(id),
    order_id        UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    quantity        INT NOT NULL CHECK (quantity > 0),
    reserved_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    released_at     TIMESTAMPTZ,                -- NULL = still active
    UNIQUE (inventory_id, order_id)
);

-- =============================================================================
-- INDEXES
-- =============================================================================

-- Users
CREATE INDEX idx_users_email ON users(email);

-- Stores
CREATE INDEX idx_stores_owner_id ON stores(owner_id);
CREATE INDEX idx_stores_slug ON stores(slug);
CREATE INDEX idx_stores_primary_category ON stores(primary_category_id);

-- Products
CREATE INDEX idx_products_store_id ON products(store_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_price ON products(price);

-- Orders
CREATE INDEX idx_orders_buyer_id ON orders(buyer_id);
CREATE INDEX idx_orders_store_id ON orders(store_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_placed_at ON orders(placed_at DESC);
CREATE INDEX idx_orders_order_number ON orders(order_number);

-- Reviews
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_store_id ON reviews(store_id);
CREATE INDEX idx_reviews_buyer_id ON reviews(buyer_id);

-- Conversations / Messages
CREATE INDEX idx_conversations_buyer_id ON conversations(buyer_id);
CREATE INDEX idx_conversations_store_id ON conversations(store_id);
CREATE INDEX idx_conversations_last_message_at ON conversations(last_message_at DESC);
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_sent_at ON messages(sent_at DESC);

-- Notifications
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read) WHERE is_read = FALSE;
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);

-- Promotions
CREATE INDEX idx_promotions_store_id ON promotions(store_id);
CREATE INDEX idx_promotions_coupon_code ON promotions(coupon_code) WHERE coupon_code IS NOT NULL;
CREATE INDEX idx_promotions_status ON promotions(status);

-- Cart
CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);
CREATE INDEX idx_wishlist_user_id ON wishlist_items(user_id);

-- Analytics
CREATE INDEX idx_store_analytics_store_date ON store_analytics_daily(store_id, date DESC);

-- Inventory
CREATE INDEX idx_inventory_product_id ON inventory(product_id);
CREATE INDEX idx_inventory_variant_id ON inventory(variant_id) WHERE variant_id IS NOT NULL;
CREATE INDEX idx_inventory_location_id ON inventory(location_id) WHERE location_id IS NOT NULL;
CREATE INDEX idx_inventory_low_stock ON inventory(product_id) WHERE quantity_available <= low_stock_threshold;
CREATE INDEX idx_inventory_movements_inventory_id ON inventory_movements(inventory_id);
CREATE INDEX idx_inventory_movements_order_id ON inventory_movements(order_id) WHERE order_id IS NOT NULL;
CREATE INDEX idx_inventory_movements_created_at ON inventory_movements(created_at DESC);
CREATE INDEX idx_inventory_adjustments_inventory_id ON inventory_adjustments(inventory_id);
CREATE INDEX idx_inventory_adjustments_status ON inventory_adjustments(status) WHERE status = 'pending';
CREATE INDEX idx_purchase_orders_store_id ON purchase_orders(store_id);
CREATE INDEX idx_purchase_orders_supplier_id ON purchase_orders(supplier_id) WHERE supplier_id IS NOT NULL;
CREATE INDEX idx_purchase_orders_status ON purchase_orders(status);
CREATE INDEX idx_purchase_order_items_po_id ON purchase_order_items(purchase_order_id);
CREATE INDEX idx_inventory_reservations_inventory_id ON inventory_reservations(inventory_id);
CREATE INDEX idx_inventory_reservations_order_id ON inventory_reservations(order_id);
CREATE INDEX idx_inventory_reservations_active ON inventory_reservations(inventory_id) WHERE released_at IS NULL;
CREATE INDEX idx_suppliers_store_id ON suppliers(store_id);
CREATE INDEX idx_inventory_locations_store_id ON inventory_locations(store_id);

-- =============================================================================
-- SEED: default platform settings
-- =============================================================================

INSERT INTO platform_settings (key, value) VALUES
    ('commission_rate',         '0.05'),    -- 5% platform fee
    ('min_payout_amount',       '25.00'),
    ('max_product_images',      '8'),
    ('max_product_tags',        '10'),
    ('max_store_tagline_chars', '60'),
    ('max_store_description_chars', '500'),
    ('max_product_title_chars', '120');
