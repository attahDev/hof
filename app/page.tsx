import StoryExperience from "./components/story/StoryExperience";
import HallOfFameHero from "./components/HallOfFameHero";
import SectionDivider from "./components/SectionDivider";
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

      <SectionDivider tone="dark" />

      <div id="prologue">
        <LegacyIntroSection />
        <LegacyImpactSection />
      </div>

      <SectionDivider tone="light" />

      <div id="legacy-timeline">
        <LegacyTimelineSection />
      </div>

      <div id="foundations">
        <FoundationsSection />
      </div>

      <SectionDivider tone="light" />

      <div id="intellectual-traditions">
        <IntellectualTraditionsSection />
      </div>

      <AchebeQuoteSection />

      <SectionDivider tone="dark" />

      <div id="manchester-influence">
        <ManchesterInfluenceSection />
      </div>

      <SectionDivider tone="light" />

      <div id="global-modern-era">
        <GlobalModernEraSection />
      </div>

      <MentorAiSection />

      <SectionDivider tone="dark" />

      <div id="community-champions">
        <CommunityChampionsArchive />
      </div>

      <SectionDivider tone="light" />

      <div id="epilogue">
        <ClosingLegacySection />
      </div>
    </StoryExperience>
  );
}
