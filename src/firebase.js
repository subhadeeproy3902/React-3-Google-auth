// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU5bSNIMk83HbaCNxPnst4hPXJ3mF4d_8",
  authDomain: "auth-8572a.firebaseapp.com",
  projectId: "auth-8572a",
  storageBucket: "auth-8572a.appspot.com",
  messagingSenderId: "739128129003",
  appId: "1:739128129003:web:d3ec74d9698130e8f155ae",
  measurementId: "G-HKV14VV5RV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
  }).catch((error) => {
    console.log(error);
  })
};