import type { JSX } from "solid-js";
import { Container } from "@/ui/layout";

export const ScreenHeader = (props: {
	title: string;
	description?: string;
	children?: JSX.Element;
}) => {
	return (
		<section class="bg-linear-to-br from-brand-50 via-white to-accent-50 border-b border-gray-100">
			<Container class="py-8 lg:py-10">
				<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
					<div>
						<h1 class="text-2xl lg:text-3xl font-extrabold text-gray-900">
							{props.title}
						</h1>
						<p class="text-gray-500 text-sm mt-1.5 max-w-lg">
							{props.description}
						</p>
					</div>
					{props.children}
				</div>
			</Container>
		</section>
	);
};
