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


const happyHomeownersIds = [
    // "1qsWizbGesUXANbPzGXlh_IVANL07cJ9G",
    // "12byGKsHbysKnAqU5I5KUUJWtI89PoM9O",
    // "1j7idLLqMLtPba_S0MjNVKGFDKN_N8RG5",
    // "1RWLTvFkgvJa5RxwXIDkN515xt3TJrE2n",
    // "16vBHNFNMz23tcwn_lFaPWMbGB90JcepT",
    // "16C4hdeyy5Z3h3sNSraAD9sELpyCgKYmF",
    // "15vfTIcx29szJ2P7n5kCPPyqR1d98euU1",
    // "15vfTIcx29szJ2P7n5kCPPyqR1d98euU1",
    // "1fauSfLhJgCfL3sMs2bkZLLNH_WdbFcOe",
    // "1-eKlmyRS-BLa_McM3f-LHbvUbDlcIivV",
    // "1-y1Mm99P2h2tUfOgKpmF3jb9lLtVudDE",
    // "14bCnqCpfu2MuDBf1pWsv1miCCeJBsSzA",
    // "1DiWZv91xO0y-d0cOCILKqXlwV0TOIGM0",
    // "1DwwUtmtyz8QnctIA1MnL2C5lMxzMfavV",
    // "1KaP-Nrx7y7szReLzQEhLYzx4aKYhBoec",
    // "1THm9TUPI-bQMMQU2j0Rrs0VapbcdGTtT",
    // "1fMO0k9IB08J9fBPWdyC_mPS9PL_B01xX",
    // "1gnLPwPSTyre6ErOUuG7T5OM-3DmWDybI",
    // "1lL1VRW3ab6VlE2q_BeUf7aK7dw8RRl0p",
    // "1lt2M9wHPcp--QJ8fofnqDOURWJ18kxjy",
    // "1rVqcXmCSl5coolPvy0DiSwXm2W2bWITC",
    // "1riN8d176lIhkmSf8T-zEPZxLPKGVsmR5",



    "11YkKpqPK7GzQefWmCVjeEcwfFqVjgX0a",
    "16N9Bt_5Lx1pcVsaEPwp46fVsWkpuO5tH",
    "1OYRWkpWxkf2MiIh0Q1Ga3MquS7hdBAAk",
    "1WYqqkOtSdOWC0OP9CKoYDOfFDrSsoEbr",
    "1bFUgv_ZdPa03CRpfhTqMD_MrbD_ID2WH",
    "1hm8u7BdHzL3lQu7ULhUWMfzbDJqrQL7M",
    "1kPNF3PlXA-DF4Br3zIXtXI6rfBYKzmTG",
    "1lUrI4MvBCid4dJoP4hTNOEtprYjUj_yL",
    "1nrS5xaCq1DwKzBzGEr1Yt8xPPkbtY7eh",
    "1ntHvWKdk22wMASLKjdfoJF4N9zM07l2R",
    "1pOg7LBi182PwS_EVtcrzYL-2t8U5_lL2",
    "1rDETO_p-gxO6cpB0Zs8y_REf529VWtJ4",
    "1wSfHQHzkCJ0q4LGxPt897BNZoLXYHCnO",
    "15oP6UshhplxyQSWhXmCO9XhlDv1IvNU1",
]




export const metadata = {
    title: 'Gallery',
    description: 'Explore our collection of stunning roofing, siding, and exterior projects. Each image showcases our commitment to quality and craftsmanship.',
}

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

            <div className="container mx-auto py-12">
                <div className="text-center mb-12">
                    <HeaderText as='h1' className=" font-bold text-primaryblue">
                        Happy Homeowners
                    </HeaderText>
                </div>

                <Gallery images={happyHomeownersIds} />
            </div>

            <GetEstimate/>
        </div>
    )
}