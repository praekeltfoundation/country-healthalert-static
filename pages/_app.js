import React, { useEffect } from "react"
import DataContext from './components/DataContext';

import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/sass/main.scss'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.Cypress) {
      AOS.init({
        startEvent: 'DOMContentLoaded',
        mirror: true
      });
      AOS.refresh();
    }
  });

  return (
    <DataContext.Provider>
      <Component {...pageProps} />
    </DataContext.Provider>
  )
}
