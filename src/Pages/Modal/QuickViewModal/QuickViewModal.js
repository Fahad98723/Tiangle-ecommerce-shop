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
import './QuickViewModal.css'


const QuickViewModal = ({handleOpen, handleClose, open,productId}) => {
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`https://arcane-earth-75147.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId])
    console.log(product);
   const dispatch = useDispatch()
   const count = useSelector((state) => state.products.count)

   const cart = useSelector(state => state.products.cart)
   const matched = cart?.find(c => c._id === product._id)
   const cartProduct = {...product}
   
   const handleAddInCart = () => {
        if(matched){
                matched.quantity = matched.quantity + count
                console.log(matched.quantity);
            }
        else{           
            cartProduct.quantity = count
            dispatch(productsAddToCart(cartProduct)) 
        }    
        handleClose()
    }
   
    return (      
        <div>
             <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box className='viewModal' md={{width: '75%'}}>
                <Grid container sx={{alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <img style={{height:'100%', width:'100%'}} className='img-fluid' src={product.img} alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        
                        <h2 style={{fontFamily: 'Poppins, sans-serif'}}>{product.name}</h2>
                        <h3 style={{fontFamily: 'Poppins, sans-serif'}}>Price : ${product.price}</h3>
                        <p style={{fontFamily: 'Poppins, sans-serif'}}>{product.descriptions}</p>
                        <div className="d-flex justify-content-between">
                        <div className="count">
                        <i onClick={() => dispatch(productMinus(1))} className="fas fs-5 fw-bold fa-minus text-danger me-1"></i>

                        {/* <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" /> */}

                        <span className='fs-4 fw-bold mx-3'>{count}</span>

                        <i onClick={() => dispatch(productPlus(1))} className="fas fs-5 fw-bold fa-plus text-danger"></i>
                        </div>
                        <div className="cartButton">
                            <button onClick={handleAddInCart} className="btn btn-danger">
                                Add To Cart
                            </button>
                        </div>
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

export default QuickViewModal;