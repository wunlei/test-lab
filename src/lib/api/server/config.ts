export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is undefined");
}

const scopeKey = process.env.SCOPE_KEY;

if (!scopeKey) {
  throw new Error("SCOPE_KEY is undefined");
}

export const serverOptions: RequestInit = {
  headers: {
    "scope-key": scopeKey,
  },
  credentials: "include",
};

export const serverOptionsJSON: RequestInit = {
  ...serverOptions,
  headers: {
    ...serverOptions.headers,
    "Content-Type": "application/json",
  },
};
