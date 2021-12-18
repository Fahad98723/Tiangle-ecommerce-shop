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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height:'300px',
    overflowY : 'scroll',
    p: 4,
  };

const AddToCartModal = ({handleCartOpen, handleCartClose, cartOpen,productId}) => {
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId])
    console.log(product);
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
                <Box sx={style}>
                <Grid container sx={{alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <img style={{height:'100%', width:'100%'}} className='img-fluid' src={product.img} alt="" />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Typography variant='h5'>Name : {product.name}</Typography>
                        <Typography variant='h6'>Quantity : 1</Typography>
                        <Typography variant='body1'>Product Category : {product.category}</Typography>
                        <Typography variant='body2'>Cart Subtotal : {product.category}</Typography>

                        <div className="d-flex justify-content-between mt-3">
                            <button onClick={handleCartClose} className="btn btn-danger">
                                Continue Shopping
                            </button>
                            <button className="btn btn-danger">
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