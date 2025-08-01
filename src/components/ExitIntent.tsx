"use client"
import {useExitIntent} from 'use-exit-intent'
import {useState} from 'react'
import {Clock, Gift, X} from 'lucide-react'
import Image from 'next/image'
import HeaderText from './HeaderText'

export default function ExitIntentPopup() {
    const [showModal, setShowModal] = useState(false)

    const {unsubscribe, registerHandler} = useExitIntent({
        "cookie": {
            "daysToExpire": 30,
            "key": "use-exit-intent"
        },
        "desktop": {
            "triggerOnIdle": false,
            "useBeforeUnload": true,
            "triggerOnMouseLeave": true,
            "delayInSecondsToTrigger": 0.5,

        },
        "mobile": {
            "triggerOnIdle": false,
            "delayInSecondsToTrigger": 1
        }
    })

    registerHandler({
        id: 'openModal',
        handler: () => {
            setShowModal(true)
            // unsubscribe('openModal') // Unsubscribe after showing the modal
        }
    })

    const [email, setEmail] = useState('')

    const handleClaim = () => {


        if (email) {
            // alert(`Gift claimed for: ${email}`)
            // setShowModal(false)

            fetch('/api/exit-intent-reward', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                })
            })
                .then((response) => {
                    if (response.ok) {
                        setShowModal(false)
                        alert('Gift claimed successfully! Check your email for details.')
                        return response.json();
                    } else {
                        alert('Failed to claim gift. Please try again later.')
                        console.log('Error:', response.statusText);

                    }
                })
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('An error occurred while claiming the gift. Please try again later.');
                })
        }
        else {
            alert('Please enter a valid email address.');
        }
    }

    const handleClose = () => {
        setShowModal(false)
    }


    return (

        <>
            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl max-h-screen my-auto  transform transition-all duration-300 scale-100 opacity-100">
                        <div className="flex flex-col md:flex-row">
                            {/* Left side - Image */}
                            {/* <div className="md:w-1/2 flex items-center justify-center"> */}
                                <Image
                                    src="/images/window/window-hero2.webp"
                                    alt="Exclusive Gift"
                                    width={500}
                                    height={500}

                                    className="md:w-1/2 hidden md:block object-fill shadow-lg rounded-tl-2xl rounded-bl-2xl"
                                />
                            {/* </div> */}

                            {/* Right side - Content */}
                            <div className="md:w-1/2 p-8 relative">
                                <button
                                    onClick={handleClose}
                                    aria-label="Close popup"
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <span className="sr-only">Close popup</span>
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>

                                <div className="mt-4">
                                    <HeaderText as='p' variant='small' className="font-bold text-primaryblue mb-4">
                                        Don&apos;t Leave Empty-Handed
                                    </HeaderText>

                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-primaryblue mb-3">
                                            🎁 Get 15% off your next project
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            No Spam. No Marketing. Just 15% off.
                                        </p>

                                    </div>

                                    <div className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                                        />

                                        <button
                                            onClick={handleClaim}
                                            className="w-full bg-gradient-to-r from-primaryblue via-blue-600 to-amber-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                        >
                                            🎁 Yes! Claim My FREE Gift
                                        </button>

                                        <button
                                            onClick={handleClose}
                                            className="w-full text-gray-500 hover:text-gray-700 py-2 transition-colors text-sm"
                                        >
                                            No thanks, I&apos;ll pass on this free offer
                                        </button>
                                    </div>

                                    <p className="text-xs text-gray-400 mt-4 text-center">
                                        No spam. Unsubscribe anytime. Your privacy is protected.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
