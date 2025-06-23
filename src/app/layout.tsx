import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootProvider from "@/providers/RootProvider";
import "@/styles/normalize.scss";
import "@/styles/index.scss";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test lab",
  description: "",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
