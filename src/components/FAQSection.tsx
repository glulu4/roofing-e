
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderText from './HeaderText';
import SecondaryText from './SecondaryText';
import SecondaryHeader from './SecondaryHeader';

const FAQSection = ({
    faqs
}: { faqs: Array<{ question: string; answer: string }> }) => {
    // const faqs = [
    //     {
    //         question: "What is a clickwrap agreement?",
    //         answer: "A clickwrap agreement is a digital contract where users indicate consent by clicking a button or checking a box labeled 'I Agree,' 'Accept,' or similar. Unlike browsewrap agreements, clickwrap requires an active action from users, making them more legally enforceable."
    //     },
    //     {
    //         question: "Are clickwrap agreements legally binding?",
    //         answer: "Yes, clickwrap agreements are generally enforceable in court when properly implemented. They require users to take affirmative action to accept the terms, and our system provides the necessary evidence trail to demonstrate acceptance in court proceedings."
    //     },
    //     {
    //         question: "How does ClickWrap Nexus record consent?",
    //         answer: "We capture comprehensive evidence including the user's IP address, timestamp, unique identifiers, browser information, and the version of the agreement they accepted. This data is securely stored and can be exported as legally admissible evidence."
    //     },
    //     {
    //         question: "Can I use my existing terms of service?",
    //         answer: "Absolutely. ClickWrap Nexus allows you to upload and use your existing terms of service, privacy policy, or any other legal agreement. You can paste HTML content directly or upload files through our platform."
    //     },
    //     {
    //         question: "How difficult is it to implement on my website?",
    //         answer: "Implementation is straightforward. Simply add our lightweight JavaScript snippet to your website where you want the agreement to appear. Our documentation provides step-by-step guidance, and most customers complete integration in under 15 minutes."
    //     },
    //     {
    //         question: "What happens if I update my agreement?",
    //         answer: "When you update your agreement, the system automatically tracks it as a new version. You can configure whether existing users need to reaccept the updated terms. All version history is maintained for compliance purposes."
    //     }
    // ];


    return (
        <section className="">
            <div className="container px-4 md:px-6">
                {/* <div className="text-center max-w-[800px] mx-auto mb-12">
                    <HeaderText className=" font-bold tracking-tighter">Frequently Asked Questions</HeaderText>
                    <SecondaryText className="mt-4 text-muted-foreground md:text-lg">
                        Everything you need to know about ClickWrap Nexus and online contract compliance.
                    </SecondaryText>
                </div> */}

                <div className="mx-auto max-w-5xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem className='py-2' key={index} value={`faq-${index}`}>
                                <AccordionTrigger className="text-lg font-medium">
                                    <SecondaryHeader className="text-pretty font-semibold tracking-tight text-primaryblue">
                                        {faq.question}
                                    </SecondaryHeader>
                                    </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <SecondaryText className="text-muted-foreground">
                                    {faq.answer}
                                    </SecondaryText>
                                   
                                    </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
