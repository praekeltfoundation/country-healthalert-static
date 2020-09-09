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
              <span className={styles.logoName}>HealthConnect</span>
            </div>
            <div className={`${styles.headerItem} ${styles.menu}`}>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem} data-aos="fade-right" data-aos-once="true" data-aos-delay="550" data-aos-easing="ease-in-out-quad">
                  <a
                    href="https://www.praekelt.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.menuListAnchor}>
                    About us
                  </a>
                </li>
                <li className={styles.menuListItem} data-aos="fade-right" data-aos-once="true" data-aos-delay="600" data-aos-easing="ease-in-out-quad">
                  <a
                    href="https://healthalert.whofreebasics.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.menuListAnchor}>
                      Healthalert
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.headerItem} ${styles.cta}`} data-aos="fade-right" data-aos-once="true" data-aos-delay="650" data-aos-easing="ease-in-out-quad">
              Call to action
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
        </div>
        {/* */}
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
