import { ChevronDownIcon } from "lucide-solid";
import { createSignal } from "solid-js";
import { sanitizeHtml } from "@/utils/strings";
import "./styles.css";

export const AccordionItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = createSignal(false);
	return (
		<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
			<div class="accordion__item-header">
				<button
					type="button"
					class="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
					onClick={() => setIsOpen(!isOpen())}
				>
					<span class="text-sm font-semibold text-gray-900 pr-4">
						{question}
					</span>
					<ChevronDownIcon
						class={`accordion-chevron w-5 h-5 text-gray-400 shrink-0 ${isOpen() ? "open" : ""}`}
						aria-hidden
					/>
				</button>
			</div>
			<div class={`accordion-answer px-5 pb-0 ${isOpen() ? "open" : ""}`}>
				<div class="pb-4">
					<p
						class="text-sm text-gray-600 leading-relaxed"
						innerHTML={sanitizeHtml(answer)}
					/>
				</div>
			</div>
		</div>
	);
};
