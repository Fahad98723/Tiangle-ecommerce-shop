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
    height:'500px',
    overflowY : 'scroll',
    p: 4,
  };

const QuickViewModal = ({handleOpen, handleClose, open,productId}) => {
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId])
    console.log(product);
   const dispatch = useDispatch()
   const count = useSelector((state) => state.products.count)
   const cartProduct = {...product}
   cartProduct.quantity = count
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
                <Box sx={style}>
                <Grid container sx={{alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <img style={{height:'100%', width:'500px'}} className='img-fluid' src={product.img} alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        
                        <Typography variant='h4'>{product.name}</Typography>
                        <Typography variant='h3'>${product.price}</Typography>
                        <Typography variant='body1'>{product.descriptions}</Typography>
                        <Typography variant='body2'>{product.category}</Typography>

                        <div className="d-flex justify-content-between">
                        <div className="count">
                        <i onClick={() => dispatch(productMinus(1))} className="fas fs-5 fw-bold fa-minus text-danger me-1"></i>

                        {/* <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" /> */}

                        <span className='fs-4 fw-bold mx-3'>{count}</span>

                        <i onClick={() => dispatch(productPlus(1))} className="fas fs-5 fw-bold fa-plus text-danger"></i>
                        </div>
                        <div className="cartButton">
                            <button onClick={() => dispatch(productsAddToCart(cartProduct))} className="btn btn-danger">
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