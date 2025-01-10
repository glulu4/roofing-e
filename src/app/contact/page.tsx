'use client';

import {useState, ChangeEvent, FormEvent} from 'react';

export interface ContactFormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
}

export default function Example() {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

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

        // Simple validation
        // if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        //     alert("Please fill in all required fields.");
        //     return;
        // }

        // if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        //     alert("Please enter a valid email address.");
        //     return;
        // }



        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({formData}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Form submitted:", data);
            alert("Your message has been sent successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                company: "",
                email: "",
                phoneNumber: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("Failed to send your message. Please try again later.");
        }
    };


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
                <h2 className="text-balance text-5xl font-bold tracking-tight text-primaryblue sm:text-6xl">
                    Contact Sales
                </h2>
                <p className="mt-4 text-xl text-gray-700">
                    Get in touch to learn more about our premium solutions. We&apos;re here to help.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-base font-semibold text-primaryblue">
                            First name
                        </label>
                        <div className="mt-3">
                            <input
                            required
                                id="first-name"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-base font-semibold text-primaryblue">
                            Last name
                        </label>
                        <div className="mt-3">
                            <input
                                required
                                id="last-name"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-base font-semibold text-primaryblue">
                            Company
                        </label>
                        <div className="mt-3">
                            <input
                                required
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                value={formData.company}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-base font-semibold text-primaryblue">
                            Email
                        </label>
                        <div className="mt-3">
                            <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-base font-semibold text-primaryblue">
                            Phone number
                        </label>
                        <div className="mt-3">
                            <input
                                required
                                id="phone-number"
                                name="phoneNumber"
                                type="tel"
                                placeholder="123-456-7890"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-base font-semibold text-primaryblue">
                            Message
                        </label>
                        <div className="mt-3">
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-4 py-3 text-lg text-primaryblue outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-primaryblue px-5 py-3 text-xl font-bold text-white shadow-sm hover:bg-blue-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
                    >
                        Let&apos;s Talk
                    </button>
                </div>
            </form>
        </div>
    );
}