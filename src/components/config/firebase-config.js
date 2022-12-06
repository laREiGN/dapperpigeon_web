// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from "firebase/app-check"
import { getDatabase } from "firebase/database"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDOePyQWXleGvZ4yDdLPXS1N7gLsaVQ1Lk",
  authDomain: "dapperpigeonweb.firebaseapp.com",
  databaseURL: "https://dapperpigeonweb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dapperpigeonweb",
  storageBucket: "dapperpigeonweb.appspot.com",
  messagingSenderId: "423805158731",
  appId: "1:423805158731:web:9770a137c6e39ebd7454ce",
  measurementId: "G-Z1XX7HKTLM"
};

const app = initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeK8TMjAAAAABXczuQYU8nhYu084w-qqsPWB5LJ'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});

getToken(appCheck)
  .then(() => {
    console.log('Retrieved app token')
  })
  .catch((error) => {
    console.log(error.message)
  })

const database = getDatabase(app);

export {
  database
}