import Image from "next/image";

export default function StickyButton() {
    return (
        <div className="fixed bottom-4 left-4 z-50">
            <button className=" w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none">
                <Image
                    src="/images/gaf.png" // Replace with your image file path
                    alt="GAF certification badge"
                    width={64} // Match the width of the button
                    height={64} // Match the height of the button
                    className="rounded-full object-cover"
                />
            </button>
        </div>
    );
}
