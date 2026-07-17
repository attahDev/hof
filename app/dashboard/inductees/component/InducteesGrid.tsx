"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Filter = {
    label: string;
    value: string;
};

type Inductee = {
    id: string;
    name: string;
    title: string;
    years: string;
    image: string;
    filters: string[];
    featured?: boolean;
    description?: string;
};

const filters: Filter[] = [
    { label: "All Inductees", value: "all" },
    { label: "UK & Manchester", value: "uk-manchester" },
    { label: "Africa", value: "africa" },
    { label: "American & Caribbean", value: "american-caribbean" },
    { label: "Global", value: "global" },
    { label: "Technology", value: "technology" },
    { label: "Education", value: "education" },
    { label: "Empowerment", value: "empowerment" },
    { label: "Public Service", value: "public-service" },
    { label: "Activist", value: "activist" },
    { label: "Arts & Culture", value: "arts-culture" },
    { label: "Innovation", value: "innovation" },
    { label: "Community Leader", value: "community-leader" },
];

const inductees: Inductee[] = [
    {
        id: "nelson-mandela",
        name: "NELSON MANDELA",
        title: "FREEDOM FIGHTER STATESMAN | HUMANITARIAN",
        years: "1918 – 2013",
        image: "/hero/Button.png",
        filters: ["africa", "activist", "public-service", "all"],
        featured: true,
        description:
            "Nelson Mandela was a pioneering freedom fighter, statesman, and global symbol of peace whose leadership transformed South Africa and inspired millions around the world. Through his unwavering commitment to justice, equality, reconciliation, and human dignity, helped end apartheid.",
    },
    {
        id: "chinua-achebe",
        name: "CHINUA ACHEBE",
        title: "FATHER OF MODERN\nAFRICAN LITERATURE",
        years: "1865 – 1930",
        image: "/hero/Button (3).png",
        filters: ["africa", "arts-culture", "education", "all"],
    },
    {
        id: "theophilus-nelson",
        name: "THEOPHILUS NELSON",
        title: "FIRST BLACK COUNCILLOR\nIN GREATER MANCHESTER",
        years: "1874 – 1940",
        image: "/hero/Button (4).png",
        filters: ["uk-manchester", "public-service", "all"],
    },
    {
        id: "len-johnson",
        name: "LEN JOHNSON",
        title: "BOXING CHAMPION &\nANTI-RACISM CAMPAISM",
        years: "1902 – 1974",
        image: "/hero/Button (11).png",
        filters: ["uk-manchester", "activist", "all"],
    },
    {
        id: "kwame-nkrumah",
        name: "DR. KWAME NKRUMAH",
        title: "PAN-AFRICAN LEADER\nVISIONARY | STATESMAN",
        years: "1918 – 2013",
        image: "/hero/Button (6).png",
        filters: ["africa", "public-service", "all"],
    },
    {
        id: "doreen-lawrence",
        name: "DOREEN LAWRENCE",
        title: "CAMPAIGNER FOR JUSTICE,\nEQUALITY, AND SOCIAL CHANGE.",
        years: "1952 – Present",
        image: "/hero/Button (7).png",
        filters: ["uk-manchester", "activist", "all"],
    },
    {
        id: "claudia-jones",
        name: "CLAUDIA JONES",
        title: "PIONEER OF THE BLACK BRITISH\nCIVIL RIGHTS MOVEMENT.",
        years: "1915 – 1964",
        image: "/hero/Button (8).png",
        filters: ["uk-manchester", "activist", "all"],
    },
    {
        id: "wangari-maathai",
        name: "WANGARI MAATHAI",
        title: "SOCIAL, ENVIRONMENTAL,\nAND POLITICAL ACTIVIST",
        years: "1940–2011",
        image: "/hero/Button (9).png",
        filters: ["africa", "activist", "education", "all"],
    },
    {
        id: "toussaint",
        name: "TOUSSAINT LOUVERTURE",
        title: "VISIONARY REVOLUTIONARY WHO\nLED THE FIGHT AGAINST SLAVERY.",
        years: "1918 – 2013",
        image: "/hero/Button (10).png",
        filters: ["american-caribbean", "activist", "all"],
    },
];

