import CommunityChampionsGrid from "./components/CommunityChampionsGrid";
import CommunityHeroBanner from "./components/CommunityHeroBanner"

export default function CommunityPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5EBE1] p-[30px]">
      <CommunityHeroBanner />
      <CommunityChampionsGrid />
    </main>
  );
}