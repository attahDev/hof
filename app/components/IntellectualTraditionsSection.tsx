import Image from "next/image";

type LiteraryFigure = {
  id: string;
  name: string;
  years: string;
  description: string;
  image: string;
};

const literaryFigures: LiteraryFigure[] = [
  {
    id: "olaudah-equiano",
    name: "Olaudah Equiano",
    years: "1745–1797",
    description:
      "Author and abolitionist whose autobiography influenced the British anti-slavery movement.",
    image: "/home/olau.png",
  },
  {
    id: "sojourner-truth",
    name: "Sojourner Truth",
    years: "C.1797–1883",
    description:
      "Abolitionist and women's rights activist whose speeches challenged injustice at its core.",
    image: "/home/Truth.png",
  },
  {
    id: "frederick-douglass",
    name: "Frederick Douglass",
    years: "1818–1895",
    description:
      "Orator, statesman and one of the most powerful advocates for emancipation and equality.",
    image: "/home/fedrick.png",
  },
  {
    id: "harriet-tubman",
    name: "Harriet Tubman",
    years: "C.1822–1913",
    description:
      "Strategist and liberator who led enslaved people to freedom via the Underground Railroad.",
    image: "/home/herriat.png",
  },
];

export default function IntellectualTraditionsSection() {
  return (
    <section className="w-full bg-[#F5EBE1] py-12 sm:py-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-10 lg:px-12">
        <header>
          <div className="flex items-center gap-3 text-[#A54350] sm:gap-4">
            <span className="font-serif text-[22px] italic leading-none sm:text-[26px] lg:text-[30px]">
              III.
            </span>

            <p className="text-base font-semibold uppercase tracking-[0.02em] sm:text-lg lg:text-[22px]">
              Intellectual &amp; Literary Traditions
            </p>
          </div>

          <h2 className="mt-5 text-[clamp(32px,7.5vw,74px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#000D1C] sm:mt-7 sm:leading-[1.05] sm:tracking-[-0.035em]">
            Voices that moved a nation
          </h2>

          <p className="mt-5 max-w-[1080px] text-[clamp(16px,2.3vw,29px)] leading-[1.5] text-[#555D68] sm:mt-7 sm:leading-[1.55]">
            18th–19th century thought leaders whose words transformed public
            consciousness and reshaped moral debate across continents.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-[70px] sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {literaryFigures.map((figure) => (
            <LiteraryFigureCard key={figure.id} figure={figure} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LiteraryFigureCard({
  figure,
}: {
  figure: LiteraryFigure;
}) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(205.51deg,#282610_4.55%,#111419_38.62%)]">
      <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px] lg:h-[245px]">
        <Image
          src={figure.image}
          alt={figure.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111419]/35" />
      </div>

      <div className="px-4 pb-5 pt-5 text-center sm:px-5 sm:pb-6">
        <h3 className="text-[17px] font-semibold uppercase leading-[1.2] text-white sm:text-[19px]">
          {figure.name}
        </h3>

        <p className="mt-2 text-sm font-medium text-[#BFB2A3] sm:mt-3 sm:text-[16px]">
          {figure.years}
        </p>

        <p className="mx-auto mt-4 max-w-[260px] text-[13px] leading-[1.55] text-[#F1ECE7] sm:mt-5">
          {figure.description}
        </p>
      </div>
    </article>
  );
}