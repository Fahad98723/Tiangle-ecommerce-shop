import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../../Hooks/useProducts';
import AddToCartModal from '../../../Modal/AddToCartModal/AddToCartModal';
import QuickViewModal from '../../../Modal/QuickViewModal/QuickViewModal';
import { productCountZero, productsAddToCart } from '../../../redux/action/productAction';
import NavigationBar from '../../../Shared/Header/NavigationBar';

const AllJacket = () => {
    const {products} = useProducts()
    const [productId, setProductId] = useState('')
    const Jackets = products.filter(p => p.category === 'Jacket')
    const [open, setOpen] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const cart = useSelector(state => state.products.cart)

    const handleCartOpen = (id) => {
      const recentProduct = products.find(p => p._id === id)
      const matched = cart?.find(c => c._id === recentProduct._id )
      if(matched){
        recentProduct.quantity = recentProduct.quantity + 1
        console.log(matched.quantity);
      }
      else{           
        recentProduct.quantity = 1
          dispatch(productsAddToCart(recentProduct)) 
      }   
      setProductId(id)
      setCartOpen(true)};
      const handleCartClose = () => setCartOpen(false);
      const dispatch = useDispatch()
      const handleClose = () => {
        dispatch(productCountZero(1))
        setOpen(false)};
      console.log(productId)
      let navigate = useNavigate();
      function handleClick(id) {
        navigate(`/product/${id}`);
      }
    return (
      <><NavigationBar></NavigationBar>
      <Container className='py-5'>
        {
          Object.keys(Jackets).length === 0 ? <Stack sx={{py:5}} alignItems="center">
          <CircularProgress />
          </Stack> : <Grid container spacing={2}>
              {
                  Jackets.map(jacket => <Grid item lg={4} md={6} xs={12}>
                      <Card  sx={{ maxWidth: '100%' }}>
                      
                      <CardMedia onClick={() => handleClick(jacket._id)}
                        component="img"
                        height="300"
                        // image={`data:image/png;base64 ,${tShirt.img}`}
                        image = {jacket.img}
                        alt="T-shirt"
                      />
                      <CardContent>
                        <Typography sx={{textAlign:'left'}} variant="h5" color="text.secondary">
                        {jacket.name}
                        </Typography>
                      </CardContent> 
                      <CardActions>
                      <button onClick={() => handleCartOpen(jacket._id)} className='btn btn-danger' >Add To Cart <i className="ms-2 fas fa-cart-plus"></i></button>
                      
                      <button  onClick={() => handleOpen(setProductId(jacket._id))} className="btn btn-success">Quick View <i className=" ms-2 fas fa-search-plus"></i> </button>
                      {/* <Link style={{textDecoration:'none', color:'white'}} to={`/`}  className="btn btn-success buy-btn">Buy Now <i className="ms-2 fas fa-arrow-circle-right"></i></Link> */}
                      </CardActions>                           
                    </Card>
                  </Grid>)
              }
              
          </Grid>
        }
           
          <QuickViewModal productId={productId} handleOpen={handleOpen} handleClose={handleClose} open={open}></QuickViewModal>
          <AddToCartModal productId={productId} handleCartOpen={handleCartOpen} handleCartClose={handleCartClose} cartOpen={cartOpen}>
          </AddToCartModal>
      </Container>
      </>
    );
};

export default AllJacket;