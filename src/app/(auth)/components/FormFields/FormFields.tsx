import { FieldValues } from "react-hook-form";
import {
  ComponentMap,
  FormFieldsProps,
} from "@/app/(auth)/components/FormFields/types";
import FormInput from "@/app/(auth)/components/FormInput";
import FormPasswordInput from "@/app/(auth)/components/FormPasswordInput";
import Checkbox from "@/components/Checkbox";
import { getFieldError } from "@/utils";

const components: ComponentMap = {
  text: FormInput,
  password: FormPasswordInput,
  checkbox: Checkbox,
};

function FormFields<T extends FieldValues>({
  fields,
  register,
  errors,
  disabled,
}: FormFieldsProps<T>) {
  return (
    <>
      {fields.map((field) => {
        const { fieldType, ...props } = field;

        if (fieldType === "checkbox") {
          const Component = components.checkbox;
          return (
            <Component
              key={field.name}
              disabled={disabled}
              {...register(field.name)}
              {...props}
            >
              {field.title}
            </Component>
          );
        }
        const Component = components[fieldType];

        return (
          <Component
            key={field.id}
            id={field.id}
            register={register}
            error={getFieldError(errors, field.name)}
            disabled={disabled}
            {...props}
          />
        );
      })}
    </>
  );
}

export default FormFields;
