"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User, type LucideIcon } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const content = {
  signin: {
    title: "Welcome",
    highlight: "back",
    description: "Sign in to continue.",
    button: "Sign In",
    question: "Don't have an account?",
    linkLabel: "Sign up",
    linkHref: "/signup",
  },
  signup: {
    title: "Create your",
    highlight: "account",
    description: "It only takes a minute.",
    button: "Create Account",
    question: "Already have an account?",
    linkLabel: "Sign in",
    linkHref: "/signin",
  },
};

type AuthFieldProps = React.ComponentProps<"input"> & {
  name: string;
  label: string;
  Icon: LucideIcon;
  children?: React.ReactNode; // optional button at the end of the field
};

// A shadcn Field + Input with an icon.
function AuthField({ label, Icon, children, ...inputProps }: AuthFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={inputProps.name}>{label}</FieldLabel>
      <div className="relative">
        <Icon aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          {...inputProps}
          id={inputProps.name}
          required
          className="h-12 rounded-2xl border-foreground/10 bg-background/50 pr-12 pl-12 focus-visible:border-brand-blue focus-visible:ring-brand-blue/30 md:text-base dark:bg-background/50"
        />
        {children && <div className="absolute top-1/2 right-3 flex -translate-y-1/2">{children}</div>}
      </div>
    </Field>
  );
}

// One form for both pages: "signup" adds the name and confirm password fields.
export default function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const isSignUp = mode === "signup";
  const text = content[mode];
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (isSignUp && data.password !== data.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // TODO: connect Better Auth here with authClient.signIn.email(...) or authClient.signUp.email(...).
    // Remove this log before going live: it prints the password in the browser console.
    console.log(data);
    setMessage("Authentication is not connected yet.");
  }

  const toggle = (
    <button
      type="button"
      onClick={() => setShowPassword((show) => !show)}
      aria-label={showPassword ? "Hide password" : "Show password"}
      aria-pressed={showPassword}
      className="cursor-pointer rounded-full p-1 text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-brand-blue"
    >
      {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
    </button>
  );

  return (
    <>
      <div className="text-center">
        <span className="inline-block">
          <Logo />
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {text.title}{" "}
          <span className="bg-linear-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">{text.highlight}</span>
        </h1>
        <p className="mt-2 text-muted-foreground">{text.description}</p>
      </div>

      {/* method="post" keeps the password out of the URL if the form is sent before JavaScript loads. */}
      <form method="post" onSubmit={handleSubmit} onChange={() => setMessage("")} className="mt-8">
        <FieldGroup>
          {isSignUp && <AuthField label="Full name" Icon={User} name="name" type="text" autoComplete="name" placeholder="Your name" />}
          <AuthField label="Email" Icon={Mail} name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <AuthField
            label="Password"
            Icon={Lock}
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={isSignUp ? "new-password" : "current-password"}
            minLength={isSignUp ? 8 : undefined}
            placeholder={isSignUp ? "At least 8 characters" : "Your password"}
          >
            {toggle}
          </AuthField>
          {isSignUp && (
            <AuthField
              label="Confirm password"
              Icon={Lock}
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              minLength={8}
              placeholder="Repeat your password"
            />
          )}

          {message && <FieldError className="text-center">{message}</FieldError>}

          <Button
            type="submit"
            className="group h-12 w-full cursor-pointer rounded-full bg-linear-to-r from-brand-blue to-brand-violet text-base font-semibold text-white transition-shadow hover:shadow-[0_0_32px] hover:shadow-brand-blue/50"
          >
            {text.button}
            <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </FieldGroup>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {text.question}{" "}
        <Link href={text.linkHref} className="font-semibold text-brand-blue hover:underline dark:text-[#9b8aff]">
          {text.linkLabel}
        </Link>
      </p>
    </>
  );
}
