import React, { useState, useRef, useEffect, useMemo } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Head from 'next/head'
import Link  from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../../public/sass/utils.module.scss'

const name = "Home"
export const title = 'HealthConnect'


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
      <>
        <Head>
          <title>{name}</title>
          <link rel="icon" href="favicon.ico" />
          <meta
            name="description"
            content="Improving health and strengthening Health Systems in the time of COVID-19"
          />
          <meta name="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className={styles.container} data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out-quad">
          <header className={styles.header} show={hideOnScroll} id="header" >
            <div className={`${styles.headerItem} ${styles.logo}`} data-aos="fade-right" data-aos-once="true" data-aos-delay="500" data-aos-easing="ease-in-out-quad">
              <Link href="/">
                <a className={styles.logoName}>HealthConnect</a>
              </Link>
            </div>
            <div className={`${styles.headerItem} ${styles.menu}`}>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem} data-aos="fade-right" data-aos-once="true" data-aos-delay="550" data-aos-easing="ease-in-out-quad">
                  <Link href="/about">
                    <a className={styles.menuListAnchor}>About us</a>
                  </Link>
                </li>
                <li className={styles.menuListItem} data-aos="fade-right" data-aos-once="true" data-aos-delay="600" data-aos-easing="ease-in-out-quad">
                  <Link href="/countries">
                    <a className={styles.menuListAnchor}>HealthAlert</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.headerItem} ${styles.cta}`} data-aos="fade-right" data-aos-once="true" data-aos-delay="650" data-aos-easing="ease-in-out-quad">
                <ul className={styles.menuList}>
                  <li className={`${styles.menuListItem} ${styles.menuListItem__socialLinks}`}>
                    <a href="https://www.facebook.com/praekeltorg/posts/3257879447602230" className={styles.menuListAnchor}>
                      <img
                        src="/img/facebook-white.png"
                        alt="Praekelt.org Healthconnect on Facebook"
                        className={styles.menuListIcon}
                      />
                    </a>
                  </li>
                  <li className={`${styles.menuListItem} ${styles.menuListItem__socialLinks}`}>
                    <a href="https://twitter.com/gustavp/status/1303260655525527552" className={styles.menuListAnchor}>
                      <img
                        src="/img/twitter-white.png"
                        alt="Praekelt.org Healthconnect on Twitter"
                        className={styles.menuListIcon}
                      />
                    </a>
                  </li>
              </ul>
            </div>
          </header>

          <main role="main" className={styles.main}>
            {children}

            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a className={styles.backToHomeAnchor}>Back</a>
                </Link>
              </div>
            )}

          </main>
          <footer className={styles.footer}>
            <p className={styles.copyright}>&copy;  {new Date().getFullYear()} All Rights Reserved</p>
          </footer>
        </div>
        <div className={styles.scrollCta}></div>

        <style jsx>{`
          #header {
            visibility: ${props => (props.show ? 'visible' : 'hidden')};
            transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
            transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
          }
        `}</style>
      </>
    ),
    [hideOnScroll]
  )
}

export default Layout;
