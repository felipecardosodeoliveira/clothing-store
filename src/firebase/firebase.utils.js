import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (e) {
            console.log('error creating user: ', e.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
