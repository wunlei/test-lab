import PageHeader from "@/components/PageHeader";
import s from "./layout.module.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader />
      <main className={s.main}>{children}</main>
    </>
  );
}
