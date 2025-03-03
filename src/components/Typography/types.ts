export type TextProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: "bold" | "normal" | "medium";
  size?: "s" | "m" | "l" | "xl" | "xxl";
  block?: boolean;
  align?: "start" | "end" | "center" | "justify";
} & React.ComponentProps<"div">;
