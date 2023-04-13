import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBrghk893nBuFzXdr3BIJmkI7_UMKznxy8",
  authDomain: "loginwith-a21d2.firebaseapp.com",
  projectId: "loginwith-a21d2",
  storageBucket: "loginwith-a21d2.appspot.com",
  messagingSenderId: "359958883421",
  appId: "1:359958883421:web:ee0e0714e07bf3b77a31b4",
  measurementId: "G-DDFSW3L9KE"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
