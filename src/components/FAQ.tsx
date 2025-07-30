import React from 'react'
import FAQSection from './FAQSection';

export default function FAQ({locationName}: {locationName: string}) {
    const faqData = [
        {
            question: `Do you offer roof repair near me in ${locationName}?`,
            answer: `Absolutely—our local crews respond fast to leaks, storm damage, and wear anywhere in ${locationName} and surrounding neighborhoods.`,
        },
        {
            question: "Are you licensed roofing contractors?",
            answer:
                "Yes. Paragon Exterior is fully licensed, insured, and one of the best roofing companies near you for residential roofing and solar‑ready installs.",
        },
        {
            question: "What roofing materials do you install?",
            answer:
                "From traditional asphalt shingles to metal, tile, and modern flat roofing—our versatile team handles it all.",
        },
        {
            question: "Do you offer emergency roof repair?",
            answer:
                "We do. Our emergency roofing contractors are on call for urgent repairs to protect your home from further damage.",
        },
        {
            question: "How do I know if I need a full roof replacement?",
            answer:
                "If your roof is over 15 years old, sagging, or leaking frequently, our roof replacement experts will assess and recommend a durable, long‑lasting solution.",
        },
        {
            question: "Do you offer financing options?",
            answer:
                "We offer flexible financing on roof repair, full residential roofing, and solar roofing projects—so you can get quality work today and pay over time.",
        },
        {
            question: `Do I need a permit to replace my roof in ${locationName}?`,
            answer: `In most cases, yes—you’ll need a permit for a full roof replacement in ${locationName}. But don’t worry—Paragon Exterior handles all permitting and code compliance so your project stays hassle-free and fully legal.`
        },
        {
            question: `How long does a roof replacement take in ${locationName}?`,
            answer: `Most roof replacements in ${locationName} are completed in 1–2 days, depending on the size and complexity of the roof. Our team ensures fast, clean work with minimal disruption to your home.`
        },
        {
            question: `What's the best time of year to get a roof replaced in ${locationName}?`,
            answer: `Spring and fall offer ideal roofing conditions in ${locationName}, but Paragon Exterior works year-round. We’ll plan your project around weather and material availability to ensure the best results.`
        },
        {
            question: `Do you offer financing options in ${locationName}?`,
            answer: `Yes—we offer financing for roof repairs and replacements in ${locationName}. You can get the work done now and pay over time with affordable monthly plans. Ask our team about pre-approval during your estimate.`
        }
    ];

    return (
        <FAQSection
            title='Frequently Asked Questions'
            faqs={faqData} />
    );
}
