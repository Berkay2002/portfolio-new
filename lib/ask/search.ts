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

// Words that say nothing about which document a question is after, in both languages.
const STOP = new Set(
  "is in on at to he it do of an my me be or as by if so up we us no am a i the and for with has have had does did his him what which who where when how any anything are was were that this from into about there their them than then can could would should built build made make work worked use used using project projects berkay orhan är på en av om de du ja vi så nu ut ha och med har hade vad vilka vilken vem var när hur som det den att för från till han hans honom ett några något projekt jobbat byggt gjort använt"
    .split(" ")
);

export function words(text: string) {
  return text.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}+#.-]*[\p{L}\p{N}+#]|[\p{L}\p{N}]/gu) ?? [];
}

export function terms(question: string) {
  return [...new Set(words(question).filter((w) => w.length > 1 && !STOP.has(w)))]; // two letters keep "AI", "UI", "Go"
}

// A term matches a word that starts with it and runs on at most three letters ("voice" finds "voices", "Java"
// not "JavaScript"); a two-letter one only itself, so "Go" doesn't find "Google".
export const matches = (word: string, term: string) => (term.length > 2 ? word.startsWith(term) && word.length - term.length <= 3 : word === term);

// A head word counts three times.
export function search(docs: AskDoc[], question: string, limit = 5): AskHit[] {
  const qs = terms(question);
  if (qs.length === 0) return [];
  const split = docs.map((d) => ({ doc: d, head: d.head.split(" "), body: d.body.split(" ") }));
  const has = (ws: string[], q: string) => ws.some((w) => matches(w, q));
  const idf = qs.map((q) => {
    const df = split.filter((d) => has(d.head, q) || has(d.body, q)).length;
    return Math.log(1 + docs.length / (df || 1)) * (df ? 1 : 0);
  });
  return split
    .map((d) => ({
      doc: d.doc,
      score: qs.reduce((sum, q, i) => sum + idf[i]! * (has(d.head, q) ? 3 : has(d.body, q) ? 1 : 0), 0),
    }))
    .filter((h) => h.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
