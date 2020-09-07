import Head from 'next/head'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'


export default function Home() {
  return (
    <Layout home>
      <div className={utilStyles.wrapper__content}>
        <h1 className={utilStyles.title}>Health Connect</h1>
        <h2 className={utilStyles.title}>for COVID-19</h2>
        <p className={utilStyles.description}>
          Improving health and strengthening
          Health Systems in the time of COVID-19
        </p>
        <div className={utilStyles.grid}>
          <div className={utilStyles.card}></div>
          <div className={utilStyles.card}></div>
        </div>
      </div>
    </Layout>
  )
}
