import type { Project } from "@/types";

export const finly: Project = {
  id: "finly",
  title: "Finly: Safe-to-Spend Planner for Swedish Households",
  description:
    "Local-first personal finance planner for Swedish households. It turns income, bills, CSN, loans, savings and balances into one number: what you can spend this month without touching what you have set aside.",
  descriptionSv:
    "Local-first-planerare för privatekonomi i svenska hushåll. Den gör om inkomst, räkningar, CSN, lån, sparande och saldon till ett enda tal: vad du kan spendera den här månaden utan att röra det du har avsatt.",
  technologies: [
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS 4",
    "Zustand",
    "React Router",
    "Recharts",
    "Convex",
    "Web Push",
    "PWA",
    "Vitest",
    "Vercel",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "Local-first web app (PWA)",
      valueSv: "Local-first-webbapp (PWA)",
    },
    {
      label: "Languages",
      labelSv: "Språk",
      value: "English and Swedish, light and dark mode",
      valueSv: "Engelska och svenska, ljust och mörkt läge",
    },
    {
      label: "Data",
      labelSv: "Data",
      value: "Stays in the browser, optional encrypted sync",
      valueSv: "Stannar i webbläsaren, valfri krypterad synk",
    },
    {
      label: "License",
      labelSv: "Licens",
      value: "MIT",
    },
  ],
  link: "https://finly-ruddy.vercel.app",
  githubLink: "https://github.com/Berkay2002/Finly",
  image: "/images/projects/finly/dashboard.webp",
  imageAlt:
    "Finly dashboard showing safe to spend, monthly cost, planned saving, accounts and savings goals for an example plan",
  imageAltSv: "Finlys översikt med vad du kan spendera, månadskostnad, planerat sparande, konton och sparmål för en exempelplan",
  detailedDescription:
    "Finly is a personal finance planner built around one question: how much can I spend this month without touching what I have set aside? Instead of listing transactions, you describe your money once (income, bills, subscriptions, CSN and other loans, savings goals and account balances) and keep it up to date in a few minutes a month. A pure TypeScript calculation engine does the arithmetic and the dashboard shows one safe-to-spend figure together with the range it usually falls in. It is made for Swedish households: CSN, mortgages with amortisation requirements, the interest deduction, electricity per price area, grocery costs from Konsumentverket's tables and the Riksbank's rate outlook are modelled rather than approximated. There are no accounts and no server that reads your plan. Everything lives in the browser, and optional sync uses a 12-word phrase that encrypts the data on the device before it is uploaded.",
  detailedDescriptionSv:
    "Finly är en planerare för privatekonomi byggd kring en fråga: hur mycket kan jag spendera den här månaden utan att röra det jag har avsatt? I stället för att lista transaktioner beskriver du dina pengar en gång (inkomst, räkningar, prenumerationer, CSN och andra lån, sparmål och kontosaldon) och håller dem uppdaterade på några minuter i månaden. En ren TypeScript-motor står för uträkningarna och översikten visar ett enda tal för vad du kan spendera, tillsammans med spannet det brukar ligga inom. Den är gjord för svenska hushåll: CSN, bolån med amorteringskrav, ränteavdraget, el per elområde, matkostnader från Konsumentverkets tabeller och Riksbankens ränteprognos är modellerade i stället för approximerade. Det finns inga konton och ingen server som läser din plan. Allt finns i webbläsaren, och valfri synk använder en fras på 12 ord som krypterar datan på enheten innan den laddas upp.",
  features: [
    "One safe-to-spend number: bills, subscriptions, loans and savings are taken off first, and the dashboard also shows the usual range so a tight month is not a surprise",
    "Bills that vary, like electricity and groceries, are planned as a range; the real bill replaces the estimate when it arrives, and after a few bills Finly suggests a better estimate",
    "Irregular costs such as holidays, insurance, car service and Christmas are spread into a monthly amount, so the true monthly cost is visible",
    "Months ahead and saved scenarios: step forward to see how a raise, a new loan or a bigger saving goal plays out before committing",
    "A 'Can I afford this?' tool for big purchases and new monthly costs that shows which account it comes from, the lowest point that month, the earliest month it fits, and how paying in full, a down payment plus loan, or saving up first compare",
    "Savings and goals split into planned spending and long-term wealth, with each goal tracked against its target and a 12-month projection",
    "Accounts and loans with payoff order, interest versus repayment, a debt-free date and a 'what if rates change' view that includes the Riksbank outlook",
    "Insights on where the money goes, the largest costs, subscriptions, the true cost of the car, what could be cut and how resilient the plan is if income stops",
    "Each month closes automatically and is frozen with the plan as it was, so a year later you can see what things actually cost and compare month over month",
    "Optional push reminders the day before an irregular cost lands, optional read-only bank balances through Enable Banking with a key you create yourself, and JSON export and import of the whole plan",
  ],
  featuresSv: [
    "Ett tal för vad du kan spendera: räkningar, prenumerationer, lån och sparande dras först, och översikten visar också det vanliga spannet så att en tight månad inte kommer som en överraskning",
    "Rörliga räkningar som el och mat planeras som ett spann; den riktiga räkningen ersätter uppskattningen när den kommer, och efter några räkningar föreslår Finly en bättre uppskattning",
    "Oregelbundna kostnader som semester, försäkringar, bilservice och jul sprids ut till ett månadsbelopp, så att den verkliga månadskostnaden syns",
    "Månader framåt och sparade scenarier: stega framåt och se hur en löneökning, ett nytt lån eller ett större sparmål slår ut innan du bestämmer dig",
    "Ett 'Har jag råd?'-verktyg för stora köp och nya månadskostnader som visar vilket konto det kommer från, det lägsta saldot under månaden, tidigaste månaden det ryms och hur det jämförs att betala kontant, kontantinsats plus lån eller spara först",
    "Sparande och mål uppdelade i planerade utgifter och långsiktigt sparande, där varje mål följs mot sitt målbelopp med en prognos på 12 månader",
    "Konton och lån med förslag på vilket lån som ska betalas av först, ränta mot amortering, ett skuldfritt-datum och en 'tänk om räntan ändras'-vy som inkluderar Riksbankens prognos",
    "Insikter om vart pengarna går, de största kostnaderna, prenumerationer, bilens verkliga kostnad, vad som kan skäras ner och hur motståndskraftig planen är om inkomsten uteblir",
    "Varje månad stängs automatiskt och fryses med planen som den var, så att du ett år senare kan se vad saker faktiskt kostade och jämföra månad för månad",
    "Valfria pushpåminnelser dagen innan en oregelbunden kostnad dyker upp, valfria saldon från banken via Enable Banking med en nyckel du skapar själv, samt JSON-export och import av hela planen",
  ],
  challenges: [
    "Swedish household money has rules that are easy to get roughly right and hard to get exactly right: CSN, amortisation requirements, fixed-rate periods, the interest deduction (which from 2026 only covers loans with security) and electricity priced per area",
    "Keeping the data private without accounts: a plan has to live in the browser, survive across devices if the user wants, and still never be readable by the server",
    "Bills that swing from month to month make a single monthly figure dishonest, so the number has to carry its own uncertainty",
    "Safari clears browser storage and iOS push only works for installed apps, so a local-first app needs an explicit export path and a good install story",
  ],
  challengesSv: [
    "Privatekonomin i svenska hushåll har regler som är lätta att få ungefär rätt och svåra att få exakt rätt: CSN, amorteringskrav, bindningstider, ränteavdraget (som från 2026 bara gäller lån med säkerhet) och el som prissätts per område",
    "Hålla datan privat utan konton: en plan måste ligga i webbläsaren, kunna följa med mellan enheter om användaren vill, och ändå aldrig vara läsbar för servern",
    "Räkningar som varierar från månad till månad gör ett enda månadsbelopp missvisande, så talet måste bära sin egen osäkerhet",
    "Safari rensar webbläsarens lagring och iOS-push fungerar bara för installerade appar, så en local-first-app behöver en tydlig exportväg och en bra installationsupplevelse",
  ],
  solution:
    "The calculation engine is plain TypeScript with no React in it and is covered by unit tests, so the tax, loan, savings and scenario models can be checked on their own. Variable costs are stored as ranges and the dashboard shows the usual range next to the safe-to-spend figure. The plan lives in a Zustand store persisted to localStorage, and each closed month is frozen with the plan as it was. Sync is optional: a 12-word phrase is the whole identity and encrypts the data on the device, so the Convex backend only stores ciphertext and schedules push notifications, and reminder text is encrypted the same way. The app deploys as a static site on Vercel with small serverless functions for Riksbank and SCB data, the Enable Banking pass-through, fund and stock quotes and logo lookup, and Settings gives a JSON export of the whole plan and every closed month.",
  solutionSv:
    "Beräkningsmotorn är ren TypeScript utan React och täcks av enhetstester, så skatte-, lån-, spar- och scenariomodellerna kan kontrolleras för sig. Rörliga kostnader lagras som spann och översikten visar det vanliga spannet bredvid talet för vad du kan spendera. Planen ligger i en Zustand-store som sparas i localStorage, och varje stängd månad fryses med planen som den var. Synk är valfri: en fras på 12 ord är hela identiteten och krypterar datan på enheten, så Convex-backenden lagrar bara chiffertext och schemalägger pushnotiser, och påminnelsetexter krypteras på samma sätt. Appen driftsätts som en statisk sajt på Vercel med små serverless-funktioner för data från Riksbanken och SCB, vidarekopplingen till Enable Banking, kurser för fonder och aktier samt logotypsökning, och under Inställningar finns en JSON-export av hela planen och varje stängd månad.",
  outcome:
    "A deployed, MIT-licensed planner at finly-ruddy.vercel.app that works without an account, in English and Swedish with light and dark mode. It can be tried right away with an example plan and installed to the home screen as a PWA.",
  outcomeSv:
    "En driftsatt planerare med MIT-licens på finly-ruddy.vercel.app som fungerar utan konto, på svenska och engelska med ljust och mörkt läge. Den kan provas direkt med en exempelplan och installeras på hemskärmen som PWA.",
  gallery: [
    {
      image: "/images/projects/finly/dashboard.webp",
      alt: "Finly dashboard with safe to spend, total income, monthly cost, planned saving and bank balance",
      caption:
        "Dashboard with the safe-to-spend figure, where the money goes, financial position and savings goals (example plan)",
      captionSv:
        "Översikt med talet för vad du kan spendera, vart pengarna går, ekonomisk ställning och sparmål (exempelplan)",
    },
    {
      image: "/images/projects/finly/loans.webp",
      alt: "Finly loans page with a CSN loan, a car loan and a credit card, and a suggested payoff order",
      caption:
        "Loans page with debt-free dates, interest versus repayment and which loan to pay off first (example plan)",
      captionSv:
        "Lånesida med skuldfria datum, ränta mot amortering och vilket lån som lönar sig att betala av först (exempelplan)",
    },
    {
      image: "/images/projects/finly/dashboard-phone.webp",
      alt: "Finly dashboard on a phone with the bottom navigation bar",
      caption: "The same dashboard on a phone, installable as a PWA (example plan)",
      captionSv: "Samma översikt på mobilen, installerbar som PWA (exempelplan)",
    },
  ],
};
