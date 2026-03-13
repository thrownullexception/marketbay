-- =============================================================================
-- MarketBay – Full Database Schema
-- Generated from UI analysis (31 screens)
-- =============================================================================

-- Enable UUID extension (PostgreSQL)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- ENUMS
-- =============================================================================

CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'in_transit', 'delivered', 'cancelled', 'refunded');

CREATE TYPE product_status AS ENUM ('active', 'draft', 'archived');

CREATE TYPE product_visibility AS ENUM ('visible', 'hidden', 'scheduled');

CREATE TYPE product_condition AS ENUM ('new', 'refurbished', 'used');

CREATE TYPE promotion_type AS ENUM ('percentage_off', 'fixed_amount', 'free_shipping', 'buy_x_get_y');

CREATE TYPE promotion_status AS ENUM ('active', 'scheduled', 'expired', 'disabled');

CREATE TYPE store_status AS ENUM ('active', 'inactive', 'suspended', 'deleted');

CREATE TYPE promotion_applies_to AS ENUM ('all', 'specific_products', 'specific_categories');

CREATE TYPE promotion_customer_eligibility AS ENUM ('all', 'new', 'returning');

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

CREATE TYPE review_status AS ENUM ('published', 'hidden', 'flagged');

CREATE TYPE shipping_method AS ENUM ('standard', 'express', 'overnight');

CREATE TYPE payment_method_type AS ENUM ('card', 'paypal', 'apple_pay', 'google_pay');

CREATE TYPE card_brand AS ENUM ('visa', 'mastercard', 'amex', 'discover', 'other');

CREATE TYPE return_policy_type AS ENUM ('30_day', '14_day', '60_day', 'no_returns');

CREATE TYPE handling_time_type AS ENUM ('same_day', '1_business_day', '2_business_days', '3_5_business_days');

-- =============================================================================
-- USERS
-- =============================================================================

-- CREATE TABLE users (
--     id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     email           TEXT NOT NULL UNIQUE,
--     password_hash   TEXT,                           -- NULL when using OAuth only
--     first_name      TEXT NOT NULL,
--     last_name       TEXT NOT NULL,
--     phone           TEXT,
--     profile_photo   TEXT,                           -- URL / storage path
--     email_verified  BOOLEAN NOT NULL DEFAULT FALSE,
--     deleted_at      TIMESTAMPTZ,
--     created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--     updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );

-- Social / OAuth logins
CREATE TABLE user_social_accounts (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    provider    TEXT NOT NULL,                      -- 'google', 'facebook', 'apple'
    provider_id TEXT NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (provider, provider_id)
);

