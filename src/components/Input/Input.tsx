import { clsx as c } from "clsx";
import { InputProps } from "./types";
import s from "./Input.module.scss";

function Input({
  type = "text",
  required,
  invalid,
  className,
  beforeSlot,
  afterSlot,
  disabled,
  ...props
}: InputProps) {
  return (
    <div
      className={c(
        s.container,
        disabled && s.disabled,
        invalid && s.invalid,
        className,
      )}
    >
      {beforeSlot}
      <input
        type={type}
        className={c(s.input)}
        required={required}
        disabled={disabled}
        {...props}
      />
      {afterSlot}
    </div>
  );
}

export default Input;
