import Head from 'next/head'
import Link  from 'next/link'
import styles from './layout.module.scss'
import utilStyles from '../../public/sass/utils.module.scss'

const name = "Home"
export const title = 'WHO HealthAlert'

function Layout({children, home}) {
  return  (
    <section className={styles.container}>
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

      {home && (
        <header className={styles.header}>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      )}

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
    </section>
  )
}

export default Layout;
