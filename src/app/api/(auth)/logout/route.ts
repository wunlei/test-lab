import { requestHandler } from "@/lib/api/requestHandler";
import { serverLogout } from "@/lib/api/server/auth";

export async function DELETE() {
  const request = await requestHandler(() => serverLogout());

  const cookieKey = process.env.SESSION_COOKIE_KEY;

  if (cookieKey) {
    request.cookies.delete(cookieKey);
  }

  return request;
}
