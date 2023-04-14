// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCmuhsTpQTMtCCQLPXFw-UHG0WzcFUYBeA",
  authDomain: "giza-d1d7d.firebaseapp.com",
  projectId: "giza-d1d7d",
  storageBucket: "giza-d1d7d.appspot.com",
  messagingSenderId: "415293356399",
  appId: "1:415293356399:web:1212ae5c0617e8cfa5509a"
};

export const actionCodeSettingsVerification = {
  url: process.env.NODE_ENV === "development" ? 'http://localhost:3000' : '',
}

export const actionCodeSettingsForgotPassword = {
  url: process.env.NODE_ENV === 'development'?
  'http://localhost:3000/ingresar' :
  '/'
}

