import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";
import SecondaryHeader from "../SecondaryHeader";

interface Incentive {
    name: string;
    imageSrc: string;
    description: string;
    imageAlt?: string;
}

interface IncentivesSectionProps {
    // Content props
    title: string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Allows flexibility in header type
    subtitle: string;
    heroImage: {
        src: string;
        alt: string;
    };
    incentives: Incentive[];

    // Layout props
    imagePosition?: 'left' | 'right';
    backgroundColor?: string;
    incentiveColumns?: 1 | 2 | 3 | 4;
    // Styling props
    className?: string;
}

export default function IncentivesSection({
    title,
    titleAs,
    subtitle,
    heroImage,
    incentives,
    imagePosition = 'right',
    backgroundColor = 'bg-gray-50',
    incentiveColumns = 3,
    className = '',
}: IncentivesSectionProps) {
    const isImageRight = imagePosition === 'right';

    // Generate grid columns class based on incentiveColumns prop
    const getGridCols = () => {
        switch (incentiveColumns) {
            case 1: return 'lg:grid-cols-1';
            case 2: return 'lg:grid-cols-2';
            case 3: return 'lg:grid-cols-3';
            case 4: return 'lg:grid-cols-4';
            default: return 'lg:grid-cols-3';
        }
    };

    return (
        <div className={`${backgroundColor} ${className}`}>
            <div className="mx-auto w-5/6 py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    {/* Hero Section */}
                    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                        {/* Text Content */}
                        <div className={isImageRight ? 'lg:order-1' : 'lg:order-2'}>
                            <HeaderText as={titleAs} className=' font-bold tracking-tight text-primaryblue'>
                                {title}
                            </HeaderText>
                            <SecondaryText className="mt-4">
                                {subtitle}
                            </SecondaryText>
                        </div>

                        {/* Hero Image */}
                        <div className={isImageRight ? 'lg:order-2' : 'lg:order-1'}>
                            <Image
                                alt={heroImage.alt}
                                src={heroImage.src}
                                width={800}
                                height={533}
                                className="aspect-[3/2] w-full rounded-lg bg-gray-100 object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Incentives Grid */}
                    <div className={`mt-16 grid grid-cols-1 gap-x-8 gap-y-10 ${getGridCols()}`}>
                        {incentives.map((incentive, index) => (
                            <div key={`${incentive.name}-${index}`} className="sm:flex lg:block justify-center">
                                <div className="sm:shrink-0 self-center">
                                    <Image
                                        alt={incentive.imageAlt || incentive.name}
                                        src={incentive.imageSrc}
                                        width={64}
                                        height={64}
                                        className="size-16"
                                    />
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <SecondaryText className="text-sm font-medium text-primaryblue">
                                        {incentive.name}
                                    </SecondaryText>
                                    <p className="mt-2 text-md text-gray-600">
                                        {incentive.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}