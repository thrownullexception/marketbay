import { clsx } from "clsx";
import { CheckIcon } from "lucide-solid";
import { For } from "solid-js";
import type { OrderStatus } from "./types";

const STEPS = ["Ordered", "Shipped", "In Transit", "Delivered"] as const;

function stepIndex(status: OrderStatus): number {
	switch (status) {
		case "processing":
			return 0;
		case "shipped":
			return 1;
		case "in_transit":
			return 2;
		case "delivered":
			return 3;
		default:
			return -1;
	}
}

export const TrackingProgress = (props: { status: OrderStatus }) => {
	const currentStep = () => stepIndex(props.status);

	return (
		<div class="flex items-center gap-0">
			<For each={STEPS}>
				{(step, i) => {
					const completed = () => i() < currentStep();
					const active = () => i() === currentStep();

					return (
						<>
							<div class="flex flex-col items-center">
								<div
									class={clsx(
										"w-6 h-6 rounded-full flex items-center justify-center",
										{
											"bg-brand-600": completed(),
											"bg-brand-200": active(),
											"bg-gray-200": !completed() && !active(),
										},
									)}
								>
									{completed() ? (
										<CheckIcon class="w-3.5 h-3.5 text-white" />
									) : (
										<span
											class={clsx("w-2 h-2 rounded-full", {
												"bg-brand-400": active(),
												"bg-gray-300": !active(),
											})}
										/>
									)}
								</div>
								<span
									class={clsx("text-[10px] mt-1", {
										"text-gray-500": !active(),
										"text-brand-600 font-medium": active(),
									})}
								>
									{step}
								</span>
							</div>
							{i() < STEPS.length - 1 && (
								<div
									class={clsx("flex-1 h-0.5 mx-1", {
										"bg-brand-600": completed(),
										"bg-gray-200": !completed(),
									})}
								>
									{active() && (
										<div class="h-full w-1/2 bg-brand-600 rounded-full" />
									)}
								</div>
							)}
						</>
					);
				}}
			</For>
		</div>
	);
};
