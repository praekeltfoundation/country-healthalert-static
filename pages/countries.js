import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

export default function Countries() {

  return (
    <Layout countries>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__contentIntro}`}>
        <div className={`${utilStyles.banner} ${utilStyles.bannerCountries}`}>
          <h3 className={utilStyles.subtitle}>HealthConnect <br/>Implementation</h3>
        </div>
        <div className={utilStyles.bannerContent}>

          <h1 className={utilStyles.title}>around the world</h1>

          <p className={utilStyles.description}>
            Countries and organisations that are using one or a
            combination of these services include the World Health Organisation
          </p>
        </div>

      </section>
    </Layout>
  )
}
