"use client";

import { signInSchema, SignInSchema } from "@/features/auth/utils/validate";
import { FormField } from "@/features/auth/components/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/features/auth/api/signIn";
import { signInWithGithub } from "@/features/auth/api/signInWithGithub";
import { FormFooter } from "@/features/auth/components/FormFooter";
import { Button } from "@/components/Button";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInSchema> = (formData) => {
    signIn(formData.email, formData.password);
  };
  return (
    <div className="rounded-md border border-border w-full max-w-sm p-6">
      <form
        className="flex flex-col gap-3 mb-4"
        onSubmit={handleSubmit(handleSignIn)}
        id="signin-form"
        name="signin-form"
      >
        <h1 className="mb-2">Sign in</h1>
        <Button type="button" onClick={signInWithGithub}>
          <span>Sign in with github</span>
        </Button>
        <div className="flex flex-col gap-3 mb-2">
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
        <Button type="submit">Sign in with password</Button>
      </form>
      <FormFooter
        path="/auth/signup"
        content="New to Reminder? "
        link="Sign up"
      />
    </div>
  );
}
