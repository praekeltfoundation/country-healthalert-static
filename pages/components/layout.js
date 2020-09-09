import React, { useState, useRef, useEffect, useMemo } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Head from 'next/head'
import Link  from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../../public/sass/utils.module.scss'

const name = "Home"
export const title = 'HealthConnect'

const PositionStore = () => {
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

function Layout({children, home}) {
  const positionsStore = PositionStore()
  const viewportRef = useRef(null)
  const redBoxRef = useRef(null)

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)
      const { style } = viewportRef.current
      style.top = `${150 + currPos.y}px`
      style.left = `${10 + currPos.x}px`
    },
    [positionsStore],
    null,
    true
  )

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    redBoxRef,
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
          <div ref={redBoxRef}><p>Somedtatatatat</p></div>
          <header show={true} id="header" className={styles.header}>
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
          <footer ref={viewportRef} className={utilStyles.footer}>
            <div>
            Deferred Rendering:
            <span>{positionsStore.renderCount}</span>
            </div>
            <div>
              Viewport Scroll:
              <span>
                X: {positionsStore.getViewportX()} Y: {positionsStore.getViewportY()}
              </span>
            </div>
            <div>
              Red Box Scroll:
              <span>
                X:{positionsStore.getElementX()} Y:{positionsStore.getElementY()}
              </span>
            </div>
          </footer>
        </div>

        <style jsx>{`
          #header {
            box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);
            visibility: ${props => (props.show ? 'visible' : 'hidden')};
            transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
            transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
          }
        `}</style>
      </>
    ),
    [positionsStore]
  )
}

export default Layout;
