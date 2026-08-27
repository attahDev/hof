import CommunityChampionsGrid from "./components/CommunityChampionsGrid";
import CommunityHeroBanner from "./components/CommunityHeroBanner"

export default function CommunityPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--paper)] p-[30px]">
      <CommunityHeroBanner />
      <CommunityChampionsGrid />
    </main>
  );
}