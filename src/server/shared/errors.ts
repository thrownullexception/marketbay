// :eyes
export class BadRequestError extends Error {
	status = 400;

	constructor(public message = "Bad Request") {
		super(message);
	}

	toResponse() {
		return Response.json(
			{
				error: this.message,
				code: this.status,
			},
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
				error: this.message,
				code: this.status,
				data: this.data,
			},
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
				error: this.message,
				code: this.status,
				data: this.data,
			},
			{
				status: this.status,
			},
		);
	}
}
