import {
    ArrowDown,
    Globe2,
    Trophy,
    UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type LegacyStat = {
    value: string;
    label: string;
    icon: React.ComponentType<{
        size?: number;
        strokeWidth?: number;
        className?: string;
    }>;
};

const legacyStats: LegacyStat[] = [
    {
        value: "1,245+",
        label: "Community Champions",
        icon: Trophy,
    },
    {
        value: "35+",
        label: "Regions",
        icon: Globe2,
    },
    {
        value: "485+",
        label: "Award Winners",
        icon: UsersRound,
    },
];

export default function LegacyImpactSection() {
    return (
        <section id="legacy" className="w-full overflow-hidden bg-[#061018]">
            <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 lg:min-h-[760px] lg:grid-cols-[minmax(0,0.95fr)_400px_minmax(0,1.35fr)] lg:gap-0">
                <LegacyIntroduction />

                <LegacyStatistics />

                <div className="flex h-full min-h-0 lg:pl-2">
                    <LegacyCollage />
                </div>
            </div>
        </section>
    );
}

function LegacyIntroduction() {
    return (
        <div className="flex flex-col px-6 pb-4 pt-14 sm:px-12 sm:pb-16 sm:pt-16 lg:min-h-[760px] lg:px-14 lg:pb-16 xl:px-16">
            <div className="lg:mt-auto">
                <p className="max-w-[500px] text-[24px] font-normal leading-[1.35] text-white sm:text-[27px] lg:text-[30px]">
                    From great
                    <br />
                    ancient kingdoms to
                    <br />
                    modern innovators.
                </p>

                <Link
                    href="#legacy"
                    className="mt-8 inline-flex h-12 w-fit items-center gap-3 rounded-lg bg-[#D9B700] px-4 text-base font-medium text-[#000D1C] transition hover:bg-[#E5C300] sm:mt-10 sm:h-14 sm:gap-4 sm:px-5 sm:text-xl lg:mt-14 lg:h-16 lg:text-[25px]"
                >
                    Explore the Legacy
                    <ArrowDown size={20} strokeWidth={1.8} className="sm:hidden" />
                    <ArrowDown
                        size={24}
                        strokeWidth={1.8}
                        className="hidden sm:block"
                    />
                </Link>

                <div className="mt-8 w-fit sm:mt-10 lg:mt-14">
                    <Link
                        href="/dashboard/nominations"
                        className="block font-montserrat text-lg font-normal text-white transition hover:text-[#D9B700] sm:text-xl lg:text-[25px]"
                    >
                        Nominate a Changemaker
                    </Link>

                    <div className="relative mt-3 h-2 w-full">
                        <div className="absolute bottom-0 left-1.5 right-1.5 border-b border-white/70" />
                        <div className="absolute bottom-0 left-0 h-2 w-2 rounded-bl-[8px] border-b border-l border-white/70" />
                        <div className="absolute bottom-0 right-0 h-2 w-2 rounded-br-[8px] border-b border-r border-white/70" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function LegacyStatsContent() {
    return (
        <>
            <div className="mt-4 text-center sm:mt-10">
                <p className="font-montserrat text-[clamp(36px,8vw,45px)] font-medium leading-none text-white">
                    126+
                </p>

                <p className="mt-3 font-montserrat text-[clamp(34px,7.5vw,45px)] font-normal leading-none text-white">
                    Inductees
                </p>
            </div>

            <div className="mt-10 sm:mt-14">
                {legacyStats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className={[
                                "flex items-center gap-4 py-6 sm:gap-5 sm:py-8",
                                index !== legacyStats.length - 1
                                    ? "border-b border-white/10"
                                    : "",
                            ].join(" ")}
                        >
                            <Icon
                                size={26}
                                strokeWidth={1.8}
                                className="shrink-0 text-[#D9B700] sm:size-7"
                            />

                            <div>
                                <p className="font-montserrat text-2xl font-semibold leading-none text-white sm:text-[28px]">
                                    {stat.value}
                                </p>

                                <p className="mt-2 font-montserrat text-lg font-normal leading-tight text-white/85 sm:mt-3 sm:text-xl">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

function LegacyStatistics() {
    return (
        <div className="relative lg:min-h-[760px]">
            <div className="rounded-lg border border-[#D9B700]/40 bg-gradient-to-b from-[#1E2328] to-[#191E23] px-6 py-10 sm:px-12 lg:hidden">
                <LegacyStatsContent />
            </div>

            <div className="relative hidden min-h-[760px] lg:block">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 420 760"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
                    <defs>
                        <linearGradient
                            id="legacy-panel-border"
                            x1="210"
                            y1="0"
                            x2="210"
                            y2="760"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="#453A00" />
                            <stop
                                offset="61.06%"
                                stopColor="#D9B700"
                                stopOpacity="0"
                            />
                        </linearGradient>

                        <linearGradient
                            id="legacy-panel-background"
                            x1="210"
                            y1="0"
                            x2="210"
                            y2="760"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="#1E2328" />
                            <stop offset="100%" stopColor="#191E23" />
                        </linearGradient>
                    </defs>

                    <path
                        d="
                M1 759
                L1 270
                L48 270
                C80 270 99 251 99 219
                L321 219
                C321 251 340 270 372 270
                L419 270
                L419 759
                Z
              "
                        fill="url(#legacy-panel-background)"
                        stroke="url(#legacy-panel-border)"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />

                    <path
                        d="
                M1 759
                L1 270
                L48 270
                C80 270 99 251 99 219
                L321 219
                C321 251 340 270 372 270
                L419 270
                L419 759
                Z
              "
                        fill="rgba(0,0,0,0.2)"
                    />
                </svg>

                <div className="relative z-10 flex h-full flex-col px-10 pb-10 pt-[270px]">
                    <LegacyStatsContent />
                </div>
            </div>
        </div>
    );
}

function LegacyCollage() {
    return (
        <div className="relative flex h-full min-h-[640px] w-full items-end justify-center overflow-hidden px-4 pb-0 pt-8 sm:min-h-[700px] sm:px-6 lg:min-h-0 lg:px-0 lg:pt-0">
            <div className="relative mx-auto flex w-full max-w-[520px] flex-col items-center sm:max-w-[560px] lg:max-w-[600px]">
                {/* Top — looking aside, nameplate baked into asset */}
                <div className="relative z-20 w-[92%] self-start sm:w-[90%]">
                    <Image
                        src="/legacy_carol2.png"
                        alt="Carol Ann Whitehead, Executive Director Heritage & Legacy"
                        width={900}
                        height={600}
                        priority
                        sizes="(max-width: 1024px) 85vw, 560px"
                        className="h-auto w-full"
                    />
                </div>

                {/* Bottom — facing camera, stacked & slightly larger */}
                <div className="relative z-10 -mt-[12%] w-full self-end sm:w-[96%]">
                    <Image
                        src="/legacy_carol.png"
                        alt="Carol Ann Whitehead"
                        width={900}
                        height={600}
                        priority
                        sizes="(max-width: 1024px) 90vw, 600px"
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </div>
    );
}
