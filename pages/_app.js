import React, { useState, useEffect } from "react"
import useSWR from 'swr'
import Masonry from 'react-masonry-component';
import AOS from 'aos'

import 'aos/dist/aos.css'
import '../public/sass/main.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())

function App({ Component, pageProps, data }) {
  console.log('The data:',data)

  const { data, error } = useSWR('/api/people', fetcher)

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
    <Component {...pageProps}/>
  )
}

App.getInitialProps = async (context) => {
  const res =  await fetch('http://localhost:3000/api/country')
  const json = await res.json()
  return { data: json }
}

export default App
