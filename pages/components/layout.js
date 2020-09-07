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
        <div className={`${styles.header__item} ${styles.logo}`}>Logo</div>
        <div className={`${styles.header__item} ${styles.menu}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuList__item}>
              <a
                href="https://www.praekelt.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuList__anchor}>
                Praekelt.org
              </a>
            </li>
            <li className={styles.menuList__item}>
              <a
                href="https://healthalert.whofreebasics.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menuList__anchor}>
                HealthAlert
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.header__item} ${styles.cta}`}>Call to action</div>
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
      <footer className={utilStyles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/img/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </>
  )
}

export default Layout;
