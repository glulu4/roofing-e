'use client'

import Image from 'next/image'
import {useState} from 'react'

interface GalleryProps {
    images: string[]
    title?: string
}

export default function Gallery({images, title}: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <>
            <div className="w-full max-w-6xl mx-auto p-6">
                {title && (
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((imageId, index) => (
                        <div
                            key={imageId}
                            className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-200"
                            onClick={() => setSelectedImage(imageId)}
                        >
                            <Image
                                src={`https://drive.google.com/uc?id=${imageId}`}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <Image
                            src={`https://drive.google.com/uc?id=${selectedImage}`}
                            alt="Enlarged gallery image"
                            width={800}
                            height={600}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    )
}