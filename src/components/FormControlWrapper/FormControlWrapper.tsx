import { clsx as c } from "clsx";
import { FormControlWrapperProps } from "./types";
import s from "./FormControlWrapper.module.scss";

function FormControlWrapper({ error, children }: FormControlWrapperProps) {
  return (
    <div className={c(s.wrapper)}>
      {children}
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
}

export default FormControlWrapper;
