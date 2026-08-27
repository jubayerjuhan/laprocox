import AnimatedNumber from "./AnimatedNumber";
import Reveal from "./Reveal";

const stats = [
  { value: "120+", label: "Products shipped" },
  { value: "8 wks", label: "Median MVP to launch" },
  { value: "94%", label: "Clients who build again" },
  { value: "0", label: "Templates used" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1240px] border-b-2 border-divider px-5 py-9 sm:px-9 lg:px-[72px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-7">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} index={i}>
            <p className="m-0 -ml-[0.045em] font-heading text-[32px] font-extrabold leading-[1.1] text-accent sm:text-[46px]">
              <AnimatedNumber value={stat.value} />
            </p>
            <p className="mt-3 text-[13px] tracking-[0.08em] text-[color-mix(in_srgb,var(--color-text)_70%,transparent)] uppercase">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
