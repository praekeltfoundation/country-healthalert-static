import fse from 'fs-extra'
import path from 'path'
import matter from 'gray-matter'

import React, { useState, useEffect } from "react"

import Masonry from 'react-masonry-component';
import AOS from 'aos'

import 'aos/dist/aos.css'
import '../public/sass/main.scss'

function App({ Component, pageProps }) {

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


export default App
