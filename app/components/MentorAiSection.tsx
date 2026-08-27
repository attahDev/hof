"use client";

import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import { getGmbteToken } from "../lib/gmbteApi";

// Routed through backgmb (not the HF Space directly) so Pelumi's identity
// short-circuit and personality voice-pass actually run — hitting the
// Space directly would bypass both and give the raw, unbranded output.
const API_URL = "https://backgmb.onrender.com/hof-ai/chat";

const suggestions = [
  "Show inductees in Technology",
  "Find Community Champions in Education",
  "Compare innovators from Manchester",
  "Tell me Prof Erinma Bell's legacy story",
];

export default function MentorAiSection() {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const askMentor = async (query: string) => {
    const trimmedQuestion = query.trim();

    if (!trimmedQuestion || isLoading) return;

    setQuestion(trimmedQuestion);
    setSubmittedQuestion(trimmedQuestion);
    setAnswer("");
    setError("");
    setIsLoading(true);

    try {
      const token = getGmbteToken();
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          message: trimmedQuestion,
        }),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        let errorMessage = `Request failed with status ${response.status}`;

        try {
          if (contentType?.includes("application/json")) {
            const errorData = await response.json();

            errorMessage =
              errorData?.message ||
              errorData?.error ||
              errorMessage;
          } else {
            const errorText = await response.text();

            if (errorText) {
              errorMessage = errorText;
            }
          }
        } catch {
          // Keep default error message.
        }

        throw new Error(errorMessage);
      }

      const body = await response.json();
      const reply = body?.data?.reply ?? body?.reply;
      setAnswer(reply || "I received a response, but I couldn't read its format.");
    } catch (err) {
      console.error("Pelumi error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Pelumi is currently unavailable. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await askMentor(question);
  };

  const handleSuggestion = async (suggestion: string) => {
    await askMentor(suggestion);
  };

  return (
    <ScrollReveal as="section" className="w-full border-y-[0.5px] border-black/10 bg-[#F8F4EA] px-6 py-[70px] sm:px-10 lg:px-[50px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-8 flex items-center gap-3 text-[#8A6425] sm:gap-4">
          <span className="font-serif text-[22px] italic leading-none sm:text-[26px]">
            §
          </span>

          <p className="text-base font-semibold uppercase tracking-[0.02em] sm:text-lg">
            Ask the Archive
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch">
          {/* Identity panel */}
          <div className="relative flex flex-col overflow-hidden rounded-[4px] border border-[#D9B700]/35 bg-[linear-gradient(175deg,#111419_0%,#0B0E13_100%)] p-8 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)]">
            <div className="relative h-[180px] w-full sm:h-[200px] lg:h-[220px]">
              <PelumiScene />
            </div>

            <div className="mt-2 flex items-center gap-2.5">
              <h2 className="font-montserrat text-[26px] font-medium uppercase tracking-[0.01em] leading-tight text-white">
                Pelumi
              </h2>
              <span className="rounded-full border border-[#D9B700]/40 px-2.5 py-1 font-montserrat text-[10px] font-semibold uppercase tracking-[0.1em] text-[#D9B700]">
                AI Guide
              </span>
            </div>

            <p className="mt-3 text-[15px] leading-relaxed text-[#BFB2A3]">
              Your guide through the archive. Ask about any figure, chapter,
              or theme in the Hall of Fame — Pelumi searches the full record
              to answer.
            </p>
          </div>

          {/* Interaction panel */}
          <div className="relative flex flex-col overflow-hidden rounded-[4px] border border-[#D9B700]/35 bg-[linear-gradient(175deg,#111419_0%,#0B0E13_100%)] px-6 py-8 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)] sm:px-8 lg:px-[45px] lg:py-[45px]">
            {/* Corner flourishes — museum plaque framing */}
            <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#D9B700]/50 sm:left-6 sm:top-6" />
            <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-[#D9B700]/50 sm:right-6 sm:top-6" />
            <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#D9B700]/50 sm:bottom-6 sm:left-6" />
            <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#D9B700]/50 sm:bottom-6 sm:right-6" />

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_180px]"
            >
              <input
                type="text"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                disabled={isLoading}
                placeholder="Try: Who is Professor Erinma Bell MBE?"
                className="
                  h-[68px] w-full rounded-[4px] border border-white/15
                  bg-white/[0.03] px-6 text-[17px] text-white
                  outline-none transition
                  placeholder:text-[#8A8580]
                  focus:border-[#D9B700]/70 focus:bg-white/[0.05]
                  disabled:cursor-not-allowed disabled:opacity-60
                  sm:h-[76px] sm:px-8 sm:text-[18px]
                "
              />

              <button
                type="submit"
                disabled={isLoading || !question.trim()}
                className="
                  inline-flex h-[68px] items-center justify-center gap-3
                  rounded-[4px] border border-[#D9B700]/60 bg-[#D9B700] px-6
                  text-[18px] font-semibold uppercase tracking-[0.03em] text-[#000D1C]
                  transition hover:bg-[#E5C300]
                  disabled:cursor-not-allowed disabled:opacity-60
                  sm:h-[76px] sm:text-[20px]
                "
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Thinking
                  </>
                ) : (
                  <>
                    Ask
                    <ArrowRight size={20} strokeWidth={1.8} />
                  </>
                )}
              </button>
            </form>

            {/* Suggestions */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSuggestion(suggestion)}
                  className="
                    min-h-[48px] rounded-[4px] border border-white/10
                    px-4 text-center text-[13px] font-medium text-[#BFB2A3]
                    transition
                    hover:border-[#D9B700]/50
                    hover:bg-[#D9B700]/[0.06]
                    hover:text-white
                    disabled:cursor-not-allowed disabled:opacity-60
                  "
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Response area */}
            <div className="mt-8 border-t border-white/10 pt-6">
              {isLoading && (
                <div className="flex items-center gap-3 text-[#BFB2A3]">
                  <Loader2
                    size={18}
                    className="animate-spin text-[#D9B700]"
                  />

                  <p className="text-[14px]">
                    Pelumi is searching the Hall of Fame archive...
                  </p>
                </div>
              )}

              {!isLoading && error && (
                <div className="rounded-[4px] border border-[#D7263D]/30 bg-[#D7263D]/10 px-5 py-4">
                  <p className="text-[14px] font-medium text-[#F0A0A9]">
                    Pelumi could not answer this question.
                  </p>

                  <p className="mt-1 text-[13px] text-[#BFB2A3]">
                    {error}
                  </p>
                </div>
              )}

              {!isLoading && answer && (
                <div className="rounded-[4px] border border-[#D9B700]/25 bg-white/[0.03] px-5 py-5">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={17}
                      className="shrink-0 text-[#D9B700]"
                    />

                    <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#D9B700]">
                      Pelumi
                    </p>
                  </div>

                  <p className="mt-3 text-[13px] font-medium text-[#8A8580]">
                    You asked:
                  </p>

                  <p className="mt-1 text-[15px] font-semibold text-white">
                    {submittedQuestion}
                  </p>

                  <div className="mt-4 whitespace-pre-wrap text-[15px] leading-[1.75] text-[#DBD2C8]">
                    {answer}
                  </div>
                </div>
              )}

              {!isLoading && !answer && !error && (
                <p className="text-[13px] text-[#8A8580]">
                  Ask a question or choose one of the suggestions above to
                  explore the Hall of Fame archive.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function PelumiScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Concentric engraved rings, standing in for the old wireframe —
          reads as "insignia" rather than "tech demo", and costs nothing
          on mobile. */}
      <motion.div
        className="absolute size-[86px] rounded-full border border-[var(--gold)]/25 sm:size-[104px]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)] shadow-[0_0_10px_rgba(217,183,0,0.7)]" />
      </motion.div>

      <motion.div
        className="absolute size-[54px] rounded-full border border-[var(--gold)]/35 sm:size-[66px]"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="flex size-[40px] items-center justify-center rounded-full bg-[var(--gold)]/12 sm:size-[48px]"
        animate={
          reduceMotion
            ? undefined
            : { boxShadow: [
                "0 0 0px rgba(217,183,0,0.25)",
                "0 0 22px rgba(217,183,0,0.45)",
                "0 0 0px rgba(217,183,0,0.25)",
              ] }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={18} className="text-[var(--gold)]" strokeWidth={1.75} />
      </motion.div>
    </div>
  );
}