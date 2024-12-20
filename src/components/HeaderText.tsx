import React from 'react'

interface HeaderTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'small' | 'default' | 'large';
}

export default function HeaderText({ 
  children, 
  className = "", 
  variant = 'default' 
}: HeaderTextProps) {
  const variants = {
    small: "text-2xl font-extrabold tracking-tight sm:text-3xl",
    default: "text-4xl font-extrabold tracking-tight sm:text-5xl",
    large: "text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
  }

  return (
    <h2 className={`${variants[variant]} ${className}`}>
      {children}
    </h2>
  );
}