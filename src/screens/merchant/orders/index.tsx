import {
  HeadphonesIcon,
  MonitorIcon,
  PackageIcon,
  PlusIcon,
  RotateCcwIcon,
  SpeakerIcon,
  TruckIcon,
  UploadIcon,
} from "lucide-solid";
import { createSignal, For } from "solid-js";
import { OrderStatus, PaymentStatus } from "@/schemas/order";
import { AdminHeader } from "@/ui/admin-header";
import { Alert } from "@/ui/alert";
import { DataTableBulkBar } from "@/ui/data-table/bulk-bar";
import { DataTableFooter } from "@/ui/data-table/footer";
import { DataTableRoot } from "@/ui/data-table/root";
import { DataTableSearchBar } from "@/ui/data-table/search-bar";
import { DataTableStatusTabs } from "@/ui/data-table/status-tabs";
import { DataTable } from "@/ui/data-table/table";
import { Grid5 } from "@/ui/grid";
import { StatCard } from "@/ui/stat-card";
import { OrderRow } from "./OrderRow";
import type { MerchantOrder } from "./types";

const ORDERS: MerchantOrder[] = [
  {
    id: "MB-30312",
    date: "Today, 2:14 PM",
    customer: {
      name: "Emily Martinez",
      email: "emily.m@email.com",
      initials: "EM",
      avatarBg: "bg-rose-100",
      avatarText: "text-rose-600",
    },
    item: {
      kind: "single",
      name: "Pro Studio Headphones",
      detail: "Qty: 1 · Matte Black",
      Icon: HeadphonesIcon,
      iconBg: "bg-linear-to-br from-blue-50 to-indigo-100",
      iconColor: "text-brand-300",
    },
    total: "$59.99",
    status: OrderStatus.Pending,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30310",
    date: "Today, 1:47 PM",
    customer: {
      name: "David Lee",
      email: "d.lee@email.com",
      initials: "DL",
      avatarBg: "bg-sky-100",
      avatarText: "text-sky-600",
    },
    item: {
      kind: "single",
      name: "Mechanical Keyboard",
      detail: "Qty: 2 · Blue Switch",
      Icon: MonitorIcon,
      iconBg: "bg-linear-to-br from-cyan-50 to-sky-100",
      iconColor: "text-cyan-300",
    },
    total: "$179.98",
    status: OrderStatus.Pending,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30305",
    date: "Today, 10:22 AM",
    customer: {
      name: "Nina Patel",
      email: "nina.p@email.com",
      initials: "NP",
      avatarBg: "bg-violet-100",
      avatarText: "text-violet-600",
    },
    item: {
      kind: "multiple",
      count: 2,
      summary: "Headphones + Case",
    },
    total: "$79.98",
    status: OrderStatus.Processing,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30298",
    date: "Today, 11:30 AM",
    customer: {
      name: "Alex Watts",
      email: "alex.w@email.com",
      initials: "AW",
      avatarBg: "bg-brand-100",
      avatarText: "text-brand-600",
    },
    item: {
      kind: "single",
      name: "Pro Studio Headphones",
      detail: "Qty: 1 · Navy Blue",
      Icon: HeadphonesIcon,
      iconBg: "bg-linear-to-br from-blue-50 to-indigo-100",
      iconColor: "text-brand-300",
    },
    total: "$59.99",
    status: OrderStatus.Shipped,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30285",
    date: "Yesterday",
    customer: {
      name: "Jason Kim",
      email: "jason.k@email.com",
      initials: "JK",
      avatarBg: "bg-emerald-100",
      avatarText: "text-emerald-600",
    },
    item: {
      kind: "single",
      name: 'Ultra HD 27" Monitor',
      detail: 'Qty: 1 · 27"',
      Icon: MonitorIcon,
      iconBg: "bg-linear-to-br from-slate-50 to-gray-100",
      iconColor: "text-gray-300",
    },
    total: "$299.00",
    status: OrderStatus.Shipped,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30264",
    date: "Yesterday",
    customer: {
      name: "Lisa Song",
      email: "lisa.s@email.com",
      initials: "LS",
      avatarBg: "bg-violet-100",
      avatarText: "text-violet-600",
    },
    item: {
      kind: "multiple",
      count: 2,
      summary: "Case + Keyboard",
    },
    total: "$109.98",
    status: OrderStatus.Delivered,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30251",
    date: "Feb 25",
    customer: {
      name: "Ryan Davis",
      email: "ryan.d@email.com",
      initials: "RD",
      avatarBg: "bg-amber-100",
      avatarText: "text-amber-600",
    },
    item: {
      kind: "single",
      name: "Bluetooth Speaker",
      detail: "Qty: 1 · Black",
      Icon: SpeakerIcon,
      iconBg: "bg-linear-to-br from-emerald-50 to-teal-100",
      iconColor: "text-emerald-300",
    },
    total: "$49.99",
    status: OrderStatus.Delivered,
    payment: PaymentStatus.Paid,
  },
  {
    id: "MB-30189",
    date: "Feb 22",
    customer: {
      name: "Claire Wu",
      email: "claire.wu@email.com",
      initials: "CW",
      avatarBg: "bg-pink-100",
      avatarText: "text-pink-600",
    },
    item: {
      kind: "single",
      name: "Pro Studio Headphones",
      detail: "Return requested",
      Icon: HeadphonesIcon,
      iconBg: "bg-linear-to-br from-blue-50 to-indigo-100",
      iconColor: "text-brand-300",
    },
    total: "$59.99",
    status: OrderStatus.Return,
    payment: PaymentStatus.Refunded,
  },
];

