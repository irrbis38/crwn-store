import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDWy5p44hvnTKrQ9YE3AKGl_durTE-PdJ4",
  authDomain: "crwn-store-b0de3.firebaseapp.com",
  projectId: "crwn-store-b0de3",
  storageBucket: "crwn-store-b0de3.appspot.com",
  messagingSenderId: "353967890917",
  appId: "1:353967890917:web:59261621f8fad963510f0c",
  measurementId: "G-XSYWY7Q2ST",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
