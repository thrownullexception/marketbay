import logixlysia from "logixlysia";

// https://logixlysia.vercel.app/faq

export const loggerMiddleware = logixlysia({
	config: {
		showStartupMessage: true,
		startupMessageFormat: "simple",
		timestamp: {
			translateTime: "yyyy-mm-dd HH:MM:ss.SSS",
		},
		logFilePath: "./logs/example.log",
		ip: true,
		customLogFormat:
			"{now} {level} {duration} {method} {pathname} {status} {message}",
	},
});
