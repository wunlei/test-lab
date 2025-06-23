"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { APP_ROUTES } from "@/lib/app";

type HeaderNavProps = {
  session: boolean;
};

function HeaderNav({ session }: HeaderNavProps) {
  const pathname = usePathname();

  if (
    pathname === APP_ROUTES.signup.mask ||
    pathname === APP_ROUTES.login.mask
  ) {
    return null;
  }

  if (session) {
    return (
      <Link href={APP_ROUTES.logout.mask}>
        <Button variant="ghost">Log out</Button>
      </Link>
    );
  }

  return (
    <>
      <Link href={APP_ROUTES.signup.mask}>
        <Button variant="outline">Sign up</Button>
      </Link>
      <Link href={APP_ROUTES.login.mask}>
        <Button variant="ghost">Log in</Button>
      </Link>
    </>
  );
}

export default HeaderNav;
