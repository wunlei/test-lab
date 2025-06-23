import { z } from "zod";

const requiredError = { required_error: "This field is required" };

export const loginSchema = z
  .object({
    username: z.string(requiredError).trim(),
    password: z.string(requiredError).trim(),
  })
  .required();

export const signupSchema = loginSchema
  .extend({
    password: z
      .string(requiredError)
      .min(6, { message: "Password must be at least 6 characters" })
      .trim(),
    password_confirmation: z.string(requiredError),
    is_admin: z.boolean(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });
