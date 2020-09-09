import React, { useState, useRef, useMemo, Fragment } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import Head from 'next/head'
import Link  from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../../public/sass/utils.module.scss'

import { Navbar } from '../styles'

const name = "Profiles"
export const siteTitle = 'Next.js Sample Site'

function Layout({children, home}) {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return useMemo(
    () => (
      <Fragment>
        <div className={styles.container}>
          <Head>
            <title>{name}</title>
            <link rel="icon" href="/img/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <Navbar show={hideOnScroll}>
            <b>RENDER COUNT: {++rendersCount.current}</b>
            {home && (
              <header className={styles.header}>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </header>
            )}
          </Navbar>
          <main role="main">
            {children}
            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a className={styles.backToHomeAnchor}>Back</a>
                </Link>
              </div>
            )}
          </main>
        </div>
      </Fragment>
    ),
    [hideOnScroll]
  )
}

export default Layout;
