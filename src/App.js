import React, {useEffect} from "react";
import { Routes } from "./routes/Routes";
import {onAuthStateChanged} from 'firebase/auth';
import {auth, createUserProfileDocument} from './firebase/firebase-utils';
import { onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/actions/user-actions";

function onAuthStateChange(cb, action){
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth).catch(error => console.log(error));
      onSnapshot(userRef, snapshot => cb(action({id:snapshot.id, ...snapshot.data()})));
    } else {
      cb(action(null));
    }
  });
};


function App() {

  //llamo al despachador de acciones
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, setCurrentUser);
  
    return () => unsuscribe;
    
  }, [dispatch])
  


  return (
    <>
      <Routes />
    </>
  );
}

export default App;
