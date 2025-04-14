import { LoginBody, SignUpBody } from "@/lib/api/server/auth.types";
import {
  BASE_URL,
  serverOptions,
  serverOptionsJSON,
} from "@/lib/api/server/config";
import { ENDPOINTS } from "@/lib/api/server/constants";

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
