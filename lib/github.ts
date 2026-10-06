// Berkay's GitHub contributions per week since 2021, for the Experience wave (design/specs/experience-r1.md).
// Read from the contribution calendar at build time and refreshed hourly; private contributions count
// because the profile shows them. Without GITHUB_TOKEN (any token works) it returns null and the section
// keeps its drawn wave.

type Week = { start: string; count: number };
export type Commits = { weeks: Week[]; years: Record<number, number> };

const query = `query($from: DateTime!, $to: DateTime!) {
  user(login: "Berkay2002") { contributionsCollection(from: $from, to: $to) {
    contributionCalendar { weeks { contributionDays { date contributionCount } } }
  } }
}`;

const DAY = 86_400_000;

// A failed fetch is logged. During the build it falls back to the drawn wave; during the hourly refresh it
// throws instead, so the last good page keeps being served rather than being replaced by the fallback.
function fail(why: string, detail?: unknown): null {
  console.error(`[github] contributions: ${why}`, detail ?? "");
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== "phase-production-build") throw new Error(why);
  return null;
}

export async function weeklyCommits(): Promise<Commits | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    if (process.env.VERCEL_ENV === "production") console.warn("[github] GITHUB_TOKEN unset; drawing the fallback wave");
    return null;
  }
  const now = new Date();
  const days = new Map<string, number>();
  // The calendar answers at most a year per query.
  for (let y = 2021; y <= now.getUTCFullYear(); y++) {
    let json;
    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { from: `${y}-01-01T00:00:00Z`, to: `${y}-12-31T23:59:59Z` } }),
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) return fail(`${y}: HTTP ${res.status}`);
      json = await res.json();
    } catch (e) {
      return fail(`${y}: request failed`, e);
    }
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!weeks) return fail(`${y}: no calendar in the response`, json.errors);
    for (const w of weeks) for (const d of w.contributionDays) days.set(d.date, d.contributionCount);
  }
  // Weeks start on Sunday, as on GitHub, from the one holding 1 January 2021 up to this week.
  const out: Week[] = [];
  for (let t = Date.UTC(2020, 11, 27); t <= now.getTime(); t += 7 * DAY) {
    let count = 0;
    for (let d = 0; d < 7; d++) count += days.get(new Date(t + d * DAY).toISOString().slice(0, 10)) ?? 0;
    out.push({ start: new Date(t).toISOString().slice(0, 10), count });
  }
  const years: Record<number, number> = {};
  for (const [date, n] of days) years[+date.slice(0, 4)] = (years[+date.slice(0, 4)] ?? 0) + n;
  return { weeks: out, years };
}
