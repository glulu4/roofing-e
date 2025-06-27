

import React from 'react'


interface SecondaryHeaderProps {
    children: React.ReactNode;
    className?: string; // Allows optional custom classes
}

export default function SecondaryHeader({children, className = ""}: SecondaryHeaderProps) {
    return (
        <h2
            className={`font-secondary flex items-center gap-x-3 text-2xl/7 font-semibold text-background${className}`}
        >
            {children}
        </h2>
    );
}


// font-secondary flex items-center gap-x-3 text-xl/7 font-semibold text-background