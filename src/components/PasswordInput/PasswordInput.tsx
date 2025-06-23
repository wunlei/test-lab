import { useState } from "react";
import EyeIcon from "@/assets/eye.svg";
import EyeOffIcon from "@/assets/eye-off.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { PasswordInputProps } from "./types";
import s from "./PasswordInput.module.scss";

function PasswordInput({ disabled, ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={s.wrapper}>
      <Input
        type={isVisible ? "text" : "password"}
        disabled={disabled}
        {...props}
      />
      <Button
        className={s.btn}
        size="icon"
        variant="ghost"
        disabled={disabled}
        onClick={() => setIsVisible((v) => !v)}
        tabIndex={-1}
      >
        {isVisible ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    </div>
  );
}

export default PasswordInput;
