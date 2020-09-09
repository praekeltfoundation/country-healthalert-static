import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

export default function About() {

  return (
    <Layout about>
      <section className={utilStyles.wrapper__content} data-aos="fade-up" data-aos-once="true" data-aos-delay="350" data-aos-easing="ease-in-out-quad">
        <h1 className={utilStyles.title}>Health </h1>
        <h2 className={`${utilStyles.title} ${utilStyles.titleStrong}`}>Connect</h2>
        <h3 className={utilStyles.subtitle}>for COVID-19</h3>
        <p className={utilStyles.description}>
          Improving health and strengthening
          Health Systems in the time of COVID-19
        </p>
      </section>
    </Layout>
  )
}
