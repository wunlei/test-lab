export type ButtonProps = {
  variant?: "outline" | "ghost" | "success" | "error" | "alert";
  size?: "icon" | "l";
} & React.ComponentProps<"button">;
