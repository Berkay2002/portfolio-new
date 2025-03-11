# Research Papers Directory

This directory contains research papers and academic work related to the projects in this portfolio.

## Converting LaTeX to PDF

To convert your LaTeX document to PDF and add it to your portfolio:

1. **Install a LaTeX Distribution**:
   - Windows: [MiKTeX](https://miktex.org/) or [TeX Live](https://tug.org/texlive/)
   - macOS: [MacTeX](https://tug.org/mactex/)
   - Linux: TeX Live via your package manager

2. **Create or Edit Your LaTeX File**:
   - Save your LaTeX content in a `.tex` file
   - Make sure all required packages are installed

3. **Compile to PDF**:
   - Using a LaTeX editor (TeXworks, TeXstudio, Overleaf):
     - Open your .tex file and use the "Build" or "Compile" function
   - Using command line:
     - `pdflatex yourfile.tex`
     - Run multiple times if needed for references and citations

4. **Add to Portfolio**:
   - Save the PDF in this directory with an appropriate name (e.g., `animatch-paper.pdf`)
   - Update the project data in `lib/data/portfolio-data.ts` to point to the PDF file:
     ```typescript
     paperLink: "/papers/your-paper-name.pdf"
     ```

## Adding Images to Your LaTeX Document

If your LaTeX document contains image references:

1. Create an 'Images' subdirectory in your LaTeX project
2. Place all referenced images in this directory
3. In your LaTeX document, use relative paths:
   ```latex
   \includegraphics[width=0.9\linewidth]{Images/image-name.png}
   ```

4. When compiling, make sure the Images directory is accessible to your LaTeX compiler 