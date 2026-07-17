"use client";

import { ArrowRight, Bot, Loader2, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

const API_URL =
  "https://olayimika01-hall-of-fame.hf.space/api/v1/chat";

const suggestions = [
  "Show inductees in Technology",
  "Find Community Champions in Education",
  "Compare innovators from Manchester",
  "Tell me Erinma Bell's legacy story",
];

type ApiResponse = {
  answer?: string;
  response?: string;
  message?: string;
  result?: string;
  data?: {
    answer?: string;
    response?: string;
    message?: string;
  };
};

function getResponseText(data: ApiResponse | string): string {
  if (typeof data === "string") {
    return data;
  }

  return (
    data.answer ||
    data.response ||
    data.message ||
    data.result ||
    data.data?.answer ||
    data.data?.response ||
    data.data?.message ||
    "I received a response, but I couldn't read its format."
  );
}

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
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: trimmedQuestion,
        }),
      });

      const contentType = response.headers.get("content-type");

      if (!response.ok) {
        let errorMessage = `Request failed with status ${response.status}`;

        try {
          if (contentType?.includes("application/json")) {
            const errorData = await response.json();

            errorMessage =
              errorData?.detail ||
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

      if (contentType?.includes("application/json")) {
        const data: ApiResponse = await response.json();
        setAnswer(getResponseText(data));
      } else {
        const text = await response.text();
        setAnswer(text);
      }
    } catch (err) {
      console.error("Mentor AI error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Mentor AI is currently unavailable. Please try again."
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
    <section className="w-full border-y-[0.5px] border-black/10 bg-[#F8F4EA] px-6 py-[70px] sm:px-10 lg:px-[50px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex min-h-[500px] flex-col rounded-lg border border-[#BFB2A3] bg-[#D9B7000D] px-6 py-8 sm:px-8 lg:px-[45px] lg:py-[45px]">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="flex size-[76px] shrink-0 items-center justify-center rounded-full bg-[#E8DCC5]/60">
              <div className="flex size-[60px] items-center justify-center rounded-full bg-[#E8C4B4]/65">
                <Bot
                  size={32}
                  strokeWidth={1.7}
                  className="text-[#D7263D]"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[28px] font-semibold leading-tight text-[#17120F]">
                Ask Mentor AI
              </h2>

              <p className="mt-1 text-[18px] leading-tight text-[#8C837C]">
                Your guide through the archive
              </p>
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_180px]"
          >
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              disabled={isLoading}
              placeholder="Try: Who is Professor Erinma Bell MBE?"
              className="
                h-[82px] w-full rounded-lg border border-[#BFB2A3]
                bg-transparent px-8 text-[18px] text-[#17120F]
                outline-none transition
                placeholder:text-[#858585]
                focus:border-[#D9B700]
                disabled:cursor-not-allowed disabled:opacity-60
              "
            />

            <button
              type="submit"
              disabled={isLoading || !question.trim()}
              className="
                inline-flex h-[82px] items-center justify-center gap-3
                rounded-lg bg-[#D7263D] px-6
                text-[22px] font-medium text-white
                transition hover:bg-[#BE1F35]
                disabled:cursor-not-allowed disabled:opacity-60
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
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                disabled={isLoading}
                onClick={() => handleSuggestion(suggestion)}
                className="
                  min-h-[50px] rounded-lg border border-[#BFB2A3]
                  px-4 text-center text-[13px] font-medium text-[#514B46]
                  transition
                  hover:border-[#D9B700]
                  hover:bg-[#D9B7000D]
                  hover:text-[#17120F]
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Response area */}
          <div className="mt-8 border-t border-[#BFB2A3] pt-6">
            {isLoading && (
              <div className="flex items-center gap-3 text-[#6B625C]">
                <Loader2
                  size={18}
                  className="animate-spin text-[#D7263D]"
                />

                <p className="text-[14px]">
                  Mentor AI is searching the Hall of Fame archive...
                </p>
              </div>
            )}

            {!isLoading && error && (
              <div className="rounded-lg border border-[#D7263D]/30 bg-[#D7263D]/5 px-5 py-4">
                <p className="text-[14px] font-medium text-[#B91C1C]">
                  Mentor AI could not answer this question.
                </p>

                <p className="mt-1 text-[13px] text-[#6B625C]">
                  {error}
                </p>
              </div>
            )}

            {!isLoading && answer && (
              <div className="rounded-lg border border-[#BFB2A3]/70 bg-white/30 px-5 py-5">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={17}
                    className="shrink-0 text-[#D9B700]"
                  />

                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#8A6425]">
                    Mentor AI
                  </p>
                </div>

                <p className="mt-3 text-[13px] font-medium text-[#77706A]">
                  You asked:
                </p>

                <p className="mt-1 text-[15px] font-semibold text-[#17120F]">
                  {submittedQuestion}
                </p>

                <div className="mt-4 whitespace-pre-wrap text-[15px] leading-[1.75] text-[#514B46]">
                  {answer}
                </div>
              </div>
            )}

            {!isLoading && !answer && !error && (
              <p className="text-[13px] text-[#8C837C]">
                Ask a question or choose one of the suggestions above to explore
                the Hall of Fame archive.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}