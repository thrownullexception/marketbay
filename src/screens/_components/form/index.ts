import { createFormHook } from "@tanstack/solid-form";
import { InputCheckbox } from "@/ui/input-checkbox";
import { InputFile } from "@/ui/input-file";
import { FormInputSelect } from "@/ui/input-select";
import {
	FormInputPassword,
	FormInputText,
	FormInputWithPrefix,
} from "@/ui/input-text";
import { InputTextarea } from "@/ui/input-textarea";
import { fieldContext, formContext } from "./context";
import { SubmitButton } from "./submit";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		InputText: FormInputText,
		InputPassword: FormInputPassword,
		InputSelect: FormInputSelect,
		InputTextarea,
		InputCheckbox,
		InputWithPrefix: FormInputWithPrefix,
		InputFile,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});
