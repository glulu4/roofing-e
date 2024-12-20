import HeaderText from "../HeaderText";

export default function GetEstimate() {
    return (
        <div className="">
            <div className="px-6 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <HeaderText>
                        Get Your Free Estimate

                    </HeaderText>
                    <p className=" font-secondary mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
                        We’re here to understand your needs and provide a personalized, no-obligation estimate – because we treat your home like it’s our own.
                    </p>
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
    )
}
