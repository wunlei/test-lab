import { ReactNode } from "react";

export type InputProps = {
  invalid?: boolean;
  beforeSlot?: ReactNode;
  afterSlot?: ReactNode;
} & React.ComponentProps<"input">;
