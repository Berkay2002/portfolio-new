import type { Project } from "@/types";

export const genomlyst: Project = {
  id: "genomlyst",
  title: "Genomlyst: Reading a BRF's Annual Report",
  description:
    "Swedish web app for homebuyers that reads a housing association's annual report, recomputes and cross-checks its figures with page references, grades the association with versioned rules in code, and compares up to four associations.",
  descriptionSv:
    "Svensk webbapp för bostadsköpare som läser en bostadsrättsförenings årsredovisning, räknar om och korskontrollerar nyckeltalen med sidhänvisningar, sätter betyg med versionerade regler i kod och jämför upp till fyra föreningar.",
  technologies: [
    "React 19",
    "TypeScript",
    "Vite",
    "React Router",
    "Tailwind CSS 4",
    "shadcn/ui",
    "Hono",
    "Cloudflare Workers",
    "Cloudflare D1",
    "Cloudflare R2",
    "Zod",
    "OpenAI Responses API",
    "Sign in with ChatGPT",
    "pdf.js",
    "Vitest",
    "pnpm",
  ],
  link: "https://genomlyst.berkay.se",
  linkLabel: "View Live Demo",
  linkLabelSv: "Visa livedemo",
  // githubLink: "https://github.com/Berkay2002/genomlyst", // uncomment when public
  image: "/images/projects/genomlyst/report.webp",
  imageAlt:
    "Genomlyst report for an example housing association: grade D with a breakdown, and each figure drawn on a ruler with its page reference",
  imageAltSv: "Genomlyst-rapport för en exempelförening: betyg D med uppdelning, och varje nyckeltal på en linjal med sin sidhänvisning",
  detailedDescription:
    "Anyone bidding on a bostadsrätt has to judge the association's finances from a 20-60 page annual report, usually within days, and most buyers cannot read one well. Genomlyst reads the årsredovisning and recomputes the key figures from the report's raw numbers instead of trusting the printed ones, shows any conflict between the two, and cites the page every figure and flag came from. The grade is set by published, versioned rules in code and always shown with its breakdown. The AI only explains it and never sets it. A buyer can compare two to four associations side by side and see what the apartment would cost per month in two years from the association's loan resets and their own mortgage. The public demo runs three example reports with the names changed. The full service runs locally for now, and the AI is meant to run on the user's own ChatGPT plan through Sign in with ChatGPT.",
  detailedDescriptionSv:
    "Den som lägger bud på en bostadsrätt ska bedöma föreningens ekonomi utifrån en årsredovisning på 20-60 sidor, oftast inom några dagar, och de flesta köpare har svårt att läsa en. Genomlyst läser årsredovisningen och räknar om nyckeltalen från rapportens råa siffror istället för att lita på de tryckta, visar eventuella konflikter mellan de två och hänvisar till den sida varje siffra och varningsflagga kommer från. Betyget sätts av publicerade, versionerade regler i kod och visas alltid med sin uppdelning. AI:n förklarar bara och sätter aldrig betyget. Köparen kan jämföra två till fyra föreningar sida vid sida och se vad lägenheten skulle kosta per månad om två år, utifrån när föreningens lån får nya villkor och utifrån sitt eget bolån. Den publika demon visar tre exempelrapporter med ändrade namn. Hela tjänsten körs än så länge lokalt, och AI:n är tänkt att köras på användarens egen ChatGPT-plan via Sign in with ChatGPT.",
  features: [
    "Figures recomputed from the report's raw numbers and cross-checked against what the association printed, with conflicts shown instead of hidden",
    "Every figure and flag carries the page it came from",
    "Grade from A to E set by versioned rules in code (Regler 2026.1) with published thresholds and sources, always shown with its points per group: debt, operations, and income and cash",
    "Each figure drawn on a ruler with Svag, Okej and Bra zones, so the report reads as one picture instead of a table",
    "Compare two to four associations side by side on the same figures, with the best value in each row marked",
    "Monthly cost projection from the association's loan resets, the buyer's own loan, rate and amortisation, including the effect of a one-point rate rise and the tax deduction",
    "Swedish-language AI summary and chat about the report, grounded in the extracted figures",
    "Uploaded PDFs are never shared, and only the extracted facts are cached",
  ],
  featuresSv: [
    "Nyckeltal omräknade från rapportens råa siffror och korskontrollerade mot det föreningen har tryckt, med konflikter synliga istället för dolda",
    "Varje siffra och varningsflagga anger sidan den kommer från",
    "Betyg från A till E satt av versionerade regler i kod (Regler 2026.1) med publicerade gränsvärden och källor, alltid med poäng per grupp: skuld, drift samt intäkter och kassa",
    "Varje nyckeltal ritat på en linjal med zonerna Svag, Okej och Bra, så att rapporten läses som en bild istället för en tabell",
    "Jämför två till fyra föreningar sida vid sida på samma nyckeltal, med bästa värdet i varje rad markerat",
    "Månadskostnad utifrån när föreningens lån får nya villkor och köparens eget lån, ränta och amortering, inklusive effekten av en procentenhets ränteökning och ränteavdraget",
    "AI-sammanfattning och chatt om rapporten på svenska, förankrade i de extraherade nyckeltalen",
    "Uppladdade PDF:er delas aldrig och bara de extraherade fakta cachas",
  ],
  challenges: [
    "Buyers act on a grade, so it has to be reproducible and explainable: a language model that scores its own reading gives a different answer each run",
    "Annual reports are long PDFs with e-signature pages, attachments and layouts that vary between associations, and every figure has to point back to the right page",
    "A false conflict on a correct report costs more trust than a missed one, so the cross-check has to be careful about what it calls a mismatch",
    "The AI runs on the user's own ChatGPT plan, which limits how a model call may be made and leaves no inference cost on the project",
  ],
  challengesSv: [
    "Köpare agerar på ett betyg, så det måste vara reproducerbart och förklarbart: en språkmodell som själv poängsätter sin läsning ger olika svar varje körning",
    "Årsredovisningar är långa PDF:er med e-signeringssidor, bilagor och layouter som varierar mellan föreningar, och varje siffra måste peka tillbaka på rätt sida",
    "En falsk konflikt på en korrekt rapport kostar mer förtroende än en missad, så korskontrollen måste vara försiktig med vad den kallar en avvikelse",
    "AI:n körs på användarens egen ChatGPT-plan, vilket begränsar hur ett modellanrop får göras och ger projektet ingen inferenskostnad",
  ],
  solution:
    "The model only extracts: the PDF is prepared by dropping e-signature verification pages and embedded attachments while keeping a page map, then a streamed Responses API call returns a Zod-validated extraction. Everything after that is plain TypeScript in a core package with no I/O: metrics, cross-checks, bands, the grade, flags and the monthly cost. The grade follows published bands with sources and caps such as a loss-making streak, and the rules page renders its thresholds straight from the same code, with a test that checks the two stay in step. The extraction is cached on the file hash, schema version, prompt version and model, so the same report is never read twice. The app is a Vite and React front end served by a Hono worker on Cloudflare, with the sign-in tokens stored encrypted (AES-GCM) in D1 and never sent to the browser.",
  solutionSv:
    "Modellen extraherar bara: PDF:en förbereds genom att e-signeringens verifikationssidor och inbäddade bilagor tas bort medan en sidkarta behålls, och ett strömmat Responses API-anrop returnerar sedan en Zod-validerad extraktion. Allt därefter är vanlig TypeScript i ett core-paket utan I/O: nyckeltal, korskontroller, band, betyget, flaggor och månadskostnaden. Betyget följer publicerade band med källor och tak, till exempel en följd av förlustår, och regelsidan renderar sina gränsvärden direkt från samma kod, med ett test som kontrollerar att de stämmer överens. Extraktionen cachas på filens hash, schemaversion, promptversion och modell, så samma rapport läses aldrig två gånger. Appen är ett Vite- och React-gränssnitt som serveras av en Hono-worker på Cloudflare, där inloggningstokens lagras krypterade (AES-GCM) i D1 och aldrig skickas till webbläsaren.",
  outcome:
    "A working app with a public static demo at genomlyst.berkay.se, built around three example reports with the names changed: grade with breakdown, page-referenced figures, a three-way comparison and a monthly cost projection. The full service runs locally while it waits for Sign in with ChatGPT to be available for web services.",
  outcomeSv:
    "En fungerande app med en publik statisk demo på genomlyst.berkay.se, byggd kring tre exempelrapporter med ändrade namn: betyg med uppdelning, sidhänvisade nyckeltal, en jämförelse av tre föreningar och en månadskostnadsberäkning. Hela tjänsten körs lokalt tills inloggning med ChatGPT finns för webbtjänster.",
  gallery: [
    {
      image: "/images/projects/genomlyst/report.webp",
      alt: "Genomlyst report with grade D and a ruler for each figure",
      caption:
        "A report: the grade with its points per group, and every figure on a ruler with the page it came from",
      captionSv:
        "En rapport: betyget med poäng per grupp och varje nyckeltal på en linjal med sidan det kommer från",
    },
    {
      image: "/images/projects/genomlyst/compare.webp",
      alt: "Genomlyst comparison of three example associations",
      caption:
        "Compare: three associations on the same figures, the best value in each row marked",
      captionSv:
        "Jämför: tre föreningar på samma nyckeltal, med bästa värdet i varje rad markerat",
    },
    {
      image: "/images/projects/genomlyst/monthly-cost.webp",
      alt: "Genomlyst monthly cost projection for a 70 sqm apartment",
      caption:
        "Monthly cost: the buyer's own loan and rate, today and after a one-point rate rise",
      captionSv:
        "Månadskostnad: köparens eget lån och ränta, i dag och efter en procentenhets ränteökning",
    },
  ],
};
