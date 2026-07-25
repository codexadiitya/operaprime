import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SALON } from "@/lib/content";

const LINKS = [
  { href: "#services", label: "Services", testid: "nav-services" },
  { href: "#offers", label: "Offers", testid: "nav-offers" },
  { href: "#team", label: "Team", testid: "nav-team" },
  { href: "#gallery", label: "Gallery", testid: "nav-gallery" },
  { href: "#visit", label: "Visit", testid: "nav-visit" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(23,10,10,0.72)] border-b border-[rgba(201,162,39,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        <a href="#top" className="flex items-baseline gap-2" data-testid="brand-logo">
          <span className="font-serif text-xl md:text-2xl text-ivory tracking-wide">Opera Prime</span>
          <span className="font-italic-accent text-gold text-lg md:text-xl">salon</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-xs uppercase tracking-[0.25em] text-ivory/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href="#book" data-testid="header-book-btn" className="btn-primary">
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden text-ivory p-2 border border-[rgba(201,162,39,0.35)] rounded-sm"
          onClick={() => setOpen((v) => !v)}
          data-testid="header-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-op-panel border-t border-[rgba(201,162,39,0.25)]" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-ivory/85 hover:text-gold"
                data-testid={`${l.testid}-mobile`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
              data-testid="header-book-btn-mobile"
            >
              Book Now
            </a>
            <p className="text-xs text-ivory/50">{SALON.hoursShort}</p>
          </div>
        </div>
      )}
    </header>
  );
}
