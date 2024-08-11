// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaQvPoIZtAA43uO73jdyrcR9t3BTKPUkY",
  authDomain: "post-app-fb5b1.firebaseapp.com",
  projectId: "post-app-fb5b1",
  storageBucket: "post-app-fb5b1.appspot.com",
  messagingSenderId: "922034907604",
  appId: "1:922034907604:web:c4729e48833548d2d10e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export {app};