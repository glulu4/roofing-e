
// import HeaderText from "./HeaderText";

// export default function TrustedBy() {
//     return (
//         <div className="bg-white py-16 sm:py-24">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <HeaderText className="text-center text-lg font-semibold text-gray-900">
//                     Trusted by the world’s most innovative teams
//                 </HeaderText>
//                 <div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 justify-items-center items-center">
//                     {/* Amex */}
//                     <img
//                         alt="Amex"
//                         src="/images/amex.png"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                     {/* Discover */}
//                     <img
//                         alt="Discover"
//                         src="/images/discover.svg"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                     {/* Visa */}
//                     <img
//                         alt="Visa"
//                         src="/images/visa.svg"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                     {/* Mastercard */}
//                     <img
//                         alt="Mastercard"
//                         src="/images/mastercard.svg"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                     {/* Google */}
//                     <img
//                         alt="Google"
//                         src="/images/google.svg"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                     {/* Wells Fargo */}
//                     <img
//                         alt="Wells Fargo"
//                         src="/images/wells-fargo.svg"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                     {/* BBB */}
//                     <img
//                         alt="BBB"
//                         src="/images/bbb.svg"
//                         className="h-16 sm:h-20 w-auto object-contain"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
import HeaderText from "./HeaderText";

export default function TrustedBy() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <HeaderText className="text-center text-2xl font-semibold text-primaryblue">
                    Trusted by the world’s most innovative teams
                </HeaderText>
                <div className="flex flex-wrap justify-center items-center mt-10 gap-12 sm:gap-12 lg:gap-24">
                    {/* Top Row */}
                    <img
                        alt="Amex"
                        src="/images/amex.png"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <img
                        alt="Discover"
                        src="/images/discover.svg"
                        className="h-24 md:h-32 lg:h-32 sm:h-24 w-auto object-contain"
                    />
                    <img
                        alt="Visa"
                        src="/images/visa.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <img
                        alt="Mastercard"
                        src="/images/mastercard.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    {/* Bottom Row */}
                    <img
                        alt="Google"
                        src="/images/google.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <img
                        alt="Wells Fargo"
                        src="/images/wells-fargo.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                    <img
                        alt="BBB"
                        src="/images/bbb.svg"
                        className="h-16 sm:h-20 w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
