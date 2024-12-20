import Image from 'next/image';
import React from 'react';
import HeaderText from '../Headertext';
import SecondaryText from '../SecondaryText';

export default function Branding() {
    return (
        <div className="flex flex-col items-center justify-center p-8 rounded-lg pb-0">
            {/* Brand Image Container */}
            <div className=" relative">
                <Image
                    src="/images/header.png"
                    alt="Brand Logo"
                    className="w-80 h-auto object-contain"
                    width={600}
                    height={600} // Provide height for better responsiveness
                />
            </div>

        </div>
    );
}
