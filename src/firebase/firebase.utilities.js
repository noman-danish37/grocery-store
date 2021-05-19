import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcIhqT3DXpJC9Zb4cBVWZPtUvcJQwudSo",
    authDomain: "grocery-hub-7c3bf.firebaseapp.com",
    projectId: "grocery-hub-7c3bf",
    storageBucket: "grocery-hub-7c3bf.appspot.com",
    messagingSenderId: "172616705781",
    appId: "1:172616705781:web:c5050a3f2976926d4c87bc",
    measurementId: "G-M6VPXPRHHL"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;