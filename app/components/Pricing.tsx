import { CTA_LABEL } from "./Nav";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-divider bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-9 lg:px-[72px] lg:py-20">
        <Reveal>
          <span className="mb-3.5 block text-[13px] tracking-[0.08em] text-accent-700 uppercase">
            Engagements
          </span>
          <h2 className="m-0 mb-3 -ml-[0.03em] max-w-[24ch] font-heading text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
            Three ways to work with us.
          </h2>
          <p className="m-0 mb-11 max-w-[56ch] text-base leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
            Fixed scope, fixed price where the brief is clear. A dedicated
            squad where it isn&apos;t yet.
          </p>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px border-2 border-divider bg-divider">
          <Reveal index={0} className="flex flex-col gap-4.5 bg-bg px-7 pt-[30px] pb-[34px] transition-transform duration-300 hover:-translate-y-1">
            <div>
              <p className="mb-3 text-[13px] tracking-[0.08em] text-[color-mix(in_srgb,var(--color-text)_60%,transparent)] uppercase">
                Sprint zero
              </p>
              <p className="mb-1.5 -ml-[0.03em] font-heading text-[38px] font-extrabold leading-none">
                $9k
              </p>
              <p className="m-0 text-[13.5px] text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]">
                2 weeks, fixed
              </p>
            </div>
            <p className="m-0 text-[14.5px] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
              Discovery, technical plan, costed roadmap and a clickable
              prototype. Credited in full against the build.
            </p>
            <a
              href="#contact"
              className="mt-auto inline-flex w-full justify-start border border-divider px-3 py-2 font-heading text-sm font-extrabold text-text no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--color-text)_7%,transparent)]"
            >
              Start with discovery
            </a>
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-4.5 bg-ink px-7 pt-[30px] pb-[34px] text-[#f3f2f2] transition-transform duration-300 hover:-translate-y-1.5">
            <div>
              <p className="mb-3 text-[13px] tracking-[0.08em] text-highlight uppercase">
                MVP build · most chosen
              </p>
              <p className="mb-1.5 -ml-[0.03em] font-heading text-[38px] font-extrabold leading-none">
                from $48k
              </p>
              <p className="m-0 text-[13.5px] text-[rgba(243,242,242,.7)]">
                8–12 weeks, fixed scope
              </p>
            </div>
            <p className="m-0 text-[14.5px] leading-relaxed text-[rgba(243,242,242,.82)]">
              Design and engineering through to launch: web or mobile, API,
              admin, infrastructure and store submission.
            </p>
            <a
              href="#contact"
              className="mt-auto inline-flex items-center gap-2 bg-accent px-4 py-3 font-heading text-sm font-extrabold text-[#f3f2f2] no-underline transition-all duration-200 hover:bg-highlight hover:shadow-[0_10px_24px_rgba(236,48,19,0.35)]"
            >
              {CTA_LABEL}
            </a>
          </Reveal>

          <Reveal index={2} className="flex flex-col gap-4.5 bg-bg px-7 pt-[30px] pb-[34px] transition-transform duration-300 hover:-translate-y-1">
            <div>
              <p className="mb-3 text-[13px] tracking-[0.08em] text-[color-mix(in_srgb,var(--color-text)_60%,transparent)] uppercase">
                Dedicated squad
              </p>
              <p className="mb-1.5 -ml-[0.03em] font-heading text-[38px] font-extrabold leading-none">
                $18k<span className="text-lg">/mo</span>
              </p>
              <p className="m-0 text-[13.5px] text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]">
                Rolling, 1 month notice
              </p>
            </div>
            <p className="m-0 text-[14.5px] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_78%,transparent)]">
              A product designer and two engineers embedded in your team,
              with our architects on call. For roadmaps that keep moving.
            </p>
            <a
              href="#contact"
              className="mt-auto inline-flex w-full justify-start border border-divider px-3 py-2 font-heading text-sm font-extrabold text-text no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--color-text)_7%,transparent)]"
            >
              Talk about a squad
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
