"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { useState } from "react";

type EventCategory = "Regional" | "Community";

type EventItem = {
  id: string;
  title: string;
  location: string;
  day: string;
  month: string;
  time: string;
  category: EventCategory;
  image: string;
  href: string;
};

const featuredEvent = {
  title: "Power of Expression 2026",
  date: "17 July, 2026",
  time: "10am - 2pm",
  location: "47 Lloyd St, Manchester M2 5LE",
  image: "/event/event-hero.png",
  href: "/dashboard/events",
};

const upcomingEvents: EventItem[] = [
  {
    id: "regional-recognition",
    title: "Regional Recognition Ceremony",
    location: "47 Lloyd St, Manchester M2 5LE",
    day: "24",
    month: "July",
    time: "10 AM\n- 2 PM",
    category: "Regional",
    image: "/event/ev-1.png",
    href: "/dashboard/events",
  },
  {
    id: "community-champions",
    title: "Community Champions Gathering",
    location: "Manchester, UK",
    day: "15",
    month: "Aug",
    time: "10 AM\n- 2 PM",
    category: "Community",
    image: "/event/ev-2.png",
    href: "/dashboard/events",
  },
  {
    id: "cybersecurity-training",
    title: "Cybersecurity Training Cohort",
    location: "Free virtual training",
    day: "24",
    month: "Oct",
    time: "7 PM\n- 8 PM",
    category: "Regional",
    image: "/event/ev-3.png",
    href: "/dashboard/events",
  },
];

