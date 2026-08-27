export default function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-4/3 w-full items-center justify-center bg-surface">
      <span className="px-4 text-center text-xs tracking-[0.08em] text-[color-mix(in_srgb,var(--color-text)_45%,transparent)] uppercase">
        {label}
      </span>
    </div>
  );
}
