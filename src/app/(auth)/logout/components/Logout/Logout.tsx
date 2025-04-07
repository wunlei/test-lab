"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchProxy } from "@/lib/api/fetchProxy";
import { APP_ROUTES } from "@/lib/app";
import useFetch from "@/lib/hooks";

export default function Logout() {
  const router = useRouter();

  const fetcher = useCallback(() => fetchProxy("/logout").delete(), []);

  const { call, isSuccess, isError, errorMsg } = useFetch(fetcher);

  useEffect(() => {
    call();
  }, [call]);

  useEffect(() => {
    if (isSuccess) {
      router.push(APP_ROUTES.main.mask);
    }
  }, [isSuccess, router]);

  return <div>{isError && errorMsg}</div>;
}
