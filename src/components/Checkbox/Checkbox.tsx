import CheckIcon from "@/assets/check.svg";
import Label from "@/components/Label";
import { CheckboxProps } from "./types";
import s from "./Checkbox.module.scss";

function Checkbox({ required, children, ...props }: CheckboxProps) {
  return (
    <Label required={required} className={s.label}>
      <input type="checkbox" className={s.input} {...props} />
      <span className={s.checkmark}>
        <CheckIcon className={s.checkIcon} />
      </span>
      {children}
    </Label>
  );
}

export default Checkbox;
