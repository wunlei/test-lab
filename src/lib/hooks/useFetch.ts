import { useCallback, useState } from "react";

type FetcherFunction<TParams, _TResponse> = (
  params: TParams,
) => Promise<Response>;

type Status = "idle" | "loading" | "error" | "success";

interface ResponseState<T> {
  status: Status;
  errorMsg: string | null;
  data: T | null;
}

function useFetch<TParams = void, TResponse = unknown>(
  fetcher: FetcherFunction<TParams, TResponse>,
) {
  const [state, setState] = useState<ResponseState<TResponse>>({
    status: "idle",
    errorMsg: null,
    data: null,
  });

  const callFetcher = useCallback(
    async (params: TParams): Promise<Response | null> => {
      setState({ status: "loading", errorMsg: null, data: null });

      try {
        const response = await fetcher(params);
        const json = await response.json().catch(() => null);

        if (!response.ok) {
          const errorMessage =
            json?.error ||
            response.statusText ||
            `Request failed with status: ${response.status}`;

          setState({
            status: "error",
            errorMsg: errorMessage || "An error occurred. Try again later",
            data: json,
          });
        } else {
          setState({ status: "success", errorMsg: null, data: json });
        }

        return response;
      } catch (error) {
        setState({
          status: "error",
          errorMsg:
            error instanceof Error
              ? error.message
              : "Network error or unexpected failure",
          data: null,
        });

        return null;
      }
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
