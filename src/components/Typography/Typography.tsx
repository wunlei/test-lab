import { clsx as c } from "clsx";
import { TextProps } from "./types";
import s from "./Typography.module.scss";

function Typography({
  weight = "normal",
  tag: Tag = "p",
  size,
  block,
  align,
  className,
  children,
}: TextProps) {
  return (
    <Tag
      className={c(
        s.text,
        s[weight],
        size && s[size],
        align && s[`align-${align}`],
        block && s.block,
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Typography;
