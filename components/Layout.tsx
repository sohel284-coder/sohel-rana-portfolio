import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { CVLink } from "./CVLink";
const links = ["Skills", "Work", "Experience", "About", "Contact"];
export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 800px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-row">
          <a href="/#home" className="wordmark" aria-label="Sohel Rana, home">
            sohel<span>.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link} href={`/#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
            <CVLink className="button nav-cv">CV</CVLink>
          </nav>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className={`mobile-nav ${open ? "is-open" : ""}`}
          inert={!open}
          aria-label="Mobile navigation"
        >
          <div>
            {links.map((link) => (
              <a
                key={link}
                href={`/#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <CVLink onDownload={() => setOpen(false)} />
          </div>
        </nav>
      </header>
      <main id="main">{children}</main>
    </>
  );
}
