import Image from "next/image";
import HeaderText from "../HeaderText";
import Marquee from "react-fast-marquee";

export default function TrustedBy() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <HeaderText className="text-center text-2xl font-semibold text-primaryblue">
                    Trusted by the world’s most innovative teams
                </HeaderText>
                {/* <div className="flex flex-wrap justify-center items-center mt-10 gap-12 sm:gap-12 lg:gap-24"> */
                }
                <Marquee loop={0} className="pt-20">
                    {/* Top Row */}
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Amex"
                        src="/images/home/company_icons/amex.png"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Discover"
                        src="/images/home/company_icons/discover.svg"
                        className="h-24 md:h-32 lg:h-32 sm:h-24 w-auto object-contain px-10"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Visa"
                        src="/images/home/company_icons/visa.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Mastercard"
                        src="/images/home/company_icons/mastercard.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    {/* Bottom Row */}
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Google"
                        src="/images/home/company_icons/google.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Synchrony Financing"
                        src="/images/home/company_icons/synchrony.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="BBB"
                        src="/images/home/company_icons/bbb.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    <Image
                        
                        width={500}
                        height={500}
                        alt="Acorn"
                        src="/images/home/company_icons/acorn.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                    <Image

                        width={500}
                        height={500}
                        alt="Hearth Financing"
                        src="/images/home/company_icons/hearth_logo.svg"
                        className="h-16 sm:h-20 w-auto object-contain px-10"
                    />
                </Marquee>
                {/* </div> */}
            </div>
        </div>
    );
}


