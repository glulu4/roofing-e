'use client';

import {useState, ChangeEvent, FormEvent} from 'react';

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

export default function Form() {
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

        < form onSubmit = {handleSubmit} className = "px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" >
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
        </form >
    );
}