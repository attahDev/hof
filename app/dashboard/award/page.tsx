import AwardDirectory from "./component/AwardDirectory";
import AwardHeroBanner from "./component/AwardHeroBanner";

export default function AwardPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--paper)] p-[30px]">
      <AwardHeroBanner />
      <AwardDirectory />
    </main>
  );
}