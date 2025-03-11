import { FormInputProps } from "@/app/(auth)/components/FormInput/types";
import FormControlWrapper from "@/components/FormControlWrapper";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { optionsForRequired } from "@/utils";

function FormInput({
  id,
  error,
  title,
  required,
  name,
  register,
  ...props
}: FormInputProps) {
  return (
    <FormControlWrapper error={error}>
      {title && (
        <Label htmlFor={id} required={required}>
          {title}
        </Label>
      )}
      <Input
        id={id}
        {...register(name, required ? optionsForRequired : {})}
        invalid={Boolean(error)}
        {...props}
      />
    </FormControlWrapper>
  );
}

export default FormInput;
