import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header — normal flow, flat, scrolls away naturally */}
      <header className="w-full">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#hero" className="font-semibold tracking-tight">
            Michael B.
          </a>

          {/* Desktop links — hidden on mobile entirely */}
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — visible from the very start on mobile, never the link list */}
          <button
            onClick={() => setMenuOpen(true)}
            className="sm:hidden flex flex-col gap-1.5 w-6"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-full bg-neutral-900" />
            <span className="h-0.5 w-full bg-neutral-900" />
            <span className="h-0.5 w-full bg-neutral-900" />
          </button>
        </div>
      </header>

      {/* Floating menu button — appears once scrolled, on ANY screen size */}
      {scrolled && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            />
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4 self-end"}`}
            />
            <span
              className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
            />
          </div>
        </button>
      )}

      {/* Overlay + slide-out panel */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] flex flex-col justify-center px-10 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-2xl"
        >
          ×
        </button>

        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-bold hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
