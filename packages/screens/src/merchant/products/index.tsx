import {
	CircleCheckIcon,
	DownloadIcon,
	HeadphonesIcon,
	KeyboardIcon,
	LaptopIcon,
	MonitorIcon,
	PackageIcon,
	Pencil,
	SmartphoneIcon,
	SpeakerIcon,
	TagIcon,
	UploadIcon,
	WifiIcon,
	ZapIcon,
} from "lucide-solid";
import { createSignal, For } from "solid-js";
import { AdminHeader } from "@/components/admin-header";
import { DataTableBulkBar } from "@/components/data-table/bulk-bar";
import { DataTableFooter } from "@/components/data-table/footer";
import { DataTableRoot } from "@/components/data-table/root";
import { DataTableSearchBar } from "@/components/data-table/search-bar";
import { DataTableStatusTabs } from "@/components/data-table/status-tabs";
import { DataTable } from "@/components/data-table/table";
import { StatCard } from "@/components/stat-card";
import { Grid4 } from "@/ui/grid";
import { ProductRow } from "./ProductRow";
import type { MerchantProduct } from "./types";

const PRODUCTS: MerchantProduct[] = [
	{
		id: "1",
		name: "Pro Studio Wireless Headphones",
		sku: "TV-HP-001",
		variants: 4,
		status: "active",
		inventory: 156,
		price: "$59.99",
		comparePrice: "$99.99",
		category: "Headphones & Audio",
		sold: 89,
		Icon: HeadphonesIcon,
		iconBg: "bg-linear-to-br from-blue-50 to-indigo-100",
		iconColor: "text-brand-400",
	},
	{
		id: "2",
		name: 'Ultra HD 27" Monitor',
		sku: "TV-MN-002",
		variants: 2,
		status: "active",
		inventory: 42,
		price: "$299.00",
		comparePrice: "$399.00",
		category: "Monitors",
		sold: 14,
		Icon: MonitorIcon,
		iconBg: "bg-linear-to-br from-slate-50 to-gray-100",
		iconColor: "text-gray-400",
	},
	{
		id: "3",
		name: "MagSafe Case — Frosted Matte",
		sku: "TV-CS-010",
		variants: 6,
		status: "low_stock",
		inventory: 3,
		price: "$19.99",
		category: "Phone Accessories",
		sold: 67,
		Icon: SmartphoneIcon,
		iconBg: "bg-linear-to-br from-violet-50 to-purple-100",
		iconColor: "text-violet-400",
	},
	{
		id: "4",
		name: "Mechanical Keyboard — Blue Switch",
		sku: "TV-KB-005",
		variants: 3,
		status: "active",
		inventory: 84,
		price: "$89.99",
		category: "Keyboards",
		sold: 31,
		Icon: KeyboardIcon,
		iconBg: "bg-linear-to-br from-cyan-50 to-sky-100",
		iconColor: "text-cyan-400",
	},
	{
		id: "5",
		name: "Bluetooth Speaker — Waterproof",
		sku: "TV-SP-008",
		variants: 2,
		status: "active",
		inventory: 71,
		price: "$42.49",
		comparePrice: "$49.99",
		category: "Speakers",
		sold: 23,
		Icon: SpeakerIcon,
		iconBg: "bg-linear-to-br from-emerald-50 to-teal-100",
		iconColor: "text-emerald-400",
	},
	{
		id: "6",
		name: "USB-C Hub 7-in-1",
		sku: "TV-HB-015",
		variants: 1,
		status: "out_of_stock",
		inventory: 0,
		price: "$34.99",
		category: "Electronics",
		sold: 45,
		Icon: ZapIcon,
		iconBg: "bg-linear-to-br from-amber-50 to-orange-100",
		iconColor: "text-amber-400",
	},
	{
		id: "7",
		name: "Laptop Stand — Ergonomic Aluminum",
		sku: "TV-LS-022",
		variants: 1,
		status: "draft",
		inventory: null,
		price: "$69.99",
		category: "Electronics",
		sold: null,
		Icon: LaptopIcon,
		iconBg: "bg-linear-to-br from-rose-50 to-pink-100",
		iconColor: "text-rose-400",
	},
	{
		id: "8",
		name: "Wireless Charging Pad — 15W",
		sku: "TV-WC-030",
		variants: 2,
		status: "draft",
		inventory: null,
		price: "$24.99",
		category: "Phone Accessories",
		sold: null,
		Icon: WifiIcon,
		iconBg: "bg-linear-to-br from-indigo-50 to-blue-100",
		iconColor: "text-indigo-400",
	},
];

