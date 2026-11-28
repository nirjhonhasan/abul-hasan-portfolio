"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string; // a page ("/projects"), a home section ("/#about") or this page's top ("#top")
};

// Link to a page or to a section.
// For a section of the current page it scrolls there itself. With next/link, the address could grow
// into "/#home#home#home" after reloading a URL that already had a "#" part.
export default function SectionLink({ href, onClick, ...props }: SectionLinkProps) {
  const pathname = usePathname();
  const [path, hash] = href.split("#");

  if (!hash || (path !== "" && path !== pathname)) {
    return <Link {...props} href={href} onClick={onClick} />;
  }

  function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    // Let the browser handle "open in new tab" and similar clicks.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const section = document.getElementById(hash);
    if (section) section.scrollIntoView();
    else window.scrollTo({ top: 0 });
    // Next.js tracks history.pushState, so the Back button keeps working.
    if (window.location.hash !== `#${hash}`) window.history.pushState(null, "", `#${hash}`);
  }

  return <a {...props} href={`#${hash}`} onClick={scrollToSection} />;
}
