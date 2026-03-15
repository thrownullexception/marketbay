CREATE TYPE "public"."otp_scopes" AS ENUM('reset-password', 'email-verification');--> statement-breakpoint
CREATE TABLE "auth_sessions" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"user_id" varchar(24) NOT NULL,
	"last_verified_at" timestamp NOT NULL,
	"secret_hash" text NOT NULL,
	"session_id" text NOT NULL,
	"deleted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "otp_verifications" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"scope" "otp_scopes" NOT NULL,
	"hash" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_addresses" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"user_id" varchar(24) NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"street" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip" text NOT NULL,
	"country" text NOT NULL,
	"is_default" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"normalized_email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"banned" boolean DEFAULT false NOT NULL,
	"image" text,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_normalizedEmail_unique" UNIQUE("normalized_email")
);
--> statement-breakpoint
ALTER TABLE "auth_sessions" ADD CONSTRAINT "auth_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "auth_sessions_user_id_index" ON "auth_sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "otp_verifications_email_index" ON "otp_verifications" USING btree ("email");--> statement-breakpoint
CREATE INDEX "user_addresses_user_id_index" ON "user_addresses" USING btree ("user_id");