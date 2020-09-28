import { useContext } from 'react';
import DataContext from '../components/dataContext';
import { useRouter } from 'next/router'

import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from '../components/layout'
import utilStyles from '../../public/sass/utils.module.scss'


function CountryRollOut({ country }) {
  const { data } = useContext(DataContext);
  const router = useRouter().query.rollout;

  data.filter((obj) => {
    if (obj.id === router) {
      country = obj;
      return country
    }
  });

  return (
    <Layout dynamic>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__about}`}>
        <div className={utilStyles.caption} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
          <h2 className={`${utilStyles.title} ${utilStyles.titleStrong}`}>
            {country.title}
          </h2>
          <p className={utilStyles.description}>
            {country.subtitle}
          </p>
          <div className={utilStyles.thumbnailDiv}>
            <img src={country.src}
              className={utilStyles.thumbnail}
            />
          </div>
        </div>

        <div className={utilStyles.body}>
          <p>{country.excerpt}</p>

          {country.services && (
            <div className="two-column">
              {country.services.map((p, i) => (
                <div key={i} className="two-column__item">
                  <h4 className="heading_micro">
                    {p.title}
                  </h4>
                  <p>{p.subtitle}</p>
                  <div className="column-cta">
                    <a href={p.href} className={`${utilStyles.button} ${utilStyles.buttonPrimary}`}>Visit {p.title}</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>

  )

}
export default CountryRollOut
