import { shopServerApp } from "@/api/shop";
import { createProdServer } from "@/shared/solid-start/prod";

createProdServer(shopServerApp, import.meta.url)