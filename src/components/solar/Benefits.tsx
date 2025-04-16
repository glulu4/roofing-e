import Image from "next/image";
import HeaderText from "../HeaderText";
import SecondaryText from "../SecondaryText";

export default function Benefits() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading">
                    <div className="flex flex-col items-center text-center">
                        <HeaderText className="text-primaryblue">
                            Benefits of Solar
                        </HeaderText>
                        <SecondaryText >
                            Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                            all-day adventures, long shifts at work, and tough travel schedules.
                        </SecondaryText>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <Image
                                width={500}
                                height={500}
                                alt="roofing companies"
                                src="/images/benefit2.jpeg"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <SecondaryText className="mt-8 text-gray-600">
                            Reduce your electricity costs by harnessing 
                            the power of the sun. Solar energy provides clean and 
                            affordable energy for your home.                           
                             </SecondaryText>
                        </div>
                        <div>
                            <Image
                                width={500}
                                height={500}
                                alt="roofing companies"
                                src="/images/benefit1.jpeg"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                            />
                            <SecondaryText className="mt-8 text-gray-600">
                                Take advantage of federal and state solar tax 
                                credits to lower the upfront cost of installing a 
                                solar system.
                            </SecondaryText>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
