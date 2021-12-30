import { Container, Typography } from '@mui/material';
import React from 'react';
import TabsProducts from '../../Shared/TabsProducts/TabsProducts';

const Products = () => {
    return (
        <div >
            <Container sx={{py:5}}>
            <div className="heading mb-5">
            <h1 className='text-center'>
                Grab You Favorite Things
            </h1>
            </div>
            <TabsProducts></TabsProducts>
            </Container>
            
        </div>
    );
};

export default Products;