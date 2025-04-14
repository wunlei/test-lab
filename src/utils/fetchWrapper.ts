type Status = "idle" | "loading" | "error" | "success";

export interface ResponseState<T> {
  status: Status;
  errorMsg: string | null;
  data: T | null;
  response: Response | null;
}

async function fetchWrapper<TResponse = unknown>(
  fetcher: () => Promise<Response>,
): Promise<ResponseState<TResponse>> {
  try {
    const response = await fetcher();
    const json = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMessage: string =
        json?.error ||
        response.statusText ||
        `Request failed with status: ${response.status}`;

      return {
        response,
        status: "error",
        errorMsg: errorMessage,
        data: null,
      };
    } else {
      return { response, status: "success", errorMsg: null, data: json };
    }
  } catch (error) {
    return {
      response: null,
      status: "error",
      errorMsg:
        (error instanceof Error && error.message) ||
        "Network error or unexpected failure",
      data: null,
    };
  }
}

export default fetchWrapper;
