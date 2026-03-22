# PNG to SVG Converter

A modern, high-quality PNG to SVG converter that runs entirely in your browser using the Potrace algorithm.

## Features
- **Client-Side Processing**: Files aren't uploaded to any server; everything stays on your machine.
- **Multiple Color Modes**: 
  - Full Color
  - Black & White
  - Grayscale
  - Detailed (up to 24 colors)
- **Advanced Controls**:
  - Noise Filtering (Turd size)
  - Corner Sharpness (Alpha max)
  - Curve Precision (Optimization tolerance)
- **Export Options**: 
  - Copy SVG code directly
  - Download as `.svg`
  - Download as a standalone `.html` wrapper

## Setup and Use
Since this application uses ES Modules, it must be served from a web server.

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Run a simple local server:
   ```bash
   # Using Python
   python3 -m http.server 8080
   
   # Or using Node.js (if you have serve installed)
   npx serve .
   ```
4. Open your browser to `http://localhost:8080`.

## Credits
Powered by a local implementation of the **Potrace** bitmap tracing algorithm.