-- Buyer-only notification preferences. Queried via GET /account/notification-preferences.
CREATE TABLE user_notification_preferences (
    user_id                 UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    order_updates           BOOLEAN NOT NULL DEFAULT TRUE,
    promotions_and_deals    BOOLEAN NOT NULL DEFAULT TRUE,
    wishlist_price_drops    BOOLEAN NOT NULL DEFAULT TRUE,
    new_followers           BOOLEAN NOT NULL DEFAULT TRUE,
    review_responses        BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- USER SESSIONS
-- =============================================================================

-- CREATE TABLE user_sessions (
--     id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
--     token_hash      TEXT NOT NULL,                  -- hashed session token
--     device_info     TEXT,                           -- user agent / device name
--     ip_address      INET,
--     expires_at      TIMESTAMPTZ NOT NULL,
--     last_active_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--     created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );

-- =============================================================================
-- PASSWORD RESET & EMAIL VERIFICATION TOKENS
-- =============================================================================

-- CREATE TABLE auth_tokens (
--     id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
--     type            auth_token_type NOT NULL,
--     token_hash      TEXT NOT NULL UNIQUE,           -- hashed secure token
--     expires_at      TIMESTAMPTZ NOT NULL,
--     used_at         TIMESTAMPTZ,                    -- when the token was consumed
--     created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );

-- =============================================================================
-- ADDRESSES
-- =============================================================================

-- CREATE TABLE addresses (
--     id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
--     first_name  TEXT NOT NULL,
--     last_name   TEXT NOT NULL,
--     street      TEXT NOT NULL,
--     apartment   TEXT,
--     city        TEXT NOT NULL,
--     state       TEXT NOT NULL,
--     zip         TEXT NOT NULL,
--     country     TEXT NOT NULL DEFAULT 'NG',
--     is_default  BOOLEAN NOT NULL DEFAULT FALSE,
--     created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--     updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );

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
    provider_token  TEXT,                           -- tokenized by payment provider (e.g. Stripe)
    provider_customer_id TEXT,
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
    status                  store_status NOT NULL DEFAULT 'active',
    primary_category_id     UUID REFERENCES categories(id) ON DELETE SET NULL,
    secondary_category_id   UUID REFERENCES categories(id) ON DELETE SET NULL,
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
    -- Cached metrics (denormalized for performance)
    avg_rating              NUMERIC(2,1),           -- cached average from store_reviews
    review_count            INT NOT NULL DEFAULT 0, -- cached count
    total_sales             INT NOT NULL DEFAULT 0, -- cached for credibility
    -- Meta
    is_verified             BOOLEAN NOT NULL DEFAULT FALSE,
    created_at               TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Shipping zones per store (zone defines geographic coverage; rates are in store_shipping_rates)
CREATE TABLE store_shipping_zones (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    name            TEXT NOT NULL,                  -- e.g. "Continental US"
    countries       TEXT[],                         -- ISO country codes
    regions         TEXT[],                         -- states / provinces
    handling_time   handling_time_type NOT NULL DEFAULT '3_5_business_days',
    ship_from       TEXT,
    free_shipping_threshold NUMERIC(10, 2),         -- when order subtotal >= this, shipping is free
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Shipping rates per zone (multiple rates per zone: by method, weight, or order value)
-- E.g. Standard $5.99 flat, Express $12.99, or weight tiers: Standard $5 for 0-5lb, $9 for 5-20lb
CREATE TABLE store_shipping_rates (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    zone_id             UUID NOT NULL REFERENCES store_shipping_zones(id) ON DELETE CASCADE,
    method              shipping_method NOT NULL,
    -- Flat rate (simple case)
    flat_rate           NUMERIC(10, 2),
    -- Weight-based: cost = flat_rate + (weight_lb * per_lb_rate), or just per_lb_rate when flat_rate is null
    per_lb_rate         NUMERIC(10, 4),
    -- Weight tier: applies when order weight (lb) is within range; NULL = no tier (applies to all)
    min_weight_lb       NUMERIC(8, 3),
    max_weight_lb       NUMERIC(8, 3),
    -- Order value tier: applies when order subtotal is within range (optional)
    min_order_value     NUMERIC(10, 2),
    max_order_value     NUMERIC(10, 2),
    sort_order          SMALLINT NOT NULL DEFAULT 0,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT store_shipping_rates_has_rate CHECK (flat_rate IS NOT NULL OR per_lb_rate IS NOT NULL)
);

-- Buyers following stores
CREATE TABLE store_follows (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    store_id    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seller-only notification preferences. Queried via GET /stores/:storeId/notification-preferences.
-- Kept separate from user_notification_preferences because the context, actor, and API route differ:
-- buyer prefs are scoped to a user account, seller prefs are scoped to a store.
-- A user who owns multiple stores gets one row per store.
CREATE TABLE store_notification_preferences (
    store_id                UUID PRIMARY KEY REFERENCES stores(id) ON DELETE CASCADE,
    user_id                 UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    new_orders              BOOLEAN NOT NULL DEFAULT TRUE,
    low_stock_alerts        BOOLEAN NOT NULL DEFAULT TRUE,
    new_reviews             BOOLEAN NOT NULL DEFAULT TRUE,
    payout_notifications    BOOLEAN NOT NULL DEFAULT TRUE,
    platform_updates        BOOLEAN NOT NULL DEFAULT TRUE,
);

-- =============================================================================
-- STORE TEAM
-- =============================================================================
CREATE TABLE store_roles (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,          -- e.g. "Manager", "Warehouse Staff"
    description TEXT,
    is_system   BOOLEAN NOT NULL DEFAULT FALSE,  -- TRUE for owner / manager / staff; cannot be deleted
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (store_id, name)
);

CREATE TABLE store_permissions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label TEXT
);

-- Permissions granted to a role (one row per permission).
-- Possible values: view_orders, process_orders, manage_products,
--   view_analytics, manage_promotions, view_payouts,
--   manage_team, edit_store, respond_to_messages
CREATE TABLE store_role_permissions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_id     UUID NOT NULL REFERENCES store_roles(id) ON DELETE CASCADE,
    permission_id  UUID NOT NULL REFERENCES store_permissions(id) ON DELETE CASCADE,
    UNIQUE (role_id, permission)
);

CREATE TABLE store_team_members (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id    UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id     UUID NOT NULL REFERENCES store_roles(id),
    status      team_member_status NOT NULL DEFAULT 'active',
    last_active TIMESTAMPTZ,
    joined_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (store_id, user_id)
);

CREATE TABLE store_invitations (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id            UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    role_id             UUID NOT NULL REFERENCES store_roles(id),
    email               TEXT NOT NULL,
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
    secondary_category_id           UUID REFERENCES categories(id) ON DELETE SET NULL,
    tertiary_category_id            UUID REFERENCES categories(id) ON DELETE SET NULL,
    title                           TEXT NOT NULL,          -- max 120 chars
    description                     TEXT,                   -- rich text / HTML
    price                           NUMERIC(12, 2) NOT NULL,
    compare_at_price                NUMERIC(12, 2),         -- original / struck-through price
    cost_per_item                   NUMERIC(12, 2),         -- internal only
    sku                             TEXT,
    barcode                         TEXT,                   -- UPC / EAN
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
    view_count                      INT NOT NULL DEFAULT 0,   -- for popularity sorting
    sold_count                      INT NOT NULL DEFAULT 0,
    featured                        BOOLEAN NOT NULL DEFAULT FALSE,  -- for promoted products
    created_at                      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at                      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE product_images (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    url         TEXT NOT NULL,
    alt_text    TEXT,
    sort_order  SMALLINT NOT NULL DEFAULT 0,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Variant option groups (e.g. "Color", "Size")
CREATE TABLE product_option_groups (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    name        TEXT NOT NULL,                      -- e.g. "Color", "Size"
    sort_order  SMALLINT NOT NULL DEFAULT 0,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Individual option values (e.g. "Matte Black", "M", "L")
CREATE TABLE product_option_values (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    option_group_id UUID NOT NULL REFERENCES product_option_groups(id) ON DELETE CASCADE,
    value           TEXT NOT NULL,
    sort_order      SMALLINT NOT NULL DEFAULT 0,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Concrete variants (combination of option values)
CREATE TABLE product_variants (
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id       UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    sku              TEXT,
    barcode          TEXT,                          -- variant-specific UPC / EAN
    price            NUMERIC(12, 2),               -- overrides product price if set
    compare_at_price NUMERIC(12, 2),               -- variant-specific struck-through price
    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Junction: which option values make up a variant
CREATE TABLE product_variant_options (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    variant_id      UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
    option_value_id UUID NOT NULL REFERENCES product_option_values(id) ON DELETE CASCADE,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Product views for analytics and recommendations
CREATE TABLE product_views (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    user_id         UUID REFERENCES users(id) ON DELETE SET NULL,  -- NULL = guest
    session_id      TEXT,                                           -- for guest tracking
    ip_address      INET,
    device_info     TEXT,                                           -- user agent
    referrer        TEXT,                                           -- where user came from
    viewed_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
    variant_id      UUID NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
    quantity        INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
    unit_price      NUMERIC(12, 2) NOT NULL,        -- price at time of add
    added_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (cart_id, product_id, variant_id)
);

-- Abandoned cart recovery tracking
CREATE TABLE abandoned_cart_recovery (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cart_id             UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
    user_id             UUID REFERENCES users(id) ON DELETE CASCADE,
    reminder_sent_at    TIMESTAMPTZ,                    -- when first reminder sent
    reminder_count      INT NOT NULL DEFAULT 0,        -- number of reminders sent
    last_reminder_sent_at TIMESTAMPTZ,
    converted_at        TIMESTAMPTZ,                  -- when user completed purchase
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- WISHLIST
-- =============================================================================

CREATE TABLE wishlist_items (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    variant_id  UUID REFERENCES product_variants(id) ON DELETE SET NULL,
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
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    promotion_id UUID NOT NULL REFERENCES promotions(id) ON DELETE CASCADE,
    product_id   UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Categories that a promotion applies to (when applies_to = 'specific_categories')
CREATE TABLE promotion_categories (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    promotion_id UUID NOT NULL REFERENCES promotions(id) ON DELETE CASCADE,
    category_id  UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
    -- FK back to which saved address was used (nullable; address may be deleted later)
    address_id          UUID REFERENCES addresses(id) ON DELETE SET NULL,
    -- FK back to which payment method was used (nullable; card may be deleted later)
    payment_method_id   UUID REFERENCES payment_methods(id) ON DELETE SET NULL,
    -- Payment snapshot (point-in-time copy, independent of the FK above)
    payment_method_type payment_method_type NOT NULL,
    payment_card_last4  CHAR(4),
    -- Promotion applied
    promotion_id        UUID REFERENCES promotions(id) ON DELETE SET NULL,
    coupon_code         TEXT,
    -- Additional fields
    buyer_notes         TEXT,                           -- special instructions from buyer
    seller_notes        TEXT,                           -- internal seller notes
    is_gift             BOOLEAN NOT NULL DEFAULT FALSE,
    gift_message        TEXT,
    ip_address          INET,                           -- for fraud detection
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
    variant_id      UUID REFERENCES product_variants(id) ON DELETE SET NULL,
    -- Snapshot of product details at time of order
    product_title   TEXT NOT NULL,
    variant_label   TEXT,                           -- e.g. "Matte Black / M"
    image_url       TEXT,
    quantity        INT NOT NULL CHECK (quantity > 0),
    unit_price      NUMERIC(12, 2) NOT NULL,
    line_total      NUMERIC(12, 2) NOT NULL
);

-- Immutable audit trail of every order status transition
CREATE TABLE order_status_history (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id    UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    from_status order_status,                       -- NULL on initial 'pending' insert
    to_status   order_status NOT NULL,
    changed_by  UUID REFERENCES users(id) ON DELETE SET NULL,  -- NULL = system / automation
    note        TEXT,                               -- e.g. tracking number added, cancellation reason
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
    return_id       UUID REFERENCES returns(id) ON DELETE SET NULL,  -- linked return, if any
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
    status              review_status NOT NULL DEFAULT 'published',
    seller_reply        TEXT,
    seller_reply_at     TIMESTAMPTZ,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (order_item_id, buyer_id)    -- one review per order line item per buyer
);

CREATE TABLE review_helpful_votes (
    id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    user_id   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    voted_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Store reviews (buyers rating stores, separate from product reviews)
CREATE TABLE store_reviews (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id        UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
    order_id        UUID REFERENCES orders(id) ON DELETE SET NULL,   -- ensures purchase
    buyer_id        UUID NOT NULL REFERENCES users(id),
    rating          SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title           TEXT,
    body            TEXT,
    status          review_status NOT NULL DEFAULT 'published',
    seller_reply    TEXT,
    seller_reply_at TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (order_id, buyer_id)  -- one store review per order per buyer
);

-- =============================================================================
-- MESSAGES / CONVERSATIONS
-- =============================================================================

CREATE TABLE conversations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id        UUID NOT NULL REFERENCES users(id),
    store_id        UUID NOT NULL REFERENCES stores(id),
    -- Optional context
    -- order_id        UUID REFERENCES orders(id) ON DELETE SET NULL,
    -- product_id      UUID REFERENCES products(id) ON DELETE SET NULL,  -- pre-sale inquiry
    -- Denormalized for fast listing
    last_message_preview    TEXT,
    last_message_at         TIMESTAMPTZ,
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
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
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

-- Breakdown of which orders contributed to a payout
CREATE TABLE payout_items (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payout_id           UUID NOT NULL REFERENCES payouts(id) ON DELETE CASCADE,
    order_id            UUID NOT NULL REFERENCES orders(id),
    order_total         NUMERIC(12, 2) NOT NULL,    -- gross order amount
    commission_amount   NUMERIC(12, 2) NOT NULL,    -- platform fee deducted
    seller_amount       NUMERIC(12, 2) NOT NULL,    -- order_total - commission_amount
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (payout_id, order_id)
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

-- Current on-hand quantities (source of truth via movements)
CREATE TABLE inventory (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id      UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    variant_id      UUID REFERENCES product_variants(id) ON DELETE CASCADE,
    quantity_on_hand        INT NOT NULL DEFAULT 0 CHECK (quantity_on_hand >= 0),
    quantity_reserved       INT NOT NULL DEFAULT 0 CHECK (quantity_reserved >= 0),  -- held for open orders
    quantity_available      INT GENERATED ALWAYS AS (quantity_on_hand - quantity_reserved) STORED,
    low_stock_threshold     INT NOT NULL DEFAULT 5,     -- triggers low_stock notification
    reorder_point           INT NOT NULL DEFAULT 10,    -- suggested reorder level
    reorder_quantity        INT NOT NULL DEFAULT 50,    -- suggested qty to reorder
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (product_id, variant_id),
    -- Prevents a race condition where reservations could exceed on-hand stock,
    -- which would make quantity_available go negative in the generated column.
    CONSTRAINT inventory_reserved_lte_on_hand CHECK (quantity_reserved <= quantity_on_hand)
);

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
-- CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_social_accounts_user_id ON user_social_accounts(user_id);

-- User sessions
-- CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);

-- Password reset tokens
CREATE INDEX idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);

-- Email verification tokens
CREATE INDEX idx_email_verification_tokens_user_id ON email_verification_tokens(user_id);
CREATE INDEX idx_email_verification_tokens_token ON email_verification_tokens(token_hash);

-- Addresses
CREATE INDEX idx_addresses_user_id ON addresses(user_id);
CREATE UNIQUE INDEX uq_addresses_user_default ON addresses(user_id) WHERE is_default = TRUE;

-- Payment Methods
CREATE INDEX idx_payment_methods_user_id ON payment_methods(user_id);
CREATE UNIQUE INDEX uq_payment_methods_user_default ON payment_methods(user_id) WHERE is_default = TRUE;

-- Categories
CREATE INDEX idx_categories_parent_id ON categories(parent_id) WHERE parent_id IS NOT NULL;

-- Stores
CREATE INDEX idx_stores_owner_id ON stores(owner_id);
CREATE INDEX idx_stores_slug ON stores(slug);
CREATE INDEX idx_stores_slug ON stores(slug);
CREATE INDEX idx_stores_primary_category ON stores(primary_category_id);
CREATE INDEX idx_stores_avg_rating ON stores(avg_rating) WHERE avg_rating IS NOT NULL;

-- Store shipping / follows / team / invitations
CREATE INDEX idx_store_shipping_zones_store_id ON store_shipping_zones(store_id);
CREATE INDEX idx_store_shipping_rates_zone_method ON store_shipping_rates(zone_id, method);
CREATE UNIQUE INDEX uq_store_follows_user_store ON store_follows(user_id, store_id);
CREATE INDEX idx_store_follows_store_id ON store_follows(store_id);
CREATE INDEX idx_store_roles_store_id ON store_roles(store_id);
CREATE INDEX idx_store_role_permissions_role_id ON store_role_permissions(role_id);
CREATE INDEX idx_store_team_members_user_id ON store_team_members(user_id);
CREATE INDEX idx_store_team_members_role_id ON store_team_members(store_id, role_id);
CREATE UNIQUE INDEX uq_store_invitations_store_email ON store_invitations(store_id, email);

-- Products
CREATE INDEX idx_products_store_id ON products(store_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_subcategory_id ON products(secondary_category_id) WHERE subcategory_id IS NOT NULL;
CREATE INDEX idx_products_tertiary_category_id ON products(tertiary_category_id) WHERE tertiary_category_id IS NOT NULL;
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_store_status ON products(store_id, status);
CREATE INDEX idx_products_url_handle ON products(url_handle) WHERE url_handle IS NOT NULL;
CREATE INDEX idx_products_sku ON products(sku) WHERE sku IS NOT NULL;
CREATE INDEX idx_products_barcode ON products(barcode) WHERE barcode IS NOT NULL;
CREATE INDEX idx_products_scheduled_publish ON products(scheduled_publish_at) WHERE visibility = 'scheduled';
CREATE INDEX idx_products_sold_count ON products(sold_count DESC);
CREATE INDEX idx_products_view_count ON products(view_count DESC);
CREATE INDEX idx_products_featured ON products(featured) WHERE featured = TRUE;

-- Product images / options / variants
CREATE INDEX idx_product_images_product_id ON product_images(product_id);
CREATE INDEX idx_product_option_groups_product_id ON product_option_groups(product_id);
CREATE UNIQUE INDEX uq_product_option_values_group_id ON product_option_values(option_group_id, value);
CREATE INDEX idx_product_variants_product_id ON product_variants(product_id);
CREATE INDEX idx_product_variants_sku ON product_variants(sku) WHERE sku IS NOT NULL;
CREATE INDEX idx_product_variants_barcode ON product_variants(barcode) WHERE barcode IS NOT NULL;
CREATE UNIQUE INDEX uq_product_variant_options ON product_variant_options(variant_id, option_value_id);

-- Cart
CREATE INDEX idx_carts_user_id ON carts(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_carts_session_id ON carts(session_id) WHERE session_id IS NOT NULL;
CREATE INDEX idx_cart_items_cart_id ON cart_items(cart_id);
CREATE INDEX idx_wishlist_user_id ON wishlist_items(user_id);

-- Abandoned cart recovery
CREATE INDEX idx_abandoned_cart_recovery_cart_id ON abandoned_cart_recovery(cart_id);
CREATE INDEX idx_abandoned_cart_recovery_user_id ON abandoned_cart_recovery(user_id) WHERE user_id IS NOT NULL;

-- Product views
CREATE INDEX idx_product_views_product_id ON product_views(product_id);
CREATE INDEX idx_product_views_user_id ON product_views(user_id) WHERE user_id IS NOT NULL;

-- Orders
CREATE INDEX idx_orders_buyer_id ON orders(buyer_id);
CREATE INDEX idx_orders_store_id ON orders(store_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_placed_at ON orders(placed_at DESC);
CREATE INDEX idx_orders_order_number ON orders(order_number);
CREATE INDEX idx_orders_total ON orders(total);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_order_status_history_order_id ON order_status_history(order_id);

-- Promotions
CREATE INDEX idx_promotions_store_id ON promotions(store_id);
CREATE INDEX idx_promotions_coupon_code ON promotions(coupon_code) WHERE coupon_code IS NOT NULL;
CREATE INDEX idx_promotions_status ON promotions(status);
CREATE INDEX idx_promotions_dates ON promotions(start_date, end_date);
CREATE UNIQUE INDEX uq_promotion_products ON promotion_products(promotion_id, product_id);
CREATE INDEX idx_promotion_products_product_id ON promotion_products(product_id);
CREATE UNIQUE INDEX uq_promotion_categories ON promotion_categories(promotion_id, category_id);
CREATE INDEX idx_promotion_categories_category_id ON promotion_categories(category_id);
CREATE UNIQUE INDEX uq_promotion_usages_promotion_user ON promotion_usages(promotion_id, user_id, order_id);

-- Returns
CREATE INDEX idx_returns_order_id ON returns(order_id);
CREATE INDEX idx_returns_buyer_id ON returns(buyer_id);
CREATE INDEX idx_returns_store_id ON returns(store_id);
CREATE INDEX idx_return_items_return_id ON return_items(return_id);

-- Disputes
CREATE INDEX idx_disputes_order_id ON disputes(order_id);
CREATE INDEX idx_disputes_return_id ON disputes(return_id) WHERE return_id IS NOT NULL;
CREATE INDEX idx_disputes_buyer_id ON disputes(buyer_id);
CREATE INDEX idx_disputes_store_id ON disputes(store_id);
CREATE INDEX idx_disputes_status ON disputes(status) WHERE status IN ('open', 'under_review');

-- Reviews
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_store_id ON reviews(store_id);
CREATE INDEX idx_reviews_buyer_id ON reviews(buyer_id);
CREATE INDEX idx_reviews_status ON reviews(status);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE UNIQUE INDEX uq_review_helpful_votes ON review_helpful_votes(review_id, user_id);
CREATE INDEX idx_review_helpful_votes_user_id ON review_helpful_votes(user_id);

-- Store reviews
CREATE INDEX idx_store_reviews_store_id ON store_reviews(store_id);
CREATE INDEX idx_store_reviews_buyer_id ON store_reviews(buyer_id);
CREATE INDEX idx_store_reviews_rating ON store_reviews(rating);

-- Conversations / Messages
CREATE INDEX idx_conversations_buyer_id ON conversations(buyer_id);
CREATE INDEX idx_conversations_store_id ON conversations(store_id);
CREATE INDEX idx_conversations_last_message_at ON conversations(last_message_at DESC);
-- CREATE INDEX idx_conversations_order_id ON conversations(order_id) WHERE order_id IS NOT NULL;
-- CREATE INDEX idx_conversations_return_id ON conversations(return_id) WHERE return_id IS NOT NULL;
-- CREATE INDEX idx_conversations_product_id ON conversations(product_id) WHERE product_id IS NOT NULL;
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_sent_at ON messages(sent_at DESC);

-- Notifications
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read) WHERE is_read = FALSE;
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);
CREATE INDEX idx_notifications_user_unread ON notifications(user_id, created_at DESC) WHERE is_read = FALSE;

-- Payouts
CREATE INDEX idx_payouts_store_id ON payouts(store_id);
CREATE INDEX idx_payouts_status ON payouts(status);
CREATE INDEX idx_payouts_payout_account_id ON payouts(payout_account_id) WHERE payout_account_id IS NOT NULL;
CREATE INDEX idx_payout_accounts_store_id ON payout_accounts(store_id);
CREATE UNIQUE INDEX uq_payout_accounts_store_default ON payout_accounts(store_id) WHERE is_default = TRUE;
CREATE INDEX idx_payout_items_payout_id ON payout_items(payout_id);

-- Analytics
CREATE INDEX idx_store_analytics_store_date ON store_analytics_daily(store_id, date DESC);

-- Admin
CREATE INDEX idx_admin_audit_log_admin_user_id ON admin_audit_log(admin_user_id);
CREATE INDEX idx_admin_audit_log_entity ON admin_audit_log(entity_type, entity_id);
CREATE INDEX idx_admin_audit_log_performed_at ON admin_audit_log(performed_at DESC);

-- Inventory
CREATE INDEX idx_inventory_product_id ON inventory(product_id);
CREATE INDEX idx_inventory_variant_id ON inventory(variant_id) WHERE variant_id IS NOT NULL;
CREATE INDEX idx_inventory_location_id ON inventory(location_id) WHERE location_id IS NOT NULL;
CREATE INDEX idx_inventory_low_stock ON inventory(product_id) WHERE quantity_available <= low_stock_threshold;
CREATE INDEX idx_purchase_order_items_po_id ON purchase_order_items(purchase_order_id);
CREATE INDEX idx_purchase_order_items_product_id ON purchase_order_items(product_id);
CREATE INDEX idx_purchase_order_items_variant_id ON purchase_order_items(variant_id) WHERE variant_id IS NOT NULL;
CREATE INDEX idx_inventory_reservations_inventory_id ON inventory_reservations(inventory_id);
CREATE INDEX idx_inventory_reservations_order_id ON inventory_reservations(order_id);
CREATE INDEX idx_inventory_reservations_active ON inventory_reservations(inventory_id) WHERE released_at IS NULL;
CREATE INDEX idx_suppliers_store_id ON suppliers(store_id);
CREATE INDEX idx_inventory_locations_store_id ON inventory_locations(store_id);
CREATE UNIQUE INDEX uq_inventory_locations_store_default ON inventory_locations(store_id) WHERE is_default = TRUE;

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
