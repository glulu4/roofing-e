import Image from "next/image";
import HeaderText from "./HeaderText";
import SecondaryText from "./SecondaryText";

interface RowProps {
    title: string;
    description: string | React.ReactNode;
    imageSrc: string;
    reverse?: boolean;
    className?: string;
    /** Tailwind color class for the header text */
    headerColor?: string;
    /** Tailwind color class for the body text */
    bodyColor?: string;
}

export default function Row({
    title,
    description,
    imageSrc,
    reverse = false,
    className = "",
    headerColor = "text-gray-950",
    bodyColor = "text-gray-600",
}: RowProps) {
    return (
        <div
            className={`${className} mx-auto w-5/6 flex flex-col-reverse ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between `}
        >
            <div className="flex-[0.6] max-w-xl justify-start text-left">
                <HeaderText variant="small" className={`mt-10 font-semibold ${headerColor}`}>
                    {title}
                </HeaderText>
                <SecondaryText className={`mt-10 font-medium ${bodyColor}`}>
                    {description}
                </SecondaryText>
            </div>

            <div className="flex justify-center flex-[0.4]">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={500}
                        height={500}
                        className="object-fill  rounded-xl shadow-xl ring-1 ring-gray-400/10"
                    />
            </div>
        </div>
    );
}
