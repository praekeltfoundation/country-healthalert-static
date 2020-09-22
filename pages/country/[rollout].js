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


  console.log('Child Contries', )

  return (
    <Layout transparent>
      <section className={`${utilStyles.wrapper__content} ${utilStyles.wrapper__countries}`}>

        <div className={utilStyles.banner}>
          <h3 className={utilStyles.subtitle}>HealthAlert <br/>Implementation</h3>
          <p className={utilStyles.description}>data[router]["subtitle"]</p>
        </div>

        <div className={utilStyles.bannerContent}>

        </div>
      </section>
    </Layout>
  )


}
export default CountryRollOut
