// const features = [
//     {name: 'Origin', description: 'Designed by Good Goods, Inc.'},
//     {name: 'Material', description: 'Solid walnut base with rare earth magnets and polycarbonate add-ons.'},
//     {name: 'Dimensions', description: '15" x 3.75" x .75"'},
//     {name: 'Finish', description: 'Hand sanded and finished with natural oil'},
//     {name: 'Includes', description: 'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder'},
//     {name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.'},
// ]

import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";

interface ReasonsProps {
    title: string;
    description: string; // Optional description prop
    titleAs?: keyof JSX.IntrinsicElements; // Optional prop for title tag
    reasons: Array<{name: string, description: string}>;
    img: {src: string, alt: string};
}

export default function Reasons({
    title,
    description,
    titleAs = "h2", // Default to h2 if not provided
    reasons,
    img: {src: imgSrc, alt: imgAlt}
}: ReasonsProps) {
    return (
        <div className="pt-32">
            <div aria-hidden="true" className="relative">
                <Image
                    width={1000}
                    height={500}
                    alt={imgAlt}
                    src={imgSrc}
                    className="h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
            </div>

            <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <HeaderText as={titleAs} className=" font-bold tracking-tight text-primaryblue">
                        {title}
                    </HeaderText>
                    <SecondaryText className="mt-4 text-gray-500">
                        {description}
                    </SecondaryText>
                </div>

                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {reasons.map((reason) => (
                        <div key={reason.name} className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">{reason.name}</dt>
                            <dd className="mt-2 text-sm text-gray-500">{reason.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
