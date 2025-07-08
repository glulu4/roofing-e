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
        ? `Paragon Exterior is changing the game in roofing and siding in ${location}. We’re leading with quality, trust, and total transparency — and we’re not afraid to say it: the outdated, frustrating parts of this industry are going in the dumpster.
At Paragon, we elevate everything that should matter: communication, craftsmanship, and care. Our mission is simple — to be the perfect partner for homeowners in ${location} before, during, and long after the project is complete.
This is how roofing and siding should feel: comfortable, honest, and hassle-free.`
        : `Paragon Exterior is changing the game in roofing and siding.
We’re leading with quality, trust, and total transparency — and we’re not afraid to say it: the outdated, frustrating parts of this industry are going in the dumpster.

At Paragon, we elevate everything that should matter: communication, craftsmanship, and care. Our mission is simple — to be the perfect partner for homeowners before, during, and long after the project is complete.

This is how roofing and siding should feel: comfortable, honest, and hassle-free.`;

    return (
        <div className={`pb-16 md:pt-2 md:pb-4 sm:pb-10 ${className}`}>
            <div className="px-6 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <HeaderText variant="large">{heading}</HeaderText>
                    <SecondaryText className="font-secondary mx-auto mt-6 max-w-xl text-gray-600">
                        {subText}
                    </SecondaryText>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/estimate"
                            className="font-secondary rounded-md bg-primaryblue px-8 py-7 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Free Estimate
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
