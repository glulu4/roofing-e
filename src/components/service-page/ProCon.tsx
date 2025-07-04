import React from 'react';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

interface ProConProps {
    title: string;
    benefits: {title: string; content: string}[];
    drawbacks: {title: string; content: string}[];
}

export default function ProCon({title, benefits, drawbacks}: ProConProps) {
    return (
        <div className="mt-16 mx-auto w-5/6">
            <HeaderText className="text-center mb-8">{title}</HeaderText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <HeaderText variant="small" className="mb-4 text-green-700">Benefits</HeaderText>
                    <SecondaryText>
                        <ul className="list-disc list-inside space-y-2">
                            {benefits.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.title}:</strong> {item.content}
                                </li>
                            ))}
                        </ul>
                    </SecondaryText>
                </div>

                <div>
                    <HeaderText variant="small" className="mb-4 text-red-700">Potential Drawbacks</HeaderText>
                    <SecondaryText>
                        <ul className="list-disc list-inside space-y-2">
                            {drawbacks.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.title}:</strong> {item.content}
                                </li>
                            ))}
                        </ul>
                    </SecondaryText>
                </div>
            </div>
        </div>
    );
}
