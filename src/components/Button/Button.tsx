import { clsx as c } from "clsx";
import { ButtonProps } from "./types";
import s from "./Button.module.scss";

function Button({
  type = "button",
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
