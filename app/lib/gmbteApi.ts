/**
 * Bridge to gmbtebac (the real backend). hof has no login of its own — the
 * parent app (gmbtefro) passes the logged-in user's token in via a
 * `gmbte_token` URL query param when it embeds this app in an iframe (see
 * HallOfFameEmbed.tsx in gmbtefro). We read it once and cache it in memory
 * for every call this app makes for the rest of the session.
 */

const API_BASE = "https://backgmb.onrender.com";

let cachedToken: string | null = null;

export function getGmbteToken(): string | null {
  if (cachedToken) return cachedToken;
  if (typeof window === "undefined") return null;

  const fromUrl = new URLSearchParams(window.location.search).get("gmbte_token");
  if (fromUrl) {
    cachedToken = fromUrl;
    return cachedToken;
  }
  return null;
}

async function gmbteFetch(path: string, options: RequestInit = {}) {
  const token = getGmbteToken();
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`gmbte API ${res.status}: ${body}`);
  }
  return res.json();
}

// ───────────────────────── Tributes ─────────────────────────

export type Tribute = {
  id: string;
  message: string;
  createdAt: string;
  user: { id: string; firstname: string; lastname: string };
};

export function fetchTributes(): Promise<{ data: Tribute[] } | Tribute[]> {
  return gmbteFetch("/tributes");
}

export function postTribute(message: string) {
  return gmbteFetch("/tributes", { method: "POST", body: JSON.stringify({ message }) });
}

export function deleteOwnTribute(id: string) {
  return gmbteFetch(`/tributes/${id}`, { method: "DELETE" });
}

// ───────────────────────── Nominations ─────────────────────────

export type ApprovedNomination = {
  id: string;
  nomineeName: string;
  category: string | null;
  story: string;
  createdAt: string;
};

export function fetchApprovedNominations(): Promise<{ data: ApprovedNomination[] } | ApprovedNomination[]> {
  return gmbteFetch("/nominations");
}

export function submitNomination(input: { nomineeName: string; category?: string; story: string }) {
  return gmbteFetch("/nominations", { method: "POST", body: JSON.stringify(input) });
}

// ───────────────────────── Events ─────────────────────────
// GET /events and GET /events/past are public on gmbtebac (no JWT
// required), unlike tributes/nominations — so these work even when hof is
// opened standalone, not just embedded via gmbtefro with a gmbte_token.

export type GmbteEvent = {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  imageUrl: string | null;
  mode: string | null;
  link: string | null;
  startsAt: string;
  endsAt: string | null;
  isFeatured: boolean;
  tags: string[];
};

export function fetchUpcomingEvents(): Promise<{ data: GmbteEvent[] } | GmbteEvent[]> {
  return gmbteFetch("/events?audience=HALL_OF_FAME");
}

export function fetchPastEvents(): Promise<{ data: GmbteEvent[] } | GmbteEvent[]> {
  return gmbteFetch("/events/past?audience=HALL_OF_FAME");
}
