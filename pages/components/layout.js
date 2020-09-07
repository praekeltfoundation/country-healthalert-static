import Head from 'next/head'
import Link  from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../../public/sass/utils.module.scss'

const name = "Home"
export const title = 'HealthConnect'

function Layout({children, home}) {
  return  (
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

      <header className={styles.header}>
        <div className={`${styles.headerItem} ${styles.logo}`}>Healthconnect</div>
        <div className={`${styles.headerItem} ${styles.menu}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuListItem}>
              <a
                href="https://www.praekelt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuListAnchor}>
                About us
              </a>
            </li>
            <li className={styles.menuListItem}>
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
        <div className={`${styles.headerItem} ${styles.cta}`}>Call to action</div>
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
      <footer className={utilStyles.footer}></footer>
    </>
  )
}

export default Layout;
