import Sqids from "sqids";
import { serverEnv } from "../env";

const sqids = new Sqids({
	alphabet: serverEnv.SQIDS_ALPHABET,
	minLength: 10,
});

export const hashId = (id: number) => {
	return sqids.encode([id]);
};

export const unhashId = (hash: string) => {
	return sqids.decode(hash)[0];
};
