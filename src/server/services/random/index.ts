export class RandomServiceTest {
	generateSecureRandomString(input: {
		length: number;
		input: "alphanumeric" | "numeric";
	}): string {
		return `1`.padStart(input.length, "1");
	}
}

export class RandomService {
	generateSecureRandomString(input: {
		length: number;
		input: "alphanumeric" | "numeric";
	}): string {
		// Human readable alphabet (a-z, 0-9 without l, o, 0, 1 to avoid confusion)
		const alphabet =
			input.input === "alphanumeric"
				? "abcdefghijkmnpqrstuvwxyz23456789"
				: "0123456789";

		// For alphanumeric: 32 characters, so we use 5 bits per byte (2^5 = 32)
		// For numeric: 10 characters, so we use 4 bits per byte (2^4 = 16, but we only need 0-9)
		const bitsPerByte = input.input === "alphanumeric" ? 5 : 4;
		const shiftAmount = 8 - bitsPerByte;

		// Generate random bytes
		const bytes = new Uint8Array(input.length);
		crypto.getRandomValues(bytes);

		let id = "";
		for (const byte of bytes) {
			// Shift by the appropriate amount to get the right number of bits
			const index = byte >> shiftAmount;
			// Ensure the index is within bounds of the alphabet
			const safeIndex = index % alphabet.length;
			id += alphabet[safeIndex];
		}
		return id;
	}
}
