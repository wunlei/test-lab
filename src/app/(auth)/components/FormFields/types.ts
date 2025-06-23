import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FormInputProps } from "@/app/(auth)/components/FormInput/types";
import { CheckboxProps } from "@/components/Checkbox/types";

type InputFieldConfig<T> = {
  fieldType: "text" | "password";
  name: Path<T>;
} & Omit<FormInputProps, "register">;

type CheckboxFieldConfig<T> = {
  fieldType: "checkbox";
  name: Path<T>;
} & CheckboxProps;

export type FormFieldConfig<T> = InputFieldConfig<T> | CheckboxFieldConfig<T>;

export type FormFieldsProps<T extends FieldValues> = {
  fields: FormFieldConfig<T>[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  disabled?: boolean;
};

export type ComponentMap = {
  text: React.ComponentType<FormInputProps>;
  password: React.ComponentType<FormInputProps>;
  checkbox: React.ComponentType<CheckboxProps>;
};
