'use client';

import {useState} from 'react';

export default function Example() {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="isolate bg-white px-6 py-28 sm:py-36 lg:px-10">
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
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Contact Sales
                </h2>
                <p className="mt-4 text-xl text-gray-700">
                    Get in touch to learn more about our premium solutions. We're here to help.
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-base font-semibold text-gray-900">
                            First name
                        </label>
                        <div className="mt-3">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-base font-semibold text-gray-900">
                            Last name
                        </label>
                        <div className="mt-3">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-base font-semibold text-gray-900">
                            Company
                        </label>
                        <div className="mt-3">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-base font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-3">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-base font-semibold text-gray-900">
                            Phone number
                        </label>
                        <div className="mt-3">
                            <input
                                id="phone-number"
                                name="phone-number"
                                type="text"
                                placeholder="123-456-7890"
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-base font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-3">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-primaryblue px-5 py-3 text-xl font-bold text-white shadow-sm hover:bg-blue-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                    >
                        Let’s Talk
                    </button>
                </div>
            </form>
        </div>
    );
}
