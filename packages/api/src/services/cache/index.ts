/** biome-ignore-all lint/correctness/useHookAtTopLevel: not frontend code */
import { BentoCache, bentostore } from "bentocache";
import { memoryDriver } from "bentocache/drivers/memory";
import { redisBusDriver, redisDriver } from "bentocache/drivers/redis";
import type { StringValue } from "ms";
import type { SERVER_ENV } from "@/api/env";

export class CacheService {
	// biome-ignore lint/complexity/noBannedTypes: idk
	private readonly bento: BentoCache<{}>;
	constructor(env: SERVER_ENV) {
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
	async delete({ namespace, key }: { namespace: string; key: string }) {
		return this.bento.namespace(namespace).delete({
			key,
		});
	}
}
