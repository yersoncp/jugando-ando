import firebase from '../app/firebase'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {


  // firebase.database().ref('users/' + 800).set({
  //   username: 'name',
  //   email: 'email',
  //   profile_picture : 'imageUrl'
  // });

  let starCountRef = firebase.database().ref('users/' + 900);
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data)
  });

  return (
    <div>
      <Head>
        <title>Jugando ando | Sorteo amigos secretos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
