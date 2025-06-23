import { clsx as c } from "clsx";
import { ButtonProps } from "./types";
import s from "./Button.module.scss";

function Button({
  type = "button",
  color,
  className,
  disabled,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={c(
        s.btn,
        variant && s[variant],
        color && s[color],
        size && s[`size-${size}`],
        disabled && s.disabled,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
