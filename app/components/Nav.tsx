"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const CTA_LABEL = "Book a Call";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mx-auto max-w-[1240px] border-b-2 border-[rgba(243,242,242,.28)] px-5 py-[18px] sm:px-9 lg:px-[72px]">
      <div className="flex items-center justify-between gap-6">
        <span className="flex items-center gap-2.5 font-heading text-[19px] font-extrabold tracking-[-0.02em] text-[#f3f2f2]">
          <span className="block h-3 w-3 bg-highlight" />
          LAPROCOX
        </span>

        <div className="hidden items-center gap-[26px] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative whitespace-nowrap py-1 text-sm text-[#f3f2f2] no-underline transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-highlight after:transition-all after:duration-300 after:ease-out hover:text-highlight hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-accent px-4 py-2.5 font-heading text-sm font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-highlight hover:shadow-[0_10px_24px_rgba(236,48,19,0.35)]"
          >
            {CTA_LABEL}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border border-[rgba(243,242,242,.35)] text-[#f3f2f2] transition-colors hover:border-highlight hover:text-highlight md:hidden"
        >
          <span className="relative grid h-5 w-5 place-items-center">
            <span
              className={`absolute transition-all duration-200 ${
                open ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <MenuIcon />
            </span>
            <span
              className={`absolute transition-all duration-200 ${
                open ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <CloseIcon />
            </span>
          </span>
        </button>
      </div>

      <div
        id="mobile-nav-menu"
        className={`absolute inset-x-0 top-full z-50 origin-top border-b-2 border-[rgba(243,242,242,.28)] bg-ink px-5 py-6 transition-all duration-300 ease-out md:hidden ${
          open
            ? "translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[rgba(243,242,242,.12)] py-3 text-base text-[#f3f2f2] no-underline transition-all duration-300 hover:pl-1.5 hover:text-highlight"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-accent px-4 py-3 font-heading text-sm font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:bg-highlight"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </nav>
  );
}

export { CTA_LABEL };
