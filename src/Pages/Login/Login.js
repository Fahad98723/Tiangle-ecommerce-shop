import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { setUser } from '../redux/action/productAction';

const Login = () => {
    const {googleSingIn,logOut, signInWithEmailAndPass, error} = useFirebase()

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


    
    const formHandle = (e) => {
        e.preventDefault()
        signInWithEmailAndPass( email, password)
    }
    return (
        <div>

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
            <button onClick={googleSingIn}>Google log in </button>
            </Container>
            
        </div>
    );
};

export default Login;