import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

export default function About() {

  return (
    <Layout>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__about}`}>
          <div className="card-ui">
            <div className="card-ui__item" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
              <img
                src="/img/Hand-mock-up.png"
                alt="Healthconnect Communication Strategy"
              />
            </div>

            <div className="card-ui__item" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
              <h1 className={utilStyles.title}>Health</h1>
              <h2 className={`${utilStyles.title} ${utilStyles.titleStrong}`}>Connect</h2>
              <h3 className={utilStyles.subtitle}>Our responses to COVID-19</h3>
              <p className={utilStyles.description}>
                With countries experiencing a massive need for direct communication
                about COVID-19, Praekelt.org (using Turn.io) has developed a pro bono
                solution to empower citizens with the right information and support
                the national response of the health systems that serve them.
              </p>
            </div>
          </div>
      </section>

      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__aboutSection}`}>
        <div className="card-ui">
          <div className="card-ui__item card-ui__item--text">
            <h4 className={utilStyles.titleMicro}>Introducing HealthConnect</h4>
            <p className={utilStyles.excerpt}>HealthConnect for COVID-19 is a set of interconnected services
            designed to target various aspects of health crises.
            Each service has the powerful potential to
            strengthen health systems in the long term. </p>

            <p>The services can be deployed,
            rapidly as individual services,
            but are most effective when implemented together.</p>
            <Link href="/countries">
              <a className={`${utilStyles.button} ${utilStyles.buttonPrimary}`}>Read more</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
