"use client";

import Head from "next/head";
import React from "react";

interface HeroVideoProps {
    text?:string
    secText?:string;
    video:string;
    poster: string;
}
const HeroVideo = ({text, secText, video, poster}: HeroVideoProps) => {
    return (
        <div className="relative h-[80vh] w-full  z-0">
            {/* Video Player */}
            <video
                
               
                
                className="absolute top-0 left-0 h-full w-full object-cover"
                src={video}
                autoPlay
                muted
                poster={poster}
                playsInline
                
            ></video>
            {/* Overlay Content */}
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-black bg-opacity-50 text-white text-center px-6">

                <div className="flex flex-col items-center px-6 md:px-16">
                    <h3 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {text ? text : 'Expert Roofing Solutions'}
                    </h3>
                    <p className="font-secondary text-xl  mb-6">
                        {secText ? secText : 'Reliable, Affordable, and Built to Last'}
                    </p>
                </div>


 
            </div>
        </div>
    );
};

export default HeroVideo;