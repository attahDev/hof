import Image from "next/image";

type Leader = {
  name: string;
  title: string;
  image: string;
};

const LEADERS: Leader[] = [
  {
    name: "Michael Ekpechue",
    title: "Founder & Global CEO, GM Black Tech Expo",
    image: "/team/michael-ekpechue.jpg",
  },
  {
    name: "Carol Ann Whitehead FRSA CMGR CCMI",
    title: "Executive Director Heritage & Legacy, Black Tech Expo Hall of Fame",
    image: "/team/carol-ann-whitehead-award.jpeg",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="w-full overflow-hidden bg-[#000512] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-2 flex items-center gap-2 font-montserrat text-[12px] font-semibold uppercase tracking-[0.22em] text-[#D9B700]">
          <span className="h-px w-6 bg-[#D9B700]" />
          Leadership
        </p>
        <h2 className="font-serif text-[clamp(28px,5vw,44px)] font-medium text-white">
          GM Black Tech Expo / Hall of Fame
        </h2>
        <p className="mt-3 max-w-2xl font-montserrat text-[15px] italic leading-relaxed text-white/70 sm:text-[17px]">
          — A Vision by Michael Ekpechue, Founder &amp; Global CEO
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="flex items-center gap-4 rounded-lg border border-white/10 bg-gradient-to-b from-[#1E2328] to-[#191E23] p-5"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-montserrat text-base font-semibold text-white">{leader.name}</p>
                <p className="mt-1 text-xs text-white/60">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
