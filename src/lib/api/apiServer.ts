import { ENDPOINTS, LoginBody, SignInBody } from "@/lib/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is undefined");
}

const scopeKey = process.env.SCOPE_KEY;

if (!scopeKey) {
  throw new Error("SCOPE_KEY is undefined");
}

const serverOptions: RequestInit = {
  headers: {
    "scope-key": scopeKey,
  },
  credentials: "include",
};

const serverOptionsJSON: RequestInit = {
  ...serverOptions,
  headers: {
    ...serverOptions.headers,
    "Content-Type": "application/json",
  },
};

export function serverSignin(body: SignInBody) {
  const url = `${BASE_URL}${ENDPOINTS.signup.mask}`;
  const options = {
    ...serverOptionsJSON,
    method: "POST",
    body: JSON.stringify(body),
  };

  return fetch(url, options);
}

export function serverLogin(body: LoginBody) {
  const url = `${BASE_URL}${ENDPOINTS.signin.mask}`;

  const options = {
    ...serverOptionsJSON,
    method: "POST",
    body: JSON.stringify(body),
  };
  return fetch(url, options);
}

export function serverLogout() {
  const url = `${BASE_URL}${ENDPOINTS.logout.mask}`;

  const options = {
    ...serverOptions,
    method: "DELETE",
  };

  return fetch(url, options);
}
