import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlWIDmPx6LZlkvg2tZb2M9kxLPuW05Aps",
  authDomain: "e-commerce-ch.firebaseapp.com",
  projectId: "e-commerce-ch",
  storageBucket: "e-commerce-ch.appspot.com",
  messagingSenderId: "959864669162",
  appId: "1:959864669162:web:bb197162b06f120862e893"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

