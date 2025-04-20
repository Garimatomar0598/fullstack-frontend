import { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "../../components/auth/signup-form";
import { ThemeToggler } from "../../components/ui/theme-toggler";

export const metadata: Metadata = {
  title: "Sign Up | Intern Assignment",
  description: "Create a new account",
};

export default function SignupPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <ThemeToggler />
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="hover:text-brand underline underline-offset-4"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}