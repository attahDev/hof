"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  Check,
  ChevronDown,
  Circle,
  FileText,
  Medal,
  Paperclip,
  Sparkles,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";

/* =========================================================
   CONFIGURATION

   false = Preview mode
   true = Official nominations live
========================================================= */

const NOMINATIONS_ARE_LIVE = false;

const TOTAL_STEPS = 9;

/* =========================================================
   TYPES
========================================================= */

type NominationStatus =
  | "All"
  | "Submitted"
  | "Under Review"
  | "Shortlisted"
  | "Panel Review";

type FormData = {
  fullName: string;
  organisation: string;
  position: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;

  category: string;
  level: string;

  story: string;
  problem: string;
  measurableImpact: string;

  referenceOneName: string;
  referenceOneOrganisation: string;
  referenceOneRelationship: string;

  referenceTwoName: string;
  referenceTwoOrganisation: string;
  referenceTwoRelationship: string;

  legacyReason: string;
  legacyContribution: string;
  legacyInspiration: string;

  diversity: string[];

  cardNumber: string;
  expiry: string;
  cvc: string;

  signature: string;
  date: string;

  confirmAccurate: boolean;
  confirmVerify: boolean;
};

/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm: FormData = {
  fullName: "",
  organisation: "",
  position: "",
  email: "",
  phone: "",
  linkedin: "",
  website: "",

  category: "Technology & Innovation",
  level: "Hall of Fame",

  story: "",
  problem: "",
  measurableImpact: "",

  referenceOneName: "",
  referenceOneOrganisation: "",
  referenceOneRelationship: "",

  referenceTwoName: "",
  referenceTwoOrganisation: "",
  referenceTwoRelationship: "",

  legacyReason: "",
  legacyContribution: "",
  legacyInspiration: "",

  diversity: [],

  cardNumber: "",
  expiry: "",
  cvc: "",

  signature: "",
  date: "",

  confirmAccurate: false,
  confirmVerify: false,
};

/* =========================================================
   FEES
========================================================= */

const categoryFees: Record<string, string> = {
  "Technology & Innovation": "£45",
  Entrepreneurship: "£40",
  Education: "£35",
  "Community Impact": "£30",
  Leadership: "£40",
  Award: "£45",
};

/* =========================================================
   DEMO RECENT NOMINATIONS
========================================================= */

