import React, { useState, useEffect } from "react"
import DataContext from './components/DataContext';

import Masonry from 'react-masonry-component';
import AOS from 'aos'

import { getSortedPostsData } from '../lib/country'

import 'aos/dist/aos.css'
import '../public/sass/main.scss'

function App({ Component, pageProps, data }) {

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

App.getInitialProps = async (context) => {
  const allPostsData = getSortedPostsData()
  return { data: allPostsData }
}

export default App
