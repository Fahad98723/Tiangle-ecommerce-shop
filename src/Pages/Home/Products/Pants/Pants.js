import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../../Hooks/useProducts';
import AddToCartModal from '../../../Modal/AddToCartModal/AddToCartModal';
import QuickViewModal from '../../../Modal/QuickViewModal/QuickViewModal';
import { productCountZero, productsAddToCart } from '../../../redux/action/productAction';
const Pants = () => {
    const {products} = useProducts()
    const [productId, setProductId] = useState('')
    const Pants = products.filter(p => p.category === 'Pant')
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
        <Container>
             <Grid container spacing={2}>
                {
                    Pants.slice(0,6).map(pant => <Grid item lg={4}>
                        <Card sx={{ maxWidth: '100%' }}>                       
                        <CardMedia onClick={() => handleClick(pant._id)}
                          component="img"
                          height="300"
                          // image={`data:image/png;base64 ,${tShirt.img}`}
                          image = {pant.img}
                          alt="T-shirt"
                        />
                        <CardContent>
                          <Typography sx={{textAlign:'left'}} variant="h5" color="text.secondary">
                          {pant.name}
                          </Typography>
                        </CardContent> 
                        <CardActions>
                        <button onClick={() => handleCartOpen(pant._id)} className='btn btn-danger' >Add To Cart <i className="ms-2 fas fa-cart-plus"></i></button>
                        
                        <button  onClick={() => handleOpen(setProductId(pant._id))} className="btn btn-success">Quick View <i className=" ms-2 fas fa-search-plus"></i> </button>
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

export default Pants;