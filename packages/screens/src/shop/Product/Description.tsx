import { CircleCheckIcon } from "lucide-solid";
import { For } from "solid-js";

const FEATURES = [
	"Active Noise Cancellation with transparency mode",
	"40mm custom neodymium drivers for rich, detailed audio",
	"35-hour battery — 5 min charge = 3 hours playback",
	"Bluetooth 5.3 with multipoint (connect 2 devices)",
	"Foldable design with premium carrying case included",
];

const SPECS: { label: string; value: string }[] = [
	{ label: "Driver Size", value: "40mm" },
	{ label: "Frequency", value: "20Hz – 40kHz" },
	{ label: "Battery", value: "35 hours" },
	{ label: "Bluetooth", value: "5.3" },
	{ label: "Weight", value: "254g" },
	{ label: "Charging", value: "USB-C" },
	{ label: "Noise Cancel", value: "Hybrid ANC" },
	{ label: "Colors", value: "4 options" },
];

export const ProductDescription = () => {
	return (
		<div class="mt-14 border-t border-gray-100 pt-10">
			<div class="grid lg:grid-cols-3 gap-10">
				<div class="lg:col-span-2 prose prose-sm prose-gray max-w-none">
					<h3 class="text-lg font-bold text-gray-900 mb-3">Product Details</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						Experience studio-quality audio with the Pro Studio Wireless
						Headphones. Featuring advanced Active Noise Cancellation (ANC), 40mm
						custom drivers, and up to 35 hours of battery life, these headphones
						are designed for audiophiles, commuters, and remote workers alike.
					</p>
					<p class="text-gray-600 leading-relaxed mb-6">
						The memory-foam ear cushions provide all-day comfort, while the
						foldable design makes them easy to carry anywhere. Bluetooth 5.3
						ensures a stable, lag-free connection with any device.
					</p>

					<h4 class="text-base font-bold text-gray-900 mb-3">Key Features</h4>
					<ul class="space-y-2.5 mb-6">
						<For each={FEATURES}>
							{(feature) => (
								<li class="flex items-start gap-2 text-sm text-gray-600">
									<CircleCheckIcon class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
									<span>{feature}</span>
								</li>
							)}
						</For>
					</ul>
				</div>

				<div class="bg-gray-50 rounded-2xl p-6">
					<h4 class="text-sm font-bold text-gray-900 mb-4">Specifications</h4>
					<dl class="space-y-3 text-sm">
						<For each={SPECS}>
							{(spec, i) => (
								<>
									{i() > 0 && <hr class="border-gray-200" />}
									<div class="flex justify-between">
										<dt class="text-gray-500">{spec.label}</dt>
										<dd class="font-medium text-gray-900">{spec.value}</dd>
									</div>
								</>
							)}
						</For>
					</dl>
				</div>
			</div>
		</div>
	);
};
