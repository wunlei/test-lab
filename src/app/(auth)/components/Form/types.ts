import { PropsWithChildren, ReactNode } from "react";

export type AuthFromProps = {
  formTitle?: string;
  submitBtnText?: string;
  footer?: ReactNode;
  submitDisabled?: boolean;
  isLoading?: boolean;
  errorMsg?: string | null;
  onSubmit?: () => void;
} & PropsWithChildren;
