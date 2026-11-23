"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

// Copies the email address to the clipboard and shows a short "Copied" confirmation.
export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto button still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-shadow hover:shadow-[0_0_28px] hover:shadow-brand-violet/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
    >
      {copied ? <Check className="size-5 text-green-500" /> : <Copy className="size-5 text-brand-blue" />}
      <span aria-live="polite">{copied ? "Email copied!" : "Copy email"}</span>
    </button>
  );
}
