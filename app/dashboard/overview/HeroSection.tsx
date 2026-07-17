import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HallOfFamePage() {
    return (
        <main className="bg-[#F5EBE1] pt-6 sm:pt-[30px] px-4 sm:px-6 lg:px-0">
            <section className="flex flex-col lg:flex-row w-full gap-[20px]">
                {/* LEFT HERO */}
                <div className="relative h-auto min-h-[300px] lg:h-[300px] flex-1 overflow-hidden rounded-[15px] bg-[#000D1C] py-8 px-6 sm:px-8 lg:p-0">
                    {/* Hero Image - Placed exactly as original on desktop, safely scaled on mobile */}
                    <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[620px] h-[200px] sm:h-[255px] lg:h-[255px] bottom-0 z-0 opacity-40 md:opacity-100">
                        <Image
                            src="/hero/heorimage.png"
                            alt="Hall of Fame Leaders"
                            fill
                            priority
                            className="object-cover object-[50%_50%]"
                        />
                    </div>

                    {/* Dark Blenders - Kept exactly as original on large displays */}
                    <div className="hidden lg:block absolute inset-y-0 left-0 z-[1] w-[450px] bg-[#000D1C]" />
                    <div className="hidden lg:block absolute inset-y-0 left-[360px] z-[2] w-[180px] bg-gradient-to-r from-[#000D1C] to-transparent" />
                    {/* Mobile alternative gradient overlay */}
                    <div className="block lg:hidden absolute inset-0 z-[1] bg-gradient-to-r from-[#000D1C] via-[#000D1C]/85 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 h-full lg:px-[26px] lg:pt-[26px] flex flex-col justify-center lg:justify-start">
                        <h1 className="text-[22px] sm:text-[25px] font-bold uppercase leading-tight sm:leading-[31px] tracking-[0.2px] text-white">
                            WELCOME BACK,{" "}
                            {/* <span className="text-[#D9B700]">MICHAEL</span> */}
                        </h1>

                        <p className="mt-2 sm:mt-[9px] text-[16px] sm:text-[18px] font-medium leading-snug sm:leading-[24px] text-[#B1A393]">
                            Inspired by Legacy. Built by Community
                        </p>

                        <p className="mt-4 sm:mt-[27px] w-full max-w-[340px] text-[13px] sm:text-[14px] font-light leading-relaxed sm:leading-[22px] text-[#FFFFFF]">
                            Celebrating Black Leadership, creativity, scholarship, and
                            resilience, past, present, and rising stars shaping our future.
                        </p>

                        <button className="mt-6 sm:mt-[27px] flex h-[44px] sm:h-[46px] w-[160px] sm:w-[178px] items-center justify-center gap-3 sm:gap-[14px] rounded-[7px] bg-[#D9B700] text-sm sm:text-[16px] font-semibold text-[#000D1C] transition hover:bg-[#D9B700]/90">
                            Explore Legacy
                            <ArrowRight size={18} strokeWidth={2.5} className="sm:size-5" />
                        </button>
                    </div>
                </div>

                {/* RIGHT STATS */}
                <div className="grid h-auto lg:h-[300px] w-full lg:w-[400px] shrink-0 grid-cols-2 overflow-hidden rounded-[15px] bg-[#000D1C]">
                    {/* Top Left */}
                    <div className="rounded-br-[32px] border-b border-r border-[#C2B2B240] p-4 sm:p-0">
                        <StatCard
                            icon={<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.02355 17.25L1.33605 7.425C1.09081 7.00109 0.975465 6.51449 1.00435 6.0256C1.03324 5.53671 1.20509 5.06708 1.49855 4.675L3.51105 2C3.74392 1.68951 4.04588 1.4375 4.39302 1.26393C4.74016 1.09036 5.12294 1 5.51105 1H20.5111C20.8992 1 21.2819 1.09036 21.6291 1.26393C21.9762 1.4375 22.2782 1.68951 22.5111 2L24.5111 4.675C24.8065 5.06581 24.9805 5.53481 25.0116 6.02371C25.0428 6.51262 24.9295 6.99989 24.6861 7.425L18.9986 17.25" stroke="#858062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.2617 13.4974L21.6117 1.24739" stroke="#858062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.7615 13.4974L4.4115 1.24739" stroke="#858062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.01172 7.25H18.0117" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M13.0117 26C16.4635 26 19.2617 23.2018 19.2617 19.75C19.2617 16.2982 16.4635 13.5 13.0117 13.5C9.55994 13.5 6.76172 16.2982 6.76172 19.75C6.76172 23.2018 9.55994 26 13.0117 26Z" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M13.0117 21V18.5H12.3867" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                            value="126+"
                            label="Inductees"
                            subLabel="+4 this year"
                        />
                    </div>

                    {/* Top Right */}
                    <div className="rounded-bl-[32px] border-b border-l border-[#C2B2B240] p-4 sm:p-0">
                        <StatCard
                            icon={<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M8.5 13.5C8.5 8.84593 10.2903 4.37019 13.5 1C16.7097 4.37019 18.5 8.84593 18.5 13.5C18.5 18.1541 16.7097 22.6298 13.5 26C10.2903 22.6298 8.5 18.1541 8.5 13.5Z" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M1 13.5H26" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                            value="35+"
                            label="Region"
                        />
                    </div>

                    {/* Bottom Left */}
                    <div className="rounded-tr-[32px] border-r border-t border-[#C2B2B240] p-4 sm:p-0">
                        <StatCard
                            icon={<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 16.8252V18.8577C10.9953 19.286 10.8806 19.7059 10.667 20.0771C10.4533 20.4483 10.1479 20.7584 9.78 20.9777C8.99893 21.5562 8.36355 22.3089 7.92436 23.176C7.48516 24.0431 7.25426 25.0007 7.25 25.9727" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M16 16.8252V18.8577C16.0047 19.286 16.1194 19.7059 16.333 20.0771C16.5467 20.4483 16.8521 20.7584 17.22 20.9777C18.0011 21.5562 18.6364 22.3089 19.0756 23.176C19.5148 24.0431 19.7457 25.0007 19.75 25.9727" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M21 9.75H22.875C23.7038 9.75 24.4987 9.42076 25.0847 8.83471C25.6708 8.24866 26 7.4538 26 6.625C26 5.7962 25.6708 5.00134 25.0847 4.41529C24.4987 3.82924 23.7038 3.5 22.875 3.5H21" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M3.5 26H23.5" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M6 9.75C6 11.7391 6.79018 13.6468 8.1967 15.0533C9.60322 16.4598 11.5109 17.25 13.5 17.25C15.4891 17.25 17.3968 16.4598 18.8033 15.0533C20.2098 13.6468 21 11.7391 21 9.75V2.25C21 1.91848 20.8683 1.60054 20.6339 1.36612C20.3995 1.1317 20.0815 1 19.75 1H7.25C6.91848 1 6.60054 1.1317 6.36612 1.36612C6.1317 1.60054 6 1.91848 6 2.25V9.75Z" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M6 9.75H4.125C3.2962 9.75 2.50134 9.42076 1.91529 8.83471C1.32924 8.24866 1 7.4538 1 6.625C1 5.7962 1.32924 5.00134 1.91529 4.41529C2.50134 3.82924 3.2962 3.5 4.125 3.5H6" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                            value="1,245"
                            label="Community Champions"
                        />
                    </div>

                    {/* Bottom Right */}
                    <div className="rounded-tl-[32px] border-l border-t border-[#C2B2B240] p-4 sm:p-0">
                        <StatCard
                            icon={<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4444 26V23.2222C20.4444 21.7488 19.8591 20.3357 18.8173 19.2938C17.7754 18.252 16.3623 17.6667 14.8889 17.6667H6.55556C5.08213 17.6667 3.66905 18.252 2.62718 19.2938C1.58532 20.3357 1 21.7488 1 23.2222V26" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M20.4445 1.17905C21.6358 1.48789 22.6908 2.18358 23.444 3.15691C24.1972 4.13024 24.6058 5.32612 24.6058 6.55682C24.6058 7.78753 24.1972 8.98341 23.444 9.95674C22.6908 10.9301 21.6358 11.6258 20.4445 11.9346" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M28.7778 25.9985V23.2207C28.7768 21.9898 28.3671 20.794 27.613 19.8211C26.8588 18.8483 25.8029 18.1534 24.6111 17.8457" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M10.7222 12.1111C13.7904 12.1111 16.2777 9.6238 16.2777 6.55556C16.2777 3.48731 13.7904 1 10.7222 1C7.65393 1 5.16663 3.48731 5.16663 6.55556C5.16663 9.6238 7.65393 12.1111 10.7222 12.1111Z" stroke="#858062" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                            value="1,245"
                            label="Award Winners"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

function StatCard({
    icon,
    value,
    label,
    subLabel,
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
    subLabel?: string;
}) {
    return (
        <div className="h-full px-[15px] pt-4 sm:pt-[18px] flex flex-col justify-between pb-4 sm:pb-0">
            <div>
                <div className="mb-[10px] sm:mb-[18px] text-[#858062]">{icon}</div>

                <div className="flex items-end gap-[7px]">
                    <h1 className="text-[24px] sm:text-[30px] font-medium leading-none text-[#D9B700]">
                        {value}
                    </h1>
                </div>
            </div>

            <p className="mt-[6px] sm:mt-[8px] text-[11px] sm:text-[12px] font-medium leading-tight sm:leading-[15px] text-[#B1A393]">
                {label}
                 {subLabel && (
                    <span className="block xs:inline-block xs:ml-2 text-[8px] font-light text-[#858062]">
                        {subLabel}
                    </span>
                )}
            </p>
        </div>
    );
}