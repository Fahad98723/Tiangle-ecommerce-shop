import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../../Hooks/useProducts';
import AddToCartModal from '../../../Modal/AddToCartModal/AddToCartModal';
import QuickViewModal from '../../../Modal/QuickViewModal/QuickViewModal';
import { productCountZero } from '../../../redux/action/productAction';

const AllShirts = () => {
    const {products} = useProducts()
    const Shirts = products.filter(p => p.category === 'Shirt')
    const [open, setOpen] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleCartOpen = () => setCartOpen(true);
    const handleCartClose = () => setCartOpen(false);
    const dispatch = useDispatch()
    const handleClose = () => {
      dispatch(productCountZero(0))
      setOpen(false)};
    const [productId, setProductId] = useState('')
    console.log(productId)
    let navigate = useNavigate();
    function handleClick(id) {
      navigate(`/product/${id}`);
    }
    return (
        <Container className='py-5'>
             <Grid container spacing={2}>
                {
                    Shirts.map(shirt => <Grid item lg={4}>
                        <Card  sx={{ maxWidth: '100%' }}>
                        
                        <CardMedia onClick={() => handleClick(shirt._id)}
                          component="img"
                          height="300"
                          // image={`data:image/png;base64 ,${tShirt.img}`}
                          image = {shirt.img}
                          alt="T-shirt"
                        />
                        <CardContent>
                          <Typography sx={{textAlign:'left'}} variant="h5" color="text.secondary">
                          {shirt.name}
                          </Typography>
                        </CardContent> 
                        <CardActions>
                        <button onClick={() => handleCartOpen(setProductId(shirt._id))} className='btn btn-danger' >Add To Cart <i className="ms-2 fas fa-cart-plus"></i></button>
                        
                        <button  onClick={() => handleOpen(setProductId(shirt._id))} className="btn btn-success">Quick View <i className=" ms-2 fas fa-search-plus"></i> </button>
                        {/* <Link style={{textDecoration:'none', color:'white'}} to={`/`}  className="btn btn-success buy-btn">Buy Now <i className="ms-2 fas fa-arrow-circle-right"></i></Link> */}
                        </CardActions>                       
                      </Card>
                    </Grid>)
                }
                
            </Grid>
            <QuickViewModal productId={productId} handleOpen={handleOpen} handleClose={handleClose} open={open}></QuickViewModal>
            <AddToCartModal productId={productId} handleCartOpen={handleCartOpen} handleCartClose={handleCartClose} cartOpen={cartOpen}>
            </AddToCartModal>
        </Container>
    );
};

export default AllShirts;