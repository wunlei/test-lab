import { FieldError } from "react-hook-form";

export type FormControlWrapperProps = {
  error?: FieldError;
} & React.ComponentProps<"div">;
