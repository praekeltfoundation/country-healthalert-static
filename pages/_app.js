import useSWR from 'swr'
import fetch from 'unfetch'
import React, { useState, useEffect } from "react"
import Masonry from 'react-masonry-component'
import DataContext from './components/dataContext';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/sass/main.scss'


const fetcher = url => fetch(url).then(r => r.json())

function App({ Component, pageProps,  }) {
  const { data, error } = useSWR('/api/countries', fetcher)


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
    <DataContext.Provider value={{ data }}>
      <Component {...pageProps} data={ data } />
    </DataContext.Provider>
  )
}

export default App
