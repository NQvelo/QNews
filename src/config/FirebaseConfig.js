// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: 'AIzaSyAmjZiP_uVgy91Il3wt7AC0guWViBv8KN8',
  authDomain: 'qnews-auth.firebaseapp.com',
  projectId: 'qnews-auth',
  storageBucket: 'qnews-auth.appspot.com',
  messagingSenderId: '749460682598',
  appId: '1:749460682598:web:a594ff5d4e2a9c0f4d7aa7',
  measurementId: 'G-SV3R1WXP98',
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);
