import DashboardSection from "./overview/DashboardSection";
import HeroSection from "./overview/HeroSection";
import HallOfFamePgeSection from "./overview/Hofsectionpage";
import TributesMentorSection from "./overview/TributesMentorSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EBE1] px-[30px] pt-[30px] pb-[40px]">
      <HeroSection />
      <HallOfFamePgeSection />
      <DashboardSection />
      <TributesMentorSection />
    </main>
  );
}