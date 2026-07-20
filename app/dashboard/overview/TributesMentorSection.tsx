"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe2, MapPin, Loader2, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

const API_URL = "https://olayimika01-hall-of-fame.hf.space/api/v1/chat";

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

const tributes = [
  {
    id: "1",
    name: "Adisa Johnson",
    person: "Amber Wilson",
    quote:
      "Amber's mentorship programme has changed so many lives across the Caribbean.",
    time: "2 hours ago",
    avatar: "/hero/Container.png",
  },
  {
    id: "2",
    name: "Kwame Mensah",
    person: "Prof. Erinma Bell",
    quote: "A lifetime of service, innovation, and inspiration.",
    time: "Yesterday",
    avatar: "/hero/Container (1).png",
  },
  {
    id: "3",
    name: "Jordan Williams",
    person: "Kofi Owusu",
    quote:
      "Kofi's work in Ghana is exactly what regional recognition was built for.",
    time: "2 days ago",
    avatar: "/hero/Container (2).png",
  },
];

const suggestions = [
  "Who is Professor Erinma Bell MBE?",
  "Show inductees in Technology",
  "Find Community Champions in Education",
];

export default function TributesMentorSection() {
  return (
    <section className="mt-[24px] sm:mt-[34px] flex flex-col lg:flex-row w-full gap-[20px]">
      <RecentTributes />
      <FellowshipAi />
    </section>
  );
}

