import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { admin, setUser } from '../redux/action/productAction';
import NavigationBar from '../Shared/Header/NavigationBar';

const Login = () => {
    const {googleSingIn,logOut, signInWithEmailAndPass,setError, error, saveUser,setIsLoading} = useFirebase()
    const location = useLocation()
    const pathName = location.state?.from?.pathname
    let navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const details = {...userDetails}
        details[field] = value  
        setUserDetails(details)     
    }
    const email = userDetails.email
    const password = userDetails.password

    const loginWithGoogle = () => {
        googleSingIn()
        .then((result) => {   
            const user = result.user;
            saveUser(user.email, user.displayName , 'PUT' )
            setError('')
            if (pathName) {
                navigate(pathName)
            }
            else{
                navigate('/')
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .finally(() => setIsLoading(false));
    }
    const logInWithEmailAndPass = (email, password) => {
        signInWithEmailAndPass( email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setError('')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        })
        .finally(() => setIsLoading(false));
    }
    
    const formHandle = (e) => {
        e.preventDefault()
        logInWithEmailAndPass( email, password)
    }
    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className= 'text-center py-5'>
                <div className="heading mb-5">
                    <h3>If You Allready Have An Account Please</h3>
                    <h1>Log In</h1>
                </div>
            <form onSubmit= {formHandle}>
                
                <input onBlur={handleOnBlur} className= 'p-1 w-25 mb-3' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input onBlur={handleOnBlur} className= 'p-1 w-25  mb-3' type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input className='btn btn-warning mb-3 fw-bolder' type="submit" value="Sign In" />
                <br />
            </form>
            <h5 className='text-danger my-1'>{error}</h5>
            <h6 className=' mb-4'>Create an account ? <Link to='/register'>Sign Up</Link></h6>
            <button className='btn btn-warning'  onClick={loginWithGoogle}>Google log in </button>
            </Container>
            
        </div>
    );
};

export default Login;