import Image from 'next/image';
import React from 'react'
import HeaderText from '../HeaderText';
import SecondaryText from '../SecondaryText';

interface HeroProps {
    mainText: string;
    subText: string;
    imgSrc: string;
    imgAlt: string;
    textTagAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Hero({
    mainText,
    subText,
    imgSrc,
    imgAlt,
    textTagAs = 'h2',

}: HeroProps) {
  return (
           <div className="relative isolate py-24 sm:py-32 min-h-[80vh]">
               <Image
                   width={1000}
                   height={1000}
              alt={imgAlt}
                   src={imgSrc}
                   className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
               />
   
               {/* Dark Tint Overlay */}
               <div className="absolute inset-0 -z-10 bg-black bg-opacity-50"></div>
   
               <div className="mx-auto max-w-7xl px-6 lg:px-8">
                   <div className="mx-auto max-w-4xl text-center">
                  <HeaderText as={textTagAs} variant="large" className="mt-2 text-neutral-50">
                            {mainText}
                       </HeaderText>
                   </div>
                   <SecondaryText className="mx-auto mt-6 max-w-4xl text-pretty text-center text-neutral-50">
                          {subText} 
                   </SecondaryText>
   

               </div>
           </div>
   
  )
}
