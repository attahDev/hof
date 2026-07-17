import Image from "next/image";

export default function RegionalHeroBanner() {
    return (
        <section className="relative h-auto min-h-[274px] lg:h-[274px] w-full overflow-hidden rounded-[15px] bg-[#000D1C] flex flex-col justify-between lg:block">
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
                <div className="hidden lg:block absolute inset-y-0 left-0 w-[260px] bg-gradient-to-r from-[#000D1C] to-transparent" />
                {/* Mobile-only Bottom-to-Top/Right-to-Left hybrid overlay to guarantee text legibility */}
                <div className="block lg:hidden absolute inset-0 bg-gradient-to-t from-[#000D1C] via-[#000D1C]/80 to-transparent" />
            </div>

            {/* Left content - Scales fluidly on smaller viewports */}
            <div className="relative z-10 flex h-full w-full lg:w-[450px] flex-col px-5 py-6 sm:px-[25px] sm:py-[25px]">
                <h1 className="text-[28px] xs:text-[34px] sm:text-[40px] lg:text-[45px] font-bold uppercase leading-[1.15] lg:leading-[1.18] tracking-wide text-[#DBD2C8]">
                    Regional
                    <br />
                    Recognition
                </h1>

                <h2 className="mt-3 sm:mt-[23px] text-[18px] sm:text-[22px] lg:text-[25px] font-light uppercase leading-none text-[#B1A393]">
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