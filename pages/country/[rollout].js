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


  console.log('Child Contries', data[router].subtitle )

  return (
    <Layout dynamic>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__about}`}>
        <div className={utilStyles.caption} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-quad">
          <h2 className={`${utilStyles.title} ${utilStyles.titleStrong}`}>
            {data[router].title}
          </h2>
          <p className={utilStyles.description}>
            {data[router].subtitle}
          </p>
          <div className={utilStyles.thumbnailDiv}>
            <img src={data[router].src}
              className={utilStyles.thumbnail}
            />
          </div>
        </div>

        <div className={utilStyles.body}>
          <p>{data[router].excerpt}</p>
        </div>
      </section>
    </Layout>
  )

}
export default CountryRollOut
