import { clsx as c } from "clsx";
import { LabelProps } from "./types";
import s from "./Label.module.scss";

function Label({ required, className, children, title, ...props }: LabelProps) {
  return (
    <label
      className={c(s.label, className)}
      title={required ? "Required" : title}
      {...props}
    >
      {children}
      {required && <span className={s.asterisk}>*</span>}
    </label>
  );
}

export default Label;
