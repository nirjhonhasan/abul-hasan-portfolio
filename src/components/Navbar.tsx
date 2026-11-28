"use client";

import { useState } from "react";
import { House, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/lib/site";
import SectionLink from "@/components/SectionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState("Home");
  // On /projects the "Projects" link is always the active one.
  // No link is highlighted on other pages, such as sign in.
  const active = pathname === "/projects" ? "Projects" : pathname === "/" ? clicked : "";
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(label: string) {
    setClicked(label);
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="glass relative mx-auto flex max-w-7xl bg-background/95 items-center justify-between rounded-full py-2 pr-2 pl-3 min-[360px]:pl-4">
        {/* Logo + name */}
        <SectionLink href="/#home" onClick={() => handleClick("Home")} aria-label="Abul Hasan, home">
          <Logo />
        </SectionLink>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <SectionLink
              key={link.label}
              href={link.href}
              onClick={() => handleClick(link.label)}
              aria-current={active === link.label ? "page" : undefined}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-brand-blue ${
                active === link.label
                  ? "bg-linear-to-r from-brand-blue to-brand-violet text-white shadow-[0_4px_20px] shadow-brand-blue/40"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {link.label === "Home" && <House className="size-4" />}
              {link.label}
            </SectionLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SectionLink
            href="/#contact"
            className="hidden rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_28px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:block"
          >
            Hire Me
          </SectionLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="glass flex size-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-brand-blue lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="glass mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl bg-background/95 p-3 backdrop-blur-2xl lg:hidden"
        >
          {navLinks.map((link) => (
            <SectionLink
              key={link.label}
              href={link.href}
              onClick={() => handleClick(link.label)}
              aria-current={active === link.label ? "page" : undefined}
              className={`rounded-2xl px-4 py-3 font-medium ${
                active === link.label
                  ? "bg-linear-to-r from-brand-blue to-brand-violet text-white"
                  : "text-muted-foreground hover:bg-foreground/5"
              }`}
            >
              {link.label}
            </SectionLink>
          ))}
          <SectionLink
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-2xl bg-linear-to-r from-brand-blue to-brand-violet px-4 py-3 text-center font-semibold text-white sm:hidden"
          >
            Hire Me
          </SectionLink>
        </nav>
      )}
    </header>
  );
}