const ORDER_STATUS_TABS = [
  { label: "All", value: "all", count: 186 },
  {
    label: "Pending",
    value: "pending",
    count: 8,
    countColor: "text-amber-500",
  },
  { label: "Processing", value: "processing", count: 3 },
  { label: "Shipped", value: "shipped", count: 12 },
  { label: "Delivered", value: "delivered", count: 165 },
  { label: "Cancelled", value: "cancelled", count: 2 },
  {
    label: "Returns",
    value: "return",
    count: 1,
    countColor: "text-red-400",
  },
];

export const MerchantOrdersScreen = () => {
  const [activeTab, setActiveTab] = createSignal("all");

  return (
    <>
      <AdminHeader
        title="Orders"
        description="Track and manage your customer orders."
        actions={[
          {
            label: "Export",
            variant: "default",
            Icon: UploadIcon,
            onClick: () => {},
          },
          {
            label: "Create Order",
            variant: "primary",
            Icon: PlusIcon,
            onClick: () => {},
          },
        ]}
      />
      <div class="space-y-6">
        <Alert
          variant="warning"
          title="3 orders need your attention"
          description="2 pending orders awaiting processing · 1 return request to review"
          action={{ label: "Review Now", onClick: () => {} }}
        />

        <Grid5>
          <StatCard
            Icon={PackageIcon}
            value={186}
            label="Total"
            color="brand"
          />
          <StatCard
            Icon={PackageIcon}
            value={8}
            label="Pending"
            color="amber"
          />
          <StatCard Icon={TruckIcon} value={12} label="Shipped" color="blue" />
          <StatCard
            Icon={PackageIcon}
            value={165}
            label="Delivered"
            color="emerald"
          />
          <StatCard
            Icon={RotateCcwIcon}
            value={1}
            label="Returns"
            color="red"
          />
        </Grid5>

        <DataTableRoot>
          <DataTableSearchBar
            placeholder="Search by order ID, customer, or product..."
            filters={[
              {
                label: "All Time",
                options: [
                  { label: "All Time", value: "all_time" },
                  { label: "Today", value: "today" },
                  { label: "Last 7 Days", value: "last_7_days" },
                  { label: "Last 30 Days", value: "last_30_days" },
                  { label: "This Month", value: "this_month" },
                  { label: "Last Month", value: "last_month" },
                ],
              },
              {
                label: "All Payment",
                options: [
                  { label: "All Payment", value: "all" },
                  { label: "Paid", value: "paid" },
                  { label: "Pending Payment", value: "pending_payment" },
                  { label: "Refunded", value: "refunded" },
                ],
              },
            ]}
          />

          <DataTableStatusTabs
            tabs={ORDER_STATUS_TABS}
            activeTab={activeTab()}
            onTabChange={setActiveTab}
          />

          <DataTableBulkBar
            actions={[{ label: "Print Labels" }, { label: "Mark Shipped" }]}
            sortOptions={[
              "Newest First",
              "Oldest First",
              "Total: High to Low",
              "Total: Low to High",
            ]}
          />

          <DataTable
            columns={[
              { label: "", width: "w-10" },
              { label: "Order" },
              { label: "Customer" },
              { label: "Items", hideBelow: "md" },
              { label: "Total" },
              { label: "Status" },
              { label: "Payment", hideBelow: "lg" },
              { label: "Actions", align: "right" },
            ]}
          >
            <For each={ORDERS}>{(order) => <OrderRow order={order} />}</For>
          </DataTable>

          <DataTableFooter
            from={1}
            to={8}
            total={186}
            unit="orders"
            lastPage={24}
          />
        </DataTableRoot>
      </div>
    </>
  );
};