export default function EventsPageContent() {
  const [registered, setRegistered] =
    useState(false);

  return (
    <main className="min-h-screen w-full bg-[#F5EBE1] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 2xl:px-10">
      <div className="mx-auto w-full max-w-[1500px]">
        {/* ==================================================
            PAGE HEADER
        ================================================== */}

        <header>
          <h1 className="text-[30px] font-bold uppercase leading-none text-[#000D1C] sm:text-[36px] lg:text-[40px]">
            Events
          </h1>

          <p className="mt-3 text-[16px] font-medium leading-relaxed text-[#6C625B] sm:mt-4 sm:text-[20px] lg:text-[24px]">
            Ceremonies, summits, and gatherings
          </p>
        </header>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <section className="mt-8 grid w-full grid-cols-1 gap-5 lg:mt-12 xl:mt-16 xl:grid-cols-[minmax(0,1fr)_minmax(360px,439px)] xl:gap-4">
          <FeaturedEvent
            registered={registered}
            onRegister={() =>
              setRegistered(true)
            }
          />

          <UpcomingEvents />
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   FEATURED EVENT
========================================================= */

function FeaturedEvent({
  registered,
  onRegister,
}: {
  registered: boolean;
  onRegister: () => void;
}) {
  return (
    <article className="min-w-0 overflow-hidden rounded-[15px] bg-[#000D1C] p-4 sm:p-5 lg:p-6">
      {/* Label */}

      <p className="text-[12px] font-bold uppercase tracking-[0.04em] text-[#B1A393] sm:text-[14px] lg:text-[16px]">
        Next Induction Ceremony
      </p>

      {/* Date + time */}

      <div className="mt-3 flex flex-col gap-2 text-white sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        <h2 className="text-[22px] font-bold leading-tight sm:text-[26px] lg:text-[30px]">
          {featuredEvent.date}
        </h2>

        <span className="hidden h-2 w-2 rounded-full bg-[#B1A393] sm:block" />

        <p className="text-[22px] font-bold leading-tight sm:text-[26px] lg:text-[30px]">
          {featuredEvent.time}
        </p>
      </div>

      {/* Location */}

      <div className="mt-4 flex items-start gap-2.5 text-[#DBD2C8] sm:items-center sm:gap-3">
        <MapPin
          size={18}
          fill="currentColor"
          className="mt-[2px] shrink-0 sm:mt-0 sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px]"
        />

        <p className="min-w-0 text-[14px] font-medium leading-[21px] sm:text-[17px] lg:text-[20px]">
          {featuredEvent.location}
        </p>
      </div>

      {/* Title */}

      <h3 className="mt-4 text-[16px] font-medium uppercase leading-snug text-white sm:text-[18px] lg:text-[20px]">
        {featuredEvent.title}
      </h3>

      {/* Image */}

      <Link
        href={featuredEvent.href}
        className="group relative mt-5 block aspect-[16/10] w-full overflow-hidden rounded-[10px] sm:mt-6 sm:aspect-[1.7/1] lg:mt-7 lg:aspect-[1.88/1]"
      >
        <Image
          src={featuredEvent.image}
          alt={featuredEvent.title}
          fill
          priority
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1280px) 90vw,
            800px
          "
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
      </Link>

      {/* Register button */}

      <div className="mt-5 sm:mt-6 lg:mt-7">
        <button
          type="button"
          onClick={onRegister}
          disabled={registered}
          className={[
            "inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-lg px-5 text-[14px] font-bold text-white transition-all duration-200 sm:w-auto sm:text-[15px]",
            registered
              ? "cursor-default bg-[#3C6F55]"
              : "bg-[#D7263D] hover:bg-[#BE1F35] active:scale-[0.98]",
          ].join(" ")}
        >
          {registered ? (
            <>
              Interest Registered
              <CheckCircle2
                size={18}
              />
            </>
          ) : (
            <>
              Register Interest
              <ArrowRight
                size={18}
              />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

/* =========================================================
   UPCOMING EVENTS
========================================================= */

function UpcomingEvents() {
  return (
    <aside className="h-fit overflow-hidden rounded-[15px] border border-white/10 bg-[linear-gradient(204.72deg,#4D3218_4.33%,#111419_52.74%)] p-4 sm:p-5 xl:min-h-[623px]">
      {/* Header */}

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold uppercase leading-tight text-white sm:text-[20px] lg:text-[22px]">
          All Upcoming Events
        </h2>

        <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white/10 px-2 text-[11px] font-bold text-[#D9B700]">
          {upcomingEvents.length}
        </span>
      </div>

      {/* Events */}

      <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5 lg:mt-7 lg:space-y-6">
        {upcomingEvents.map(
          (event) => (
            <UpcomingEventCard
              key={event.id}
              event={event}
            />
          ),
        )}
      </div>
    </aside>
  );
}

/* =========================================================
   UPCOMING EVENT CARD
========================================================= */

function UpcomingEventCard({
  event,
}: {
  event: EventItem;
}) {
  return (
    <Link
      href={event.href}
      className="
        group
        grid
        grid-cols-1
        overflow-hidden
        rounded-[15px]
        bg-black/10
        transition-all
        duration-300
        hover:bg-white/[0.05]
        sm:grid-cols-[150px_minmax(0,1fr)]
        sm:gap-4
        xl:grid-cols-[140px_minmax(0,1fr)]
        xl:gap-4
        2xl:grid-cols-[150px_minmax(0,1fr)]
        2xl:gap-5
      "
    >
      {/* ==================================================
          IMAGE + DATE
      ================================================== */}

      <div className="overflow-hidden rounded-[15px] bg-[#181D22] sm:rounded-xl">
        {/* Image */}

        <div className="relative h-[170px] w-full overflow-hidden border border-[#D9B700]/70 sm:h-[92px] sm:rounded-t-xl">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="
              (max-width: 640px) 100vw,
              150px
            "
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />

          {/* Mobile overlay category */}

          <div className="absolute left-3 top-3 sm:hidden">
            <span className="rounded-full bg-[#817300] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[1.2px] text-white">
              {event.category}
            </span>
          </div>
        </div>

        {/* Date + Time */}

        <div className="grid min-h-[64px] grid-cols-[1fr_90px] items-center sm:min-h-[60px] sm:grid-cols-[1fr_70px] xl:grid-cols-[1fr_64px] 2xl:grid-cols-[1fr_72px]">
          <div className="flex items-center justify-center gap-2">
            <CalendarDays
              size={15}
              className="shrink-0 text-[#B1A393]"
            />

            <div className="leading-none">
              <p className="text-[23px] font-bold text-[#D9B700] sm:text-[24px] lg:text-[25px]">
                {event.day}
              </p>

              <p className="mt-1 text-[15px] font-semibold text-white sm:text-[16px] lg:text-[18px]">
                {event.month}
              </p>
            </div>
          </div>

          <p className="whitespace-pre-line border-l border-white/10 px-2 text-center text-[11px] font-semibold leading-[17px] text-white sm:border-l-0 sm:px-0 sm:text-[12px] sm:leading-[18px] lg:text-[13px] lg:leading-5">
            {event.time}
          </p>
        </div>
      </div>

      {/* ==================================================
          EVENT INFORMATION
      ================================================== */}

      <div className="flex min-w-0 flex-col justify-center px-4 pb-4 pt-3 sm:px-0 sm:py-2 sm:pr-3 xl:pr-2">
        <h3 className="text-[17px] font-bold leading-[23px] text-white sm:text-[18px] sm:leading-[24px] lg:text-[20px] lg:leading-[27px]">
          {event.title}
        </h3>

        {/* Location */}

        <div className="mt-2.5 flex items-start gap-2 text-[#DBD2C8] sm:mt-3">
          <MapPin
            size={16}
            fill="currentColor"
            className="mt-[2px] shrink-0"
          />

          <p className="min-w-0 break-words text-[12px] font-medium leading-[18px] sm:truncate sm:text-[13px] lg:text-[14px]">
            {event.location}
          </p>
        </div>

        {/* Category */}

        <span className="mt-4 hidden w-fit rounded-full bg-[#817300] px-4 py-2 text-[8px] font-bold uppercase tracking-[1.5px] text-white sm:inline-flex lg:text-[9px]">
          {event.category}
        </span>
      </div>
    </Link>
  );
}