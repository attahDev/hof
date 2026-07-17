import Image from "next/image";

export default function AchebeQuoteSection() {
  return (
    <section className="w-full bg-[#F5EBE1] px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-12 lg:py-16">
      <article className="mx-auto grid w-full max-w-[1341px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(204.72deg,#4D3218_4.33%,#111419_52.74%)] lg:min-h-[400px] lg:grid-cols-[minmax(0,544px)_minmax(0,1fr)]">
        {/* Image side */}
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[280px] md:h-[340px] lg:h-[400px] lg:min-h-0">
          <Image
            src="/home/achebe.png"
            alt="Chinua Achebe"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 544px"
            className="object-contain object-bottom lg:object-left-bottom"
          />

          {/* Subtle blend into the quote side */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-[#111419] to-transparent lg:block" />
          {/* Blend at the bottom on stacked layouts */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111419] to-transparent lg:hidden" />
        </div>

        {/* Text side */}
        <div className="flex min-w-0 items-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:py-0 lg:pl-10 lg:pr-[45px]">
          <div className="flex w-full max-w-[692px] flex-col gap-6 sm:gap-8 lg:gap-[45px]">
            <span className="w-fit border border-white/10 bg-[#3B2B1F]/30 px-3 py-2 text-sm font-semibold tracking-[0.12em] text-[#D9B700] sm:px-4 sm:py-3 sm:text-base lg:text-[18px]">
              1930–2013
            </span>

            <div>
              <blockquote className="relative">
                <span className="absolute -left-1 -top-3 text-[40px] font-bold leading-none text-[#D9B700] sm:-top-2 sm:text-[52px] lg:-left-3 lg:text-[64px]">
                  “
                </span>

                <p className="pl-8 text-[30px] font-semibold leading-[1.4] text-white sm:pl-10 sm:leading-[1.5] lg:pl-12">
                  Until the lions have their own historians, the
                  history of the hunt will always glorify the hunter
                  <span className="ml-2 text-[40px] font-bold leading-none text-[#D9B700] sm:ml-3 sm:text-[52px] lg:text-[64px]">
                    ”
                  </span>
                </p>
              </blockquote>

              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-base uppercase leading-tight text-[#B1A393] sm:mt-8 sm:text-lg lg:mt-10 lg:text-[25px]]">
                <span className="font-bold text-[#DBD2C8]">
                  Chinua Achebe
                </span>
                <span aria-hidden className="hidden sm:inline">·</span>
                <span>Author, Things Fall Apart</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}