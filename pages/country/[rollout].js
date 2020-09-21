import { useContext } from 'react';
import { useRouter } from 'next/router'
import DataContext from '../components/DataContext';

import Layout, { title } from './components/layout'
import utilStyles from '../public/sass/utils.module.scss'


const router = useRouter().query.rollout;
//const { data } = useContext(DataContext);

function CountryRollOut({ allPostsData }) {
  allPostsData.results.filter((obj) => {
    return obj
  });
}
export default CountryRollOut
