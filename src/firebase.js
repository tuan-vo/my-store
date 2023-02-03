import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBuEwYmuXR7fwsgILhcW91ZLwmwFvZhKPY",
  authDomain: "istore-ac2fd.firebaseapp.com",
  projectId: "istore-ac2fd",
  storageBucket: "istore-ac2fd.appspot.com",
  messagingSenderId: "310499253750",
  appId: "1:310499253750:web:cfda6dfef8159a826d7bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app