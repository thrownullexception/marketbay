CREATE TYPE "public"."otp_scopes" AS ENUM('reset-password', 'email-verification');--> statement-breakpoint
CREATE TABLE "auth_sessions" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"last_verified_at" timestamp NOT NULL,
	"secret_hash" varchar(128) NOT NULL,
	"user_id" varchar(24) NOT NULL,
	"session_id" varchar(128) NOT NULL,
	"deleted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "otp_verifications" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"scope" "otp_scopes" NOT NULL,
	"hash" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "first_name" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "last_name" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "phone" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "normalized_email" varchar(64) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email_verified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "banned" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "provider_id" varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "store_id" varchar(24);--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "seller_id" varchar(24);--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "slug" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "status" varchar DEFAULT 'draft' NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "category_path" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "tags" jsonb;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "seo_title" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "seo_description" varchar;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "published_at" timestamp;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "discontinued_at" timestamp;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "is_featured" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "auth_sessions" ADD CONSTRAINT "auth_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "auth_sessions_user_id_index" ON "auth_sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "otp_verifications_email_index" ON "otp_verifications" USING btree ("email");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_normalizedEmail_unique" UNIQUE("normalized_email");