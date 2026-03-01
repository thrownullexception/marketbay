import { ImageIcon } from "lucide-solid";
import { sluggify } from "@/utils/strings";
import { BaseInput, type BaseInputProps } from "./input-shared";

export const InputFile = (
	props: {
		hint?: string;
		accept?: string;
		aspectRatio?: "square" | "video";
		maxWidth?: string;
	} & BaseInputProps,
) => {
	const aspectClass = () =>
		props.aspectRatio === "square" ? "aspect-square" : "aspect-[16/9]";

	return (
		<BaseInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<div class="relative group">
				<div
					class={`w-full ${aspectClass()} rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-brand-300 hover:bg-brand-50/30 transition-colors`}
					style={props.maxWidth ? { "max-width": props.maxWidth } : undefined}
				>
					<div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
						<ImageIcon class="w-6 h-6 text-gray-400" />
					</div>
					<p class="text-xs font-medium text-gray-500">Click to upload</p>
					{props.hint && (
						<p class="text-[11px] text-gray-400 mt-0.5">{props.hint}</p>
					)}
				</div>
				<input
					id={sluggify(props.label)}
					type="file"
					accept={props.accept ?? "image/*"}
					class="absolute inset-0 opacity-0 cursor-pointer"
				/>
			</div>
		</BaseInput>
	);
};
