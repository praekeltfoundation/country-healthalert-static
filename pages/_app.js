import fse from 'fs-extra'
import path from 'path'
import matter from 'gray-matter'

import React, { useState, useEffect } from "react"
import DataContext from './components/DataContext';

import Masonry from 'react-masonry-component';
import AOS from 'aos'

import 'aos/dist/aos.css'
import '../public/sass/main.scss'

function App({ Component, pageProps, data }) {
  console.log(data)
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

// export async function getStaticProps() {
//   const postsDirectory = path.join(process.cwd(), 'country');
//   const allData = function getSortedPostsData() {
//     // Get file names under /posts
//     const fileNames = fse.readdirSync(postsDirectory)
//
//     const allPostsData = fileNames.map(fileName => {
//       // Remove ".md" from file name to get id
//       const id = fileName.replace(/\.md$/, '')
//
//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, fileName)
//       const fileContents = fse.readFileSync(fullPath, 'utf8')
//
//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents)
//
//       // Combine the data with the id
//       return {
//         id,
//         ...matterResult.data
//       }
//     })
//
//     return allPostsData;
//   }
//   return { data: allData }
// }

App.getInitialProps = async (context) => {
  const postsDirectory = path.join(process.cwd(), 'country');

  const allData = function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fse.readdirSync(postsDirectory)

    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fse.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        ...matterResult.data
      }
    })

    return allPostsData;
  }console.log(allData)
  return { data: allData }
}

export default App
