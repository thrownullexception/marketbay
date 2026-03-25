import { Link } from "@tanstack/solid-router";

const LogoIcon = (props: { class?: string }) => (
  <svg
    class={`text-white ${props.class ?? ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export const LogoHeader = (props: {
  class?: string;
  from: "merchant" | "buyer";
}) => (
  <Link
    to={props.from === "merchant" ? "/merchant" : "/"}
    class={`shrink-0 flex items-center gap-2 ${props.class ?? ""}`}
  >
    <div class="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center">
      <LogoIcon class="w-5 h-5" />
    </div>
    <span class="text-xl font-extrabold text-brand-950 tracking-tight">
      Market<span class="text-brand-600">Bay</span>
    </span>
  </Link>
);

export const LogoFooter = (props: {
  class?: string;
  from: "merchant" | "buyer";
}) => (
  <Link
    to={props.from === "merchant" ? "/merchant" : "/"}
    class={`flex items-center gap-2 ${props.class ?? ""}`}
  >
    <div class="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
      <LogoIcon class="w-4 h-4" />
    </div>
    <span class="text-lg font-extrabold text-white tracking-tight">
      Market<span class="text-brand-400">Bay</span>
    </span>
  </Link>
);
