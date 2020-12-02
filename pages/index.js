import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

export default function Home() {

  return (
    <Layout transparent home>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__home}`}>
        <h1 className={utilStyles.title}>Health</h1>
        <h2 className={`${utilStyles.title} ${utilStyles.titleStrong}`}>Alert</h2>
        <h3 className={utilStyles.subtitlecenter}>for COVID-19</h3>
        <p className={utilStyles.descriptioncentre}>
          Locally-relevant, accurate and up-to-date COVID-19
          communications direct to a mobile phone through WhatsApp.
        </p>
      </section>

      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__homeSection}`}>
        <div className="card-ui">
          <div className="card-ui__item card-ui__item--text">
            <div className={utilStyles.caption} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
              <h3 className={utilStyles.subtitle}>WhatsApp Chatbots</h3>
              <h1 className={utilStyles.title}>for COVID-19</h1>
              <p className={utilStyles.description}>
              Over 20 million people globally have been reached
              with COVID-19 information and advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__homeSection}`}>
        <div className="card-ui">
          <div className="card-ui__item" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
            <img
              src="/img/Hand-mock-up.png"
              alt="Healthconnect Communication Strategy"
            />
          </div>
          <div className="card-ui__itemright card-ui__itemright--text">
            <h4 className={utilStyles.titleMicro}>What is HealthAlert?</h4>
            <p className={utilStyles.excerpt}>Through HealthAlert,
            WhatsApp users can easily access accurate, timeous information.
            Supported by governments, the content is locally relevant and
            available in key local languages.</p>
            <Link href="/about">
              <a className={`${utilStyles.button} ${utilStyles.buttonPrimary}`}>See all Services</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__homeSection}`}>
        <div className="card-ui">
          <div className="card-ui__item card-ui__item--text">
            <h3 className={utilStyles.subtitle}>Pro Bono</h3>
            <h1 className={utilStyles.title}>Praekelt.org</h1>
            <p className={utilStyles.excerpt}>Praekelt.org (using Turn.io)
            has developed a pro bono solution (HealthAlert) to empower
            citizens with the right information and support the national
            response of the health systems that serve them.</p>

            <p className={utilStyles.description}>
            Countries interested in rolling out this service locally
            can <a href='https://www.praekelt.org/onboarding-form'>apply here</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
