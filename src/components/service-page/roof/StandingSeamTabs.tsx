"use client"
import React, {useState} from 'react';
import HeaderText from '@/components/HeaderText';
import SecondaryText from '@/components/SecondaryText';

const tabData = [
    {
        key: 'product-families',
        label: 'Product Families',
        items: [
            {
                title: 'Structural',
                content:
                    'These systems are typically used on lower sloped roofs, often down to ¼:12. They are considered Hydrostatic, which means they can keep buildings watertight even when they are submerged underwater for brief periods of time. These products can be used in either open framing or solid deck applications.'
            },
            {
                title: 'Architectural',
                content:
                    'These systems are commonly used on slopes of 3:12 or greater. They are considered Hydrokinetic which means that they can keep buildings watertight while water is flowing over them as opposed to the Structural systems which can accommodate water submersion. Some panel styles in this family have load-carrying capability, others do not.'
            }
        ]
    },
    {
        key: 'engagement-method',
        label: 'Engagement Method',
        items: [
            {
                title: 'Snapped',
                content:
                    'Snapped panel systems consist of a male and female leg. Once the legs are properly engaged, pressure is applied and the panels snap together to complete the installation sequence.'
            },
            {
                title: 'Mechanically Seamed',
                content:
                    'Mechanically seamed systems require the use of a powered seaming machine after panel installation to ensure proper performance.'
            }
        ]
    },
    {
        key: 'attachment-method',
        label: 'Attachment Method',
        items: [
            {
                title: 'Clipless',
                content:
                    'Clipless standing systems are fastened through a pre-punched fastening flange. These flanges typically have repeating slots every 2-4” to facilitate attachment to the roofing deck, most often plywood.'
            },
            {
                title: 'Clipped',
                content:
                    'Clipped systems consist of a clip that is integrated into the male/female panel legs and is then attached to the deck or purlins.'
            }
        ]
    },
    {
        key: 'panel-styles',
        label: 'Panel Styles',
        items: [
            {
                title: 'Trapezoidal',
                content:
                    'Trapezoidal panels are the most cost-effective standing seam panel style; however, due to the large trapezoidal shape, they aren’t widely used in high visibility architectural applications or those involving valley conditions.'
            },
            {
                title: 'Vertical Leg - Non Symmetrical',
                content:
                    'As the name implies, vertical leg panels have a vertical leg at the connection of the male/female leg. This family of panels can be snapped or mechanically seamed.'
            },
            {
                title: 'T Panel - Symmetrical Standing Seam',
                content:
                    'T style panels combine the look and functionality of a vertical leg but have a separate batten cap that is then mechanically seamed in place. These panels allow for the easy removal and replacement of a panel in the field of the roof.'
            }
        ]
    },
    {
        key: 'installation-approach',
        label: 'Installation Approach',
        items: [
            {
                title: 'Symmetrical',
                content:
                    'Both vertical legs on symmetrical panels are the same. This feature allows for individual panel replaceability after installation and solves a long-standing industry challenge. Additionally, these panels allow contractors to start at any (or multiple) points on the roof providing greater flexibility during installation.'
            },
            {
                title: 'Non-Symmetrical',
                content:
                    'The legs for non-symmetrical panels are different. This feature requires non-symmetrical panels to be installed progressively, typically left to right. Consequently, non-symmetrical systems can require the removal of unaffected panels during building repairs or modifications.'
            }
        ]
    },
    {
        key: 'curved-roofing',
        label: 'Curved Roofing',
        items: [
            {
                title: 'Curved Metal Panels',
                content:
                    "Curves are in! McElroy Metal offers five distinct standing seam systems that can be curved right on the job site, which lowers transportation costs and ensures a proper fit. McElroy's standing seam systems that can be curved are Maxima 1.5, Maxima ADV, 138T, 238T, and Medallion I."
            }
        ]
    }
];

export default function StandingSeamTabs({className}: {className?: string}) {
    const [activeTab, setActiveTab] = useState(tabData[0].key);

    const currentTab = tabData.find(tab => tab.key === activeTab);

    return (
        <div className={`w-5/6 mx-auto ${className}`}>
            <HeaderText className="text-center mb-6">Standing Seam Metal Roofing Systems Overview</HeaderText>
            <SecondaryText className="text-center mb-8">
                There are many nuances within the product family of standing seam. Click through the buttons below to learn more about the differences between panels and system types.
            </SecondaryText>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabData.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`border rounded px-4 py-2 ${activeTab === tab.key ? 'bg-primaryblue text-white' : 'border-primaryblue text-primaryblue '
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {currentTab && (
                <div>
                    <HeaderText variant="small" className="mb-4">
                        {currentTab.label}
                    </HeaderText>
                    <ul className="space-y-4">
                        {currentTab.items.map((item, index) => (
                            <li key={index}>
                                <h4 className="font-bold">{item.title}</h4>
                                <SecondaryText>{item.content}</SecondaryText>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
