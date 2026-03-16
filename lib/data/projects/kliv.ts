import type { Project } from "@/types";

export const kliv: Project = {
  id: "kliv",
  title: "Kliv Idrottsförening",
  description:
    "Website for a judo and martial arts club in Botkyrka. Events come straight from Google Calendar, go through an admin approval queue, and subscribers get notified by email.",
  descriptionSv:
    "Webbplats för en judo- och kampsportsklubb i Botkyrka. Evenemang hämtas direkt från Google Calendar, passerar en admin-godkännandekö, och prenumeranter meddelas via e-post.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Tailwind CSS",
    "shadcn/ui",
    "Google Calendar API",
    "Google Maps API",
    "Nodemailer",
    "Redis",
    "Framer Motion",
    "Clerk Auth",
    "Cloudinary",
  ],
  link: "https://kliv.vercel.app",
  image: "/images/projects/kliv.png",
  imageAlt: "Kliv Idrottsförening website homepage with judo theme",
  detailedDescription:
    "Built for Kliv Idrottsförening Botkyrka, a judo and martial arts club south of Stockholm. The core idea is that Google Calendar is the database — the board creates events there, a webhook picks them up, and they land in a Redis-backed approval queue. Once an admin approves an event from the dashboard, Nodemailer blasts out an HTML email to all subscribers. The frontend has a warm beige palette with one red accent color, animated bento grid cards on the homepage, and event cards that expand into full-screen modals with Google Maps and a signup form.",
  detailedDescriptionSv:
    "Byggd för Kliv Idrottsförening Botkyrka, en judo- och kampsportsklubb söder om Stockholm. Grundidén är att Google Calendar är databasen — styrelsen skapar evenemang där, en webhook fångar upp dem, och de hamnar i en Redis-baserad godkännandekö. När en admin godkänner ett evenemang från panelen skickar Nodemailer ut ett HTML-mejl till alla prenumeranter. Frontenden har en varm beige palett med en röd accentfärg, animerade bento-rutnätskort på startsidan, och evenemangskort som expanderar till fullskärmsmodaler med Google Maps och ett anmälningsformulär.",
  features: [
    "Google Calendar webhook sync — when something changes on the calendar, the webhook re-fetches and queues new events in Redis instead of polling",
    "Admin approval flow: pending events show up in a tabbed dashboard where they can be approved, tweaked, or tossed before anyone gets emailed",
    "Subscriber notifications via Nodemailer — approving an event sends formatted HTML emails to everyone in a Redis set",
    "Event metadata encoded in Calendar description fields as key-value pairs (image URLs, CTAs, content). Hacky, but it means no separate database",
    "Animated bento grid on the homepage where each card has its own looping animation — particle bursts, pulsing rings, rotating cards — instead of static icons",
    "Expandable event cards that open as full-screen portal modals with hero images, embedded Google Maps, and a subscription form",
    "Cloudinary upload widget baked into the admin event form with a live side-by-side preview",
  ],
  featuresSv: [
    "Google Calendar webhook-synk — när något ändras i kalendern hämtar webhooken om och köar nya evenemang i Redis istället för att polla",
    "Admin-godkännandeflöde: väntande evenemang dyker upp i en flikbaserad panel där de kan godkännas, justeras eller kastas innan någon får mejl",
    "Prenumerantnotiser via Nodemailer — att godkänna ett evenemang skickar formaterade HTML-mejl till alla i ett Redis-set",
    "Evenemangsmetadata kodad i Calendars beskrivningsfält som nyckel-värdepar (bild-URL:er, CTA:er, innehåll). Hackigt, men det innebär ingen separat databas",
    "Animerat bento-rutnät på startsidan där varje kort har sin egen loopande animation — partikelutbrott, pulserande ringar, roterande kort — istället för statiska ikoner",
    "Expanderbara evenemangskort som öppnas som fullskärms portalmodaler med hero-bilder, inbäddad Google Maps och ett prenumerationsformulär",
    "Cloudinary-uppladdningswidget inbyggd i admin-evenemangsformuläret med en live sida-vid-sida-förhandsvisning",
  ],
  challenges: [
    "Google's Watch API just pings you with 'hey, something changed' — no diff, no details. The handler has to re-fetch events and guess what's new by comparing creation timestamps against a 10-minute window. And the channel expires after an hour, so it goes silent if nobody renews it.",
    "Event images, CTA buttons, and formatted content all had to live inside a plain-text Calendar description field. That meant building a custom key-value parser and handling both well-formatted and messy input, since the field doesn't enforce any structure.",
    "Every API route runs as a serverless function, so Redis reconnects on cold starts. The connection logic needed guards to avoid leaking connections when multiple requests hit at once.",
  ],
  challengesSv: [
    "Googles Watch API pingar bara med 'hej, något ändrades' — ingen diff, inga detaljer. Hanteraren måste hämta om evenemang och gissa vad som är nytt genom att jämföra skapandetidsstämplar mot ett 10-minutersfönster. Och kanalen löper ut efter en timme, så den tystnar om ingen förnyar den.",
    "Evenemangsbilder, CTA-knappar och formaterat innehåll behövde alla rymmas i ett plaintext-beskrivningsfält i Calendar. Det innebar att bygga en egen nyckel-värdeparser och hantera både välformaterad och stökig input, eftersom fältet inte tvingar fram någon struktur.",
    "Varje API-route körs som en serverlös funktion, så Redis återansluter vid kallstarter. Anslutningslogiken behövde guarder för att undvika att läcka anslutningar när flera requests kommer samtidigt.",
  ],
  solution:
    "Google Calendar is the single source of truth. A Watch webhook notifies a Next.js API route when events change. The handler fetches recently-updated events, checks if they were created in the last 10 minutes (new) or just modified (ignored), and dumps new ones into a Redis hash as pending. Admins log in via Clerk — it checks one hardcoded email against an env var, nothing fancier — and manage the queue from a tabbed dashboard. Approving fires off Nodemailer to every subscriber in a Redis set, then clears the event from pending.\n\nOn the frontend side, server components handle the public pages. Client components kick in for the bento grid animations, the image slider (which swaps landscape/portrait sources at the md breakpoint), and the expandable event cards that portal into a full-screen overlay.",
  solutionSv:
    "Google Calendar är den enda sanningskällan. En Watch-webhook meddelar en Next.js API-route när evenemang ändras. Hanteraren hämtar nyligen uppdaterade evenemang, kollar om de skapades senaste 10 minuterna (nya) eller bara ändrades (ignoreras), och lägger nya i en Redis-hash som väntande. Admins loggar in via Clerk — den kollar en hårdkodad e-post mot en env-variabel, inget finare — och hanterar kön från en flikbaserad panel. Godkännande skickar iväg Nodemailer till varje prenumerant i ett Redis-set och rensar sedan evenemanget från kön.\n\nPå frontend-sidan hanterar serverkomponenter de publika sidorna. Klientkomponenter tar vid för bento-rutnätsanimationerna, bild-slidern (som byter landskap/porträttkällor vid md-brytpunkten) och de expanderbara evenemangskorten som portalar till en fullskärmsoverlay.",
  outcome:
    "The board can publish events from a dashboard instead of coordinating through group chats and Instagram posts. Subscribers get an email when something new goes up. The webhook sync keeps the public event list fresh without anyone having to manually update the website — though the Watch channel's 1-hour TTL is a weak spot that'd benefit from a cron-based renewal.",
  outcomeSv:
    "Styrelsen kan publicera evenemang från en panel istället för att koordinera via gruppchatt och Instagram-inlägg. Prenumeranter får ett mejl när något nytt läggs upp. Webhook-synken håller den publika eventlistan färsk utan att någon behöver uppdatera webbplatsen manuellt — även om Watch-kanalens 1-timmes TTL är en svag punkt som skulle må bra av cron-baserad förnyelse.",
  githubLink: "https://github.com/Berkay2002/kliv",
};
