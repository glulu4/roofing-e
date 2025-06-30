import HeaderText from "@/components/HeaderText";
import SecondaryHeader from "@/components/SecondaryHeader";
import SecondaryText from "@/components/SecondaryText";
import Image from "next/image";

interface AboutSectionProps {
    title:string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    subtitle:string;
    secondHeader:string;
    secondContent:string[];
    thirdHeader:string;
    thirdContent?:string[];
    images:{src:string; alt:string}[];
    className?:string;
}

export default function AboutSection({
    // Header content
    title = "On a mission to empower remote teams",
    subtitle = "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.",

    // Mission section
    secondHeader = "Our mission",
    secondContent = [
        "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
        "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci."
    ],
    thirdHeader = "Our stats",
    thirdContent =[
        "",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ], 

    // Images
    images = [
        {
            src: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90",
            alt: "Team member 1"
        },
        {
            src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90",
            alt: "Team member 2"
        },
        {
            src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90",
            alt: "Team member 3"
        },
        {
            src: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90",
            alt: "Team member 4"
        }
    ],
    className,
    titleAs = "h2"

}: AboutSectionProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <HeaderText as={titleAs} className="mt-2 text-pretty font-semibold tracking-tight text-primaryblue">
                        {title}
                    </HeaderText>
                    <SecondaryText className="mt-6 text-balance">
                        {subtitle}
                    </SecondaryText>
                </div>

                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <SecondaryHeader className="text-pretty font-semibold tracking-tight text-primaryblue">
                            {secondHeader}
                        </SecondaryHeader>
                        {secondContent.map((paragraph, index) => (
                            <SecondaryText key={index} className={`${index === 0 ? 'mt-6' : 'mt-8'} text-base/7 `}>
                                {paragraph}
                            </SecondaryText>
                        ))}
                    </div>

                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 ${index === 1 || index === 3 ? '-mt-8 lg:-mt-40' : ''
                                        }`}
                                >
                                    <Image
                                        width={560}
                                        height={560}
                                        alt={image.alt}
                                        src={image.src}
                                        className="block size-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-lg:mt-16 lg:col-span-1">
                        <div className="lg:pr-8">
                            <SecondaryHeader className="text-pretty font-semibold tracking-tight text-primaryblue">
                                {thirdHeader}
                            </SecondaryHeader>
                            {thirdContent.map((paragraph, index) => (
                                <SecondaryText key={index} className={`${index === 0 ? 'mt-6' : 'mt-8'} text-base/7 `}>
                                    {paragraph}
                                </SecondaryText>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
  }