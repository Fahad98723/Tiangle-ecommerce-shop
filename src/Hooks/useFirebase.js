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
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const user = useSelector(state => state.products.user)
    console.log(user);
    const [error, setError] = useState('')
    const googleSingIn = () => {     
        return signInWithPopup(auth, googleProvider)      
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
                  saveUser(email, name, 'POST')
                setError('')
              }).catch((error) => {
                setError(error.errorMessage)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
        .finally(() => setIsLoading(false));
    }

    const signInWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)       
        }

    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(setUser({}))
            setError('')
          }).catch((error) => {
            setError(error.errorMessage)
          }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user))
            } else {
              
            }
            setIsLoading(false);
          });
    },[auth, dispatch])

    const saveUser = (email, name, method) => {
        const user = {email, name}
        fetch('http://localhost:5000/users', {
            method : method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/users',{})
    // },[])

    return {googleSingIn, logOut,signUpWithEmailAndPass,signInWithEmailAndPass,error, setError, saveUser, setIsLoading, isLoading}
}

export default useFirebase