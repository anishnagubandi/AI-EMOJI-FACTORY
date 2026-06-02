# AI Emoji Factory

Transform your photos into expressive emojis with the power of AI! This app leverages Google's Gemini API to analyze images and generate relevant emoji suggestions that capture the essence of your photos.

## Features

- 📸 Upload photos and get AI-powered emoji recommendations
- 🎨 Built with modern TypeScript and web technologies
- ⚡ Fast and responsive web interface
- 🔑 Powered by Google Gemini API for intelligent image analysis

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Gemini API Key** - Get one from [Google AI Studio](https://aistudio.google.com/app/apikey)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anishnagubandi/AI-EMOJI-FACTORY.git
   cd AI-EMOJI-FACTORY
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your Gemini API key:
   - Create or open the `.env.local` file in the root directory
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

## Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or the port displayed in your terminal).

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Usage

1. Open the application in your browser
2. Upload or select a photo
3. Wait for the AI to analyze your image
4. Get emoji suggestions based on the image content
5. Copy and use your favorite emojis!

## Technologies Used

- **TypeScript** - Type-safe JavaScript development
- **HTML** - Markup structure
- **Google Gemini API** - AI-powered image analysis

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.
