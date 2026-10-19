import type { Project } from "@/types";

export const alertz: Project = {
  id: "alertz",
  title: "Alertz",
  description:
    "Private stock watchlist with automated price alerts, social picks, and Supabase Realtime updates — built for a small group of friends tracking entries together.",
  descriptionSv:
    "Privat aktielista med automatiska prisaviseringar, sociala picks och Realtime-uppdateringar via Supabase — byggd för en liten grupp vänner som bevakar ingångar tillsammans.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Supabase",
    "PostgreSQL",
    "Twelve Data API",
    "Yahoo Finance",
    "Resend",
    "Recharts",
    "Tailwind CSS",
    "shadcn/ui",
    "Deno (Edge Functions)",
    "pg_cron",
  ],
  link: "https://alertz.vercel.app",
  image: "/images/projects/alertz/picks-dashboard.png",
  imageAlt: "Alertz stock watchlist dashboard",
  imageAltSv: "Alertz-dashboarden med aktielistan",
  detailedDescription:
    "A group stock watchlist where friends post picks with up to three support-level entry prices and position sizes. A Supabase Edge Function runs hourly via pg_cron (Monday to Saturday, within each exchange's trading hours), fetches quotes from Twelve Data, stores a price snapshot per pick, and fires styled HTML email alerts through Resend when a stock drops to a support level. The trigger logic uses an atomic claim pattern in PostgreSQL — one transaction marks the level as triggered and inserts a pending alert log, so duplicate alerts can't happen even if the function runs twice. Historical OHLCV data gets backfilled from Yahoo Finance with a resumable bootstrap job system. The dashboard never calls the price API directly: it reads the stored snapshots and subscribes to Supabase Realtime changes on picks, support levels, and snapshots.",
  detailedDescriptionSv:
    "En gruppaktielista där vänner postar picks med upp till tre stödnivåer med ingångspris och positionsstorlek. En Supabase Edge Function körs varje timme via pg_cron (måndag till lördag, inom respektive börs öppettider), hämtar kurser från Twelve Data, sparar en kursögonblicksbild per pick och skickar stilade HTML-epostmeddelanden via Resend när en aktie sjunker till en stödnivå. Triggerlogiken använder ett atomärt claim-mönster i PostgreSQL — en transaktion markerar nivån som utlöst och infogar en väntande aviseringslogg, så dubbletter inte kan uppstå även om funktionen körs två gånger. Historisk OHLCV-data backfylls från Yahoo Finance med ett återupptagbart bootstrap-jobbsystem. Dashboarden anropar aldrig prisleverantören direkt: den läser de sparade ögonblicksbilderna och prenumererar på Supabase Realtime-ändringar för picks, stödnivåer och ögonblicksbilder.",
  features: [
    "Automated price alerts: hourly Edge Function checks quotes against support levels and sends email notifications via Resend, with atomic claim/reopen logic to prevent duplicates",
    "Real-time dashboard: one Supabase Realtime channel watches picks, support levels, and price snapshots; snapshot and support-level updates are merged into the UI in place without polling, and new or changed picks reload the list",
    "Dual price providers: Twelve Data for hourly quotes, Yahoo Finance for historical OHLCV backfill — both normalized through exchange-aware symbol mapping (NASDAQ, Stockholm, Frankfurt)",
    "Social layer: emoji reactions with optimistic UI via React 19 useOptimistic, threaded comments, and per-user interest tracking (watching, planning, positioned, passed)",
    "Price proximity bar: a compact visualization plotting support-level dots and current price on a normalized range, so you can see at a glance how close a stock is to an entry",
    "Interactive charts: Recharts area charts with support-level reference lines, selectable time ranges, and per-pick or portfolio-wide analytics views",
  ],
  featuresSv: [
    "Automatiska prisaviseringar: Edge Function kollar kurser mot stödnivåer varje timme och skickar e-post via Resend, med atomär claim/reopen-logik för att undvika dubbletter",
    "Realtids-dashboard: en Supabase Realtime-kanal bevakar picks, stödnivåer och kursögonblicksbilder; nya kurser och ändrade stödnivåer uppdateras direkt i gränssnittet utan polling, och nya eller ändrade picks laddar om listan",
    "Dubbla prisleverantörer: Twelve Data för timkurser, Yahoo Finance för historisk OHLCV-backfill — båda normaliserade genom börsmedveten symbolmappning (NASDAQ, Stockholm, Frankfurt)",
    "Socialt lager: emoji-reaktioner med optimistisk UI via React 19 useOptimistic, trådade kommentarer och intresseindikering per användare (bevakar, planerar, positionerad, passad)",
    "Prisnärhetsbar: en kompakt visualisering som plottar stödnivåpunkter och aktuellt pris på ett normaliserat intervall, så man ser på ett ögonblick hur nära en aktie är en ingång",
    "Interaktiva diagram: Recharts ytdiagram med stödnivåreferenslinjer, valbara tidsintervall och analys per pick eller för hela portföljen",
  ],
  challenges: [
    "Preventing duplicate alerts when the price-check function runs multiple times near a threshold — needed an atomic PostgreSQL claim that both marks the level and inserts the alert in one transaction, with a reopen path if email delivery fails",
    "Merging Supabase Realtime subscriptions with server-rendered initial state without stale data or duplication, especially for comments where an INSERT event can repeat a comment the page already has",
    "Mapping the same ticker across two different financial APIs — Twelve Data uses SYMBOL:EXCHANGE format while Yahoo uses suffixes like .ST and .DE — while also respecting per-exchange market hours and pre/post-market windows",
  ],
  challengesSv: [
    "Förhindra dubbletter av aviseringar när price-check-funktionen körs flera gånger nära ett tröskelvärde — krävde ett atomärt PostgreSQL-claim som både markerar nivån och infogar aviseringen i en transaktion, med en reopen-väg om e-postleveransen misslyckas",
    "Slå ihop Supabase Realtime-prenumerationer med serverrenderat initialtillstånd utan inaktuell data eller dubbletter, särskilt för kommentarer där ett INSERT-event kan upprepa en kommentar som sidan redan har",
    "Mappa samma ticker över två olika finans-API:er — Twelve Data använder SYMBOL:EXCHANGE-format medan Yahoo använder suffix som .ST och .DE — och samtidigt respektera börsspecifika marknadstider och pre/post-market-fönster",
  ],
  solution:
    "The alert pipeline runs entirely inside Supabase: pg_cron triggers pg_net which calls the Edge Function, reading the project URL and anon key from Vault at runtime. The claim_support_level_trigger RPC atomically marks a level and inserts a pending alert log; if Resend delivery fails, mark_alert_delivery_failed_and_reopen rolls the level back so the next run retries. On the frontend, the picks list merges Realtime snapshot events into local state keyed by exchange:symbol, with ID-based deduplication for comments. A shared normalization layer handles the Twelve Data / Yahoo Finance symbol format differences and validates OHLCV bar integrity before insert.",
  solutionSv:
    "Aviseringspipelinen körs helt inom Supabase: pg_cron triggar pg_net som anropar Edge Function, med projekt-URL och anon-nyckel hämtade från Vault vid körtid. RPC:n claim_support_level_trigger markerar atomärt en nivå och infogar en väntande aviseringslogg; om Resend-leveransen misslyckas rullar mark_alert_delivery_failed_and_reopen tillbaka nivån så nästa körning försöker igen. På frontenden slår pickslistan ihop Realtime-event för ögonblicksbilder till lokalt state nyckelat på exchange:symbol, med ID-baserad deduplicering för kommentarer. Ett delat normaliseringslager hanterar symbolformatskillnaderna mellan Twelve Data och Yahoo Finance och validerar OHLCV-barers integritet innan insert.",
  outcome:
    "A working private watchlist for a group of friends to track stock entries across US, Swedish, and German exchanges. The alert system catches support-level breaches hourly and emails the group with suggested position sizes. The dashboard listens for new price snapshots over Realtime instead of polling, and the social features (reactions, comments, interest tracking) let everyone see who's watching what and discuss entries in context.",
  outcomeSv:
    "En fungerande privat aktielista för en grupp vänner att bevaka aktieingångar på amerikanska, svenska och tyska börser. Aviseringssystemet fångar stödnivågenombrott varje timme och mailar gruppen med föreslagna positionsstorlekar. Dashboarden lyssnar efter nya kursögonblicksbilder via Realtime i stället för att polla, och de sociala funktionerna (reaktioner, kommentarer, intressespårning) låter alla se vem som bevakar vad och diskutera ingångar i kontext.",
  // githubLink: "https://github.com/Berkay2002/alertz", // private repo; uncomment when public
  gallery: [
    {
      image: "/images/projects/alertz/picks-dashboard.png",
      alt: "Picks dashboard with stock cards, support levels, and price proximity bars",
      caption: "Shared desk view with all active picks, support levels, and latest prices",
      captionSv:
        "Delad desk-vy med alla aktiva picks, stödnivåer och senaste kurser",
    },
    {
      image: "/images/projects/alertz/analytics.png",
      alt: "Analytics page with portfolio-wide area charts per stock",
      caption: "Portfolio analytics with per-stock area charts and time range selectors",
      captionSv:
        "Portföljanalys med ytdiagram per aktie och tidsintervallväljare",
    },
    {
      image: "/images/projects/alertz/pick-detail.png",
      alt: "Pick detail page with price history chart, emoji reactions, and entry plan",
      caption:
        "Pick detail with price history, entry plan, reactions, and alert history",
      captionSv:
        "Pick-detalj med prishistorik, ingångsplan, reaktioner och aviseringshistorik",
    },
  ],
};
