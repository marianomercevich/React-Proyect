import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBm5pdz3t6EmOpQFf3KVAHf5lv9f4G6vss",
  authDomain: "login-7067b.firebaseapp.com",
  projectId: "login-7067b",
  storageBucket: "login-7067b.appspot.com",
  messagingSenderId: "702566578859",
  appId: "1:702566578859:web:72247a303dc96a2e9c15ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;