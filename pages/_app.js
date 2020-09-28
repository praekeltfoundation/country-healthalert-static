import useSWR from 'swr'
import fetch from 'unfetch'
import React, { useState, useEffect } from "react"
import Masonry from 'react-masonry-component'
import DataContext from './components/dataContext';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../public/sass/main.scss'


const fetcher = url => fetch(url).then(r => r.json())

function App({ Component, pageProps }) {
  const { data, error } = useSWR('/api/countries', fetcher)
  useEffect(() => {
    if (!window.Cypress) {
      AOS.init({
        startEvent: 'DOMContentLoaded',
        mirror: true
      });
      AOS.refresh();
    }
    let jsScripts = [
       "https://platform.twitter.com/widgets.js",
       "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0"
     ];

    for (let i = 0; i < jsScripts.length; i++) {
      let script = document.createElement('script');
        script.src = jsScripts[i];
        script.async = true;
        script.defer = "defer";
        script.crossorigin = "anonymous";
        document.querySelector('script').parentNode.appendChild(script);
    }
  });


  if(!data) return null;

  return (
    <DataContext.Provider value={{ data }}>
      <Component {...pageProps} data={ data } />
    </DataContext.Provider>
  )
}

export default App
