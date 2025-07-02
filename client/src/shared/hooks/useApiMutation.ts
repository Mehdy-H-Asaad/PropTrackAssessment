import { toast } from "sonner";
import {
	MutationKey,
	QueryClient,
	QueryKey,
	useMutation,
	UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { axiosClient } from "../api/axios";

type THTTPRequestMethod = "put" | "post" | "delete" | "patch";

type TApiError = {
	message: string;
	code: number;
};

type TUseApiMutation<TData, TVariables, TContext> = {
	mutationKey?: MutationKey;
	queryKey: QueryKey;
	axiosRequestMethod: THTTPRequestMethod;
	requestURL: string;
	axiosRequestConfig?: AxiosRequestConfig;
	successMsg: string;
} & Omit<
	UseMutationOptions<TData, TApiError, TVariables, TContext>,
	"mutationFn" | "mutationKey"
>;

const queryClient = new QueryClient();

export const useApiMutation = <TData, TVariables = void, TContext = unknown>({
	mutationKey,
	axiosRequestMethod,
	requestURL,
	axiosRequestConfig,
	successMsg,
	queryKey,
	...mutationOptions
}: TUseApiMutation<TData, TVariables, TContext>) => {
	const mutation = useMutation({
		mutationKey: mutationKey,
		mutationFn: async (values: TVariables) => {
			try {
				const { data } = await axiosClient[axiosRequestMethod](
					requestURL,
					values,
					axiosRequestConfig
				);

				return data;
			} catch (error: any) {
				console.log(error);

				const normalizedError: TApiError = {
					message:
						error?.response?.data?.detail ||
						error?.response?.data.error ||
						"Something went wrong.",
					code: error?.response?.code || 500,
				};
				throw normalizedError;
			}
		},
		...mutationOptions,
		onSuccess: (data, variables, context) => {
			queryClient.invalidateQueries({ queryKey: queryKey });
			toast.success(successMsg);
			mutationOptions?.onSuccess?.(data, variables, context);
		},
		onError: (error: any, variables, context) => {
			toast.error(error.message);
			mutationOptions?.onError?.(error, variables, context);
		},
	});

	return { ...mutation, queryClient };
};
