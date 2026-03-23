import Sqids from "sqids";
import type * as v from "valibot";
import { serverEnv } from "../env";
import { BadRequestError } from "../shared/errors";

function deriveAlphabet(base: string, brandId: string): string {
	// Produce a stable numeric seed from the brandId via djb2 hash.
	let seed = 5381;
	for (let i = 0; i < brandId.length; i++) {
		seed = (Math.imul(seed, 33) ^ brandId.charCodeAt(i)) >>> 0;
	}

	// Seeded LCG (Lehmer) for a deterministic Fisher-Yates shuffle.
	let state = seed || 1;
	const next = () => {
		state = Math.imul(state, 1664525) + 1013904223;
		return (state >>> 0) / 0x100000000;
	};

	const chars = base.split("");
	for (let i = chars.length - 1; i > 0; i--) {
		const j = Math.floor(next() * (i + 1));
		[chars[i], chars[j]] = [chars[j], chars[i]];
	}
	return chars.join("");
}

export class HashIdTransformer<
	T extends string,
	TPrivate = number & v.Brand<T>,
	TPublic = string & v.Brand<T>,
> {
	private readonly sqids: Sqids;

	private toPrivateCache: Map<string, TPrivate> = new Map();
	private toPublicCache: Map<TPrivate, TPublic> = new Map();

	public unoPrivate: TPrivate;

	constructor(
		readonly brandId: T,
		length: number = 10,
	) {
		console.log(`ERRROR, SHOULD NOT BE LOGGED IN THE FRONTEND - ${brandId}`);
		this.sqids = new Sqids({
			alphabet: deriveAlphabet(serverEnv.SQIDS_ALPHABET, brandId),
			minLength: length,
			blocklist: new Set([]),
		});
		this.unoPrivate = this.toPrivate(this.toPublic(1 as TPrivate) as string);
	}

	toPrivate(input: string): TPrivate {
		const cached = this.toPrivateCache.get(input);

		if (cached) {
			return cached;
		}

		const result = this.sqids.decode(input as string)[0] as TPrivate

		if(!result) {
			throw new BadRequestError(`Invalid ${this.brandId}`);
		}

		this.toPrivateCache.set(input, result);
		return result;
	}

	toPublic(input: TPrivate): TPublic {
		const cached = this.toPublicCache.get(input);

		if (cached) {
			return cached;
		}

		const result = this.sqids.encode([input as number]) as TPublic;
		this.toPublicCache.set(input, result);
		return result;
	}
}
