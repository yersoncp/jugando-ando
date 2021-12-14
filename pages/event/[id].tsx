import firebase from '../../app/firebase'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { IUser, IWishList } from '../../app/interfaces'
import CreateWhishlist from '../../components/CreateWishlist'
import ListUser from '../../components/ListUser'
import ListWishlist from '../../components/ListWishlist'

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
  const [whislist, setWhislist] = useState<IWishList[]>([])
  const [emailList, setEmailList] = useState<IUser[]>([])

  useEffect(() => {
    let starCountRef = firebase.database().ref(`events/${id}`);
    starCountRef.on('value', (snapshot) => {
      if (!snapshot.val()) return
      const { emailList: emailListData, wishList: wishListData } = snapshot.val();
      const wishListParse = wishListData ? Object.keys(wishListData).map(key => ({
        ...wishListData[key],
        id: key
      })) : []
      const emailListParse = Object.keys(emailListData).map(key => ({
        ...emailListData[key],
        id: key
      }))
      setWhislist(wishListParse)
      setEmailList(emailListParse)
    });
  }, [id])

  return (
    <div>
      <Head>
        <title>Jugando ando | Sorteo amigos secretos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="intro">
        <ListUser users={emailList} />
        <CreateWhishlist id={id} />
        <ListWishlist whislist={whislist} />
      </div>
    </div>
  )
}

export default Id
