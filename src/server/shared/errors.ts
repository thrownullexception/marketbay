export interface ErrorResponse {
	message: string;
	code: number;
	data?: Record<string, unknown>;
}

export class BadRequestError extends Error {
	status = 400;

	constructor(public message = "Bad Request") {
		super(message);
	}

	toResponse() {
		return Response.json(
			{
				message: this.message,
				code: this.status,
			} satisfies ErrorResponse,
			{
				status: this.status,
			},
		);
	}
}

export class NotFoundRequestError extends Error {
	status = 400;

	constructor(
		public message = "Not Found",
		public data: Record<string, unknown>,
	) {
		super(message);
	}

	toResponse() {
		return Response.json(
			{
				message: this.message,
				code: this.status,
				data: this.data,
			} satisfies ErrorResponse,
			{
				status: this.status,
			},
		);
	}
}

export class UnAuthorizedRequestError extends Error {
	status = 401;

	constructor(
		public message = "Not Found",
		public data: Record<string, unknown>,
	) {
		super(message);
	}

	toResponse() {
		return Response.json(
			{
				message: this.message,
				code: this.status,
				data: this.data,
			} satisfies ErrorResponse,
			{
				status: this.status,
			},
		);
	}
}

export class ForbiddenRequestError extends Error {
	status = 403;

	constructor(public message = "Forbidden") {
		super(message);
	}
	
	toResponse() {
		return Response.json(
			{
				message: this.message,
				code: this.status,
			} satisfies ErrorResponse,
			{
				status: this.status,
			},
		);
	}
}