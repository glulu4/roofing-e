import React from 'react';
import HeaderText from '../HeaderText';
import SecondaryText from '../SecondaryText';
import Image from 'next/image';
import {ArrowUpRight} from 'lucide-react';
import Link from 'next/link';

export default function SidingMaterial() {
    return (
        <div>
            {/* Siding Materials Section */}
            <div className="bg-gray-100 py-16">
                <div className="w-5/6 mx-auto">
                    <HeaderText variant="default" className="text-center mb-8">
                        Siding Materials We Offer
                    </HeaderText>

                    <div className="">
                        <div className="mx-auto lg:px-8">
                            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                                {/* Vinyl Siding */}
                                <Link href="/siding/vinyl-siding" className="relative lg:col-span-3">
                                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                                        <Image
                                            width={1000}
                                            height={500}
                                            alt="Vinyl siding installation"
                                            src="/images/siding/vinyl-siding.jpg"
                                            className="h-80 object-cover object-left"
                                        />
                                        <div className="p-10 pt-4">
                                            <HeaderText variant="small" className="mt-2">Vinyl Siding</HeaderText>
                                            <SecondaryText className="mt-2 max-w-lg">
                                                Vinyl siding is an affordable and versatile option, offering low maintenance and a wide range of colors to suit any home&apos;s style.
                                            </SecondaryText>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                                    {/* <ArrowUpRight className="absolute bottom-6 right-6 h-8 w-8 text-gray-500 hover:text-gray-700 transition-colors" /> */}
                                </Link>

                                {/* Aluminum Siding */}
                                <Link href="/siding/aluminum-siding" className="relative lg:col-span-3">
                                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                                        <Image
                                            width={5000}
                                            height={500}
                                            alt="Aluminum siding panels"
                                            src="/images/siding/aluminum-siding.jpg"
                                            className="h-80 object-cover object-left lg:object-right"
                                        />
                                        <div className="p-10 pt-4">
                                            <HeaderText variant="small" className="mt-2">Aluminum Siding</HeaderText>
                                            <SecondaryText className="mt-2 max-w-lg">
                                                Durable and resistant to fire and pests, aluminum siding is an excellent choice for those looking for strength and longevity.
                                            </SecondaryText>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                                    {/* <ArrowUpRight className="absolute bottom-6 right-6 h-8 w-8 text-gray-500 hover:text-gray-700 transition-colors" /> */}

                                </Link>

                                {/* Fiber Cement Siding */}
                                <Link href="/siding/fiber-cement-siding" className="relative lg:col-span-2">
                                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                                        <Image
                                            width={500}
                                            height={500}
                                            alt="Fiber cement siding boards"
                                            src="/images/siding/fiber-cement-siding.jpg"
                                            className="h-80 object-cover object-left"
                                        />
                                        <div className="p-10 pt-4">
                                            <HeaderText variant="small" className="mt-2">Fiber Cement Siding</HeaderText>
                                            <SecondaryText className="mt-2 max-w-lg">
                                                Fiber cement siding combines the look of wood with the durability of cement, providing excellent protection against weather and rot.
                                            </SecondaryText>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                                    {/* <ArrowUpRight className="absolute bottom-6 right-6 h-8 w-8 text-gray-500 hover:text-gray-700 transition-colors" /> */}

                                </Link>

                                {/* Cedar Siding */}
                                <Link href="/siding/cedar-siding/" className="relative lg:col-span-2">
                                    <div className="absolute inset-px rounded-lg bg-white" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                                        <Image
                                            width={500}
                                            height={500}
                                            alt="Cedar siding panels"
                                            src="/images/siding/cedar-siding.png"
                                            className="h-80 object-cover"
                                        />
                                        <div className="p-10 pt-4">
                                            <HeaderText variant="small" className="mt-2">Cedar Siding</HeaderText>
                                            <SecondaryText className="mt-2 max-w-lg">
                                                Known for its natural beauty, cedar siding offers a classic look while being eco-friendly and resistant to decay.
                                            </SecondaryText>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
                                    {/* <ArrowUpRight className="absolute bottom-6 right-6 h-8 w-8 text-gray-500 hover:text-gray-700 transition-colors" /> */}

                                </Link>

                                {/* Engineered Wood Siding */}
                                <Link href="/siding/engineered-wood-siding" className="relative lg:col-span-2">
                                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                                        <Image
                                            width={500}
                                            height={500}
                                            alt="Engineered wood siding sample"
                                            src="/images/siding/engineered-wood-siding.webp"
                                            className="h-80 object-cover"
                                        />
                                        <div className="p-10 pt-4">
                                            <HeaderText variant="small" className="mt-2">Engineered Wood Siding</HeaderText>
                                            <SecondaryText className="mt-2 max-w-lg">
                                                Engineered wood siding is a cost-effective alternative to traditional wood, offering the same aesthetic with enhanced durability.
                                            </SecondaryText>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                                    {/* <ArrowUpRight className="absolute bottom-6 right-6 h-8 w-8 text-gray-500 hover:text-gray-700 transition-colors" /> */}

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
