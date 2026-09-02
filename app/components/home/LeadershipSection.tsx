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
    <section className="bg-[var(--midnight)] px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[var(--gold)] uppercase">
          <span className="h-px w-6 bg-[var(--gold)]" />
          Leadership
        </p>
        <h2 className="font-serif text-3xl text-white md:text-4xl">
          GM Black Tech Expo / Hall of Fame
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-base italic leading-relaxed text-white/70">
          — A Vision by Michael Ekpechue, Founder &amp; Global CEO
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LEADERS.map((leader) => (
            <div key={leader.name} className="flex items-center gap-4 rounded-[10px] bg-[#001229] p-5">
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
                <p className="font-serif text-base text-white">{leader.name}</p>
                <p className="mt-1 text-xs text-white/60">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
