
"use client"
import React from 'react'
import {ReactGoogleReviews} from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import HeaderText from '../HeaderText';

export default function GoogleReviews() {
  return (

    <div className='px-8 mx-auto sm:w-5/6 overflow-hidden'>
      <HeaderText className='text-center py-12 mx-auto w-5/6'>Hear From Our Happy Home Owners</HeaderText>
      <ReactGoogleReviews
        showDots={false}
        layout="carousel" 
        featurableId={"1267cf54-a64c-403f-8fed-1c9d518c78fa"}
        structuredData
        brandName="Paragon Exterior LLC"
        productDescription="Roofing, Siding, and Exterior Services"
        
      />

    </div>
  )
}
