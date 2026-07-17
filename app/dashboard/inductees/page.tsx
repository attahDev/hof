import { Suspense } from "react";
import HallOfFameHeroBanner from "../inductees/component/HallOfFameHeroBanner"
import InducteesGrid from "./component/InducteesGrid";

export default function HallOfFameRoutePage() {
  return (
    <main className="min-h-screen w-full bg-[#F5EBE1] p-[30px]">
      <HallOfFameHeroBanner />
      <Suspense fallback={null}>
        <InducteesGrid />
      </Suspense>
    </main>
  );
}
