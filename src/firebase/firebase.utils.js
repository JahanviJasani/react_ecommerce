import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' ;

const firebaseConfig = {
  apiKey: "AIzaSyCO40AFu0y-0rRvrwytTgKbOEcAVvslrTY",
  authDomain: "grapple-db.firebaseapp.com",
  projectId: "grapple-db",
  storageBucket: "grapple-db.appspot.com",
  messagingSenderId: "74431771973",
  appId: "1:74431771973:web:709a655bc021c0f3a07a2c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;