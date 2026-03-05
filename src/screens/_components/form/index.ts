import { createFormHook } from "@tanstack/solid-form";
import { InputCheckbox } from "@/ui/input-checkbox";
import { InputFile } from "@/ui/input-file";
import { InputSelect } from "@/ui/input-select";
import { InputPassword, InputText, InputWithPrefix } from "@/ui/input-text";
import { InputTextarea } from "@/ui/input-textarea";
import { fieldContext, formContext } from "./context";
import { SubmitButton } from "./submit";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		InputText,
		InputPassword,
		InputSelect,
		InputTextarea,
		InputCheckbox,
		InputWithPrefix,
		InputFile,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});
