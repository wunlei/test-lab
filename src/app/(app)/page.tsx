import { clsx as c } from "clsx";
import Link from "next/link";
import MainSvg from "@/assets/main.svg";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { APP_ROUTES } from "@/lib/app";
import s from "./page.module.scss";

export default async function Home() {
  return (
    <main className={c(s.main)}>
      <div className={s.container}>
        <MainSvg className={s.svg} />
        <div>
          <Typography block className={s.title} tag="h1">
            Create and take tests
          </Typography>
          <Typography block className={s.subtitle}>
            in one place
          </Typography>
        </div>
        <Typography className={s.text} size="l">
          Build custom tests or challenge yourself anytime
        </Typography>
        <Link href={APP_ROUTES.tests.mask}>
          <Button size="l">Let&apos;s start</Button>
        </Link>
      </div>
    </main>
  );
}
