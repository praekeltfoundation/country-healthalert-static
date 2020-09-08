import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/sass/main.scss'

export default function App({ Component, pageProps }) {
  const scrollHandler = (e) => {
    console.log('Target',e.target);
    //body.innerHTML = window.pageYOffset;
  }
  useEffect(() => {
    const body = document.body;
    const nav = document.getElementById('header');


    if (!window.Cypress) {
      AOS.init({
        startEvent: 'DOMContentLoaded',
        mirror: true
      });
      // AOS.refresh();
    }

    document.addEventListener('aos:in', function(e) {
      console.log('in!', e.detail);
    });

    window.addEventListener('scroll', function() {
      //body.innerHTML = window.pageYOffset;
      console.log('Scroll', window.pageYOffset);
    });
   //  window.addEventListener('scroll', scrollHandler);
   //
   // return () => {
   //   window.removeEventListener('scroll', scrollHandler);
   // };

  });


  return (
    <Component {...pageProps} />
  )
}
