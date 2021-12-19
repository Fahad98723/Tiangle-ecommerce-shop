import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import firebaseInitializing from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Pages/redux/action/productAction";
import { useSelector } from "react-redux";
firebaseInitializing()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const dispatch = useDispatch()
    const user = useSelector(state => state.products.user)
    console.log(user);
    const googleSingIn = () => {     
        signInWithPopup(auth, googleProvider)
        .then((result) => {   
            const user = result.user;
            

        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user))
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    return {googleSingIn}
}

export default useFirebase