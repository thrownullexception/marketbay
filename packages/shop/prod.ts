import { shopServerApp } from "@/api/shop";
import { createProdServer } from "@/start/prod";

createProdServer(shopServerApp, import.meta.url)