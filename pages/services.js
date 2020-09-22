import { useContext } from 'react';
import useSWR from 'swr'

import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Services() {
  const { data, error } = useSWR('/api/country', fetcher)

  return (
    <Layout transparent>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__countries}`}>



        <div className={utilStyles.banner}>
          <h3 className={utilStyles.subtitle}>HealthAlert <br/>Implementation</h3>
          <p className={utilStyles.description}>
            Countries and organisations that are using one or a
            combination of these services include the World Health Organisation
          </p>
        </div>

        <div className={utilStyles.bannerContent}>
          <div className="grid">
            {data.map((p,i) => (
              <div className="grid-item">{/* grid-item--width2 */}
                <img
                  src={p.src}
                  className="grid__thumbnail"
                  data-aos="zoom-in" data-aos-delay="100"/>
                <h4 className="grid__title">{p.title}</h4>
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

export default Services
