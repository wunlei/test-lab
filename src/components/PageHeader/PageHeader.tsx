import { clsx as c } from "clsx";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { APP_ROUTES } from "@/lib/app";
import { verifySession } from "@/lib/app/verifySession";
import s from "./PageHeader.module.scss";

async function PageHeader() {
  const session = await verifySession();

  return (
    <header className={s.header}>
      <Link className={c(s.wrapper, s.link)} href={APP_ROUTES.main.mask}>
        <Logo />
        <Typography>TestLab</Typography>
      </Link>
      {session ? (
        <Link href={APP_ROUTES.logout.mask}>
          <Button variant="ghost">Log out</Button>
        </Link>
      ) : (
        <div className={s.wrapper}>
          <Link href={APP_ROUTES.signup.mask}>
            <Button variant="outline">Sign up</Button>
          </Link>
          <Link href={APP_ROUTES.login.mask}>
            <Button variant="ghost">Log in</Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default PageHeader;
