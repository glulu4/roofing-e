
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import SecondaryText from './SecondaryText';
import SecondaryHeader from './SecondaryHeader';
import HeaderText from './HeaderText';


const FAQSection = ({
    title,
    faqs
}: {faqs: Array<{question: string; answer: string}>, title: string}) => {
    return (
        <section className="mx-auto w-11/12 sm:w-5/6 py-16 sm:py-24 ">
            <HeaderText as='h3' className='text-center mb-8 text-primaryblue'>
                {title}
            </HeaderText>
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-5xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem className='py-2' key={index} value={`faq-${index}`}>
                                <AccordionTrigger className="text-lg font-medium">
                                    <SecondaryHeader as='h3' className="text-pretty font-semibold tracking-tight text-primaryblue">
                                        {faq.question}
                                    </SecondaryHeader>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <SecondaryText as='p' className="text-muted-foreground">
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
