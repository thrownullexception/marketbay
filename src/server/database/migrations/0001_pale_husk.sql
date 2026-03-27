CREATE TYPE "public"."store_role" AS ENUM('owner', 'manager', 'staff');--> statement-breakpoint
DROP INDEX "otp_verifications_email_index";--> statement-breakpoint
ALTER TABLE "store_team_members" ALTER COLUMN "role_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "otp_verifications" ADD COLUMN "user_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "store_team_members" ADD COLUMN "system_role" "store_role";--> statement-breakpoint
ALTER TABLE "otp_verifications" ADD CONSTRAINT "otp_verifications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "otp_verifications_user_id_index" ON "otp_verifications" USING btree ("user_id");--> statement-breakpoint
ALTER TABLE "otp_verifications" DROP COLUMN "email";--> statement-breakpoint
ALTER TABLE "store_roles" DROP COLUMN "is_system";--> statement-breakpoint
ALTER TABLE "store_team_members" ADD CONSTRAINT "team_member_has_a_role" CHECK (role_id IS NOT NULL OR system_role IS NOT NULL);