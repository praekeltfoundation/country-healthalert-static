import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/sass/main.scss'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <Component {...pageProps} />
  )
}
