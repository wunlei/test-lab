import { clsx as c } from "clsx";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import HeaderNav from "@/components/PageHeader/HeaderNav";
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
      <div className={s.wrapper}>
        <HeaderNav session={session} />
      </div>
    </header>
  );
}

export default PageHeader;
