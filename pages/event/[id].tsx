import firebase from '../../app/firebase'
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { IUser, IWhisList } from '../../app/interfaces'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
  const id = params?.id as string
  return {
    props: { id },
  }
}

const Id = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const [whislist, setWhislist] = useState<IWhisList[] | null>(null)
  const [emailList, setEmailList] = useState<IUser[] | null>(null)

  useEffect(() => {
    console.log('useEffect :: ', `events/${id}`)
    let starCountRef = firebase.database().ref(`events/${id}`);
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log('useEffect', data)
      setWhislist(data?.wishList)
      setEmailList(data?.emailList)
    });
  }, [id])

  return (
    <div>
      <Head>
        <title>Jugando ando | Sorteo amigos secretos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Detalle event</h2>
    </div>
  )
}

export default Id
