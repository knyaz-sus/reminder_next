import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Wrong email format"),
  password: z.string().min(6, "Password should have at least 6 characters"),
});

export const signUpSchema = z.object({
  name: z.string().min(1, "Username is required"),
  email: z.string().email("Wrong email format"),
  password: z.string().min(6, "Password should have at least 6 characters"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
