"use client";

import { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthForm from "@/app/(auth)/components/Form";
import FormFields from "@/app/(auth)/components/FormFields";
import { FormFieldConfig } from "@/app/(auth)/components/FormFields/types";
import Typography from "@/components/Typography";
import { LoginBody, SignUpBody } from "@/lib/api/server/auth.types";
import { fetchProxy } from "@/lib/api/fetchProxy";
import { APP_ROUTES } from "@/lib/app";
import useFetch from "@/lib/hooks";
import { signupSchema } from "@/lib/schemas";

type Inputs = {
  username: string;
  password: string;
  password_confirmation: string;
  is_admin: boolean;
};

const fields: FormFieldConfig<Inputs>[] = [
  {
    fieldType: "text",
    id: "username",
    name: "username",
    title: "Username",
    required: true,
  },
  {
    fieldType: "password",
    id: "password",
    name: "password",
    title: "Password",
    required: true,
  },
  {
    fieldType: "password",
    id: "password_confirmation",
    name: "password_confirmation",
    title: "Confirm password",
    required: true,
  },
  {
    fieldType: "checkbox",
    name: "is_admin",
    title: "Sign up as administrator",
  },
];

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = useForm<Inputs>({
    resolver: zodResolver(signupSchema),
  });
  const router = useRouter();

  const loginFetcher = useCallback(
    (body: LoginBody) => fetchProxy<LoginBody>("/login").post(body),
    [],
  );

  const signupFetcher = useCallback(
    (body: SignUpBody) => fetchProxy<SignUpBody>("/signup").post(body),
    [],
  );

  const {
    call: signup,
    isLoading,
    errorMsg,
    isSuccess,
  } = useFetch(signupFetcher);

  const {
    call: login,
    isLoading: isLoadingLogin,
    isSuccess: isSuccessLogin,
    errorMsg: errorMsgLogin,
  } = useFetch(loginFetcher);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    signup(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const data = getValues();
      login(data);
    }
  }, [getValues, isSuccess, login]);

  useEffect(() => {
    if (isSuccessLogin) {
      router.push(APP_ROUTES.tests.mask);
    }
  }, [isSuccessLogin, router]);

  return (
    <AuthForm
      submitDisabled={isLoading || isLoadingLogin || !isDirty}
      formTitle="Sign Up"
      submitBtnText="Sign up"
      isLoading={isLoading || isLoadingLogin}
      errorMsg={errorMsg || errorMsgLogin}
      onSubmit={handleSubmit(onSubmit)}
      footer={
        <Typography align="center">
          Already have an account?{" "}
          <Link href={APP_ROUTES.login.mask}>Log in</Link>
        </Typography>
      }
    >
      <FormFields
        fields={fields}
        register={register}
        errors={errors}
        disabled={isLoading}
      />
    </AuthForm>
  );
}
