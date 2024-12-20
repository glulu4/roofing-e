
export default function Expertise() {
    const features = [
        {
            name: 'Experienced Craftsmen',
            description:
                'Our team is comprised of highly skilled and experienced roofers who have a deep understanding of all roofing materials and techniques.',
        },
        {
            name: 'Comprehensive Services',
            description:
                'We offer a full range of roofing services, from repairs and replacements to maintenance and inspections. No job is too big or too small.',
        },
    ];

    // main text was text-gray-900
    return (
        <div>
            {/* Main container */}
            <div className="flex flex-col justify-around mx-auto w-10/12 px-6 lg:px-8 bg-card rounded-md p-10 py-32">
                {/* Heading Section */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Transform Your Roof with Our Expertise
                    </h2>
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
