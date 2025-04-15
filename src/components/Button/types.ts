export type ButtonProps = {
  variant?: "outline" | "ghost";
  size?: "icon" | "l";
  color?: "success" | "error" | "alert";
} & React.ComponentProps<"button">;
