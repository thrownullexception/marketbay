import * as v from "valibot";

export const emailSchema = v.pipe(
	v.string(),
	v.minLength(1),
	v.email(),
	v.maxLength(64),
);

export const nameSchema = v.pipe(v.string(), v.minLength(1), v.maxLength(64));

export const nonEmptyStringSchema = v.pipe(v.string(), v.minLength(1));

export const longStringSchema = v.pipe(
	v.string(),
	v.minLength(1),
	v.maxLength(256),
);

export const shortStringSchema = v.pipe(
	v.string(),
	v.minLength(1),
	v.maxLength(32),
);

export const zipSchema = v.pipe(v.string(), v.minLength(1), v.maxLength(7));
