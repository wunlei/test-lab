import { FieldError, UseFormRegister } from "react-hook-form";

export type FormInputProps = {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  title?: string;
  error?: FieldError;
} & React.ComponentProps<"input">;
