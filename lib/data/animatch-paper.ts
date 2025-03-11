export const animatchPaper = {
  title: "AniMatch: A Content-Based Anime Recommendation System",
  authors: ["Berkay Orhan", "Jonatan Ebenholm"],
  abstractContent: `AniMatch is a content-based recommendation system designed to suggest anime titles based on their inherent features. The system employs BERT embeddings to extract meaningful representations of anime metadata and cosine similarity to compute relationships between titles. Unlike traditional recommendation systems, AniMatch focuses on metadata analysis, ensuring accurate and contextually relevant recommendations.`,
  sections: [
    {
      title: "Introduction",
      content: `Recommendation systems have become indispensable in digital platforms for personalizing user experiences. Traditional systems often rely on user data, raising concerns about privacy and usability in cold-start scenarios. AniMatch addresses these challenges by adopting a content-based approach, focusing on the intrinsic features of anime metadata to deliver recommendations.`
    },
    {
      title: "Background",
      content: `Content-based recommendation systems utilize the attributes of items to identify similarities and generate recommendations. In the context of anime, metadata such as descriptions, genres, themes, and demographics serve as the foundation for such systems. This type of system, in contrast to a collaborative-filtering system, works perfectly for systems which have no user data, Since the website which we made does not have a login system or cookies attached. We opted out of doing collaborative-filtering since the website is meant to be accessed, used and left in a span of a few minutes, in which an account setup would take longer than the use of the site itself, leading to what the we believe to be a worse user experience. With our need and the advancements in natural language processing, models like BERT have enabled the extraction of deeper semantic meanings, making them ideal for metadata-based recommendations, and this is what was used in the project.`
    },
    {
      title: "Purpose and Research Question",
      content: `The purpose of this study is to explore the effectiveness of content-based filtering using BERT embeddings in anime recommendation systems. The research question is: 
      \\textit{How effective is a content-based approach utilizing BERT embeddings and cosine similarity in generating relevant anime recommendations?}`
    },
    {
      title: "Data Collection and Preparation",
      content: `\\subsection{Generality of Data}
      The datasets used in AniMatch is the \\textit{Top Anime Dataset 2024}, sourced from Kaggle, and \\textit{Jikan API}, sourced from Jikan. The data from Kaggle contains features for 1,000 anime titles including Score, Popularity, Rank, Members, Description, Type, Episodes, Status, Aired, Premiered, Broadcast, Producers, Licensors, Studios, Source, Genres, Demographic, Duration, and Rating.
      
      The Jikan data also includes two extra features that were useful for the project: Themes (categories that are not genres but describe the setting) and Images (poster images of the anime).
      
      \\subsection{Source and Selection}
      We selected the most relevant features for recommendation:
      \\begin{enumerate}
          \\item \\textbf{Description}: Used since similar anime should be described in similar terms
          \\item \\textbf{Genre}: Used because users often like shows based on specific genres
          \\item \\textbf{Rating}: Used to find content with similar age appropriateness
          \\item \\textbf{Demographic}: Used to determine if a show was meant for similar audiences
          \\item \\textbf{Themes}: Used to compare thematic elements between shows
      \\end{enumerate}
      
      \\subsection{Data Processing and Cleaning}
      Data preparation included:
      \\begin{itemize}
          \\item Removal of missing or incomplete entries
          \\item Conversion of text fields to lowercase for uniformity
          \\item Removal of stop words, special characters, and redundant spaces
          \\item Tokenization of text fields for embedding generation
      \\end{itemize}
      
      \\subsection{Normalization}
      All numerical features were normalized using min-max scaling. Text data was preprocessed for BERT embeddings.`
    },
    {
      title: "Modeling",
      content: `\\subsection{Recommender System}
      AniMatch employs a content-based recommendation system. Each anime is represented by its metadata, which is encoded into numerical embeddings using BERT.
      
      \\subsection{Cosine Similarity}
      Cosine similarity is used to compute the closeness of two anime embeddings. It is defined as:
      \\begin{equation}
      \\text{cos}(\\theta) = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|}
      \\end{equation}
      where $\\vec{A}$ and $\\vec{B}$ are the embedding vectors for two anime titles. Higher similarity scores indicate closer matches.
      
      \\subsection{Implementation}
      The system was implemented in Python mainly using the following libraries:
      \\begin{itemize}
          \\item \\textbf{Transformers}: For generating BERT embeddings.
          \\item \\textbf{scikit-learn}: For computing cosine similarity.
          \\item \\textbf{pandas} and \\textbf{numpy}: For data preprocessing and handling.
      \\end{itemize}`
    },
    {
      title: "Evaluation",
      content: `\\subsection{Description of Model}
      The recommendation model generates a ranked list of the top similar anime for a given title based on cosine similarity scores.
      
      \\subsection{Relevance and Efficiency}
      The system provides accurate and contextually meaningful recommendations. Precomputing embeddings significantly reduces query time, ensuring fast response rates.
      
      \\subsection{Example Results}
      For the input \\textit{Attack on Titan}, the system assigns weights to different feature embedding categories. The weight distribution amongst the different features is as follows:

      \\begin{tabular}{l|r}
          \\textbf{Feature} & \\textbf{Weight} \\\\
          \\hline
          Themes & 0.25 \\\\
          Age rating & 0.1 \\\\
          Description & 0.25 \\\\
          Demographic & 0.15 \\\\
          Genre & 0.25 \\\\
      \\end{tabular}
      
      With these weights, the system recommended titles like Demon Slayer, Jujutsu Kaisen, Hell's Paradise, Dr. Stone: Stone Wars, and Chainsaw Man - all sharing thematic similarities with Attack on Titan such as survival, moral complexity, and high-stakes battles.`
    },
    {
      title: "Discussion",
      content: `\\subsection{Analysis of Results}
      The results highlight the effectiveness of BERT embeddings in capturing semantic relationships. However, the computational cost of generating embeddings remains a challenge, but these embeddings only need to be generated once and stored in a database.
      
      \\subsection{Limitations}
      The system faces several limitations:
      \\begin{itemize}
          \\item \\textbf{Feature Dependencies}: Reliance on quality and diversity of metadata
          \\item \\textbf{Cold-Start Problem}: Challenges with newly added anime lacking metadata
          \\item \\textbf{Serendipity}: Sometimes recommendations may vary due to dataset limitations
          \\item \\textbf{Reinforcement Loops}: Similar recommendations for similar inputs
      \\end{itemize}
      
      \\subsection{Alternative Methods}
      Alternative approaches, such as hybrid systems combining collaborative and content-based filtering, could enhance personalization. Fine-tuning BERT for anime-specific metadata might improve accuracy.
      
      \\subsection{Suggestions for Improvement}
      \\begin{itemize}
          \\item Integrate user preferences to create a hybrid recommendation system
          \\item Explore lightweight embedding models to reduce computational costs
          \\item Fine-tune BERT embeddings for anime-specific contexts
      \\end{itemize}`
    },
    {
      title: "Conclusion",
      content: `\\subsection{Summary of Findings}
      AniMatch demonstrates the potential of content-based filtering using BERT embeddings and cosine similarity in anime recommendation systems. The model provides accurate and relevant recommendations while ensuring privacy.
      
      \\subsection{Reconnection to Research Question}
      This study demonstrates that a content-based approach utilizing BERT embeddings and cosine similarity is highly effective in generating relevant anime recommendations. The use of embeddings captures nuanced context from metadata, and computational costs are minimal since embedding generation is a one-time preprocessing task. The results validate the approach's efficacy in meeting the study's goals of relevance and efficiency.`
    },
    {
      title: "References",
      content: `\\begin{enumerate}
          \\item Devlin, J., Chang, M.-W., Lee, K., \\& Toutanova, K. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. \\textit{arXiv preprint arXiv:1810.04805}.
          \\item Kaggle. (2024). Top Anime Dataset 2024. Retrieved from \\url{https://www.kaggle.com/datasets/bhavyadhingra00020/top-anime-dataset-2024}.
          \\item Jikan. (2024). 
          \\item Manning, C. D., Raghavan, P., \\& Schütze, H. (2008). Introduction to Information Retrieval. Cambridge University Press.
      \\end{enumerate}`
    }
  ],
  pdfUrl: "/papers/animatch-paper.pdf"
}; 