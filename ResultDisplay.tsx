
import React from 'react';
import { AppStatus } from '../types';
import { Spinner } from './Spinner';
import { DownloadIcon } from './icons/DownloadIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface ResultDisplayProps {
  status: AppStatus;
  generatedEmoji: string | null;
  errorMessage: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ status, generatedEmoji, errorMessage }) => {

  const handleDownload = () => {
    if (!generatedEmoji) return;
    const link = document.createElement('a');
    link.href = generatedEmoji;
    link.download = 'ai-emoji.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (status) {
      case AppStatus.DESCRIBING:
        return (
          <div className="text-center text-gray-400">
            <Spinner />
            <p className="mt-4 font-semibold">Step 1: Analyzing your photo...</p>
            <p className="text-sm">The AI is learning about your image.</p>
          </div>
        );
      case AppStatus.GENERATING:
        return (
          <div className="text-center text-gray-400">
            <Spinner />
            <p className="mt-4 font-semibold">Step 2: Creating your emoji...</p>
            <p className="text-sm">This is where the magic happens!</p>
          </div>
        );
      case AppStatus.SUCCESS:
        if (generatedEmoji) {
          return (
            <div className="flex flex-col items-center justify-center h-full animate-pop-in">
              <img src={generatedEmoji} alt="Generated emoji" className="max-w-full max-h-[70%] object-contain shadow-lg"/>
              <button
                onClick={handleDownload}
                className="mt-6 flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-transform hover:scale-105"
              >
                <DownloadIcon />
                Download Emoji
              </button>
            </div>
          );
        }
        return null;
      case AppStatus.ERROR:
        return (
          <div className="text-center text-red-400 p-4">
            <h3 className="font-bold text-lg">Oops! Something went wrong.</h3>
            <p className="text-sm">{errorMessage}</p>
          </div>
        );
      case AppStatus.IDLE:
      case AppStatus.IMAGE_UPLOADED:
      default:
        return (
            <div className="text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 text-gray-600">
                    <SparklesIcon />
                </div>
                <h3 className="font-bold text-xl">Your emoji will appear here</h3>
                <p className="text-sm">Upload a photo and click "Generate" to start.</p>
            </div>
        );
    }
  };

  return (
    <div className="bg-brand-gray/50 rounded-2xl p-6 flex items-center justify-center aspect-square border-2 border-dashed border-gray-600">
      {renderContent()}
    </div>
  );
};

export default ResultDisplay;
