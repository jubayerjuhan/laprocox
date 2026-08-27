import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

const projects = [
  {
    category: "SaaS platform · Logistics",
    title: "Freight ops in one console",
    description:
      "Replaced four disconnected tools with a multi-tenant dispatch platform. 11,000 loads a month, 40% less manual routing.",
  },
  {
    category: "Mobile app · Health",
    title: "Care plans in the patient's pocket",
    description:
      "iOS and Android app plus clinician dashboard, built from scratch in ten weeks and cleared for HIPAA at launch.",
  },
  {
    category: "CRM · Real estate",
    title: "A pipeline 60 agents actually use",
    description:
      "Custom CRM with listing sync, commission automation and reporting that closed the month in hours instead of days.",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-9 lg:px-[72px] lg:py-20">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="mb-3.5 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
            Selected work
          </span>
          <h2 className="m-0 -ml-[0.03em] font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
            Products in production.
          </h2>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-heading text-[15px] font-extrabold text-accent-700 no-underline transition-colors hover:text-accent"
        >
          Request the full case studies
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 sm:gap-9">
        {projects.map((project, i) => (
          <Reveal key={project.title} as="article" index={i} className="group flex flex-col gap-4">
            <figure className="m-0 overflow-hidden border-2 border-divider">
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                <ImagePlaceholder label="Product screenshot" />
              </div>
            </figure>
            <div>
              <p className="mb-2 text-xs tracking-[0.1em] text-accent-700 uppercase">
                {project.category}
              </p>
              <h3 className="mb-2 font-heading text-xl font-extrabold leading-tight">
                {project.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
                {project.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
