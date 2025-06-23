import { clsx as c } from "clsx";
import { LoaderProps } from "./types";
import s from "./Loader.module.scss";

function Loader({ size, className }: LoaderProps) {
  return (
    <span className={c(s.container, s[`size-${size}`], className)}>
      <span className={c(s.loader)}></span>
    </span>
  );
}

export default Loader;
