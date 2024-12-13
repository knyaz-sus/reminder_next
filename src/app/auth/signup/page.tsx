"use client";

import { Button } from "@/components/Button";
import { SignUpSchema, signUpSchema } from "@/features/auth/utils/validate";
import { FormField } from "@/features/auth/components/FormField";
import { signUpWithPassword } from "@/features/auth/api/signUpWithPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFooter } from "@/features/auth/components/FormFooter";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const handleSignIn: SubmitHandler<SignUpSchema> = (formData) => {
    signUpWithPassword(formData.name, formData.email, formData.password);
  };
  return (
    <div className="rounded-md border-border border w-full max-w-sm p-6">
      <form
        className="flex flex-col gap-3 mb-4"
        onSubmit={handleSubmit(handleSignIn)}
        id="signup-form"
        name="signup-form"
      >
        <h1 className="mb-2">Sign up</h1>
        <div className="flex flex-col gap-3 mb-2">
          <FormField
            register={register}
            error={errors.name?.message}
            name="name"
          />
          <FormField
            register={register}
            error={errors.email?.message}
            name="email"
          />
          <FormField
            register={register}
            error={errors.password?.message}
            name="password"
            type="password"
          />
        </div>
        <Button type="submit">Sign up</Button>
      </form>
      <FormFooter
        path="/auth/signin"
        content="Already have an account? "
        link="Login"
      />
    </div>
  );
}
