"use client";
import React, {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Image from "next/image";
import {isMobile} from 'react-device-detect';
import HeaderText from "../HeaderText";

export const SAMPLE_DATA = [
    {
        name: "Casement",
        img: "/images/window/window-types/casement.avif",
        href: "/windows/casement",
    },
    {
        name: "Double Hung",
        img: "/images/window/window-types/double.avif",
        href: "/windows/double-hung",
    },
    {
        name: "Awning",
        img: "/images/window/window-types/awning.avif",
        href: "/windows/awning",
    },
    {
        name: "Glider",
        img: "/images/window/window-types/glider.avif",
        href: "/windows/glider",
    },
    {
        name: "Bay",
        img: "/images/window/window-types/bay.avif",
        href: "/windows/bay",
    },
    {
        name: "Bow",
        img: "/images/window/window-types/bow-window.webp",
        href: "/windows/bow",
    },
    {
        name: "Picture",
        img: "/images/window/window-types/picture-window.avif",
        href: "/windows/picture",
    },
    {
        name: "Round Top",
        img: "/images/window/window-types/rounded-top.jpg",
        href: "/windows/round-top",
    },

];
  


//1500;

export default function HorizontalSlider() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [itemWidth, setItemWidth] = useState<number>(400);
    const [itemHeight, setItemHeight] = useState<number>(400);


    useEffect(() => {

        if (typeof window === "undefined") return;
        const width = isMobile ? window.innerWidth * 0.6 : window.innerWidth * 0.3;
        const height = window.innerHeight * 0.6;
        setItemHeight(height);

        setItemWidth(width);
    }, []);





    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="bg-primaryblue">
            <div className="flex flex-col items-center w-5/6 mx-auto py-24 ">

                <div className="flex flex-row items-center justify-between w-full ">
                    <HeaderText variant="default" className=" mb-12 text-white px-6">
                        Explore Window Varieties
                    </HeaderText>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => handleScroll(-itemWidth)}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-500 flex items-center justify-center shadow-sm"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <button
                            onClick={() => handleScroll(itemWidth)}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-500 flex items-center justify-center shadow-sm"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>


                <div
                    ref={containerRef}
                    className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6"
                >
                    {SAMPLE_DATA.map((item, idx) => (
                        // <a
                        //     href={item.href}
                            // key={idx}
                            // className={` bg-white snap-center shrink-0 rounded-3xl shadow-md flex flex-col items-center justify-around text-center p-6`}
                            // style={{
                            //     width: `${itemWidth}px`,
                            //     height: itemHeight + "px",
                            // }}
                        // >
                        <div
                            key={idx}
                            className={` bg-white snap-center shrink-0 rounded-3xl shadow-md flex flex-col items-center justify-around text-center p-6`}
                            style={{
                                width: `${itemWidth}px`,
                                height: itemHeight + "px",
                            }}
                        >
                            <div className="self-center text-center w-3/4 space-y-6">
                                <HeaderText variant="small" className="text-primaryblue mb-12 text-center" >
                                    {item.name}
                                </HeaderText>


                            </div>
                            <div>
                                <Image
                                    width={200}
                                    height={200}
                                    alt="App screenshot"
                                    src={item.img}
                                    className="sm:w-full sm:h-full object-f"
                                    priority
                                />

                            </div>
                        </div>


                        // </a>
                    ))}

                </div>


            </div>

        </div>
    );
}
