import { useContext } from 'react';
import DataContext from './components/dataContext';
import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

function Countries() {
  const { data } = useContext(DataContext);

  return (
    <Layout>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__countries}`}>

        <div className={utilStyles.banner}>
          <h3 className={utilStyles.subtitlecenter}>HealthAlert <br/>Implementation</h3>
          <p className={utilStyles.descriptioncenter}>
            Numerous countries and organisations across the globe are using
            HealthAlert WhatsApp services to directly communicate accurate,
            up-to-date and relevant information.
          </p>
        </div>


        <div className={utilStyles.bannerContent}>
          <div className="grid">
            {data.map((p,i) => (
              <div key={i} className={i % 2 === 0? "grid-item" : "grid-item grid-item--width2"}>
                  <Link href="/countries/[rollout]" as={`/countries/${p.id}`}>
                  <img
                    src={p.thumbnail}
                    className="grid__thumbnail"
                    data-aos="zoom-in" data-aos-delay="100"/>
                </Link>
                <p className="grid__excerpt">
                  {p.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Countries
