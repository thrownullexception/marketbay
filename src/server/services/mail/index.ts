// import { MAIL_TEMPLATES, type TemplateProps } from "./config";
import { renderToStaticMarkup } from 'react-dom/server'
import { Resend } from "resend";
import type { SERVER_ENV } from "@/server/env";
import { APP_CONSTANTS } from "@/shared/app.constants";
import { MAIL_TEMPLATES, type TemplateProps } from "./config";
// TODO: Silent failures in email operations

export class MailService {
	private readonly resend: Resend;

	constructor(private readonly env: SERVER_ENV) {
		this.resend = new Resend(env.RESEND_SECRET);
	}

	async send<T extends keyof typeof MAIL_TEMPLATES>(input: {
		to: string;
		params: TemplateProps[T];
		type: T;
		overrideSubject?: string;
	}) {
		if (["test", "local"].includes(this.env.ENV)) {
			return Promise.resolve(undefined);
		}

		const html = renderToStaticMarkup(MAIL_TEMPLATES[input.type].template(input.params as any))

		await this.resend.emails.send({
			from: `${MAIL_TEMPLATES[input.type].from}@${APP_CONSTANTS.SITE.NAME}`,
			to: input.to,
			subject: input.overrideSubject ?? MAIL_TEMPLATES[input.type].subject,
			// biome-ignore lint/suspicious/noExplicitAny: let it go
			// react: MAIL_TEMPLATES[input.type].template(input.params as any),
		    html: html,
		});

		console.log(
			`[MailService]: Sent email of type '${String(input.type)}' to '${input.to}' with params ${JSON.stringify(input.params)}`,
		);
	}
	// catch: (e) =>
	// 	new MailDeliveryError({
	// 		cause: e,
	// 		message: "[MailService]: Failed to send email",
	// 		params: input.params,
	// 		type: input.type,
	// 		to: input.to,
	// 	}),
}
