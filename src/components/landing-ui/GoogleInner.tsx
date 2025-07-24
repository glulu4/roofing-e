
import React, {useEffect} from 'react';
import {ReactGoogleReviews} from 'react-google-reviews';
import "react-google-reviews/dist/index.css";


export default function GoogleInner() {

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const imgs = document.querySelectorAll(
        'img[src*="googleusercontent.com"]:not([alt])'
      );
      imgs.forEach((img) => {
        // Try to find a reviewer name in the DOM
        const container = img.closest('.google-review') || img.closest('div');
        const nameEl = container?.querySelector('strong, .reviewer-name');
        const name = nameEl?.textContent?.trim() || 'Google review photo';
        img.setAttribute('alt', `Profile image of ${name}`);
      });
    });

    observer.observe(document.body, {childList: true, subtree: true});
    return () => observer.disconnect();
  }, []);
  return (
    <ReactGoogleReviews
      showDots={false}
      
      layout="carousel"
      featurableId={"1267cf54-a64c-403f-8fed-1c9d518c78fa"}
      structuredData
      accessibility
      brandName="Paragon Exterior LLC"
      productDescription="Roofing, Siding, and Exterior Services"

    />
  )
}