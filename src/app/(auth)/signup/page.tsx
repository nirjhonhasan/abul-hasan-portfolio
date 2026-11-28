import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Sign Up | Abul Hasan" };

export default function SignUpPage() {
  return <AuthForm mode="signup" />;
}
