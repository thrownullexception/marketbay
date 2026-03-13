import type { JSX } from "solid-js";

export const FormCard = (props: {
	title?: string;
	description?: string;
	children: JSX.Element;
}) => {
	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
			{props.title && (
				<div class="px-6 py-4 border-b border-gray-100">
					<h2 class="text-base font-bold text-gray-900">{props.title}</h2>
					{props.description && (
						<p class="text-xs text-gray-400 mt-0.5">{props.description}</p>
					)}
				</div>
			)}
			<div class="p-6 space-y-5">{props.children}</div>
		</div>
	);
};

export const FormHeader = (props: { title: string; description?: string }) => {
	return (
		<div class="text-center">
			<h1 class="text-2xl font-extrabold text-gray-900">{props.title}</h1>
			{props.description && (
				<p class="text-sm text-gray-500 mt-0.5">{props.description}</p>
			)}
		</div>
	);
};

export const FormRoot = (props: { children: JSX.Element }) => {
	return <div class="space-y-8">{props.children}</div>;
};

export const FormText = (props: { children: JSX.Element }) => {
	return <p class="text-sm text-gray-500 text-center">{props.children}</p>;
};
