import React from 'react'


interface SecondaryTextProps {
    children: React.ReactNode;
    className?: string; // Allows optional custom classes
}

export default function SecondaryText({children, className = ""}: SecondaryTextProps) {
    return (
        <h2
            className={`mt-8 text-pretty text-lg font-medium sm:max-w-md sm:text-xl/8 lg:max-w-none ${className}`}
        >
            {children}
        </h2>
    );
}
