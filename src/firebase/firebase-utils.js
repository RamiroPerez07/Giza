import { initializeApp } from "firebase/app";
import { actionCodeSettingsForgotPassword, actionCodeSettingsVerification, firebaseConfig } from "./firebase-config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {doc, getDoc, setDoc, getFirestore} from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUserProfileDocument = async userAuth => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if(!snapShot.exists()) {
    const {displayName, email, photoURL} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem("username"),
        email,
        photoURL,
        createdAt
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }
  }

  return userRef;
}


export const firestore = getFirestore(app);

export const auth = getAuth();
auth.useDeviceLanguage();

//create manual user
export const createUser = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(useCredential => sendEmailVerification(useCredential.user, actionCodeSettingsVerification)
  .then(()=>{
    alert(`Mensaje de verificación enviado al mail ${email}`);
    localStorage.setItem('username', displayName)
  }))
  .catch(error => {
    if (error.code === 'auth/email-already-in-use' ){
      alert("Mail en uso");
    }
  })
}

//sign in manual
export const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(
    user => {
      createUserProfileDocument(user)
    }
  ).catch(
    error => {
      if(error.code === "auth/wrong-password"){
        alert("Contraseña incorrecta");
      }
      if(error.code === "auth/user-not-found"){
        alert("Usuario no encontrado")
      }
    }
  );
}

//recuperar contraseña
export const resetPassword = email => {
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword)
  .then(() => {
    alert(`Mail de recuperación de contraseña enviado a ${email}`)
  })
  .catch(error => alert(error))
}

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth,provider);