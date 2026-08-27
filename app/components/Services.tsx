import { ArrowIcon } from "./icons";
import Reveal from "./Reveal";

const services = [
  {
    title: "Website Development",
    description:
      "Marketing sites and web platforms built on your content model — fast, accessible, and editable by your team without a developer.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ec3013" strokeWidth="1.6" strokeLinecap="square">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "iOS and Android from one codebase or two, whichever your product actually needs. Store submission and release process included.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ec3013" strokeWidth="1.6" strokeLinecap="square">
        <rect x="5" y="2" width="14" height="20" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "CRM Development",
    description:
      "The pipeline your team already runs in spreadsheets, rebuilt as a system with permissions, automations and reporting that hold up.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ec3013" strokeWidth="1.6" strokeLinecap="square">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Custom SaaS Development",
    description:
      "Multi-tenant products with billing, roles and usage limits designed in from day one — so your first enterprise deal doesn't require a rewrite.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ec3013" strokeWidth="1.6" strokeLinecap="square">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Build From Scratch / MVP",
    description:
      "A working product in front of real users in eight weeks. Scoped hard, built properly, and ready to grow instead of be replaced.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ec3013" strokeWidth="1.6" strokeLinecap="square">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-9 lg:px-[72px] lg:py-20">
      <Reveal>
        <span className="mb-3.5 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
          Services
        </span>
        <h2 className="m-0 -ml-[0.03em] max-w-[24ch] font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
          Five ways we put software in your hands.
        </h2>
      </Reveal>
      <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px border-2 border-divider bg-divider">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            index={i}
            className="flex flex-col gap-3.5 bg-bg px-[26px] pt-7 pb-8 transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-[0_16px_32px_rgba(32,30,29,0.08)]"
          >
            {service.icon}
            <h3 className="mt-1.5 font-heading text-xl font-extrabold leading-tight">
              {service.title}
            </h3>
            <p className="m-0 text-[15px] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
              {service.description}
            </p>
          </Reveal>
        ))}
        <Reveal
          index={services.length}
          className="flex flex-col justify-between gap-3.5 bg-surface px-[26px] pt-7 pb-8"
        >
          <p className="m-0 font-heading text-xl font-extrabold leading-snug">
            Not sure which of these you need?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-heading text-[15px] font-extrabold text-accent-700 no-underline transition-colors hover:text-accent"
          >
            Tell us the problem
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
