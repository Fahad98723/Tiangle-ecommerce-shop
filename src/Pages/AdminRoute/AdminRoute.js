import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
   const {isAdmin, isLoading} = useFirebase()
   const user = useSelector(state => state.products.user)
   let location = useLocation();
   if (isLoading) { return <Stack sx={{py:5}} alignItems="center">
   <CircularProgress />
   </Stack> }
    if(user.email && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;