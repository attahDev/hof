import Link from "next/link";
import { Landmark, Handshake, Globe, Trophy, type LucideIcon } from "lucide-react";
import type { StatsContent, HomeStats } from "../../lib/gmbteApi";
import FeaturedLeaderCard from "./FeaturedLeaderCard";
import AnimatedNumber from "../animations/AnimatedNumber";

const STAT_ICONS: Record<string, LucideIcon> = {
  Inductees: Landmark,
  "Community Champions": Handshake,
  Regions: Globe,
  "Award Winners": Trophy,
};

function fmt(n: number) {
  return `${n.toLocaleString()}+`;
}

export default function StatsSection({ stats, content }: { stats: HomeStats; content?: StatsContent }) {
  const rows = [
    {
      label: content?.inducteesLabel ?? "Inductees",
      value: fmt(stats.inducteesCount),
      caption: "Hall of Fame legends recognized across six centuries",
    },
    {
      label: content?.communityLabel ?? "Community Champions",
      value: fmt(stats.communityChampionsCount),
      caption: "Builders and visionaries in the global BTE network",
    },
    {
      label: content?.regionsLabel ?? "Regions",
      value: fmt(stats.regionsCount),
      caption: "Nations and territories represented in our archive",
    },
    {
      label: content?.awardsLabel ?? "Award Winners",
      value: fmt(stats.awardWinnersCount),
      caption: "Recipients of the BTE Global Excellence Citation",
    },
  ];

  return (
    <section className="bg-[var(--midnight)] px-6 py-16">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[var(--gold)] uppercase">
            <span className="h-px w-6 bg-[var(--gold)]" />
            The Numbers
          </p>
          <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl">
            From great ancient kingdoms to modern innovators.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/hall-of-fame"
              className="rounded-[8px] bg-[var(--gold)] px-6 py-3 text-xs font-bold tracking-wide text-[var(--ink)]"
            >
              Explore the Legacy →
            </Link>
            <Link
              href="/hall-of-fame/nominate"
              className="rounded-[8px] border border-white/30 px-6 py-3 text-xs font-bold tracking-wide text-white"
            >
              Nominate a Changemaker
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {rows.map((stat) => {
            const Icon = STAT_ICONS[stat.label] ?? Trophy;
            return (
              <div key={stat.label}>
                <Icon size={22} strokeWidth={1.75} className="text-[var(--gold)]" />
                <p className="mt-3 font-serif text-3xl text-white">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-white/70 uppercase">{stat.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/40">{stat.caption}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 lg:mt-0">
          <FeaturedLeaderCard
            name="Carol Ann Whitehead FRSA CMGR CCMI"
            title="Executive Director Heritage & Legacy, Black Tech Expo Hall of Fame"
            image="/team/carol-ann-whitehead-award.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
