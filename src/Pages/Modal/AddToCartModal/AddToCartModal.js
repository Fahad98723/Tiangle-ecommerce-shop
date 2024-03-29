import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useProducts from '../../../Hooks/useProducts';
import { useDispatch, useSelector } from 'react-redux';
import { productMinus, productPlus, productPlusCount, productsAddToCart } from '../../redux/action/productAction';
import { useNavigate } from 'react-router-dom';


  
const AddToCartModal = ({handleCartOpen, handleCartClose, cartOpen,productId}) => {
    let navigate  = useNavigate()
    const proceedHandle = () => {
        navigate('/shoppingCart')
    }
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`https://triangle-ecommerce-server.onrender.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId])
   const dispatch = useDispatch()
   const count = useSelector((state) => state.products.count)
    return (      
        <div>
             <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={cartOpen}
                onClose={handleCartClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={cartOpen}>
                <Box className='viewModal' sx={{height:'300px'}}>
                <Grid container sx={{alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <img style={{height:'100%', width:'100%'}} className='img-fluid' src={product.img} alt="" />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Typography style={{fontFamily: 'Poppins, sans-serif'}} variant='h5'>Name : {product.name}</Typography>
                        <Typography style={{fontFamily: 'Poppins, sans-serif'}} variant='h6'>Quantity : 1</Typography>
                        <Typography style={{fontFamily: 'Poppins, sans-serif'}} variant='body1'>Product Category : {product.category}</Typography>
                        <Typography style={{fontFamily: 'Poppins, sans-serif'}} variant='body2'>Cart Subtotal : {product.category}</Typography>

                        <div className="d-flex justify-content-between mt-3">
                            <button onClick={handleCartClose} className="btn btn-danger m-2">
                                Continue Shopping
                            </button>
                            <button onClick={proceedHandle} className="btn btn-danger m-2">
                                Proceed To Cart
                            </button>
                        </div>
                    </Grid>
                </Grid>
                </Box>
                </Fade>
            </Modal>
            </div>
        </div>
    );
};

export default AddToCartModal;