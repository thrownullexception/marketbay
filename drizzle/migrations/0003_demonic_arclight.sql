CREATE TYPE "public"."store_statuses" AS ENUM('active', 'paused', 'closed', 'suspended');--> statement-breakpoint
CREATE TYPE "public"."store_contact_types" AS ENUM('phone', 'email', 'address', 'website', 'facebook', 'instagram', 'twitter', 'youtube', 'tiktok', 'telegram');--> statement-breakpoint
CREATE TABLE "product_categories" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"parent_category_id" varchar(24),
	"name" varchar(128) NOT NULL,
	"slug" varchar(128) NOT NULL,
	"level" integer DEFAULT 1 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stores" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"handle" varchar(128) NOT NULL,
	"description" varchar(512),
	"logo_url" varchar,
	"banner_url" varchar,
	"category" varchar(24) NOT NULL,
	"is_verified" boolean DEFAULT false,
	"status" "store_statuses" DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "store_contacts" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"store_id" varchar(24) NOT NULL,
	"type" "store_contact_types" NOT NULL,
	"value" varchar(128) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_parent_category_id_product_categories_id_fk" FOREIGN KEY ("parent_category_id") REFERENCES "public"."product_categories"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stores" ADD CONSTRAINT "stores_category_product_categories_id_fk" FOREIGN KEY ("category") REFERENCES "public"."product_categories"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "store_contacts" ADD CONSTRAINT "store_contacts_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "seller_id";