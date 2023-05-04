import { initializeApp } from "firebase/app";
import { actionCodeSettingsForgotPassword, actionCodeSettingsVerification, firebaseConfig } from "./firebase-config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {doc, getDoc, getDocs, setDoc, getFirestore, query, collection, where, orderBy, onSnapshot} from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firestore functions
export const firestore = getFirestore(app);


export const createUserProfileDocument = async userAuth => {
  if (!userAuth || !userAuth.emailVerified) return;

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




export const auth = getAuth();
auth.useDeviceLanguage();

//create manual user
export const createUser = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => sendEmailVerification(userCredential.user, actionCodeSettingsVerification)
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


//Ordenes
export const createOrderDocument = async order => {

  if (!order) return;
  console.log(order)

  const orderRef = doc(firestore, `pedidos/${order.orderId}`);

  const snapShot = await getDoc(orderRef);

  if(!snapShot.exists()){
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, `pedidos/${order.orderId}`),{
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails
        },
        items: [...order.productsCart],
        subtotal: order.subtotal,
        shippingCost: order.shippingCost,
        total: order.total,
        status: `pending`,
        createdAt,
      })
    } catch (error) {
      console.log("Error creating order", error.message)
    }
  }

  return orderRef;

}

//obtener ordenes (pedidos)

export const getOrders = async (userId, currentOrdersInRedux, cb, action) => {
  if (!userId) throw new Error("");

  const getOrdersQuery = query(collection(firestore, "pedidos"), where("userId", "==", userId), orderBy("createdAt","desc"));

  //setear las ordenes
  let orders = await getDocs(getOrdersQuery)
  .then(querySnapshot => {
    let orders = [];
    querySnapshot.forEach(async document => {
      orders = [...orders, {id: document.id, ...document.data()}];
      const orderRef = doc(firestore, `pedidos/${document.id}`);

      let documentStatus = document.data().status;
      if(!currentOrdersInRedux) {
        onSnapshot(orderRef, snapShot => {
          const staleData = snapShot.get("status") !== documentStatus;
          documentStatus = snapShot.get("status");
          staleData && cb(action(userId))
        })
      }
    });
    return orders;
  })
  .catch(error => console.log("Error al obtener las ordenes", error))

  console.log(orders)
  return orders;

}

