import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { setUser } from '../redux/action/productAction';
import NavigationBar from '../Shared/Header/NavigationBar';

const Register = () => {
    const {googleSingIn,logOut, signUpWithEmailAndPass, error} = useFirebase()
    
    const [userDetails, setUserDetails] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const details = {...userDetails}
        details[field] = value  
        setUserDetails(details)     
    } 
    const name = userDetails.name
    const email = userDetails.email
    const password = userDetails.password
    const image = userDetails.image

    
    const formHandle = (e) => {
        e.preventDefault()
        signUpWithEmailAndPass(name, email, password, image)
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className= 'text-center py-5'>
                <div className="heading mb-5">
                    <h3>If You Are New User Here Then Please</h3>
                    <h1>Create An Account</h1>
                </div>
            <form onSubmit= {formHandle}>
                <input onBlur={handleOnBlur} className= 'w-25 p-1 mb-3' type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input onBlur={handleOnBlur} className= 'w-25 p-1 mb-3' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input onBlur={handleOnBlur} className= 'w-25 p-1 mb-3' type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input onBlur={handleOnBlur} className= 'w-25 p-1 mb-3' type="text" name="image" id="" placeholder='Your Image Link' />
                <br />
                <input className='btn btn-warning mb-3 fw-bolder' type="submit" value="Sign up" />
                <br />
            </form>
            <h5 className='text-danger my-1'>{error}</h5>
            <h6 className=' mb-2'>Already have an account ? <Link to='/login'>Login</Link></h6>
            
            </Container>
            <button onClick={googleSingIn}>Google log in </button>
        </div>
    );
};

export default Register;