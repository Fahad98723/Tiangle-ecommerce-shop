import { Typography } from '@mui/material';
import React from 'react';
import TabsProducts from '../../Shared/TabsProducts/TabsProducts';

const Products = () => {
    return (
        <div>
            <Typography variant = 'h2'>
                Grab You Favorite Things
            </Typography>
            <TabsProducts></TabsProducts>
        </div>
    );
};

export default Products;