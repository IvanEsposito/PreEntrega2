import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyClTISTgybol9f6AkjwCVZ2vGoxXG6qTmo",
  authDomain: "proyectocoder2727.firebaseapp.com",
  projectId: "proyectocoder2727",
  storageBucket: "proyectocoder2727.appspot.com",
  messagingSenderId: "875468781038",
  appId: "1:875468781038:web:8120b9362d0a837d410aff"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

