// import Image from "next/image";
// import HeaderText from "../HeaderText";
// import SecondaryText from "../SecondaryText";
// import Link from "next/link";

// interface InfoSectionProps {
//     // Image props
//     imgSrc: string;
//     imgAlt: string;

//     // Content props
//     title: string;
//     mainContent: string | JSX.Element;
//     titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
//     bottomContent?: string | JSX.Element;

//     // Styling props
//     className?: string;
//     imagePosition?: 'left' | 'right';
//     showBottomContent?: boolean;
//     imageShadow?: boolean;
//     titleHref?: string;

// }

// export default function InfoSection({
//     imgSrc,
//     imgAlt,
//     title,
//     titleAs = "h2",
//     mainContent,
//     bottomContent,
//     className = "",
//     imagePosition = 'right',
//     imageShadow = true,
//     showBottomContent = true,
//     titleHref,
// }: InfoSectionProps) {
//     const isImageRight = imagePosition === 'right';

//     return (
//         <div className={`py-24 sm:py-32 ${className}`}>
//             <div className="mx-auto sm:w-5/6 px-8">
//                 <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//                     {/* Text Content */}
//                     <div className={isImageRight ? 'lg:order-1' : 'lg:order-2'}>
//                         <div className="text-base/7 text-gray-700 lg:max-w-lg">

//                             <HeaderText as={titleAs} className="mt-2 text-pretty font-semibold tracking-tight text-primaryblue">
//                                 {titleHref ? (
//                                     <Link
//                                         href={titleHref}
//                                         className="transition-colors duration-200 hover:text-blue-800"
//                                     >
//                                         {title}
//                                     </Link>
//                                 ) : (
//                                     title
//                                 )}
//                             </HeaderText>

//                             <div className="max-w-xl">

//                                 {typeof mainContent === 'string' ? (
//                                     <SecondaryText className="mt-6 text-lg text-gray-600">
//                                         {mainContent}
//                                     </SecondaryText>
//                                 ) : (
//                                     mainContent
//                                 )}

//                             </div>
//                         </div>
//                     </div>

//                     {/* Image */}
//                     <div className={`lg:pr-4 h-full ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
//                         <div className={`relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 sm:pt-80 lg:pt-96 ${imageShadow ? "shadow-2xl" : ""} sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10`}>
//                             <Image
//                                 width={1000}
//                                 height={1000}
//                                 alt={imgAlt}
//                                 src={imgSrc}
//                                 className="absolute inset-0 size-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Content */}
//                 {showBottomContent && bottomContent && (
//                     <div className="mt-16">
//                         <SecondaryText className="mt-8">
//                             {bottomContent}
//                         </SecondaryText>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";
import Link from "next/link";

interface InfoSectionProps {
    // Image props
    imgSrc: string;
    imgAlt: string;

    // Content props
    title: string;
    mainContent: string | JSX.Element;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    bottomContent?: string | JSX.Element;

    // Styling props
    className?: string;
    imagePosition?: 'left' | 'right';
    showBottomContent?: boolean;
    imageShadow?: boolean;
    titleHref?: string;
}

export default function InfoSection({
    imgSrc,
    imgAlt,
    title,
    titleAs = "h2",
    mainContent,
    bottomContent,
    className = "",
    imagePosition = 'right',
    imageShadow = true,
    showBottomContent = true,
    titleHref,
}: InfoSectionProps) {
    const isImageRight = imagePosition === 'right';

    return (
        <section className={`py-24 sm:py-32 mx-auto sm:w-5/6 px-8 ${className}`}>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                {/* Text Content */}
                <article className={`lg:max-w-lg ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                    <HeaderText
                        as={titleAs}
                        className="mt-2 text-pretty font-semibold tracking-tight text-primaryblue"
                    >
                        {titleHref ? (
                            <Link
                                href={titleHref}
                                className="transition-colors duration-200 hover:text-blue-800"
                            >
                                {title}
                            </Link>
                        ) : (
                            title
                        )}
                    </HeaderText>

                    {typeof mainContent === 'string' ? (
                        <SecondaryText className="mt-6 text-lg text-gray-600 max-w-xl">
                            {mainContent}
                        </SecondaryText>
                    ) : (
                        <div className="max-w-xl">{mainContent}</div>
                    )}
                </article>

                {/* Image - With original padding approach but less HTML */}
                <figure
                    className={`relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 sm:pt-80 lg:pt-96 lg:pr-4 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 ${imageShadow ? "shadow-2xl" : ""
                        } ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}
                >
                    <Image
                        width={1000}
                        height={1000}
                        alt={imgAlt}
                        src={imgSrc}
                        className="absolute inset-0 size-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                </figure>
            </div>

            {/* Bottom Content */}
            {showBottomContent && bottomContent && (
                <SecondaryText className="mt-16">
                    {bottomContent}
                </SecondaryText>
            )}
        </section>
    );
}