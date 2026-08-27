import Reveal from "./Reveal";

const items = [
  {
    number: "01",
    title: "End-to-end, one team",
    description:
      "Strategy, product design, engineering and release all sit in the same room. No handoff gaps, no agency pointing at a contractor.",
  },
  {
    number: "02",
    title: "Architecture that scales",
    description:
      "We build for the version of your business two years out: clean data models, tested services, infrastructure you can hand to any engineer.",
  },
  {
    number: "03",
    title: "Shipping every two weeks",
    description:
      "You see running software on a fortnightly cadence from week two — not a status deck. Scope changes get priced the same day.",
  },
  {
    number: "04",
    title: "Your code, your accounts",
    description:
      "Everything lives in your repo, your cloud, your name. A dedicated squad while you need one, and a clean exit when you don't.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1240px] border-t-2 border-divider px-5 py-12 sm:px-9 lg:px-[72px] lg:py-16">
      <Reveal>
        <span className="mb-8 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
          Why Laprocox
        </span>
      </Reveal>
      <div className="grid grid-cols-1">
        {items.map((item, i) => (
          <Reveal
            key={item.number}
            index={i}
            className={`flex flex-wrap items-baseline gap-x-8 gap-y-3.5 py-6 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-text)_3%,transparent)] sm:gap-x-16 ${
              i > 0 ? "border-t-2 border-divider" : ""
            } ${i === items.length - 1 ? "border-b-2 border-divider" : ""}`}
          >
            <p className="m-0 flex-[0_0_60px] font-heading text-[15px] font-extrabold">
              {item.number}
            </p>
            <h3 className="m-0 max-w-[380px] flex-[1_1_280px] font-heading text-2xl font-extrabold leading-tight tracking-[-0.01em]">
              {item.title}
            </h3>
            <p className="m-0 max-w-[52ch] flex-[1_1_320px] text-[15.5px] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
