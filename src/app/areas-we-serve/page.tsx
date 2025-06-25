// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }
import React from 'react';
import {MapPin, Phone, Mail, MapIcon} from 'lucide-react';
import Link from 'next/link';
import { serviceAreas as serviceAreaSlugs } from '../../../public/service-areas';
import HeaderText from '@/components/HeaderText';
import {BsBodyText} from 'react-icons/bs';
import SecondaryHeader from '@/components/SecondaryHeader';
import SecondaryText from '@/components/SecondaryText';
import GetEstimate from '@/components/landing-ui/GetEstimate';

const nameToSlug: Record<string, string> = {};
Object.entries(serviceAreaSlugs).forEach(([slug, value]) => {
    nameToSlug[value.name.toLowerCase()] = slug;
});

const ServiceAreasPage = () => {
    const serviceAreas = [
        {
            county: "Bucks County, PA",
            cities: [
                {name: "Bensalem", zip: "19020"},
                {name: "Bristol", zip: "19007"},
                {name: "Buckingham", zip: "18912"},
                {name: "Chalfont", zip: "18914"},
                {name: "Doylestown", zip: "18901, 18902"},
                {name: "Feasterville-Trevose", zip: "19053, 19054"},
                {name: "Langhorne", zip: "19047"},
                {name: "Levittown", zip: "19054, 19055, 19056, 19057"},
                {name: "Lower Southampton", zip: "19053"},
                {name: "Middletown", zip: "19047"},
                {name: "Newtown", zip: "18940"},
                {name: "Northampton", zip: "18966"},
                {name: "Perkasie", zip: "18944"},
                {name: "Quakertown", zip: "18951"},
                {name: "Richboro", zip: "18954"},
                {name: "Sellersville", zip: "18960"},
                {name: "Upper Southampton", zip: "18966"},
                {name: "Warminster", zip: "18974"},
                {name: "Warrington", zip: "18976"},
                {name: "Washington Crossing", zip: "18977"},
                {name: "Yardley", zip: "19067"},
                {name: "Morrisville", zip: "19067"},
                {name: "New Hope", zip: "18938"},
                {name: "Penndel", zip: "19047"}
            ]
        },
        {
            county: "Montgomery County, PA",
            cities: [
                {name: "Abington", zip: "19001"},
                {name: "Ambler", zip: "19002"},
                {name: "Ardmore", zip: "19003"},
                {name: "Bala Cynwyd", zip: "19004"},
                {name: "Blue Bell", zip: "19422"},
                {name: "Bryn Mawr", zip: "19010"},
                {name: "Cheltenham", zip: "19012"},
                {name: "Collegeville", zip: "19426"},
                {name: "Conshohocken", zip: "19428"},
                {name: "East Norriton", zip: "19401"},
                {name: "Elkins Park", zip: "19027"},
                {name: "Fort Washington", zip: "19034"},
                {name: "Glenside", zip: "19038"},
                {name: "Hatboro", zip: "19040"},
                {name: "Hatfield", zip: "19440"},
                {name: "Horsham", zip: "19044"},
                {name: "Jenkintown", zip: "19046"},
                {name: "King of Prussia", zip: "19406"},
                {name: "Lansdale", zip: "19446"},
                {name: "Lower Merion", zip: "19066"},
                {name: "Narberth", zip: "19072"},
                {name: "Norristown", zip: "19401, 19403, 19404"},
                {name: "North Wales", zip: "19454"},
                {name: "Plymouth Meeting", zip: "19462"},
                {name: "Pottstown", zip: "19464, 19465"},
                {name: "Roslyn", zip: "19001"},
                {name: "Royersford", zip: "19468"},
                {name: "Skippack", zip: "19474"},
                {name: "Springfield", zip: "19064"},
                {name: "Upper Dublin", zip: "19034"},
                {name: "Upper Merion", zip: "19406"},
                {name: "Villanova", zip: "19085"},
                {name: "Willow Grove", zip: "19090"},
                {name: "Wynnewood", zip: "19096"}
            ]
        },
        {
            county: "Delaware County, PA",
            cities: [
                {name: "Aston", zip: "19014"},
                {name: "Broomall", zip: "19008"},
                {name: "Chester", zip: "19013, 19016"},
                {name: "Clifton Heights", zip: "19018"},
                {name: "Collingdale", zip: "19023"},
                {name: "Darby", zip: "19023"},
                {name: "Drexel Hill", zip: "19026"},
                {name: "Folcroft", zip: "19032"},
                {name: "Glenolden", zip: "19036"},
                {name: "Haverford", zip: "19041"},
                {name: "Havertown", zip: "19083"},
                {name: "Lima", zip: "19037"},
                {name: "Marple", zip: "19008"},
                {name: "Media", zip: "19063"},
                {name: "Morton", zip: "19070"},
                {name: "Newtown Square", zip: "19073"},
                {name: "Norwood", zip: "19074"},
                {name: "Radnor", zip: "19087"},
                {name: "Ridley Park", zip: "19078"},
                {name: "Sharon Hill", zip: "19079"},
                {name: "Springfield", zip: "19064"},
                {name: "Swarthmore", zip: "19081"},
                {name: "Upper Darby", zip: "19082"},
                {name: "Wayne", zip: "19087"},
                {name: "Yeadon", zip: "19050"},
                {name: "Brookhaven", zip: "19015"},
                {name: "Prospect Park", zip: "19076"}
            ]
        },
        {
            county: "Chester County, PA",
            cities: [
                {name: "Berwyn", zip: "19312"},
                {name: "Coatesville", zip: "19320"},
                {name: "Downingtown", zip: "19335"},
                {name: "Exton", zip: "19341"},
                {name: "Great Valley", zip: "19355"},
                {name: "Kennett Square", zip: "19348"},
                {name: "Malvern", zip: "19355"},
                {name: "Oxford", zip: "19363"},
                {name: "Paoli", zip: "19301"},
                {name: "Parkesburg", zip: "19365"},
                {name: "Phoenixville", zip: "19460"},
                {name: "Spring City", zip: "19475"},
                {name: "Thorndale", zip: "19372"},
                {name: "Tredyffrin", zip: "19301"},
                {name: "West Chester", zip: "19380, 19382, 19383"},
                {name: "Westtown", zip: "19395"},
                {name: "Honey Brook", zip: "19344"},
                {name: "Avondale", zip: "19311"},
                {name: "West Grove", zip: "19390"},
                {name: "Elverson", zip: "19520"},
                {name: "Atglen", zip: "19310"}
            ]
        },
        {
            county: "Philadelphia County, PA",
            cities: [
                {name: "Philadelphia", zip: "19101-19154"},
                {name: "Center City", zip: "19102, 19103, 19107"},
                {name: "South Philadelphia", zip: "19145, 19146, 19147, 19148"},
                {name: "North Philadelphia", zip: "19121, 19122, 19132, 19133"},
                {name: "West Philadelphia", zip: "19104, 19131, 19139, 19143"},
                {name: "Northeast Philadelphia", zip: "19114, 19115, 19135, 19136"},
                {name: "Northwest Philadelphia", zip: "19118, 19119, 19138, 19141"},
                {name: "Germantown", zip: "19144"},
                {name: "Manayunk", zip: "19127"},
                {name: "Chestnut Hill", zip: "19118"},
                {name: "Mount Airy", zip: "19119"},
                {name: "Fishtown", zip: "19125"},
                {name: "Northern Liberties", zip: "19123"},
                {name: "University City", zip: "19104"},
                {name: "Kensington", zip: "19125"},
                {name: "Port Richmond", zip: "19134"}
            ]
        },
        {
            county: "Camden County, NJ",
            cities: [
                {name: "Camden", zip: "08101, 08102, 08103, 08104, 08105"},
                {name: "Cherry Hill", zip: "08002, 08003, 08034"},
                {name: "Pennsauken", zip: "08110"},
                {name: "Gloucester City", zip: "08030"},
                {name: "Collingswood", zip: "08108"},
                {name: "Haddon Heights", zip: "08035"},
                {name: "Haddonfield", zip: "08033"},
                {name: "Voorhees", zip: "08043"},
                {name: "Lindenwold", zip: "08021"},
                {name: "Berlin", zip: "08009"},
                {name: "Clementon", zip: "08021"},
                {name: "Laurel Springs", zip: "08021"},
                {name: "Magnolia", zip: "08049"},
                {name: "Mount Ephraim", zip: "08059"},
                {name: "Oaklyn", zip: "08107"},
                {name: "Pine Hill", zip: "08021"},
                {name: "Runnemede", zip: "08078"},
                {name: "Somerdale", zip: "08083"}
            ]
        },
        {
            county: "Burlington County, NJ",
            cities: [
                {name: "Mount Laurel", zip: "08054"},
                {name: "Evesham", zip: "08053"},
                {name: "Moorestown", zip: "08057"},
                {name: "Willingboro", zip: "08046"},
                {name: "Burlington", zip: "08016"},
                {name: "Cinnaminson", zip: "08077"},
                {name: "Delran", zip: "08075"},
                {name: "Florence", zip: "08518"},
                {name: "Maple Shade", zip: "08052"},
                {name: "Mount Holly", zip: "08060"},
                {name: "Palmyra", zip: "08065"},
                {name: "Pemberton", zip: "08068"},
                {name: "Riverside", zip: "08075"},
                {name: "Riverton", zip: "08077"},
                {name: "Westampton", zip: "08060"},
                {name: "Beverly", zip: "08010"},
                {name: "Bordentown", zip: "08505"},
                {name: "Edgewater Park", zip: "08010"}
            ]
        },
        {
            county: "Gloucester County, NJ",
            cities: [
                {name: "Deptford", zip: "08096"},
                {name: "Washington Township", zip: "08080"},
                {name: "Glassboro", zip: "08028"},
                {name: "Woodbury", zip: "08096"},
                {name: "West Deptford", zip: "08066"},
                {name: "Pitman", zip: "08071"},
                {name: "Sewell", zip: "08080"},
                {name: "Turnersville", zip: "08012"},
                {name: "Williamstown", zip: "08094"},
                {name: "Clayton", zip: "08312"},
                {name: "Franklinville", zip: "08322"},
                {name: "Mullica Hill", zip: "08062"},
                {name: "National Park", zip: "08063"},
                {name: "Wenonah", zip: "08090"},
                {name: "Westville", zip: "08093"},
                {name: "Woodbury Heights", zip: "08097"}
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white ">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primaryblue via-blue-900 to-indigo-900 ">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
                    <div className="mb-8">
                        <HeaderText as='h1' className="font-bold text-white mb-6 leading-tight">
                            Areas We <span className="text-amber-500">Serve</span>
                        </HeaderText>
                        <HeaderText variant='small' className=" text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            Professional roofing, siding, and exterior services across the Greater Philadelphia region
                        </HeaderText>
                    </div>

                    <div className="flex w-fit mx-auto flex-col md:flex-row justify-start items-start sm:items-center sm:justify-center gap-8 mt-12">
                        <div className="flex items-center  gap-3 text-white justify-start">
                            <MapPin className="h-8 w-8 text-blue-300" />
                            <div className="text-left">
                                <p className="font-semibold text-lg">Service Headquarters</p>
                                <p className="text-blue-100">1 Neshaminy Interplex #103, Feasterville, PA</p>
                            </div>
                        </div>
                        <div className="flex items-center  gap-3 text-white justify-start">
                            {/* <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center"> */}
                                {/* <span className="text-lg font-bold">50</span> */}
                                <MapIcon className="h-8 w-8 text-blue-300" />
                            {/* </div> */}
                            <div className="text-left">
                                <p className="font-semibold text-lg">50 Mile Service Radius</p>
                                <p className="text-blue-100">Comprehensive coverage area</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Introduction */}
                <div className="text-center mb-16 py-16">
                    <HeaderText as='h2' className="text-4xl font-bold text-gray-900 mb-6">
                        Trusted Roofing Contractors and Roofing Expererts Solutions Across <span className="text-amber-500">8 Counties</span>
                    </HeaderText>
                    <SecondaryText className=" text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        From bustling Philadelphia neighborhoods to quiet suburban communities, Paragon Exterior brings
                        expert roofing, siding, and exterior services to homeowners throughout the Delaware Valley region.
                    </SecondaryText>
                </div>

                {/* Service Areas Grid */}
                <div className="space-y-8">
                    {serviceAreas.map((area, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                                {/* County Header */}
                                <div className="bg-gradient-to-r from-primaryblue to-indigo-800 px-8 py-6">
                                    <HeaderText variant='small' className="font-bold text-white flex items-center gap-3">
                                        {area.county}
                                    </HeaderText>
                                </div>

                                {/* Cities Grid */}
                                <div className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {area.cities.map((city, cityIndex) => {
                                            const slug = nameToSlug[city.name.toLowerCase()];
                                            return (
                                                <Link
                                                    key={cityIndex}
                                                    href={slug ? `/service-area/${slug}` : '#'}
                                                    className="group/city p-4 rounded-lg bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-200"
                                                >
                                                    <div className="flex items-start gap-2">
                                                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/city:bg-blue-600 transition-colors mt-2 flex-shrink-0"></div>
                                                        <div className="flex-1 min-w-0">
                                                            <span className="text-gray-800 group-hover/city:text-blue-700 font-semibold text-sm block">
                                                                {city.name}
                                                            </span>
                                                            <span className="text-gray-500 group-hover/city:text-blue-500 text-xs">
                                                                {city.zip}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <GetEstimate/>
                {/* <div className="mt-20">
                    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                Whether you need roof repairs, complete roof replacement, siding installation, or any exterior work,
                                our expert team is ready to serve your community with top-quality craftsmanship.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                                <a
                                    href="tel:+12674973183"
                                    className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                                >
                                    <Phone className="h-6 w-6" />
                                    Call Now for Free Estimate
                                </a>
                                <a
                                    href="mailto:info@paragonexterior.com"
                                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-3"
                                >
                                    <Mail className="h-6 w-6" />
                                    Get Quote Online
                                </a>
                            </div>
                        </div>

                        <div className="absolute top-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 right-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
                    </div>
                </div> */}

                {/* Why Choose Us Section */}
                {/* <div className="mt-20 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">
                        Why Homeowners Choose <span className="text-blue-600">Paragon Exterior</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expertise</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Deep understanding of local building codes, weather patterns, and architectural styles
                                across the Delaware Valley region.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Premium materials, expert installation, and comprehensive warranties ensure
                                your investment is protected for years to come.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clear communication, respect for your property, and dedication to customer
                                satisfaction on every project, big or small.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ServiceAreasPage;