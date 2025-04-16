
import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";

interface QualitySectionProps {
    mainText:string;
    description:string;
    image: string;
}

export default function QualitySection({image, mainText, description}: QualitySectionProps) {


    return (
        <div className="mx-auto w-11/12 px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 bg-primaryblue p-10 rounded-sm">

            <div className="w-full lg:w-1/2 flex flex-col justify-center py-12">
                <HeaderText className="mb-8 text-neutral-50">
                    {mainText}
                </HeaderText>
                <SecondaryText className=" text-neutral-100">
                    {description}
                </SecondaryText>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <Image
                    width={500}
                    height={500}
                    src={image} // Replace with actual image URL
                    alt="Paragon Exterior roofing company"
                    className="rounded-lg object-cover w-full h-full max-h-[500px]"
                />
            </div>
        </div>
    );
}
