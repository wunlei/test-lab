import { PropsWithChildren } from "react";

export type AlertProps = {
  type: "error" | "success" | "info";
} & PropsWithChildren;
