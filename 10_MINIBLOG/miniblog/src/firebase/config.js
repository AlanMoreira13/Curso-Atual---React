import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTMC-Z9OxbdG2cDidalgiWEDX5wq8vhLs",
  authDomain: "miniblog-e7999.firebaseapp.com",
  projectId: "miniblog-e7999",
  storageBucket: "miniblog-e7999.appspot.com",
  messagingSenderId: "281436724887",
  appId: "1:281436724887:web:3e31bcbbe19ad45f2193d2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