export default function InducteesGrid() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const activeFilter = searchParams.get("filter") ?? "all";

    const filteredInductees =
        activeFilter === "all"
            ? inductees
            : inductees.filter((item) => item.filters.includes(activeFilter));

    const setFilter = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value === "all") {
            params.delete("filter");
        } else {
            params.set("filter", value);
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const featured = filteredInductees.find((item) => item.featured) ?? inductees[0];
    const normalCards = filteredInductees.filter((item) => item.id !== featured.id);

    return (
        <section className="mt-10 w-full px-1">
            {/* Horizontal scrollable filter bar on mobile, wrapped flex on desktop */}
            <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap">
                {filters.map((filter) => {
                    const isActive = activeFilter === filter.value;

                    return (
                        <button
                            key={filter.value}
                            type="button"
                            onClick={() => setFilter(filter.value)}
                            className={[
                                "h-11 sm:h-12 shrink-0 rounded-lg border px-5 sm:px-6 text-xs sm:text-sm font-semibold transition whitespace-nowrap",
                                isActive
                                    ? "border-[#D9B700] bg-[#D9B700] text-[#000D1C]"
                                    : "border-[#C2B2B2] text-[#4B5563] hover:border-[#D9B700]",
                            ].join(" ")}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>

            {/* Layout container */}
            <div className="mt-7 space-y-[20px] sm:space-y-[15px]">
                
                {/* Hero Featured Row */}
                <FeaturedInductee item={featured} />

                {/* Second Row: 1 large card, 3 small cards. Refitted for mobile stacking */}
                <div className="grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-[455px_repeat(3,minmax(0,1fr))]">
                    <LargeInducteeCard item={featured} />

                    {normalCards.slice(0, 3).map((item) => (
                        <SmallInducteeCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Third Row: Remaining small cards */}
                <div className="grid grid-cols-1 gap-[15px] xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {normalCards.slice(3, 8).map((item) => (
                        <SmallInducteeCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeaturedInductee({ item }: { item: Inductee }) {
    return (
        <article className="relative flex flex-col md:flex-row min-h-[400px] md:h-[400px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(204.15deg,#3B2518_20.44%,#111419_52.26%)] p-6 md:p-0">
            {/* Image Box */}
            <div className="relative md:absolute md:-left-[20px] md:-top-5 h-[300px] md:h-[440px] w-full md:w-[302px] shrink-0 overflow-hidden rounded-lg md:rounded-none">
                <Image
                    src="/hero/Button (1).png"
                    alt="Prof Erinma Bell"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 302px"
                    className="object-cover object-top"
                />
            </div>

            {/* Content Box */}
            <div className="relative z-10 flex flex-col gap-4 mt-6 md:mt-0 md:absolute md:left-[320px] lg:left-[350px] md:top-[25px] md:bottom-[25px] md:right-6 lg:w-auto max-w-full">
                <span className="w-fit border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[4px] text-[#D9B700]">
                    Featured Inductee · 2026
                </span>

                <div>
                    <h2 className="text-[18px] sm:text-[20px] font-bold uppercase leading-snug text-white flex flex-col sm:flex-row sm:items-center">
                        PROF ERINMA BELL MBE DL{" "}
                        <span className="hidden sm:inline mx-3 text-[#B1A393]">•</span>
                        <span className="mt-1 sm:mt-0 font-light normal-case text-xs sm:text-[14px] text-[#B1A393]">
                            Pioneering peace activist, community leader
                        </span>
                    </h2>

                    <p className="mt-3 sm:mt-5 max-w-[790px] text-xs sm:text-[14px] font-light leading-relaxed sm:leading-6 text-white">
                        Prof Erinma Bell MBE DL is a pioneering peace activist, community
                        leader, and changemaker whose work has transformed lives and
                        strengthened communities in Manchester and beyond. Through her
                        leadership of CARISMA and her longstanding commitment to
                        peacebuilding, youth development, inclusion, and social justice, she
                        has built a legacy of bringing people together, challenging violence,
                        and creating opportunities for those too often left unheard.
                    </p>

                    <p className="mt-3 sm:mt-5 max-w-[790px] text-xs sm:text-[14px] font-light leading-relaxed sm:leading-6 text-[#DBD2C8]">
                        Her legacy is defined by courageous grassroots leadership, lasting
                        community impact, and an enduring commitment to inspiring others to
                        lead with compassion, purpose, and peace.
                    </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {[
                        "Manchester",
                        "Education",
                        "Community Leader",
                        "Global Impact",
                    ].map((tag, index) => (
                        <span
                            key={`${tag}-${index}`}
                            className="rounded-md border border-[#FFFFFF0D] bg-[#32241999] px-2.5 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[2px] text-[#B1A393]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

function LargeInducteeCard({ item }: { item: Inductee }) {
    return (
        <article className="relative flex flex-col xs:flex-row h-auto min-h-[325px] xs:h-[325px] w-full overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(204.15deg,#1E1E1E_20.44%,#111419_52.26%)] p-5 xs:p-0">
            {/* Image left block */}
            <div className="relative xs:absolute left-0 top-0 h-[200px] xs:h-[225px] w-full xs:w-[199px] overflow-hidden rounded-lg">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 199px"
                    className="object-cover object-top"
                />
            </div>

            {/* Top Right context info */}
            <div className="xs:absolute left-0 xs:left-[225px] top-5 right-5 mt-4 xs:mt-0">
                <span className="xs:ml-auto block w-fit border border-white/10 px-3 py-1.5 text-[9px] font-semibold tracking-[3px] text-[#D9B700]">
                    {item.years}
                </span>

                <p className="mt-5 xs:mt-7 text-xs font-light leading-relaxed text-[#DBD2C8] line-clamp-4 xs:line-clamp-none">
                    {item.description}
                    <span className="ml-1 text-[#D9B700] block mt-1">Click to open »</span>
                </p>
            </div>

            {/* Bottom context info */}
            <div className="xs:absolute bottom-5 left-5 right-5 mt-5 xs:mt-0 xs:max-w-[190px]">
                <h3 className="text-[16px] xs:text-[18px] font-bold leading-tight text-white">
                    {item.name}
                </h3>

                <p className="mt-1.5 whitespace-pre-line text-[9px] uppercase leading-4 text-[#DBD2C8]">
                    {item.title}
                </p>
            </div>
        </article>
    );
}

function SmallInducteeCard({ item }: { item: Inductee }) {
    return (
        <article className="relative flex flex-col justify-between h-[325px] w-full overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(205.51deg,#282610_4.55%,#111419_38.62%)] p-4 pb-5">
            {/* Responsive Image holder */}
            <div className="relative mx-auto h-[180px] sm:h-[205px] w-full max-w-[200px] overflow-hidden rounded-lg">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 200px, 200px"
                    className="object-cover object-top"
                />
            </div>

            {/* Text description */}
            <div className="text-center mt-3">
                <h3 className="text-xs sm:text-[14px] font-bold uppercase leading-snug text-white line-clamp-1">
                    {item.name}
                </h3>

                <p className="mt-[4px] whitespace-pre-line text-[9px] sm:text-[10px] uppercase leading-snug text-[#DBD2C8] line-clamp-2 h-8">
                    {item.title}
                </p>

                <p className="text-[10px] sm:text-[11px] text-[#B1A393] mt-1">{item.years}</p>
            </div>
        </article>
    );
}