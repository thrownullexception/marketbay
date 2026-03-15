import clsx from "clsx";
import { CopyIcon, Pencil, Trash2Icon } from "lucide-solid";
import { Show } from "solid-js";
import { StatusBadge } from "@/ui/status-badge";
import { ProductStatusConfig } from "./config";
import type { MerchantProduct } from "./types";

const InventoryCell = (props: { product: MerchantProduct }) => {
	if (props.product.inventory === null) {
		return <span class="text-sm text-gray-400">—</span>;
	}

	const isLow =
		props.product.status === "low_stock" ||
		props.product.status === "out_of_stock";

	return (
		<>
			<span
				class={clsx(
					"text-sm font-medium",
					isLow ? "text-red-500 font-bold" : "text-gray-700",
				)}
			>
				{props.product.inventory}
			</span>
			<span class="text-xs text-gray-400 ml-0.5">in stock</span>
		</>
	);
};

export const ProductRow = (props: { product: MerchantProduct }) => {
	const { product } = props;
	return (
		<tr class="hover:bg-gray-50/50 transition">
			<td class="px-5 py-3">
				<input
					type="checkbox"
					class="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
				/>
			</td>
			<td class="px-3 py-3">
				<div class="flex items-center gap-3">
					<div
						class={clsx(
							"w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
							product.iconBg,
						)}
					>
						<product.Icon class={clsx("w-5 h-5", product.iconColor)} />
					</div>
					<div class="min-w-0">
						<span class="text-sm font-semibold text-gray-900 hover:text-brand-600 transition truncate block max-w-[220px] cursor-pointer">
							{product.name}
						</span>
						<p class="text-[11px] text-gray-400 mt-0.5">
							SKU: {product.sku} · {product.variants}{" "}
							{product.variants === 1 ? "variant" : "variants"}
						</p>
					</div>
				</div>
			</td>
			<td class="px-3 py-3">
				<StatusBadge {...ProductStatusConfig[product.status]} />
			</td>
			<td class="px-3 py-3 hidden md:table-cell">
				<InventoryCell product={product} />
			</td>
			<td class="px-3 py-3">
				<div>
					<span class="text-sm font-semibold text-gray-900">
						{product.price}
					</span>
					<Show when={product.comparePrice}>
						<span class="text-xs text-gray-400 line-through ml-1">
							{product.comparePrice}
						</span>
					</Show>
				</div>
			</td>
			<td class="px-3 py-3 hidden lg:table-cell">
				<span class="text-xs text-gray-500">{product.category}</span>
			</td>
			<td class="px-3 py-3 hidden lg:table-cell">
				<Show
					when={product.sold !== null}
					fallback={<span class="text-sm text-gray-400">—</span>}
				>
					<span class="text-sm font-medium text-gray-700">{product.sold}</span>
					<span class="text-xs text-gray-400 ml-0.5">sold</span>
				</Show>
			</td>
			<td class="px-3 py-3 text-right">
				<div class="flex items-center justify-end gap-1">
					<button
						type="button"
						class="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
						title="Edit"
					>
						<Pencil class="w-4 h-4" />
					</button>
					<button
						type="button"
						class="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
						title="Duplicate"
					>
						<CopyIcon class="w-4 h-4" />
					</button>
					<button
						type="button"
						class="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition"
						title="Delete"
					>
						<Trash2Icon class="w-4 h-4" />
					</button>
				</div>
			</td>
		</tr>
	);
};
