import HeaderText from '@/components/HeaderText'
import {HearthFinanceCalculator} from '@/components/HearthCalc'
// import {HearthFinanceCalculator} from '@/components/HearthCalc'
import GetEstimate from '@/components/landing-ui/GetEstimate'
import GoogleReviews from '@/components/landing-ui/GoogleReviews'
import Row from '@/components/Row'
import SecondaryText from '@/components/SecondaryText'
import InfoSection from '@/components/service-page/Info'
import Timeline from '@/components/Timeline'
import React from 'react'

export const metadata = {
    title: 'Roof, Siding, & Exterior Financing Options',
    description: 'Explore flexible financing options for your roofing and exterior projects with Hearth. Get personalized monthly payment plans — with rates as low as 0% APR for qualified customers.',
}

export default function page() {
    return (
        <div className='flex flex-col w-11/12 items-center justify-center mx-auto py-10'>
            <div className="text-center max-w-4xl">
                <HeaderText as='h1' className="font-semibold tracking-tight text-primaryblue pt-20">
                    Roof, Siding, & Exterior Financing Options
                </HeaderText>
                <SecondaryText className="mt-6 text-xl text-gray-600">
                    Explore flexible financing options for your roofing, siding, and exterior projects with Hearth. Get personalized monthly payment plans — with rates as low as 0% APR for qualified customers.                </SecondaryText>
            </div>
            <InfoSection
                title="Flexible Financing Solutions"
                mainContent="We understand that home improvement projects can be a significant investment. That's why we offer flexible financing options to help you manage the costs of your roofing and exterior projects. Whether you're looking for a new roof, siding installation, window replacement, or other exterior services, we have financing plans that fit your budget."
                // imgSrc="/images/financing/financing-graphic.webp" // Replace with your actual image
                imgSrc="/images/financing/test.webp" // Replace with your actual image

                imgAlt="Financing Options for Roofing and Exterior Projects graphic"
                bottomContent="With our financing solutions, you can start your project today and pay over time. Our team is here to guide you through the process and help you find the best financing option for your needs."
                className="mt-16 shadow-none"
                imageShadow={false}


            />

            <div
                className={`mx-auto w-5/6 flex flex-col lg:flex-row items-center justify-between pb-20`}
            >

                <div className=" max-w-3xl justify-start text-left">
                    <HeaderText  className={`mt-10 font-semibold `}>
                        Financing With Hearth
                    </HeaderText>
                    <SecondaryText className={`mt-10 font-medium`}>
                        See your personalized monthly payment options within minutes and without affecting your credit score. No prepayment penalties. No home equity required.
                        Hearth makes it easy for you to find monthly payment options for your project, with:

                        <br />

                    </SecondaryText>
                    <br />
                    <SecondaryText as='ul'>
                        <li className="list-disc ml-5">Loan amounts up to $250,000</li>
                        <li className="list-disc ml-5">Affordable monthly payment options</li>
                        <li className="list-disc ml-5">Funding within 1-3 days</li>
                        <li className="list-disc ml-5">No prepayment penalties</li>
                        <li className="list-disc ml-5">No home equity required</li>
                    </SecondaryText>


                    <SecondaryText>
                        Find convenient monthly payment options for your project. See your personalized payment plans without affecting your credit score now.

                    </SecondaryText>

                </div>
                <div className="flex justify-center sm:pr-5 pt-12">
                    <HearthFinanceCalculator />

                </div>
            </div>

            <Timeline
                title="The Financing Process"
                className="my-16 pb-12"
                steps={[
                    {
                        name: 'Apply for Financing',
                        description: 'Fill out a simple online application to see your personalized financing options.',
                        date: 'Step 1',
                        dateTime: '2023-01-01',
                    },
                    {
                        name: 'Review Your Options',
                        description: 'Explore various financing plans and choose the one that best fits your budget.',
                        date: 'Step 2',
                        dateTime: '2023-02-01',
                    },
                    {
                        name: 'Get Approved',
                        description: 'Receive quick approval and finalize your financing plan with our team.',
                        date: 'Step 3',
                        dateTime: '2023-03-01',
                    },
                    {
                        name: 'Start Your Project',
                        description: 'Once approved, you can start your roofing or exterior project with confidence.',
                        date: 'Step 4',
                        dateTime: '2023-04-01',
                    },
                ]}
            />


            <a
                href="https://app.gethearth.com/partners/paragon-exterior?utm_campaign=54118&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center mt-10 mb-10"
            >
                <img
                    src="https://app.gethearth.com/contractor_images/paragon-exterior/banner.jpg?color=zero_percent&size_id=700x110"
                    alt="Hearth 700x110"
                    style={{height: 110, width: 700}}
                />
            </a>


            <Row
                imageSrc='/images/dynamic/roof-replacement/roofing-replacement4.webp'

                title='Alternative Financing Options For Your Home'
                description={<>

                    <SecondaryText>
                        Here are other types of financing options you can explore for your home improvement projects. These options can help you manage costs and make your projects more affordable.
                    </SecondaryText>

                    <SecondaryText as='ol'>
                        <li className="list-decimal ml-5">Home Equity Loans: Borrow against the equity in your home to fund renovations.</li>
                        <li className="list-decimal ml-5">Personal Loans: Unsecured loans that can be used for any purpose, including home improvements.</li>
                        <li className="list-decimal ml-5">Credit Cards: Use credit cards for smaller projects or expenses, but be mindful of interest rates.</li>
                        <li className="list-decimal ml-5">Cash-Out Refinance: Refinance your mortgage to access cash for home improvements.</li>
                        <li className="list-decimal ml-5">Home equity lines of credit (HELOC): A HELOC is an open credit line that you can draw on as needed for a period of time (usually 10 years); then you repay the borrowed amount plus interest.</li>
                        <li className="list-decimal ml-5">Government Grants and Programs: Look for local or federal programs that offer financial assistance for home improvements.</li>
                    </SecondaryText>
                </>
                }
                className="my-20"
            />
            <div className='w-full mx-auto'>
                <GoogleReviews />

            </div>
            <div>
                <GetEstimate className="" />
            </div>
        </div>
    )
}
