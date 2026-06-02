# AI Emoji Factory 🎨

Transform your photos into expressive emojis with the power of AI! This app leverages Google's Gemini API to analyze images and generate relevant emoji descriptions, which are then turned into high-quality sticker emojis using modern generative image models.

## Features ✨

- **📸 Photo-to-Emoji conversion**: Upload any photo, and the AI will analyze it to capture the perfect expressive essence.
- **⚡ Dual AI Engine Support**:
  - **Free Engine (Flux via Pollinations.ai)**: Generates cartoon emojis instantly without requiring any paid keys or credit cards (Default).
  - **Gemini Imagen 4 (Paid Key)**: Generates premium emojis using Google's official Imagen 4 model (requires a billing-enabled Google AI Studio key).
- **🔒 Secure Proxy Routing**: The dev server is configured with an integrated proxy to bypass browser-enforced Cross-Origin Resource Sharing (CORS) limits.
- **🎨 Modern Dark UI**: Beautiful glassmorphic, responsive user interface.

## Prerequisites 📋

Before running this project, ensure you have one of the following runtimes installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/) OR **Bun** - [Download here](https://bun.sh/)
- **Gemini API Key** - Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey) (required for the image description step).

## Installation 🚀

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anishnagubandi/AI-EMOJI-FACTORY.git
   cd AI-EMOJI-FACTORY
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Using bun:
   ```bash
   bun install
   ```

3. **Set up your Gemini API key:**
   - Create or open the `.env.local` file in the root directory.
   - Add your Gemini API key:
     ```env
     GEMINI_API_KEY=your_api_key_here
     ```

## Running the Application 💻

### Development Mode

Start the development server with hot-reload:

Using npm:
```bash
npm run dev
```

Using bun:
```bash
bun run dev
```

The app will be available at **`http://localhost:3000`**.

### Production Build

Build and optimize the application for production:

Using npm:
```bash
npm run build
npm run preview
```

Using bun:
```bash
bun run build
bun run preview
```

## Usage Instructions 💡

1. Open **`http://localhost:3000`** in your browser.
2. Select your preferred **AI Engine** at the top:
   - **Free Engine (Flux)**: Ideal for free-tier users. Uses Google Gemini 2.5 Flash to describe your photo and Flux to generate the emoji sticker.
   - **Gemini Imagen 4**: Uses Gemini to describe and Google's official Imagen 4 to generate the emoji.
3. Upload or select a photo.
4. Click **Generate Emoji**.
5. Wait for the AI to process your image, download your new emoji sticker, or click **Start Over** to make another!

## Troubleshooting 🔧

### 1. `Imagen 3 is only available on paid plans` Error
If you use the **Gemini Imagen 4** engine and get an error referencing paid plans, this is because Google AI Studio restricts Imagen image generation models to billing-enabled projects.
- **Solution**: Go to your [Google AI Studio Console](https://aistudio.google.com/), select your project, and enable **pay-as-you-go billing**. Alternatively, switch to the **Free Engine (Flux)**.

### 2. CORS Errors or URL Parsing Warnings
The application handles CORS by routing browser requests through the Vite proxy (`/api/gemini` and `/api/pollinations`). Make sure you access the site via the local server address (`http://localhost:3000`) rather than opening `index.html` directly as a file.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
