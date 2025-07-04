import React from 'react'
import FAQSection from './FAQSection';

export default function FAQ({ locationName}: { locationName: string }) {
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
    ];

    return (
        <FAQSection 
        title='Frequently Asked Questions'

        faqs={faqData} />
        // <section>
        //     <HeaderText as="h2">Frequently Asked Questions</HeaderText>
        //     <ul className="mt-4 space-y-4">
        //         {faqData.map((faq, index) => (
        //             <li key={index}>
        //                 <HeaderText variant='small' as='h3'>{faq.question}</HeaderText>
        //                 <SecondaryText>{faq.answer}</SecondaryText>
        //             </li>
        //         ))}
        //     </ul>
        // </section>
    );
}
