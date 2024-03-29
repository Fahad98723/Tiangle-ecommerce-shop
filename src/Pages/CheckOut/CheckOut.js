import { Container, Grid } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteFromCart } from '../redux/action/productAction';
import CheckOutForm from './CheckOutForm';

const CheckOut = () => {
    const stripePromise = loadStripe('pk_test_51JvulXJvV51rbiXLiT7KqyFzzGbKHpTris3hucBrpyZHwAkwc6igpO0DQJV5W0jMhZDZT8D8Ty9Y3QLwpJVgj4GA00sqHaRd0p');

    const cart = useSelector((state) => state.products.cart)
    const user = useSelector((state) => state.products.user)

    const [singlePayment, setSinglePayment] = useState([])
    const {id} = useParams()
    console.log(id);
    useEffect(() => {
        if(id){
            fetch(`https://triangle-ecommerce-server.onrender.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setSinglePayment(data))
        }
    },[singlePayment, id])
    console.log('single', singlePayment);
    return (
        <div>
            <Container sx={{py : 5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                   <div className="details mb-5">
                       <h4>Contact : {user.email}</h4>
                       <h4>Ship to : {cart.city ? cart.city : singlePayment.city}</h4>
                   </div>
                   <div className="payment">
                       <h2 className='mb-3'>Pay With Card</h2>
                       <h2 className='mb-5'>Total Amount : $ {cart.totalAmount ? cart.totalAmount : singlePayment.totalAmount}</h2>
                       <Elements stripe={stripePromise}>
                        <CheckOutForm singlePayment={singlePayment} cart={cart}></CheckOutForm>
                        </Elements>
                   </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Container>
                        {
                            cart.totalAmount ? <div  style={{height : '350px', overflowY : 'scroll'}}>
                            {
                                cart?.map(c => <Grid container sx={{my:2 , alignItems:'center'}}>
                                <Grid item  xs={3}>
                                    <img style={{height : '100px', width:'100%' , borderRadius : '50%' }}  src={c.img} alt="" />
                                </Grid>
                                <Grid item sx={{p:1}}  xs={9}>
                                    <div className="name d-flex justify-content-between align-content-center">
                                        <h4>{c.name}</h4>
                                        <h4>${c.price}</h4>
                                    </div>
                                    <div className="d-flex justify-content-between align-content-center">
                                    
                                        <h4>{c.quantity}</h4>
                                        <h4>{c.category}</h4>                                    
                                    </div>
                                </Grid>
                            </Grid>
                                )
                            }
                            </div> : <div  style={{height : '350px', overflowY : 'scroll'}}>
                        {
                            singlePayment.cart?.map(c => <Grid container sx={{my:2 , alignItems:'center'}}>
                            <Grid item  xs={3}>
                                <img style={{height : '100px', width:'100%' , borderRadius : '50%' }}  src={c.img} alt="" />
                            </Grid>
                            <Grid item sx={{p:1}}  xs={9}>
                                <div className="name d-flex justify-content-between align-content-center">
                                    <h4>{c.name}</h4>
                                    <h4>${c.price}</h4>
                                </div>
                                <div className="d-flex justify-content-between align-content-center">
                                
                                    <h4>{c.quantity}</h4>
                                    <h4>{c.category}</h4>                                    
                                </div>
                            </Grid>
                        </Grid>
                            )
                        }
                        </div>
                        }
                        
                        <hr />
                        <div>
                                <h2>Subtotal : $ {cart.grandTotalAmount ? cart.grandTotalAmount : singlePayment.grandTotalAmount} </h2>
                                <h2>Shipping : $ {cart?.shippingCost ? cart?.shippingCost : singlePayment.shippingCost}</h2>
                        </div>
                        <hr />
                        <div>
                            <h2>Total : $ {cart?.totalAmount ? cart?.totalAmount : singlePayment.totalAmount }</h2>
                        </div>
                    </Container>
                </Grid>
        
            </Grid>
            </Container>
        </div>
    );
};

export default CheckOut;