import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC6tPgO1kv7rP6B_iOvpnlNxuy0i0A9xGI',
  authDomain: 'clothing-db-f011c.firebaseapp.com',
  databaseURL: 'https://clothing-db-f011c.firebaseio.com',
  projectId: 'clothing-db-f011c',
  storageBucket: 'clothing-db-f011c.appspot.com',
  messagingSenderId: '324358746294',
  appId: '1:324358746294:web:f742794e52a4d77017b617',
  measurementId: 'G-QWL4L65SYS'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
