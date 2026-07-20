"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Globe2, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";

type RegionId = "all" | "uk" | "africa" | "america-caribbean" | "global";

type Person = {
    id: string;
    name: string;
    role: string;
    location: string;
    image: string;
    region: Exclude<RegionId, "all">;
    category: string;
    sector: string;
    tags: string[];
};

const regions = [
    { id: "uk", label: "UK & Manchester", count: 78 },
    { id: "africa", label: "Africa", count: 96 },
    { id: "america-caribbean", label: "America & Caribbean", count: 64 },
    { id: "global", label: "Global", count: 116 },
] satisfies { id: Exclude<RegionId, "all">; label: string; count: number }[];

const people: Person[] = [
    {
        id: "ayanna",
        name: "D. AYANNA THOMPSON",
        role: "AI RESEARCHER, COMMUNITY & INNOVATION\nLEADER",
        location: "Manchester, UK",
        image: "/regional/person-1.png",
        region: "uk",
        category: "Technology",
        sector: "AI",
        tags: ["TECHNOLOGY", "AI", "RESEARCH"],
    },
    {
        id: "michael",
        name: "MICHAEL EKPECHUE",
        role: "FOUNDER, DIRECTOR & ADVOCATE FOR\nINNOVATION & IMPACT",
        location: "Manchester, UK",
        image: "/regional/person-2.png",
        region: "uk",
        category: "Leadership",
        sector: "Technology",
        tags: ["LEADER", "AI", "TECHNOLOGY"],
    },
    {
        id: "david",
        name: "DAVID RODRIGUEZ",
        role: "SOCIAL ENTREPRENEUR & COMMUNITY\nBUILDER",
        location: "Accra, Ghana",
        image: "/regional/person-3.png",
        region: "africa",
        category: "Community",
        sector: "Social Impact",
        tags: ["SOCIAL IMPACT", "LEADER"],
    },
    {
        id: "henry",
        name: "HENRY GEORGE",
        role: "EDUCATION INNOVATOR & MENTOR\nAND COMMUNITY BUILDER",
        location: "Toronto, Canada",
        image: "/regional/person-4.png",
        region: "america-caribbean",
        category: "Education",
        sector: "Innovation",
        tags: ["EDUCATION", "INNOVATION"],
    },
    {
        id: "romeo",
        name: "ROMEO KAMPSON",
        role: "HEALTH TECH FOUNDER & INNOVATION\nLEADER",
        location: "America",
        image: "/regional/person-5.png",
        region: "america-caribbean",
        category: "Health",
        sector: "Technology",
        tags: ["HEALTH", "TECHNOLOGY"],
    },
    {
        id: "maria",
        name: "MARIA JOHNSON",
        role: "RENEWABLE ENERGY ADVOCATE &\nCOMMUNITY BUILDER",
        location: "Jamaica",
        image: "/regional/person-6.png",
        region: "america-caribbean",
        category: "Sustainability",
        sector: "Leadership",
        tags: ["SUSTAINABILITY", "LEADER"],
    },
];

const categories = [
    "All Categories",
    "Technology",
    "Leadership",
    "Community",
    "Education",
    "Health",
    "Sustainability",
    "Innovation",
    "Public Service",
];

const sectors = [
    "All Sectors",
    "AI",
    "Technology",
    "Leadership",
    "Social Impact",
    "Innovation",
];

