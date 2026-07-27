import StoryExperience from "./components/story/StoryExperience";
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
    <StoryExperience>
      <HallOfFameHero />

      <div id="prologue">
        <LegacyIntroSection />
        <LegacyImpactSection />
      </div>

      <div id="legacy-timeline">
        <LegacyTimelineSection />
      </div>

      <div id="foundations">
        <FoundationsSection />
      </div>

      <div id="intellectual-traditions">
        <IntellectualTraditionsSection />
      </div>

      <AchebeQuoteSection />

      <div id="manchester-influence">
        <ManchesterInfluenceSection />
      </div>

      <div id="global-modern-era">
        <GlobalModernEraSection />
      </div>

      <MentorAiSection />

      <div id="community-champions">
        <CommunityChampionsArchive />
      </div>

      <div id="epilogue">
        <ClosingLegacySection />
      </div>
    </StoryExperience>
  );
}
