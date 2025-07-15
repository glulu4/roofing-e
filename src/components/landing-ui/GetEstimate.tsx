import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";

interface GetEstimateProps {
    location?: string;
    className?: string;
}

export default function GetEstimate({
    location,
    className = "",
}: GetEstimateProps) {
    const heading = location ? `Get Your Free Estimate in ${location}` : 'Get Your Free Estimate Today';
    const subText = location
        ? `Paragon Exterior is changing the game in roofing and siding in ${location}. We’re leading with quality, 
        trust, and total transparency — and we’re not afraid to say it: the outdated, frustrating parts of this 
        industry are going in the dumpster.
        At Paragon, we elevate everything that should matter: communication, craftsmanship, and care. Our mission is simple — 
        to be the perfect partner for homeowners in ${location} before, during, and long after the project is complete.
        This is how roofing and siding should feel: comfortable, honest, and hassle-free.`
        : 
            `Paragon Exterior is revolutionizing the roofing and siding industry. We prioritize quality, trust, and complete transparency — and we’re proud to declare it: the outdated, frustrating aspects of this field are being discarded. At Paragon, we enhance everything that truly matters: communication, craftsmanship, and care. Our mission is straightforward — to be the ideal partner for homeowners before, during, and long after the project is finished. This is how roofing and siding should be: comfortable, honest, and stress-free.`;

    return(
        <div className={`pb-16 md:pt-2 md:pb-4 sm:pb-10 ${className}`}>
            <div className="px-6 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <HeaderText variant="large">{heading}</HeaderText>
                    <SecondaryText className="font-secondary mx-auto mt-6 max-w-xl text-gray-600">
                        {subText}
                    </SecondaryText>
                    <div className="grid md:grid-cols-2 gap-6 pt-20">
                        <a
                            href="tel:2157997663"
                            className="bg-primaryblue hover:bg-blue-700 text-white px-6 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 block"
                        >
                            Call: (215) 799-7663
                        </a>
                        <a
                            href="/estimate"
                            className="bg-amber-500 hover:bg-amber-600 text-primaryblue px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 block"
                        >
                            Free Estimate
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
