import HeaderText from '@/components/HeaderText'
import Gallery from '@/components/Gallery'
import SecondaryText from '@/components/SecondaryText'
import GetEstimate from '@/components/landing-ui/GetEstimate'

const galleryImages = [
    "1AQKgiCWAloQ-OBU03HB5hXQY1n-aewBj",
    "1Bl2FGRLVy3FoVND_0ADtDxtQc6bNu_Ma",
    "1MtgBFw0nH5q63aPFZBQvZ957baGf-IYI",
    "1KD9hlGXKZj1eVztonn7TGDsm_8ca3Qsh",
    "1f1MvvwjYz3DmoUmvkrTCg0EfJvOOLlCx",
    "1shcjUVYAjCvuUqPatT8kojZTvZ5vByTE",
    "15FTl7hUEGswhRDKFlUnWohoeqPXgT-2o",
    '1ZaIXCnbfqDDe4ltNmtPM2Mdmj-nAGltC',
    '1sNaipBqptZM0xadQOR6M1Jj0FIxe37-l',
    '1k_k96lvfxAh-QgywxvE1yUfRTlh5b9sP',
    '1BINv6MbyuiDcmhlHjFhLHde-wXnAeYcS',
    '1U1KAJCbgpQ5rf3IkULYz93Yh0uIwwQqJ',
    '10Vo-cFmnEKN182Qs7E0kR9Vo0jmYyrWv',
    '1Kbi27TYTOrKHNYKIfvn51exOB81vBOuV',
    '15hk5XVH06Vr_7XRml7aplExRv6eE70kI',
    '1aMIfq652-9XlcG7OGkCMTZDeoO0Omtsl',
    '1jMQmSUDbTOTv2V2Is5BIwV4CIuRkiliX',
    '1-Ux1EDIgIwyo2NjGv7PzSceBd3pRNTLV',
    '1XYYxcNo0vlZsqMCWldvpeIp4mNTno1fV',
    '1-qaUyMFZWo4PNFlqJXZjwALFF2AvmU7S',
    '1VHPKURtwOgtCkYbdGmBfKlA7UPIN4VpI',
    '1TdpH_AGezEfuy44PzFR7V_Rao3KYG1xo',
    '15UQXczLEJofjf0__bcurUseLMP_4L5TT',
    '11RuTGwWvf1tUSj5do8tfsZ2_urxr2gZ6',
    '1XIlLs-41-QBVEYlM4LBleh0nMF6-FxzJ',
    '17H70hibhbJzTlSvKaYPbnoFNPegsVKGu',
    '1pZ4vyM8dsxeYuK3zE7RSYkzToMNB83hb',
    "1pI_2pYGjxKvzjIWzMzgCAXaBYMII1j_-",
    "1TuqzUxAYMwHtyHusjQXmNwrABFC7Sn0B",
]

//https://drive.google.com/file/d/1Bl2FGRLVy3FoVND_0ADtDxtQc6bNu_Ma/view?usp=sharing

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <HeaderText as='h1' className=" font-bold text-primaryblue">
                        Gallery
                    </HeaderText>
                    <SecondaryText className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore our collection of stunning roofing and siding projects. Each image showcases our commitment to quality and craftsmanship.
                    </SecondaryText>
                </div>

                <Gallery images={galleryImages} />
            </div>

            <GetEstimate/>
        </div>
    )
}