export default function RegionalDirectory() {
    const [activeRegion, setActiveRegion] = useState<RegionId>("all");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [sector, setSector] = useState("All Sectors");
    const [page, setPage] = useState(1);
    const resetToFirstPage = () => setPage(1);

    const perPage = 6;

    const filteredPeople = useMemo(() => {
        return people.filter((person) => {
            const q = search.trim().toLowerCase();

            const matchesRegion =
                activeRegion === "all" || person.region === activeRegion;

            const matchesSearch =
                !q ||
                person.name.toLowerCase().includes(q) ||
                person.location.toLowerCase().includes(q) ||
                person.role.toLowerCase().includes(q) ||
                person.tags.some((tag) => tag.toLowerCase().includes(q));

            const matchesCategory =
                category === "All Categories" || person.category === category;

            const matchesSector = sector === "All Sectors" || person.sector === sector;

            return matchesRegion && matchesSearch && matchesCategory && matchesSector;
        });
    }, [activeRegion, search, category, sector]);

    const totalPages = Math.max(1, Math.ceil(filteredPeople.length / perPage));

    const paginatedPeople = filteredPeople.slice(
        (page - 1) * perPage,
        page * perPage
    );

    return (
        <section className="mt-8 px-4 sm:px-6 lg:px-0">
            {/* Search and Filters Header block */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Search box scaled */}
                <div className="relative w-full md:max-w-[320px]">
                    <Search
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                    />

                    <input
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                            resetToFirstPage();
                        }}
                        placeholder="Search by name or region..."
                        className="h-12 w-full rounded-lg border border-[#C2B2B2] bg-transparent pl-11 pr-4 text-sm text-[#111419] outline-none placeholder:text-[#6B7280]"
                    />
                </div>

                {/* Dropdowns wrap beautifully on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <FilterSelect
                        value={category}
                        onChange={(value) => {
                            setCategory(value);
                            resetToFirstPage();
                        }}
                        options={categories}
                    />

                    <FilterSelect
                        value={sector}
                        onChange={(value) => {
                            setSector(value);
                            resetToFirstPage();
                        }}
                        options={sectors}
                    />
                </div>
            </div>

            {/* Layout Block (Stacked on Mobile/Tablet, side-by-side on Desktop) */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[327px_1fr] gap-6 lg:gap-[15px]">
                {/* Region Selector Panel */}
                <aside className="h-auto lg:h-[550px] rounded-[15px] border border-black/10 bg-[linear-gradient(205.51deg,#F5EBE1_4.55%,#DBD2C8_38.62%)] p-4 sm:p-[15px]">
                    <div className="flex items-center justify-between px-2 lg:px-5 lg:pt-3">
                        <h2 className="text-lg lg:text-xl font-bold uppercase text-[#3C3300]">
                            Regions
                        </h2>
                        {activeRegion !== "all" && (
                            <button 
                                onClick={() => setActiveRegion("all")}
                                className="text-xs font-semibold text-[#D7263D] hover:underline lg:hidden"
                            >
                                Clear Filter
                            </button>
                        )}
                    </div>

                    {/* horizontal scroll list on mobile, normal list on desktop */}
                    <div className="mt-4 lg:mt-8 flex lg:flex-col gap-3 lg:gap-0 lg:space-y-[15px] xl:space-y-[26px] overflow-x-auto pb-2 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {regions.map((region, index) => {
                            const isActive = activeRegion === region.id;

                            return (
                                <button
                                    key={region.id}
                                    type="button"
                                    onClick={() => setActiveRegion(region.id)}
                                    className={[
                                        "flex h-[75px] lg:h-[85px] min-w-[240px] sm:min-w-[280px] lg:min-w-0 lg:w-full items-center gap-3 lg:gap-5 rounded-xl px-4 lg:px-6 text-left transition shrink-0",
                                        isActive
                                            ? "bg-[#CFC1A7]"
                                            : "bg-[#E7DDD1]/60 hover:bg-[#D9CDBE]",
                                    ].join(" ")}
                                >
                                    <span className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-black/15 bg-[#F8F4EA] text-[#111419] shrink-0">
                                        {index === 3 ? <Globe2 size={22} className="lg:size-[26px]" /> : <MapPin size={20} className="lg:size-[24px]" />}
                                    </span>

                                    <span className="truncate">
                                        <span className="block text-base lg:text-xl font-bold text-black truncate">
                                            {region.label}
                                        </span>
                                        <span className="mt-0.5 lg:mt-1 block text-xs lg:text-base text-[#3D332E]">
                                            {region.count} Individuals
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* Cards Output Display */}
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-[15px]">
                        {paginatedPeople.map((person) => (
                            <RegionalPersonCard key={person.id} person={person} />
                        ))}
                    </div>

                    {paginatedPeople.length === 0 && (
                        <div className="flex h-[300px] w-full items-center justify-center rounded-[15px] border border-black/10 bg-white/40 text-base font-semibold text-[#111419]">
                            No individuals found.
                        </div>
                    )}
                </div>
            </div>

            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </section>
    );
}

function FilterSelect({
    value,
    onChange,
    options,
}: {
    value: string;
    onChange: (value: string) => void;
    options: string[];
}) {
    return (
        <div className="relative w-full sm:w-auto">
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="h-12 w-full sm:min-w-[180px] appearance-none rounded-lg border border-[#C2B2B2] bg-[#F8F4EA] px-4 pr-10 text-sm sm:text-base font-semibold text-[#111419] outline-none"
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>

            <ChevronDown
                size={22}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#111419]"
            />
        </div>
    );
}

function RegionalPersonCard({ person }: { person: Person }) {
    return (
        <article className="flex flex-col h-auto min-h-[500px] lg:h-[520px] overflow-hidden rounded-[15px] border border-white/10 bg-[linear-gradient(205.51deg,#282610_4.55%,#111419_38.62%)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-[240px] sm:h-[280px] w-full shrink-0">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-[50%_10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111419]/40" />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-base font-bold uppercase leading-tight text-white line-clamp-1">
                        {person.name}
                    </h3>

                    <p className="mt-2.5 text-[10px] uppercase leading-4 text-[#DBD2C8] line-clamp-2 h-8">
                        {person.role}
                    </p>

                    <p className="mt-2 text-xs sm:text-sm font-medium text-[#B1A393] flex items-center gap-1.5">
                        <MapPin size={14} className="opacity-75" />
                        {person.location}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {person.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded border border-[#B1A393]/40 bg-[#32241999] px-2 py-1 text-[8px] uppercase tracking-widest text-[#B1A393]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    href="/dashboard/inductees"
                    className="mt-5 flex h-10 sm:h-[42px] w-full sm:w-[116px] items-center justify-center rounded-lg bg-[#D7263DE5] text-xs sm:text-sm font-semibold text-white transition hover:bg-[#D7263D]"
                >
                    View Profile
                </Link>
            </div>
        </article>
    );
}

function Pagination({
    page,
    totalPages,
    onPageChange,
}: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-11 flex justify-center gap-3 sm:gap-4">
            {pages.map((item) => {
                const isActive = item === page;

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => onPageChange(item)}
                        className={[
                            "h-11 w-11 sm:h-14 sm:w-14 rounded-md border text-sm sm:text-xl font-bold transition",
                            isActive
                                ? "border-[#D7263D] bg-[linear-gradient(205.51deg,#FFFFFF_4.55%,#F5EBE1_38.62%)] text-[#111419]"
                                : "border-[#E9DCD3] bg-transparent text-[#7B7B7B] hover:border-[#D7263D]",
                        ].join(" ")}
                    >
                        {item}
                    </button>
                );
            })}

            <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => onPageChange(Math.min(page + 1, totalPages))}
                className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-md border border-[#E9DCD3] transition hover:border-[#D7263D] disabled:cursor-not-allowed disabled:opacity-40 text-[#7B7B7B]"
            >
                <ChevronRight size={22} className="sm:size-[26px]" />
            </button>
        </div>
    );
}