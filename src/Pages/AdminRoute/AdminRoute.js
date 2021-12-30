import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const user = useSelector(state => state.products.user);
    const admin = useSelector(state => state.products.admin);
    const {isLoading} = useFirebase()
    let location = useLocation();
    if (isLoading) { return <Stack sx={{py:5}} alignItems="center">
    <CircularProgress />
    </Stack> }
    if (admin.role) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};
export default AdminRoute;