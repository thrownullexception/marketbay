import { useStore } from "@tanstack/solid-form";
import type { LinkOptions } from "@tanstack/solid-router";
import type { JSX } from "solid-js";
import { useFieldContext } from "@/screens/_components/form/context";
import { formatErrors } from "@/screens/_components/form/format-errors";
import { sluggify } from "@/utils/strings";
import { TextLink } from "./link";

export const FormLabel = (props: {
	label: string;
	required?: boolean;
	for: string;
	link?: {
		label: string;
		to: LinkOptions["to"];
	};
}) => {
	return (
		<div class="flex items-center justify-between">
			<label
				for={props.for}
				class="block text-sm font-medium text-gray-700 mb-1.5"
			>
				{props.label} {props.required && <span class="text-red-400">*</span>}
			</label>
			{props.link && (
				<TextLink to={props.link.to} label={props.link.label} size="xs" />
			)}
		</div>
	);
};

export const FormDescription = (props: { description?: string }) => {
	if (!props.description) return null;
	return <p class="text-xs text-gray-400 mt-1.5">{props.description}</p>;
};

export type FormInputProps = {
	label: string;
	required?: boolean;
	labelLink?: {
		label: string;
		to: LinkOptions["to"];
	};
	description?: string;
};

export const useFieldHasError = <T,>() => {
	const field = useFieldContext<T>();
	const errors = useStore(field().store, (state) => state.meta.errors);
	const isTouched = useStore(field().store, (state) => state.meta.isTouched);
	return () => errors().length > 0 && isTouched();
};

export const FormInput = (
	props: FormInputProps & { children: JSX.Element },
) => {
	const field = useFieldContext<string>();
	const errors = useStore(field().store, (state) => state.meta.errors);
	const hasError = useFieldHasError();
	return (
		<div>
			<FormLabel
				for={sluggify(props.label)}
				label={props.label}
				required={props.required}
				link={props.labelLink}
			/>
			{props.children}
			{hasError() && (
				<em role="alert" class="mt-1 text-xs text-red-400">
					{formatErrors(errors()[0]).message}
				</em>
			)}
			<FormDescription description={props.description} />
		</div>
	);
};
