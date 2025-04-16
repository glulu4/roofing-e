import React from 'react'

interface HeaderTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'small' | 'default' | 'large';
  as?: keyof JSX.IntrinsicElements; // 'h1' | 'h2' | 'h3' | 'p' | etc.
}

export default function HeaderText({
  children,
  className = "",
  variant = 'default',
  as: Tag = 'h2' // default to <h2>
}: HeaderTextProps) {
  const variants = {
    small: "text-2xl font-extrabold tracking-tight sm:text-3xl",
    default: "text-4xl font-extrabold tracking-tight sm:text-5xl",
    large: "text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
  }

  return (
    <Tag className={`${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
