import { PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/api/server/user";
import { GetUserResponse } from "@/lib/api/server/user.types";
import AuthProvider from "@/providers/AuthProvider";
import fetchWrapper from "@/utils";

async function RootProvider({ children }: PropsWithChildren) {
  const cookieStore = await cookies();

  const user = await fetchWrapper<GetUserResponse>(() =>
    getCurrentUser({ cookie: cookieStore.toString() }),
  );

  return <AuthProvider init={user.data?.is_admin}>{children}</AuthProvider>;
}

export default RootProvider;
