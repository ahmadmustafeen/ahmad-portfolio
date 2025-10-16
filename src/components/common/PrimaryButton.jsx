'use client';

import { ArrowRight } from "lucide-react";

const PrimaryButton = ({ 
  children, 
  onClick, 
  icon: Icon = ArrowRight,
  className = "",
  ...props 
}) => {
  return (
    <button
      {...props}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 0)",
      }}
      className={`mt-4 px-4 sm:px-6 py-3 cursor-pointer sm:py-4 text-base sm:text-xl font-light bg-primary hover:bg-primary-hover text-ink font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group ${className}`}
      onClick={onClick}
    >
      {children}
      <Icon className="transition-transform duration-300 group-hover:translate-x-2" size={18} />
    </button>
  );
};

export default PrimaryButton;