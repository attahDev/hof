import Image from "next/image";
import HallOfFameHero from "./components/HallOfFameHero";
import LegacyIntroSection from "./components/LegacyIntroSection";
import LegacyImpactSection from "./components/LegacyImpactSection";
import LegacyTimelineSection from "./components/LegacyTimelineSection";
import IntellectualTraditionsSection from "./components/IntellectualTraditionsSection";
import FoundationsSection from "./components/FoundationsSection";
import AchebeQuoteSection from "./components/AchebeQuoteSection";
import ManchesterInfluenceSection from "./components/ManchesterInfluenceSection";
import GlobalModernEraSection from "./components/GlobalModernEraSection";
import MentorAiSection from "./components/MentorAiSection";
import CommunityChampionsArchive from "./components/CommunityChampionsArchive";
import ClosingLegacySection from "./components/ClosingLegacySection";

export default function Home() {
  return (
    <>
      <HallOfFameHero />
      <LegacyIntroSection />
      <LegacyImpactSection />
      <LegacyTimelineSection />
      <FoundationsSection />
      <IntellectualTraditionsSection />
      <AchebeQuoteSection />
      <ManchesterInfluenceSection />
      <GlobalModernEraSection />
      <MentorAiSection />
      <CommunityChampionsArchive />
      {/* <GlobalModernEraSection  /> */}
      <ClosingLegacySection />
    </>
    
  );
}
