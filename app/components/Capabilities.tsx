import Reveal from "./Reveal";

const groups = [
  {
    label: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "React Native", "Swift", "Kotlin"],
  },
  {
    label: "Backend & data",
    tags: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "MongoDB", "GraphQL"],
  },
  {
    label: "Cloud & delivery",
    tags: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

export default function Capabilities() {
  return (
    <section className="border-y-2 border-divider bg-surface">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-16 gap-y-7 px-5 py-12 sm:px-9 lg:px-[72px] lg:py-16">
        <Reveal>
          <span className="mb-3.5 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
            Capabilities
          </span>
          <h3 className="m-0 font-heading text-[28px] font-extrabold leading-[1.12] tracking-[-0.015em]">
            A stack chosen for your problem, not our habits.
          </h3>
        </Reveal>
        <div className="flex flex-col gap-5">
          {groups.map((group, i) => (
            <Reveal key={group.label} index={i}>
              <p className="mb-2.5 text-xs tracking-[0.1em] text-[color-mix(in_srgb,var(--color-text)_60%,transparent)] uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-outline inline-flex items-center px-2.5 py-[3px] text-[11px] tracking-[0.02em] transition-colors duration-200 hover:bg-accent hover:text-[#f3f2f2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
