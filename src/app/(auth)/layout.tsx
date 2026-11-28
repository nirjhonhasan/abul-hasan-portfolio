import type { Metadata } from "next";

// Auth pages are not linked from the site, and search engines are asked not to list them.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center px-4 pt-28 pb-16">
      <div className="relative w-full max-w-md">
        {/* Glow behind the glass card */}
        <div aria-hidden className="absolute inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-blue/50 to-brand-violet/50 blur-3xl" />
        <div className="glass relative rounded-[2rem] p-6 sm:p-10">{children}</div>
      </div>
    </main>
  );
}
