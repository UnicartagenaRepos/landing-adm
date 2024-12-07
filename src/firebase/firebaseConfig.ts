import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcrZc6etOFvZi4bpxHo87oZKREbcfRkJo",
  authDomain: "sistema-alertas-tempranas.firebaseapp.com",
  projectId: "sistema-alertas-tempranas",
  storageBucket: "sistema-alertas-tempranas.appspot.com",
  messagingSenderId: "62423473472",
  appId: "1:62423473472:web:cfbddba8a554dd2a66aea5",
  measurementId: "G-GMHWY2736C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


export default firebaseConfig;