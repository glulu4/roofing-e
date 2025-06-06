import Image from "next/image";
import HeaderText from "../HeaderText";

export default function TrustedBy() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <HeaderText className="text-center text-2xl font-semibold text-primaryblue">
                    Trusted by the world’s most innovative teams
                </HeaderText>
                <div className="flex flex-wrap justify-center items-center mt-10 gap-12 sm:gap-12 lg:gap-24">
                    {/* Top Row */}
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Amex"
                        src="/images/amex.png"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Discover"
                        src="/images/discover.svg"
                        className="h-24 md:h-32 lg:h-32 sm:h-24 w-auto object-contain"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Visa"
                        src="/images/visa.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Mastercard"
                        src="/images/mastercard.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    {/* Bottom Row */}
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Google"
                        src="/images/google.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Synchrony Financing"
                        src="/images/synchrony.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="BBB"
                        src="/images/bbb.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Acorn"
                        src="/images/acorn.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />

                </div>
            </div>
        </div>
    );
}
