import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
        <path
          d="M50 20v60M20 50h60"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M35 35l30 30M65 35L35 65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="ml-2 text-xl font-bold">CivisHub</span>
    </div>
  );
};

