
import React from 'react';
import {ReactGoogleReviews} from 'react-google-reviews';
import "react-google-reviews/dist/index.css";


export default function GoogleInner() {
  return (
    <ReactGoogleReviews
      showDots={false}
      layout="carousel"
      featurableId={"1267cf54-a64c-403f-8fed-1c9d518c78fa"}
      structuredData
      brandName="Paragon Exterior LLC"
      productDescription="Roofing, Siding, and Exterior Services"

    />
  )
}