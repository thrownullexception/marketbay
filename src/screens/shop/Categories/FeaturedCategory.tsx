import { Link } from "@tanstack/solid-router";
import { ArrowRightIcon, type LucideIcon } from "lucide-solid";

export const FeaturedCategory = (props: {
  label: string;
  slug: string;
  productCount: number;
  gradient: string;
  textColor: string;
  Icon: LucideIcon;
}) => {
  return (
    <Link
      to="/category/$categorySlug"
      params={{ categorySlug: "todo" }}
      class={`relative rounded-2xl overflow-hidden bg-linear-to-br ${props.gradient} min-h-[160px] flex items-end p-6 group cursor-pointer`}
    >
      <div class="absolute inset-0  opacity-80"></div>
      <div class="absolute top-5 right-5 opacity-20 group-hover:opacity-30 transition">
        <props.Icon stroke-width={1} class="w-24 h-24 text-white" />
      </div>
      <div class="relative">
        <h3 class="text-xl font-bold text-white">{props.label}</h3>
        <p class={`${props.textColor} text-sm mt-0.5`}>
          {props.productCount}+ products
        </p>
      </div>
      <ArrowRightIcon class="absolute right-5 bottom-5 w-5 h-5 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
    </Link>
  );
};
