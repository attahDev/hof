import Link from "next/link";
import { Search } from "lucide-react";

export default function Navigation() {
    return (
        <header className="flex h-[70px] items-center justify-between gap-3 border-b border-[#001F3F40] bg-[#F8F4EA] px-4 py-4 sm:h-[85px] sm:gap-4 sm:px-6 sm:py-[25px] lg:px-[30px]">
            {/* Search - Shrinks gracefully on small screens */}
            <div className="relative min-w-0 flex-1 max-w-[180px] xs:max-w-[260px] sm:max-w-[420px] lg:max-w-[760px]">
                <Search
                    size={20}
                    strokeWidth={2}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B8494] sm:left-6 lg:left-8 lg:size-[22px]"
                />

                <input
                    type="text"
                    placeholder="Search..."
                    className="h-10 w-full rounded-[14px] border border-[#BFB8AE] bg-transparent pl-9 pr-3 text-xs font-normal text-[#001F3F] placeholder:text-[#8A93A1] focus:outline-none sm:h-12 sm:pl-14 sm:pr-6 sm:text-base lg:pl-[68px] lg:text-[18px]"
                />
            </div>

            {/* Right Side Controls */}
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
                
                {/* Notifications Bell
                <button aria-label="Notifications" className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:h-[25px] sm:w-[25px]">
                        <path d="M10.6958 21.875C10.8787 22.1917 11.1417 22.4547 11.4583 22.6375C11.775 22.8203 12.1343 22.9166 12.5 22.9166C12.8657 22.9166 13.2249 22.8203 13.5416 22.6375C13.8583 22.4547 14.1213 22.1917 14.3041 21.875" stroke="#001F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.39789 15.9646C3.26181 16.1137 3.17201 16.2992 3.1394 16.4985C3.1068 16.6977 3.1328 16.9021 3.21425 17.0869C3.29569 17.2716 3.42907 17.4287 3.59815 17.539C3.76724 17.6494 3.96474 17.7082 4.16664 17.7083H20.8333C21.0352 17.7084 21.2327 17.6498 21.4019 17.5397C21.5711 17.4296 21.7047 17.2727 21.7863 17.088C21.868 16.9034 21.8942 16.699 21.8619 16.4998C21.8295 16.3005 21.74 16.1149 21.6041 15.9656C20.2187 14.5375 18.75 13.0198 18.75 8.33333C18.75 6.67573 18.0915 5.08602 16.9194 3.91391C15.7473 2.74181 14.1576 2.08333 12.5 2.08333C10.8424 2.08333 9.25266 2.74181 8.08055 3.91391C6.90845 5.08602 6.24997 6.67573 6.24997 8.33333C6.24997 13.0198 4.78018 14.5375 3.39789 15.9646Z" stroke="#001F3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#E3314B] text-[9px] font-semibold text-white sm:-right-2 sm:-top-2 sm:h-5 sm:w-5 sm:text-[11px]">
                        2
                    </span>
                </button> */}

                {/* Dashboard Route Link */}
                <Link 
                    href="/dashboard"
                    className="text-xs font-semibold tracking-wide text-[#001F3F] transition-colors duration-200 hover:text-[#001F3F]/80 sm:text-sm lg:text-base"
                >
                    Dashboard
                </Link>

            </div>
        </header>
    );
}