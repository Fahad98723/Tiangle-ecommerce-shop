import { Container, Typography } from '@mui/material';
import React from 'react';
import TabsProducts from '../../Shared/TabsProducts/TabsProducts';

const Products = () => {
    return (
        <div >
            <Container sx={{py:5}}>
            <Typography  variant = 'h2'>
                Grab You Favorite Things
            </Typography>
            <TabsProducts></TabsProducts>
            </Container>
            
        </div>
    );
};

export default Products;