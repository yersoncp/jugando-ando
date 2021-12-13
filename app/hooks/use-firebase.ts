import firebase from '../firebase'
import { useState, useEffect } from 'react'

interface User {
  uid: string;
  email: string;
}

const formatAuthUser: any = (user: any) => ({
  uid: user.uid,
  email: user.email
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User|null>(null)
  const [loading, setLoading] = useState(true)

  const clear = () => {
    setAuthUser(null)
    setLoading(false)
  }

  const authStateChanged = async(authState: any) => {
    if (!authState) {
      clear()
      return
    }
    setLoading(true)
    const formattedUser = formatAuthUser(authState)
    setAuthUser(formattedUser)
    setLoading(false)
  }

  const singInWithEmailAndPassword = async(email: string, password: string) => (
    firebase.auth().signInWithEmailAndPassword(email, password)
  )

  const createUserWithEmailAndPassword = async(email: string, password: string) => (
    firebase.auth().createUserWithEmailAndPassword(email, password)
  )

  const signOut = async() => (
    firebase.auth().signOut().then(clear).catch(() => {})
  )

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    singInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  }
}
