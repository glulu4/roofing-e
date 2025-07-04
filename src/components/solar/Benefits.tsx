import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";

interface BenefitsProps {
    title: string;
    titleAs?: keyof JSX.IntrinsicElements; // Optional prop for title tag
    description: string;

    img1: {src:string, alt:string};
    img2: {src: string, alt: string};
    text1: string;
    text2: string;
}

export default function Benefits({
    title,

    titleAs = "h2", // Default to h2 if not provided
    description,
    img1: {src: img1Src, alt: img1Alt},
    img2: {src: img2Src, alt: img2Alt},
    text1,
    text2


}: BenefitsProps) {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading">
                    <div className="flex flex-col items-center text-center">
                        <HeaderText as={titleAs} className="text-primaryblue">
                            {title}
                        </HeaderText>
                        <SecondaryText >
                            {description}
                        </SecondaryText>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <Image
                                width={500}
                                height={500}
                                alt={img1Alt}
                                src={img1Src}
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <SecondaryText className="mt-8 text-gray-600">
                                {text1}
                             </SecondaryText>
                        </div>
                        <div>
                            <Image
                                width={500}
                                height={500}
                                alt={img2Alt}
                                src={img2Src}
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <SecondaryText className="mt-8 text-gray-600">
                                {text2}
                            </SecondaryText>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
