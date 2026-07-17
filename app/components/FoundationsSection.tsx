import Image from "next/image";

type FoundationFigure = {
  name: string;
  years: string;
  description: string;
  image: string;
};

const foundations: FoundationFigure[] = [
  {
    name: "John Blanke",
    years: "C. 1511",
    description:
      "Court musician in the Tudor household. One of the earliest recorded Black individuals in Britain.",
    image: "/home/John.png",
  },
  {
    name: "Mansa Musa",
    years: "14TH CENTURY",
    description:
      "Emperor of Mali, symbol of African wealth, scholarship and global trade networks.",
    image: "/home/mansa.png",
  },
  {
    name: "Queen Nzinga",
    years: "17TH CENTURY",
    description:
      "Queen of Ndongo and Matamba who resisted Portuguese expansion and defended African sovereignty.",
    image: "/home/queen.png",
  },
  {
    name: "Yaa Asantewaa",
    years: "1840–1921",
    description:
      "Leader of the Ashanti resistance whose courage inspired generations across Africa.",
    image: "/home/sanwata.png",
  },
  {
    name: "Toussaint Louverture",
    years: "1743–1803",
    description:
      "Leader of the Haitian Revolution whose leadership transformed global history.",
    image: "/home/lover.png",
  },
];

export default function FoundationsSection() {
  return (
    <section className="w-full bg-[#F5EBE1] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12">
        {/* Heading */}

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-serif text-[22px] italic text-[#A54350] sm:text-[26px] lg:text-[30px]">
            II.
          </span>

          <p className="text-base font-semibold uppercase tracking-[0.02em] text-[#A54350] sm:text-lg lg:text-[22px]">
            Foundations
          </p>
        </div>

        <h2 className="mt-5 max-w-[920px] text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#000D1C] sm:mt-8 sm:leading-[1.05] sm:tracking-[-0.04em]">
          Foundations of Greatness
        </h2>

        <p className="mt-5 max-w-[1220px] text-[clamp(17px,2.2vw,30px)] leading-[1.5] text-[#59616A] sm:mt-8 sm:leading-[1.55]">
          Pre-1900 leadership and power. These figures represent early
          visibility, sovereignty and resistance proof that Black excellence
          has always existed at the centre of history.
        </p>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-16 sm:gap-7 md:grid-cols-3 xl:grid-cols-5">
          {foundations.map((person) => (
            <FoundationCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundationCard({
  name,
  years,
  description,
  image,
}: FoundationFigure) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(205deg,#2A261D_0%,#111419_42%)]">
      <div className="relative h-[200px] overflow-hidden sm:h-[220px] lg:h-[245px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-col items-center px-5 pb-7 pt-5 text-center sm:pb-8 sm:pt-6">
        <h3 className="text-[17px] font-semibold uppercase leading-[1.25] text-white sm:text-[20px]">
          {name}
        </h3>

        <p className="mt-2 text-sm uppercase text-[#BFB2A3] sm:mt-3 sm:text-[16px]">
          {years}
        </p>

        <p className="mt-5 text-[13px] leading-[1.7] text-[#E8E3DE] sm:mt-8">
          {description}
        </p>
      </div>
    </article>
  );
}