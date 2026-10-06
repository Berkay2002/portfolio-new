// "Ask the site" search: the index the server builds from the site's own data (lib/ask/docs.ts) and the
// scorer that runs over it, in the browser and again in the answer route. It never needs a model.

export type AskDoc = {
  id: string;
  href: string;
  kind: "project" | "paper" | "page";
  title: { en: string; sv: string };
  summary: { en: string; sv: string };
  head: string; // title and stack words, space separated, unique
  body: string; // every other word, unique
};

export type AskHit = { doc: AskDoc; score: number };

// Words that say nothing about which document a question is after, in both languages. "work" and "jobbat" stay:
// they point at Experience.
const STOP = new Set(
  "is in on at to he it do of an my me be or as by if so up we us no am a i the and for with has have had does did his him what which who where when how any anything are was were that this from into about there their them than then can could would should built build made make use uses used using project projects berkay orhan är på en av om de du ja vi så nu ut ha och med har hade vad vilka vilken vem var när hur som det den att för från till han hans honom ett några något projekt byggt gjort använt använder använda används använde användes"
    .split(" ")
);

export function words(text: string) {
  return text.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}+#.-]*[\p{L}\p{N}+#]|[\p{L}\p{N}]/gu) ?? [];
}

export function terms(question: string) {
  return [...new Set(words(question).filter((w) => w.length > 1 && !STOP.has(w)))]; // two letters keep "AI", "UI", "Go"
}

// Two words match when one is the other plus an English or Swedish ending, either way round ("voice" finds
// "voices", "working" finds "work", "modell" finds "modeller", "study" finds "studied"), never a longer word:
// "Java" not "JavaScript", "Bun" not "bundle". A two-letter word matches only itself, so "Go" doesn't find "Google".
const ENDINGS = new Set("s es ed d er ers ing ings ar arna en ens et na or n r e".split(" "));
const y = (w: string) => w.replace(/i(es|ed|er|ers)$/, "y$1"); // "studied" is "study" plus "ed"
const grows = (long: string, short: string) => short.length > 2 && long.startsWith(short) && ENDINGS.has(long.slice(short.length));
export const matches = (word: string, term: string) => {
  if (word === term) return true;
  const [w, t] = [y(word), y(term)];
  return grows(w, t) || grows(t, w);
};

// A head word counts three times. A word on more than half the pages ("API", "challenges") ranks but doesn't let a
// page in on its own when the question has a rarer word too: "AudioWorklet API" finds FastTalk, not every API. The
// pages with every rarer word come first and alone ("Web Audio API" is the page with both "web" and "audio"); only
// when no page has them all does any one of them let a page in.
export function search(docs: AskDoc[], question: string, limit = 5): AskHit[] {
  const qs = terms(question);
  if (qs.length === 0) return [];
  const split = docs.map((d) => ({ doc: d, head: d.head.split(" "), body: d.body.split(" ") }));
  const has = (ws: string[], q: string) => ws.some((w) => matches(w, q));
  const df = qs.map((q) => split.filter((d) => has(d.head, q) || has(d.body, q)).length);
  const idf = df.map((n) => (n ? Math.log(1 + docs.length / n) : 0));
  const rare = df.map((n) => n > 0 && n <= docs.length / 2);
  const found = (d: (typeof split)[number], q: string) => has(d.head, q) || has(d.body, q);
  const rq = qs.filter((_, i) => rare[i]);
  const every = split.filter((d) => rq.every((q) => found(d, q)));
  return (rq.length === 0 ? split : every.length ? every : split.filter((d) => rq.some((q) => found(d, q))))
    .map((d) => ({
      doc: d.doc,
      score: qs.reduce((sum, q, i) => sum + idf[i]! * (has(d.head, q) ? 3 : has(d.body, q) ? 1 : 0), 0),
    }))
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
