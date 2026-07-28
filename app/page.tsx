import StoryExperience from "./components/story/StoryExperience";
import HallOfFameHero from "./components/HallOfFameHero";
import ChapterCard from "./components/ChapterCard";
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

      <ChapterCard
        numeral="—"
        title="Prologue"
        line="Every legacy begins with a name worth remembering. This is where theirs are kept."
        tone="dark"
      />

      <div id="prologue">
        <LegacyIntroSection />
        <LegacyImpactSection />
      </div>

      <ChapterCard
        numeral="I"
        title="The Legacy Timeline"
        line="Six centuries, one continuous thread — from ancient kingdoms to the names still being written."
        tone="light"
      />

      <div id="legacy-timeline">
        <LegacyTimelineSection />
      </div>

      <div id="foundations">
        <FoundationsSection />
      </div>

      <ChapterCard
        numeral="III"
        title="Intellectual & Literary Traditions"
        line="Where words became weapons, and testimony became history."
        tone="light"
      />

      <div id="intellectual-traditions">
        <IntellectualTraditionsSection />
      </div>

      <AchebeQuoteSection />

      <ChapterCard
        numeral="IV"
        title="UK & Manchester Influence"
        line="The archive comes home — civic leadership that reshaped modern Britain."
        tone="dark"
      />

      <div id="manchester-influence">
        <ManchesterInfluenceSection />
      </div>

      <ChapterCard
        numeral="V"
        title="Global Modern Era"
        line="The lineage widens. Twentieth and twenty-first century influence, carried across every continent."
        tone="light"
      />

      <div id="global-modern-era">
        <GlobalModernEraSection />
      </div>

      <MentorAiSection />

      <ChapterCard
        numeral="VI"
        title="Contemporary Archive"
        line="History does not end with icons. It continues through every name being added right now."
        tone="dark"
      />

      <div id="community-champions">
        <CommunityChampionsArchive />
      </div>

      <ChapterCard
        numeral="—"
        title="Epilogue"
        line="The record is never closed. The next chapter is still being written — perhaps by you."
        tone="light"
      />

      <div id="epilogue">
        <ClosingLegacySection />
      </div>
    </StoryExperience>
  );
}
