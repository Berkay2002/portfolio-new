import type { Project } from "@/types";

export const animatch: Project = {
  id: "animatch",
  title: "AniMatch",
  description:
    "An anime recommendation system using BERT to analyze user preferences and suggest personalized anime recommendations based on content similarity.",
  descriptionSv:
    "Ett rekommendationssystem för anime som använder BERT för att analysera användarpreferenser och föreslå personliga animerekommendationer baserat på innehållslikhet.",
  technologies: [
    "Python",
    "TypeScript",
    "Next.js",
    "BERT",
    "MongoDB",
    "Web Workers",
  ],
  link: "https://animatch-chi.vercel.app/",
  image: "/images/projects/animatch.png",
  imageAlt: "AniMatch recommendation system interface",
  detailedDescription:
    "A Next.js-based web application that provides personalized anime recommendations based on content-based filtering. The system employs BERT embeddings to extract meaningful representations of anime metadata and cosine similarity to compute relationships between titles. Unlike traditional recommendation systems that rely on user data (collaborative filtering), AniMatch focuses on metadata analysis, ensuring accurate and contextually relevant recommendations even in cold-start scenarios.",
  detailedDescriptionSv:
    "En webbapplikation byggd med Next.js som ger personliga animerekommendationer baserat på innehållsbaserad filtrering. Systemet använder BERT-inbäddningar för att extrahera meningsfulla representationer av animes metadata och cosinuslikhet för att beräkna relationer mellan titlar. Till skillnad från traditionella rekommendationssystem som förlitar sig på användardata (kollaborativ filtrering), fokuserar AniMatch på metadataanalys, vilket säkerställer exakta och kontextuellt relevanta rekommendationer även i kallstartsscenarier.",
  features: [
    "Intelligent Recommendation Engine: Utilizes BERT embeddings for semantic understanding of descriptions, genres, themes, ratings, and demographics",
    "Weighted Feature Analysis: Custom weighting system (25% descriptions, 25% genres, 25% themes, 15% demographics, 10% age ratings) for balanced recommendations",
    "Interactive Interface: Clean, responsive UI with intuitive controls for browsing and selecting anime",
    "Real-time Recommendations: Web worker implementation for handling vector comparisons without freezing the UI",
    "Advanced Search Functionality: Comprehensive search capabilities with instant results",
    "Personalized Experience: Users can create a custom recommendation list by adding multiple anime they enjoy",
    "Detailed Anime Pages: Comprehensive information including images, descriptions, genres, themes, and ratings",
    "Curated Categories: Trending and top-ranked anime sections for exploration",
  ],
  featuresSv: [
    "Intelligent rekommendationsmotor: Använder BERT-inbäddningar för semantisk förståelse av beskrivningar, genrer, teman, betyg och demografi",
    "Viktad funktionsanalys: Anpassat viktsystem (25% beskrivningar, 25% genrer, 25% teman, 15% demografi, 10% åldersgränser) för balanserade rekommendationer",
    "Interaktivt gränssnitt: Rent, responsivt UI med intuitiva kontroller för att bläddra och välja anime",
    "Rekommendationer i realtid: Web worker-implementering för att hantera vektorjämförelser utan att frysa användargränssnittet",
    "Avancerad sökfunktionalitet: Omfattande sökmöjligheter med omedelbara resultat",
    "Personlig upplevelse: Användare kan skapa en anpassad rekommendationslista genom att lägga till flera anime de tycker om",
    "Detaljerade animesidor: Omfattande information inklusive bilder, beskrivningar, genrer, teman och betyg",
    "Kurerade kategorier: Trendiga och topprankade animesektioner för utforskning",
  ],
  challenges: [
    "Feature Dependencies: Reliance on quality and diversity of metadata for accurate recommendations",
    "Computational Cost: Processing vector calculations for large datasets efficiently",
    "Reinforcement Loops: Avoiding recommendation patterns that reinforce similar content",
    "Serendipity Balance: Ensuring variety in recommendations while maintaining relevance",
  ],
  challengesSv: [
    "Funktionsberoende: Beroende av metadata med hög kvalitet och mångfald för korrekta rekommendationer",
    "Beräkningskostnad: Effektiv bearbetning av vektorberäkningar för stora dataset",
    "Förstärkningsloopar: Undvikande av rekommendationsmönster som förstärker liknande innehåll",
    "Serendipitetsbalans: Säkerställa variation i rekommendationer samtidigt som relevans bibehålls",
  ],
  solution:
    "AniMatch was built with a Python backend for data processing and a Next.js frontend for the user interface. The system processes anime metadata through BERT to generate embeddings that capture semantic meanings. These embeddings are stored in MongoDB for efficient retrieval. The recommendation engine calculates cosine similarity between different embedding types with custom weighting to prioritize certain features.\n\nKey technical implementations include:\n- Preprocessing text data by removing stop words and special characters\n- Tokenizing text fields for BERT embedding generation\n- Normalizing numerical features using min-max scaling\n- Precomputing embeddings to reduce query time\n- Implementing web workers for responsive UI during calculations",
  solutionSv:
    "AniMatch byggdes med en Python-backend för databehandling och en Next.js-frontend för användargränssnittet. Systemet bearbetar anime-metadata genom BERT för att generera inbäddningar som fångar semantiska betydelser. Dessa inbäddningar lagras i MongoDB för effektiv hämtning. Rekommendationsmotorn beräknar cosinuslikhet mellan olika inbäddningstyper med anpassad viktning för att prioritera vissa funktioner.\n\nViktiga tekniska implementeringar inkluderar:\n- Förbehandling av textdata genom att ta bort stoppord och specialtecken\n- Tokenisering av textfält för BERT-inbäddningsgenerering\n- Normalisering av numeriska funktioner med min-max-skalning\n- Förberäkning av inbäddningar för att minska frågetiden\n- Implementering av web workers för responsivt användargränssnitt under beräkningar",
  outcome:
    "The system successfully demonstrates the effectiveness of content-based filtering using BERT embeddings in anime recommendation systems. Testing showed that for anime like 'Attack on Titan', the system recommends contextually relevant titles such as 'Demon Slayer' and 'Jujutsu Kaisen' that share thematic elements and narrative styles.\n\nThe project was implemented as both a research paper and a functional web application, showcasing the practical application of NLP techniques in recommendation systems. The research was conducted as part of a university course project with a fellow student, Jonatan Ebenholm.",
  outcomeSv:
    "Systemet demonstrerar framgångsrikt effektiviteten av innehållsbaserad filtrering med BERT-inbäddningar i rekommendationssystem för anime. Tester visade att för anime som 'Attack on Titan' rekommenderar systemet kontextuellt relevanta titlar som 'Demon Slayer' och 'Jujutsu Kaisen' som delar tematiska element och berättarstilar.\n\nProjektet implementerades både som en forskningsartikel och en funktionell webbapplikation, vilket visar den praktiska tillämpningen av NLP-tekniker i rekommendationssystem. Forskningen genomfördes som en del av ett universitetskursprojekt med medstudenten Jonatan Ebenholm.",
  githubLink: "https://github.com/Berkay2002/AniMatch",
  paperLink: "/papers/animatch-paper-placeholder.md",
};