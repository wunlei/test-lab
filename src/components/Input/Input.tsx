import { clsx as c } from "clsx";
import { InputProps } from "./types";
import s from "./Input.module.scss";

function Input({
  type = "text",
  required,
  invalid,
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={c(s.input, invalid && s.invalid, className)}
      required={required}
      {...props}
    />
  );
}

export default Input;
