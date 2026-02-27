ALTER TABLE "stores" RENAME COLUMN "category" TO "category_id";--> statement-breakpoint
ALTER TABLE "stores" DROP CONSTRAINT "stores_category_product_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "stores" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "stores" ADD CONSTRAINT "stores_category_id_product_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_categories"("id") ON DELETE restrict ON UPDATE no action;