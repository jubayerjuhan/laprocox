import Reveal from "./Reveal";

const steps = [
  {
    step: "STEP 01",
    title: "Discovery",
    description:
      "Two weeks of workshops, user interviews and a costed scope you can take to your board.",
  },
  {
    step: "STEP 02",
    title: "Design",
    description:
      "Flows, then screens, then a clickable prototype your users test before a line is written.",
  },
  {
    step: "STEP 03",
    title: "Development",
    description:
      "Two-week sprints, demo every second Friday, automated tests and CI from the first commit.",
  },
  {
    step: "STEP 04",
    title: "Launch",
    description:
      "Store submission, load testing, analytics and a rollback plan rehearsed before go-live.",
  },
  {
    step: "STEP 05",
    title: "Support",
    description:
      "Monitoring, SLAs and a roadmap retainer — or a full handover to the team you hire next.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-9 lg:px-[72px] lg:py-20">
      <Reveal>
        <span className="mb-3.5 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
          Process
        </span>
        <h2 className="m-0 mb-11 -ml-[0.03em] max-w-[26ch] font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
          Five phases. No surprises in any of them.
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(175px,1fr))]">
        {steps.map((item, i) => {
          const isFirst = i === 0;
          const isLast = i === steps.length - 1;
          return (
          <Reveal
            key={item.step}
            index={i}
            className={`relative border-t-2 border-text pt-[22px] pb-[30px] ${
              isFirst ? "pr-[22px] pl-0" : isLast ? "pr-0 pl-[22px]" : "px-[22px]"
            } ${!isLast ? "border-r-2 border-r-divider" : ""}`}
          >
            <span
              className={`step-marker absolute -top-[9px] block h-4 w-4 bg-accent ${
                isFirst ? "left-0" : "left-[22px]"
              }`}
            />
            <p className="mb-2.5 font-heading text-[13px] font-extrabold tracking-[0.08em] text-[color-mix(in_srgb,var(--color-text)_55%,transparent)]">
              {item.step}
            </p>
            <h4 className="mb-2 font-heading text-[19px] font-extrabold">{item.title}</h4>
            <p className="m-0 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
              {item.description}
            </p>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