const recentNominations = [
  {
    name: "Chiamaka Osei",
    desc: "Technology & Innovation · Hall of Fame",
    score: "Score pending",
    status: "Submitted",
    avatar: "/normination/sub-1.png",
  },
  {
    name: "Fatima Al-Hassan",
    desc: "Technology & Innovation · Hall of Fame",
    score: "Score 81/100",
    status: "Under Review",
    avatar: "/normination/sub-2.png",
  },
  {
    name: "Yemi Adeyinka",
    desc: "Public Service · Regional Recognition",
    score: "Score 64/100",
    status: "Under Review",
    avatar: "/normination/sub-3.png",
  },
  {
    name: "Amina Yusuf",
    desc: "Youth Leadership · Community Impact & Champion",
    score: "Score 73/100",
    status: "Under Review",
    avatar: "/normination/sub-4.png",
  },
  {
    name: "Dr. Ngozi Eze",
    desc: "Education · Regional Recognition",
    score: "Score 88/100",
    status: "Approved",
    avatar: "/normination/sub-5.png",
  },
  {
    name: "Tunde Bakare",
    desc: "Entrepreneurship · Award",
    score: "Score 41/100",
    status: "Rejected",
    avatar: "/normination/sub-6.png",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function NominationsFlow() {
  const [step, setStep] = useState(1);

  const [recentTab, setRecentTab] =
    useState<NominationStatus>("All");

  const [form, setForm] =
    useState<FormData>(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  const fee =
    categoryFees[form.category] ?? "£45";

  const progress = submitted
    ? 100
    : (step / TOTAL_STEPS) * 100;

  /* =======================================================
     UPDATE FORM
  ======================================================= */

  const updateForm = <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* =======================================================
     DIVERSITY
  ======================================================= */

  const toggleDiversity = (
    value: string,
  ) => {
    setForm((prev) => ({
      ...prev,

      diversity:
        prev.diversity.includes(value)
          ? prev.diversity.filter(
              (item) =>
                item !== value,
            )
          : [
              ...prev.diversity,
              value,
            ],
    }));
  };

  /* =======================================================
     NEXT STEP
  ======================================================= */

  const nextStep = () => {
    if (step === TOTAL_STEPS) {
      setSubmitted(true);
      return;
    }

    setStep((prev) =>
      Math.min(
        prev + 1,
        TOTAL_STEPS,
      ),
    );
  };

  /* =======================================================
     PREVIOUS STEP
  ======================================================= */

  const prevStep = () => {
    setStep((prev) =>
      Math.max(prev - 1, 1),
    );
  };

  /* =======================================================
     RESET
  ======================================================= */

  const resetFlow = () => {
    setStep(1);
    setSubmitted(false);
    setForm(initialForm);
  };

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#F5EBE1]
        px-4
        py-6
        sm:px-6
        sm:py-8
        lg:px-8
      "
    >
      <section
        className="
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <header>
          <h1
            className="
              text-[30px]
              font-bold
              uppercase
              leading-none
              text-[#000D1C]
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            Nominations
          </h1>

          <p
            className="
              mt-3
              text-[16px]
              font-medium
              text-[#6C625B]
              sm:text-[20px]
              lg:mt-4
              lg:text-[24px]
            "
          >
            Submit and track nominations
          </p>
        </header>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            lg:mt-[54px]
            xl:grid-cols-[minmax(0,1fr)_minmax(380px,500px)]
            xl:gap-[15px]
          "
        >
          {/* ===============================================
              LEFT SIDE
          =============================================== */}

          <section className="min-w-0">
            {submitted ? (
              NOMINATIONS_ARE_LIVE ? (
                <SubmittedCard
                  onReset={resetFlow}
                />
              ) : (
                <PreviewCompletedCard
                  onReset={resetFlow}
                />
              )
            ) : (
              <div
                className="
                  rounded-[15px]
                  bg-[#000D1C]
                  p-4
                  sm:p-5
                "
              >
                {/* =========================================
                    PREVIEW NOTICE
                ========================================= */}

                {!NOMINATIONS_ARE_LIVE && (
                  <PreviewBanner />
                )}

                {/* =========================================
                    PROGRESS BAR
                ========================================= */}

                <div className="h-2 w-full overflow-hidden rounded-full bg-[#263442]">
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-[#D9B700]
                      transition-all
                      duration-300
                    "
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                {/* =========================================
                    STEP HEADER
                ========================================= */}

                <div
                  className="
                    mt-4
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-[#B1A393]
                      sm:text-[14px]
                    "
                  >
                    Step {step} of{" "}
                    {TOTAL_STEPS}
                  </p>

                  <h2
                    className="
                      text-[14px]
                      font-bold
                      text-white
                      sm:text-[16px]
                    "
                  >
                    {getStepTitle(step)}
                  </h2>
                </div>

                {/* =========================================
                    STEP CONTENT
                ========================================= */}

                <div className="mt-6 sm:mt-7">
                  {step === 1 && (
                    <StepOne
                      form={form}
                      updateForm={
                        updateForm
                      }
                    />
                  )}

                  {step === 2 && (
                    <StepTwo
                      form={form}
                      updateForm={
                        updateForm
                      }
                      fee={fee}
                    />
                  )}

                  {step === 3 && (
                    <StepThree
                      form={form}
                      updateForm={
                        updateForm
                      }
                    />
                  )}

                  {step === 4 && (
                    <StepFour
                      form={form}
                      updateForm={
                        updateForm
                      }
                    />
                  )}

                  {step === 5 && (
                    <StepFive />
                  )}

                  {step === 6 && (
                    <StepSix
                      form={form}
                      updateForm={
                        updateForm
                      }
                    />
                  )}

                  {step === 7 && (
                    <StepSeven
                      form={form}
                      updateForm={
                        updateForm
                      }
                    />
                  )}

                  {step === 8 && (
                    <StepEight
                      selected={
                        form.diversity
                      }
                      onToggle={
                        toggleDiversity
                      }
                    />
                  )}

                  {step === 9 && (
                    <StepNine
                      form={form}
                      updateForm={
                        updateForm
                      }
                      fee={fee}
                      isLive={
                        NOMINATIONS_ARE_LIVE
                      }
                    />
                  )}
                </div>

                {/* =========================================
                    NAVIGATION
                ========================================= */}

                <FooterButtons
                  step={step}
                  onBack={prevStep}
                  onNext={nextStep}
                />
              </div>
            )}
          </section>

          {/* ===============================================
              RIGHT SIDE
          =============================================== */}

          <RecentNominations
            activeTab={recentTab}
            onChangeTab={
              setRecentTab
            }
          />
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PREVIEW BANNER
========================================================= */

function PreviewBanner() {
  return (
    <div
      className="
        mb-5
        flex
        items-start
        gap-3
        rounded-xl
        border
        border-[#D9B700]/25
        bg-[#D9B700]/10
        p-4
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D9B700]/20
          text-[#D9B700]
        "
      >
        <Award size={20} />
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[13px] font-bold text-[#D9B700] sm:text-[14px]">
            Nominations Opening Soon
          </p>

          <span
            className="
              rounded-full
              bg-white/10
              px-2
              py-0.5
              text-[8px]
              font-bold
              uppercase
              tracking-wider
              text-[#B1A393]
            "
          >
            Preview
          </span>
        </div>

        <p
          className="
            mt-1
            max-w-[650px]
            text-[11px]
            leading-[18px]
            text-[#B1A393]
            sm:text-[12px]
          "
        >
          Explore the complete nomination
          journey and see what you&apos;ll
          need to recognise an exceptional
          individual. Official submissions
          and payments will open soon.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STEP TITLES
========================================================= */

function getStepTitle(step: number) {
  const titles: Record<
    number,
    string
  > = {
    1: "Nominee Details",
    2: "Recognition Category",
    3: "Recognition Level",
    4: "Impact Assessment",
    5: "Evidence",
    6: "References",
    7: "Legacy Questions",
    8: "Diversity of Impact",

    9: NOMINATIONS_ARE_LIVE
      ? "Declaration & Payment"
      : "Review Nomination",
  };

  return titles[step];
}

/* =========================================================
   STEP 1
========================================================= */

function StepOne({
  form,
  updateForm,
}: {
  form: FormData;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div>
      <div
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          sm:gap-x-3
        "
      >
        <Input
          label="Full name"
          value={form.fullName}
          onChange={(value) =>
            updateForm(
              "fullName",
              value,
            )
          }
          placeholder="Enter full name"
        />

        <Input
          label="Organisation"
          value={
            form.organisation
          }
          onChange={(value) =>
            updateForm(
              "organisation",
              value,
            )
          }
          placeholder="Company or organisation"
        />

        <Input
          label="Position / title"
          value={form.position}
          onChange={(value) =>
            updateForm(
              "position",
              value,
            )
          }
          placeholder="e.g. Founder & CEO"
        />

        <Input
          label="Email"
          value={form.email}
          onChange={(value) =>
            updateForm(
              "email",
              value,
            )
          }
          placeholder="nominee@email.com"
        />

        <Input
          label="Phone (optional)"
          value={form.phone}
          onChange={(value) =>
            updateForm(
              "phone",
              value,
            )
          }
          placeholder="+44..."
        />

        <Input
          label="LinkedIn profile"
          value={form.linkedin}
          onChange={(value) =>
            updateForm(
              "linkedin",
              value,
            )
          }
          placeholder="linkedin.com/in/..."
        />
      </div>

      <div className="mt-4">
        <Input
          label="Website"
          value={form.website}
          onChange={(value) =>
            updateForm(
              "website",
              value,
            )
          }
          placeholder="https://..."
        />
      </div>
    </div>
  );
}

/* =========================================================
   STEP 2
========================================================= */

function StepTwo({
  form,
  updateForm,
  fee,
}: {
  form: FormData;
  fee: string;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div>
      <SelectField
        label="Recognition category"
        value={form.category}
        onChange={(value) =>
          updateForm(
            "category",
            value,
          )
        }
        options={Object.keys(
          categoryFees,
        )}
      />

      <p
        className="
          mt-4
          text-[10px]
          leading-[17px]
          text-[#B1A393]
        "
      >
        Choose the single category that
        best fits the nominee&apos;s primary
        contribution.
      </p>

      <div
        className="
          mt-4
          flex
          items-start
          gap-3
          rounded-md
          border
          border-[#D9B700]/30
          bg-[#1D2A17]
          px-4
          py-3
        "
      >
        <FileText
          size={16}
          className="
            mt-0.5
            shrink-0
            text-[#D9B700]
          "
        />

        <div>
          <p
            className="
              text-[10px]
              text-[#B1A393]
            "
          >
            Nomination fee when
            submissions open
          </p>

          <p
            className="
              mt-1
              text-[12px]
              leading-[18px]
              text-[#DBD2C8]
            "
          >
            {form.category}:{" "}

            <span
              className="
                font-bold
                text-[#D9B700]
              "
            >
              {fee}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STEP 3
========================================================= */

function StepThree({
  form,
  updateForm,
}: {
  form: FormData;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  const levels = [
    "Hall of Fame",
    "Regional Recognition",
    "Community Impact & Champion",
    "Award",
  ];

  return (
    <div>
      <p
        className="
          text-[13px]
          text-white
        "
      >
        Recognition Level
      </p>

      <div
        className="
          mt-3
          flex
          flex-wrap
          gap-3
        "
      >
        {levels.map(
          (level) => {
            const isActive =
              form.level === level;

            return (
              <button
                key={level}
                type="button"
                onClick={() =>
                  updateForm(
                    "level",
                    level,
                  )
                }
                className={[
                  `
                    min-h-[36px]
                    rounded-md
                    border
                    px-4
                    py-2
                    text-[11px]
                    transition
                    sm:text-[12px]
                  `,

                  isActive
                    ? "border-[#D9B700] bg-[#2E2E14] text-white"
                    : "border-[#FFFFFF33] text-white hover:border-[#D9B700]",
                ].join(" ")}
              >
                {level}
              </button>
            );
          },
        )}
      </div>

      <p
        className="
          mt-4
          text-[10px]
          leading-[17px]
          text-[#B1A393]
        "
      >
        Hall of Fame is the highest tier
        and requires full evidence and two
        references.
      </p>
    </div>
  );
}

/* =========================================================
   STEP 4
========================================================= */

function StepFour({
  form,
  updateForm,
}: {
  form: FormData;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div className="space-y-4">
      <Textarea
        label="Why are you nominating this individual? (up to 500 words)"
        value={form.story}
        onChange={(value) =>
          updateForm(
            "story",
            value,
          )
        }
        placeholder="Tell us their story..."
      />

      <Textarea
        label="What problem have they helped solve? (up to 500 words)"
        value={form.problem}
        onChange={(value) =>
          updateForm(
            "problem",
            value,
          )
        }
        placeholder="Describe the problem and the approach..."
      />

      <Textarea
        label="What measurable impact have they created?"
        value={
          form.measurableImpact
        }
        onChange={(value) =>
          updateForm(
            "measurableImpact",
            value,
          )
        }
        placeholder="Include numbers where possible"
      />

      <p
        className="
          text-[9px]
          leading-[16px]
          text-[#B1A393]
        "
      >
        <span className="font-bold text-white">
          Examples:
        </span>{" "}
        people reached · businesses
        supported · jobs created · revenue
        generated · communities impacted
      </p>
    </div>
  );
}

/* =========================================================
   STEP 5
========================================================= */

function StepFive() {
  const uploads = [
    {
      title: "CV",
      subtitle: "PDF or DOC",
      icon: FileText,
    },
    {
      title: "Biography",
      subtitle: "PDF or DOC",
      icon: Circle,
    },
    {
      title: "Portfolio",
      subtitle:
        "PDF, link, or ZIP",
      icon: Briefcase,
    },
    {
      title: "Press coverage",
      subtitle:
        "Articles, clippings",
      icon: FileText,
    },
    {
      title: "Awards",
      subtitle:
        "Certificates, citations",
      icon: Medal,
    },
    {
      title:
        "Supporting documents",
      subtitle:
        "Multiple files allowed",
      icon: Paperclip,
    },
  ];

  return (
    <div>
      <p
        className="
          text-[13px]
          text-white
        "
      >
        Supporting evidence
      </p>

      <div
        className="
          mt-3
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
        "
      >
        {uploads.map(
          (item) => {
            const Icon =
              item.icon;

            return (
              <button
                key={item.title}
                type="button"
                className="
                  flex
                  min-h-[112px]
                  flex-col
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-dashed
                  border-[#FFFFFF55]
                  p-4
                  text-center
                  text-white
                  transition
                  hover:border-[#D9B700]
                  hover:bg-white/[0.02]
                "
              >
                <Icon
                  size={24}
                  className="
                    mb-3
                    text-[#B1A393]
                  "
                />

                <span
                  className="
                    text-[14px]
                    font-bold
                    sm:text-[16px]
                  "
                >
                  {item.title}
                </span>

                <span
                  className="
                    mt-1
                    text-[11px]
                    text-[#B1A393]
                    sm:text-[12px]
                  "
                >
                  {item.subtitle}
                </span>
              </button>
            );
          },
        )}
      </div>

      <p
        className="
          mt-4
          text-[9px]
          leading-[16px]
          text-[#B1A393]
        "
      >
        All uploads are optional, but
        stronger evidence improves the
        Mentor AI review score.
      </p>
    </div>
  );
}

/* =========================================================
   STEP 6
========================================================= */

function StepSix({
  form,
  updateForm,
}: {
  form: FormData;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        lg:grid-cols-2
      "
    >
      <ReferenceBox
        title="Reference 1"
        name={
          form.referenceOneName
        }
        organisation={
          form.referenceOneOrganisation
        }
        relationship={
          form.referenceOneRelationship
        }
        onName={(value) =>
          updateForm(
            "referenceOneName",
            value,
          )
        }
        onOrganisation={(
          value,
        ) =>
          updateForm(
            "referenceOneOrganisation",
            value,
          )
        }
        onRelationship={(
          value,
        ) =>
          updateForm(
            "referenceOneRelationship",
            value,
          )
        }
      />

      <ReferenceBox
        title="Reference 2"
        name={
          form.referenceTwoName
        }
        organisation={
          form.referenceTwoOrganisation
        }
        relationship={
          form.referenceTwoRelationship
        }
        onName={(value) =>
          updateForm(
            "referenceTwoName",
            value,
          )
        }
        onOrganisation={(
          value,
        ) =>
          updateForm(
            "referenceTwoOrganisation",
            value,
          )
        }
        onRelationship={(
          value,
        ) =>
          updateForm(
            "referenceTwoRelationship",
            value,
          )
        }
      />
    </div>
  );
}

/* =========================================================
   STEP 7
========================================================= */

function StepSeven({
  form,
  updateForm,
}: {
  form: FormData;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  return (
    <div>
      <p
        className="
          mb-4
          text-[10px]
          leading-[17px]
          text-[#B1A393]
        "
      >
        These answers are critical for
        Hall of Fame induction.
      </p>

      <div className="space-y-4">
        <Textarea
          label="Why should this person be remembered?"
          value={
            form.legacyReason
          }
          onChange={(value) =>
            updateForm(
              "legacyReason",
              value,
            )
          }
          placeholder="Tell us why their legacy matters..."
        />

        <Textarea
          label="What lasting contribution have they made?"
          value={
            form.legacyContribution
          }
          onChange={(value) =>
            updateForm(
              "legacyContribution",
              value,
            )
          }
          placeholder="Describe their long-term contribution..."
        />

        <Textarea
          label="How have they inspired others?"
          value={
            form.legacyInspiration
          }
          onChange={(value) =>
            updateForm(
              "legacyInspiration",
              value,
            )
          }
          placeholder="Tell us how they have inspired others..."
        />
      </div>
    </div>
  );
}

/* =========================================================
   STEP 8
========================================================= */

function StepEight({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (
    value: string,
  ) => void;
}) {
  const options = [
    "Local impact",
    "Regional impact",
    "National impact",
    "International impact",
    "Cross-generational impact",
    "Policy influence",
    "Industry influence",
  ];

  return (
    <div>
      <p className="text-[13px] text-white">
        Diversity of impact
      </p>

      <p
        className="
          mt-1
          text-[12px]
          text-[#B1A393]
          sm:text-[13px]
        "
      >
        Tick all that apply.
      </p>

      <div
        className="
          mt-5
          space-y-4
        "
      >
        {options.map(
          (option) => {
            const isChecked =
              selected.includes(
                option,
              );

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  onToggle(
                    option,
                  )
                }
                className="
                  flex
                  items-center
                  gap-3
                  text-left
                  text-[14px]
                  font-bold
                  text-white
                  sm:gap-4
                  sm:text-[16px]
                "
              >
                <span
                  className={[
                    `
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded
                      border
                    `,

                    isChecked
                      ? "border-[#D9B700] bg-[#D9B700] text-[#000D1C]"
                      : "border-[#FFFFFF66]",
                  ].join(" ")}
                >
                  {isChecked && (
                    <Check
                      size={16}
                    />
                  )}
                </span>

                {option}
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}

/* =========================================================
   STEP 9

   Preview mode:
   Shows exactly what users will experience
   without collecting payment.

   Live mode:
   Shows payment and declarations.
========================================================= */

function StepNine({
  form,
  updateForm,
  fee,
  isLive,
}: {
  form: FormData;
  fee: string;
  isLive: boolean;

  updateForm: <
    K extends keyof FormData,
  >(
    key: K,
    value: FormData[K],
  ) => void;
}) {
  /* =======================================================
     PREVIEW MODE
  ======================================================= */

  if (!isLive) {
    return (
      <div>
        {/* ===============================================
            ALMOST COMPLETE NOTICE
        =============================================== */}

        <div
          className="
            rounded-lg
            border
            border-[#D9B700]/30
            bg-[#D9B700]/10
            p-4
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#D9B700]/20
                text-[#D9B700]
              "
            >
              <Star size={17} />
            </div>

            <div>
              <p
                className="
                  text-[13px]
                  font-bold
                  text-white
                "
              >
                Your nomination preview
                is almost complete
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  leading-[18px]
                  text-[#B1A393]
                "
              >
                When nominations
                officially open,
                you&apos;ll review your
                information, complete the
                declaration, pay the
                nomination fee, and
                submit for assessment.
              </p>
            </div>
          </div>
        </div>

        {/* ===============================================
            NOMINATION SUMMARY
        =============================================== */}

        <div
          className="
            mt-5
            rounded-lg
            border
            border-white/10
            bg-white/[0.03]
            p-4
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#B1A393]
            "
          >
            Nomination Preview
          </p>

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            <SummaryItem
              label="Nominee"
              value={
                form.fullName ||
                "Not provided"
              }
            />

            <SummaryItem
              label="Organisation"
              value={
                form.organisation ||
                "Not provided"
              }
            />

            <SummaryItem
              label="Category"
              value={
                form.category
              }
            />

            <SummaryItem
              label="Recognition level"
              value={
                form.level
              }
            />

            <SummaryItem
              label="Email"
              value={
                form.email ||
                "Not provided"
              }
            />

            <SummaryItem
              label="Impact areas selected"
              value={
                form.diversity
                  .length > 0
                  ? `${form.diversity.length} selected`
                  : "None selected"
              }
            />
          </div>
        </div>

        {/* ===============================================
            FUTURE FEE
        =============================================== */}

        <div
          className="
            mt-4
            flex
            flex-col
            gap-4
            rounded-lg
            border
            border-[#D9B700]/30
            bg-[#1D2A17]
            p-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-wide
                text-[#B1A393]
              "
            >
              Nomination Fee
            </p>

            <p
              className="
                mt-1
                text-[13px]
                font-bold
                text-white
              "
            >
              {form.category}
            </p>

            <p
              className="
                mt-1
                text-[10px]
                leading-[16px]
                text-[#B1A393]
              "
            >
              Payable when nominations
              officially open
            </p>
          </div>

          <p
            className="
              text-[24px]
              font-bold
              text-[#D9B700]
            "
          >
            {fee}
          </p>
        </div>

        {/* ===============================================
            WHAT HAPPENS NEXT
        =============================================== */}

        <div className="mt-5">
          <p
            className="
              text-[13px]
              font-bold
              text-white
            "
          >
            What happens when
            nominations open?
          </p>

          <div
            className="
              mt-3
              space-y-3
            "
          >
            <PreviewStep
              number="1"
              text="Review and confirm your nomination information."
            />

            <PreviewStep
              number="2"
              text={`Complete the secure ${fee} nomination payment.`}
            />

            <PreviewStep
              number="3"
              text="Submit the nomination for Mentor AI and panel review."
            />

            <PreviewStep
              number="4"
              text="Track the nomination status from your dashboard."
            />
          </div>
        </div>

        {/* ===============================================
            COMING SOON INFO
        =============================================== */}

        <div
          className="
            mt-5
            flex
            items-start
            gap-3
            rounded-lg
            bg-white/[0.03]
            p-4
          "
        >
          <Sparkles
            size={16}
            className="
              mt-0.5
              shrink-0
              text-[#D9B700]
            "
          />

          <p
            className="
              text-[10px]
              leading-[17px]
              text-[#7F8A99]
            "
          >
            You can explore the full
            process today. Official
            payment and submission will
            become available when the
            nomination window opens.
          </p>
        </div>
      </div>
    );
  }

  /* =======================================================
     LIVE MODE
  ======================================================= */

  return (
    <div>
      <div
        className="
          mb-4
          flex
          items-center
          justify-between
          gap-4
          rounded-md
          border
          border-[#D9B700]/30
          bg-[#1D2A17]
          p-3
        "
      >
        <div>
          <p
            className="
              text-[10px]
              text-[#B1A393]
            "
          >
            Nomination fee
          </p>

          <p
            className="
              text-[13px]
              font-bold
              text-white
            "
          >
            {form.category}
          </p>
        </div>

        <p
          className="
            text-[22px]
            font-bold
            text-[#D9B700]
          "
        >
          {fee}
        </p>
      </div>

      <Input
        label="Card number"
        value={form.cardNumber}
        onChange={(value) =>
          updateForm(
            "cardNumber",
            value,
          )
        }
        placeholder="1234 1234 1234 1234"
      />

      <div
        className="
          mt-4
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
        "
      >
        <Input
          label="Expiry"
          value={form.expiry}
          onChange={(value) =>
            updateForm(
              "expiry",
              value,
            )
          }
          placeholder="MM / YY"
        />

        <Input
          label="CVC"
          value={form.cvc}
          onChange={(value) =>
            updateForm(
              "cvc",
              value,
            )
          }
          placeholder="123"
        />
      </div>

      <p
        className="
          mt-5
          text-[13px]
          text-white
        "
      >
        Nominator declaration
      </p>

      <div
        className="
          mt-3
          space-y-3
        "
      >
        <CheckRow
          checked={
            form.confirmAccurate
          }
          onClick={() =>
            updateForm(
              "confirmAccurate",
              !form.confirmAccurate,
            )
          }
          text="I confirm the information provided is accurate to the best of my knowledge."
        />

        <CheckRow
          checked={
            form.confirmVerify
          }
          onClick={() =>
            updateForm(
              "confirmVerify",
              !form.confirmVerify,
            )
          }
          text="I agree that supporting evidence may be verified by Black Tech Expo."
        />
      </div>

      <div
        className="
          mt-4
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
        "
      >
        <Input
          label="Your full name (signature)"
          value={form.signature}
          onChange={(value) =>
            updateForm(
              "signature",
              value,
            )
          }
          placeholder="Type your full legal name"
        />

        <Input
          label="Date"
          value={form.date}
          onChange={(value) =>
            updateForm(
              "date",
              value,
            )
          }
          placeholder="mm/dd/yy"
        />
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER BUTTONS
========================================================= */

function FooterButtons({
  step,
  onBack,
  onNext,
}: {
  step: number;
  onBack: () => void;
  onNext: () => void;
}) {
  const isFinalStep =
    step === TOTAL_STEPS;

  return (
    <>
      <div
        className="
          mt-6
          h-px
          bg-[#FFFFFF26]
        "
      />

      <div
        className="
          mt-4
          flex
          flex-col-reverse
          gap-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <button
          type="button"
          disabled={step === 1}
          onClick={onBack}
          className="
            h-[43px]
            rounded-md
            border
            border-[#D9B700]
            px-5
            text-[14px]
            font-bold
            text-white
            transition
            hover:bg-[#D9B700]/10
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Back
        </button>

        <button
          type="button"
          onClick={onNext}
          className={[
            `
              flex
              h-[43px]
              items-center
              justify-center
              gap-3
              rounded-md
              px-5
              text-[14px]
              font-bold
              transition
            `,

            !NOMINATIONS_ARE_LIVE &&
            isFinalStep
              ? "bg-[#D9B700] text-[#000D1C] hover:bg-[#E4C500]"
              : "bg-[#D7263D] text-white hover:bg-[#BE1F35]",
          ].join(" ")}
        >
          {!isFinalStep
            ? "Continue"
            : NOMINATIONS_ARE_LIVE
              ? "Pay & Submit Nomination"
              : "Complete Preview"}

          <ArrowRight
            size={16}
          />
        </button>
      </div>
    </>
  );
}

/* =========================================================
   RECENT NOMINATIONS
========================================================= */

function RecentNominations({
  activeTab,
  onChangeTab,
}: {
  activeTab: NominationStatus;

  onChangeTab: (
    tab: NominationStatus,
  ) => void;
}) {
  const tabs: NominationStatus[] =
    [
      "All",
      "Submitted",
      "Under Review",
      "Shortlisted",
      "Panel Review",
    ];

  const filtered = useMemo(
    () => {
      if (
        activeTab === "All"
      ) {
        return recentNominations;
      }

      return recentNominations.filter(
        (item) =>
          item.status ===
          activeTab,
      );
    },
    [activeTab],
  );

  return (
    <aside
      className="
        h-fit
        min-h-[600px]
        rounded-[15px]
        border
        border-white/10
        bg-[linear-gradient(204.72deg,#4D3218_4.33%,#111419_52.74%)]
        p-4
        sm:p-5
        xl:min-h-[794px]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <h2
          className="
            text-[18px]
            font-bold
            uppercase
            text-white
            sm:text-[22px]
          "
        >
          Recent Nominations
        </h2>

        {!NOMINATIONS_ARE_LIVE && (
          <span
            className="
              rounded-full
              bg-white/10
              px-2
              py-1
              text-[8px]
              font-bold
              uppercase
              tracking-wider
              text-[#B1A393]
            "
          >
            Preview
          </span>
        )}
      </div>

      <div
        className="
          mt-5
          flex
          gap-2
          overflow-x-auto
          pb-1
          sm:flex-wrap
          sm:gap-3
          sm:overflow-visible
        "
      >
        {tabs.map(
          (tab) => {
            const isActive =
              activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() =>
                  onChangeTab(tab)
                }
                className={[
                  `
                    h-[36px]
                    shrink-0
                    rounded-md
                    border
                    px-3
                    text-[12px]
                    font-bold
                    sm:h-[38px]
                    sm:px-4
                    sm:text-[14px]
                  `,

                  isActive
                    ? "border-[#D9B700] bg-[#D9B700] text-[#000D1C]"
                    : "border-[#FFFFFF24] text-[#B1A393]",
                ].join(" ")}
              >
                {tab === "All"
                  ? "All (12)"
                  : tab}
              </button>
            );
          },
        )}
      </div>

      <div className="mt-6 sm:mt-7">
        {filtered.length >
        0 ? (
          filtered.map(
            (item) => (
              <div
                key={item.name}
                className="
                  border-b
                  border-white/10
                  py-4
                  last:border-b-0
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <div
                    className="
                      relative
                      h-11
                      w-11
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border
                      border-[#B1A393]
                    "
                  >
                    <Image
                      src={
                        item.avatar
                      }
                      alt={
                        item.name
                      }
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className="
                      min-w-0
                      flex-1
                    "
                  >
                    <div
                      className="
                        flex
                        flex-col
                        gap-2
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >
                      <div className="min-w-0">
                        <h3
                          className="
                            text-[15px]
                            font-semibold
                            leading-tight
                            text-white
                            sm:text-[17px]
                          "
                        >
                          {item.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            leading-[17px]
                            text-[#B1A393]
                            sm:text-[13px]
                            sm:leading-[18px]
                          "
                        >
                          {item.desc}
                        </p>
                      </div>

                      <StatusBadge
                        status={
                          item.status
                        }
                      />
                    </div>

                    <div
                      className="
                        mt-2
                        flex
                        flex-wrap
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          rounded-full
                          bg-[#D9B700]
                          px-3
                          py-1
                          text-[9px]
                          font-bold
                          text-[#000D1C]
                          sm:text-[10px]
                        "
                      >
                        {item.score}
                      </span>

                      <span
                        className="
                          flex
                          items-center
                          gap-1
                          text-[10px]
                          font-bold
                          text-white
                          sm:text-[11px]
                        "
                      >
                        <Star
                          size={11}
                        />

                        Mentor AI
                        summary
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )
        ) : (
          <div
            className="
              flex
              min-h-[180px]
              items-center
              justify-center
              text-center
            "
          >
            <p
              className="
                max-w-[240px]
                text-[12px]
                leading-[19px]
                text-[#B1A393]
              "
            >
              No nominations
              currently match this
              status.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}

/* =========================================================
   PREVIEW COMPLETED
========================================================= */

function PreviewCompletedCard({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div
      className="
        relative
        flex
        min-h-[420px]
        items-center
        justify-center
        overflow-hidden
        rounded-[15px]
        bg-[#000D1C]
        p-6
        text-center
        sm:p-8
      "
    >
      <div
        className="
          absolute
          inset-x-12
          top-10
          h-24
          bg-[radial-gradient(circle,#DBD2C8_2px,transparent_3px)]
          bg-[length:36px_28px]
          opacity-30
        "
      />

      <div
        className="
          absolute
          -right-20
          -top-20
          h-[240px]
          w-[240px]
          rounded-full
          bg-[#D9B700]/10
          blur-[80px]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          max-w-[500px]
          flex-col
          items-center
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#D9B700]/15
            text-[#D9B700]
            ring-8
            ring-[#D9B700]/10
          "
        >
          <Award
            size={32}
            strokeWidth={1.8}
          />
        </div>

        <p
          className="
            mt-7
            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#D9B700]
          "
        >
          Preview Complete
        </p>

        <h2
          className="
            mt-2
            text-[18px]
            font-bold
            uppercase
            tracking-wide
            text-white
            sm:text-[20px]
          "
        >
          You&apos;re Ready To
          Nominate
        </h2>

        <p
          className="
            mt-3
            text-[12px]
            leading-[20px]
            text-[#B1A393]
            sm:text-[13px]
          "
        >
          You&apos;ve explored the
          complete nomination process.
          When official nominations
          open, you&apos;ll be able to
          submit your nomination,
          complete payment, and track
          its progress through the
          review process.
        </p>

        <div
          className="
            mt-5
            rounded-lg
            border
            border-[#D9B700]/20
            bg-[#D9B700]/10
            px-4
            py-3
          "
        >
          <p
            className="
              text-[11px]
              leading-[18px]
              text-[#D9B700]
            "
          >
            ✨ Nominations are opening
            soon. Get your nominee&apos;s
            information and supporting
            evidence ready.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="
            mt-6
            flex
            h-[43px]
            items-center
            gap-3
            rounded-md
            bg-[#D7263D]
            px-5
            text-[14px]
            font-bold
            text-white
            transition
            hover:bg-[#BE1F35]
          "
        >
          Explore Another Nomination

          <ArrowRight
            size={16}
          />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   LIVE SUBMITTED CARD
========================================================= */

function SubmittedCard({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div
      className="
        relative
        flex
        min-h-[360px]
        items-center
        justify-center
        overflow-hidden
        rounded-[15px]
        bg-[#000D1C]
        p-6
        text-center
      "
    >
      <div
        className="
          absolute
          inset-x-12
          top-10
          h-24
          bg-[radial-gradient(circle,#DBD2C8_2px,transparent_3px)]
          bg-[length:36px_28px]
          opacity-80
        "
      />

      <div
        className="
          relative
          z-10
          flex
          max-w-[430px]
          flex-col
          items-center
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#DBD2C8]
            text-[#000D1C]
            shadow-[0_0_0_8px_#9B8B3B]
          "
        >
          <Check
            size={34}
            strokeWidth={3}
          />
        </div>

        <h2
          className="
            mt-7
            text-[16px]
            font-bold
            uppercase
            tracking-wider
            text-white
          "
        >
          Nomination Submitted
        </h2>

        <p
          className="
            mt-3
            text-[13px]
            leading-5
            text-[#B1A393]
          "
        >
          Mentor AI is reviewing the
          evidence, summarising the
          story, extracting
          achievements, and flagging
          anything missing before this
          goes to panel. You can track
          its status under Recent
          Nominations.
        </p>

        <button
          type="button"
          onClick={onReset}
          className="
            mt-6
            flex
            h-[43px]
            items-center
            gap-3
            rounded-md
            bg-[#D7263D]
            px-5
            text-[14px]
            font-bold
            text-white
          "
        >
          Submit another nomination

          <ArrowRight
            size={16}
          />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   SUMMARY ITEM
========================================================= */

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.08em]
          text-[#7F8A99]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          break-words
          text-[12px]
          font-semibold
          leading-[18px]
          text-white
          sm:text-[13px]
        "
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   PREVIEW STEP
========================================================= */

function PreviewStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-3
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D9B700]/15
          text-[11px]
          font-bold
          text-[#D9B700]
        "
      >
        {number}
      </span>

      <p
        className="
          pt-1
          text-[11px]
          leading-[18px]
          text-[#B1A393]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles: Record<
    string,
    string
  > = {
    Submitted:
      "bg-[#8D7B69] text-white",

    "Under Review":
      "bg-[#6D4D87] text-white",

    Shortlisted:
      "bg-[#817300] text-white",

    "Panel Review":
      "bg-[#3B6287] text-white",

    Approved:
      "bg-[#57966F] text-white",

    Rejected:
      "bg-[#B13E3E] text-white",
  };

  return (
    <span
      className={[
        `
          w-fit
          shrink-0
          rounded-full
          px-3
          py-1
          text-[7px]
          font-bold
          uppercase
          tracking-widest
          sm:text-[8px]
        `,

        styles[status] ??
          "bg-[#334155] text-white",
      ].join(" ")}
    >
      {status}
    </span>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;

  onChange: (
    value: string,
  ) => void;

  placeholder: string;
}) {
  return (
    <label className="block">
      <span
        className="
          mb-2
          block
          text-[12px]
          text-white
          sm:text-[13px]
        "
      >
        {label}
      </span>

      <input
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        placeholder={placeholder}
        className="
          h-[44px]
          w-full
          rounded-md
          border
          border-[#FFFFFF66]
          bg-transparent
          px-3
          text-[12px]
          text-white
          outline-none
          transition
          placeholder:text-[#8E98A3]
          focus:border-[#D9B700]
        "
      />
    </label>
  );
}

/* =========================================================
   TEXTAREA
========================================================= */

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;

  onChange: (
    value: string,
  ) => void;

  placeholder: string;
}) {
  return (
    <label className="block">
      <span
        className="
          mb-2
          block
          text-[12px]
          leading-[18px]
          text-white
          sm:text-[13px]
        "
      >
        {label}
      </span>

      <textarea
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        placeholder={placeholder}
        className="
          min-h-[100px]
          w-full
          resize-y
          rounded-md
          border
          border-[#FFFFFF66]
          bg-transparent
          px-3
          py-3
          text-[12px]
          leading-[19px]
          text-white
          outline-none
          transition
          placeholder:text-[#8E98A3]
          focus:border-[#D9B700]
        "
      />
    </label>
  );
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;

  onChange: (
    value: string,
  ) => void;

  options: string[];
}) {
  return (
    <label className="block">
      <span
        className="
          mb-2
          block
          text-[13px]
          text-white
        "
      >
        {label}
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value,
            )
          }
          className="
            h-[44px]
            w-full
            appearance-none
            rounded-md
            border-0
            bg-[#2C333D]
            px-3
            pr-10
            text-[12px]
            text-white
            outline-none
          "
        >
          {options.map(
            (option) => (
              <option
                key={option}
              >
                {option}
              </option>
            ),
          )}
        </select>

        <ChevronDown
          size={20}
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-white
          "
        />
      </div>
    </label>
  );
}

/* =========================================================
   REFERENCE BOX
========================================================= */

function ReferenceBox({
  title,
  name,
  organisation,
  relationship,
  onName,
  onOrganisation,
  onRelationship,
}: {
  title: string;
  name: string;
  organisation: string;
  relationship: string;

  onName: (
    value: string,
  ) => void;

  onOrganisation: (
    value: string,
  ) => void;

  onRelationship: (
    value: string,
  ) => void;
}) {
  return (
    <div
      className="
        rounded-md
        border
        border-[#FFFFFF66]
        p-3
        sm:p-4
      "
    >
      <h3
        className="
          mb-4
          text-[15px]
          font-bold
          text-white
          sm:text-[16px]
        "
      >
        {title}
      </h3>

      <div className="space-y-4">
        <Input
          label="Name"
          value={name}
          onChange={onName}
          placeholder="Enter full name"
        />

        <Input
          label="Organisation"
          value={organisation}
          onChange={
            onOrganisation
          }
          placeholder="Company or organisation"
        />

        <Input
          label="Relationship"
          value={relationship}
          onChange={
            onRelationship
          }
          placeholder="e.g. Former manager"
        />
      </div>
    </div>
  );
}

/* =========================================================
   CHECK ROW
========================================================= */

function CheckRow({
  checked,
  onClick,
  text,
}: {
  checked: boolean;
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        items-start
        gap-3
        text-left
        text-[11px]
        leading-[18px]
        text-white
        sm:text-[12px]
      "
    >
      <span
        className={[
          `
            mt-0.5
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded
            border
          `,

          checked
            ? "border-[#D9B700] bg-[#D9B700] text-[#000D1C]"
            : "border-[#FFFFFF66]",
        ].join(" ")}
      >
        {checked && (
          <Check
            size={14}
          />
        )}
      </span>

      {text}
    </button>
  );
}