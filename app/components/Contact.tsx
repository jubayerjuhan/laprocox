import { ArrowIcon } from "./icons";
import { CTA_LABEL } from "./Nav";
import Reveal from "./Reveal";

const nextSteps = [
  "You send a paragraph about the problem.",
  "We reply within one business day with times.",
  "30-minute call with the engineer who'd lead it.",
  "Written scope and estimate inside a week.",
];

export default function Contact() {
  return (
    <section id="contact" className="bg-grid bg-ink text-[#f3f2f2]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(330px,1fr))] items-center gap-x-20 gap-y-10 px-5 py-14 sm:px-9 lg:px-[72px] lg:py-24">
        <Reveal index={0}>
          <h2 className="m-0 -ml-[0.058em] font-heading text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[60px]">
            <span className="block">Tell us what you&apos;re building.</span>
            <span className="block text-highlight">We&apos;ll tell you how.</span>
          </h2>
          <p className="mt-6.5 max-w-[48ch] text-[17px] leading-relaxed text-[rgba(243,242,242,.78)]">
            A 30-minute call, no deck. You leave with a rough shape, a rough
            number and an honest read on whether we&apos;re the right team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-accent px-5 py-3.5 font-heading text-[15px] font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-highlight hover:shadow-[0_10px_28px_rgba(236,48,19,0.35)]"
            >
              {CTA_LABEL}
              <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@laprocox.com"
              className="inline-flex items-center gap-2 border border-[rgba(243,242,242,.45)] px-5 py-3.5 font-heading text-[15px] font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(243,242,242,.1)]"
            >
              Request a quote
            </a>
          </div>
        </Reveal>

        <Reveal
          index={1}
          className="flex flex-col gap-4.5 border border-[rgba(243,242,242,.28)] px-6.5 py-7"
        >
          <p className="m-0 text-[13px] tracking-[0.08em] text-[rgba(243,242,242,.6)] uppercase">
            What happens next
          </p>
          <div className="flex flex-col gap-3.5">
            {nextSteps.map((step) => (
              <div key={step} className="flex items-baseline gap-3.5">
                <span className="block h-2.5 w-2.5 flex-none -translate-y-0.5 animate-pulse bg-highlight" />
                <p className="m-0 text-[15px] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
