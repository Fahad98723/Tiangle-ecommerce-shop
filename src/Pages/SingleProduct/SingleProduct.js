import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productCountZero, productMinus, productPlus, productsAddToCart } from '../redux/action/productAction';
import NavigationBar from '../Shared/Header/NavigationBar';
const SingleProduct = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({})
    useEffect(() => {
        fetch(`https://arcane-earth-75147.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            dispatch(productCountZero(1))
        })
    },[id])

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
    dispatch(productCountZero(1)) 
}
    return (
        <>
        <NavigationBar></NavigationBar>
        <Container className='py-5'>
            <Grid container sx={{alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} lg={7}>
                        <img style={{height:'100%'}} className='img-fluid' src={product.img} alt="" />
                    </Grid>
                    <Grid item sx={{textAlign:'left'}} xs={12} lg={5}>
                        <h1 className='mb-4' >{product.name}</h1>
                        <h4 className='mb-3' >Price : ${product.price}</h4>
                        <h5 className='mb-4' >Category : {product.category}</h5>

                        <div className="d-flex justify-content-between">
                        <div className="count">
                        <i onClick={() => dispatch(productMinus(1))} className="fas fs-5 fw-bold fa-minus text-danger me-1"></i>

                        {/* <input style={{width : '40px', fontSize:'20px'}} className= 'mb-3 py-1 rounded border-0 text-center' type="number" min='0' name="" readOnly value= {count} id="" /> */}

                        <span  className='fs-4 fw-bold mx-3'>{count}</span>

                        <i onClick={() => dispatch(productPlus(1))} className="fas fs-5 fw-bold fa-plus text-danger"></i>
                        </div>
                        <div className="cartButton">
                            <button onClick={handleAddInCart} className="btn btn-danger">
                                Add To Cart
                            </button>
                        </div>
                        
                        </div>
                        <button className="btn btn-danger w-100 mt-5 py-3">Buy It Now</button>
                        <p className='mt-5' >{product.descriptions}</p>

                        <h5 className='mt-5' variant='h6'>Availability: {!product?.stock ? 'In Stock' : 'Not In Stock'}</h5>
                        <div className='mt-3'>
                            <a target='blank' href='https://github.com/Fahad98723' className="social"><i className=" me-2 fs-1 fab fa-github-square"></i></a>
                            <a target='blank' href='https://www.linkedin.com/in/kazi-fahad-221a91211/' className="social"><i className=" me-2 fs-1 fab fa-linkedin"></i></a>
                            <a target='blank' href='https://twitter.com/Mdravi88' className="social"><i className=" me-2 fs-1 fab fa-twitter-square"></i></a>
                            <a target='blank' href='https://www.facebook.com/profile.php?id=100007037043156' className="social"><i className=" me-2 fs-1 fab fa-facebook-square"></i></a>
                            </div> 
                    </Grid>
                </Grid>
        </Container></>
    );
};

export default SingleProduct;