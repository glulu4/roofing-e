export const roofingServicePages: {
    [key: string]: {
        pageMetaTitle: string;
        pageMetaDescription: string;

        coverImg: string;
        para1Title: string;
        para1Text: string;
        para1Img: string;
        para2Title: string;
        para2Text: string;
        para2Img: string;
        serviceTitle2: string;
    };
} = {

    "roof-repair": {
        pageMetaTitle: "Roof Repair | Paragon Exterior",
        pageMetaDescription: "Expert roof repair services to restore your roof's integrity and protect your home.",
        coverImg: "/images/roofing/roof-repair.jpg",
        para1Title: "Comprehensive Roof Repair Solutions",
        para1Text: "Our roof repair services address leaks, damage, and wear to ensure your roof is in top condition.",
        para1Img: "/images/roofing/roof-repair-1.jpg",
        para2Title: "Quality Materials and Craftsmanship",
        para2Text: "We use high-quality materials and skilled craftsmanship for long-lasting repairs.",
        para2Img: "/images/roofing/roof-repair-2.jpg",
        serviceTitle2: "Roof Repair Services",
    },
    "roof-leak-repair": {
        pageMetaTitle: "Roof Leak Repair Services",
        pageMetaDescription: "Specialized roof leak repair services to prevent water damage and maintain your home's safety.",
        coverImg: "/images/roofing/roof-leak-repair.jpg",
        para1Title: "Swift Leak Detection and Repair",
        para1Text: "Our team quickly identifies and repairs roof leaks to protect your home from water damage.",
        para1Img: "/images/roofing/roof-leak-repair-1.jpg",
        para2Title: "Preventative Measures for Longevity",
        para2Text: "We implement preventative measures to ensure your roof remains leak-free for years to come.",
        para2Img: "/images/roofing/roof-leak-repair-2.jpg",
        serviceTitle2: "Roof Leak Repair Services",
    },


}


export type RoofingServicePage = typeof roofingServicePages[number];