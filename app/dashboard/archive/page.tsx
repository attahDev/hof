"use client";

import { ArrowRight, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type WitnessRecord = {
  id: string;
  witness: string;
  inductee: string;
  location: string;
  date: string;
};

type WitnessForm = {
  fullName: string;
  inductee: string;
  location: string;
};

const initialRecords: WitnessRecord[] = [
  {
    id: "witness-1",
    witness: "Okerie Johnson",
    inductee: "Prof. Erinma Bell",
    location: "Manchester, UK",
    date: "July 2026",
  },
  {
    id: "witness-2",
    witness: "Abel Goodson",
    inductee: "Dr. Diane Nkosi",
    location: "London, UK",
    date: "July 2026",
  },
  {
    id: "witness-3",
    witness: "Kwame Mensah",
    inductee: "Prof. Erinma Bell",
    location: "Accra, Ghana",
    date: "August 2026",
  },
  {
    id: "witness-4",
    witness: "Lola Nwosu",
    inductee: "Marcus Adesola",
    location: "Lagos, Nigeria",
    date: "October 2026",
  },
];

const initialForm: WitnessForm = {
  fullName: "",
  inductee: "",
  location: "",
};

export default function WitnessArchivePage() {
  const [records, setRecords] = useState<WitnessRecord[]>(initialRecords);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<WitnessForm>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof WitnessForm, string>>
  >({});

  const totalSignatures = useMemo(() => {
    return 1245 + Math.max(records.length - initialRecords.length, 0);
  }, [records.length]);

  const updateForm = (field: keyof WitnessForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof WitnessForm, string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.inductee.trim()) {
      nextErrors.inductee = "Please enter the inductee's name.";
    }

    if (!form.location.trim()) {
      nextErrors.location = "Please enter your location.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const submitWitness = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    const date = new Intl.DateTimeFormat("en-GB", {
      month: "long",
      year: "numeric",
    }).format(new Date());

    setRecords((current) => [
      {
        id: crypto.randomUUID(),
        witness: form.fullName.trim(),
        inductee: form.inductee.trim(),
        location: form.location.trim(),
        date,
      },
      ...current,
    ]);

    setForm(initialForm);
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen w-full bg-[#F5EBE1] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Header Panel */}
      <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h1 className="text-[28px] xs:text-[36px] lg:text-[45px] font-bold uppercase leading-none tracking-tight text-[#000D1C]">
            Witness Archive
          </h1>

          <p className="mt-2 sm:mt-5 text-lg sm:text-[25px] font-medium text-[#6C6359] leading-snug">
            {totalSignatures.toLocaleString()} signatures across all inductions
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-2 md:mt-3 inline-flex h-[50px] sm:h-[60px] w-full md:w-auto items-center justify-center gap-4 sm:gap-5 rounded-[12px] bg-[#D9B700] px-5 sm:px-6 text-sm sm:text-[18px] font-bold text-[#000D1C] transition hover:bg-[#C8AA00] active:scale-[0.98]"
        >
          Sign as Witness
          <ArrowRight size={21} />
        </button>
      </header>

      {/* Signatures List Panel */}
      <section className="mt-8 sm:mt-12 lg:mt-[76px] overflow-hidden rounded-[15px] bg-[#000D1C] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
        
        {/* Desktop Header Only */}
        <div className="hidden md:grid md:grid-cols-[1.55fr_0.95fr_0.95fr_0.62fr] gap-4 lg:gap-8 text-sm lg:text-[18px] font-bold text-[#B1A393] border-b border-white/10 pb-4">
          <p className="uppercase">Witness</p>
          <p>Inductee</p>
          <p>Location</p>
          <p>Date</p>
        </div>

        <div className="mt-2 md:mt-11 space-y-5 md:space-y-8 divide-y divide-white/5 md:divide-y-0">
          {records.map((record, index) => (
            <article
              key={record.id}
              className={[
                "grid grid-cols-1 gap-2 md:gap-4 lg:gap-8 md:grid-cols-[1.55fr_0.95fr_0.95fr_0.62fr] md:items-center",
                index > 0 ? "pt-5 md:pt-0" : ""
              ].join(" ")}
            >
              {/* Witness Name */}
              <div className="flex md:block justify-between items-center text-xs sm:text-sm">
                <span className="font-bold text-[#B1A393] uppercase tracking-wider text-[10px] md:hidden">Witness</span>
                <p className="text-[14px] font-semibold uppercase text-white md:truncate">
                  {record.witness}
                </p>
              </div>

              {/* Inductee Name */}
              <div className="flex md:block justify-between items-center text-xs sm:text-sm">
                <span className="font-bold text-[#B1A393] uppercase tracking-wider text-[10px] md:hidden">Inductee</span>
                <p className="text-[14px] font-semibold text-white md:truncate">
                  {record.inductee}
                </p>
              </div>

              {/* Location */}
              <div className="flex md:block justify-between items-center text-xs sm:text-sm">
                <span className="font-bold text-[#B1A393] uppercase tracking-wider text-[10px] md:hidden">Location</span>
                <p className="text-[14px] font-semibold text-white md:truncate">
                  {record.location}
                </p>
              </div>

              {/* Date */}
              <div className="flex md:block justify-between items-center text-xs sm:text-sm">
                <span className="font-bold text-[#B1A393] uppercase tracking-wider text-[10px] md:hidden">Date</span>
                <p className="text-[14px] font-semibold text-white">
                  {record.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Overlay modal for witness signatures */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm transition-all duration-200"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="w-full max-w-[560px] rounded-[15px] bg-[#000D1C] p-6 sm:p-8 shadow-2xl border border-white/10 animate-in fade-in-50 zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold uppercase text-white">
                  Sign as Witness
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-[#B1A393]">
                  Add your signature to an induction.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
                aria-label="Close form"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={submitWitness} className="mt-6 sm:mt-7 space-y-5">
              <FormInput
                label="Your full name"
                value={form.fullName}
                placeholder="Enter your full name"
                error={errors.fullName}
                onChange={(value) => updateForm("fullName", value)}
              />

              <FormInput
                label="Inductee"
                value={form.inductee}
                placeholder="Enter the inductee's name"
                error={errors.inductee}
                onChange={(value) => updateForm("inductee", value)}
              />

              <FormInput
                label="Location"
                value={form.location}
                placeholder="e.g. Manchester, UK"
                error={errors.location}
                onChange={(value) => updateForm("location", value)}
              />

              <div className="flex flex-col-reverse xs:flex-row justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="h-11 rounded-lg border border-[#B1A393]/35 px-5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#D9B700] px-5 text-sm font-bold text-[#000D1C] hover:bg-[#C8AA00] transition-colors"
                >
                  Add Signature
                  <ArrowRight size={17} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function FormInput({
  label,
  value,
  placeholder,
  error,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block w-full">
      <span className="mb-2 block text-xs sm:text-sm font-medium text-[#B1A393]">{label}</span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={[
          "h-12 w-full rounded-lg border bg-transparent px-4 text-sm text-white outline-none placeholder:text-[#7F8A99] transition-colors",
          error
            ? "border-[#D7263D]"
            : "border-[#5A6675] focus:border-[#D9B700]",
        ].join(" ")}
      />

      {error && (
        <span className="mt-1 block text-xs text-[#FF8796]">{error}</span>
      )}
    </label>
  );
}