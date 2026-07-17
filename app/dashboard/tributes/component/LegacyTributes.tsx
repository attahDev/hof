"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";
import {
  FormEvent,
  useMemo,
  useState,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type Tribute = {
  id: string;
  author: string;
  recipient: string;
  message: string;
  createdAt: string;
  avatar: string;
};

type TributeForm = {
  fullName: string;
  handle: string;
  message: string;
};

type FormErrors = Partial<
  Record<keyof TributeForm, string>
>;

/* =========================================================
   CONFIGURATION

   false = Coming Soon experience
   true  = Live tribute experience

   When your API is ready, you can switch this to true
   and replace the local tribute creation with your API.
========================================================= */

const TRIBUTES_ARE_LIVE = false;

const TRIBUTE_DRAFT_STORAGE_KEY =
  "hall-of-fame-tribute-draft";

/* =========================================================
   INITIAL TRIBUTES
========================================================= */

const initialTributes: Tribute[] = [
  {
    id: "tribute-1",
    author: "Adisa Johnson",
    recipient: "Amber Wilson",
    message:
      "Amber's mentorship programme has changed so many lives across the Caribbean.",
    createdAt: "2 hours ago",
    avatar: "/tribuites/tri-1.png",
  },
  {
    id: "tribute-2",
    author: "Kwame Mensah",
    recipient: "Prof. Erinma Bell",
    message:
      "A lifetime of service, innovation, and inspiration.",
    createdAt: "Yesterday",
    avatar: "/tribuites/tri-2.png",
  },
  {
    id: "tribute-3",
    author: "Jordan Williams",
    recipient: "Kofi Owusu",
    message:
      "Kofi's work in Ghana is exactly what regional recognition was built for.",
    createdAt: "2 days ago",
    avatar: "/tribuites/tri-3.png",
  },

  /*
   * Extra sample tributes.
   *
   * These make VIEW ALL functional for now.
   * You can replace them with your real backend data later.
   */
  {
    id: "tribute-4",
    author: "Sarah Thompson",
    recipient: "Wayne Bennett",
    message:
      "Wayne continues to open doors and create meaningful opportunities for people across Greater Manchester.",
    createdAt: "3 days ago",
    avatar: "/tribuites/tri-1.png",
  },
  {
    id: "tribute-5",
    author: "David Mensah",
    recipient: "Esther Aluko",
    message:
      "Your commitment to mentoring others and helping people discover their potential is truly inspiring.",
    createdAt: "4 days ago",
    avatar: "/tribuites/tri-2.png",
  },
  {
    id: "tribute-6",
    author: "Grace Williams",
    recipient: "Carol Ann Whitehead",
    message:
      "Thank you for a lifetime of leadership, service and positive impact within our community.",
    createdAt: "5 days ago",
    avatar: "/tribuites/tri-3.png",
  },
];

const initialForm: TributeForm = {
  fullName: "",
  handle: "",
  message: "",
};

const INITIAL_TRIBUTES_COUNT = 3;

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function LegacyTributes() {
  const [form, setForm] =
    useState<TributeForm>(initialForm);

  const [tributes, setTributes] =
    useState<Tribute[]>(initialTributes);

  const [showAll, setShowAll] =
    useState(false);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [submittedData, setSubmittedData] =
    useState<TributeForm | null>(null);

  /* =======================================================
     DISPLAYED TRIBUTES
  ======================================================= */

  const displayedTributes = useMemo(() => {
    if (showAll) {
      return tributes;
    }

    return tributes.slice(
      0,
      INITIAL_TRIBUTES_COUNT,
    );
  }, [showAll, tributes]);

  /* =======================================================
     UPDATE FORM
  ======================================================= */

  const updateForm = (
    field: keyof TributeForm,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName =
        "Please enter their full name.";
    }

    if (!form.handle.trim()) {
      nextErrors.handle =
        "Please enter their handle.";
    }

    if (!form.message.trim()) {
      nextErrors.message =
        "Please write your tribute message.";
    } else if (
      form.message.trim().length < 10
    ) {
      nextErrors.message =
        "Your tribute should contain at least 10 characters.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };

  /* =======================================================
     SUBMIT TRIBUTE
  ======================================================= */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validateForm()) return;

    const cleanSubmission: TributeForm = {
      fullName: form.fullName.trim(),
      handle: form.handle.trim(),
      message: form.message.trim(),
    };

    setSubmittedData(cleanSubmission);

    /* =====================================================
       LIVE MODE

       Replace this with your API call when the backend
       is available.
    ===================================================== */

    if (TRIBUTES_ARE_LIVE) {
      const newTribute: Tribute = {
        id: crypto.randomUUID(),
        author: "You",
        recipient:
          cleanSubmission.fullName,
        message:
          cleanSubmission.message,
        createdAt: "Just now",
        avatar: "/profile-avatar.png",
      };

      setTributes((current) => [
        newTribute,
        ...current,
      ]);
    }

    /* =====================================================
       COMING SOON MODE

       Store privately in this browser.

       This does NOT add the tribute to Recent Tributes,
       so users don't see a fake public submission.
    ===================================================== */

    if (!TRIBUTES_ARE_LIVE) {
      try {
        localStorage.setItem(
          TRIBUTE_DRAFT_STORAGE_KEY,
          JSON.stringify(
            cleanSubmission,
          ),
        );
      } catch (error) {
        console.error(
          "Unable to save tribute draft:",
          error,
        );
      }
    }

    setIsModalOpen(true);

    setForm(initialForm);
  };

  /* =======================================================
     CLOSE MODAL
  ======================================================= */

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* =======================================================
     TOGGLE TRIBUTES
  ======================================================= */

  const handleToggleTributes = () => {
    setShowAll(
      (current) => !current,
    );
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        bg-[#F5EBE1]
        px-4
        py-6
        sm:px-8
        sm:py-10
      "
    >
      {/* ===================================================
          PAGE HEADER
      =================================================== */}

      <header>
        <h1
          className="
            text-[28px]
            font-bold
            uppercase
            leading-tight
            tracking-tight
            text-[#000D1C]
            sm:text-[45px]
          "
        >
          Legacy Tributes
        </h1>

        <p
          className="
            mt-2
            text-lg
            font-medium
            leading-snug
            text-[#6C6359]
            sm:mt-4
            sm:text-[25px]
          "
        >
          Celebrate and recognise community
          members.
        </p>
      </header>

      {/* ===================================================
          TRIBUTE FORM SECTION
      =================================================== */}

      <section
        className="
          relative
          mt-8
          overflow-hidden
          rounded-[15px]
          bg-[#000D1C]
          p-5
          sm:mt-16
          sm:p-6
        "
      >
        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#D9B700]/10
            blur-[80px]
          "
        />

        {/* =================================================
            COMING SOON NOTICE
        ================================================= */}

        {!TRIBUTES_ARE_LIVE && (
          <div
            className="
              relative
              mb-6
              flex
              flex-col
              items-start
              gap-3
              rounded-xl
              border
              border-[#D9B700]/20
              bg-[#D9B700]/10
              p-4
              sm:flex-row
              sm:items-center
            "
          >
            <span
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
              <Sparkles size={19} />
            </span>

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  text-[#D9B700]
                "
              >
                Something Special Is Coming ✨
              </p>

              <p
                className="
                  mt-1
                  max-w-[760px]
                  text-xs
                  leading-[19px]
                  text-[#B8C0CC]
                  sm:text-[13px]
                "
              >
                Community Tributes are coming
                soon. Be among the first to
                celebrate someone whose story,
                work or impact deserves to be
                recognised.
              </p>
            </div>
          </div>
        )}

        {/* =================================================
            FORM TITLE
        ================================================= */}

        <div
          className="
            relative
            flex
            flex-wrap
            items-center
            gap-2
          "
        >
          <h2
            className="
              text-base
              font-bold
              text-white
              sm:text-lg
            "
          >
            {TRIBUTES_ARE_LIVE
              ? "Send a Shout-Out"
              : "Celebrate Someone"}
          </h2>

          {!TRIBUTES_ARE_LIVE && (
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/10
                px-2.5
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#B1A393]
              "
            >
              Coming Soon
            </span>
          )}
        </div>

        <p
          className="
            relative
            mt-2
            max-w-[620px]
            text-xs
            leading-[19px]
            text-[#7F8A99]
          "
        >
          Share a few words about someone who
          inspires you, supports the community,
          or deserves to have their impact
          celebrated.
        </p>

        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="relative mt-6 sm:mt-7"
        >
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            <FormInput
              label="Their full name"
              placeholder="e.g. Michael Johnson"
              value={form.fullName}
              error={errors.fullName}
              onChange={(value) =>
                updateForm(
                  "fullName",
                  value,
                )
              }
            />

            <FormInput
              label="Their handle"
              placeholder="e.g. @michael"
              value={form.handle}
              error={errors.handle}
              onChange={(value) =>
                updateForm(
                  "handle",
                  value,
                )
              }
            />
          </div>

          {/* =================================================
              TRIBUTE MESSAGE
          ================================================= */}

          <div className="mt-4">
            <label className="block">
              <span
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-white
                "
              >
                Your tribute
              </span>

              <textarea
                value={form.message}
                onChange={(event) =>
                  updateForm(
                    "message",
                    event.target.value,
                  )
                }
                placeholder="Tell us what makes this person special..."
                rows={4}
                className={[
                  `
                    w-full
                    resize-none
                    rounded-lg
                    border
                    bg-transparent
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    transition
                    placeholder:text-[#7F8A99]
                  `,
                  errors.message
                    ? "border-[#D7263D]"
                    : "border-[#5A6675] focus:border-[#D9B700]",
                ].join(" ")}
              />

              <div
                className="
                  mt-1
                  flex
                  items-start
                  justify-between
                  gap-3
                "
              >
                {errors.message ? (
                  <span
                    className="
                      text-xs
                      text-[#FF8796]
                    "
                  >
                    {errors.message}
                  </span>
                ) : (
                  <span />
                )}

                <span
                  className="
                    shrink-0
                    text-[10px]
                    text-[#657080]
                  "
                >
                  {form.message.length}{" "}
                  characters
                </span>
              </div>
            </label>
          </div>

          {/* =================================================
              SUBMIT BUTTON
          ================================================= */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
            "
          >
            <button
              type="submit"
              className={[
                `
                  group
                  inline-flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  px-6
                  text-sm
                  font-bold
                  transition-all
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  active:scale-[0.98]
                  sm:w-auto
                `,
                TRIBUTES_ARE_LIVE
                  ? "bg-[#D7263D] text-white hover:bg-[#BE1F35] focus:ring-[#D7263D]/40"
                  : "bg-[#D9B700] text-[#000D1C] hover:bg-[#E8C500] focus:ring-[#D9B700]/40",
              ].join(" ")}
            >
              {TRIBUTES_ARE_LIVE
                ? "Post Tribute"
                : "Create My Tribute"}

              <ArrowRight
                size={18}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </button>

            {!TRIBUTES_ARE_LIVE && (
              <p
                className="
                  text-[10px]
                  leading-[16px]
                  text-[#657080]
                  sm:max-w-[330px]
                "
              >
                Create your tribute now and
                get ready to celebrate when
                Community Tributes officially
                launch.
              </p>
            )}
          </div>
        </form>
      </section>

      {/* ===================================================
          RECENT TRIBUTES
          
          Styled like the notification/list layout from
          your screenshot.
      =================================================== */}

      <section
        className="
          mt-6
          rounded-[15px]
          bg-[#000D1C]
          px-5
          py-5
          sm:px-6
          sm:py-6
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

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
              text-[17px]
              font-bold
              uppercase
              leading-none
              tracking-[0.02em]
              text-white
              sm:text-[20px]
            "
          >
            Recent Tributes
          </h2>

          <button
            type="button"
            onClick={handleToggleTributes}
            className="
              shrink-0
              text-[12px]
              font-medium
              uppercase
              tracking-[0.01em]
              text-[#B1A393]
              transition-colors
              duration-200
              hover:text-[#D9B700]
              sm:text-[14px]
            "
          >
            {showAll
              ? "Show Less"
              : "View All"}
          </button>
        </div>

        {/* =================================================
            TRIBUTE NOTIFICATION LIST
        ================================================= */}

        <div
          className="
            mt-7
            space-y-7
            sm:mt-8
            sm:space-y-8
          "
        >
          {displayedTributes.map(
            (tribute) => (
              <TributeItem
                key={tribute.id}
                tribute={tribute}
              />
            ),
          )}
        </div>
      </section>

      {/* ===================================================
          SUCCESS / PREVIEW MODAL
      =================================================== */}

      {isModalOpen &&
        submittedData && (
          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              p-4
            "
          >
            {/* Backdrop */}

            <button
              type="button"
              aria-label="Close modal"
              onClick={closeModal}
              className="
                absolute
                inset-0
                cursor-default
                bg-black/65
                backdrop-blur-sm
              "
            />

            {/* =================================================
                MODAL
            ================================================= */}

            <div
              className="
                relative
                z-10
                w-full
                max-w-[480px]
                overflow-hidden
                rounded-[22px]
                border
                border-white/10
                bg-[#000D1C]
                p-6
                shadow-2xl
                sm:p-8
              "
            >
              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-[160px]
                  w-[160px]
                  rounded-full
                  bg-[#D9B700]/10
                  blur-[60px]
                "
              />

              {/* Close */}

              <button
                type="button"
                onClick={closeModal}
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-[#B1A393]
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Icon */}

                {TRIBUTES_ARE_LIVE ? (
                  <div
                    className="
                      mb-4
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500/10
                      text-emerald-400
                    "
                  >
                    <CheckCircle2
                      size={32}
                    />
                  </div>
                ) : (
                  <div
                    className="
                      mb-4
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D9B700]/10
                      text-[#D9B700]
                    "
                  >
                    <Sparkles
                      size={29}
                    />
                  </div>
                )}

                {/* Small label */}

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#D9B700]
                  "
                >
                  {TRIBUTES_ARE_LIVE
                    ? "Thank You"
                    : "Coming Soon"}
                </p>

                {/* Heading */}

                <h3
                  className="
                    mt-2
                    text-xl
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                    sm:text-2xl
                  "
                >
                  {TRIBUTES_ARE_LIVE
                    ? "Tribute Posted!"
                    : "Your Tribute Is Ready! ✨"}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    max-w-[370px]
                    text-xs
                    leading-[20px]
                    text-[#B1A393]
                    sm:text-sm
                  "
                >
                  {TRIBUTES_ARE_LIVE
                    ? `Your tribute celebrating ${submittedData.fullName} has been shared with the Hall of Fame community.`
                    : `A beautiful tribute for ${submittedData.fullName}. Community Tributes are launching soon, and we can't wait to see stories like this celebrated.`}
                </p>

                {/* =================================================
                    TRIBUTE PREVIEW
                ================================================= */}

                <div
                  className="
                    mt-6
                    w-full
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-[#181D22]
                    p-4
                    text-left
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Sparkles
                      size={12}
                      className="text-[#D9B700]"
                    />

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#D9B700]
                      "
                    >
                      Tribute Preview
                    </p>
                  </div>

                  <div className="mt-3">
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {
                        submittedData.fullName
                      }
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[11px]
                        text-[#7F8A99]
                      "
                    >
                      {submittedData.handle}
                    </p>
                  </div>

                  <p
                    className="
                      mt-3
                      border-l-2
                      border-[#D9B700]/40
                      pl-3
                      text-xs
                      italic
                      leading-[20px]
                      text-[#B8C0CC]
                    "
                  >
                    &ldquo;
                    {
                      submittedData.message
                    }
                    &rdquo;
                  </p>
                </div>

                {/* =================================================
                    COMING SOON MESSAGE
                ================================================= */}

                {!TRIBUTES_ARE_LIVE && (
                  <div
                    className="
                      mt-4
                      rounded-lg
                      bg-white/[0.03]
                      px-4
                      py-3
                    "
                  >
                    <p
                      className="
                        text-[11px]
                        leading-[18px]
                        text-[#7F8A99]
                      "
                    >
                      Thank you for celebrating
                      someone making a
                      difference. Something
                      special is coming to the
                      Hall of Fame community.
                    </p>
                  </div>
                )}

                {/* =================================================
                    CTA
                ================================================= */}

                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-6
                    h-11
                    w-full
                    rounded-lg
                    bg-[#D7263D]
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-[#BE1F35]
                    active:scale-[0.98]
                  "
                >
                  {TRIBUTES_ARE_LIVE
                    ? "Done"
                    : "Sounds Exciting!"}
                </button>
              </div>
            </div>
          </div>
        )}
    </main>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (
    value: string,
  ) => void;
}) {
  return (
    <label className="block w-full">
      <span
        className="
          mb-2
          block
          text-sm
          font-medium
          text-white
        "
      >
        {label}
      </span>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        placeholder={placeholder}
        className={[
          `
            h-12
            w-full
            rounded-lg
            border
            bg-transparent
            px-4
            text-sm
            text-white
            outline-none
            transition
            placeholder:text-[#7F8A99]
          `,
          error
            ? "border-[#D7263D]"
            : "border-[#5A6675] focus:border-[#D9B700]",
        ].join(" ")}
      />

      {error && (
        <span
          className="
            mt-1
            block
            text-xs
            text-[#FF8796]
          "
        >
          {error}
        </span>
      )}
    </label>
  );
}

/* =========================================================
   TRIBUTE NOTIFICATION ITEM

   This is styled to match your screenshot:
   Avatar | Name shouted out Recipient
          | Message
          | Time
========================================================= */

function TributeItem({
  tribute,
}: {
  tribute: Tribute;
}) {
  return (
    <article
      className="
        group
        flex
        w-full
        items-start
        gap-4
        sm:gap-5
      "
    >
      {/* =================================================
          AVATAR
      ================================================= */}

      <div
        className="
          relative
          h-[58px]
          w-[58px]
          shrink-0
          overflow-hidden
          rounded-[14px]
          sm:h-[68px]
          sm:w-[68px]
        "
      >
        <Image
          src={tribute.avatar}
          alt={tribute.author}
          fill
          sizes="
            (max-width: 640px) 58px,
            68px
          "
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          min-w-0
          flex-1
          pt-[1px]
        "
      >
        {/* Name + action + recipient */}

        <h3
          className="
            text-[15px]
            font-medium
            leading-[21px]
            text-white
            sm:text-[20px]
            sm:leading-[27px]
          "
        >
          <span>
            {tribute.author}
          </span>{" "}

          <span
            className="
              font-normal
              text-[#B1A393]
            "
          >
            shouted out
          </span>{" "}

          <span>
            {tribute.recipient}
          </span>
        </h3>

        {/* Tribute message */}

        <p
          className="
            mt-1
            max-w-[900px]
            text-[12px]
            leading-[19px]
            text-[#B8C0CC]
            sm:text-[15px]
            sm:leading-[22px]
          "
        >
          &quot;
          {tribute.message}
          &quot;
        </p>

        {/* Time */}

        <p
          className="
            mt-1.5
            text-[11px]
            leading-none
            text-[#A4ADB8]
            sm:text-[13px]
          "
        >
          {tribute.createdAt}
        </p>
      </div>
    </article>
  );
}