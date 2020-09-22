import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { title } from '../components/layout'
import utilStyles from '../../public/sass/utils.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

function CountryRollOut() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/countries/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  return (
    <h1>{data.title}</h1>
  )


}
export default CountryRollOut
