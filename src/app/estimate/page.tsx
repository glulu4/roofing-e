'use client';

import {useState, ChangeEvent, FormEvent} from 'react';
import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline';

export interface EstimateFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    message: string;
}

export default function Example() {
    const [formData, setFormData] = useState<EstimateFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        message: ''
    });

    // const [status, setStatus] = useState<SubmissionStatus>('idle');
    // const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try {

            const response = await fetch("/api/estimate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({formData}),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Something went wrong');
            }

            alert("Estimate was sent!");

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                message: ''
            });


            const data = await response.json();
            console.log("Form submitted:", data);

        } catch (error) {
            console.error("Error submitting the form:", error);
            alert('Failed to send message')
            // setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
        }
    };

    return (
        <div className="relative isolate bg-white">


            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                {/* Left side content */}
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            {/* Background elements remain the same */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-yellow-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                />
                            </div>
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            >

                                    <defs>
                                        <pattern
                                            x="100%"
                                            y={-1}
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                    </svg>
                                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                            </svg>
                        </div>
                        <h2 className="text-pretty text-5xl font-semibold tracking-tight text-primaryblue sm:text-6xl">
                            Get Your Free Estimate
                        </h2>
                        <p className="mt-6 text-xl text-gray-600">
                            Take the first step towards a more energy-efficient and durable home. Our team of experts will provide a comprehensive assessment of your roofing or solar needs at no cost to you. Discover how you can save money, increase your home&apos;s value, and enjoy peace of mind with our professional solutions.
                        </p>
                        <dl className="mt-10 space-y-4 text-lg text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    1 Neshaminy Interplex Dr #103
                                    <br />
                                    Feasterville-Trevose, PA 19053
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:hello@example.com" className="hover:text-primaryblue">
                                        sales@paragonexterior.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="block text-lg font-semibold text-primaryblue">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-lg font-semibold text-primaryblue">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-lg font-semibold text-primaryblue">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phoneNumber" className="block text-lg font-semibold text-primaryblue">
                                    Phone number
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    autoComplete="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="address" className="block text-lg font-semibold text-primaryblue">
                                    Street Address
                                </label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    autoComplete="address-line1"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-lg font-semibold text-primaryblue">
                                    City
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-lg font-semibold text-primaryblue">
                                    State
                                </label>
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    autoComplete="address-level1"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="zip" className="block text-lg font-semibold text-primaryblue">
                                    ZIP
                                </label>
                                <input
                                    id="zip"
                                    name="zip"
                                    type="text"
                                    autoComplete="postal-code"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-base font-semibold text-primaryblue">
                                    Message
                                </label>
                                <div className="mt-3">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-start">
                            <button
                                type="submit"
                                className="rounded-md bg-primaryblue px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}