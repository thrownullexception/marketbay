CREATE TYPE "public"."store_member_roles" AS ENUM('owner', 'manager', 'staff');--> statement-breakpoint
CREATE TYPE "public"."store_member_statuses" AS ENUM('active', 'invited', 'rejected');--> statement-breakpoint
CREATE TABLE "store_members" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"store_id" varchar(24) NOT NULL,
	"user_id" varchar(24) NOT NULL,
	"role" "store_member_roles" NOT NULL,
	"status" "store_member_statuses" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "store_members" ADD CONSTRAINT "store_members_store_id_stores_id_fk" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "store_members" ADD CONSTRAINT "store_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE restrict ON UPDATE no action;