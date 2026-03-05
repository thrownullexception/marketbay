import clsx from "clsx";
import { ImageIcon } from "lucide-solid";
import { useFieldContext } from "@/screens/_components/form/context";
import { sluggify } from "@/utils/strings";
import {
	BaseInput,
	type BaseInputProps,
	useFieldHasError,
} from "./input-shared";

type Accept = "image" | "video";

const acceptMap: Record<
	Accept,
	{
		mime: string;
		extension: string;
	}
> = {
	image: {
		mime: "image/*",
		extension: "PNG, JPG",
	},
	video: {
		mime: "video/*",
		extension: "MP4, MPEG",
	},
};

export const InputFile = (
	props: {
		accept: Accept;
		maxSizeInMB: number;
	} & BaseInputProps,
) => {
	const field = useFieldContext<File>();
	const hasError = useFieldHasError<File>();
	const handleFileChange = (e: Event) => {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (file) {
			field().handleChange(file);
		}
	};
	return (
		<BaseInput
			label={props.label}
			required={props.required}
			labelLink={props.labelLink}
			description={props.description}
		>
			<div class="relative group">
				<div
					class={clsx(
						"w-full py-2 rounded-2xl border-2 border-dashed bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-brand-50/30 transition-colors",
						hasError() ? "border-red-400 hover:border-red-400" : "border-gray-200 hover:border-brand-300",
					)}
				>
					<div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
						<ImageIcon class="w-6 h-6 text-gray-400" />
					</div>
					<p class="text-xs font-medium text-gray-500">Click to upload</p>
					<p class="text-[11px] text-gray-400 mt-0.5">{`${acceptMap[props.accept].extension} up to ${props.maxSizeInMB}MB`}</p>
				</div>
				<input
					id={sluggify(props.label)}
					type="file"
					accept={acceptMap[props.accept].mime}
					class="absolute inset-0 opacity-0 cursor-pointer"
					onChange={handleFileChange}
				/>
			</div>
		</BaseInput>
	);
};
