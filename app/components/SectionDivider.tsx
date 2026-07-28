type SectionDividerProps = {
  /** Background it sits on, so the rule blends in rather than boxing itself. */
  tone?: "light" | "dark";
};

export default function SectionDivider({ tone = "light" }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={
        tone === "dark"
          ? "w-full bg-[#000512] py-8 sm:py-10"
          : "w-full bg-[#F5EBE1] py-8 sm:py-10"
      }
    >
      <div className="ornament-divider mx-auto w-full max-w-[700px] px-6">
        <span className="ornament-diamond" />
      </div>
    </div>
  );
}
