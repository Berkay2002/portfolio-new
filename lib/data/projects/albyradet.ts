import type { Project } from "@/types";

export const albyradet: Project = {
  id: "albyradet",
  title: "Albyrådet",
  description:
    "Website for Albyrådet, a youth organization in Alby, Botkyrka. Next.js 15 frontend with an Express backend that handles membership applications and contact emails through MongoDB and Strato SMTP.",
  descriptionSv:
    "Webbplats för Albyrådet, en ungdomsorganisation i Alby, Botkyrka. Next.js 15-frontend med en Express-backend som hanterar medlemsansökningar och kontaktmejl via MongoDB och Strato SMTP.",
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
    "Swiper",
  ],
  link: "https://www.albyradet.se",
  image: "/images/projects/albyradet.png",
  imageAlt: "Albyrådet youth organization platform homepage",
  detailedDescription:
    "Full-stack site for a Swedish youth organization focused on community safety and youth engagement in Alby, Botkyrka. The frontend is a Next.js 15 App Router app with eight routes — landing page with a full-screen video hero, project pages for BotkyrkaChill and UIA, sponsor listings, contact form, membership info, a membership application form, and the usual legal/privacy stuff. On the backend there are actually two implementations living side by side: an Express server with Mongoose that persists membership data and sends emails via Nodemailer, and newer Next.js API routes that do the same thing but add rate limiting and input sanitization. The migration between them never fully finished, so both stay.",
  detailedDescriptionSv:
    "Fullstack-sajt för en svensk ungdomsorganisation med fokus på trygghet och ungdomsengagemang i Alby, Botkyrka. Frontenden är en Next.js 15 App Router-app med åtta rutter — landningssida med fullskärmsvideo, projektsidor för BotkyrkaChill och UIA, sponsorlistning, kontaktformulär, medlemsinfo, ett medlemsansökningsformulär och de vanliga juridik-/integritetssidorna. På backend-sidan finns det faktiskt två implementationer sida vid sida: en Express-server med Mongoose som sparar medlemsdata och skickar mejl via Nodemailer, och nyare Next.js API-routes som gör samma sak men med rate limiting och inputsanering. Migreringen blev aldrig helt klar, så båda lever kvar.",
  features: [
    "Hand-built project carousel with Framer Motion spring animations, swipe gestures, auto-rotation, and separate media sets for mobile vs desktop — ended up being way more involved than a typical slider",
    "Membership application that collects personal number, address, occupation, and more, then persists to MongoDB and emails the admin. Validation happens server-side",
    "Contact form piped through Nodemailer to Strato SMTP, with in-memory rate limiting and basic XSS sanitization on the API route",
    "Security headers middleware that injects CSP, HSTS with preload, X-Frame-Options DENY, and X-Content-Type-Options on every non-static request",
    "Dark and light mode throughout — logos, sponsor images, and gradient dividers all swap per theme using next-themes, with a custom Alby color palette baked into the Tailwind config",
    "A handful of Sharp-based Node scripts for image processing: WebP conversion, orientation sorting, media file verification, and a batch renamer that patches the source code automatically",
  ],
  featuresSv: [
    "Handbyggd projektkarusell med Framer Motion-fjäderanimationer, svepgester, autorotation och separata medieset för mobil vs desktop — blev betydligt mer involverat än en vanlig slider",
    "Medlemsansökan som samlar personnummer, adress, yrke med mera, sparar till MongoDB och mejlar admin. Validering sker serversidigt",
    "Kontaktformulär kopplat genom Nodemailer till Strato SMTP, med in-memory rate limiting och grundläggande XSS-sanering på API-routen",
    "Säkerhetshuvud-middleware som injicerar CSP, HSTS med preload, X-Frame-Options DENY och X-Content-Type-Options på varje icke-statisk request",
    "Mörkt och ljust läge genom hela sajten — logotyper, sponsorbilder och gradientavdelare byter alla per tema via next-themes, med en anpassad Alby-färgpalett inbakad i Tailwind-konfigurationen",
    "Ett par Sharp-baserade Node-skript för bildbearbetning: WebP-konvertering, orienteringssortering, mediafilverifiering och en batch-omnämnare som patchar källkoden automatiskt",
  ],
  challenges: [
    "Strato SMTP was a pain to get working. The code toggles between SSL on port 465 and STARTTLS on 587 with extended timeouts and debug logging everywhere — clear signs of trial and error before email delivery started behaving",
    "The backend ended up in two places: an Express server with Mongoose and Next.js API routes that overlap in functionality. This happened during a partial migration, and since both are in use, both need to keep working without stepping on each other",
    "The project carousel looks simple from the outside but handles video autoplay management (pausing off-screen, catching browser rejections), directional spring animations, and completely different media sets depending on screen size",
  ],
  challengesSv: [
    "Strato SMTP var jobbigt att få igång. Koden växlar mellan SSL på port 465 och STARTTLS på 587 med utökade timeouts och debug-loggning överallt — tydliga tecken på trial and error innan e-postleveransen började bete sig",
    "Backenden hamnade på två ställen: en Express-server med Mongoose och Next.js API-routes som överlappar i funktionalitet. Det hände under en delvis migration, och eftersom båda används måste båda fortsätta fungera utan att krocka",
    "Projektkarusellen ser enkel ut utifrån men hanterar videoautoplay (pausar utanför skärmen, fångar webbläsaravslag), riktade fjäderanimationer och helt olika medieset beroende på skärmstorlek",
  ],
  solution:
    "The frontend runs on Next.js App Router with client components throughout, using shadcn/ui as the component library and a Tailwind config extended with Alby's brand colors. The project showcase page has a from-scratch carousel built on Framer Motion's AnimatePresence with spring physics and Swiper for touch input. Backend-wise, the Express server handles MongoDB writes through Mongoose and email via Nodemailer, while the newer Next.js API routes layer on rate limiting and sanitization. A middleware file sets security headers — full CSP, HSTS, the works — on all non-static responses. There's also a small toolkit of Sharp scripts for converting images to WebP, sorting by orientation, and verifying that every carousel asset actually exists on disk.",
  solutionSv:
    "Frontenden körs på Next.js App Router med klientkomponenter genomgående, med shadcn/ui som komponentbibliotek och en Tailwind-config utökad med Albys profilfärger. Projektvisningssidan har en karusell byggd från grunden på Framer Motions AnimatePresence med fjäderfysik och Swiper för touch-input. På backend-sidan hanterar Express-servern MongoDB-skrivningar via Mongoose och mejl via Nodemailer, medan de nyare Next.js API-routerna lägger till rate limiting och sanering. En middleware-fil sätter säkerhetshuvuden — full CSP, HSTS, hela paketet — på alla icke-statiska svar. Det finns också ett litet toolkit av Sharp-skript för att konvertera bilder till WebP, sortera efter orientering och verifiera att alla karusellresurser faktiskt finns på disk.",
  outcome:
    "Live at albyradet.se. The site handles membership applications end to end — form submission, MongoDB storage, email notification to the org admins — and does the same for the contact form minus the database part. Built pro bono for a local youth organization.",
  outcomeSv:
    "Live på albyradet.se. Sajten hanterar medlemsansökningar hela vägen — formulärinskickning, MongoDB-lagring, mejlnotis till organisationens admins — och gör samma sak för kontaktformuläret minus databasdelen. Byggd pro bono åt en lokal ungdomsorganisation.",
  githubLink: "https://github.com/Berkay2002/albyradet",
};
