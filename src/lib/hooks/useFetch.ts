import { useCallback, useState } from "react";
import fetchWrapper, { ResponseState } from "@/utils/fetchWrapper";

type FetcherFunction<TParams, _TResponse> = (
  params: TParams,
) => Promise<Response>;

type ResponseStateType<T> = Omit<ResponseState<T>, "response">;

function useFetch<TParams = void, TResponse = unknown>(
  fetcher: FetcherFunction<TParams, TResponse>,
) {
  const [state, setState] = useState<ResponseStateType<TResponse>>({
    status: "idle",
    errorMsg: null,
    data: null,
  });

  const callFetcher = useCallback(
    async (params: TParams): Promise<Response | null> => {
      setState({ status: "loading", errorMsg: null, data: null });

      const { data, errorMsg, response, status } =
        await fetchWrapper<TResponse>(() => fetcher(params));

      setState({
        status,
        errorMsg,
        data,
      });
      return response;
    },
    [fetcher],
  );

  const reset = useCallback(() => {
    setState({ status: "idle", errorMsg: null, data: null });
  }, []);

  return {
    call: callFetcher,
    data: state.data,
    status: state.status,
    errorMsg: state.errorMsg,
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    isIdle: state.status === "idle",
    reset,
  };
}

export default useFetch;
