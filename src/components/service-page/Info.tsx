import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";


interface InfoProps {
    imgSrc: string;
    imgAlt: string;
}

export default function Info({
    imgSrc,
    imgAlt

}: InfoProps) {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto w-5/6 px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    <div>
                        <div className="text-base/7 text-gray-700 lg:max-w-lg">
                            <HeaderText as="h1" className="mt-2 text-pretty font-semibold tracking-tight text-primaryblue ">
                                Roof Repair You Can Count On
                            </HeaderText>
                            <div className="max-w-xl">
                                <SecondaryText className="mt-6">
                                    Whether it&apos;s storm damage, age-related wear, or unexpected leaks, Paragon Exterior is ready to provide fast, reliable roof repair when you need it most. Our experienced roofing specialists proudly serve Pennsylvania, New Jersey, and Delaware with expert craftsmanship and honest service.
                                    We&apos;ve built a dedicated roof repair team that focuses on diagnosing and fixing all types of roofing problems — from missing shingles and damaged flashing to leaks and structural concerns. Our trained and professional technicians arrive ready to assess the damage and fix it right the first time, ensuring your home stays protected.
                                </SecondaryText>



                            </div>
                        </div>


                    </div>
                    <div className="lg:pr-4 h-full">
                        <div className="relative overflow-hidden rounded-3xl  px-6 pb-9 pt-64 sm:pt-80 lg:pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <Image
                                width={1000}
                                height={1000}
                                alt={imgAlt}
                                src={imgSrc}
                                className="absolute inset-0 size-full object-cover "
                            />

                        </div>
                    </div>



                </div>

                <div className="mt-16 ">
                    <SecondaryText className="mt-8">
                        Severe storms can cause sudden damage — torn shingles, damaged gutters, or dangerous leaks. Our emergency roof repair team responds quickly to secure your roof, prevent further damage, and restore your peace of mind. After a storm, don&apos;t wait — let our experts inspect your roof and address issues before they escalate.
                    </SecondaryText>
                </div>

            </div>
        </div>
    )
}
