import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {googleSingIn} = useFirebase()
    return (
        <div>
            <button onClick={googleSingIn}>Google log in </button>
        </div>
    );
};

export default Login;