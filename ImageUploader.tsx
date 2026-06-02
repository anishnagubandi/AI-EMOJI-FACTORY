
import React, { useRef } from 'react';
import { UploadIcon } from './UploadIcon';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  imagePreview: string | null;
  isDisabled: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, imagePreview, isDisabled }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-brand-gray/50 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border-2 border-dashed border-gray-600 transition-colors duration-300 hover:border-brand-pink">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={isDisabled}
      />
      {imagePreview ? (
        <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in">
          <img src={imagePreview} alt="Original upload preview" className="max-w-full max-h-full object-contain rounded-lg shadow-lg"/>
          <button 
            onClick={handleClick} 
            disabled={isDisabled}
            className="mt-4 text-sm bg-gray-700 text-white py-1 px-3 rounded-full hover:bg-gray-600 transition-colors disabled:opacity-50">
            Change Photo
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className="w-full h-full flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <UploadIcon className="w-16 h-16 mb-4"/>
          <span className="font-bold text-xl">Click to upload a photo</span>
          <span className="text-sm">Or drag and drop</span>
        </button>
      )}
    </div>
  );
};

export default ImageUploader;
