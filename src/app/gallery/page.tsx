import HeaderText from '@/components/HeaderText'
import Gallery from '@/components/Gallery'
import SecondaryText from '@/components/SecondaryText'
import GetEstimate from '@/components/landing-ui/GetEstimate'

/**
 * 
 
https://drive.google.com/file/d/1T6RpYWQLggu75-NEP8JQAbHmAlWRCiEG/view?usp=sharing


*/

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

    "12tl6lPZXQDGFhaPlx4Zbfibp4nlWQiT2",
    "13jLeXE-nQrQvzxUdvRJ6wR6pTsISUk7B",
    "1FSozpB31CPKOw6V2fiHl_mm5vQnld-ka",
    "1FVRIZMliwfcFCuF-NrpjPFJzcuSZzPBu",
    "1Ki1OqpbXHkd0jOnaxV_qSGUBdP_LhWrM",
    "1PPNRUUb8iuMBfyodo31icCx0PZW4VnS0",
    "1Q2FEAHcqKkVXj6ZSzMtOGuRPFBTjhJN6",
    "1U7zbXCPszuwoYzC5pmWd9sd2n1XK_hRa",
    "1UD4pfp5lwwopfCHejR-lP-M4VEJg1XS4",
    "1VDGGr9QwAXeDUv6IbvHNW8NrIPbMfPF_",
    "1WeHGhYhLEosbVd69Eq30FlNR3gPHveQ5",
    "1_vpJ2f_QN6F-6L_eftKM1nQ6vcFOEpPU",
    "1Dy0wYsgS5ksXSi1zziEDSzw9xbV023c3",
    "1ECt1M5JYcLOKomDnSyq4XysPto4M6Qfw",
    "1JN1senvpL_SejCena_Rujxagh-qmXsJ6",
    "1KDIP0M4rpDT5cWg2g3iPQK-X4otmG4pH",
    "1KfslbZNp_jLwPfu3b4J4gk-cfisdhnaE",
    "1Rlcwif-lvctK8HtXkzeaJ4ckBMWvXPpG",
    "1_GqF1jSd-401TYvqLY9-PHgMuMWWgMv5",
    "1mAFdOBjAc4GQEgUKZMTSk8qx2ryMh0Jw",
    "1nmo_0w46EivBpIJEF5emkgs52WaKmeOL",
    "1nsysQHaY1wTiAt3WRmcjhRowEDTpQ1EO",
    "1nxXLkUB6EDPkkGepJLaOgIJIfke5rGij",
    "1pOPLhJfAaRtDM-LlRYqAzDDYkQ2xOF66",
    "1cwVGrkqTZhNiRhVECUMcJrWitNDBMq8u",
    "1o59h6IoCOysCpCEUT5KIh8ZND6PS3EzP",
    "1qIR8Qk8iIl3bOs5yG-aZ7YDJgjeenp0o",
    "1rlxw_B4UFMqvAdittpCQwCdyOLLjBxV4",
    "1vdQmPY3yU_4MQEwjLq59m7X-VBzyBxwz",
    "1w53o4w1q_K_JXwDiZn3nIBFFWF6OLRDE",
    // "1x9U8arTC2W8EINmMjEX3GvrMcVKdKnid",
    "1xUikWI4xFnK09t_zqXdLJuaRN8zmucR5",
    "1zk7bYgI-9-LesHPxkcmi1s7_idfqOKtw"
]


const happyHomeownersIds = [
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
    title: 'Gallery | Roofing & Siding Projects',
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