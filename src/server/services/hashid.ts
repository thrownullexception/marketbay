import Sqids from "sqids";
import { serverEnv } from "../env";

const sqids = new Sqids({
	alphabet: serverEnv.SQIDS_ALPHABET,
	minLength: 10,
	blocklist: new Set([]),
});

export const encodeHashId = (id: number) => {
	return sqids.encode([id]);
};

export const decodeHashId = (hash: string) => {
	return sqids.decode(hash)[0];
};
