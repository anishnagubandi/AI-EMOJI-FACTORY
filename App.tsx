
import React, { useState, useCallback } from 'react';
import { AppStatus } from './types';
import { describeImageForEmoji, generateEmojiFromDescription, generateEmojiFromPollinations } from './geminiService';
import Header from './Header';
import ImageUploader from './ImageUploader';
import ResultDisplay from './ResultDisplay';
import { SparklesIcon } from './SparklesIcon';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
  const [originalImagePreview, setOriginalImagePreview] = useState<string | null>(null);
  const [generatedEmoji, setGeneratedEmoji] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [aiEngine, setAiEngine] = useState<'gemini' | 'pollinations'>('pollinations');

  const handleImageUpload = (file: File) => {
    setOriginalImageFile(file);
    setOriginalImagePreview(URL.createObjectURL(file));
    setGeneratedEmoji(null);
    setErrorMessage(null);
    setStatus(AppStatus.IMAGE_UPLOADED);
  };

  const handleGenerateClick = useCallback(async () => {
    if (!originalImageFile) return;

    setErrorMessage(null);
    setGeneratedEmoji(null);

    try {
      setStatus(AppStatus.DESCRIBING);
      const description = await describeImageForEmoji(originalImageFile);
      
      setStatus(AppStatus.GENERATING);
      let emojiBase64 = '';
      if (aiEngine === 'gemini') {
        emojiBase64 = await generateEmojiFromDescription(description);
      } else {
        emojiBase64 = await generateEmojiFromPollinations(description);
      }
      
      setGeneratedEmoji(`data:image/png;base64,${emojiBase64}`);
      setStatus(AppStatus.SUCCESS);

    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "An unknown error occurred.";
      setErrorMessage(`Failed to create emoji. ${message}`);
      setStatus(AppStatus.ERROR);
    }
  }, [originalImageFile, aiEngine]);

  const handleReset = () => {
    setOriginalImageFile(null);
    setOriginalImagePreview(null);
    setGeneratedEmoji(null);
    setErrorMessage(null);
    setStatus(AppStatus.IDLE);
  };

  const canGenerate = status === AppStatus.IMAGE_UPLOADED || status === AppStatus.SUCCESS || status === AppStatus.ERROR;

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8 mt-8">
        {/* AI Engine Selector */}
        <div className="flex bg-gray-800/80 backdrop-blur-md p-1.5 rounded-full border border-gray-700/50 shadow-lg max-w-md w-full">
          <button
            onClick={() => setAiEngine('pollinations')}
            disabled={status === AppStatus.DESCRIBING || status === AppStatus.GENERATING}
            className={`flex-1 text-center py-2 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              aiEngine === 'pollinations'
                ? 'bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-md shadow-pink-500/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
            }`}
          >
            ✨ Free Engine (Flux)
          </button>
          <button
            onClick={() => setAiEngine('gemini')}
            disabled={status === AppStatus.DESCRIBING || status === AppStatus.GENERATING}
            className={`flex-1 text-center py-2 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              aiEngine === 'gemini'
                ? 'bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-md shadow-pink-500/20'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
            }`}
          >
            🔒 Gemini Imagen 4 (Paid)
          </button>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ImageUploader 
            onImageUpload={handleImageUpload} 
            imagePreview={originalImagePreview}
            isDisabled={status === AppStatus.DESCRIBING || status === AppStatus.GENERATING}
          />
          <ResultDisplay 
            status={status}
            generatedEmoji={generatedEmoji}
            errorMessage={errorMessage}
          />
        </div>
        <div className="flex flex-col items-center gap-4 mt-4">
          {status !== AppStatus.IDLE && (
            <button
              onClick={handleGenerateClick}
              disabled={!canGenerate}
              className={`
                flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 ease-in-out
                bg-gradient-to-r from-brand-purple to-brand-pink text-white
                hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105
                disabled:from-gray-500 disabled:to-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none
              `}
            >
              <SparklesIcon />
              {status === AppStatus.SUCCESS ? 'Generate Another' : 'Generate Emoji'}
            </button>
          )}

          {status !== AppStatus.IDLE && (
             <button
              onClick={handleReset}
              className="text-gray-400 hover:text-white transition-colors text-sm"
             >
              Start Over
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
