import type { Project } from "@/types";

export const kliv: Project = {
  id: "kliv",
  title: "Kliv Idrottsförening",
  description:
    "Website for Kliv, a youth sports club in Norsborg that runs judo for kids and free holiday activities. Covers everything from event listings and trainer profiles to an admin dashboard where the board manages Google Calendar-synced events and email notifications.",
  descriptionSv:
    "Webbplats för Kliv, en idrottsförening för unga i Norsborg med judo för barn och gratis lovaktiviteter. Täcker allt från evenemangslistor och tränarprofiler till en adminpanel där styrelsen hanterar evenemang synkade med Google Kalender och skickar mejlutskick.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "shadcn/ui",
    "Framer Motion",
    "Google Calendar API",
    "Google Maps",
    "Nodemailer",
    "Redis",
    "Clerk Auth",
    "Cloudinary",
  ],
  link: "https://kliv.vercel.app",
  image: "/images/projects/kliv.png",
  imageAlt: "Kliv Idrottsförening website homepage with judo theme",
  imageAltSv: "Startsidan på Kliv Idrottsförenings webbplats med judotema",
  detailedDescription:
    "Kliv Idrottsförening is a youth sports club in Norsborg, Botkyrka — south of Stockholm. They run judo training for kids aged 7–12 and organize free holiday sports activities during school breaks. Their whole idea is \"run by young people, for young people\" — low-barrier, pressure-free sports as an alternative to the demanding structure of traditional Swedish clubs.\n\nThe website is their public face: a homepage with an animated bento grid explaining their vision, a dedicated judo page with an image slider and their instructor's profile (Raja Fernando, 6th dan), a holiday activities page pulling events from Google Calendar, a contact page with an embedded map, and a newsletter signup. Behind the scenes there's an admin dashboard where the board can approve incoming calendar events, create new ones, and trigger email notifications to subscribers — all backed by Redis and Clerk auth.",
  detailedDescriptionSv:
    "Kliv Idrottsförening är en idrottsförening för unga i Norsborg, Botkyrka, söder om Stockholm. De har judoträning för barn 7–12 år och ordnar gratis idrottsaktiviteter på skolloven. Hela idén är \"styrs av unga, för unga\": idrott utan krav och med låg tröskel, som ett alternativ till den krävande strukturen i traditionella svenska föreningar.\n\nWebbplatsen är deras publika ansikte: en startsida med ett animerat bento-rutnät som förklarar deras vision, en judosida med bildslider och deras instruktörs profil (Raja Fernando, 6:e dan), en lovaktivitetssida som hämtar evenemang från Google Calendar, en kontaktsida med inbäddad karta, och nyhetsbrevsprenumeration. Bakom kulisserna finns en adminpanel där styrelsen kan godkänna inkommande kalenderevenemang, skapa nya, och skicka mejlnotiser till prenumeranter — allt backat av Redis och Clerk-auth.",
  features: [
    "Animated bento grid on the homepage — five cards with micro-animations (cycling leadership icons, sport-discovery flip cards, radar pulse, particle bursts) built with Framer Motion; the cards fade in as they scroll into view",
    "Judo page with a full-bleed image slider that swaps between landscape and portrait sources at the md breakpoint, plus a trainer profile section for their 6th dan instructor",
    "Holiday activities page fetching events from Google Calendar, displayed as expandable cards with hero images, details, and newsletter signup",
    "Google Calendar webhook sync — when something changes on the calendar, the webhook re-fetches and queues new events in Redis instead of polling. The Watch channel has a 1-hour TTL",
    "Admin dashboard behind Clerk auth where the board can approve, edit, or reject pending events, create new calendar events directly, edit or delete existing ones, and see the subscriber count",
    "Subscriber notifications via Nodemailer — approving an event sends formatted HTML emails in Swedish to everyone in a Redis set",
    "Floating navbar that shrinks with backdrop blur after scrolling, with per-link glow effects and a layoutId-driven hover indicator",
    "Contact page with a validated form, an embedded Google Map, and a swipeable team carousel on mobile",
  ],
  featuresSv: [
    "Animerat bento-rutnät på startsidan — fem kort med mikroanimationer (cyklande ledarskapsikoner, sport-discovery-flipkort, radarpuls, partikelutbrott) byggda med Framer Motion; korten tonas in när de scrollas fram",
    "Judosida med en fullbredd-bildslider som växlar mellan landskap- och porträttkällor vid md-brytpunkten, plus en tränarprofil för deras instruktör med 6:e dan",
    "Lovaktivitetssida som hämtar evenemang från Google Calendar, visade som expanderbara kort med hero-bilder, detaljer och nyhetsbrevsprenumeration",
    "Google Calendar webhook-synk — när något ändras i kalendern hämtar webhooken om och köar nya evenemang i Redis istället för att polla. Watch-kanalen har 1 timmes TTL",
    "Adminpanel bakom Clerk-auth där styrelsen kan godkänna, redigera eller avslå väntande evenemang, skapa nya kalenderevenemang direkt, redigera eller ta bort befintliga och se antalet prenumeranter",
    "Prenumerantnotiser via Nodemailer — att godkänna ett evenemang skickar formaterade HTML-mejl på svenska till alla i ett Redis-set",
    "Flytande navbar som krymper med backdrop-blur efter scroll, med glow-effekter per länk och en layoutId-driven hover-indikator",
    "Kontaktsida med ett validerat formulär, en inbäddad Google-karta och en svepbar teamkarusell på mobil",
  ],
  challenges: [
    "Google's Watch API just pings you with 'hey, something changed' — no diff, no details. The handler has to re-fetch events and figure out what's new by comparing creation timestamps against a 10-minute window. And the channel expires after an hour, so it goes silent if nobody renews it.",
    "Event images, CTA buttons, and formatted content all had to live inside a plain-text Calendar description field. That meant building a custom key-value parser and handling both well-formatted and messy input, since the field doesn't enforce any structure.",
    "The site needed a clear visual identity for the club. The bento grid, floating nav, and image slider carry it — a monochrome palette with Kliv red accents, Oswald headings, animated section transitions — dark by default.",
  ],
  challengesSv: [
    "Googles Watch API pingar bara med 'hej, något ändrades' — ingen diff, inga detaljer. Hanteraren måste hämta om evenemang och lista ut vad som är nytt genom att jämföra skapandetidsstämplar mot ett 10-minutersfönster. Och kanalen löper ut efter en timme, så den tystnar om ingen förnyar den.",
    "Evenemangsbilder, CTA-knappar och formaterat innehåll behövde alla rymmas i beskrivningsfältet i Google Kalender, som bara är ren text. Det innebar att bygga en egen nyckel-värdeparser och hantera både välformaterad och stökig input, eftersom fältet inte tvingar fram någon struktur.",
    "Sajten behövde en tydlig visuell identitet för föreningen. Bento-rutnätet, den flytande navbaren och bildslidern bär den: en monokrom palett med Klivs röda accentfärg, rubriker i Oswald och animerade övergångar mellan sektionerna, med mörkt tema som standard.",
  ],
  solution:
    "Most public pages are client components because they are animated throughout — the bento grid, the image slider, the floating navbar and the team carousel. The holiday activities page renders on the server, fetches events from the site's own API route and hands them to the expandable event cards. Shared copy such as the club's details, team members and navigation lives in one content config file.\n\nOn the backend, Google Calendar is the single source of truth for events. A Watch webhook notifies a Next.js API route when events change, the handler fetches recently-updated events and classifies anything created in the last 10 minutes as new. New events get stored in a Redis hash as pending, and the admin gets an email with a link to the dashboard. Admins authenticate through Clerk (one hardcoded email checked against an env var) and manage the queue from a tabbed dashboard — approve, edit, reject, or create events directly. Approving triggers Nodemailer to email every subscriber in a Redis set. The admin can also create events directly through the Google Calendar API with write scope, formatting descriptions with the same structured metadata.",
  solutionSv:
    "De flesta publika sidorna är klientkomponenter eftersom de är animerade rakt igenom: bento-rutnätet, bildslidern, den flytande navbaren och teamkarusellen. Lovaktivitetssidan renderas på servern, hämtar evenemang från sajtens egen API-route och skickar dem vidare till de expanderbara evenemangskorten. Gemensam text som föreningens uppgifter, styrelsen och navigeringen ligger i en enda innehållsfil.\n\nPå backend-sidan är Google Calendar den enda sanningskällan för evenemang. En Watch-webhook meddelar en Next.js API-route när evenemang ändras, hanteraren hämtar nyligen uppdaterade evenemang och klassificerar allt skapat senaste 10 minuterna som nytt. Nya evenemang lagras i en Redis-hash som väntande, och adminen får ett mejl med en länk till panelen. Admins autentiserar via Clerk (en hårdkodad e-post kollad mot en env-variabel) och hanterar kön från en flikbaserad panel — godkänn, redigera, avslå eller skapa evenemang direkt. Godkännande triggar Nodemailer att mejla varje prenumerant i ett Redis-set. Adminen kan också skapa evenemang direkt genom Google Calendar API med write scope, och formaterar beskrivningar med samma strukturerade metadata.",
  outcome:
    "The board adds events in Google Calendar and approves them from the admin dashboard; subscribers get an email when something new goes up. Using Google Calendar as the database means there is no separate CMS to run, and the website stays in sync with the calendar.",
  outcomeSv:
    "Styrelsen lägger in evenemang i Google Kalender och godkänner dem i adminpanelen; prenumeranterna får ett mejl när något nytt läggs upp. Med Google Kalender som databas behövs inget separat CMS, och webbplatsen hålls i synk med kalendern.",
  githubLink: "https://github.com/Berkay2002/kliv",
};
