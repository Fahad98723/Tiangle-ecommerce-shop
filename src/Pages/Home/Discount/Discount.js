import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import image3 from '../../../images/discountImage/image (3).jpg'
import image2 from '../../../images/discountImage/image (2).jpg'
import image1 from '../../../images/discountImage/image (1).jpg'
import './Discount.css'
import { Link } from 'react-router-dom';
const Discount = () => {
    const product = useProducts().products
    const fullSet = product.filter(p => p.category === 'Full Set')

    const bannerImage = {
        backgroundImage : `url('${fullSet[0]?.img}')`,
        backgroundRepeat:'no-repeat',
        backgroundSize : 'cover',
        height:'400px',
        display:'flex',
        alignItems : 'center'
    }
    return (
        <Container  sx={{py:5}}>
            <div className="heading ">
                <h1  >
                    Offer
                </h1>
                <h3 >
                    20% Discount On Our Full Set Item
                </h3>
            </div>
            <Grid container sx={{textAlign:'left', mt:5}} spacing={2}>
                <Grid style={bannerImage} item xs={12} lg={12}>
                <div className="details ms-3 text-dark">
                <h2 className='fw-bolder'>
                    New Arrivals
                </h2>
                <h3 className='fw-bolder' >
                    {fullSet[0]?.name}
                </h3>
                <Link to={`/product/${fullSet[0]?._id}`} className="btn btn-danger mt-3">Shop Now</Link>
                </div>
                </Grid>
                <Grid style={{background : `url('${fullSet[1]?.img}')`,backgroundRepeat:'no-repeat',
        backgroundSize : 'cover',
        height:'300px',
        display:'flex',
        alignItems : 'center'}} item xs={12} lg={6}>
                <div className="details ms-3 text-light">
                <h2 className='fw-bolder'>
                    New Arrivals
                </h2>
                <h3 className='fw-bolder' >
                    {fullSet[1]?.name}
                </h3>
                <Link to={`/product/${fullSet[1]?._id}`} className="btn btn-danger mt-3">Shop Now</Link>
                </div>
                </Grid>
                <Grid item style={{background : `url('${fullSet[2]?.img}')`,backgroundRepeat:'no-repeat',
        backgroundSize : 'cover',
        height:'300px',
        display:'flex',
        alignItems : 'center'}} xs={12} lg={6}>
                   <div className="details ms-3 text-dark">
                   <h2 className='fw-bolder'>
                    New Arrivals
                </h2>
                <h3 className='fw-bolder' >
                    {fullSet[2]?.name}
                </h3>
                <Link to={`/product/${fullSet[2]?._id}`} className="btn btn-danger mt-3">Shop Now</Link>
                </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Discount;