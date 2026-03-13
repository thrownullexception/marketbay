
import { shopServerApp } from "@/api/shop";
import { createDevServer } from "@/start/dev";

createDevServer(shopServerApp, import.meta.url)