import OtpField from "@corvu/otp-field";
import clsx from "clsx";
import { createSignal, For, onMount, Show } from "solid-js";
import { useFieldContext } from "@/ui/form/context";
import { FormInput, type FormInputProps, useFieldHasError } from "./input-form";

type FormInputOtpProps = FormInputProps & {
	maxLength: number;
};

export const FormInputOtp = (props: FormInputOtpProps) => {
	const field = useFieldContext<string>();
	const hasError = useFieldHasError<string>();
	const [mounted, setMounted] = createSignal(false);
	onMount(() => setMounted(true));

	return (
		<FormInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<Show when={mounted()}>
				<OtpField
					maxLength={props.maxLength}
					value={field().state.value}
					onValueChange={(value) => field().handleChange(value)}
					onComplete={() => field().handleBlur()}
					class="flex w-full items-center gap-2"
				>
					<OtpField.Input aria-label={props.label} />
					<For each={Array.from({ length: props.maxLength })}>
						{(_, i) => <OtpSlot index={i()} hasError={hasError()} />}
					</For>
				</OtpField>
			</Show>
		</FormInput>
	);
};

const OtpSlot = (props: { index: number; hasError: boolean }) => {
	const context = OtpField.useContext();
	const char = () => context.value()[props.index];
	const isActive = () => context.activeSlots().includes(props.index);
	const showFakeCaret = () =>
		context.value().length === props.index && context.isInserting();

	return (
		<div
			class={clsx(
				"relative flex h-12 flex-1 items-center justify-center rounded-xl border text-sm font-medium transition select-none",
				props.hasError
					? "border-red-400"
					: isActive()
						? "border-brand-400 ring-2 ring-brand-400"
						: "border-gray-200",
			)}
		>
			{char()}
			{showFakeCaret() && (
				<span class="animate-caret-blink pointer-events-none absolute inset-0 flex items-center justify-center">
					<span class="h-4 w-px bg-gray-800" />
				</span>
			)}
		</div>
	);
};
