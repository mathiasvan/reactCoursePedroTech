// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADswtbZH6CmtN6BI69hmRzIETo9zkWTiY",
  authDomain: "pedrotechreactjscourse.firebaseapp.com",
  projectId: "pedrotechreactjscourse",
  storageBucket: "pedrotechreactjscourse.appspot.com",
  messagingSenderId: "353704936223",
  appId: "1:353704936223:web:b23bfed9ff65f71c27e62a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);