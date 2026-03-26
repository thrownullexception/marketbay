import type { Treaty } from "@elysiajs/eden";
import {
	type QueryKey,
	useMutation,
	useQueryClient,
} from "@tanstack/solid-query";
import { useNavigate } from "@tanstack/solid-router";
import { toast } from "solid-sonner";

type TreatyError = {
	status: number;
	value: {
		error: string;
		code: number;
		data?: Record<string, unknown>;
	};
};

type MutationOptions<TRequestResponse, E extends TreatyError, Variables, S> = {
	endpoints: QueryKey[];
	mutationFn: (variables: Variables) => Promise<TRequestResponse>;
	redirect?: {
		to: string;
		params?: Record<string, string>;
	};
	optimistic?: {
		queryKey: QueryKey;
		onMutate: (oldData: S | undefined, variables: Variables) => S;
	};
	toastErrorStrategy?: ToastErrorStrategy;
	onSuccessAction?: (response: TRequestResponse, variables: Variables) => void;
	onErrorAction?: (error: E, variables: Variables) => void;
	onSuccessMessage?: (
		response: TRequestResponse,
		variables: Variables,
	) => string;
};

function useApiMutate<T>(queryKey?: QueryKey) {
	const queryClient = useQueryClient();

	if (!queryKey) {
		return undefined;
	}

	return {
		set: async (mutateOldData: (oldData: T | undefined) => T) => {
			await queryClient.cancelQueries({ queryKey });
			const previousData = queryClient.getQueryData<T>(queryKey);
			queryClient.setQueryData<T>(queryKey, mutateOldData);
			return previousData as T;
		},
		invalidate: () => {
			void queryClient.invalidateQueries({ queryKey });
		},
		reset: (previousData: T | undefined) => {
			queryClient.setQueryData(queryKey, previousData);
		},
	};
}

// export function useMutationOptions<
// 	TRequestResponse,
// 	TError extends Error,
// 	TVariables,
// 	TMutationData,
// >(
// 	options: MutationOptions<TRequestResponse, TError, TVariables, TMutationData>,
// ): UseMutationResult<TRequestResponse, TError, TVariables, TMutationData> {
// 	const navigate = useNavigate();
// 	const queryClient = useQueryClient();

// 	// toastNetworkError: true,

// 	const apiMutate = useApiMutate<TMutationData>(options.optimistic?.queryKey);

// 	return ({

// 		// ...options,
// 		// mutationFn: options.call,
// 		// onSuccess: (
// 		// 	requestResponse: TRequestResponse,
// 		// 	formVariables: TVariables,
// 		// ) => {
// 		// 	options.endpoints.forEach((queryKey) => {
// 		// 		void queryClient.invalidateQueries({
// 		// 			queryKey,
// 		// 		});
// 		// 	});

// 		// 	if (options.onSuccessMessage) {
// 		// 		toast.success(options.onSuccessMessage(requestResponse, formVariables));
// 		// 	}

// 		// 	if (options.onSuccessAction) {
// 		// 		options.onSuccessAction(requestResponse, formVariables);
// 		// 	}

// 		// 	if (options.redirect) {
// 		// 		navigate(options.redirect);
// 		// 	}
// 		// },
// 		// onMutate: async (formData: TVariables): Promise<TMutationData> => {
// 		// 	const { optimistic } = options;
// 		// 	if (optimistic && apiMutate) {
// 		// 		return apiMutate.set((oldData) =>
// 		// 			optimistic.onMutate(oldData, formData),
// 		// 		) as TMutationData;
// 		// 	}
// 		// 	return undefined as TMutationData;
// 		// },
// 		// onSettled: () => {
// 		// 	apiMutate?.invalidate();
// 		// },
// 		// onError: (
// 		// 	error: TError,
// 		// 	formVariables: TVariables,
// 		// 	oldData: TMutationData | undefined,
// 		// ) => {
// 		// 	apiMutate?.reset(oldData);
// 		// 	options.onErrorAction?.(error, formVariables);
// 		// 	handleError(error, options.toastErrorStrategy);
// 		// },
// 	});
// }

const handleError = (
	error: TreatyError,
	strategy:
		| ToastErrorStrategy
		| undefined = ToastErrorStrategyType.ExtractMessage,
) => {
	if (strategy === ToastErrorStrategyType.None) {
		return;
	}

	if (strategy === ToastErrorStrategyType.ExtractMessage) {
		console.error(JSON.stringify(error, null, 2));
		return error.value.error;
	}

	if (strategy === ToastErrorStrategyType.DefaultMessage) {
		return "An error occurred. Please try again.";
	}

	return strategy.message;
};

export enum ToastErrorStrategyType {
	ExtractMessage = "extractMessage",
	DefaultMessage = "defaultMessage",
	None = "none",
}

type ToastErrorStrategy =
	| typeof ToastErrorStrategyType.ExtractMessage
	| typeof ToastErrorStrategyType.DefaultMessage
	| typeof ToastErrorStrategyType.None
	| {
			message: string;
			variant: "success" | "error" | "warning" | "info";
	  };

export function useTreatyMutation<
	A extends Treaty.TreatyResponse<Record<number, unknown>>,
	E extends TreatyError,
	Variables,
	S,
>(options: () => MutationOptions<A, E, Variables, S>) {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { optimistic, toastErrorStrategy } = options();

	const apiMutate = useApiMutate<S>(optimistic?.queryKey);

	return useMutation<A, E, Variables, S>(() => {
		const opts = options();
		return {
			...opts,
			mutationFn: (v: Variables) => opts.mutationFn(v),
			onSuccess: (requestResponse: A, formVariables: Variables) => {
				opts.endpoints.forEach((queryKey) => {
					void queryClient.invalidateQueries({
						queryKey,
					});
				});

				if (opts.onSuccessMessage) {
					toast.success(opts.onSuccessMessage(requestResponse, formVariables));
				}

				if (opts.onSuccessAction) {
					opts.onSuccessAction(requestResponse, formVariables);
				}

				if (opts.redirect) {
					navigate(opts.redirect);
				}
			},
			onMutate:
				optimistic && apiMutate
					? (formData: Variables) => {
							return apiMutate.set((oldData) =>
								optimistic.onMutate(oldData, formData),
							);
						}
					: undefined,
			onSettled: () => {
				apiMutate?.invalidate();
			},
			onError: (error: E, formVariables, oldData: S | undefined) => {
				apiMutate?.reset(oldData);
				opts.onErrorAction?.(error, formVariables);
				const errorMessage = handleError(error, toastErrorStrategy);
				if (errorMessage) {
					console.error(errorMessage);
					toast.error(errorMessage);
				}
			},
		};
	});
}

// if (tagHandler) {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
//     tagHandler(error as any);
//   }

//   if (error._tag === "UnauthorizedError") {
//     logout();
//     return;
//   }

//   if (error._tag === "RequestError") {
//     if (toastNetworkError) {
//       toast({
//         message:
//           "Could not connect to the server. Please check your internet connection and try again.",
//         variant: "error",
//       });
//     }
//     return;
//   }

//   if (error._tag === "TooManyRequestsError") {
//     toast({
//       message: (error as unknown as TooManyRequestsError).message,
//       variant: "error",
//     });
//     return;
//   }
