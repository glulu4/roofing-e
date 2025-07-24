
"use client"
import React from 'react'
import "react-google-reviews/dist/index.css";
import HeaderText from '../HeaderText';

import dynamic from 'next/dynamic';
// import HeaderText from '../HeaderText';

// Dynamically import the component with SSR disabled
const LazyGoogleReviews = dynamic(() => import('./GoogleInner'), {
  ssr: false,
  loading: () => <p>Loading reviews...</p>,
});

export default function GoogleReviews() {
  return (
    <div className='px-8 mx-auto sm:w-5/6 overflow-hidden'>
      <HeaderText className='text-center py-12 mx-auto w-5/6'>
        Hear From Our Happy Home Owners
      </HeaderText>
      <LazyGoogleReviews />
    </div>
  );
}

