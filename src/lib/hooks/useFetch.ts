import { useCallback, useState } from "react";

type FetcherFunction<TParams, _TResponse> = (
  params: TParams,
) => Promise<Response>;

type Status = "idle" | "loading" | "error" | "success";

interface StatusState {
  status: Status;
  errorMsg: string | null;
}

function useFetch<TParams = void, TResponse = unknown>(
  fetcher: FetcherFunction<TParams, TResponse>,
) {
  const [state, setState] = useState<StatusState>({
    status: "idle",
    errorMsg: null,
  });
  const [data, setData] = useState<TResponse | null>(null);

  const callApi = useCallback(
    async (params: TParams): Promise<Response | null> => {
      setState({ status: "loading", errorMsg: null });

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
          });
        } else {
          setState({ status: "success", errorMsg: null });
          setData(json);
        }

        return response;
      } catch (error) {
        setState({
          status: "error",
          errorMsg:
            error instanceof Error
              ? error.message
              : "Network error or unexpected failure",
        });

        return null;
      }
    },
    [fetcher],
  );

  const reset = useCallback(() => {
    setState({ status: "idle", errorMsg: null });
    setData(null);
  }, []);

  return {
    call: callApi,
    data,
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
