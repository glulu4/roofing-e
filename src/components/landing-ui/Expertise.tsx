export default function Expertise() {
    const features = [
        {
            name: 'Specialists in Siding Installation',
            description:
                'Paragon Exterior specializes in high-performance siding solutions designed to protect and enhance homes throughout Pennsylvania, New Jersey, and Delaware. Our expert team installs vinyl, fiber cement, and vertical siding with attention to detail, proper flashing, and energy-efficient techniques that stand the test of time.',
        },
        {
            name: 'James Hardie® & CertainTeed® Certified Installers',
            description:
                'We work with the industry’s best brands—offering fiber cement siding from James Hardie® and premium vinyl siding from CertainTeed®. These materials are engineered to resist warping, cracking, and fading, while delivering unbeatable curb appeal and long-lasting value for your home.',
        },
        {
            name: 'Weather-Ready Performance',
            description:
                'Our siding systems are built to handle the harsh weather of the Northeast. From humid summers to freezing winters, we ensure proper installation and insulation to protect against moisture, pests, and heat loss—while keeping your home looking sharp all year round.',
        },
        {
            name: 'Warranty-Backed Craftsmanship',
            description:
                'We follow manufacturer-certified installation guidelines to maintain warranty eligibility and ensure every board is properly sealed, secured, and finished. Whether it’s HardiePlank® lap siding or CertainTeed Monogram® vinyl panels, your siding will be backed by top-tier warranties and professional-grade quality.',
        },
    ];

    return (
        <div className="mx-auto w-11/12 px-4 py-24 sm:px-6 lg:px-8">
            {/* Main container */}
            <div className="flex flex-col justify-around rounded-md p-10 py-32 bg-gray-50">
                {/* Heading Section */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Siding Expertise That Protects and Elevates Your Home
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 font-secondary">
                        From fiber cement to premium vinyl siding, Paragon Exterior delivers superior siding installation using industry-trusted brands and expert craftsmanship you can count on.
                    </p>
                </div>

                {/* Features Section */}
                <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex flex-col items-start">
                            <h3 className="text-2xl font-semibold">{feature.name}</h3>
                            <p className="font-secondary mt-2 text-lg text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
