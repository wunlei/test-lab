const BASE_URL = "/api";

export function fetchProxy<T>(pathname: string) {
  const path = BASE_URL + pathname;
  return {
    get: () =>
      fetch(path, {
        method: "GET",
      }),
    post: (body: T) =>
      fetch(path, {
        method: "POST",
        body: JSON.stringify(body),
      }),
    patch: (body: T) =>
      fetch(path, {
        method: "PATCH",
        body: JSON.stringify(body),
      }),
    delete: () =>
      fetch(path, {
        method: "DELETE",
      }),
  };
}
