import React, { useEffect, useState, useRef, createRef, useMemo, Fragment } from "react"
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Head from 'next/head'
import Link  from 'next/link'
import styled from 'styled-components'
import styles from './layout.module.scss'
import utilStyles from '../../public/sass/utils.module.scss'


const NavbarBase = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  @media (min-width: 375px) {
    flex-direction: row;
  }
`;
export const Navbar = styled(NavbarBase)`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`;
//POSITION MEASUREMENT STYLES
export const ViewportPositionElement = styled.div`
  background: #000;
  left: 10px;
  padding: 15px;
  position: absolute;
  top: 0;
  opacity: 0;
  z-index: 9999999;
`;
export const PositionElement = styled.div`
  background: #000;
  color: white;
  left: 10px;
  padding: 15px;
  position: absolute;
  opacity: 0;
  top: 190px;
  z-index: 999;
`;
export const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0)
  const elementPosition = useRef({ x: 10, y: 150 })
  const viewportPosition = useRef({ x: 0, y: 0 })
  let throttleTimeout = null

  const getPos = (el, axis) => Math.round(el.current[axis])

  const setPos = (el, pos) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setElementPosition: pos => setPos(elementPosition, pos),
    setViewportPosition: pos => setPos(viewportPosition, pos),
    renderCount
  }
}
export const name = "Home"
export const title = 'HealthAlert'
export const description = "HealthAlert | Improving health and strengthening Health Systems in the time of COVID-19"

export default function Layout({children, transparent, home, dynamic, href}) {
  const router = useRouter()
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const positionsStore = PositionStore()
  const rendersCount = useRef(0)
  const viewportRef = useRef(null)
  const elemRef = useRef(null)

  //Navbar fade in/out animation
  useScrollPosition (
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) {
        setHideOnScroll(isShow)
      }
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  // Viewport scroll position
  useScrollPosition (
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)
      const { style } = viewportRef.current
      style.top = `${0 + currPos.y}px`
      style.left = `${10 + currPos.x}px`
    },
    [positionsStore],
    null,
    true
  )

  // Element scroll position
  useScrollPosition (
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    elemRef,
    false,
    300
  )

  return useMemo(
    () => (
      <Fragment>
        <Head>
          <title>{name} - {title}</title>
          <link rel="icon" href="favicon.ico" />
          <meta name="description" content={description}/>
          <meta name="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:url"           content={href} />
          <meta property="og:type"          content="website" />
          <meta property="og:title"         content={title} />
          <meta property="og:description"   content={description} />
          <meta property="og:image"         content="/img/healthconnect-info.png" />
        </Head>

        <div id="fb-root"></div>

        <header className={styles.header}>
          <Navbar show={hideOnScroll} className={`${styles.nav} ${transparent && positionsStore.getViewportY() <= 190 ? styles.navBlack : styles.navWhite }`}>
            <div className={styles.logo} data-aos="fade-right" data-aos-once="true" data-aos-delay="500" data-aos-easing="ease-in-out-quad">
              <Link href="/">
                <a
                  className={styles.logoName}>
                    {title}
                </a>
              </Link>
            </div>
            <div className={styles.menu}>
              <ul className={styles.menuList}>
                <li className={styles.menuListItem} data-aos="fade-right" data-aos-once="true" data-aos-delay="550" data-aos-easing="ease-in-out-quad">
                  <Link href="/about">
                    <a
                      className={styles.menuListAnchor}>About us</a>
                  </Link>
                </li>
                <li className={styles.menuListItem} data-aos="fade-right" data-aos-once="true" data-aos-delay="600" data-aos-easing="ease-in-out-quad">
                  <Link href="/countries">
                    <a
                      className={styles.menuListAnchor}>Country services</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.cta} data-aos="fade-right" data-aos-once="true" data-aos-delay="650" data-aos-easing="ease-in-out-quad">
                <ul className={styles.menuList}>
                  <li className={`${styles.menuListItem} ${styles.menuListItem__socialLinks}`}>
                    <div
                      data-href="http://healthalert.static.qa.p16n.org/"
                      data-layout="button">
                        <a
                          target="_blank"
                          href={`https://www.facebook.com/sharer/sharer.php?u=${href}%2F&amp;src=sdkpreparse`}
                          className={styles.menuListAnchor}>
                          <img
                            src={transparent && positionsStore.getViewportY() <= 190 ? "/img/_icons/facebook-white.png" : "/img/_icons/facebook.png" }
                            alt="Praekelt.org Healthconnect on Facebook"
                            className={styles.menuListIcon}
                          />
                        </a>
                    </div>
                  </li>
                  <li className={`${styles.menuListItem} ${styles.menuListItem__socialLinks}`}>
                    <a
                      href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=${description}`}
                      className={styles.menuListAnchor}
                      data-show-count="false">
                      <img
                        src={transparent && positionsStore.getViewportY() <= 190 ? "/img/_icons/twitter-white.png" : " /img/_icons/twitter.png"}
                        alt="Praekelt.org Healthconnect on Twitter"
                        className={styles.menuListIcon}
                      />
                    </a>
                  </li>
              </ul>
            </div>
          </Navbar>
        </header>

        <PositionElement ref={elemRef}></PositionElement>
        <ViewportPositionElement ref={viewportRef}></ViewportPositionElement>


        <main role="main" className={styles.container} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
          <div className={styles.main}>
            {children}

            {!transparent && (
              <div className={styles.backToHome}>
                <Link href={!dynamic ? "/" : "/countries"}>
                  <a className={styles.backToHomeAnchor}>Back</a>
                </Link>
              </div>
            )}
          </div>
        </main>
        {home && (
          <div className={styles.scrollCta}></div>
        )}
        <footer className={styles.footer}>
          <p className={styles.copyright}>&copy;  {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
      </Fragment>
    ),
    [hideOnScroll]
    [positionsStore]
  )
}

;
