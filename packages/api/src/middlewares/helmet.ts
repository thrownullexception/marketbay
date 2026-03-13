import { elysiaHelmet, permission } from "elysiajs-helmet";

export const helmetMiddleware = elysiaHelmet({
	csp: {
		defaultSrc: [permission.SELF],
		fontSrc: [permission.SELF, "https://fonts.gstatic.com"],
		imgSrc: [permission.SELF, permission.BLOB, permission.DATA],
		scriptSrc: [permission.SELF, permission.UNSAFE_INLINE],
		styleSrc: [
			permission.SELF,
			permission.UNSAFE_INLINE,
			"https://fonts.googleapis.com",
		],
		objectSrc: [permission.NONE],
		connectSrc: [permission.SELF],
		frameSrc: [permission.SELF],
		baseUri: [permission.SELF],
		// useNonce: true,
	},
	// permissionsPolicy: {
	// 	camera: [permission.NONE],
	// 	microphone: [permission.NONE],
	// },
	hsts: {
		maxAge: 31536000,
		includeSubDomains: true,
		preload: true,
	},
});
