import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const serviceLinks = [
  "Website development",
  "Mobile apps",
  "CRM development",
  "Custom SaaS",
  "MVP from scratch",
];

const companyLinks = [
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Engagements", href: "#pricing" },
  { label: "Careers", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-2 text-[rgba(243,242,242,.72)]">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-9 lg:px-[72px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(185px,1fr))] gap-8 border-b-2 border-[rgba(243,242,242,.22)] pb-9">
          <div>
            <span className="flex items-center gap-2.5 font-heading text-[19px] font-extrabold tracking-[-0.02em] text-[#f3f2f2]">
              <span className="block h-3 w-3 bg-highlight" />
              LAPROCOX
            </span>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed">
              Custom software, built from scratch. Websites, mobile apps,
              CRMs and SaaS platforms for teams who need the real thing.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center border border-[rgba(243,242,242,.35)] text-[#f3f2f2] transition-colors hover:border-highlight hover:text-highlight"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center border border-[rgba(243,242,242,.35)] text-[#f3f2f2] transition-colors hover:border-highlight hover:text-highlight"
              >
                <GitHubIcon />
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid h-9 w-9 place-items-center border border-[rgba(243,242,242,.35)] text-[#f3f2f2] transition-colors hover:border-highlight hover:text-highlight"
              >
                <XIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3.5 font-heading text-xs font-extrabold tracking-[0.1em] text-[#f3f2f2] uppercase">
              Services
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              {serviceLinks.map((label) => (
                <a
                  key={label}
                  href="#services"
                  className="text-inherit no-underline transition-colors hover:text-highlight"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3.5 font-heading text-xs font-extrabold tracking-[0.1em] text-[#f3f2f2] uppercase">
              Company
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-inherit no-underline transition-colors hover:text-highlight"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3.5 font-heading text-xs font-extrabold tracking-[0.1em] text-[#f3f2f2] uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:hello@laprocox.com"
                className="text-inherit no-underline transition-colors hover:text-highlight"
              >
                hello@laprocox.com
              </a>
              <a
                href="tel:+10000000000"
                className="text-inherit no-underline transition-colors hover:text-highlight"
              >
                +1 (000) 000-0000
              </a>
              <span>
                Placeholder Street 00
                <br />
                City, Country
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5 pt-6 text-[13px]">
          <span>© 2026 Laprocox. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#" className="text-inherit no-underline transition-colors hover:text-highlight">
              Privacy
            </a>
            <a href="#" className="text-inherit no-underline transition-colors hover:text-highlight">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
