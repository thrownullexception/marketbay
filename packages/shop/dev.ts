
import { shopServerApp } from "@/api/shop";
import { createDevServer } from "@/shared/solid-start/dev";

createDevServer(shopServerApp, import.meta.url)