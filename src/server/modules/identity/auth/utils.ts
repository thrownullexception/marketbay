import { password } from "bun";

export const hashSecret = async (secret: string) => {
	const secretBytes = new TextEncoder().encode(secret);
	const secretHashBuffer = await crypto.subtle.digest("SHA-256", secretBytes);
	return bufferToHex(new Uint8Array(secretHashBuffer));
};

const bufferToHex = (buffer: Uint8Array) => {
	return Buffer.from(buffer).toString("hex");
};

export const hexToBuffer = (hex: string) => {
	return new Uint8Array(Buffer.from(hex, "hex"));
};

export function constantTimeEqual(a: string, b: string): boolean {
	const aBuffer = hexToBuffer(a);
	const bBuffer = hexToBuffer(b);

	if (aBuffer.byteLength !== bBuffer.byteLength) {
		return false;
	}
	let c = 0;
	for (let i = 0; i < a.length; i++) {
		c |= aBuffer[i] ^ bBuffer[i];
	}
	return c === 0;
}

export const hashPassword = (input: string) => password.hash(input);

export const verifyPassword = (input: { password: string; hash: string }) =>
	password.verify(input.password, input.hash);
