// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVhcH33og_lPpK6HmUHZbKiwfIEh2aGdA",
  authDomain: "turkishhome.firebaseapp.com",
  projectId: "turkishhome",
  storageBucket: "turkishhome.appspot.com",
  messagingSenderId: "1067817172790",
  appId: "1:1067817172790:web:608a6dc0ee0b2862567d97"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
