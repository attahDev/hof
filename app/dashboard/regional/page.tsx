import RegionalDirectory from "./component/RegionalDirectory";
import RegionalHeroBanner from "./component/RegionalHeroBanner";

export default function RegionalPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--paper)] p-[30px]">
      <RegionalHeroBanner />
      <RegionalDirectory />
    </main>
  );
}