import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
    .collection('users')
    .doc('Ivc2u9ipi6M8yYXaOf1N')
    .collection('cartItems')
    .doc('5QBNqR61tm1n0R2UJena')