const PRODUCT_STATUS_TABS = [
	{ label: "All", value: "all", count: 342 },
	{ label: "Active", value: "active", count: 298 },
	{ label: "Draft", value: "draft", count: 37 },
	{ label: "Archived", value: "archived", count: 7 },
];

export const MerchantProductsScreen = () => {
	const [activeTab, setActiveTab] = createSignal("all");

	return (
		<>
			<AdminHeader
				title="Products"
				description="Manage your product catalog — 342 products total."
				actions={[
					{
						label: "Export",
						variant: "default",
						Icon: UploadIcon,
						onClick: () => {},
					},
					{
						label: "Import",
						variant: "default",
						Icon: DownloadIcon,
						onClick: () => {},
					},
					{
						label: "Add Product",
						variant: "primary",
						Icon: TagIcon,
						onClick: () => {},
					},
				]}
			/>

			<div class="space-y-6">
				<Grid4>
					<StatCard
						Icon={PackageIcon}
						value={342}
						label="Total Products"
						color="brand"
					/>
					<StatCard
						Icon={CircleCheckIcon}
						value={298}
						label="Active"
						color="emerald"
					/>
					<StatCard Icon={ZapIcon} value={7} label="Low Stock" color="amber" />
					<StatCard Icon={Pencil} value={37} label="Drafts" color="gray" />
				</Grid4>

				<DataTableRoot>
					<DataTableSearchBar
						placeholder="Search products by name, SKU, or tag..."
						filters={[
							{
								label: "All Status",
								options: [
									{ label: "All Status", value: "all_status" },
									{ label: "Active", value: "active" },
									{ label: "Draft", value: "draft" },
									{ label: "Archived", value: "archived" },
								],
							},
							{
								label: "All Categories",
								options: [
									{ label: "All Categories", value: "all_categories" },
									{ label: "Headphones & Audio", value: "headphones_audio" },
									{ label: "Monitors", value: "monitors" },
									{ label: "Phone Accessories", value: "phone_accessories" },
									{ label: "Keyboards", value: "keyboards" },
									{ label: "Speakers", value: "speakers" },
								],
							},
							{
								label: "All Stock",
								options: [
									{ label: "All Stock", value: "all_stock" },
									{ label: "In Stock", value: "in_stock" },
									{ label: "Low Stock", value: "low_stock" },
									{ label: "Out of Stock", value: "out_of_stock" },
								],
							},
						]}
					/>

					<DataTableStatusTabs
						tabs={PRODUCT_STATUS_TABS}
						activeTab={activeTab()}
						onTabChange={setActiveTab}
					/>

					<DataTableBulkBar
						actions={[
							{ label: "Edit Selected" },
							{ label: "Delete", danger: true },
							{ label: "Archive" },
						]}
						sortOptions={[
							"Newest First",
							"Oldest First",
							"Price: Low to High",
							"Price: High to Low",
							"Best Selling",
							"Name A-Z",
						]}
					/>

					<DataTable
						columns={[
							{ label: "", width: "w-10" },
							{ label: "Product" },
							{ label: "Status" },
							{ label: "Inventory", hideBelow: "md" },
							{ label: "Price" },
							{ label: "Category", hideBelow: "lg" },
							{ label: "Sales", hideBelow: "lg" },
							{ label: "Actions", align: "right" },
						]}
					>
						<For each={PRODUCTS}>
							{(product) => <ProductRow product={product} />}
						</For>
					</DataTable>

					<DataTableFooter
						from={1}
						to={8}
						total={342}
						unit="products"
						lastPage={43}
					/>
				</DataTableRoot>
			</div>
		</>
	);
};
