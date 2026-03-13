export const Divider = () => {
	return <hr class="my-6 border-gray-100" />;
};

export const DividerText = (props: { text: string }) => {
	return (
		<div class="relative mb-4">
			<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-gray-100"></div>
			</div>
			<div class="relative flex justify-center">
				<span class="bg-white px-3 text-xs text-gray-400 font-medium">
					{props.text}
				</span>
			</div>
		</div>
	);
};
