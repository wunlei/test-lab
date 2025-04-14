import { BASE_URL, serverOptions } from "@/lib/api/server/config";
import { ENDPOINTS } from "@/lib/api/server/constants";
import { GetUserParams } from "@/lib/api/server/user.types";

export function getCurrentUser({ cookie }: GetUserParams) {
  const url = `${BASE_URL}${ENDPOINTS.currentUser.mask}`;

  const options = {
    ...serverOptions,
    headers: {
      ...serverOptions.headers,
      Cookie: cookie,
    },
    method: "GET",
  };

  return fetch(url, options);
}
