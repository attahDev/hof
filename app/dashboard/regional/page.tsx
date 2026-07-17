import RegionalDirectory from "./component/RegionalDirectory";
import RegionalHeroBanner from "./component/RegionalHeroBanner";

export default function RegionalPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5EBE1] p-[30px]">
      <RegionalHeroBanner />
      <RegionalDirectory />
    </main>
  );
}