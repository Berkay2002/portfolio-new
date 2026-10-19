import type { Project } from "@/types";

export const albyradet: Project = {
  id: "albyradet",
  title: "Albyrådet",
  description:
    "Website for Albyrådet, a youth organization in Alby, Botkyrka. Next.js 15 frontend whose API routes send membership applications and contact messages by email through Strato SMTP, with an older Express and MongoDB backend kept in the repo.",
  descriptionSv:
    "Webbplats för Albyrådet, en ungdomsorganisation i Alby, Botkyrka. Next.js 15-frontend vars API-routes skickar medlemsansökningar och kontaktmeddelanden som mejl via Strato SMTP, med en äldre Express- och MongoDB-backend kvar i repot.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "React 18",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Nodemailer",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
  ],
  link: "https://www.albyradet.se",
  image: "/images/projects/albyradet.png",
  imageAlt: "Albyrådet youth organization platform homepage",
  imageAltSv: "Startsidan på ungdomsorganisationen Albyrådets webbplats",
  detailedDescription:
    "Full-stack site for a Swedish youth organization focused on community safety and youth engagement in Alby, Botkyrka. The frontend is a Next.js 15 App Router app with ten routes — landing page with a full-screen video hero, a projects page covering BotkyrkaChill and UIA, sponsor listings, contact form, membership info, a membership application form, and the usual legal/privacy stuff. The live forms post to Next.js API routes that validate and sanitize input, apply rate limiting and send the email through Nodemailer. An older Express server with Mongoose, which stores membership applications in MongoDB before mailing them, is still in the repo, but the site does not call it.",
  detailedDescriptionSv:
    "Fullstack-sajt för en svensk ungdomsorganisation med fokus på trygghet och ungdomsengagemang i Alby, Botkyrka. Frontenden är en Next.js 15 App Router-app med tio rutter — landningssida med fullskärmsvideo, en projektsida om BotkyrkaChill och UIA, sponsorlistning, kontaktformulär, medlemsinfo, ett medlemsansökningsformulär och de vanliga juridik-/integritetssidorna. De skarpa formulären postar till Next.js API-routes som validerar och sanerar indata, har rate limiting och skickar mejlet via Nodemailer. En äldre Express-server med Mongoose, som sparar medlemsansökningar i MongoDB innan den mejlar dem, finns kvar i repot men sajten anropar den inte.",
  features: [
    "Hand-built project carousel with Framer Motion spring animations, swipe gestures, auto-rotation, and separate media sets for mobile vs desktop — ended up being way more involved than a typical slider",
    "Membership application that collects personal number, address, occupation, and more, then emails the organization. Name, email and personal number format are validated server-side; the old Express route also stores applications in MongoDB",
    "Contact form piped through Nodemailer to Strato SMTP, with in-memory rate limiting, validation and basic script-tag stripping on the API route",
    "Security headers middleware that injects CSP, HSTS with preload on HTTPS, X-Frame-Options DENY, and X-Content-Type-Options on every non-API, non-static request",
    "Dark and light mode throughout — logos, sponsor images, and gradient dividers all swap per theme using next-themes, with a custom Alby color palette baked into the Tailwind config",
    "A handful of Node scripts for media housekeeping: Sharp-based WebP conversion and orientation sorting, a media file check, and a batch renamer that patches the media list in the source automatically",
  ],
  featuresSv: [
    "Handbyggd projektkarusell med Framer Motion-fjäderanimationer, svepgester, autorotation och separata medieset för mobil vs desktop — blev betydligt mer involverat än en vanlig slider",
    "Medlemsansökan som samlar personnummer, adress, yrke med mera och mejlar organisationen. Namn, e-post och personnummerformat valideras serversidigt; den gamla Express-routen sparar dessutom ansökningarna i MongoDB",
    "Kontaktformulär kopplat genom Nodemailer till Strato SMTP, med in-memory rate limiting, validering och grundläggande borttagning av script-taggar på API-routen",
    "Säkerhetshuvud-middleware som injicerar CSP, HSTS med preload över HTTPS, X-Frame-Options DENY och X-Content-Type-Options på varje request som varken är API eller statisk",
    "Mörkt och ljust läge genom hela sajten — logotyper, sponsorbilder och gradientavdelare byter alla per tema via next-themes, med en anpassad Alby-färgpalett inbakad i Tailwind-konfigurationen",
    "Ett par Node-skript för mediehantering: WebP-konvertering och sortering efter orientering med Sharp, en kontroll av mediefilerna och ett skript som döper om filer i klump och uppdaterar medielistan i källkoden automatiskt",
  ],
  challenges: [
    "Strato SMTP was a pain to get working. The code toggles between SSL on port 465 and STARTTLS on 587 with extended timeouts and debug logging everywhere — clear signs of trial and error before email delivery started behaving",
    "The backend ended up in two places: an Express server with Mongoose and Next.js API routes that overlap in functionality. The migration to API routes was never finished, so the old server still sits in the repo with a different SMTP setup and database storage the live forms no longer use",
    "The project carousel looks simple from the outside but handles video autoplay management (pausing slides that leave view, catching browser rejections), directional spring animations, and completely different media sets depending on screen size",
  ],
  challengesSv: [
    "Strato SMTP var jobbigt att få igång. Koden växlar mellan SSL på port 465 och STARTTLS på 587 med utökade timeouts och debug-loggning överallt — tydliga tecken på trial and error innan e-postleveransen började bete sig",
    "Backenden hamnade på två ställen: en Express-server med Mongoose och Next.js API-routes som överlappar i funktionalitet. Migreringen till API-routes blev aldrig klar, så den gamla servern ligger kvar i repot med en annan SMTP-konfiguration och databaslagring som de skarpa formulären inte längre använder",
    "Projektkarusellen ser enkel ut utifrån men hanterar videoautoplay (pausar videor när sliden byts, fångar webbläsaravslag), riktade fjäderanimationer och helt olika medieset beroende på skärmstorlek",
  ],
  solution:
    "The frontend runs on Next.js App Router with mostly client components, using shadcn/ui as the component library and a Tailwind config extended with Alby's brand colors. The project showcase page has a from-scratch carousel built on Framer Motion's AnimatePresence with spring physics and drag gestures on mobile. Backend-wise, the Next.js API routes handle validation, rate limiting, sanitization and email via Nodemailer, while the older Express server handles MongoDB writes through Mongoose. A middleware file sets security headers — full CSP, HSTS, the works — on all page responses (API routes and static files are excluded). There's also a small toolkit of Node scripts (Sharp for the image work) for converting images to WebP, sorting by orientation, and verifying that every carousel asset actually exists on disk.",
  solutionSv:
    "Frontenden körs på Next.js App Router med mest klientkomponenter, med shadcn/ui som komponentbibliotek och en Tailwind-config utökad med Albys profilfärger. Projektvisningssidan har en karusell byggd från grunden på Framer Motions AnimatePresence med fjäderfysik och dragegester på mobil. På backend-sidan hanterar Next.js API-routerna validering, rate limiting, sanering och mejl via Nodemailer, medan den äldre Express-servern sköter MongoDB-skrivningar via Mongoose. En middleware-fil sätter säkerhetshuvuden — full CSP, HSTS, hela paketet — på alla sidsvar (API-routes och statiska filer undantas). Det finns också en liten uppsättning Node-skript (Sharp för bildjobben) för att konvertera bilder till WebP, sortera efter orientering och verifiera att alla karusellresurser faktiskt finns på disk.",
  outcome:
    "Live at albyradet.se. The site handles membership applications and contact messages end to end — form submission, validation and an email to the organization. Built pro bono for a local youth organization.",
  outcomeSv:
    "Live på albyradet.se. Sajten hanterar medlemsansökningar och kontaktmeddelanden hela vägen — formulärinskickning, validering och ett mejl till organisationen. Byggd pro bono åt en lokal ungdomsorganisation.",
  githubLink: "https://github.com/Berkay2002/albyradet",
};
