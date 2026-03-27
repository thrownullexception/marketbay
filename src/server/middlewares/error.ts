import type Elysia from "elysia";
import { status } from "elysia";
import {
	BadRequestError,
	ForbiddenRequestError,
	NotFoundRequestError,
	UnAuthorizedRequestError,
} from "../shared/errors";

export const errorMiddleware = (app: Elysia) => {
	return app
		.error({
			BAD_REQUEST: BadRequestError,
			NOT_FOUND: NotFoundRequestError,
			UNAUTHORIZED: UnAuthorizedRequestError,
			FORBIDDEN: ForbiddenRequestError,
		})
		.onError(({ error, code }) => {
			console.error("❌", { code, error });
			// if (code === 'NOT_FOUND')
			//   return set.status = 404, { error: '🚫 route not found' }
			if (code === "UNKNOWN") {
				return status(500, { message: "Internal Server Error", code: 500 });
			}
		});
};
