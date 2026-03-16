import type { Project } from "@/types";

export const kliv: Project = {
  id: "kliv",
  title: "Kliv Idrottsförening",
  description:
    "Website for a youth judo club in Norsborg that had basically no online presence. Covers everything from event listings and trainer profiles to an admin dashboard where the board manages Google Calendar-synced events and email notifications.",
  descriptionSv:
    "Webbplats för en judoklubb för unga i Norsborg som i princip saknade närvaro online. Täcker allt från eventlistningar och tränarprofiler till en adminpanel där styrelsen hanterar Google Calendar-synkade evenemang och mejlnotiser.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "shadcn/ui",
    "Framer Motion",
    "Google Calendar API",
    "Google Maps API",
    "Nodemailer",
    "Redis",
    "Clerk Auth",
    "Cloudinary",
    "React Hook Form",
    "Zod",
  ],
  link: "https://kliv.vercel.app",
  image: "/images/projects/kliv.png",
  imageAlt: "Kliv Idrottsförening website homepage with judo theme",
  detailedDescription:
    "Kliv Idrottsförening is a small youth judo club in Norsborg, Botkyrka — south of Stockholm. They run judo training for kids aged 7–12 and organize free holiday sports activities during school breaks. Their whole thing is \"run by young people, for young people\" — low-barrier, pressure-free sports as an alternative to the demanding structure of traditional Swedish clubs. Before this site, they had almost no online presence.\n\nThe website is their public face: a homepage with an animated bento grid explaining their vision, a dedicated judo page with an image slider and their instructor's profile (Raja Fernando, 6th dan), a holiday activities page pulling events from Google Calendar, a contact page with an embedded map, and a newsletter signup. Behind the scenes there's an admin dashboard where the board can approve incoming calendar events, create new ones, and trigger email notifications to subscribers — all backed by Redis and Clerk auth.",
  detailedDescriptionSv:
    "Kliv Idrottsförening är en liten judoklubb för unga i Norsborg, Botkyrka — söder om Stockholm. De kör judoträning för barn 7–12 år och anordnar gratis sportaktiviteter under skollov. Hela deras grej är \"styrs av unga, för unga\" — lågtröskel och avslappnad idrott som alternativ till den krävande strukturen i traditionella svenska föreningar. Innan den här sajten hade de i princip ingen närvaro online.\n\nWebbplatsen är deras publika ansikte: en startsida med ett animerat bento-rutnät som förklarar deras vision, en judosida med bildslider och deras instruktörs profil (Raja Fernando, 6:e dan), en lovaktivitetssida som hämtar evenemang från Google Calendar, en kontaktsida med inbäddad karta, och nyhetsbrevsprenumeration. Bakom kulisserna finns en adminpanel där styrelsen kan godkänna inkommande kalenderevenemang, skapa nya, och skicka mejlnotiser till prenumeranter — allt backat av Redis och Clerk-auth.",
  features: [
    "Animated bento grid on the homepage — six cards with micro-animations (cycling leadership icons, sport-discovery flip cards, radar pulse, particle bursts) that trigger on scroll via Framer Motion",
    "Judo page with a full-bleed image slider that swaps between landscape and portrait sources at the md breakpoint, plus a trainer profile section for their 6th dan instructor",
    "Holiday activities page fetching events from Google Calendar, displayed as expandable cards with hero images, details, and newsletter signup",
    "Google Calendar webhook sync — when something changes on the calendar, the webhook re-fetches and queues new events in Redis instead of polling. The Watch channel has a 1-hour TTL",
    "Admin dashboard behind Clerk auth where the board can approve, edit, or reject pending events, create new calendar events directly, and manage subscribers",
    "Subscriber notifications via Nodemailer — approving an event sends formatted HTML emails in Swedish to everyone in a Redis set",
    "Floating navbar that shrinks with backdrop blur after scrolling, with per-link glow effects and a layoutId-driven hover indicator",
    "Contact form with React Hook Form + Zod validation, embedded Google Maps, and a swipeable team carousel on mobile",
  ],
  featuresSv: [
    "Animerat bento-rutnät på startsidan — sex kort med mikroanimationer (cyklande ledarskapsikoner, sport-discovery-flipkort, radarpuls, partikelutbrott) som triggas vid scroll via Framer Motion",
    "Judosida med en fullbredd-bildslider som växlar mellan landskap- och porträttkällor vid md-brytpunkten, plus en tränarprofil för deras instruktör med 6:e dan",
    "Lovaktivitetssida som hämtar evenemang från Google Calendar, visade som expanderbara kort med hero-bilder, detaljer och nyhetsbrevsprenumeration",
    "Google Calendar webhook-synk — när något ändras i kalendern hämtar webhooken om och köar nya evenemang i Redis istället för att polla. Watch-kanalen har 1 timmes TTL",
    "Adminpanel bakom Clerk-auth där styrelsen kan godkänna, redigera eller avslå väntande evenemang, skapa nya kalenderevenemang direkt, och hantera prenumeranter",
    "Prenumerantnotiser via Nodemailer — att godkänna ett evenemang skickar formaterade HTML-mejl på svenska till alla i ett Redis-set",
    "Flytande navbar som krymper med backdrop-blur efter scroll, med glow-effekter per länk och en layoutId-driven hover-indikator",
    "Kontaktformulär med React Hook Form + Zod-validering, inbäddad Google Maps, och ett svepbart teamkarusell på mobil",
  ],
  challenges: [
    "Google's Watch API just pings you with 'hey, something changed' — no diff, no details. The handler has to re-fetch events and figure out what's new by comparing creation timestamps against a 10-minute window. And the channel expires after an hour, so it goes silent if nobody renews it.",
    "Event images, CTA buttons, and formatted content all had to live inside a plain-text Calendar description field. That meant building a custom key-value parser and handling both well-formatted and messy input, since the field doesn't enforce any structure.",
    "The site needed to feel polished for a club that had no visual brand to work with. The bento grid, floating nav, and image slider all had to establish a visual identity from scratch — dark zinc with red accents, Oswald headings, animated section transitions — while still being easy for the board to maintain content-wise.",
  ],
  challengesSv: [
    "Googles Watch API pingar bara med 'hej, något ändrades' — ingen diff, inga detaljer. Hanteraren måste hämta om evenemang och lista ut vad som är nytt genom att jämföra skapandetidsstämplar mot ett 10-minutersfönster. Och kanalen löper ut efter en timme, så den tystnar om ingen förnyar den.",
    "Evenemangsbilder, CTA-knappar och formaterat innehåll behövde alla rymmas i ett plaintext-beskrivningsfält i Calendar. Det innebar att bygga en egen nyckel-värdeparser och hantera både välformaterad och stökig input, eftersom fältet inte tvingar fram någon struktur.",
    "Sajten behövde kännas polerad för en förening som inte hade någon visuell profil att utgå från. Bento-rutnätet, den flytande navbaren och bildslidern behövde alla skapa en visuell identitet från grunden — mörk zink med röda accenter, Oswald-rubriker, animerade sektionstransitioner — samtidigt som det var enkelt för styrelsen att underhålla innehållet.",
  ],
  solution:
    "The public site is built with server components by default, with client components for the interactive pieces — the bento grid animations, the image slider, expandable event cards, and the floating navbar. Content lives in a centralized config file so the board doesn't need to touch code to update text.\n\nOn the backend, Google Calendar is the single source of truth for events. A Watch webhook notifies a Next.js API route when events change, the handler fetches recently-updated events and classifies anything created in the last 10 minutes as new. New events get stored in a Redis hash as pending. Admins authenticate through Clerk (one hardcoded email checked against an env var) and manage the queue from a tabbed dashboard — approve, edit, reject, or create events directly. Approving triggers Nodemailer to email every subscriber in a Redis set. The admin can also create events directly through the Google Calendar API with write scope, formatting descriptions with the same structured metadata.",
  solutionSv:
    "Den publika sajten byggs med serverkomponenter som standard, med klientkomponenter för de interaktiva delarna — bento-rutnätsanimationerna, bildslidern, expanderbara evenemangskort och den flytande navbaren. Innehåll ligger i en centraliserad config-fil så styrelsen inte behöver röra kod för att uppdatera text.\n\nPå backend-sidan är Google Calendar den enda sanningskällan för evenemang. En Watch-webhook meddelar en Next.js API-route när evenemang ändras, hanteraren hämtar nyligen uppdaterade evenemang och klassificerar allt skapat senaste 10 minuterna som nytt. Nya evenemang lagras i en Redis-hash som väntande. Admins autentiserar via Clerk (en hårdkodad e-post kollad mot en env-variabel) och hanterar kön från en flikbaserad panel — godkänn, redigera, avslå eller skapa evenemang direkt. Godkännande triggar Nodemailer att mejla varje prenumerant i ett Redis-set. Adminen kan också skapa evenemang direkt genom Google Calendar API med write scope, och formaterar beskrivningar med samma strukturerade metadata.",
  outcome:
    "The site is Kliv's entire digital presence — they had virtually nothing online before. The board can publish and manage events from the admin dashboard instead of coordinating through group chats, and subscribers get an email when something new goes up. For a small youth club with no budget for a CMS, the Google Calendar-as-database approach means they can keep using tools they already know while the website stays in sync automatically.",
  outcomeSv:
    "Sajten är Klivs hela digitala närvaro — de hade i princip ingenting online innan. Styrelsen kan publicera och hantera evenemang från adminpanelen istället för att koordinera via gruppchat, och prenumeranter får ett mejl när något nytt läggs upp. För en liten ungdomsförening utan budget för ett CMS innebär Google Calendar-som-databas att de kan fortsätta använda verktyg de redan kan, medan webbplatsen hålls synkad automatiskt.",
  githubLink: "https://github.com/Berkay2002/kliv",
};
