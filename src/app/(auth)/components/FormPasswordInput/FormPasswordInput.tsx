import FormControlWrapper from "@/components/FormControlWrapper";
import Label from "@/components/Label";
import PasswordInput from "@/components/PasswordInput";
import { optionsForRequired } from "@/utils";
import { FormPasswordInputProps } from "./types";

function FormPasswordInput({
  id,
  error,
  name,
  title,
  required,
  register,
  ...props
}: FormPasswordInputProps) {
  return (
    <FormControlWrapper error={error}>
      {title && (
        <Label htmlFor={id} required={required}>
          {title}
        </Label>
      )}
      <PasswordInput
        id={id}
        invalid={Boolean(error)}
        {...register(name, required ? optionsForRequired : {})}
        {...props}
      />
    </FormControlWrapper>
  );
}

export default FormPasswordInput;
