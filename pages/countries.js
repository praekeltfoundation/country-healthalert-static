import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

export default function Countries() {

  return (
    <Layout transparent>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__countries}`}>
        <div className={utilStyles.banner}>
          <h3 className={utilStyles.subtitle}>HealthConnect <br/>Implementation</h3>
          <p className={utilStyles.description}>
            Countries and organisations that are using one or a
            combination of these services include the World Health Organisation
          </p>
        </div>

        <div className={utilStyles.bannerContent}>
          <div className="grid">
            <div className="grid-item">
              <img src="/img/_backgrounds/people.jpg" className="grid__thumbnail" data-aos="zoom-in" data-aos-delay="100"/>
              <h4 className="grid__title">Sierra Leone</h4>
              <p className="grid__excerpt">
                Countries or organisations can roll out
                their own versions in local languages.
              </p>
            </div>
            <div className="grid-item grid-item--width2">
              <img src="/img/_backgrounds/world-bg.png" className="grid__thumbnail" data-aos="zoom-in" data-aos-delay="150"/>
              <h4 className="grid__title">Ethiopia</h4>
              <p className="grid__excerpt">
                Countries or organisations can enhance
                the service with country-specific
                information that is trusted and up to date.
              </p>
            </div>
            <div className="grid-item">
              <img src="/img/_backgrounds/people.jpg" className="grid__thumbnail" data-aos="zoom-in" data-aos-delay="200"/>
              <h4 className="grid__title">Bangladesh</h4>
              <p className="grid__excerpt">
                Countries or organisations can roll out
                their own versions in local languages.
              </p>
            </div>
            <div className="grid-item">
              <img src="/img/_backgrounds/world-map.png" className="grid__thumbnail"data-aos="zoom-in" data-aos-delay="250" />
              <h4 className="grid__title">Madagascar</h4>
              <p className="grid__excerpt">
                Countries or organisations can roll out
                their own versions in local languages.
              </p>
            </div>
            <div className="grid-item grid-item--width2">
              <img src="/img/_backgrounds/people.jpg" className="grid__thumbnail" data-aos="zoom-in" data-aos-delay="300"/>
              <h4 className="grid__title">Mozambique</h4>
              <p className="grid__excerpt">
                Countries or organisations can enhance
                the service with country-specific
                information that is trusted and up to date.
              </p>
            </div>
            <div className="grid-item grid-item--width2">
              <img src="/img/_backgrounds/people.jpg" className="grid__thumbnail" data-aos="zoom-in" data-aos-delay="350"/>
              <h4 className="grid__title">Timor-leste</h4>
              <p className="grid__excerpt">
                Country-specific information that can be trusted and be up to date.
              </p>
            </div>
            <div className="grid-item">
              <img src="/img/_backgrounds/world-map.png" className="grid__thumbnail" data-aos="zoom-in" data-aos-delay="400"/>
              <h4 className="grid__title">Uganda</h4>
              <p className="grid__excerpt">
                Countries or organisations can enhance
                the service with country-specific
                information that is trusted and up to date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
