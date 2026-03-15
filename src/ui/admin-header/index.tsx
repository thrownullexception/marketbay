import type { LucideIcon } from "lucide-solid";
import { type BreadcrumbItem, BreadcrumbNav } from "@/ui/breadcrumb";
import { Button } from "@/ui/button";

export const AdminHeader = (props: {
	title: string;
	description: string;
	actions?: {
		label: string;
		variant: "primary" | "default";
		Icon: LucideIcon;
		onClick: () => void;
	}[];
	breadcrumbs?: BreadcrumbItem[];
}) => {
	return (
		<>
			{props.breadcrumbs && <BreadcrumbNav items={props.breadcrumbs} />}
			<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div>
					<h1 class="text-2xl font-extrabold text-gray-900">{props.title}</h1>
					<p class="text-sm text-gray-500 mt-0.5">{props.description}</p>
				</div>
				<div class="flex items-center gap-2">
					{props.actions?.map((action) => (
						<Button
							label={action.label}
							variant={action.variant}
							Icon={action.Icon}
							onClick={action.onClick}
						/>
					))}
				</div>
			</div>
		</>
	);
};
