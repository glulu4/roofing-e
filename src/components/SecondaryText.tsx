import React from 'react'


interface SecondaryTextProps {
    children: React.ReactNode;
    className?: string; // Allows optional custom classes
    as?: keyof JSX.IntrinsicElements; // 'h1' | 'h2' | 'h3' | 'p' | etc.
}

export default function SecondaryText({
    children, 
    className = "", 
    as: Tag = 'p' // default to <h2>
}: SecondaryTextProps) {
    return (
        <Tag
        
            className={`mt-8 text-pretty text-xl/8 text-gray-500 font-medium sm:max-w-md sm:text-xl/10 lg:max-w-none ${className}`}
        >
            {children}
        </Tag>
    );
}
