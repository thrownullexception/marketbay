import NotificationEmail from "@/server/emails/notification";
import ResetPasswordEmail from "@/server/emails/password-reset";
import VerifyAccountEmail from "@/server/emails/verify-account";

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : never;

export const MAIL_TEMPLATES = {
	verification: {
		subject: "Verify your email",
		from: "registation",
		template: VerifyAccountEmail,
	},
	passwordReset: {
		subject: "Reset your password",
		from: "support",
		template: ResetPasswordEmail,
	},
	notification: {
		subject: "New Notificaion",
		from: "notifications",
		template: NotificationEmail,
	},
} as const;

// Extract the template props types from the configuration
export type TemplateProps = {
	[K in keyof typeof MAIL_TEMPLATES]: ExtractProps<
		(typeof MAIL_TEMPLATES)[K]["template"]
	>;
};

// Extract the mail template keys for backward compatibility
export type MailTemplates = keyof typeof MAIL_TEMPLATES;
