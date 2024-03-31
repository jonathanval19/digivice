import { initializeApp } from "firebase/app";
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyBTGsw_M7bf1mT7BDXiKkIrzMPFgnv1_pY",
    authDomain: "login-ionic-e8eac.firebaseapp.com",
    databaseURL: "https://login-ionic-e8eac-default-rtdb.firebaseio.com",
    projectId: "login-ionic-e8eac",
    storageBucket: "login-ionic-e8eac.appspot.com",
    messagingSenderId: "708743411646",
    appId: "1:708743411646:web:65e4ee6f308cad44102bef",
    measurementId: "G-847CL80VP7"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);