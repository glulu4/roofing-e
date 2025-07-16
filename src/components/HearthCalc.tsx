// 'use client';

// import {useEffect, useRef} from 'react';

// const HearthFinanceCalculator = () => {
//     const widgetContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         // Only run on client
//         if (typeof window !== 'undefined') {
//             // Avoid duplicate script injection
//             if (!document.getElementById('hearth-script')) {
//                 const script = document.createElement('script');
//                 script.src = 'https://widget.gethearth.com/script.js';
//                 script.id = 'hearth-script';
//                 script.setAttribute('data-orgid', '54118');
//                 script.setAttribute('data-partner', 'paragon-exterior');
//                 script.async = true;

//                 widgetContainerRef.current?.appendChild(script);
//             }
//         }
//     }, []);

//     return (
//         <div ref={widgetContainerRef} className="">
//             {/* The iframe will be injected by the script itself */}
//             <iframe id="hearth-widget_calculator_v1" title="Hearth Financing Widget" />
//         </div>
//     );
// };

// export default HearthFinanceCalculator;


export const HearthFinanceCalculator = () => {
    return (
        <div className='flex' >
            <script src="https://widget.gethearth.com/script.js" id="hearth-script" data-orgid="54118" data-partner="paragon-exterior" defer
            />
            <iframe id="hearth-widget_calculator_v1"></iframe>
        </div>
    )
}
