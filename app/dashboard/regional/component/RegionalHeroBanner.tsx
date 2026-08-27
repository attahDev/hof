import Image from "next/image";

export default function RegionalHeroBanner() {
    return (
        <section className="relative h-auto min-h-[274px] lg:h-[274px] w-full overflow-hidden rounded-[15px] bg-[var(--ink)] flex flex-col justify-between lg:block">
            {/* Map side - Absolutely positioned on Desktop, stacked or faded backdrop on mobile */}
            <div className="absolute inset-0 lg:left-auto lg:right-0 w-full lg:w-[50%] h-[200px] sm:h-[240px] lg:h-full bottom-0 lg:inset-y-0 z-0 opacity-30 lg:opacity-100">
                <Image
                    src="/regional/banner-hero.png"
                    alt="Regional recognition map"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-right"
                />

                {/* Fade blenders */}
                {/* Desktop-only Left-to-Right gradient */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-[260px] bg-gradient-to-r from-[var(--ink)] to-transparent" />
                {/* Mobile-only Bottom-to-Top/Right-to-Left hybrid overlay to guarantee text legibility */}
                <div className="block lg:hidden absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/80 to-transparent" />
            </div>

            {/* Left content - Scales fluidly on smaller viewports */}
            <div className="relative z-10 flex h-full w-full lg:w-[450px] flex-col px-5 py-6 sm:px-[25px] sm:py-[25px]">
                <h1 className="font-serif text-[30px] xs:text-[36px] sm:text-[44px] lg:text-[50px] font-medium leading-[1.05] text-[#DBD2C8]">
                    Regional
                    <br />
                    Recognition
                </h1>

                <h2 className="mt-3 sm:mt-[23px] font-serif text-[19px] sm:text-[23px] lg:text-[26px] italic font-normal leading-none text-[var(--gold-deep)]">
                    Outstanding Individuals
                </h2>

                <p className="mt-3 sm:mt-[20px] max-w-[380px] text-xs sm:text-sm lg:text-[14px] font-light leading-relaxed sm:leading-[24px] text-white/90">
                    Honoring exceptional individuals making significant
                    contributions within their regions and communities
                </p>
            </div>
        </section>
    );
}