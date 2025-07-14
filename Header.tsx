
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center w-full">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-purple via-brand-pink to-amber-400 text-transparent bg-clip-text">
        AI Emoji Factory
      </h1>
      <p className="mt-2 text-lg text-gray-400 max-w-2xl mx-auto">
        Turn any photo into a fun, shareable emoji sticker. Upload an image to get started!
      </p>
    </header>
  );
};

export default Header;
