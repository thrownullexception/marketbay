/** biome-ignore-all lint/correctness/useHookAtTopLevel: not frontend code */
import { BentoCache, bentostore } from "bentocache";
import { memoryDriver } from "bentocache/drivers/memory";
import { redisBusDriver, redisDriver } from "bentocache/drivers/redis";
import type { StringValue } from "ms";
import { type SERVER_ENV, serverEnv } from "@/server/env";

export class CacheService {
	// biome-ignore lint/complexity/noBannedTypes: idk
	private bento!: BentoCache<{}>;
	constructor(env: SERVER_ENV) {
		if(this.bento) {
			return;
		}
		console.log("Creating BentoCache");
		this.bento = new BentoCache({
			default: "multitier",
			stores: {
				multitier: bentostore()
					.useL1Layer(memoryDriver({ maxSize: "10mb" }))
					.useL2Layer(
						redisDriver({
							connection: {
								host: env.REDIS_HOST,
							},
						}),
					)
					.useBus(
						redisBusDriver({
							connection: {
								host: env.REDIS_HOST,
							},
						}),
					),
			},
		});
	}

	async remember<T>({
		namespace,
		key,
		ttl,
		fetch,
	}: {
		namespace: string;
		key: string;
		ttl: StringValue;
		fetch: () => Promise<T>;
	}) {
		return this.bento.namespace(namespace).getOrSet({
			key,
			factory: fetch,
			ttl,
		});
	}

	async set<T>({
		namespace,
		key,
		value,
		ttl,
	}: {
		namespace: string;
		key: string;
		value: T;
		ttl: number;
	}): Promise<void> {
		await this.bento.namespace(namespace).set({
			key,
			value,
			ttl,
		});
	}

	async get<T>({
		namespace,
		key,
	}: {
		namespace: string;
		key: string;
	}): Promise<T | undefined> {
		return this.bento.namespace(namespace).get({
			key,
		});
	}

	async delete({ namespace, key }: { namespace: string; key: string }) {
		return this.bento.namespace(namespace).delete({
			key,
		});
	}
}

export const cacheService = new CacheService(serverEnv);