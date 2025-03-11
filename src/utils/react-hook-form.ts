import { FieldError, FieldErrors } from "react-hook-form";

export const optionsForRequired = {
  setValueAs: (value: unknown) => {
    if (value === "") {
      return undefined;
    }
    return value;
  },
};

export function getFieldError(
  errors: FieldErrors,
  name: string,
): FieldError | undefined {
  const fieldError = errors[name];
  return fieldError && "message" in fieldError
    ? (fieldError as FieldError)
    : undefined;
}
