import { clsx as c } from "clsx";
import AlertIcon from "@/assets/alert-circle.svg";
import { AlertProps } from "@/components/Alert/types";
import s from "./Alert.module.scss";

function Alert({ type = "info", children }: AlertProps) {
  return (
    <div className={c(s.alert, s[type])}>
      <AlertIcon className={s.icon} />
      {children}
    </div>
  );
}

export default Alert;
