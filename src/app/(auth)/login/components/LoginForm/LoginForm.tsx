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
import { fetchProxy } from "@/lib/api/fetchProxy";
import { LoginBody, LoginResponse } from "@/lib/api/server/auth.types";
import { APP_ROUTES } from "@/lib/app";
import useFetch from "@/lib/hooks";
import { loginSchema } from "@/lib/schemas";
import { useAuth } from "@/providers/AuthProvider";

type Inputs = {
  username: string;
  password: string;
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
];

export default function LoginForm() {
  const router = useRouter();
  const { setIsAdmin } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  const fetcher = useCallback(
    (body: LoginBody) => fetchProxy<LoginBody>("/login").post(body),
    [],
  );

  const {
    call: login,
    isLoading,
    errorMsg,
    isSuccess,
    data,
  } = useFetch<LoginBody, LoginResponse>(fetcher);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setIsAdmin(data.is_admin);
      }
      router.push(APP_ROUTES.tests.mask);
    }
  }, [data, isSuccess, router, setIsAdmin]);

  return (
    <AuthForm
      formTitle="Log in"
      submitBtnText="Log in"
      submitDisabled={isLoading || !isDirty}
      isLoading={isLoading}
      errorMsg={errorMsg}
      onSubmit={handleSubmit(onSubmit)}
      footer={
        <Typography align="center">
          Don&apos;t have an account?{" "}
          <Link href={APP_ROUTES.signup.mask}>Sign up</Link>
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
