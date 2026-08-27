import { ArrowIcon } from "./icons";
import { CTA_LABEL } from "./Nav";

const deploySteps = [
  { label: "discovery", detail: "scope locked" },
  { label: "design", detail: "42 screens" },
  { label: "api", detail: "node · postgres" },
  { label: "web + mobile", detail: "react · swift" },
  { label: "ci", detail: "green" },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-x-14 gap-y-10 px-5 py-14 sm:px-9 md:py-20 lg:px-[72px] lg:py-24">
      <div>
        <h1 className="m-0 -ml-[0.058em] font-heading text-[40px] font-extrabold leading-[1.04] tracking-[-0.025em] text-[#f3f2f2] sm:text-[56px] lg:text-[78px]">
          <span className="animate-fade-up block [animation-delay:40ms]">
            We build your product.
          </span>
          <span className="animate-fade-up block [animation-delay:140ms]">
            Idea to launch.
          </span>
          <span className="animate-fade-up block text-highlight [animation-delay:240ms]">
            Nothing off a shelf.
          </span>
        </h1>
        <p className="animate-fade-up mt-7 max-w-[52ch] text-lg leading-relaxed text-[rgba(243,242,242,.78)] [animation-delay:360ms]">
          Laprocox designs and engineers custom websites, mobile apps, CRMs
          and SaaS platforms end to end. One team, from the first whiteboard
          to the release that ships.
        </p>
        <div className="animate-fade-up mt-[34px] flex flex-wrap gap-3 [animation-delay:460ms]">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-accent px-5 py-3.5 font-heading text-[15px] font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-highlight hover:shadow-[0_10px_28px_rgba(236,48,19,0.35)]"
          >
            {CTA_LABEL}
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-[rgba(243,242,242,.45)] px-5 py-3.5 font-heading text-[15px] font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(243,242,242,.1)]"
          >
            See the work
          </a>
        </div>
        <p className="animate-fade-up mt-[30px] text-[13px] tracking-[0.08em] text-[rgba(243,242,242,.6)] uppercase [animation-delay:540ms]">
          MVPs in 8 weeks · Fixed scope · Your code, your repo
        </p>
      </div>

      <div className="animate-fade-up border-2 border-[rgba(243,242,242,.28)] bg-ink-2 [animation-delay:220ms]">
        <div className="flex items-center gap-2 border-b-2 border-[rgba(243,242,242,.28)] px-3.5 py-2.5 font-mono text-[11px] tracking-[0.08em] text-[rgba(243,242,242,.55)] uppercase">
          <span className="block h-2 w-2 animate-pulse bg-highlight" />
          deploy.laprocox.sh
        </div>
        <div className="flex flex-col overflow-x-auto px-[18px] py-5 font-mono text-[13px] leading-[1.85] text-[rgba(243,242,242,.82)]">
          <div className="animate-fade-up whitespace-pre [animation-delay:520ms]">
            <span className="text-[rgba(243,242,242,.4)]">$</span> laprocox
            build --from scratch
          </div>
          {deploySteps.map((step, i) => (
            <div
              key={step.label}
              className="animate-fade-up whitespace-pre"
              style={{ animationDelay: `${620 + i * 130}ms` }}
            >
              <span className="text-highlight">✓</span> {step.label.padEnd(15, " ")}{" "}
              <span className="text-[rgba(243,242,242,.45)]">{step.detail}</span>
            </div>
          ))}
          <div
            className="animate-fade-up whitespace-pre"
            style={{ animationDelay: `${620 + deploySteps.length * 130 + 100}ms` }}
          >
            <span className="text-[rgba(243,242,242,.4)]">→</span> shipped in{" "}
            <span className="text-[#f3f2f2]">54 days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
