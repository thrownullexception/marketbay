import { Link } from "@tanstack/solid-router";
import {
  BellIcon,
  ChevronDownIcon,
  MessagesSquare,
  ShoppingCartIcon,
  User,
} from "lucide-solid";
import { Show } from "solid-js";
import { Categories } from "@/schemas/category";
import type { StoreIdHash } from "@/server/modules/stores/stores/types";
import { createMerchantQuery, createShopQuery } from "@/shared/treaty";
import { getInitials } from "@/shared/utils/strings";
import { LogoHeader } from "./logo";
import { SearchInput } from "./search-input";
import type { LayoutVariant } from "./types";


const MerchantStoreBadge = () => {
  const store = createMerchantQuery((t) => t.stores.details.get(), {
    name: "",
    slug: "",
    isVerified: false,
    email: "",
    phone: null,
    website: null,
    instagram: null,
    twitter: null,
    description: "",
    createdAt: new Date(),
    primaryCategoryId: Categories.Electronics,
    secondaryCategoryId: null,
    tagline: null,
    logoUrl: null,
    coverUrl: null,
    followersCount: 0,
    avgRating: "0.0",
    ratingsCount: 0,
    productsCount: 0,
    id: "" as StoreIdHash,
  });

  return (
    <div class="hidden sm:flex items-center gap-2 pl-2 border-l border-gray-200 ml-1">
      <div class="w-8 h-8 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
        {store.data?.name ? getInitials(store.data.name) : ""}
      </div>
      <div class="text-left">
        <p class="text-sm font-semibold text-gray-900 leading-tight">
          {store.data?.name}
        </p>
        <p class="text-[10px] text-gray-400 leading-tight">Seller Account</p>
      </div>
      <ChevronDownIcon class="w-4 h-4 text-gray-400" />
    </div>
  );
};

const BuyerUserBadge = () => {
  const user = createShopQuery((t) => t.auth.me.get(), null);

  return (
    <Show
      when={user.data}
      fallback={
        <Link
          to="/login"
          class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-600 transition"
        >
          <User class="w-5 h-5" />
          Sign In
        </Link>
      }
    >
      {(u) => (
        <div class="hidden sm:flex items-center gap-2 pl-2 border-l border-gray-200 ml-1">
          <div class="w-8 h-8 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
            {getInitials(`${u().firstName} ${u().lastName}`)}
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900 leading-tight">
              {u().firstName} {u().lastName.charAt(0).toUpperCase()}.
            </p>
          </div>
          <ChevronDownIcon class="w-4 h-4 text-gray-400" />
        </div>
      )}
    </Show>
  );
};

export const MainNav = (props: { variant: LayoutVariant }) => {
  return (
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <LogoHeader from={props.variant} />

        <div
          class={
            props.variant === "merchant"
              ? "flex-1 max-w-xl mx-auto hidden sm:block"
              : "flex-1 max-w-2xl mx-auto"
          }
        >
          <SearchInput
            placeholder={
              props.variant === "merchant"
                ? "Search orders, products, customers..."
                : "Search products, stores, brands..."
            }
          />
        </div>

        <div class="flex items-center gap-3">
          {props.variant === "merchant" ? (
            <>
              <Link
                to={"/notifications" as never}
                class="relative p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Notifications"
              >
                <BellIcon class="w-5 h-5 text-gray-600" />
                <span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  4
                </span>
              </Link>
              <Link
                to="/chat"
                class="relative p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Messages"
              >
                <MessagesSquare class="w-5 h-5 text-gray-600" />
                <span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  6
                </span>
              </Link>
              <MerchantStoreBadge />
            </>
          ) : (
            <>
              <Link
                class="relative p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Messages"
                to="/chat"
              >
                <MessagesSquare class="w-5 h-5 text-gray-600" />
                <span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  2
                </span>
              </Link>
              <Link
                to="/cart"
                class="relative p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ShoppingCartIcon class="w-5 h-5 text-gray-600" />
                <span class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  3
                </span>
              </Link>
              <BuyerUserBadge />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
