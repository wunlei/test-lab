import "server-only";
import { cookies } from "next/headers";

export const verifySession = async () => {
  const cookieKey = process.env.SESSION_COOKIE_KEY;

  if (!cookieKey) {
    throw new Error("SESSION_COOKIE_KEY is undefined");
  }

  const cookie = (await cookies()).get(cookieKey)?.value;

  if (!cookie) {
    return false;
  }

  return true;
};
