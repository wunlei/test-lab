import { ENDPOINTS } from "@/lib/api/server/constants";
import { SignUpBody, LoginBody } from "@/lib/api/server/auth.types";
import {
  BASE_URL,
  serverOptionsJSON,
  serverOptions,
} from "@/lib/api/server/config";

export function serverSignUp(body: SignUpBody): Promise<Response> {
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
