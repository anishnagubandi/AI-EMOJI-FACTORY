
import React from 'react';

export const UploadIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M17.25 12c0 2.896-2.354 5.25-5.25 5.25S6.75 14.896 6.75 12 9.104 6.75 12 6.75s5.25 2.354 5.25 5.25z" />
    </svg>
);
