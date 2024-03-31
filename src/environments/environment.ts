// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBTGsw_M7bf1mT7BDXiKkIrzMPFgnv1_pY",
    authDomain: "login-ionic-e8eac.firebaseapp.com",
    projectId: "login-ionic-e8eac",
    storageBucket: "login-ionic-e8eac.appspot.com",
    messagingSenderId: "708743411646",
    appId: "1:708743411646:web:65e4ee6f308cad44102bef",
    measurementId: "G-847CL80VP7"
  },
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
