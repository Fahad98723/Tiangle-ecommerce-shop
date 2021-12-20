import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword   } from "firebase/auth";
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
    const [error, setError] = useState('')
    const googleSingIn = () => {     
        signInWithPopup(auth, googleProvider)
        .then((result) => {   
            const user = result.user;
            setError('')

        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }

    const signUpWithEmailAndPass = (name, email, password,  image) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch(setUser(user))
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: image
              }).then(() => {
                setError('')
              }).catch((error) => {
                setError(error.errorMessage)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
    const signInWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setError('')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
    });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(setUser({}))
            setError('')
          }).catch((error) => {
            setError(error.errorMessage)
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user))
            } else {
              
            }
          });
    },[auth, dispatch])

    return {googleSingIn, logOut,signUpWithEmailAndPass,signInWithEmailAndPass,error}
}

export default useFirebase