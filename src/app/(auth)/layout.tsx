import s from "./layout.module.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={s.main}>{children}</main>;
}
