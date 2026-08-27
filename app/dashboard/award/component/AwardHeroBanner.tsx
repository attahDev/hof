import Image from "next/image";

export default function AwardHeroBanner() {
    return (
        <section className="relative h-auto min-h-[300px] lg:h-[300px] w-full overflow-hidden rounded-[15px] bg-[var(--ink)] flex flex-col justify-between lg:block">
            {/* Right Illustration Side */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-auto h-[220px] sm:h-[260px] lg:h-full bottom-0 z-0 opacity-40 sm:opacity-50 lg:opacity-100 pointer-events-none">
                <Image
                    src="/award/award-Hero.png"
                    alt="Award Recognition"
                    width={750}
                    height={495} 
                    priority
                    className="absolute right-[-20px] lg:right-[-5px] bottom-0 lg:top-2 h-auto w-[420px] sm:w-[500px] lg:w-[650px] object-contain object-right-bottom"
                />
            </div>

            {/* Desktop-only exact solid background block & left blenders */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-[470px] bg-[var(--ink)] z-[1]" />
            <div className="hidden lg:block absolute inset-y-0 left-[375px] w-[240px] bg-gradient-to-r from-[var(--ink)] to-transparent z-[1]" />
            
            {/* Mobile-only background blenders to guarantee text legibility */}
            <div className="block lg:hidden absolute inset-0 z-[1] bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-transparent" />
            <div className="block lg:hidden absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-[var(--ink)] to-transparent" />

            {/* Content block - Fluid and flexible */}
            <div className="relative z-10 flex h-full w-full lg:w-[413px] flex-col gap-4 sm:gap-[23px] px-5 py-6 sm:px-[25px] sm:py-[25px]">
                <h1 className="font-serif text-[30px] xs:text-[36px] sm:text-[44px] lg:text-[50px] font-medium leading-[1.05] text-[#DBD2C8]">
                    Award
                    <br />
                    Recognition
                </h1>

                <h2 className="font-serif text-[19px] sm:text-[22px] lg:text-[25px] italic font-normal leading-none text-[var(--gold-deep)]">
                    Outstanding Performance
                </h2>

                <p className="max-w-[340px] lg:max-w-none text-xs sm:text-sm lg:text-[14px] font-light leading-relaxed sm:leading-[24px] text-white">
                    Recognizing excellence, innovation and outstanding achievement in
                    specific fields and disciplines
                </p>
            </div>
        </section>
    );
}