function RecentTributes() {
  return (
    <section className="h-auto min-h-[350px] flex-1 rounded-[15px] bg-[#000D1C] p-5 sm:p-[20px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.5px] text-white">
          Recent Tributes
        </h2>

        <Link
          href="/dashboard/tributes"
          className="text-[12px] sm:text-[14px] font-medium uppercase text-[#B1A393] transition hover:text-white"
        >
          View All
        </Link>
      </div>

      <div className="mt-[20px] sm:mt-[27px] space-y-[20px] sm:space-y-[28px]">
        {tributes.map((tribute) => (
          <div key={tribute.id} className="flex gap-[12px] sm:gap-[14px]">
            <div className="relative h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] shrink-0 overflow-hidden rounded-full">
              <Image
                src={tribute.avatar}
                alt={tribute.name}
                fill
                sizes="(max-width: 640px) 40px, 46px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[20px] text-white">
                {tribute.name}{" "}
                <span className="text-[#B1A393]">shouted out</span>{" "}
                {tribute.person}
              </p>

              <p className="mt-[5px] sm:mt-[7px] text-[12px] sm:text-[14px] font-light leading-relaxed sm:leading-[19px] text-[#B8C0CC]">
                "{tribute.quote}"
              </p>

              <p className="mt-[3px] sm:mt-[4px] text-[10px] sm:text-[12px] font-light text-[#B8C0CC]/80">
                {tribute.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FellowshipAi() {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const askFellowship = async (query: string) => {
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
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
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
            errorMessage = errorData?.detail || errorData?.message || errorData?.error || errorMessage;
          } else {
            const errorText = await response.text();
            if (errorText) errorMessage = errorText;
          }
        } catch {
          // Keep fallback error code
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
      console.error("Fellowship AI segment error:", err);
      setError(
        err instanceof TypeError && err.message === "Failed to fetch"
          ? "Connection failed. Please verify CORS parameters or endpoint availability."
          : err instanceof Error
          ? err.message
          : "An unexpected connection error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await askFellowship(question);
  };

  const handleSuggestion = async (suggestionText: string) => {
    await askFellowship(suggestionText);
  };

  return (
    <section className="h-auto min-h-[350px] w-full lg:w-[380px] xl:w-[404px] shrink-0 rounded-[15px] bg-[#3C3300] p-5 sm:p-[20px] flex flex-col justify-between">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.5px] text-[#D9B700]">
            Fellowship AI
          </h2>

          <p className="text-[12px] sm:text-[14px] font-medium text-[#B1A393]">
            Legacy Guide
          </p>
        </div>

        {/* Dynamic Display Area: Shifts based on query lifecycle states */}
        <div className="mt-4 flex-1 flex flex-col">
          {isLoading && (
            <div className="flex-1 flex flex-col items-center justify-center py-6 text-center text-[#DBD2C8]">
              <Loader2 className="animate-spin text-[#D9B700] mb-3" size={32} />
              <p className="text-sm font-medium">Searching the Hall of Fame archive...</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="flex-1 rounded-lg border border-[#D7263D]/30 bg-[#D7263D]/5 p-4 my-2 overflow-y-auto max-h-[180px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FF8796]">Query Error</p>
              <p className="mt-1 text-xs text-[#B8C0CC]">{error}</p>
              <button 
                onClick={() => { setError(""); setAnswer(""); }} 
                className="mt-3 text-[11px] font-bold uppercase text-[#D9B700] hover:underline"
              >
                Clear Error
              </button>
            </div>
          )}

          {!isLoading && answer && (
            <div className="flex-1 rounded-lg border border-[#D9B700]/10 bg-[#000D1C]/40 p-4 my-2 flex flex-col justify-between">
              <div className="overflow-y-auto max-h-[150px] [scrollbar-width:thin]">
                <div className="flex items-center gap-1 text-[#D9B700] mb-1">
                  <Sparkles size={13} />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Fellowship AI Response</p>
                </div>
                <p className="text-[11px] font-semibold text-[#B1A393] mb-2 italic">"{submittedQuestion}"</p>
                <div className="text-xs leading-relaxed text-[#DBD2C8] whitespace-pre-wrap">{answer}</div>
              </div>
              <button 
                onClick={() => { setAnswer(""); setQuestion(""); }} 
                className="mt-3 w-fit text-[11px] font-bold uppercase text-[#D9B700] hover:underline self-end"
              >
                Ask Another
              </button>
            </div>
          )}

          {/* Standard View (Prompt chips & intro) */}
          {!isLoading && !answer && !error && (
            <>
              <p className="text-[15px] sm:text-[17px] font-medium leading-relaxed sm:leading-[28px] text-[#DBD2C8]">
                Ask anything about the Hall of Fame. Inductees, stories, regions or awards
              </p>

              {/* Suggestion prompt chips */}
              <div className="mt-5 sm:mt-[27px] space-y-[8px] mb-4">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSuggestion(item)}
                    className="h-[35px] w-full rounded-[7px] border border-[#D9B700]/10 bg-[#D9B700]/5 px-3 text-left text-[11px] sm:text-[12px] font-light text-[#B1A393] truncate transition hover:border-[#D9B700]/30 hover:bg-[#D9B700]/10"
                  >
                    "{item}"
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Query input block */}
      <form onSubmit={handleSubmit} className="mt-4 sm:mt-0 pt-4 lg:pt-0 border-t border-[#D9B700]/5 flex gap-[8px]">
        <input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          disabled={isLoading}
          placeholder="Ask Fellowship AI..."
          className="h-[37px] flex-1 rounded-[7px] border border-[#D9B700]/15 bg-[#FFFFFF0D] px-[13px] text-xs sm:text-[12px] text-[#DBD2C8] outline-none placeholder:text-[#B1A393] focus:border-[#D9B700]/40 transition-colors disabled:opacity-40"
        />

        <button 
          type="submit"
          disabled={isLoading || !question.trim()}
          className="h-[37px] w-[55px] rounded-[7px] bg-[#D9B700] text-xs sm:text-[13px] font-bold text-[#000D1C] transition hover:bg-[#D9B700]/90 active:scale-[0.98] disabled:opacity-40"
        >
          {isLoading ? <Loader2 size={15} className="animate-spin mx-auto" /> : "Ask"}
        </button>
      </form>
    </section>
  );
}