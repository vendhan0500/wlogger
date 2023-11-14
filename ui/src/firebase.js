import { initializeApp } from "firebase/app";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCru0_jA8WIus2FauU9JfNiyb0USPev8nE",
    authDomain: "wlogger-3ca92.firebaseapp.com",
    databaseURL: "https://wlogger-3ca92-default-rtdb.firebaseio.com",
    projectId: "wlogger-3ca92",
    storageBucket: "wlogger-3ca92.appspot.com",
    messagingSenderId: "405772503401",
    appId: "1:405772503401:web:600d9e9cbe5efa9102d5f8"
  };

  const app = initializeApp(firebaseConfig);
  export default app;