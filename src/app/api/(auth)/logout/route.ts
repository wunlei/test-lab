import { requestHandler, serverLogout } from "@/lib/api";

export async function DELETE() {
  const request = await requestHandler(() => serverLogout());

  const cookieKey = process.env.SESSION_COOKIE_KEY;

  if (cookieKey) {
    request.cookies.delete(cookieKey);
  }

  return request;
}
