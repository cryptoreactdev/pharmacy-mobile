import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEbgDsS3vJAL0QckGuxcKWKlVMA2Fzrc",
  authDomain: "fitcompanion-f6cf6.firebaseapp.com",
  projectId: "fitcompanion-f6cf6",
  storageBucket: "fitcompanion-f6cf6.appspot.com",
  messagingSenderId: "647805190127",
  appId: "1:647805190127:web:8efbd4ee07594e0f16801a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;