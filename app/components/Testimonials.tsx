import Reveal from "./Reveal";

const quotes = [
  {
    quote:
      "They scoped it in two weeks, built it in eight, and the thing has not fallen over since.",
    caption: "Placeholder quote",
    source: "Name, Title — Company",
  },
  {
    quote:
      "We came in with a spreadsheet and left with a CRM our agents open before their email.",
    caption: "Placeholder quote",
    source: "Name, Title — Company",
  },
  {
    quote:
      "The demo every second Friday is the reason our investors stopped asking for updates.",
    caption: "Placeholder quote",
    source: "Name, Title — Company",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t-2 border-divider bg-bg">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-9 lg:px-[72px] lg:py-20">
        <Reveal>
          <span className="mb-10 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
            Clients
          </span>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-px border-2 border-divider bg-divider">
          {quotes.map((item, i) => (
            <Reveal
              key={item.quote}
              as="figure"
              index={i}
              className="m-0 flex flex-col justify-between gap-5.5 bg-bg px-7 py-[30px] transition-colors duration-300 hover:bg-surface"
            >
              <blockquote className="m-0 font-heading text-xl font-extrabold leading-snug tracking-[-0.01em]">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-[13.5px] leading-normal text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]">
                {item.caption}
                <br />
                {item.source}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
