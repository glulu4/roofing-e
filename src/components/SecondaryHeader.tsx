

import React from 'react'


interface SecondaryHeaderProps {
    children: React.ReactNode;
    className?: string; // Allows optional custom classes
    as?: keyof JSX.IntrinsicElements; // 'h1' | 'h2' | 'h3' | 'p' | etc.
}

export default function SecondaryHeader({
    children, 
    as: Tag = 'h2', // default to <h2>
    className = ""}: SecondaryHeaderProps) {
    return (
        <Tag
            className={`font-secondary flex items-center gap-x-3 text-2xl/7 font-semibold text-background${className}`}
        >
            {children}
        </Tag>
    );
}


// font-secondary flex items-center gap-x-3 text-xl/7 font-semibold text-background