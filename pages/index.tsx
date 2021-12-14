import type { NextPage } from 'next'
import Head from 'next/head'
import CreateSort from '../components/CreateSort/CreateSort'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Jugando ando | Sorteo amigos secretos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CreateSort />
    </div>
  )
}

export default Home
